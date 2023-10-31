import {
  getRedirectResult,
  getIdToken,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { http } from '../api/instance';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type LoginResponse = {
	msg: string,
	payload: {
		name: string,
		email: string,
		new: boolean
	}
}

const Loading = () => {
  const navigate = useNavigate();
  const socialLoginCallback = async () => {
    const res = await getRedirectResult(auth);

    if (!res) {
      return;
    }

    const { user } = res;
    const accessToken = await getIdToken(user);
    localStorage.setItem('accessToken', accessToken);
    const { displayName, email, uid } = user;

    try {
      http
        .post<LoginResponse>('/api/member/login', {
          displayName,
          email,
          uid,
          messageToken: localStorage.getItem('messageToken'),
        })
        .then((res) => {
					console.log(res)
          if (res.payload.new) {
            navigate('/init');
          } else {
            navigate('/home');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socialLoginCallback();
  });

  return <>
		<img src="loading.gif" alt="loading" />
	</>;
};

export default Loading;

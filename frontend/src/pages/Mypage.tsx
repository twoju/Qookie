import styled from 'styled-components';
import QookieStatus from '../components/shared/organisms/QookieStatus';
import { useRecoilState } from 'recoil';
import { QookieInfoState } from '../modules/qookie';
import MypageList from '../components/mypage/organisms/MypageList';

export default function Mypage() {
  const [qookie, setQookie] = useRecoilState(QookieInfoState);

  return (
    <HomeContainer>
      <QookieStatus {...qookie} />
      <BottomContainer>
        <MypageList />
      </BottomContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;

const BottomContainer = styled.div`
  padding: 2.5rem 1rem 6rem 1rem;
`;

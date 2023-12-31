import styled from 'styled-components';
import { HomeIcon, CalendarIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const scrollTo = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavContainer>
      <NavItem to={'/home'} onClick={scrollTo}>
        <HomeIcon />
        <NavName>홈</NavName>
      </NavItem>
      <NavItem to={'/calendar'} onClick={scrollTo}>
        <CalendarIcon />
        <NavName>캘린더</NavName>
      </NavItem>
      <NavItem to={'/mind'} onClick={scrollTo}>
        <EnvelopeIcon />
        <NavName>마음함</NavName>
      </NavItem>
      <NavItem to={'/mypage'} onClick={scrollTo}>
        <UserIcon />
        <NavName>마이페이지</NavName>
      </NavItem>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: min(100%, 430px);
  height: 2.6rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: var(--MR_WHITE);
  box-shadow: 0px -4px 8px 0px rgba(224, 224, 224, 0.15);
  padding: 0.7rem 0 calc(env(safe-area-inset-bottom) + 0.7rem) 0;
  z-index: 5;
`;

const NavItem = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--MR_GRAY1);
  &.active {
    color: var(--MR_BLACK);
  }
  & > svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const NavName = styled.div`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  margin-top: 0.4rem;
`;

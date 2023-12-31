import styled from 'styled-components';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import bellIcon from '../../../../assets/pngs/alertBell.png';
import qoinIcon from '../../../../assets/pngs/qoin.png';
import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/Text';
import { useEffect, useState } from 'react';

export interface HeaderProps {
  page: 'home' | 'tab' | 'default';
  title?: string;
}

export default function Header({ page, title }: HeaderProps) {
  const navigate = useNavigate();
  const [isOverlay, setIsOverlay] = useState<boolean>(false);

  const movePrevPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsOverlay(true);
      } else {
        setIsOverlay(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toNotificationPage = () => {
    navigate('/notification');
  };

  const toCoinlistPage = () => {
    navigate('/qoinlist');
  };

  const headerType = (page: string) => {
    switch (page) {
      case 'home':
        return (
          <HomeContainer>
            <IconDiv src={qoinIcon} onClick={toCoinlistPage} />
            <IconDiv src={bellIcon} onClick={toNotificationPage} />
          </HomeContainer>
        );
      case 'tab':
        return (
          <TitleContainer>
            <Text typography="title" color={'var(--MR_BLACK)'}>
              {title}
            </Text>
          </TitleContainer>
        );
      default:
        return (
          <TitleContainer>
            <HeaderIcon onClick={movePrevPage}>
              <ChevronLeftIcon />
            </HeaderIcon>
          </TitleContainer>
        );
    }
  };

  return <HeaderContainer isOverlay={isOverlay}>{headerType(page)}</HeaderContainer>;
}

const HeaderContainer = styled.div<{ isOverlay: boolean }>`
  width: min(100%, 430px);
  height: 4rem;
  position: fixed;
  background-color: ${({ isOverlay }) => (isOverlay ? 'var(--MR_WHITE)' : 'transparent')};
  z-index: 5;
`;

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.75rem;
  padding: 0 1rem;
`;

const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const HeaderIcon = styled.div`
  width: 1.4rem;
  height: 1.4rem;
`;

const IconDiv = styled.img`
  height: 1.7rem;
`;

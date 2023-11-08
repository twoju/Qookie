import styled from 'styled-components';
import { QookieInfo } from '../../../../types';

export default function Qookie({ ...props }: QookieInfo) {
  return (
    <>
      {props.level > 0 && (
        <Container>
          <DoughContainer src={props.body} alt="body" />
          <EyeContainer src={props.eye} alt="eye" />
          <MouthContainer src={props.mouth} alt="mouth" />
          {props.level >= 5 && props.level < 10 && (
            <BagContainer>
              <BagImg src={props.extraBody} alt="bag" />
            </BagContainer>
          )}
          {props.hat && <HatContainer src={props.hat} alt="hat" />}
          {props.shoe && <ShoeContainer src={props.shoe} alt="shoe" />}
          {props.bottom && <BottomContainer src={props.bottom} alt="bottom" />}
          {props.top && <TopContainer src={props.top} alt="top" />}
          {props.accessories &&
            props.accessories.map((acc, index) => <AccContainer src={acc} alt="acc" />)}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  position: relative;
  transform: scale(0.4);
`;

const DoughContainer = styled.img`
  width: auto;
  height: auto;
`;

const BagContainer = styled.div`
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.4);
`;

const BagImg = styled.img``;

const EyeContainer = styled.img`
  position: absolute;
  top: 0;
  left: 62%;
  transform: translateX(-50%);
`;

const MouthContainer = styled.img`
  position: absolute;
  top: 0;
  left: 62%;
  transform: translateX(-50%);
`;

const HatContainer = styled.img`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
`;

const TopContainer = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const BottomContainer = styled.img`
  position: absolute;
  top: 100%;
  left: 43.5%;
  transform: translateX(-50%);
`;

const ShoeContainer = styled.img`
  position: absolute;
  top: 100%;
  left: 43.5%;
  transform: translateX(-50%);
`;

const AccContainer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%, -50%);
`;

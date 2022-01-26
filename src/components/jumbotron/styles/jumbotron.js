import styled from 'styled-components/macro';

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  align-items: center;
  max-width: 68.75rem;
  margin: auto;
  width: 100%;

  @media (max-width: 62.5rem) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:nth-child(3) h2 {
      margin-bottom: 50px;
    }

    ${Item}:nth-child(4) h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`;

export const Video = styled.video`
  /* width: 100%;
  height: 100%; */
  max-width: 73%;
  max-height: 71%;
  position: absolute;
  top: 12%;
  left: 13%;

  @media (max-width: 870px) {
    max-width: 54%;
    max-height: 68%;
    position: absolute;
    top: 53%;
    left: 23%;
  }
`;

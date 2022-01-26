import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 45px 0 45px;
  line-height: 60px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  margin: auto;
  font-weight: 700;

  @media (max-width: 600) {
    font-size: 35px;
  } ;
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  margin: auto;
  font-weight: normal;

  @media (max-width: 600) {
    font-size: 18px;
  } ;
`;

import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 70px 56px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  } ;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  } ;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
`;

export const Title = styled.p`
  color: #757575;
  font-size: 1rem;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  color: #757575;
  font-size: 13px;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

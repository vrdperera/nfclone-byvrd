import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 45px;
  /* max-width: 815px; */
  margin-inline: auto;
`;
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0px;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Item = styled.div`
  width: 810.75px;
  max-width: 900px;
  margin-bottom: 10px;
  color: white;

  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    max-width: 400px;
    margin-inline: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  /* width: 735px; */
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    width: 400px;
    margin-inline: auto;
  }
`;

export const Body = styled.div`
  /* width: 735px; */
  max-height: 1200px;
  transition: max-height 1.25s cubic-bezier(0.5, 0, 0.1, 1);
  background-color: #303030;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  margin-bottom: 10px;
  padding: 1.2em 2.2em 1.2em 1.2em;
  /* padding: 1.2em; */
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

// export const Frame = styled.div`
//   margin-bottom: 40px;
// `;

import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  width: 725px;
  margin-inline: auto;

  @media (max-width: 600px) {
    margin-inline: auto;
    display: flex;
    align-items: center;
    max-width: 400px;
  } ;
`;

export const Input = styled.input`
  min-width: 444px;
  width: 60%;
  border: 0;
  padding: 0 0.6rem;
  /* height: 50px; */
  box-sizing: content-box;
  outline: none;

  @media (max-width: 600px) {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    /* margin: 0 auto; */
    min-width: 100%;
    padding: 1rem 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  /* height: 70px; */
  align-items: center;
  min-width: 200px;
  width: 36%;
  padding: 1.2rem 1em;
  text-transform: uppercase;
  background-color: #e50914;
  color: #fff;

  border: none;
  cursor: pointer;
  font-size: 26px;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: 0.1px;
  user-select: none;
  text-align: center;

  @media (max-width: 600px) {
    padding: 1rem 1rem;
    font-size: 15px;
    margin-top: 20px;
    font-weight: bold;
    min-width: 170px;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 16px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.h3`
  max-width: none;
  font-size: 1.2rem;
  text-align: center;
  padding: 2% 5%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
  font-weight: 400;
  color: white;

  /* @media (max-width: 600px) {
    width: 16px;
    font-size: 1rem;
    line-height: 22px;
  } */

  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    max-width: none;
    padding-bottom: 20px;
    font-size: 1.2rem;
  }
`;

import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  max-width: 450px;
  padding: 60px 68px 0px;
`;
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
export const FormError = styled.div`
  background-color: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
`;
export const Text = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  line-height: normal;
  color: #8c8c8c;

  a {
    margin-left: 7px;
  }
`;
export const TextSmall = styled.p`
  margin-top: 11px;
  font-size: 13px;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const Input = styled.input`
  background-color: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;
export const Submit = styled.button`
  background-color: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  cursor: pointer;
  color: white;

  &:disabled {
    opacity: 0.5;
  }
`;

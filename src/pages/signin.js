import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
//COMPONENTS
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import { Form } from '../components';

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const isInValid = emailAddress === '' || password === '';

  const handleSignIn = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error && <Form.FormError>{error} </Form.FormError>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            ></Form.Input>

            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>

            <Form.Submit disabled={isInValid} type="submit">
              Sign in
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?
            <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer></FooterContainer>
    </>
  );
}

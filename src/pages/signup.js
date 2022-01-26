import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
//COMPONENTS
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import { Form } from '../components';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInValid = firstName === '' || emailAddress === '' || password === '';

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((userCredential) => {
        userCredential.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.FormError>{error}</Form.FormError>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              value={firstName}
              type="text"
              placeholder="First name"
              method="POST"
              onChange={({ target }) => setFirstName(target.value)}
            ></Form.Input>

            <Form.Input
              value={emailAddress}
              type="text"
              placeholder="Email address"
              onChange={({ target }) => setEmailAddress(target.value)}
            ></Form.Input>

            <Form.Input
              value={password}
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>

            <Form.Submit disable={isInValid} type="submit">
              Sign up
            </Form.Submit>

            <Form.Text>
              Already auser ? <Form.Link to="/signin">Sign in now</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}

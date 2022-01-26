import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>

      {/* <Header.Frame>
        <Header.Title></Header.Title>
        <Header.SubTitle></Header.SubTitle>
      </Header.Frame> */}
      {children}
    </Header>
  );
}

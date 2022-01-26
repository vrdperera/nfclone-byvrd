import * as ROUTES from './constants/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();

  return (
    <>
      <Router>
        <IsUserRedirect
          user={user}
          exat
          path={ROUTES.SIGN_IN}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          exat
          path={ROUTES.SIGN_UP}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signup />
        </IsUserRedirect>

        <ProtectedRoute user={user} exat path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          user={user}
          exact
          path={ROUTES.HOME}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home />
        </IsUserRedirect>
      </Router>
    </>
  );
}

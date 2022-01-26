import { Route, Redirect } from 'react-router';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        (!user && children) ||
        (user ? <Redirect to={{ pathname: loggedInPath }} /> : null)
      }
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (user && children) ||
        (!user ? (
          <Redirect to={{ pathname: 'signin', state: { from: location } }} />
        ) : null)
      }
    />
  );
}

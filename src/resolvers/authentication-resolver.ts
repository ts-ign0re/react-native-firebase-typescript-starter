import * as React from 'react';
import auth from '@react-native-firebase/auth';

interface ReturningProps {
  authenticated: boolean;
}

interface AuthenticationResolver {
  children: (props: ReturningProps) => React.FC;
}

const AuthenticationResolver = ({ children }: AuthenticationResolver): React.FC => {
  const [authenticated, setAuthenticatedStatus] = React.useState(false);
  React.useEffect((): void => {
    setAuthenticatedStatus(true);
    auth().onAuthStateChanged((user) => {
      setAuthenticatedStatus(Boolean(user));
    });
  }, []);
  return children({ authenticated });
};

export default AuthenticationResolver;

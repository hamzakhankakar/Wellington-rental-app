// PrivateRoute.js
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, currentUser, loading, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <div>Loading...</div>
      ) : currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
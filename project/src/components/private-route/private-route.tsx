import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import * as React from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => (
  props.authorizationStatus === AuthorizationStatus.Auth
    ? props.children
    : <Navigate to={AppRoute.SignIn} />
);

export default PrivateRoute;

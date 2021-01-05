import React from 'react';
import { RouteProps as ReactDomRouteProps, Route as ReactDomRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } =  useAuth()

  const handleRoute = () => {
    if (isPrivate === !!user) {
      return <Component />
    } else {
      const pathname = isPrivate ? 'singin' : 'dashboard'

      return <Redirect to={{ pathname }} />
    }
  }

  return (
    <ReactDomRoute {...rest} render={handleRoute} />
  );
}

export default Route;
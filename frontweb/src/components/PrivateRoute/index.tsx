import { Redirect, Route } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated, Role } from 'util/auth';
 
type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};
 
const PrivateRoute = ({ children, path }: Props) => {
 
  return (
    
    <Route
      path={path}
      render={({location}) =>
      !isAuthenticated() ? (<Redirect to={{
        pathname:"/admin/auth/login",
        state: { from: location}
        }} />
      ):
        !hasAnyRoles(['ROLE_ADMIN']) ? (
          <Redirect to ="/admin/products"/>
        ):(
          <>
           {children}
           </>
        )
      }
    />
  );
};
 
export default PrivateRoute;

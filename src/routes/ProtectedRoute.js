import React from "react";
import { Navigate} from "react-router-dom";

// export default function ProtectedRoute({ component: Component, ...restOfProps }) {
//   const isAuthenticated = localStorage.getItem("user");
//   console.log("this", isAuthenticated);

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
//       }
//     />
//   );
// }
export default function PrivateRoute({ children }) {
    const auth = localStorage.getItem("user");
    return auth ? children : <Navigate to="/signup" />;
  }

// const ProtectedRoute = ({
//     redirectPath = '/signup',
//     user,
//     children
//   }) => {
//     if (!user) {
//       return <Navigate to={redirectPath} replace />;
//     }
//     return children ? children : <Outlet />;
//   };
//   export default ProtectedRoute;

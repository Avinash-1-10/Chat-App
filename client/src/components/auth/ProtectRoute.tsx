import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectRouteProps {
  children?: ReactNode;
  user: boolean;
  redirect?: string;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({
  children,
  user,
  redirect = "/login",
}) => {
  if (!user) {
    return <Navigate to={redirect} replace />;
  }
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectRoute;

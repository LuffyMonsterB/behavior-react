import { Navigate, Outlet } from "umi";

export default (props: any) => {
  const isLogin = localStorage.getItem("token");
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

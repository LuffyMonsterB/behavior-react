import { Navigate, Outlet } from "umi";

export default (props: any) => {
  const isLogin = localStorage.getItem("token");
  if (isLogin) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

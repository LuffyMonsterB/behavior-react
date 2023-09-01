import { useStore } from "@/stores";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { loginStore } = useStore();
  let navigate = useNavigate();
  loginStore.logout();
  const handleLogoutBtnClick = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p></p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <Button onClick={handleLogoutBtnClick}>登出</Button>
    </div>
  );
}

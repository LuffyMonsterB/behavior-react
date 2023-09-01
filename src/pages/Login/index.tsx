import { AccountIcon, PasswordIcon, RoleIcon } from "@/components/icons";
import { Button, Card, Form, Input, Select } from "antd";
import "./index.less";
import { useStore } from "@/stores";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Login = () => {
  const { loginStore } = useStore();
  let navigate = useNavigate();
  type FieldType = {
    role?: string;
    account?: string;
    password?: string;
  };

  const handleLoginBtnClick = (values: any) => {
    const res = loginStore.login(values);
    if (res) {
      navigate("/first-hop", { replace: true });
    }
  };

  return (
    <div className="flex justify-center">
      <video className="w-full -z-10 fixed" autoPlay loop muted>
        <source src="/images/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Card className="login-panel">
        <div className="text-xl m-b-2">
          <b>管理平台</b>
        </div>
        <Form onFinish={handleLoginBtnClick} requiredMark={false}>
          <Form.Item<FieldType>
            name="role"
            rules={[{ required: true, message: "请选择您的角色！" }]}
          >
            <Select
              className="input-basic"
              size="large"
              placeholder={
                <div className="flex items-center">
                  <RoleIcon />
                  <div className="m-l-1">请选择角色，默认选择管理员</div>
                </div>
              }
              options={[
                { value: "user", label: "用户" },
                { value: "admin", label: "管理员" },
              ]}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="account"
            rules={[{ required: true, message: "请输入您的账号！" }]}
          >
            <Input
              className="input-basic"
              size="large"
              prefix={<AccountIcon />}
              placeholder="请输入账号，默认账号admin"
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "请输入您的密码！" }]}
          >
            <Input.Password
              className="input-basic"
              size="large"
              prefix={<PasswordIcon />}
              placeholder="请输入密码，默认密码123456"
            />
          </Form.Item>

          <Form.Item className="flex justify-center">
            <Button className="login-btn" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default observer(Login);

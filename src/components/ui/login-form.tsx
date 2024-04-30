import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Button } from "antd";

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1  bg-gray-50 px-6 pb-4 pt-8">
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 text-xs font-medium text-gray-900 flex justify-start items-center gap-3"
              htmlFor="email">
              <span>Email</span>
              <span className=" text-red-500">Email is Require</span>
            </label>
            <Input
              name="email"
              status="error"
              size="large"
              placeholder="Enter your email address"
              prefix={<UserOutlined />}
            />
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 text-xs font-medium text-gray-900 flex justify-start items-center gap-3"
              htmlFor="password">
              <span>Password</span>
              <span className=" text-red-500">Password is Require</span>
            </label>

            <Input
              status="error"
              name="password"
              type="password"
              size="large"
              placeholder="input password"
              prefix={<KeyOutlined />}
            />
          </div>
        </div>
        <div className="mt-4 w-full">
          <Button size="large" type="primary" block>
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}

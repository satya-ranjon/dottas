"use client";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button, Form, FormProps } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  email?: string;
  password?: string;
};

export default function LoginForm() {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    router.push("/dashboard/projects");
  };

  return (
    <Form onFinish={onFinish} className="space-y-3" layout="vertical">
      <div className="flex-1  bg-gray-50 px-6 pb-4 pt-8">
        <div className="w-full">
          <Form.Item<FieldType>
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}>
            <Input
              size="large"
              placeholder="Enter your email address"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                type: "string",
                min: 4,
                message: "Password must be at least 4 characters long!",
              },
            ]}>
            <Input.Password
              type="password"
              size="large"
              placeholder="Enter your email address"
              prefix={<UserOutlined />}
            />
          </Form.Item>
        </div>
        <div className="mt-4 w-full">
          <Button htmlType="submit" size="large" type="primary" block>
            Login
          </Button>
        </div>
      </div>
    </Form>
  );
}

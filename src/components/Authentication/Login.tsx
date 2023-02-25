import React from "react";
import styles from "./Login.module.scss";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.parentContainer}>
      <h1>Welcome to NirNayaaK</h1>
      <h3>Login into your account by entering your credentials</h3>

      <div className={styles.loginForm}>
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          style={{
            width: "500px",
            marginLeft: "0",
            justifyContent: "flex-start",
          }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            labelAlign="left"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            labelAlign="left"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <p>
        don't have an account? <span style={{color : "rgb(125, 189, 246)"}}>
          Register Here
        </span>
      </p>
    </div>
  );
};

export default Login;

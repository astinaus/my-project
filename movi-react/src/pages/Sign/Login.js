import AuthForm from "components/layouts/Join/AuthForm";
import AuthLayout from "components/layouts/Join/AuthLayout";
import React from "react";

const Login = () => {
  return (
    <AuthLayout>
      <AuthForm type="login" />
    </AuthLayout>
  );
};

export default Login;

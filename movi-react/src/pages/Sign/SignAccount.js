import React from "react";
import AuthLayout from "components/layouts/Join/AuthLayout";
import AuthForm from "components/layouts/Join/AuthForm";

const SignAccount = () => {
  return (
    <AuthLayout>
      <AuthForm type="register" />
    </AuthLayout>
  );
};

export default SignAccount;

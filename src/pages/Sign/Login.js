import AuthForm from "components/auth/AuthForm";
import AuthLayout from "components/auth/AuthLayout";
import { Main } from "pages/Movies/MoviesElements";
import React from "react";

const Login = () => {
  return (
    <Main>
      <AuthLayout>
        <AuthForm type='login' />
      </AuthLayout>
    </Main>
  );
};

export default Login;

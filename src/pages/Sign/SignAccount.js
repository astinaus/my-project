import { Main } from "pages/Movies/MoviesElements";
import React from "react";
import AuthLayout from "components/auth/AuthLayout";
import AuthForm from "components/auth/AuthForm";

const SignAccount = () => {
  return (
    <Main>
      <AuthLayout>
        <AuthForm type='register'/>
      </AuthLayout>
    </Main>
  );
};

export default SignAccount;

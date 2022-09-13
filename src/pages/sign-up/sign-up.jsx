import React from "react";

import SignUpForm from "components/SignUpForm/SignUpForm";
import Footer from "components/Footer/Footer";

import "./sign-up.css";

function SignUp() {
  return (
    <>
      <main className="sign-up-block">
        <div className="sign-up-wrapper">
          <SignUpForm defaultRole="brand" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SignUp;

import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "us-east-1_mJyE9xidu",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "5n5c7opn5io4rkm9r79v9pj2b6",
    },
  },
});

const formFields = {
  signUp: {
    username: {
      order: 1,
      placeholder: "Choose a username",
      label: "Username",
      inputProps: { required: true },
    },
    email: {
      order: 1,
      placeholder: "Enter your email address",
      label: "Email",
      inputProps: { type: "email", required: true },
    },
    password: {
      order: 3,
      placeholder: "Enter your password",
      label: "Password",
      inputProps: { type: "password", required: true },
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirm your password",
      label: "Confirm Password",
      inputProps: { type: "password", required: true },
    },
  },
};

const AuthProvider = ({ children }: any) => {
  return (
    <Authenticator formFields={formFields}>
      {({ user }: any) =>
        user ? (
          // When user is logged in, don't apply the flexbox layout
          <div>{children}</div>
        ) : (
          // Use Tailwind CSS to center the login form
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="mb-4 text-2xl font-bold">TaskBridge</h1>
            <p className="mb-6 text-lg">
              Please sign in or create an account to view the application
            </p>
          </div>
        )
      }
    </Authenticator>
  );
};

export default AuthProvider;

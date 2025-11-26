import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebaseutils";

const signinHandler = async () => {
  const response = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentFromAuth(response.user);
  console.log(userDocRef);
};

function SignIn() {
  return (
    <div>
      SignIn
      <button onClick={signinHandler}>Google</button>
    </div>
  );
}

export default SignIn;



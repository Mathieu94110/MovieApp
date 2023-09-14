"use client";

import React from "react";
import styles from "./SignIn.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome {session.user?.email}</p>
        <button onClick={() => signOut()}>Déconnection</button>
      </div>
    );
  } else {
    return (
      <div className={styles.signIn}>
        <div className={styles.signInForm}>
          <h1 className={styles.title}>Connection</h1>
          <div className={styles.gSignInWrapper} onClick={() => signIn()}>
            <span className={styles.label}>Se connecter avec</span>
            <div className={styles.customBtn}>
              <span className={styles.icon}></span>
              <span className={styles.buttonText}>Google</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignIn;

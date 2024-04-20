"use client";
import { signIn, useSession } from "next-auth/react";
import { FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./SignUpForm.module.scss";

const SignupForm = () => {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/user/profile" as any);
        }
    }, [status, router]);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password"),
            }),
        }).then((response) => {
            if (response.ok) {
                signIn();
            }
        });
    };

    return (
        <div className={styles.signupForm}>
            <form onSubmit={handleFormSubmit}>
                <h1>Inscription</h1>
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="******" />
                <input type="submit" value="S'inscrire" />
            </form>
        </div>
    );
};

export default SignupForm;


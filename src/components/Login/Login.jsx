import { useState } from "react";
import { useMutation} from "@tanstack/react-query";
import { login } from '../../api.jsx';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const mutation = useMutation(login, {
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            alert("Login successful!");
        },
        onError: (error) => {
            alert(error.message);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ email, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
};

export default Login;
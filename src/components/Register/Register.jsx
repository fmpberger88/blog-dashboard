import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import { register } from "../../api.jsx";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const mutation = useMutation(register, {
        onSuccess: () => {
            alert("Successfully registered!");
        },
        onError: (error) => {
            alert('Registration failed!');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ username, email, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <ipnut type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? "Loading..." : "Register"}
            </button>
        </form>
    );
};

export default Register;
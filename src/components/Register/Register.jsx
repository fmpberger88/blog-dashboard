import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import { register } from "../../api.jsx";
import { Link, useNavigate } from "react-router-dom";
import {
    StyledForm
} from "../../styles.jsx";


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: register,
        onSuccess: () => {
            alert("Successfully registered!");
            navigate('/login')
        },
        onError: (error) => {
            alert(error.message);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ username, email, password });
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? "Loading..." : "Register"}
            </button>
            <p>Already an Account? Go to <Link to='/login'>Login</Link></p>
        </StyledForm>
    );
};

export default Register;
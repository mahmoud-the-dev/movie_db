import React, { useState } from "react";
import API from "../API";
import { useNavigate, Link } from "react-router-dom";
// import { Context } from "../context";
import { Wrapper, Content, Home } from "./Login.styles";
import Button from "./Button";
// import Home from "./Home";

const Login = ({ authenticate, user }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    // eslint-disable-next-line no-unused-vars
    // const [user, setUser] = useContext(Context);
    const navigate = useNavigate();

    if (user) {
        return (
            <Home>
                <h1>
                    <Link to="/"> Home</Link>
                </h1>
            </Home>
        );
    }

    const handleInput = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
    };
    const handleSubmit = async (e) => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            );
            // if (sessionId) {

            const data = { sessionId: sessionId.session_id, username };
            await authenticate(data);
            sessionStorage.setItem("user", JSON.stringify(data));
            console.log("user authenticated");

            navigate("/");
            // }
        } catch (err) {
            console.log("0000", err);
            setError(true);
        }
    };

    return (
        <Wrapper>
            <Content>
                {error && <div className="error"> There was an error !</div>}
                <label htmlFor="">Username</label>
                <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={handleInput}
                />

                <label htmlFor="">Password</label>

                <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={handleInput}
                />
                <Button text="Login" execute={handleSubmit} />
            </Content>
        </Wrapper>
    );
};
export default Login;

import React from "react";

import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, TMDBLogoImg, LogoImg } from "./Header.style";

const Header = ({ user, setUser }) => {
    const logout = () => {
        sessionStorage.removeItem("user");
        setUser(undefined);
        console.log("logged out", user);
    };

    return (
        <Wrapper>
            <Content>
                <span>
                    <Link to="/">
                        <LogoImg src={RMDBLogo} alt="rmdb_logo" />
                    </Link>
                    <span>|</span>
                    {user ? (
                        <Link to="/login" className="link" onClick={logout}>
                            <span>Logout</span>
                        </Link>
                    ) : (
                        <Link to="/login" className="link">
                            <span>Login</span>
                        </Link>
                    )}
                </span>

                <TMDBLogoImg src={TMDBLogo} alt="tmdb_logo" />
            </Content>
        </Wrapper>
    );
};

export default Header;

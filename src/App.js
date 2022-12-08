import GlobalStyle from "./globalStyle";
import Header from "./components/Header/";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";
import Login from "./components/Login";
import UserProvider from "./context";
import { useState } from "react";
import { isPersistedState } from "./helpers";
const App = () => {
    const [user, setUser] = useState(isPersistedState("user"));

    // useEffect(() => {
    //     setUser(isPersistedState("user"));
    //     console.log("session added");
    // }, [user]);

    return (
        <BrowserRouter className="App">
            <UserProvider>
                <Header user={user} setUser={setUser} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/login"
                        element={<Login authenticate={setUser} user={user} />}
                    />
                    <Route path="/:movieId" element={<Movie user={user} />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <GlobalStyle />
            </UserProvider>
        </BrowserRouter>
    );
};

export default App;

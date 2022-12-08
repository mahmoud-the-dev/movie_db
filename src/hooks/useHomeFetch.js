import { useState, useEffect } from "react";
// API
import API from "../API";
import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async (searchTerm = "", page) => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState((prev) => ({
                ...movies,
                results:
                    page > 1
                        ? [...prev.results, ...movies.results]
                        : [...movies.results],
            }));
        } catch (error) {
            setError(true);
            console.log(error.message);
        }
        setLoading(false);
    };
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState("homeState");
            if (sessionState) {
                setState(sessionState);
                return;
            }
        }
        setState(initialState);
        fetchMovies(searchTerm, 1);
    }, [searchTerm]);

    // load more
    useEffect(() => {
        if (!isLoading) {
            return 0;
        }
        fetchMovies(searchTerm, state.page + 1);
        setIsLoading(false);
    }, [isLoading, state.page, searchTerm]);

    // add session
    useEffect(() => {
        if (!searchTerm)
            sessionStorage.setItem("homeState", JSON.stringify(state));
    }, [searchTerm, state]);

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoading };
};

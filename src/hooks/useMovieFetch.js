import { useState, useEffect } from "react";

import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(false);
                setLoading(true);
                setError(false);
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                // get directors
                const directors = credits.crew.filter(
                    (member) => member.job.toLowerCase() === "director"
                );

                await setState({ ...movie, actors: credits.cast, directors });
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log("EE", error.message);
            }
        };

        const sessionState = isPersistedState(movieId);

        if (sessionState) {
            try {
                setError(false);
                setState(sessionState);
                console.log("Grabbed from the session");
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }

            return;
        }

        console.log("Grabbed from the API");
        fetchData();
    }, [movieId]);

    // add movie session
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);

    return { state, loading, error };
};

// config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
// Component
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//images
import NoImage from "../images/no_image.jpg";

const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoading,
    } = useHomeFetch();

    if (error) {
        return <div>something went wrong ...</div>;
    }

    return (
        <>
            {!searchTerm && state.results[0] && (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            )}
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? "Search results" : "Popular movies"}>
                {state.results.map((movie) => (
                    <Thumb
                        key={movie.id}
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL +
                                  POSTER_SIZE +
                                  movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                        clickable
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text="load more" execute={() => setIsLoading(true)} />
            )}
        </>
    );
};

export default Home;

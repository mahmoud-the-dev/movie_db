import React from "react";
import API from "../../API";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import Thumb from "../Thumb";
import Rate from "../Rate";

const MovieInfo = ({ movie, user }) => {
    const sendRate = async (value) => {
        const rate = await API.rateMovie(user.sessionId, movie.id, value);
        if (rate.success) {
            console.log("your rate has been send");
        } else console.log("sorry some error accrued");
    };

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                    }
                    clickable={false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            {console.log("7777777777", movie.directors)}
                            <h3>DIRECTOR{movie.directors.length > 1 && "S"}</h3>

                            {movie.directors.map((director) => (
                                <p key={movie.directors.credit_id}>
                                    {director.name}
                                </p>
                            ))}
                        </div>
                    </div>

                    {user && (
                        <div>
                            <p>Rate Movie</p>
                            <Rate sendRate={sendRate} />
                        </div>
                    )}
                </Text>
            </Content>
        </Wrapper>
    );
};

export default MovieInfo;

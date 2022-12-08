import React from "react";
import { Image } from "./Thumb.style";
import { Link } from "react-router-dom";

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt={"movie_thump"} />
            </Link>
        ) : (
            <Image src={image} alt={"movie_thump"} />
        )}
    </div>
);

export default Thumb;

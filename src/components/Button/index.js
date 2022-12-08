import React from "react";
import { Wrapper } from "./button.styles";

const Button = ({ text, execute }) => (
    <Wrapper onClick={execute}>{text}</Wrapper>
);

export default Button;

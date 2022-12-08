import React from "react";
import { Wrapper, Content, Text } from "./HeroImage.style";

const HeroImage = ({ image, title, text }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>
                    {text.slice(0, 400) === text
                        ? text
                        : text.slice(0, 400) + "..."}
                </p>
            </Text>
        </Content>
    </Wrapper>
);
export default HeroImage;

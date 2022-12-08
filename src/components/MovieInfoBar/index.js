import React from "react";
import { Wrapper, Content } from "./MovieInfoBar.styles";
import { calcTime, convertMoney } from "../../helpers";
const MovieInfoBar = ({ time, revenue, budget }) => (
    <>
        <Wrapper>
            <Content>
                <div className="column">
                    <p>Time: {calcTime(time)}</p>
                </div>
                <div className="column">
                    <p>Budget: {convertMoney(budget)}</p>
                </div>
                <div className="column">
                    <p>Revenue: {convertMoney(revenue)}</p>
                </div>
            </Content>
        </Wrapper>
    </>
);

export default MovieInfoBar;

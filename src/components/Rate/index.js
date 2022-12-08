import React, { useState } from "react";
import { Wrapper } from "./Rate.style";
const Rate = ({ sendRate }) => {
    const [value, setValue] = useState(5);

    return (
        <Wrapper>
            <input
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
            {value}
            <p>
                <button onClick={() => sendRate(value)}>Rate</button>
            </p>
        </Wrapper>
    );
};
export default Rate;

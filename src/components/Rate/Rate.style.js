import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 0.5em;
    align-items: center;
    p {
        button {
            background: var(--white);
            border: none;
            cursor: pointer;
            font-size: var(--fontSmall);
            padding: 0 0.5em;
            border-radius: 0.2em;
            transition: all 0.3s;
            margin-left: 1em;
            :focus {
                background: black;
                border: 1px solid white;
                color: white;
            }
            :hover {
                opacity: 0.8;
            }
        }
    }
`;

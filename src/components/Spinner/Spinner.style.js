import styled from "styled-components";

export const Spinner = styled.div`
    border: 5px solid var(--lightGray);
    border-top: 5px solid var(--darkGray);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 20px auto;
    animation: spin 0.8s linear infinite;
    @keyframes identifier {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

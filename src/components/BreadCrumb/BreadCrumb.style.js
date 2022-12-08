import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGray);
    color: var(--white);
    height: 70px;
    width: 100%;
`;
export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    span {
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;
        @media (max-width: 785px) {
            font-size: var(--fontSmall);
        }
    }
`;

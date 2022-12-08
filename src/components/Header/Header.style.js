import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--darkGray);
    padding: 0 20px;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;

    span {
        display: flex;
        align-items: center;
        gap: 2em;
        @media (max-width: 768px) {
            gap: 0.5em;
        }
        span {
            color: white;
            user-select: none;
        }
    }

    .link {
        transition: all 0.5s;
        /* padding: 0 20px; */
        color: white;
        text-decoration: none;
        :hover {
            opacity: 0.8;
        }
    }
`;
export const LogoImg = styled.img`
    width: 200px;
    @media (max-width: 500px) {
        width: 150px;
    }
`;
export const TMDBLogoImg = styled.img`
    width: 100px;
    @media (max-width: 500px) {
        width: 80px;
    }
`;

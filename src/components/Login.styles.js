import styled from "styled-components";

export const Home = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;

    a {
        max-width: 200px;
        background: var(--darkGray);
        padding: 100px;
        border-radius: 20px;
        text-decoration: none;
        font-size: var(--fontSuperBig);
        color: white;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    box-shadow: 5px 5px 10px 0px rgb(0, 0, 0, 0.1);

    color: var(--darkGray);
    padding: 50px 80px;

    background: #eee;
    border-radius: 20px;

    input {
        width: 100%;
        height: 30px;
        border-radius: 20px;
        border: 1px solid var(--darkGray);
        margin: 10px 0;
        padding: 10px;
        :focus {
            outline: none;
            border: 2px solid var(--darkGray);
        }
    }

    .error {
        color: red;
        margin-bottom: 20px;
    }
`;

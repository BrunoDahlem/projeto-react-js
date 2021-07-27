import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    border: 2px solid crimson;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    background: #fff;
    @media (max-width:991px){
        flex-direction: column;
    }
`;
export const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 50%;
    p {
        margin: 10px 0 0 0;
    }
    @media (max-width:991px){
        max-width: 90%;
    }
`;
export const ContainerImg = styled.div`
    width: 40%;
`;
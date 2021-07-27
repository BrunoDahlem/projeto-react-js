import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.div`
    background: #333;
    display: flex;
    justify-content: space-between;
`;

export const ContainerPesquisa = styled.form`
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BarraPesquisa = styled(Input)`
    width: 30%;
    height: 40px;
    border:2px solid crimson ;
    border-radius: 10px;
    padding: 0 10px;
`;

export const BtnPesquisa = styled(Button)`
    background: crimson;
    height: 40px;
    width: 40px;
    border: 2px solid #333;
    border-radius: 10px;
    margin: 0 0 0 20px;
    cursor: pointer;
    padding: 5px;
`;

export const ContainerFilmes = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const BtnPages = styled(Button)`
    padding: 10px 20px;
    margin: 12px;
    background: crimson;
    color: #fff;
    border: 2px solid #000;
    border-radius: 10px;
`;

export const ContainerPages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
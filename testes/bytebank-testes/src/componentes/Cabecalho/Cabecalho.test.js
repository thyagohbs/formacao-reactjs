import {render,screen} from '@testing-library/react'
import Cabecalho from './index';

test("Deve renderizar o nome do usúario logado",()=>{
    /*const numero = 10;

    expect(numero).toBe(10);*/
    render(<Cabecalho/>)

    const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
    expect(nomeUsuario).toBeInTheDocument();
})
import { render,screen } from "@testing-library/react";
import Menu from './index';

test('Deve renderizar um link para a página inicial',()=>{
    render(<Menu/>);

    const linkPaginaInicial = screen.getByText('Inicial');
    expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de link',()=>{
    render(<Menu/>);

    // getAllByRole = Retorna um array
    const listaDeLinks = screen.getAllByRole('link')
    expect(listaDeLinks).toHaveLength(4);
});

test('Não deve renderizar o link para Extrato',()=>{
    render(<Menu/>);

    // queryByText = Verifica se o elemento existe
    const linkExtrato = screen.queryByText('Extrato');
    expect(linkExtrato).not.toBeInTheDocument();
});


test('Deve renderizar uma lista de links com a classe link',()=>{
    render(<Menu/>);

    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'))
})

// Snapshot do código(teste com modo visual)
test('Deve renderizar uma lista de links com a classe link e mostrar visualmente',()=>{
    render(<Menu/>);

    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'))
    expect(links).toMatchSnapshot();
})



import { calculaNovoSaldo } from './index';

describe('Quando eu realizo uma transação', () => {
  test('Que é um depósito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(150);
  });

  test('Que é uma transferência', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(50);
  });
});

test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  const saldo = 100;

  const novoSaldo = calculaRendimento(saldo);

  expect(novoSaldo).toBe(100.5); // toBe = ele seja
  expect(calculaRendimento).toBeCalled(); // verifica se a função foi realmente chamada
  expect(calculaRendimento).toHaveBeenCalledWith(saldo); // verifica se a função chamada com o 'saldo'
});

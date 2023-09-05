export interface IColaborador {
  nome: string;
  cargo: string;
  imagem: string;
  time?: string; // '?' = significa que este atribuido pode ser opcional
  data: string;
}

import PostModelo from 'componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'
import styles from './SobreMim.module.css'


export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou Antônio!
      </h3>

      <img
        src={fotoSobreMim}
        alt='Foto do Antônio'
        className={styles.fotoSobreMim}
      />
      
      <p className={styles.paragrafo}>
        O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
      </p>

      <p className={styles.paragrafo}>
        O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.
      </p>

      <p className={styles.paragrafo}>
        Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
      </p>

    </PostModelo>
  )
}

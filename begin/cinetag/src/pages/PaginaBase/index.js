import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favorito";
import { Outlet } from "react-router-dom";

function PaginaBase(){
    return (
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    {/* 
                        O Outlet permite que a gente crie uma rota pai e 
                        ele vai ser todas as rotas filhas que será encaixada
                        dentro dessa rota pai!
                    */}
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;
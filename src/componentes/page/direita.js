import Styles from './css/direita.module.css';
import perfil from '../imgs/icone.jpg'
import Pessoa from './perfil';

function Direita() {
  return (
    <main>
            <div className={Styles.meio}>

            </div>

        <div className={Styles.direita}>
            <div className={Styles.pessoas}>
                <div className={Styles.dirdir}>
                    <img src={perfil}/>

                    <div className={Styles.nomes}>
                        <h3>
                            morira_art
                        </h3>
                        <p>
                            Mori_nian
                        </p>
                    </div>
                </div>


                <a>Mudar</a>
            </div>

            <div className={Styles.voce}>
                <h4>Sugestões para você</h4>
                <h6>Ver tudo</h6>
            </div>


            <div className={Styles.sugestao}>

                <Pessoa 
                icone={perfil}
                nome="morira_art"
                nome2="Mori_nian"
                />
                <Pessoa 
                icone={perfil}
                nome="morira_art"
                nome2="Mori_nian"
                />
                <Pessoa 
                icone={perfil}
                nome="morira_art"
                nome2="Mori_nian"
                />


            </div>

            <footer>
                <p>Sobre · Ajuda · Imprensa · API · Carreiras · Privacidade · Termos · Localizações · Idioma · Meta Verified</p>

                <p className={Styles.pm}>© 2023 INSTAGRAM FROM META</p>
            </footer>
        </div>
    </main>
  );
}

export default Direita;

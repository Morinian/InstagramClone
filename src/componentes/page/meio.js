import Styles from './css/meio.module.css';
import perfil from '../imgs/icone.jpg'
import Post from './post'; 

import angpost from '../imgs/post_Angulo.jpg'

function Meio() {
  return (
    <div className={Styles.container}>
        <ul>
            <li>
                <div className={Styles.stories}>
                    <div className={Styles.photo}>
                        <img src={perfil} />
                        <a>morira_art</a>
                    </div>
                </div>
                <div className={Styles.stories}>
                    <div className={Styles.photo}>
                        <img src={perfil} />
                        <a>morira_art</a>
                    </div>
                </div>
                <div className={Styles.stories}>
                    <div className={Styles.photo}>
                        <img src={perfil} />
                        <a>morira_art</a>
                    </div>
                </div>
                <div className={Styles.stories}>
                    <div className={Styles.photo}>
                        <img src={perfil} />
                        <a>morira_art</a>
                    </div>
                </div>
                <div className={Styles.stories}>
                    <div className={Styles.photo}>
                        <img src={perfil} />
                        <a>morira_art</a>
                    </div>
                </div>
                <div className={Styles.stories}>
                    <div className={Styles.photo}>
                        <img src={perfil} />
                        <a>morira_art</a>
                    </div>
                </div>
                <div className={Styles.stories}>
                    <div className={Styles.photo}>
                        <img src={perfil} />
                        <a>morira_art</a>
                    </div>
                </div>
                <div className={Styles.stories}>
                    <div className={Styles.photo}>
                        <img src={perfil} />
                        <a>morira_art</a>
                    </div>
                </div>
            </li>
        </ul>

        <div className={Styles.rosa}>
            <Post
            perfil="angulodevista"
            descr="ESTAREI NA CCXP! MESA I 05-06
            Reviravolta de última hora! Graças a @harpercollinsbrasil eu estarei na CCXP desse ano "
            curtida="450"
            poster={angpost}
            />
            <Post
            perfil="angulodevista"
            descr="ESTAREI NA CCXP! MESA I 05-06
            Reviravolta de última hora! Graças a @harpercollinsbrasil eu estarei na CCXP desse ano "
            curtida="450"
            poster={angpost}
            />
            <Post
            perfil="angulodevista"
            descr="ESTAREI NA CCXP! MESA I 05-06
            Reviravolta de última hora! Graças a @harpercollinsbrasil eu estarei na CCXP desse ano "
            curtida="450"
            poster={angpost}
            />
        </div>


    </div>
  );
}

export default Meio;

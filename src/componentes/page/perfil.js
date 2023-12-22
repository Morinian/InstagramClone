import Styles from './css/pessoa.module.css';
import perfil from '../imgs/icone.jpg'

function Pessoa ({icone, nome, nome2}) {
  return (
    <div className={Styles.pessoas}>
          <div className={Styles.dirdir}>
          
           <img src={icone}/>

         <div className={Styles.nomes}>
            <h3>
             {nome}
            </h3>
            <p>
              {nome2}
            </p>
          </div>
        </div>


      <a>Seguir</a>
      
    </div>
  );
}

export default Pessoa;

import React, { useState } from 'react'
import styles from '../styles/music.module.css'
import Img1 from '../assets/img-music/flor-de-jamaica.jpg'
import Img2 from '../assets/img-music/laura-perez.jpg'
import Img3 from '../assets/img-music/pedrina.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { routes } from '../routes'
import { Link } from 'react-router-dom'

const Music = () => {

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  return (
    <section className={styles.containerCardMusic}>

      <div className={styles.introduction}>
        <h2>Líricas; Lirios; Secretos</h2>
        <p>
        Porque no es suficiente con un puñado de letras revueltas, <br />
        porque no me complace, ni termino de mostrarte mi cielo estrellado, <br />
        inmenso, indomable. Tu mi bóveda celeste, <br />
        dueño de mi tierra, <br />
        creas imperioso un valle que es tuyo, <br />
        cada letra muestra mi devoción, mi anhelo, mi vulnerabilidad. <br />
        En mi busqueda, encuentro formas de empaparte con mi amor. <br />
        </p>
      </div>
      <div className={`${styles.cardMusic} ${state1 ? styles.transition : ''}`}
        onMouseEnter={() => setState1(true)}
        onMouseLeave={() => setState1(false)}
      >
        <img src={Img1} alt="flor-de-jamaica.jpg" />
        <hr></hr>
        <a href="https://open.spotify.com/track/58s4Lbsh8MBAFoJ7Aeaex8?si=f248128883de4967" target="_blank">
          <FontAwesomeIcon icon={faPlay} />
          <h2>Quisiera</h2>
          <p>Flor de Jamaica</p>
        </a>
      </div>


      <div className={`${styles.cardMusic} ${state2 ? styles.transition : ''}`}
        onMouseEnter={() => setState2(true)}
        onMouseLeave={() => setState2(false)}
      >
        <img src={Img2} alt="laura-perez.jpg" />
        <hr></hr>
        <a href="https://open.spotify.com/track/6cPJMRN4WJcwgmBDOXhA2R?si=25f4786653c4441d" target="_blank">
          <FontAwesomeIcon icon={faPlay} />
          <h2>Vuela</h2>
          <p>Laura Pérez</p>
        </a>
      </div>


      <div className={`${styles.cardMusic} ${state3 ? styles.transition : ''}`}
        onMouseEnter={() => setState3(true)}
        onMouseLeave={() => setState3(false)}
      >
        <img src={Img3} alt="laura-perez.jpg" />
        <hr></hr>
        <a href="https://open.spotify.com/track/6k5Uw5voRigE3TnKILTU7C?si=da012161295d41e5" target="_blank">
          <FontAwesomeIcon icon={faPlay} />
          <h2>Inevitable</h2>
          <p>Pedrina</p>
        </a>
      </div>
      <Link to={routes.letters}>
      <button>
      <FontAwesomeIcon icon={faChevronRight} />
      </button>
      </Link>
    </section>
  );
}

export default Music
import React, { useEffect } from 'react'
import styles from '../styles/reminders.module.css'
import { useGlobalStates } from '../context/Context'
import ImgRm1 from '../assets/img-reminders/joy.jpg'
import ImgRm2 from '../assets/img-reminders/rose.jpg'
import ImgRm3 from '../assets/img-reminders/jaehyun01.jpg'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Reminders = () => {

  const {
    isOpen1,
    handleOpenModal1,
    handleCloseModal1,

    isOpen2,
    handleOpenModal2,
    handleCloseModal2,

    isOpen3,
    handleOpenModal3,
    handleCloseModal3
  }

    = useGlobalStates();

  useEffect(() => {
    const handleCloseModalOutsideClick = (e) => {
      if ((isOpen1 || isOpen2 || isOpen3) && e.target.classList.contains(styles.modalContainer)) {
        handleCloseModal1();
        handleCloseModal2();
        handleCloseModal3();
      }
    };

    document.addEventListener('click', handleCloseModalOutsideClick);

    return () => {
      document.removeEventListener('click', handleCloseModalOutsideClick);
    };
  }, [
    isOpen1,
    isOpen2,
    isOpen3,
    handleCloseModal1,
    handleCloseModal2,
    handleCloseModal3
  ]);


  return (
    <div>
      <div className={styles.title}>
        <h2>Recuerdos en el tiempo, <br />
          un trozo de cada cumpleaños
        </h2>
      </div>

      <div className={styles.remindersContainer}>

        <section className={styles.reminderCard}>
          <h2>O1</h2>
          <p>Puedes recordar <br></br>
            el 220421
          </p>

          <section className='button'>
            <button onClick={handleOpenModal1}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              one
            </button>

            {isOpen1 && (
              <div className={styles.modalContainer}>
                <div className={styles.modalContent}>
                  <div className={styles.modalImgContainer}>
                    <img src={ImgRm1} alt="reminder-joy" />
                  </div>
                  <p>¿Recuerdas cada foto que he usado?</p>
                  <hr />
                  <p>Como me gustaría haber guardado cada recuerdo,
                    poder verlo, no sé si he podido olvidar alguna
                    parte más, pero es lo más vívido que tengo.
                    Gracias por aparecer en mi vida, por aquellos
                    meses (aún recuerdo el post) habernos conocido,
                    que me hayas respondido aquella historia de astrología,
                    muchacho de mis ojos</p>

                  <button onClick={handleCloseModal1}>Cerrar</button>
                </div>
              </div>

            )}

          </section>
        </section>

        <section className={styles.reminderCard}>
          <h2>O2</h2>
          <p>¿Recuerdas el <br></br>
            220422?
          </p>
          <section className='button'>
            <button onClick={handleOpenModal2}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              two
            </button>

            {isOpen2 && (
              <div className={styles.modalContainer}>
                <div className={styles.modalContent}>
                  <div className={styles.modalImgContainer}>
                    <img src={ImgRm2} alt="reminder-rose" />
                  </div>
                  <p>Este era un video pero...</p>
                  <hr />
                  <p>Aún me da un poco de risa recordar
                    este día, pero el contexto no era muy gracioso...
                    aún recuerdo que quería hacerte algo, las cosas
                    no se dieron. Terminó siendo un mamarracho
                    (cosa mal hecha) Espero estar remediándolo
                    en esta bobadita, jeje.</p>
                  <button onClick={handleCloseModal2}>Cerrar</button>
                </div>
              </div>
            )}

          </section>
        </section>


        <section className={styles.reminderCard}>
          <h2>O3</h2>
          <p>Ya son casi 5 <br></br>
            años (a medias)
          </p>
          <section className='button'>
            <button onClick={handleOpenModal3}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              three
            </button>

            {isOpen3 && (
              <div className={styles.modalContainer}>
                <div className={styles.modalContent}>
                  <div className={styles.modalImgContainer}>
                    <img src={ImgRm3} alt="reminder-jaheyun" />
                  </div>
                  <p>Guía a ti</p>
                  <hr />
                  <p>Estoy tan feliz de estar contigo, de que existas,
                    de que vivas, que sonrías. Me vas a alegrar
                    eternamente, no hay forma de agradecerlo,
                    tu recuerdo siempre vivirá conmigo, siempre,
                    siempre, siempre vas a ser el dueño de mi corazón.
                    De mi alegría, y todo de mi, mi bello caballero.
                  </p>
                  <button onClick={handleCloseModal3}>Cerrar</button>
                </div>
              </div>
            )}

          </section>
        </section>

      </div>

      <div id={styles.buttonIdRem}>
        <Link to={routes.music}>
          <button>
          <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Reminders
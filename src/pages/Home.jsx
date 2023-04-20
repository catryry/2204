import React, { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import ImgHome from "../assets/img-home/jaehyun.jpg";
import { routes } from "../routes"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ReactConfetti from 'react-confetti';

const Home = () => {

  const [windowDimension, setDimension] = useState ({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const detectSize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  useEffect(()=>{
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, [])

  const [time, setTime] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTime(false)
    }, 9000)

    return () => clearTimeout(timeOut)
  }, [])

  const [animate, setAnimate] = useState(false);

  return (
    <div>
      
      {time && <ReactConfetti 
      run={time}
      width={windowDimension.width}
      height={windowDimension.height}
      colors={['#cb9bde', '#e75515', '#ff7987' ,'#3b83bd', '#0a1172', '#78288c', '#fada28']}
      />}
        
   
    <div className={styles.home}>
      

      <h2 className={styles.title}>
        Feliz día <br></br>
        ─ mi zorrito <br />
        mi Salem
      </h2>
      <div className={styles.date}>
      <p>Schedule</p>
      <p className={styles.line}></p>
      <div className={styles.dateChilds}>
      <p>Date</p>
      <p>22-04</p>
      </div>
      </div>
      <br />
      <section className={`${styles.banner} ${animate ? styles.transition : ''}`}
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}>
        <div className={styles.bannerImg}>
          <img src={ImgHome} alt="home-jaehyun" />
        </div>
     
        <div className={styles.bk}>
        </div>
      </section>
      <br />
      <section className={styles.introduction}>
        <p>
          Sabrás de secretos, proyectos que son regalos (jeje),
          detalles. De planeaciones y gustos que le doy
          a mi chico favorito en el mundo; mi novio, mi
          mejor amigo, mi esposo, mi compañero, mi alma gemela,
          mi mejor complemento, mi dupla perfecta. Mereces mucho más.
        </p>
      </section>

      <section id={styles.buttonHome}>
        <Link to={routes.reminders}>
          <button>
          <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </Link>
      </section>

    </div>
    </div>
  );
};

export default Home;

import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import SceneCard from "../../Models/SceneCard/SceneCard";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.main}>
      <Canvas
        className={styles.webgl}
        camera={{
          fov: 64,
          position: [0, 0, 20],
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight color="purple" position={[0, 0, 15]} intensity={1} />
        <OrbitControls enableZoom={false} />

        <SceneCard position={[-12, -11, 0]} rotation={[-1, 1, 0.5]} />
      </Canvas>
      <div className={styles.couverture}>
        <img
          className={styles.background}
          src="./images/background.jpg"
          alt=""
        />
        <h1>Welcome to FlexBank, your financial partner for life</h1>
        <h2>
          Easy, secure, and convenient banking solutions for all your needs
        </h2>
        <Link to="/" className={styles.learn__more}>
          Learn More
        </Link>
      </div>

      <div className={styles.informations}>
        <h3>Features</h3>

        <div className={styles.features}>
          <div className={styles.access}>
            <img src="./images/earth.png" alt="" />
            <div className={styles.text}>
              <h4>Seamless Mobile Banking</h4>
              <p>
                Access your account and manage your finances anytime, anywhere
                with our mobile app.
              </p>
              <Link to="/">See more</Link>
            </div>
          </div>

          <div className={styles.bottom_container}>
            <div className={styles.variety}>
              <h4>A wide variety</h4>
              <p>
                Choose from a variety of deposit options to suit your needs,
                including mobile check deposit and online transfers.
              </p>
              <Link to="/">See more</Link>
              <img className={styles.money} src="./images/money.png" alt="" />
            </div>

            <div className={styles.advice}>
              <h4>Financial advice</h4>
              <p>
                Get expert financial advice and support from our team of
                professionals to help you reach your goals.
              </p>
              <Link to="/">See more</Link>
              <img className={styles.help} src="./images/help.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.security}>
        <h3>Your security is our top priority</h3>

        <p>
          We use the latest technology to keep your money and personal
          information safe
        </p>
        <p>
          At FlexBank, we take your security seriously. We use advanced security
          measures to protect your money and personal information from
          unauthorized access
        </p>

        <div className={styles.security__container}>
          <img className={styles.cadena} src="./images/cadenas.png" alt="" />
          <h5>
            At FlexBank, we take your security seriously. We use advanced
            security measures to protect your money and personal information
            from unauthorized access.
          </h5>
          <Link to="/">See more</Link>
        </div>
      </div>

      <div className={styles.partners}>
        <h3>All our partners</h3>
        <div className={styles.container__partners}>
          <div className={styles.item}>
            <img src="./images/cic.png" alt="" />
          </div>

          <div className={styles.item}>
            <img src="./images/ca.svg.png" alt="" />
          </div>

          <div className={styles.item}>
            <img src="./images/sg.png" alt="" />
          </div>

          <div className={styles.item}>
            <img src="./images/bnp.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

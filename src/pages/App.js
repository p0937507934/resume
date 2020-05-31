import React from "react";
import styles from "./App.module.scss";
import { Link, Route, withRouter, useLocation } from "react-router-dom";
import { HomePage } from "./HomePage/index";
import { WorkPage } from "./WorkPage/index";
import { WorkPageDetail } from "./WorkPageDetail/index";

function App() {
  const location = useLocation();
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.box}>
          <Link to="/">
            <div className={styles.boxleft}>Resume</div>
          </Link>

          <div className={styles.boxright}>
            <Link to="/">
              <p className={location.pathname === "/" ? styles.selected : null}>
                Home
              </p>
            </Link>
            <Link to="works">
              <p
                className={
                  location.pathname === "/works" ? styles.selected : null
                }
              >
                Works
              </p>
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/works" exact component={WorkPage}></Route>
        <Route path="/works/:id" exact component={WorkPageDetail}></Route>
      </section>

      <footer className={styles.footer}>
        <p>
          <b>Created in 2020</b>
        </p>
      </footer>
    </div>
  );
}

export default App;

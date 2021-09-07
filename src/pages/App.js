import React from "react";
import styles from "./App.module.scss";
import { Link, Route, withRouter, useLocation,BrowserRouter } from "react-router-dom";
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
              <p className={location.pathname === "/resume" ? styles.selected : null}>
                Home
              </p>
            </Link>
            <Link to="works">
              <p
                className={
                  location.pathname === "/resume/works" ? styles.selected : null
                }
              >
                Q&A
              </p>
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        {/* <BrowserRouter basename="/resume"> */}
        <Route path="/resume" exact component={HomePage}></Route>
        <Route path="/resume/works" exact component={WorkPage}></Route>
        {/* <Route path="/works/:id" exact component={WorkPageDetail}></Route> */}
        {/* </BrowserRouter> */}

        
      </section>

      <footer className={styles.footer}>
        <p>
          <b>Created in 2021/09/07</b>
        </p>
      </footer>
    </div>
  );
}

export default App;

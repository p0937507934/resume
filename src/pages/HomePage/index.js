import React, { Component } from "react";
import styles from "./Home.module.scss";
import WorkLists from "../../components/WorkLists";
import worksData from "../works.json";

export const HomePage = () => {
  const Q_A = {
    display:"flex",
    alignItem:"center",
    justifyContent:"center",
    fontSize:"32px"
  }
  const section_style = {
    color:"#faa"
  }
  return (
    <div className={styles.wrap}>
      <section className={styles.brief}>
        <img alt="avatar" src={require("../../assets/images/avatar.jpg")}></img>
        <h2>
          <strong>徐仕勳</strong>
        </h2>
        <ul>
          <li>後端</li>
          <li>前端</li>
          <li>Devops</li>
        </ul>
        
      </section>

      <section className={styles.work}>
        <div className={styles.title}>
          <h3>Skills</h3>
        </div>
        <WorkLists dataSource={worksData.data} />
      </section>

      <div style={Q_A}>
        <a style={section_style} href="/resume/works">
          點擊前往報名Q&A
        </a>
      </div>
    </div>
  );
};

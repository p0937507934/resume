import React, { Component } from "react";
import styles from "./Home.module.scss";
import WorkLists from "../../components/WorkLists";
import worksData from "../works.json";


export const HomePage = () => {
  return (
    <div className={styles.wrap}>
      <section className={styles.brief}>
        <img
          width="600"
          height="600"
          alt="avatar"
          src={require("../../assets/images/GT.jpg")}
        ></img>
        <h2>
          <strong>綠茶 徐</strong>
        </h2>
        <ul>
          <li>吃</li>
          <li>散步</li>
          <li>睡</li>
        </ul>
        <p>今年10幾歲</p>
        <p>專長解決廚餘</p>
        <p>專長討拍</p>
      </section>

      <section className={styles.work}>
        <div className={styles.title}>
          <h3>工作區域</h3>
          <p>你可以找到更多</p>
        </div>
        <WorkLists dataSource={worksData.data}/>
      </section>
    </div>
  );
};

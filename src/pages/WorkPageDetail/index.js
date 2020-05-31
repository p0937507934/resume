import React, { Component } from "react";
import styles from "./Detail.module.scss";

export const WorkPageDetail = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.title}>
          <h1>超級吃貨123456546465</h1>
          <p>2020-06-01</p>
        </div>
        <section className={styles.content}>
          <p>不管有多少雞胸肉我都吃掉</p>
        </section>
      </div>
    </div>
  );
};

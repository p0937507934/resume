import React from "react";
import styles from "./work.module.scss";
import { Link } from "react-router-dom";

export default ({ dataSource }) => {
  return (
    <div className={styles.worklist}>
      <ul>
        {dataSource &&
          dataSource.map((item) => (
            <li key={item.id}>
              <Link to={`/works`}>
                <div className={styles.cover}>
                  <img alt="cover" src={item.cover}></img>
                </div>
                <div className={styles.workbrief}>
                  <h3>{item.title}</h3>
                  <p>{item.brief}</p>
                  <div className={styles.tag}>
                    {item.tag && item.tag.map((i) => <span key={i}>{i}</span>)}
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

import React from "react";
import styles from "./works.module.scss";
import WorkLists from "../../components/WorkLists";
import datas from "../works.json";
export const WorkPage = () => {

  const p_style = {
    margin: "20px",
    fontSize: "22px",
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h3>Q&A</h3>
        <p>1.兩百字內的個人簡介</p>
        <p style={p_style}>
          您好，我叫徐仕勳，於八月畢業於雲林科技大學資工碩士班。
          對於程式開發、後端領域非常有興趣及熱忱，平時使用Node.js開發，包括使用Express.js及Koa.js，也正學習使用Golang開發後端，對後端領域有基本的了解，在前端領域也對React有基本的認識及開發，更能懂得如何與前端溝通串接API，
          產學合作使用Django，Flask，進行開發也得到了廠商的回饋成功結案。
          希望藉由此次可以更多的對軟體開發領域有更深的理解。
        </p>
        <p>2.對於人易科技的了解</p>
        <p style={p_style}>
          目前所知，人易科技有推出一個人資系統，廣受歡迎，母公司為岱鐠科技。目前正在尋找製作ERP系統的Golang人才。
        </p>
        <p>3.為什麼想成為工程師</p>
        <p style={p_style}>
          目前正專注在軟體開發，對後端領域非常有興趣，想持續學習精進，掌握更多的技能樹及對技術有更深的理解來成為
          有能力的工程師。
        </p>
        <p>4. 為了成為工程師，曾經做過什麼努力？</p>
        <p style={p_style}>
          就讀了資訊工程研究所，這兩年期間，從一個對軟體開發毫無概念的學生，慢慢成為會寫API，期間也完成了三個產學專案，並持續觀看線上課程
          、官方文件以及技術文章，獲取不同的知識，持續學習。
        </p>
        <p>5.對於工程師的職業想像是什麼</p>
        <p style={p_style}>
          持續學習新技術，對於產品持續開發及維護解決遇到的問題，薪資水準也不錯。
        </p>
        <p>6.如果參與這個計畫，會怎麼安排學習時間</p>
        <p style={p_style}>
          在每天空閒時間抽4~5小時，假日FullTime學習，根據不同的需求，增減時間。
        </p>
        <p>7.如果參與這個計畫，預期會碰到什麼困難？你打算怎麼解決它？</p>
        <p style={p_style}>
          預期會需要有學習Golang的基本撞牆期， 以及關係型資料庫的設計問題，
          透過持續學習以及搜尋解決問題的方案來解決。
        </p>
        <p>8.想要對我們說的事情？</p>
        <p style={p_style}>
          希望透過這個活動，可以讓我學習更多Golang及後端開發相關知識，若學習中或學習後，有達到標準，
          也能夠進一步有參與ERP開發的機會。
        </p>
      </div>
    </div>
  );
};

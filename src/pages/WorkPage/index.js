import React from 'react'
import styles from './works.module.scss'
import WorkLists from '../../components/WorkLists'
import datas from '../works.json'
export  const WorkPage = () =>{
    return <div className={styles.wrap}>
        <div className={styles.title}>
            <h3>工作內容</h3>
            <p>全部工作內容區域</p>
        </div>

        <WorkLists dataSource={datas.data}/>

    </div>
}
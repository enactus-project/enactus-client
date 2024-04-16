import { Progress } from 'antd'
import styles from './heading.module.css'
import { HeadingTypes } from './heading.types'

const Heading = (({student}: HeadingTypes) => { 
    return (
        <div className={styles.wrapper}>    
            <div className={styles.user_nfo}>
                <div className={styles.image_container}>
                    <img className={styles.profile_photo} alt="profile" src="/nuris.jpeg" width={230} height={240}/>
                </div>
                <div className={styles.info}>
                    <span className={styles.name}>{student?.name} {student?.surname}</span>
                    <span className={styles.grade}>{student?.grade}</span>
                    <span>{student?.id}</span>
                </div>
            </div>
            <div className={styles.analytics}>
                <div className={styles.progress}>
                    <span>Успеваемость</span>
                    <Progress type="circle" percent={66}  strokeColor="orange"/>
                </div>
                <div className={styles.progress}>
                    <span>Ментальное состояние</span>
                    <Progress type="circle" percent={50} strokeColor="red" />
                </div>
                <div className={styles.progress}>
                    <span>Общее состояние</span>
                    <Progress type="circle" percent={55} strokeColor="red" />
                </div>
               
                
            </div>
        </div>
    )
})

export default Heading
import React from 'react'
import styles from './Footer.module.scss'

export const Footer:React.FC = ():React.JSX.Element => {
  return (
    <footer className={styles.footer}>
        <div className={styles.menu}>
            <div className={`${styles.items} ${styles.container}`}>
                <div className={styles.item}>
                    <a className={styles.logo} href="/ru/">IBP.biz</a>
                    <div className={styles.platform} >Платформа для бизнеса</div>
                    <div className={styles.elem}>ИНН 7017330440</div>
                    <a href="tel:88006005831" className={styles.link}>8 (800) 600-58-31</a>
                    <a href="mailto:info@supl.biz" className={styles.link}>info@supl.biz</a>
                </div>

                <div className={styles.item}>
                    <a className={styles.first} href="/ru/">Начать работать</a>
                    <a href='#' className={styles.link} >Заказы</a>
                    <a href='#' className={styles.link}>Товары</a>
                    <a href="tel:88006005831" className={styles.link}>Цены на тарифы</a>
                    <a href="mailto:info@supl.biz" className={styles.link}>Поставщики</a>
                </div>

                <div className={styles.item}>
                    <a className={styles.first} href="#">Блог</a>
                    <a href='#' className={styles.link} >О нас</a>
                    <a href='#' className={styles.link}>Реквизиты</a>
                    <a href="tel:88006005831" className={styles.link}>СМИ о нас</a>
                    <a href="mailto:info@supl.biz" className={styles.link}>Условия использования</a>
                </div>

                <div className={styles.item}>
                    <a className={styles.first} href="/ru/">Разместить товар</a>
                    <a href='#' className={styles.link} >Купить баннер</a>
                    <a href='#' className={styles.link}>Франшиза</a>
                    <a href="tel:88006005831" className={styles.link}>Бонусы от партнеров</a>
            
                </div>

            </div>
        </div>
    </footer>   
  )
}

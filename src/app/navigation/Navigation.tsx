'use client'
import React, { useState } from 'react';
import styles from "./Navigation.module.scss";

const Select = ({text,options}:{text: string, options: string[]}) => {
    const [hover,setHover] = useState(false)
    return (
        <div onMouseEnter={()=> setHover(true)} onMouseLeave={() =>  setHover(false)} className={styles.menu_item_d}>
        {text}
        <div className={styles.dropdown}>
            {
                options.map(item=>(
                    <div className={styles.dropdown_menu} key={item}>{item}</div>
                ))           
            }
        </div>
        </div>
    )
}
const Navigation = () => {
  return (
    <div className={styles.header}>
      <header className={styles.page_header}>
        
        <div className={styles.icon}>
            <a className={styles.link} href="/ru/">
                <span className={styles.first}>Supl</span>
                <span className={styles.second}>.biz</span>
            </a>
        </div>
        <nav className={styles.item_nav}>
            <div className={styles.nav}>
                <a href="#" className={styles.menu_item}>Все заказы</a>
            </div>
            <div className={styles.nav}>
                <a href="#" className={styles.menu_item}>Мои заказы</a>
            </div>
            <div className={styles.nav}>
                <a href="#" className={styles.menu_item}>Товары</a>
            </div>
            <div className={styles.nav}>
                <a href="#" className={styles.menu_item}>Цены на тарифы</a>
            </div>
            <div className={styles.nav}>
                <a href="#" className={`${styles.menu_item} ${styles.activeMenu}`}>О платформе</a>
            </div>
        <Select text='Еще' options={['Блог','Реквизиты']}/>
 

        <div className={styles.header_info}>
            <span className={styles.info}>
                <span className={styles.blog_phone}>
                    <a href="" className={styles.item_phone}>+12345678</a>
                </span>
                <span className={styles.info}>звонок бесплатный</span>
            </span>
        </div>

        <div className={styles.auth}>
            <span>
                <button className={styles.register}>Регистрация</button>
                <button className={styles.login}>Логин</button>
            </span>
        </div>

        </nav>
        
      </header>
    </div>
  );
};

export default Navigation;

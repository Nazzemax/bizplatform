import React from 'react';
import styles from "./Navigation.module.scss"

const Navigation = () => {
  return (
    <div className={styles.header}>
    <header className={styles.page_header}>
        
        <div className={styles.icon}>
            <button>Supl.biz</button>
        </div>
        <nav className={styles.item_nav}>
    <div className={styles.nav}>
        <a href="" className= {styles.menu_item}>Все заказы</a>
    </div>
    <div className={styles.nav}>
        <a href="" className= {styles.menu_item}>Мои заказы</a>
    </div>
    <div className={styles.nav}>
        <a href="" className= {styles.menu_item}>Товары</a>
    </div>
    <div className={styles.nav}>
        <a href="" className= {styles.menu_item}>Цены на тарифы</a>
    </div>
    <div className={styles.nav}>
        <a href="" className= {styles.menu_item_d}>Еще</a>
    </div>
    </nav>
    <div className={styles.header_info}>
        <span className={styles.info}>
            <span className={styles.blog_phone}>
                <a href="" className={styles.item_phone}>+12345678</a>
            </span>
            <span className={styles.info}>звонок бесплатный</span>
        </span>
    </div>
    </header>
    </div>
  );
};

export default Navigation;
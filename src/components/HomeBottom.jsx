import React from 'react';
import styles from "./styles/home.module.css";
import Cards from "./ui/Cards";

const HomeBottom = () => {
    return (
        <div className={styles.projectsContainer}>
            <Cards/>
        </div>
    );
};

export default HomeBottom;
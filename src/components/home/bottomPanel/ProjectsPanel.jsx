import React from 'react';
import styles from "./bottomPanel.module.css";
import Cards from "./Cards";

const ProjectsPanel = () => {
    return (
        <div className={styles.projectsContainer}>
            <Cards/>
        </div>
    );
};

export default ProjectsPanel;
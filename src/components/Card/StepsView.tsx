import styles from "./styles.module.css";
const StepsView = () => {
    return (
        <div className={styles.contentSteps}>
            <span className={styles.stepSelected}></span>
            <span className={styles.step}></span>
            <span className={styles.step}></span>
        </div>
    )
}

export default StepsView
import styles from "./styles.module.css";
const ChangeStep = ({children = 'Next' , action = () => {}}) => {

    return (
        <button className={styles.btnAction} onClick={action}>
            {children}
        </button>
    )
}

export default ChangeStep
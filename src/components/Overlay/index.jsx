import styles from './styles.module.scss';

const Overlay = ({ displayItem, closeHandler }) => {
    return (
        <div className={displayItem ? styles.open : styles.container}>
            <div className={styles.header}>
                <h3>Result</h3>
                <h2 className={styles.close} onClick={closeHandler}>x</h2>
            </div>
            <div className={styles.imageContainer}>
                <img src={displayItem?.download_url} className={styles.image} />
            </div>
            <p>Image by: {displayItem?.author}</p>
        </div>
    )
}

export default Overlay;
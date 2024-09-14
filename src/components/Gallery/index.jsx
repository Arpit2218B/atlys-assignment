import styles from '../Results/styles.module.scss';

const Gallery = ({ data, clickHandler }) => {
    const handleSelected = (item) => {
        clickHandler(item);
    }

    return <div className={styles.cards}>
        {data?.map(d => (
            <div className={styles.imageCard} key={d?.id} onClick={() => handleSelected(d)}>
                <img src={d?.download_url} />
                <p>{d.author}</p>
            </div>
        ))}
    </div>;
}

export default Gallery;
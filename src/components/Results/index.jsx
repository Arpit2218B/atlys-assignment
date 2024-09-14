import LoadMore from '../LoadMore';
import useInfiniteGetQuery from '../../hooks/useInfiniteGetQuery';
import styles from './styles.module.scss';
import Overlay from '../Overlay';
import { useState } from 'react';
import Gallery from '../Gallery';

const Results = () => {
    const {
        data, fetchData, loadingInitial, error, isFetchingNextPage, hasNextPage, fetchNextPage,
    } = useInfiniteGetQuery(`https://picsum.photos/v2/list?limit=20`, {
        getNextPageParam: (results, currentPage) => results.length <= 20 ? currentPage + 1 : false
    });

    const [displayItem, setDisplayItem] = useState();

    return (
        <div className={styles.container}>
            { loadingInitial && (<span>Loading...</span>)}
            { !loadingInitial && (
                <div className={styles.results}>
                    <Gallery data={data} clickHandler={setDisplayItem} />
                    {/* <Gallery images={data} onClick={(item) => handleSelected(data[item])} margin={6} /> */}
                    <LoadMore 
                        fetchNextPage={fetchNextPage} 
                        hasNextPage={hasNextPage} 
                        isFetchingNextPage={isFetchingNextPage}
                    />
                </div>
            )}
            <Overlay displayItem={displayItem} closeHandler={() => setDisplayItem()} />
        </div>
    )
}

export default Results;

import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';
import { useEffect } from 'react';

const LoadMore = ({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
}) =>{
        const { ref, inView } = useInView();
        
        useEffect(() => {
            if (inView && hasNextPage) {
              fetchNextPage();
            }
          }, [inView, hasNextPage]);

        return(
            <div className={styles.container}>
                  <button
                    ref={ref}
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                    className={styles.loadMore}
                  >
                    {isFetchingNextPage
                      ? 'Loading more...'
                      : hasNextPage
                      ? 'Load Newer'
                      : ''}
                  </button>
                </div>
        );
}

export default LoadMore;
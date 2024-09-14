import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';

interface PaginationProps {
  totalPages: number;
}

const itemsPerPageOptions = [7, 15, 30];

const Pagination = ({ totalPages }: PaginationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 7

  const handlePageChange = (page: number) => {
    setSearchParams({ ...Object.fromEntries([...searchParams]), page: String(page) });
  };

  const handleItemsPerPageChange = (itemPerPage: number) => {
    setSearchParams({ ...Object.fromEntries([...searchParams]), itemsPerPage: String(itemPerPage) });
  };

  const handleVisiblePageNumbers = () => {
    let lastVisiblePage = 4;
    const gapBetweenPages = 2

    if (page + gapBetweenPages >= totalPages) {
      lastVisiblePage = totalPages - 1
    } else if (page > gapBetweenPages) {
      lastVisiblePage = page + gapBetweenPages
    }

    return { firstVisiblePage: lastVisiblePage - 3, lastVisiblePage }
  }

  const renderPage = () => {
    const result: ReactNode[] = []

    const { firstVisiblePage, lastVisiblePage } = handleVisiblePageNumbers()

    for (let index = firstVisiblePage; index <= lastVisiblePage; index++) {
      result.push(
        <button
          key={index}
          aria-selected={page === index}
          onClick={() => handlePageChange(index)}
        >
          {index}
        </button>
      )
    }
    return result
  }

  return (
    <footer className={styles.container}>
      <div>
        <span>Page {page} of {totalPages}</span>
      </div>
      <div>
        <button
          disabled={page === 1}
          aria-label="First page"
          onClick={() => handlePageChange(1)}
          className={styles.iconButton}
        >
          <ChevronsLeft />
        </button>
        <button
          disabled={page === 1}
          aria-label="Previous page"
          onClick={() => handlePageChange(page - 1)}
        >
          <ChevronLeft />
        </button>

        {renderPage()}

        {page + 1 < totalPages && (
          <button
            disabled
            className={styles.ellipsis}
          >
            <Ellipsis />
          </button>
        )}

        <button
          onClick={() => handlePageChange(totalPages)}
          aria-selected={page === totalPages}
        >
          {totalPages}
        </button>

        <button
          aria-label="Next page"
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          <ChevronRight />
        </button>
        <button
          aria-label="Last page"
          disabled={page === totalPages}
          className={styles.iconButton}
          onClick={() => handlePageChange(totalPages)}
        >
          <ChevronsRight />
        </button>
      </div>
      <div className={styles.dropdown}>
        <button onClick={() => setIsVisible((old) => !old)}>
          {itemsPerPage} / page <ChevronDown />
        </button>
        {isVisible && (
          <ul>
            {itemsPerPageOptions.map((option) => (
              <li
                key={option}
                onClick={() => {
                  handleItemsPerPageChange(option);
                  setIsVisible(false);
                }}
              >
                {option} / page
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
};

export default Pagination;

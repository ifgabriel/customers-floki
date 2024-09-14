import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';

interface PaginationProps {
    totalPages: number;
}


const itemsPerPageOptions = [7, 15, 30];


export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};


const Pagination = ({ totalPages }: PaginationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const windowWidth = useWindowWidth();
  const isSmallScreen = windowWidth < 732;

  const page = Number(searchParams.get('page')) || 1;
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 7

  const handlePageChange = (page: number) => {
    setSearchParams({ ...Object.fromEntries([...searchParams]), page: String(page) });
  };

  const handleItemsPerPageChange = (itemPerPage: number) => {
    setSearchParams({ ...Object.fromEntries([...searchParams]), itemsPerPage: String(itemPerPage) });
  };

  const createPageNumbers = () => {
    let start = Math.max(page - 2, 1);
    let end = Math.min(page + 2, totalPages);

    if (page - 2 < 1) end = Math.min(end + (2 - (page - 1)), totalPages);
    if (page + 2 > totalPages) start = Math.max(start - (page + 2 - totalPages), 1);

    return { start, end };
  };

  const { start, end } = createPageNumbers();

  const renderPageButtons = () => {
    const buttons = [];
    if (isSmallScreen) {
      const visiblePages = Math.min(4, totalPages);
      for (let i = 0; i < visiblePages; i++) {
        const pageNum = Math.min(start + i, totalPages);
        buttons.push(
          <button
            key={pageNum}
            aria-selected={page === pageNum}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        );
      }
    } else {
      for (let i = start; i <= end; i++) {
        buttons.push(
          <button
            key={i}
            aria-selected={page === i}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    }
    return buttons;
  };

  return (
    <footer className={styles.container}>
      <div>
        <span>Page {page} of {totalPages}</span>
      </div>
      <div>
        <button
          aria-label="First page"
          onClick={() => handlePageChange(1)}
          className={styles.iconButton}
        >
          <ChevronsLeft />
        </button>
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft />
        </button>
        {start > 1 && (
          <>
            <button onClick={() => handlePageChange(1)}>1</button>
            <button disabled className={styles.ellipsis}><Ellipsis /></button>
          </>
        )}

        {renderPageButtons()}

        {end < totalPages && (
          <>
            <button disabled className={styles.ellipsis}><Ellipsis /></button>
            <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
          </>
        )}

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

import React from 'react';
import {usePagination} from "../../../scripts/hooks/usePagination";

const Pagination = ({totalPages, currentPage, changePage}) => {

    let pagesArray = usePagination(totalPages);
    return (
        <div className="pagination__wrapper">
            {pagesArray.map(p => (
                <span
                    className={p === currentPage ? 'pagination__btn pagination__btn--active' : 'pagination__btn'}
                    key={p}
                    onClick={() => changePage((prevConfig) => (
                        {...prevConfig, currentPage: p}
                    ))}
                >
                    {p}
                </span>
            ))}
        </div>
    );
};

export default Pagination;
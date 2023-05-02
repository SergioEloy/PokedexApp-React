import React from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirstClick = () => {
    if (currentPage !== 1) {
      onPageChange(1);
    }
  };

  const handleLastClick = () => {
    if (currentPage !== totalPages) {
      onPageChange(totalPages);
    }
  };

  return (
    <div>
      <button onClick={handleFirstClick} disabled={currentPage === 1} >
        First
      </button>
      <button onClick={handlePreviousClick} disabled={currentPage === 1} >
        Previous
      </button>
      <span >
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextClick} disabled={currentPage === totalPages} >
        Next
      </button>
      <button onClick={handleLastClick} disabled={currentPage === totalPages} >
        Last
      </button>
    </div>
  );
};

export default Pagination;
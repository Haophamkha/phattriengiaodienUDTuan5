import React, { useState } from "react";
import "./pagination.css";

export default function Pagination({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination">
      <button
        className={`page-btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {'<'}
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 1 && page <= currentPage + 1) ? (
          <button
            key={page}
            className={`page-btn ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ) : page === currentPage - 2 || page === currentPage + 2 ? (
          <span key={page} className="dots">...</span>
        ) : null
      )}

      <button
        className={`page-btn ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
         {'>'}
      </button>
    </div>
  );
}

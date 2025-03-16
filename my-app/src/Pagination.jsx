import React, { useState } from "react";
import styles from "./tailwind";


export default function Pagination({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.pagination.container}>
      {/* Nút Previous */}
      <button
        className={`${styles.pagination.pageBtn} ${
          currentPage === 1 ? styles.pagination.disabledPageBtn : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {"<"}
      </button>

      {/* Danh sách số trang */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 1 && page <= currentPage + 1) ? (
          <button
            key={page}
            className={`${styles.pagination.pageBtn} ${
              currentPage === page ? styles.pagination.activePageBtn : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ) : page === currentPage - 2 || page === currentPage + 2 ? (
          <span key={page} className={styles.pagination.dots}>...</span>
        ) : null
      )}

      {/* Nút Next */}
      <button
        className={`${styles.pagination.pageBtn} ${
          currentPage === totalPages ? styles.pagination.disabledPageBtn : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
}
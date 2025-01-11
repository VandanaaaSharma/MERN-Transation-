import React from 'react';




const Pagination = ({ page, setPage, totalPages }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>{` Page ${page} of ${totalPages} `}</span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

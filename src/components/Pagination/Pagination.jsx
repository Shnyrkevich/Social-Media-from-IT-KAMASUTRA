import React from 'react';
import './pagination.css';

function Pagination({ pagesNamber, activePage, badgeAction }) {
  let masOfNumbers = new Array(pagesNamber).fill(1);
  for (let i = 0; i < masOfNumbers.length; i++) {
    masOfNumbers[i] = i + 1;
  }

  function spanClick(p) {
    badgeAction(Number(p));
  }

  return (
    <div className='pagination-container'>
      { masOfNumbers.map((el, ind) => <span
         className={ el === activePage ? 'pagination-item active-page' : 'pagination-item'}
        key={ind}
        onClick={(e) => spanClick(e.target.textContent)}>
          {el}
        </span>) }
    </div>
  );
}

export default Pagination;
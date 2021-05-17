import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { saveCurrPage } from '@/store/actions/Locations';
import { selectInfo, selectPage } from '@/store/selectors/Locations';

import style from './Pagination.module.scss';

const Pagination = ({ loading }) => {
  const dispatch = useDispatch();

  const currPage = useSelector(selectPage);
  const info = useSelector(selectInfo);

  if (info.length === 0) {
    return null;
  }

  return (
    <div className={style.paginationContainer}>
      <div
        onClick={() => dispatch(saveCurrPage(info.prev))}
        className={`${style.navigationButton} ${
          loading ? style.disabled : ''
        } ${!info.prev ? style.disabled : ''}`}
      >
        Previous
      </div>
      {[...Array(info.pages)].map((x, i) => {
        return (
          <div
            onClick={() => dispatch(saveCurrPage(i + 1))}
            className={`${style.paginationItem} ${
              loading ? style.disabled : ''
            } ${currPage === i + 1 ? style.active : ''}`}
            key={i}
          >
            {i + 1}
          </div>
        );
      })}
      <div
        onClick={() => dispatch(saveCurrPage(info.next))}
        className={`${style.navigationButton} ${
          loading ? style.disabled : ''
        } ${!info.next ? style.disabled : ''}`}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;

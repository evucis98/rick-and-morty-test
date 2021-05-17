import React from 'react';

import Chart from '@/components/Statistics/Chart';

import status from '@/constants/Status';

import globalStyle from '@/styles/app.scss';
import style from './Statistics.module.scss';

const Statistics = ({ data }) => {
  const { type, residents, dimension } = data;

  if (!residents) {
    return null;
  }

  const alive = residents.filter((item) => item.status === status.alive);
  const dead = residents.filter((item) => item.status === status.dead);
  const visitors = residents.filter((item) => item.status === status.unknown);

  return (
    <>
      <div className={`${globalStyle.row} ${globalStyle['mb-20']}`}>
        <div
          className={`${globalStyle['col-md-4']} ${globalStyle['col-xs-12']}`}
        >
          <div className={`${style.box} ${style.residents}`}>
            <h4 className={style.statisticsTitle}>Residents</h4>
            <h5 className={style.statisticsValue}>{residents?.length}</h5>
          </div>
        </div>
        <div
          className={`${globalStyle['col-md-4']} ${globalStyle['col-xs-12']}`}
        >
          <div className={`${style.box} ${style.type}`}>
            <h4 className={style.statisticsTitle}>Type</h4>
            <h5 className={style.statisticsValue}>{type}</h5>
          </div>
        </div>
        <div
          className={`${globalStyle['col-md-4']} ${globalStyle['col-xs-12']}`}
        >
          <div className={`${style.box} ${style.dimension}`}>
            <h4 className={style.statisticsTitle}>Dimension</h4>
            <h5 className={style.statisticsValue}>{dimension}</h5>
          </div>
        </div>
        <div
          className={`${globalStyle['col-md-4']} ${globalStyle['col-xs-12']}`}
        >
          <div className={`${style.box} ${style.alive}`}>
            <h4 className={style.statisticsTitle}>Alive Residents 🤩</h4>
            <h5 className={style.statisticsValue}>{alive.length}</h5>
          </div>
        </div>
        <div
          className={`${globalStyle['col-md-4']} ${globalStyle['col-xs-12']}`}
        >
          <div className={`${style.box} ${style.dead}`}>
            <h4 className={style.statisticsTitle}>Dead Residents 😵</h4>
            <h5 className={style.statisticsValue}>{dead.length}</h5>
          </div>
        </div>
        <div
          className={`${globalStyle['col-md-4']} ${globalStyle['col-xs-12']}`}
        >
          <div className={`${style.box} ${style.guests}`}>
            <h4 className={style.statisticsTitle}>Current guests 🤫</h4>
            <h5 className={style.statisticsValue}>{visitors.length}</h5>
          </div>
        </div>
      </div>
      <Chart data={data} />
    </>
  );
};

export default Statistics;

import React from 'react';
import Image from 'next/image';

import style from './Loading.module.scss';
import globalStyle from '@/styles/app.scss';

const PortalLoading = ({ title }) => {
  return (
    <div className={style.loading}>
      <Image
        className={globalStyle.infiniteRotation}
        src="/images/portal.png"
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <h3 className={style.statusTitle}>{title}</h3>
    </div>
  );
};

export default PortalLoading;

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { fetchLocation } from '@/store/api/Locations';

import Header from '@/components/Header/Header';
import Statistics from '@/components/Statistics/Statistics';
import Residents from '@/components/Residents/Residents';
// import PortalLoading from "@/components/Loading/PortalLoading";

import style from '../../app/styles/app.scss';

const Details = () => {
  const { query } = useRouter();

  const id = query.id;

  const [data, setData] = useState([]);

  useEffect(() => {
    getLocation();
  });

  const getLocation = async () => {
    try {
      if (id) {
        const { location } = await fetchLocation(id);
        setData(location);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const { name, residents } = data;

  return (
    <div className={style.container}>
      <Header title={name} />
      {/*{data.length === 0 ?  <PortalLoading title="Loading..."/> : null}*/}
      <Statistics data={data} />
      <Residents residents={residents} />
    </div>
  );
};

export default Details;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '@/components/Header/Header';
import Locations from '@/components/Locations/Locations';

import { fetchLocations } from '@/store/api/Locations';
import { saveLocation } from '@/store/actions/Locations';

import style from '../app/styles/app.scss';
import {
  selectDimension,
  selectPage,
  selectType,
} from '@/store/selectors/Locations';

const App = () => {
  const dispatch = useDispatch();

  const type = useSelector(selectType);
  const dimension = useSelector(selectDimension);
  const currPage = useSelector(selectPage);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocations();
  }, [currPage, type, dimension]);

  const getLocations = async () => {
    setLoading(true);
    try {
      const { locations } = await fetchLocations(currPage, type, dimension);

      dispatch(saveLocation(locations));
      setLoading(false);
    } catch (e) {
      dispatch(
        saveLocation({
          results: [],
          info: [],
        })
      );
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <Header title="Rick and Morty locations in multiple dimensions" />
      <Locations loading={loading} />
    </div>
  );
};

export default App;

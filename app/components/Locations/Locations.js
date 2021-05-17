import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import useDebounce from '@/hooks/useDebounce';

import { selectLocations } from '@/store/selectors/Locations';
import { saveType, saveDimension } from '@/store/actions/Locations';

import Pagination from '@/components/Locations/Pagination';
import PortalLoading from '@/components/Loading/PortalLoading';

import style from './Loacations.module.scss';
import tableStyle from '@/styles/components/Table.module.scss';

const Locations = ({ loading }) => {
  const dispatch = useDispatch();

  const locations = useSelector(selectLocations);

  const handleTypeChange = useDebounce((value) => {
    dispatch(saveType(value));
  }, 500);

  const handleDimensionChange = useDebounce((value) => {
    dispatch(saveDimension(value));
  }, 500);

  return (
    <>
      <div className={tableStyle.tableContainer}>
        <table className={tableStyle.table}>
          <thead>
            <tr className={tableStyle.tableHead}>
              <th>ID</th>
              <th>Location</th>
              <th>
                <div>Type</div>
                <input
                  onChange={(val) => handleTypeChange(val.target.value)}
                  className={tableStyle.searchInput}
                  type="type"
                  name="type"
                  placeholder="Search by type"
                />
              </th>
              <th>
                <div>Dimension</div>
                <input
                  onChange={(val) => handleDimensionChange(val.target.value)}
                  className={tableStyle.searchInput}
                  type="type"
                  name="type"
                  placeholder="Search by dimension"
                />
              </th>
              <th>Residents</th>
              <th>
                <div className={tableStyle.rick}>
                  <Image
                    src="/images/rick.png"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {locations.length > 0
              ? locations.map((item, key) => (
                  <tr className={tableStyle.tableRow} key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.dimension}</td>
                    <td>{item.residents.length}</td>
                    <td>
                      <Link
                        href={{ pathname: 'details/[id]' }}
                        as={`details/${item.id}`}
                      >
                        <div className={tableStyle.actionBtn}>View</div>
                      </Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
      <Pagination loading={loading} />
      {locations.length === 0 && !loading ? (
        <div className={style.notFound}>
          <Image
            src="/images/not-found.png"
            alt="Picture of the author"
            width={200}
            height={100}
          />
          <h3 className={style.statusTitle}>Not found</h3>
        </div>
      ) : null}
      {loading ? <PortalLoading title="Searching for locations..." /> : null}
    </>
  );
};

export default Locations;

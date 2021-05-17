import React from 'react';

import tableStyle from '@/styles/components/Table.module.scss';
import style from './Residents.module.scss';
import Image from 'next/image';

const Residents = ({ residents }) => {
  if (!residents) {
    return null;
  }

  return (
    <div className={tableStyle.tableContainer}>
      <table className={tableStyle.table}>
        <thead>
          <tr className={tableStyle.tableHead}>
            <th>Image</th>
            <th>Name</th>
            <th>Status</th>
            <th>Species</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((item, key) => (
            <tr key={key} className={tableStyle.tableRow}>
              <td>
                <Image
                  className={style.profileImage}
                  src={item.image}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.species}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Residents;

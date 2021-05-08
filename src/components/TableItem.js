import React from 'react';

const TableItem = (props) => {
  const { tab, handleLoadUser } = props;
  return (
    <tr>
      <td>{tab.id}</td>
      <td>{tab.title}</td>
      <td>{tab.completed ? 'true' : 'false'}</td>
      <td>
        <button
          onClick={() => handleLoadUser(tab.id, tab.userId)}
          type='button'
          className='waves-effect waves-light btn'>
          User
        </button>
      </td>
    </tr>
  );
};

export default TableItem;

import React, { useEffect } from 'react';
import TableItem from './TableItem';
import 'materialize-css/dist/css/materialize.min.css';
import { getTableData } from '../actions/TableActions';
import { connect } from 'react-redux';
import { getUserData } from '../actions/UserActions';

const ListTable = ({ table, getTableData, getUserData }) => {
  useEffect(() => {
    getTableData();
    //eslint-disable-next-line
  }, []);

  const handleLoadUser = (id, userId) => {
    getUserData(id, userId);
  };

  return (
    <div className='tableview'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {table.data.map((tab) => (
            <TableItem handleLoadUser={handleLoadUser} tab={tab} key={tab.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  table: state.table,
});

export default connect(mapStateToProps, { getTableData, getUserData })(
  ListTable
);

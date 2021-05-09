import React, { useMemo } from 'react';
import { connect } from 'react-redux';

const UserDetails = (props) => {
  const { user, table } = props;
  const todo = useMemo(() => {
    if (user.todoId !== -1) {
      const displayNote = table.data.find((item) => {
        return item.id === user.todoId;
      });

      return displayNote;
    }

    //eslint-disable-next-line
  }, [user.todoId]);

  return (
    <div className='user'>
      {user.todoId === -1 && (
        <p className='text'>Please select todo from list</p>
      )}

      {todo && user.data && (
        <div>
          <div className='div'>
            {' '}
            <p className='para'>Todo ID:</p>{' '}
            <h5 className='heading'> {user.todoId}</h5>
          </div>
          <div className='div'>
            <p className='para'>Todo Title:</p>{' '}
            <h5 className='heading'> {todo.title}</h5>
          </div>
          <div className='div'>
            {' '}
            <p className='para'>User Name:</p>{' '}
            <h5 className='heading'> {user.data.name}</h5>
          </div>
          <div className='div'>
            <p className='para'>User Id:</p>{' '}
            <h5 className='heading'> {user.data.id}</h5>
          </div>
          <div className='div'>
            {' '}
            <p className='para'>User Email:</p>{' '}
            <h5 className='heading'> {user.data.email}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    table: state.table,
  };
};

export default connect(mapStateToProps)(UserDetails);

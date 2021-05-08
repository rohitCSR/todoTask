import React, { useMemo } from 'react';
import { connect } from 'react-redux';

const UserDetails = (props) => {
  const { user, table } = props;
  const todo = useMemo(() => {
    if (user.todoId != -1) {
      const displayNote = table.data.find((item) => item.id === user.todoId);

      return displayNote;
    }

    //eslint-disable-next-line
  }, [user.todoId]);

  return (
    <div>
      {user.todoId === -1 && <p>Please select todo from list</p>}

      {todo && user.data && (
        <div>
          <h1>{user.data.name}</h1>
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

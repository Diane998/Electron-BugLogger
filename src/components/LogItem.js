import React from 'react';
import Moment from 'react-moment';

import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const LogItem = ({
  log: { _id, text, priority, user, created },
  deleteItem
}) => {
  const setVariant = priority =>
    priority === 'low'
      ? 'success'
      : priority === 'moderate'
      ? 'warning'
      : 'danger';

  return (
    <tr>
      <td>
        <h5>
          <Badge className='p-2' variant={setVariant(priority)}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </Badge>
        </h5>
      </td>
      <td>{text}</td>
      <td>{user}</td>
      <td>
        <Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date(created)}</Moment>
      </td>
      <td>
        <Button variant='outline-danger' onClick={() => deleteItem(_id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;

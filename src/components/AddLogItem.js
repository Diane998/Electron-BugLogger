import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddLogItem = ({ addItem }) => {
  const [log, setLog] = useState({
    text: '',
    user: '',
    priority: ''
  });

  const { text, user, priority } = log;

  const handleSubmit = e => {
    e.preventDefault();
    addItem({ text, user, priority });
    setLog({ text: '', user: '', priority: '' });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setLog({ ...log, [name]: value });
  };

  return (
    <Card className='mt-5 mb-3'>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Log</Form.Label>
            <Form.Control
              onChange={handleChange}
              type='text'
              name='text'
              value={text}
              placeholder='Log'
            />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>User</Form.Label>
            <Form.Control
              onChange={handleChange}
              type='text'
              name='user'
              value={user}
              placeholder='User'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Select Priority</Form.Label>
            <Form.Control
              as='select'
              onChange={handleChange}
              name='priority'
              value={priority}
            >
              <option value='0'>Select Priority</option>
              <option value='low'>Low</option>
              <option value='moderate'>Moderate</option>
              <option value='high'>High</option>
            </Form.Control>
          </Form.Group>

          <Button className='mt-3' variant='outline-primary' type='submit'>
            Add Log
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddLogItem;

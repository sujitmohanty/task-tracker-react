import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addTask } from '../store/task/taskAction';
import { addTaskLoading } from '../store/task/taskSelector';

const AddTask = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('pending');
  const addTaskLoadingSelector = useSelector(addTaskLoading);

  const clearState = () => {
    setTaskName('');
    setTaskStatus('pending');
  };

  const onHide = () => {
    clearState();
    setShowModal(false);
  };

  const handleSubmit = async () => {
    console.log(taskName, taskStatus);
    try {
      await dispatch(
        addTask({
          title: taskName,
          isCompleted: taskStatus === 'completed',
        })
      );
      setShowModal(false);
      clearState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className='mt-5'>
        <Col md={{ span: 4, offset: 10 }}>
          <Button variant='secondary' onClick={() => setShowModal(true)}>
            <i className='fas fa-plus' /> Add Task
          </Button>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={() => onHide()}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add a Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete='off' noValidate>
            <Form.Group controlId='taskName'>
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Task Name'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </Form.Group>
            <fieldset>
              <Form.Group
                as={Row}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <Form.Label as='legend' column sm={2}>
                  Radios
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type='radio'
                    label='Pending'
                    name='taskStatus'
                    value='pending'
                    id='pending'
                    defaultChecked
                  />
                  <Form.Check
                    type='radio'
                    label='Completed'
                    value='completed'
                    name='taskStatus'
                    id='completed'
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={() => onHide()}>
            Cancel
          </Button>
          <Button variant='secondary' onClick={() => handleSubmit()}>
            Submit
            {addTaskLoadingSelector && <Spinner animation='border' size='sm' />}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AddTask;

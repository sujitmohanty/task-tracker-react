import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../store/task/taskAction';
import { taskList } from '../store/task/taskSelector';

export default function ListTasks() {
  const dispatch = useDispatch();
  const taskListSelector = useSelector(taskList);

  useEffect(() => {
    getTaskList();
    // eslint-disable-next-line
  }, []);

  const getTaskList = () => {
    dispatch(getTasks());
  };

  return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col>
          <ul className='list-group'>
            {taskListSelector.map((task) => (
              <li
                className='list-group-item d-flex justify-content-between align-items-center'
                key={task.id}
              >
                {task.title}
                <Button size='sm' variant='outline-danger'>
                  <i class='fas fa-trash'></i>
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

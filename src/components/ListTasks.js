import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, deleteTask, updateTask } from '../store/task/taskAction';
import {
  taskList,
  getTaskLoading,
  deleteTaskLoading,
  updateTaskLoading,
} from '../store/task/taskSelector';

export default function ListTasks() {
  const dispatch = useDispatch();
  const taskListSelector = useSelector(taskList);
  const getTaskLoadingSelector = useSelector(getTaskLoading);
  const deleteTaskLoadingSelector = useSelector(deleteTaskLoading);
  const updateTaskLoadingSelector = useSelector(updateTaskLoading);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [updateTaskId, setUpdateTaskId] = useState(null);

  useEffect(() => {
    getTaskList();
    // eslint-disable-next-line
  }, []);

  const getTaskList = () => {
    dispatch(getTasks());
  };

  const removeTask = (task) => {
    setDeleteTaskId(task.id);
    dispatch(deleteTask(task.id));
  };

  const updateTaskStatus = (task) => {
    setUpdateTaskId(task.id);
    dispatch(
      updateTask({
        ...task,
        isCompleted: true,
      })
    );
  };

  return (
    <Container>
      {!getTaskLoadingSelector && taskListSelector.length === 0 && (
        <h1>Task List is Empty</h1>
      )}
      {getTaskLoadingSelector && (
        <Spinner animation='border' className='page-loader' />
      )}
      <Row className='justify-content-center mt-5'>
        <Col>
          <ul className='list-group'>
            {taskListSelector.map((task) => (
              <li
                className={`${
                  task.isCompleted ? 'task-completed' : 'task-pending'
                } list-group-item d-flex justify-content-between align-items-center`}
                key={task.id}
              >
                <span>{task.title}</span>
                <div>
                  {!task.isCompleted && (
                    <Button
                      size='sm'
                      variant='outline-secondary'
                      onClick={() => updateTaskStatus(task)}
                    >
                      <i className='fas fa-check'></i>
                      {updateTaskLoadingSelector &&
                        task.id === updateTaskId && (
                          <Spinner animation='border' size='sm' />
                        )}
                    </Button>
                  )}
                  <Button
                    size='sm'
                    variant='outline-danger'
                    onClick={() => removeTask(task)}
                    className='ml-2'
                  >
                    <i className='fas fa-trash'></i>
                    {deleteTaskLoadingSelector && task.id === deleteTaskId && (
                      <Spinner animation='border' size='sm' />
                    )}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

import axios from 'axios';
import { toast } from 'react-toastify';

import apiConfig from '../../config/api';
import * as taskActionType from './taskActionType';

export const getTasks = () => async (dispatch) => {
  try {
    dispatch({
      type: taskActionType.GET_TASKS_BEGIN,
    });
    const result = await axios.get(`${apiConfig.API_BASE_URL}/tasks`);
    dispatch({
      type: taskActionType.GET_TASKS_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: taskActionType.GET_TASKS_FAILURE,
    });
    toast.error(error.message);
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    dispatch({
      type: taskActionType.ADD_TASK_BEGINS,
    });
    const result = await axios.post(
      `${apiConfig.API_BASE_URL}/tasks`,
      taskData
    );
    dispatch({
      type: taskActionType.ADD_TASK_SUCCESS,
      payload: result.data,
    });
    toast.success('Task added successfully!');
  } catch (error) {
    console.log(error);
    dispatch({
      type: taskActionType.ADD_TASK_FAILURE,
    });
    toast.error(error.message);
    throw error;
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({
      type: taskActionType.DELETE_TASK_BEGINS,
    });
    await axios.delete(`${apiConfig.API_BASE_URL}/tasks/${id}`);
    dispatch({
      type: taskActionType.DELETE_TASK_SUCCESS,
      payload: id,
    });
    toast.success('Task deleted successfully!');
  } catch (error) {
    console.log(error);
    dispatch({
      type: taskActionType.DELETE_TASK_FAILURE,
    });
    toast.error(error.message);
    throw error;
  }
};

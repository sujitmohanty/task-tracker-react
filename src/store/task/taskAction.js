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

import axios from 'axios';

import apiConfig from '../../config/api';
import * as taskActionType from './taskActionType';

export const getTasks = () => async (dispatch) => {
  try {
    const result = await axios.get(`${apiConfig.API_BASE_URL}/tasks`);
    dispatch({
      type: taskActionType.GET_TASKS,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};

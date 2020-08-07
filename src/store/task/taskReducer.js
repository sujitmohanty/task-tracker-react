import * as taskActionType from './taskActionType';

const initialTaskState = {
  taskList: [],
};

const taskReducer = (state = initialTaskState, { type, payload }) => {
  switch (type) {
    case taskActionType.GET_TASKS:
      return {
        ...state,
        taskList: payload,
      };
    default:
      return state;
  }
};

export default taskReducer;

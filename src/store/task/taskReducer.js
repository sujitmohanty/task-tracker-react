import * as taskActionType from './taskActionType';

const initialTaskState = {
  taskList: [],
  getTaskLoading: false,
  addTaskLoading: false,
  deleteTaskLoading: false,
  updateTaskLoading: false,
};

const taskReducer = (state = initialTaskState, { type, payload }) => {
  switch (type) {
    case taskActionType.GET_TASKS_BEGIN:
      return {
        ...state,
        getTaskLoading: true,
      };

    case taskActionType.GET_TASKS_SUCCESS:
      return {
        ...state,
        getTaskLoading: false,
        taskList: payload,
      };

    case taskActionType.GET_TASKS_FAILURE:
      return {
        ...state,
        getTaskLoading: false,
      };

    case taskActionType.ADD_TASK_BEGINS:
      return {
        ...state,
        addTaskLoading: true,
      };

    case taskActionType.ADD_TASK_SUCCESS:
      return {
        ...state,
        addTaskLoading: false,
        taskList: [payload, ...state.taskList],
      };

    case taskActionType.ADD_TASK_FAILURE:
      return {
        ...state,
        addTaskLoading: false,
      };

    case taskActionType.DELETE_TASK_BEGINS:
      return {
        ...state,
        deleteTaskLoading: true,
      };

    case taskActionType.DELETE_TASK_SUCCESS:
      return {
        ...state,
        deleteTaskLoading: false,
        taskList: state.taskList.filter((task) => task.id !== payload),
      };

    case taskActionType.DELETE_TASK_FAILURE:
      return {
        ...state,
        deleteTaskLoading: false,
      };

    case taskActionType.UPDATE_TASK_BEGINS:
      return {
        ...state,
        updateTaskLoading: true,
      };

    case taskActionType.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        updateTaskLoading: false,
        taskList: state.taskList.map((task) =>
          task.id === payload.id ? payload : task
        ),
      };

    case taskActionType.UPDATE_TASK_FAILURE:
      return {
        ...state,
        updateTaskLoading: false,
      };

    default:
      return state;
  }
};

export default taskReducer;

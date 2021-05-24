import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getWorkouts = () => async (dispatch) => {
  try {
    const { data } = await api.getWorkouts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createWorkout = (workout) => async (dispatch) => {
  try {
    const { data } = await api.createWorkout(workout);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }

};
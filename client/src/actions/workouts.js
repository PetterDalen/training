import { FETCH_ALL, CREATE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getWorkouts = () => async (dispatch) => {
  try {
    const { data } = await api.getWorkouts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createWorkout = (workout) => async (dispatch) => {
  try {
    const { data } = await api.createWorkout(workout);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }

};

export const deleteWorkout = (id) => async (dispatch) => { 
  try {
    console.log("kommer til action")
    await api.deleteWorkout(id);


    dispatch({ type: 'DELETE', payload: id })
  } catch (error) {
    console.log(error);
  }
}

export const checkWorkout = (id, workout) => async (dispatch) => {
  try {
    const { data } = await api.checkWorkout(id, workout);
    
    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}
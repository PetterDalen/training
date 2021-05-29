
import axios from 'axios';

const url = 'http://localhost:5001/workouts';

export const getWorkouts = () => axios.get(url);
export const createWorkout = (newWorkout) => axios.post(url, newWorkout);
export const deleteWorkout = (id) => axios.delete(`${url}/${id}`);
export const checkWorkout = (id, updatedWorkout) => axios.patch(`${url}/${id}`, updatedWorkout);

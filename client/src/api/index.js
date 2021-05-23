import axios from 'axios';

const url = 'http://localhost:5000/workouts';

export const fetchWorkouts = () => axios.get(url);
export const createWorkout = () => (newWorkout) => axios.post(url, newWorkout);
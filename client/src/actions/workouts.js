import * as api from '../api';

export const getWorkouts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchWorkouts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }

}

export const createWorkout = (workout) => async (dispatch) => {
    try {
        console.log("actions 1")
        const { data } = await api.createWorkout(workout);
        console.log("actions 2")

        dispatch({ type: 'CREATE', payload: data });
        console.log("data")
        console.log(data)
        console.log("workout")
        console.log(workout)
    } catch (error) {
        console.log(error);
    }
}
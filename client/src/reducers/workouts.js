export default (workouts = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return workouts.map((workout) => workout._id == action.payload.checkedWorkout._id ? action.payload.checkedWorkout : workout);
        case 'DELETE':
            return workouts.filter((workout) => workout._id != action.payload);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...workouts, action.payload];
        default:
            return workouts;
    }
}
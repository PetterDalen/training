export default (workouts = [], action) => {
    switch (action.type) {
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
import mongoose from 'mongoose';

const WorkoutSchema = mongoose.Schema({
    creator: String,
    workout: String,
    status: Boolean,
})

const WorkoutMessage = mongoose.model('WorkoutMessage', WorkoutSchema);

export default WorkoutMessage;
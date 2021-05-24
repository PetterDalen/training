
import mongoose from 'mongoose';

const workoutSchema = mongoose.Schema({
    creator: String,
    title: String,
    status: Boolean,
})

var WorkoutMessage = mongoose.model('WorkoutMessage', workoutSchema);

export default WorkoutMessage;
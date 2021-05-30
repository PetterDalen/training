
import mongoose from 'mongoose';

const workoutSchema = mongoose.Schema({
    creator: String,
    title: String,
    status: Boolean,
    description: String,
})

var WorkoutMessage = mongoose.model('WorkoutMessage', workoutSchema);

export default WorkoutMessage;
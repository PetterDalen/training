
import mongoose from 'mongoose';

const workoutSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date(),
    },
    creator: String,
    title: String,
    status: Boolean,
    description: String,
})

var WorkoutMessage = mongoose.model('WorkoutMessage', workoutSchema);

export default WorkoutMessage;
import mongoose from 'mongoose';

const WorkoutSchema = mongoose.Schema({
    creator: String,
    name: String,
    status: Boolean,
})

const WorkoutsMessage = mongoose.model('WorkoutMessage', WorkoutSchema);

export default WorkoutsMessage;
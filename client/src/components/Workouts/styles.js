import { makeStyles } from '@material-ui/core/styles';
import Workout from './Workout/Workout'

export default makeStyles( () => ({
    workout: {
        background: 'blue',
        borderRadius: 15,
        margin: '30px 0',
        width: '30%',
        float: 'left',

    },

    form: {
        padding: '12px',
    },

    container: {
        float: 'right',
        marginLeft: '90px',
    },

    buttonSubmit: {
        backgroundColor: '#00A5FF',
        margin: '2px',

    }

    
}))
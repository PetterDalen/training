import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
    box: {
        borderRadius: 15,
        margin: '5px 0',
        width: '80%',
        float: 'left',
    },

    overlay: {
        top: '20px',
        left: '20px',
        width: '80%',
        margin: '5px',
        paddingLeft: '5px',

    },
    overlay2: {
            top: '20px',
            left: '20px',

    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        width: '300px',
        position: 'relative',
        background: '#DDDDFF',
        '&:hover': {
            background: 'none',
            pointerevents: 'none',
          },
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        float: 'right',
    },

    checkBox: {
        color: 'primary',
    }
    
}))
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
    paper: {
        padding: '10px',
        marginTop: '50px',
        backgroundColor: '#DDDDFF',
    },
    root: {
        '& .MuiTextField-root': {
          margin: '10px',
        },
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
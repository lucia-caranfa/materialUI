import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors'


const theme = createTheme ({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
            light: '#4fc3f7',
            main: '#ce93d8',
            dark: '#388e3c',
            contrastText: '#e3f2fd',
        },
        warning: red,
        gris: {
            light: '#bdbdbd',
            main: '#757575',
            dark: '#424242',
            contrastText: '#e3f2fd',
        }
},

})

export default theme
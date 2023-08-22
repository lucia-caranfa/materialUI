import React from 'react'
import MediaCard from './MaterialCard'
import TemporaryDrawer from './MaterialDrawer'
import { Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import AlarmIcon from '@mui/icons-material/Alarm';
import Typography from '@mui/material/Typography/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from './TemaConfig'


function MaterialUI() {
  return (
    <>
      <h2 className='texto'>MaterialUI</h2>
      <MediaCard />
      <TemporaryDrawer />
      <h2>Buttons</h2>
      <Button color='error' size='large'>Color</Button>
      <Button variant="contained" color='secondary' fullWidth>Text</Button>
      <Button variant="outlined" size='small'>Text</Button>
      <Button variant="contained" disableElevation href='https://www.google.com'>Google</Button>
      <h2>Icons</h2>
      <DeleteIcon />
      <HomeIcon color='primary' fontSize='large' />
      <Button variant='contained' color='secondary' startIcon={<AlarmIcon />}> ALARMA </Button>
      <Button variant='contained' color='success' endIcon={<AlarmIcon />}> DESACTIVAR </Button>
      <h2>Iconos botones</h2>
      <IconButton aria-label="delete">
        <DeleteIcon color='error' />
      </IconButton>
      <h2>Tipografia</h2>
      <Typography variant='h1' align='center'> Componente </Typography>
      <Typography variant='h2' align='right'> Componente dos </Typography>
      <Typography variant='body1' align='justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minus excepturi accusamus unde nostrum debitis culpa, dicta eveniet harum a ullam voluptas suscipit sequi illo repudiandae architecto iusto rem. Ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut rem animi nostrum iure minima tempora qui odit blanditiis, pariatur sed voluptatibus fuga, quod error recusandae fugit neque ipsa nesciunt!</Typography>
    <h2>Make Styles - solo en version 4</h2>
    <h2>Themes</h2>
<ThemeProvider theme={theme}>
  <Button variant='contained' color='primary'> Botón 1</Button>
  <Button variant='contained' color='secondary'> Botón 2</Button>
  <Button variant='contained' color='warning'> Botón 3</Button>
  <Button variant='contained' color='gris'> Botón 4</Button>
</ThemeProvider>

    </>
  )
}

export default MaterialUI 

import './App.css'
//import MaterialUI from './components/MaterialUI'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './components/TemaConfig'
import Contenedor from './components/Contenedor'

function App() {

  return (
    <>
<ThemeProvider theme={theme}>
  <Contenedor/>
</ThemeProvider>

<h2 className='texto'>Hola!</h2>

{/*<MaterialUI/>*/}


    </>
  )
}

export default App

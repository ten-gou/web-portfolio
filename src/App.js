import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, styled, CssBaseline } from '@mui/material';

//import components here
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//import the pages for the router here
import Home from './pages/Home';
import Art from './pages/Art';
import Code from './pages/Code';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';


//color palette and theming for the website
//lays the groundwork for the night mode toggle
const theme = createTheme({
  palette: {
    primary: {
      light: '#ffe6c1',
      main: '#ffe0b2',
      dark: '#b29c7c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FCB3B3',
      main: '#e57373',
      dark: '#BF4747',
      contrastText: '#000',
    },
  },
  spacing: 4,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

//prevents the content from being hidden underneath the NavBar
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
      <BrowserRouter>
        <>
          <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Offset></Offset>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/art' element={<Art />}></Route>
            <Route exact path='/code' element={<Code />}></Route>
            <Route exact path='/aboutme' element={<AboutMe />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
          </Routes>
          <Offset></Offset>
          <Footer />
          </ThemeProvider>
        </>
      </BrowserRouter>
  );
}

export default App;
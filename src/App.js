import { ThemeProvider } from '@mui/material';

import './App.css';
import theme from './constants/theme';

import Courses from './container/Courses';
import Footer from './container/Footer';
import Header from './container/Header';
import Navbar from './container/Navbar';
import Subscribe from './container/Subscribe';
import Team from './container/Team';
import Testimonal from './container/Testimonal';
import University from './container/University';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Header />
        <Courses />
        <Team />
        <University />
        <Testimonal />
        <Subscribe />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

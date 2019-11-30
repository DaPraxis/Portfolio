import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NavBarNav from './components/NavBarNav';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      slide:{
        slide: 0,  // How much should the Navbar slide up or down
        hidden: false, 
        simple: true
      },
      lastScrollY: 0,  // Keep track of current position in state
      title: 'Max Jiang',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Max Jiang',
        text: 'Fourth-year undergraduate, major in computer science & statistics in the University of Toronto. Specializing in Machine Learning & Software Engineering & Web-Development',
        title2: 'WORK. PLAY. LIVE',
        intro: "My name is:",
        text2: 'Toronto, ON, Canada',
        about:{
          title: '1. About Me ---------',
          text: 'Hello! I am Haoyan (Max) Jiang, a fourth year undergraduate major in computer science & statistics in the University of Toronto. I develope websites with modern frameworks such as React.js and Spring; digging into data mining and machine learning with rigorous statistic models and tools such as Python, Numpy, R, Scikilearn and pandas.'
          // text2: 'Some technologies I am using: '
        },
        experience:{
          title: '2. Experience ---------',
          skills: 
            [
              {
                Category:'UofT IML Lab',
                Title: 'Software Developer & 3D Modeling',
                Location: '@University of Toronto Interactive Media Lab',
                Time: '04/2019 – 09/2019',
                Link: "https://imedia.mie.utoronto.ca/",
                Content:
                ['Driving Simulation Game for Elder People; Engine building, \
                game logic and modeling of real-time driving experiences on web-serving applications using Babylon.js',
                'Building and importing 3D models for famous scenic views in the world using Blender',
                'Data collection and analysis with MongoDB, using learning algorism to analyze player’s brain functionality',
                'Working with elder people in medical institutes to improve game design and game play experiences']
              },
              {
                Category:'UofT IML Lab',
                Title: 'Junior Full Stack Developer',
                Location: '@University of Toronto Interactive Media Lab',
                Time: '04/2019 – 09/2019',
                Link: "https://imedia.mie.utoronto.ca/",
                Content:['Managing back-end performance, administration and data collections using MongoDB',
                'Responsive web design, exposure to React.js implementation, Node.js',
                'Interactive dashboard design and data representation for future researches']
              }
            ]
        },
        project:{
          title: '3. Project ---------'
        },
        contact:{
          title: '4. Contact Me ----------'
        }
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-60px' });
    } else {
      this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };


  render() {
    return (
      // <Router>
        <Container className="p-0" fluid={true}>
          {/* <Switch>
            <Route exact path="/">
              <NavBarNav slide = {this.state.slide}/>
              <HomePage home = {this.state.home}/>
            </Route>
            <Route path="/about">
              <AboutPage about = {this.state.about}/>
            </Route>
            <Route path="/contact">
              <ContactPage contact = {this.state.contact}/>
            </Route>
          </Switch> */}
          <NavBarNav slide = {this.state.slide}/>
          <HomePage home = {this.state.home}/>
          <Footer />

        </Container>
      // </Router>
    );
  }
}

export default App;

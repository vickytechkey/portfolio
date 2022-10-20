import { render, screen } from '@testing-library/react';
import HomePage from './pages/homepage'
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/contactpage';
import ProjectPage from './pages/projectspage';
test('renders learn react link', () => {
  render(<HomePage url="/" />)
  render(<AboutPage url="/about" />)
  render(<ContactPage url="/contact" />)
  render(<ProjectPage url="/projects" />)
  
 
});

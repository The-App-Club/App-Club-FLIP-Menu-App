import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import '@fontsource/inter';
import './styles/index.scss';
import {AnimatedNavbar} from './components/AnimatedNavbar';

const App = () => {
  return <AnimatedNavbar duration={300} />;
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);

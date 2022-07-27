import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import '@fontsource/inter';
import './styles/index.scss';
import {AnimatedNavbar} from './components/AnimatedNavbar';

const App = () => {
  return (
    <div
      className={css`
        width: 100%;
        background: wheat;
        min-height: 100vh;
      `}
    >
      <AnimatedNavbar duration={300} />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);

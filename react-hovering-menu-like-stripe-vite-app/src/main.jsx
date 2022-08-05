import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import {Menu} from './components/Menu';

import '@fontsource/inter';
import './styles/index.scss';

const App = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Menu />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);

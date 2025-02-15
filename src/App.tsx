import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css'; // Import the global CSS file
import AppRouter from './router/AppRouter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;

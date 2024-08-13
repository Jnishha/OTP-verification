import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MessageBar from './assets/components/MessageBar'
// import Example from './assets/components/Example'
import Weather from './assets/components/Weather'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Weather/>
    </div>
  );
};

export default App

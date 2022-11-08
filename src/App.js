import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <h1 className="text-2xl font-light">
      Hello world!
    </h1>
    </div>
  );
}

export default App;

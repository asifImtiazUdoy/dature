import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ResultPage from '../pages/ResultPage';
export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
   },
   {
      path: 'welcome',
      element: <ResultPage />,
   },
]);

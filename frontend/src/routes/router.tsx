import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import Today from './tasks/today';

export default createBrowserRouter([
  {
    path: '/*',
    element: <Root />,
    children: [
      {
        path: 'tasks/today',
        element: <Today />,
      },
    ],
  },
]);

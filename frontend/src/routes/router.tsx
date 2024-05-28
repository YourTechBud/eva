import { createBrowserRouter } from 'react-router-dom';

import Root from './root';

export default createBrowserRouter([
  {
    path: '/*',
    element: <Root />,
  },
]);

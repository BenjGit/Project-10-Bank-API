import Home from './pages/Home'
import { Layout } from './components/Layout';
import { createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login';
import Profile from './pages/Profile';
import { PrivateProfileRoute } from './privateRoute';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element:  <PrivateProfileRoute element={<Profile />} />,
      },
    ],
  },
])


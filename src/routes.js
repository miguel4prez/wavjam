import Home from './pages/Home'
import Artists from './pages/Artists';
import Producers from './pages/Producers';
// import Events from './pages/Events'
// import News from './pages/News'
import Profile from './pages/Profile'
import ErrorPage from './pages/ErrorPage'
import Saved from './pages/Saved'

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/artists',
    element: <Artists />,
    errorElement: <ErrorPage />
  },
  {
    path: '/producers',
    element: <Producers />,
    errorElement: <ErrorPage />
  },
  {
    path: '/saved',
    element: <Saved />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: '/events',
  //   element: <Events />,
  //   errorElement: <ErrorPage />
  // },
  // {
  //   path: '/news',
  //   element: <News />,
  //   errorElement: <ErrorPage />
  // },
  {
  path: '/profile/',
  element: <Profile />,
  errorElement: <ErrorPage />
  }
]

export default routes;
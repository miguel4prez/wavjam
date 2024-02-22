import Home from './pages/Home'
import Events from './pages/Events'
import News from './pages/News'
import Profile from './pages/Profile'
import ErrorPage from './pages/ErrorPage'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'
import Copyright from './pages/Copyright'
import Forum from './pages/Forum'
import Merch from './pages/Merch'
import Pricing from './pages/Pricing'
import Sponsors from './pages/Sponsors';
import TermsPrivacy from './pages/TermsPrivacy'
import ArtistsNearMe from './pages/ArtistsNearMe'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import BecomeSeller from './pages/BecomeSeller';
import Search from './pages/Search'
import App from './components/App'

const routes = [
  {
    path: '/',
    element: <App />,
    children :[
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path:'/search',
        element: <Search />,
        errorElement: <ErrorPage />
      },
      {
        path: '/become-a-seller',
        element: <BecomeSeller />,
        errorElement: <ErrorPage />
      },
      {
        path: '/login',
        element: <LogIn />,
        errorElement: <ErrorPage />
      },
      {
        path: '/signup',
        element: <SignUp />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about-us',
        element: <AboutUs />,
        errorElement: <ErrorPage />
      },
      {
        path: '/events',
        element: <Events />,
        errorElement: <ErrorPage />
      },
      {
        path: '/press&news',
        element: <News />,
        errorElement: <ErrorPage />
      },
      {
        path: '/profile',
        element: <Profile />,
        errorElement: <ErrorPage />
      },
      {
        path: '/sponsors',
        element: <Sponsors />,
        errorElement: <ErrorPage />
      },
      {
        path: '/merch',
        element: <Merch />,
        errorElement: <ErrorPage />
      },
      {
        path: '/terms&privacy',
        element: <TermsPrivacy />,
        errorElement: <ErrorPage />
      },
      {
        path: '/pricing',
        element: <Pricing />,
        errorElement: <ErrorPage />
      },
      {
        path: '/copyright',
        element: <Copyright />,
        errorElement: <ErrorPage />
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
        errorElement: <ErrorPage />
      },
      {
        path: '/forum',
        element: <Forum />,
        errorElement: <ErrorPage />
      },
      {
        path: '/artists-near-me',
        element: <ArtistsNearMe />,
        errorElement: <ErrorPage />
      }
    ]
  }
]

export default routes;
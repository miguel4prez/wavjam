import Home from './pages/Home'
import Events from './pages/Events'
import Profile from './pages/Profile'
import ErrorPage from './pages/ErrorPage'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'
import Copyright from './pages/Copyright'
import Merch from './pages/Merch'
import Pricing from './pages/Pricing'
import TermsPrivacy from './pages/TermsPrivacy'
import ArtistsNearMe from './pages/ArtistsNearMe'
import LogIn from './pages/LogIn';
import BecomeSeller from './pages/BecomeSeller';
import Search from './pages/Search'
import Feed from './pages/Feed'
import App from './components/App'
import SignUpMultiForm from './pages/SignUpMultiForm';

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
        path:'/search/:genre?',
        element: <Search />,
        errorElement: <ErrorPage />
      },
      // {
      //   path:'/search/:genre',
      //   element: <Search />,
      //   errorElement: <ErrorPage />
      // },
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
        path: '/feed',
        element: <Feed />,
        errorElement: <ErrorPage />
      },
      {
        path: '/signupform',
        element: <SignUpMultiForm />,
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
        path: '/users/:id',
        element: <Profile />,
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
        path: '/artists-near-me',
        element: <ArtistsNearMe />,
        errorElement: <ErrorPage />
      }
    ]
  }
]

export default routes;
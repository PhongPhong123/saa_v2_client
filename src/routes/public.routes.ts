import { routes } from '../config';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

export default [
    { path: routes.home, component: Home },
    { path: routes.profile, component: Profile }
]
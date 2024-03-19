import { AboutPath, ContactPath, HomePath } from './constants';
const ImagePage = React.lazy(() => import('./Components/Templates/FetchImage/RenderImages.jsx'));
const About = React.lazy(() => import('./Components/Pages/About.jsx'));
const Contact = React.lazy(() => import('./Components/Pages/Contact.jsx'));

export const routes = [
    { path: HomePath, component: <ImagePage /> },
    { path: AboutPath, component: <About /> },
    { path: ContactPath, component: <Contact /> }
];


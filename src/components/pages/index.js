import Home02 from './Home02'
import AboutDetails from './AboutDetails'
import Projects from './Projects'
import Contact02 from './Contact02'

const routes = [
    { path: '/', component: Home02},
    { path: '/hakkimizda', component: AboutDetails},
    { path: '/hizmetlerimiz', component: Projects},
    { path: '/iletisim', component: Contact02},
]

export default routes;
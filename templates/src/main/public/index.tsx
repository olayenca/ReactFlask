import {hydrate} from 'react-dom';
import '../static/css/index.css';
import * as serviceWorker from '../static/serviceWorker';
import routes from "./routes";

//ReactDOM.render(routes, document.getElementById('root'));
hydrate(routes,  document.querySelector('#root'));
serviceWorker.unregister();
    //export default routes;

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'jquery/dist/jquery'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css';
import App from './App';
import Start from './component/Start/Start';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Portfolio from './component/Portfolio/Portfolio';
import Footer from './component/Footer/Footer';

// nested Routes 
// spling:[
//     { path: 'Start' , element: <Start/>},
//     { path: 'Portfolio' , element: <Portfolio/>},
//     { path: 'about' , element: <About/>},
//     { path: 'contact' , element: <Contact/>},
// ],
const router = createBrowserRouter( [
    // Route Pbject 
    // { path: '' , element: <App/> , Children: [
    //     { path: 'start' , element :<Start/>},
    //     { path: 'portfolio' , element :<Portfolio/>},
    //     { path: 'about' , element: <About/>},
    //     { path: 'contact' , element: <Contact/>},
    // ]},
    
    { path: '' , element: <Start/>},
    { path: 'Portfolio' , element: <Portfolio/>},
    { path: 'about' , element: <About/>},
    { path: 'contact' , element: <Contact/>},
    {path : 'footer' , element: <Footer/>},
    { path: '*' , element: <h2>404</h2>},
    
    // { } // Route => Path , Element 
] );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider  router={ router}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

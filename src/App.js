// // import logo from './logo.svg';
// // import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './index';
// import About from './About';
// // import NotFound from './components/NotFound';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={index} />
//           <Route path="/about" component={About} />
//           {/* <Route component={NotFound} /> */}
//         </Switch>
//       </div>
//     </Router>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

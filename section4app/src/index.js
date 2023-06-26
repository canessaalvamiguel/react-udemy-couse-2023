import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const Li = ({ children, estado, casa, edad }) => {
//     console.log(casa, edad)
//     return (
//         <li>{children} esta {estado}</li>
//     )
// }
// const  X = () =>
//     <ul>
//         <Li
//             estado = {'feliz'}
//             casa = {false}
//             edad = {24}
//         >
//             Chanchito
//         </Li>
//         <Li
//             estado = {'triste'}
//             casa = {false}
//             edad = {45}
//         >
//             Chanchito
//         </Li>
//         <Li
//             estado = {'emocionado'}
//             casa = {true}
//             edad = {31}
//         >
//             Miguel
//         </Li>
//     </ul>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <X />
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

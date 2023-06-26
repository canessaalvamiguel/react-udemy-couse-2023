import logo from './logo.svg';
import './App.css';

const Li = ({children, estado}) => {
    console.log(estado)
    return (
        <li>{children}</li>
    )
}

const App = () => {
  return (
     <ul className='clase-css'>
       <Li estado='feliz'>Holi</Li>
     </ul>
  );
}

export default App;

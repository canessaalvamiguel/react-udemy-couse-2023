//import './App.css';
import "./main.css"

const estilo2 = {
    boxShadow: '0 5px 3px rgba(0,0,0,0,0.5)'
}
const estilo = (bg = '#333') => ({
    backgroundColor: bg,
    color: '#fff',
    padding: '10px 15px'
});

const Li = ({children, estado}) => {
    console.log(estado)
    return (
        <li className='clase-li'>{children}</li>
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

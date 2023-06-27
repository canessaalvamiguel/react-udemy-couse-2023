import Button from "./Button";

const App = () => {
    const miVariable = true

    if(miVariable){
        return <p>Mi variable dio true</p>
    }

    return (
        <div>
            <h1>Hola Mundo</h1>
            <Button onClick={(e) => console.log("clickeado", e)}>
                Enviar
            </Button>
        </div>
    )
}

export default App
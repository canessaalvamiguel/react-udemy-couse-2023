import Button from "./Button";

const App = () => {
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
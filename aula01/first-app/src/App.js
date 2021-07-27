import "./app.css";
import Button from "./components/Button";
import Header from "./components/Header";
const links =[
  {
    "id":"1",
    "label":"Home"
  },
  {
    "id":"2",
    "label":"Produtos"
  },
  {
    "id":"3",
    "label":"Contato"
  }
]

function App() {
  return (
    <div className="container">
      <Header logo="Logo Imagem" listaLink = {links}/>
      <Button label="Primeiro botão" cor="azul"/>
      <Button label="Primeiro botão" cor="red"/>
    </div>
  )
}
export default App;

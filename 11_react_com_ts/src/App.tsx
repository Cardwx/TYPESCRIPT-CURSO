
// 4 - importando componente
import FirstComponent from "./components/FirstComponent"
// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent"
import Destructiring, {Category} from "./components/Destructiring"

// 6 - useState
import State from "./components/State"

// 8 - type
type textOrNull = string | null

type fixed = "Isso" | "ou" | "aquilo"

function App() {
  // 1 - variáveis
  const name: string = "Matheus"
  const age: number = 30
  const isWorking: boolean = true

  // 2- funções

  const userGreeting = (name:string): string => {
      return `Olá, ${name}`
  }

  // 8 - type
  const myText: textOrNull = "tem algum texto aqui"
  let mySecondText: textOrNull = null

 // mySecondText = "opa"
//  const testandoFixed: fixed = "tofa"

    return (
    <div className="App">
      <h1>Type script com react</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <p>Está trabalhando!</p>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent/>
      <SecondComponent name="Segundo"/>

      <Destructiring title="Primeiro post" 
       content="Algum contéudo"
       commentsQty={10}
       tags = {["js", "ts"]}
        category={Category.TS}
       />

      <Destructiring title="Segundo post" 
       content="Contéudo Bom"
       commentsQty={10}
       tags = {["js", "ts"]}
       category={Category.JS}
       /> 

       <State />
       { myText &&
        <p>Tem texto na variável</p>
       }
       {mySecondText && <p>Tem texto na variável</p>}
    </div>
  );
}

export default App;

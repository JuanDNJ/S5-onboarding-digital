import { useState } from "react"
import Card from "./components/Card"
function App() {

  const [step, setStep] = useState(0)
  
  const tutorialData: [] = [
    {
        title:"Dedica moltes hores",
        description:"Un minim de 30 hores a la setmana. Si no en tens prou, haurás de dedicar-li més hores. Al principi sembla impossible, peró notarás una millora rápidament.",
        bgColor:"blue",
        image: "./hores.png"
    },
    {
        title:"Programa projectes propis",
        description:"Més val 10 hores traballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implició en el projecte ajudara a accelerar el teu aprenentatge.",
        bgColor:"silver",
        image: "./projectes.png"
    },
    {
        title:"Procura descansar",
        description:"Descanasar bé i desconnectar són vitals. D´aquesta manera reduiràs l`estrés i l`ansietat. Milloraràs la teva concentració i consolidarás el teu aprenentatge.",
        bgColor:"orange",
        image: "./descans.png"
    }
]
  return (
      <Card currentCardData={tutorialData[step]}/>
  )
}

export default App

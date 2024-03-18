import type { CardData } from "./types";
import { useState } from "react";
import Card from "./components/Card";
import ChangeTramsition from "./components/ChangeTransition";
function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((stat) => stat + 1);
  const backStep = () => setStep((stat) => stat - 1);

  const actions = {
    next: nextStep,
    back: backStep,
  };

  const tutorialData: CardData[] = [
    {
      title: "Dedica moltes hores",
      description:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, peró notarás una millora rápidament.",
      bgColor: "rgb(115, 115, 243)",
      image: "./time_managment.svg",
    },
    {
      title: "Programa projectes propis",
      description:
        "Més val 10 hores traballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implició en el projecte ajudara a accelerar el teu aprenentatge.",
      bgColor: "rgb(151, 150, 150)",
      image: "./meditation.svg",
    },
    {
      title: "Procura descansar",
      description:
        "Descanasar bé i desconnectar són vitals. D´aquesta manera reduiràs l`estrés i l`ansietat. Milloraràs la teva concentració i consolidarás el teu aprenentatge.",
      bgColor: "rgb(252, 204, 116)",
      image: "./programming.svg",
    },
  ];
  
  return (
    <section className="container">
      <ChangeTramsition />
      <Card
        cards={tutorialData}
        actions={actions}
        step={step}
        cardData={tutorialData}
      />
    </section>
  );
}

export default App;

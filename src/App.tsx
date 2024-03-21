import { useState } from "react";
import Card from "./components/Card";
import { tutorialData } from "./data";

const App = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((step) => step + 1);
  const backStep = () => setStep((step) => step - 1);

  const actions = {
    next: nextStep,
    back: backStep,
  };

  return (
    <section className="container">
      <Card actions={actions} step={step} cardData={tutorialData} />
    </section>
  );
};

export default App;

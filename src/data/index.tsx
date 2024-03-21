import meditation from "../assets/svg/meditation.svg";
import timeManagment from "../assets/svg/time_managment.svg";
import programming from "../assets/svg/programming.svg";
import { CardData } from "../types";

export const tutorialData: CardData[] = [
  {
    title: "Dedica moltes hores",
    description:
      "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, peró notarás una millora rápidament.",
    bgColor: "rgb(115, 115, 243)",
    image: timeManagment,
  },
  {
    title: "Programa projectes propis",
    description:
      "Més val 10 hores traballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implició en el projecte ajudara a accelerar el teu aprenentatge.",
    bgColor: "rgb(151, 150, 150)",
    image: programming,
  },
  {
    title: "Procura descansar",
    description:
      "Descanasar bé i desconnectar són vitals. D´aquesta manera reduiràs l`estrés i l`ansietat. Milloraràs la teva concentració i consolidarás el teu aprenentatge.",
    bgColor: "rgb(252, 204, 116)",
    image: meditation,
  },
];

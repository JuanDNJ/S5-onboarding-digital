# S5. Onboarding digital React + TypeScript + Vite

La creació d'un Onboarding digital. Aquesta aplicació dispondrà de dos botons per a avançar o retrocedir a través de les frases, amb l'acompanyament d'una imatge que es modificarà.
A continuació, presentem un exemple de les 3 pantalles de l'aplicació. En el moment de la seva utilització, només es visualitzarà una pantalla a la vegada.

![Imagen](./public/img-tres-cards.png)

## Passos a seguir

1. Crear un component: Card.  ✔️

2. Carregar el component Card dins del component App.   ✔️

3. En el component App, defineix l'array tutorialData, que conté la informació de cada pas que es mostrarà a l'usuari.   ✔️

4. Crea el primer estat mitjançant el hook useState, per portar el compte del pas en què ens trobem.   ✔️

5. Passa mitjançant props les dades del primer pas al component Card.   ✔️

6. Utilitza a Card.js les dades proporcionades per props per mostrar a l'usuari el títol i la descripció del primer pas.   ✔️

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Maquetar el component Card

![Resultado](./public/resultado.png)

Per ara, la teva aplicació pot mostrar només una frase. En aquest exercici farem que pugui mostrar totes les frases de l'onBoarding.

En aquest exercici farem que es vagin mostrant els diferents passos a l’usuari/ària.

1. Implementar una funció nextStep a App.js, que vagi incrementant el valor de l'estat step en una unitat.   ✔️

2. Passa per props al component Card, la funció nextStep i crida-la des del JSX del component Card. D'aquesta manera, quan l'usuari/ària faci clic al botó en el component Card, s'executarà la funció nextStep, que en modificar el valor de l'estat "step".   ✔️
  ✔️
3. Veuràs que passa el següent objecte de l'array tutorialData al component Card.

## Maq

Has de maquetar el component Card de forma responsive.

![Maquetacion](./public/maquetacion.png)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

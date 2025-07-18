import "./App.css";
import FAQ_Card from "./components/FAQ_Card";

const App = () => {
  return (
    <main className="relative min-h-dvh flex flex-col items-center justify-center px-6 bg-purple-100 bg-[url('./background-pattern-mobile.svg')] sm:bg-[url('./background-pattern-desktop.svg')] bg-no-repeat bg-contain">
      <FAQ_Card />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/HammamYousef" target="_blank">
          Hammam Yousef
        </a>
        .
      </div>
    </main>
  );
};

export default App;

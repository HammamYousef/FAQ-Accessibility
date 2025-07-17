import "./App.css";
import FAQ_Card from "./components/FAQ_Card";

const App = () => {
  return (
    <main className="relative h-dvh flex flex-col items-center justify-center bg-purple-100 bg-[url('./assets/images/background-pattern-desktop.svg')] bg-no-repeat bg-contain">
      <FAQ_Card />

      {/* FAQs

      What is Frontend Mentor, and how will it help me?

      Frontend Mentor offers realistic coding challenges to help developers improve their 
      frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
      all levels and ideal for portfolio building.

      Is Frontend Mentor free?

      Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
      option providing access to a range of projects suitable for all skill levels.

      Can I use Frontend Mentor projects in my portfolio?

      Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!

      How can I get help if I'm stuck on a Frontend Mentor challenge?
      
      The best place to get help is inside Frontend Mentor's Discord community. There's a help 
      channel where you can ask questions and seek support from other community members. */}

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Hammam Yousef</a>.
      </div>
    </main>
  );
};

export default App;

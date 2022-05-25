import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <Projects />
      <About />
      <ContactMe />
    </div>
  );
}
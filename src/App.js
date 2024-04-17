import "./App.css";
import Intro from "./introduction";
import "./fonts.css";
import "./introduction.css";
import "./skills.css";
import SkillStickers from "./skills";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <SkillStickers></SkillStickers>
    </div>
  );
}

export default App;

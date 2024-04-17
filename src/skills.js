import cssimg from "./images/css.png";
import htmlimg from "./images/html.png";
import jsimg from "./images/javas.png";
import reactimg from "./images/react.png";
import sqlimg from "./images/sql.png";
import mongodb from "./images/mongodb.png";

export default function SkillStickers() {
  return (
    <div>
      <div id="skillsettitle">
        <h1>Skill Set</h1>
      </div>
      <div id="skillbox">
        <div className="skillbox">
          <div className="html">
            <img src={htmlimg}></img>
          </div>
          <h1>HTML</h1>
        </div>
        <div className="skillbox">
          <div className="css">
            <img src={cssimg}></img>
          </div>
          <h1>CSS</h1>
        </div>
        <div className="skillbox">
          <div className="js">
            <img src={jsimg}></img>
          </div>
          <h1>Javascript</h1>
        </div>
        <div className="skillbox">
          <div className="react">
            <img src={reactimg}></img>
          </div>
          <h1>React</h1>
        </div>
        <div className="skillbox">
          <div className="sql">
            <img src={sqlimg}></img>
          </div>
          <h1>SQL</h1>
        </div>
        <div className="skillbox">
          <div className="mongodb">
            <img src={mongodb}></img>
          </div>
          <h1>MONGODB</h1>
        </div>
        <div className="comingsoon">
          <p>in progress...</p>
        </div>

        <div className="comingsoon">
          <p>in progress...</p>
        </div>

        <div className="comingsoon">
          <p>in progress...</p>
        </div>
      </div>
    </div>
  );
}

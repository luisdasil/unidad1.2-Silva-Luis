import React from "react";
import Body from "./Body";

const Main = ({ pageBody }) => {
  return (
    <div>
      <Body body={pageBody} />
      <nav>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=5257s"
              target="_blank"
            >
              Aprende React
            </a>{" "}
            <br /> <br />
            <a href="https://es.reactjs.org/" target="_blank">
              Documentacion de React
            </a>
          </li>
        </ul>
      </nav>
      <br />
    </div>
  );
};

export default Main;

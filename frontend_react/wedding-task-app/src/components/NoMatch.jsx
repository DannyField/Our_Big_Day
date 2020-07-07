import React from "react";
import "../stylesheets/Intro.css";

class NoMatch extends React.Component {
  render() {
    return (
      <div className="Intro">
        <h1>Welcome to Our Wedding Planning Site!</h1>
        <p>
          This site is purely for June and I to plan our upcoming wedding in
          April 2021. It allows us to create tasks and contact details as we
          plan for the big day.
        </p>
        <p>
          It is also for me to test 'Ruby on Rails' and 'React' to create a
          simple site.
        </p>
      </div>
    );
  }
}

export default NoMatch;

import React from 'react';
import PreviousHomeworks from './PreviousHomeworks';
import HomeworkWeek3 from './HomeworkWeek3'
const todosDynamic = [
  {
    id: 1,
    description: "Get out of bed",
    deadline: "2017-09-11",
    done: false
  },
  {
    id: 2,
    description: "Brush teeth",
    deadline: "2017-09-10",
    done: false
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadline: "2017-09-09",
    done: false
  }
];

function App() {
  return (
    <div className="App">
      <PreviousHomeworks todos={todosDynamic} />
      <hr />
      <HomeworkWeek3 />

    </div>
  );
}

export default App;

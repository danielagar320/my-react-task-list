import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./app.css"

const latestTask = [
  {name: "Buy a new gaming laptop"},
  {name: "Complete a previous task"},
  {name: "Create video for youtube"},
  {name: "Create a new portfolio"}
]

function App() {
  return ( 
      <div className="App">
        <Header/>
        <TaskList list={latestTask}/>
      </div>  
  );
}
export default App

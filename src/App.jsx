import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./app.css"



function App() {
  return ( 
      <div className="App">
        <Header/>
        <TaskList/>
      </div>  
  );
}
export default App

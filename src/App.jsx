import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./app.css"
import Themes from "./components/theme";
import { ThemeProvider } from "styled-components";


function App() {
  return ( 
    <ThemeProvider theme={Themes["light"]}>
      <div className="App">
        <Header/>
        <TaskList/>
      </div> 

    </ThemeProvider>
       
  );
}
export default App

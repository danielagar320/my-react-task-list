import { Task } from "./Task";

export const TaskList = (props) =>{

    function handleSubmit(e){
        e.preventDefault;

    }

    const{list} = props;
    return(
        <div>
            <div className="textbox">
                <input  type="text" placeholder="Add your new todo"/>
                <button>Add</button>
            </div>

            <ul>
                {list.map((task, index) => (
                <Task key={index} name={task.name} />
            ))}
            </ul>

        </div>

    );

}
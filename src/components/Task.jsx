export const Task =(props)=>{
    const {name} = props;
    return (
        <div>
            <label className="container">
                <input type="checkbox" />
                {name}
            </label>
        </div>
    );
};
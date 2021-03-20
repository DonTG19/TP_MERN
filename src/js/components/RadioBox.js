function RadioBox(props){
    return (
        <div className="form-check">
            <input className="form-check-input" name={props.name} type="radio" id={props.id}/>
            <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
        </div>
    );
}
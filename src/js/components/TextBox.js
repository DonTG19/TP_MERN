function TextBox(props){
    return (
        <div className="mb-3">
            { props.label != null && <label htmlFor={props.id} className="form-label">{props.label}</label> }
            <input type="text" autoComplete="off" className="form-control" id={props.id} placeholder={props.placeholder} />
        </div>
    );
}
function GroupCheckBox(props){
    return (
        <div className="group-check-div">
            <h4>{props.title}</h4>
            <div>{props.children}</div>
        </div>
    )
}
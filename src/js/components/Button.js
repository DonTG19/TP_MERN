function Button(props){
    return (
        <div className="button">
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">{props.text}</button>
        </div>
    );
}
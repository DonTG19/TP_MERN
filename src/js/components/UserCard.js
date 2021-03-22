function UserCard(props){
    return (
        <div className="user-card">
            <div className="image-bloc">
                <img src={props.image || "images/user.png"} alt="User profil photo" />
            </div>
            <div>{props.children}</div>
            <div className="icons">
                <IconButton id={props.id} clickAction={props.updateUserUI} icon="images/edit.svg" />
                <IconButton id={props.id} clickAction={props.confirmDelete} icon="images/delete.svg" />
            </div>
        </div>
    );
}
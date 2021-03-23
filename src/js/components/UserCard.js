function UserCard(props){
    return (
        <div className="user-card">
            <div className="image-bloc">
                <img src={props.image} alt="User profil photo" />
            </div>
            <div>{props.children}</div>
            <div className="icons">
                <IconButton id={props.id} clickAction={props.infosUserUI} icon="images/more.svg" />
                <IconButton id={props.id} clickAction={props.updateUserUI} icon="images/edit.svg" />
                <IconButton id={props.id} clickAction={props.confirmDelete} icon="images/delete.svg" />
            </div>
        </div>
    );
}

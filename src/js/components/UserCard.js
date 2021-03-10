function UserCard(props){
    return (
        <div className="user-card">
            <div className="image-bloc">
                <img src={props.image || "images/user.png"} alt="User profil photo" />
            </div>
            <div>{props.children}</div>
            <div className="icons">
                <IconButton icon="images/edit.svg" />
                <IconButton icon="images/delete.svg" />
            </div>
        </div>
    );
}
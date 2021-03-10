function UserCard(props){
    return (
        <div className="user-card">
            <div>
                <img src={props.image || "images/user.png"} alt="User profil photo" />
            </div>
            <div>{props.children}</div>
            <div>
                <IconButton icon="images/edit.svg" />
                <IconButton icon="images/delete.svg" />
            </div>
        </div>
    );
}
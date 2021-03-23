class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {idUser: 0};

        this.showConfirmDeleteModal = this.showConfirmDeleteModal.bind(this);
        this.mapUser = this.mapUser.bind(this);
    }

    showConfirmDeleteModal(idUser){
        this.setState({idUser});
        new bootstrap.Modal(document.getElementById('deleteUser'), {}).show();
    }

    mapUser(user){
        return (
            <UserCard key={user._id} id={user._id} infosUserUI={this.props.infosUserUI} confirmDelete={this.showConfirmDeleteModal} updateUserUI={this.props.updateUserUI} image="images/logo.png">
                <h4>{user.username}</h4>
                <h4>{user.gender}</h4>
            </UserCard>
        )
    }

    render() {
        return (
                this.props.users.length != 0 ?
                <section>
                    <div>
                        {this.props.users.map(this.mapUser)}
                    </div>
                    {
                        this.props.numberUser > 10 && 
                        <Pagination numberUser={this.props.numberUser} onPaginate={this.props.onPaginate}/>
                    }
                    <DeleteUser id={this.state.idUser} onUserDeleted={this.props.onUserDeleted}/>
                </section>
                :
                <section>
                    <p>Aucun utilisateur dans la base de données !</p>
                </section>
        );
    }

}

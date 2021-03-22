class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {users: []};
        this.modal = React.createRef();

        this.getUserListe = this.getUserListe.bind(this);
        this.displayNewUser = this.displayNewUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.showUpdateUserUI = this.showUpdateUserUI.bind(this);
        this.getUser = this.getUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        makeRequest('/users', 'GET', this.getUserListe);
    }

    getUserListe(users){
        users = JSON.parse(users) || [];
        this.setState({ users });
    }

    displayNewUser(user){
        let users = this.state.users;
        users.unshift(user);
        this.setState({ users });
    }

    removeUser(id){
        this.setState(function(state){
            return {users: state.users.filter(user => user._id != id)};
        });
    }

    updateUser(userUpdate){
        this.setState(function(state){
            return {users: state.users.map(function(user){
                if(user._id == userUpdate._id)
                    return userUpdate;
                return user;
            })};
        });
    }

    showUpdateUserUI(idUser){
        makeRequest('/users/' + idUser, 'GET', this.getUser);
    }

    getUser(user){
        user = JSON.parse(user);

        this.modal.current.setState({
            _id: user._id,
            username: user.username,
            gender: user.gender,
            dob: user.dob,
            news: user.news,
            email: user.email,
            update: true
        });

        document.querySelector('#staticBackdropLabel').text = "Modifier un utilisateur";

        new bootstrap.Modal(document.getElementById('staticBackdrop'), {}).show();
    }
    
    render(){
        return (
            <div>
                <Header />
                <div id="main">
                    <FilterBloc/>
                    <UserList users={this.state.users} updateUserUI={this.showUpdateUserUI} onUserDeleted={this.removeUser}/>
                    <Modal
                        ref={this.modal} 
                        onUserAdded={this.displayNewUser}
                        onUserUpdated={this.updateUser}
                        title="Modifier un utilisateur"
                    />
                </div>
            </div>
        );
    }
}
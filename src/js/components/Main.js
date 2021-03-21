class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {users: []};

        this.getUserListe = this.getUserListe.bind(this);
        this.displayNewUser = this.displayNewUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
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
    
    render(){
        return (
            <div>
                <Header />
                <div id="main">
                    <FilterBloc/>
                    <UserList users={this.state.users} onUserDeleted={this.removeUser}/>
                    <Modal onUserAdded={this.displayNewUser}/>
                </div>
            </div>
        );
    }
}
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {users: []};

        this.getUserListe = this.getUserListe.bind(this);
        this.displayNewUser = this.displayNewUser.bind(this);
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
    
    render(){
        return (
            <div>
                <Header />
                <div id="main">
                    <FilterBloc/>
                    <UserList users={this.state.users}/>
                    <Modal onUserAdded={this.displayNewUser}/>
                </div>
            </div>
        );
    }
}
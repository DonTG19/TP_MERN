class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {users: []};

        this.getUserListe = this.getUserListe.bind(this);
    }

    componentDidMount(){
        console.log('User liste did mount');
        makeRequest('/users', 'GET', this.getUserListe);
    }

    getUserListe(users){
        console.log(users);
        /*this.setState({ users: users.map(function(user){
            <UserCard image="images/logo.png">
                <h4>Don TSIANGA Govane</h4>
                <h4>19 décembre 1997</h4>
            </UserCard>
        })});*/
    }

    render() {
        return (
                this.state.users.length != 0 ?
                <section>
                    <div>{this.state.users}</div>
                    <Pagination />
                </section>
                :
                <section>
                    <p>Aucun utilisateur dans la base de données !</p>
                </section>
        );
    }

}
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {users: [], userNumber: 0, fetch: true};
        this.modal = React.createRef();
        this.modalInfosUser = React.createRef();
        this.filterBloc = React.createRef();

        this.getUserListe = this.getUserListe.bind(this);
        this.displayNewUser = this.displayNewUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.showUpdateUserUI = this.showUpdateUserUI.bind(this);
        this.getUserForUpdate = this.getUserForUpdate.bind(this);
        this.getUserForInfos = this.getUserForInfos.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.getNumberOfUser = this.getNumberOfUser.bind(this);
        this.requestForUsers = this.requestForUsers.bind(this);
        this.requestForCountUsers = this.requestForCountUsers.bind(this);
        this.onFiltered = this.onFiltered.bind(this);
        this.showInfosUserUI = this.showInfosUserUI.bind(this);
        this.onFetched = this.onFetched.bind(this);
    }

    componentDidMount(){
        this.requestForUsers();
    }

    requestForUsers(page = 1){
        let filters = this.filterBloc.current.state;
        makeRequest('/users/' + page +'/10?search=' + filters.username + '&gender=' + filters.gender + "&dob=" + filters.dob, 'GET', this.getUserListe);
        this.requestForCountUsers();
    }

    requestForCountUsers(){
        let filters = this.filterBloc.current.state;
        makeRequest('/countusers?search=' + filters.username + '&gender=' + filters.gender + "&dob=" + filters.dob, 'GET', this.getNumberOfUser);
    }

    onFiltered(){
        this.requestForUsers();
    }

    onFetched(rab){
        this.requestForUsers();
        this.setState(function(state){
            return {
                userNumber: parseInt(state.userNumber) + parseInt(rab)
            }
        });
    }

    getNumberOfUser(res){
        res = parseInt(res);
        let filters = this.filterBloc.current.state;
        if(filters.username != '' || filters.gender != 0 || filters.dob != 0){
            this.setState({ userNumber: res, fetch: true });
        }else{
            this.setState({ userNumber: res, fetch: res >= 100 });
        }
    }

    getUserListe(users){
        users = JSON.parse(users) || [];
        this.setState({ users });
    }

    displayNewUser(user){
        //let users = this.state.users;
        //users.unshift(user);
        this.setState(function(state){
            return {
                //users,
                userNumber: state.userNumber + 1
            }
        });
        this.showInfosUserUI(user._id);
    }

    removeUser(id){
        this.setState(function(state){
            return {
                //users: state.users.filter(user => user._id != id),
                userNumber: state.userNumber - 1
            };
        });
        this.requestForUsers();
    }

    updateUser(userUpdate){
        this.setState(function(state){
            return {users: state.users.map(function(user){
                if(user._id == userUpdate._id)
                    return userUpdate;
                return user;
            })};
        });
        this.showInfosUserUI(userUpdate._id);
    }

    showUpdateUserUI(idUser){
        makeRequest('/users/' + idUser, 'GET', this.getUserForUpdate);
    }

    showInfosUserUI(idUser){
        makeRequest('/users/' + idUser, 'GET', this.getUserForInfos);
    }

    getUserForUpdate(user){
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

        new bootstrap.Modal(document.getElementById('staticBackdrop'), {}).show();
    }

    getUserForInfos(user){
        user = JSON.parse(user);
        this.modalInfosUser.current.displayUser(user);
    }
    
    render(){
        return (
            <div>
                <Header />
                <div id="main">
                    <FilterBloc 
                        numberOfUsers={this.state.userNumber} 
                        disabled={this.state.fetch}
                        onFetched={this.onFetched} 
                        onFiltered={this.onFiltered}
                        ref={this.filterBloc} 
                    />
                    <UserList 
                        users={this.state.users} 
                        numberUser={this.state.userNumber}
                        updateUserUI={this.showUpdateUserUI} 
                        infosUserUI={this.showInfosUserUI}
                        onUserDeleted={this.removeUser}
                        onPaginate={this.requestForUsers}
                    />
                    <Modal
                        ref={this.modal} 
                        onUserAdded={this.displayNewUser}
                        onUserUpdated={this.updateUser}
                        title="Modifier un utilisateur"
                    />
                    <ShowUser ref={this.modalInfosUser}/>
                </div>
            </div>
        );
    }
}

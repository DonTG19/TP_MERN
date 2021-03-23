class Mock extends React.Component{
    constructor(props){
        super(props);
        this.state = {disabled: true};

        this.getRandomUsers = this.getRandomUsers.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.parseJSON = this.parseJSON.bind(this);
        this.showUser = this.showUser.bind(this);
        this.printError = this.printError.bind(this);
        this.getFetchResponse = this.getFetchResponse.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    componentDidMount(){
        this.disableButton();
    }

    disableButton(){
        let totalUsers = this.props.numberOfUsers, add;
        if(totalUsers < 5){
            add = 5 - totalUsers;
            this.setState({disabled: false});
        }else{
            this.setState({disabled: true});
        }
    }

    getRandomUsers(){
        fetch('https://randomuser.me/api/?inc=gender,email,login,picture,dob&results=2')
        .then(this.handleErrors)
        .then(this.parseJSON)
        .then(this.showUser)
        .catch(this.printError)
    }

    handleErrors (res){
        if(!res.ok){
            throw error(res.status);
        }
        return res;
    }
      
    parseJSON (res){
        return res.json();
    }
      
    showUser (res){
        let results = res.results;
        results = results.map(function(result){
            return{
                username: result.login.username,
                gender: result.gender,
                dob: result.dob.date,
                news: result.dob.age > 24,
                email: result.email,
                photo: result.picture.medium
            };
        });
        makeRequest('/fetchusers', 'POST', this.getFetchResponse, {users: results});
        return 1;
    }

    getFetchResponse(res){
        res = JSON.parse(res);
        console.log(res.message);
        this.props.onFetched(res.number);
        this.disableButton();
    }
      
    printError (error){
        console.log(error);
    }

    render(){
        return (
            <div>
                <h4>{this.props.numberOfUsers}</h4>
                <Button disabled={this.state.disabled} click={this.getRandomUsers} text="Fetch"/>
            </div>
        );
    }
}

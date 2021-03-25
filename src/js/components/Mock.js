class Mock extends React.Component{
    constructor(props){
        super(props);

        this.getRandomUsers = this.getRandomUsers.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.parseJSON = this.parseJSON.bind(this);
        this.showUser = this.showUser.bind(this);
        this.printError = this.printError.bind(this);
        this.getFetchResponse = this.getFetchResponse.bind(this);
    }

    getRandomUsers(){
        let add = 100 - this.props.numberOfUsers;
        fetch('https://randomuser.me/api/?inc=gender,email,login,picture,dob&results=' + add)
        .then(this.handleErrors)
        .then(this.parseJSON)
        .then(this.showUser)
        .catch(this.printError)
    }

    handleErrors (res){
        if(!res.ok){
            throw new Error(res.status);
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
                news: result.dob.age > 50,
                email: result.email,
                photo: result.picture.medium
            };
        });
        makeRequest('/fetchusers', 'POST', this.getFetchResponse, {users: results});
        return 1;
    }

    getFetchResponse(res){
        res = JSON.parse(res);
        this.props.displayToast(res.message);
        this.props.onFetched(res.number);
    }
      
    printError (error){
        this.props.displayToast(error);
    }

    render(){
        return (
            <div id="mock">
                <h4>{this.props.numberOfUsers} utilisateur(s)</h4>
                <Button disabled={this.props.disabled} click={this.getRandomUsers} text="Fetch"/>
            </div>
        );
    }
}

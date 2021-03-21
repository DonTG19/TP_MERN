class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            gender: 'male',
            dob: '',
            news: false,
            email: ''
        };

        this.create = this.create.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onDobChange = this.onDobChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onNewsChange = this.onNewsChange.bind(this);
        this.getCreateResponse = this.getCreateResponse.bind(this);
    }

    create(){
        makeRequest('/users', 'POST', this.getCreateResponse, this.state);
        this.setState({
            username: '',
            gender: 'male',
            dob: '',
            news: false,
            email: ''
        });
    }

    getCreateResponse(response){
        console.log(response);
    }

    onUsernameChange(username){
        this.setState({username});
    }

    onEmailChange(email){
        this.setState({email});
    }

    onDobChange(dob){
        this.setState({dob});
    }

    onGenderChange(gender){
        this.setState({gender});
    }

    onNewsChange(news){
        this.setState({news});
    }

    render(){
        return (
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Ajouter un utilisateur</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <TextBox id="user" value={this.state.username} onValueChange={this.onUsernameChange} name="username" placeholder="Nom d'utilisateur"/>
                        <div>
                            <RadioBox 
                                id="genre1" 
                                value="male" 
                                checked={this.state.gender == 'male'} 
                                onValueChange={this.onGenderChange} 
                                name="gender" 
                                label="Masculin"
                            />
                            <RadioBox 
                                id="genre2" 
                                value="female" 
                                checked={this.state.gender == 'female'} 
                                onValueChange={this.onGenderChange} 
                                name="gender" 
                                label="Féminin"
                            />
                        </div>
                        <TextBox id="dob" value={this.state.dob} onValueChange={this.onDobChange} name="dob" placeholder="Date de naissance"/>
                        <div>
                            <RadioBox 
                                id="news1" 
                                value="true" 
                                checked={this.state.news} 
                                onValueChange={this.onNewsChange} 
                                name="news" 
                                label="Oui"
                            />
                            <RadioBox 
                                id="news2" 
                                value="false" 
                                checked={!this.state.news} 
                                onValueChange={this.onNewsChange} 
                                name="news" 
                                label="Non"
                            />
                        </div>
                        <TextBox id="email" value={this.state.email} onValueChange={this.onEmailChange} name="email" placeholder="Adresse électronique"/>
                        <FileInput/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" className="btn btn-primary" onClick={this.create}>Enregistrer</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
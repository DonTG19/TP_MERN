class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            _id: 0,
            username: '',
            gender: 'male',
            dob: '',
            news: false,
            email: '',
            update: false
        };

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onDobChange = this.onDobChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onNewsChange = this.onNewsChange.bind(this);
        this.getCreateResponse = this.getCreateResponse.bind(this);
        this.getUpdateResponse = this.getUpdateResponse.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    create(){
        makeRequest('/users', 'POST', this.getCreateResponse, this.state);
    }

    update(){
        makeRequest('/users/' + this.state._id, 'PUT', this.getUpdateResponse, this.state);
    }

    getCreateResponse(response){
        response = JSON.parse(response);
        console.log(response.message);
        this.props.onUserAdded({
            _id: response.id,
            username: this.state.username,
            gender: this.state.gender
        });
        this.closeModal();
    }

    getUpdateResponse(resp){
        console.log(resp);
        this.props.onUserUpdated({
            _id: this.state._id,
            username: this.state.username,
            gender: this.state.gender
        });
        this.closeModal();
    }

    closeModal(){
        bootstrap.Modal.getInstance(document.getElementById('staticBackdrop')).hide();
        this.setState({
            _id: 0,
            username: '',
            gender: 'male',
            dob: '',
            news: false,
            email: '',
            update: false
        });
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
                        <h5 className="modal-title" id="staticBackdropLabel">
                            {this.state.update ? "Modifier un utilisateur" : "Ajouter un utilisateur"}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <TextBox id="user" value={this.state.username} onValueChange={this.onUsernameChange} name="username" placeholder="Nom d'utilisateur"/>
                        <div className="radio-box">
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
                        <div className="radio-box">
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
                        <button type="button" className="btn btn-primary" onClick={this.state.update ? this.update : this.create}>Enregistrer</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
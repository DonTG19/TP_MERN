class FilterBloc extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', gender: 0, dob: 0};

        this.onNameChange = this.onNameChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onDobChange = this.onDobChange.bind(this);
        this.openModalAddUser = this.openModalAddUser.bind(this);
    }

    onNameChange(username){
        this.setState({username}, function(){this.props.onFiltered()});
    }

    onGenderChange(gender){
        this.setState({gender}, function(){this.props.onFiltered()});
    }

    onDobChange(dob){
        this.setState({dob}, function(){this.props.onFiltered()});
    }

    openModalAddUser(){
        new bootstrap.Modal(document.getElementById('staticBackdrop'), {}).show();
    }

    render(){

        return (
            <aside>
                <Mock numberOfUsers={this.props.numberOfUsers} disabled={this.props.disabled} onFetched={this.props.onFetched}/>
                <hr/>
                <div>
                    <h4 id="label-search">Rechercher</h4>
                    <TextBox id="username" value={this.state.username} onValueChange={this.onNameChange} name="username" placeholder="Nom d'utilisateur"/>
                </div>
                <hr/>
                <h4>Trier par</h4>
                <GroupCheckBox title="Sexe">
                    <CheckBox id="male" checked={this.state.gender} onValueChange={this.onGenderChange} value="-1" label="Male"/>
                    <CheckBox id="female" checked={this.state.gender} onValueChange={this.onGenderChange} value="1" label="Female"/>
                </GroupCheckBox>
                <GroupCheckBox title="Date de naissance">
                    <CheckBox id="petit" checked={this.state.dob} onValueChange={this.onDobChange} value="-1" label="Plus petit"/>
                    <CheckBox id="grand" checked={this.state.dob} onValueChange={this.onDobChange} value="1" label="Plus grand"/>
                </GroupCheckBox>
                <hr/>
                <Button click={this.openModalAddUser} text="Ajouter un utilisateur"/>
            </aside>
        );
    }
}

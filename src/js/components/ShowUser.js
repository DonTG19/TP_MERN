class ShowUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {user: {}};
        
        this.ok = this.ok.bind(this);
    }

    ok(){
        bootstrap.Modal.getInstance(document.getElementById('showUser')).hide();
    }

    displayUser(user){
        this.setState({user});
        new bootstrap.Modal(document.getElementById('showUser'), {}).show();
    }

    render(){
        return (
            <div className="modal fade" id="showUser" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteUserLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Informations utilisateur</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h4><span>Username : </span><span>{this.state.user.username}</span></h4>
                        <h4><span>Gender : </span><span>{this.state.user.gender}</span></h4>
                        <h4><span>Dob : </span><span>{this.state.user.dob}</span></h4>
                        <h4><span>News : </span><span>{this.state.user.news}</span></h4>
                        <h4><span>Email : </span><span>{this.state.user.email}</span></h4>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.ok}>Ok</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

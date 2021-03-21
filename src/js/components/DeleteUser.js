class DeleteUser extends React.Component{
    constructor(props){
        super(props);
        
        this.delete = this.delete.bind(this);
        this.getDeleteResponse = this.getDeleteResponse.bind(this);
    }

    delete(){
        makeRequest('/users/' + this.props.id, 'DELETE', this.getDeleteResponse);
    }

    getDeleteResponse(response){
        console.log(response);

        this.props.onUserDeleted(this.props.id);

        bootstrap.Modal.getInstance(document.getElementById('deleteUser')).hide();
    }

    render(){
        return (
            <div className="modal fade" id="deleteUser" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteUserLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Supprimer un utilisateur</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Voulez vous vraiment supprimer cet utilisateur ?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" className="btn btn-primary" onClick={this.delete}>Supprimer</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
function Modal(){
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Ajouter un utilisateur</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <TextBox id="user" placeholder="Nom d'utilisateur"/>
                    <div>
                        <RadioBox id="genre1" name="gender" label="Masculin"/>
                        <RadioBox id="genre2" name="gender" label="Féminin"/>
                    </div>
                    <TextBox id="dob" placeholder="Date de naissance"/>
                    <div>
                        <RadioBox id="news1" name="news" label="Oui"/>
                        <RadioBox id="news2" name="news" label="Non"/>
                    </div>
                    <TextBox id="email" placeholder="Adresse électronique"/>
                    <FileInput/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" className="btn btn-primary">Enregistrer</button>
                </div>
            </div>
            </div>
        </div>
    );
}
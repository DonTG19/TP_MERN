function FilterBloc(props){
    return (
        <aside>
            <div>
                <h4>Rechercher</h4>
                <TextBox id="username" placeholder="Nom d'utilisateur" />
            </div>
            <h4>Trier par</h4>
            <GroupCheckBox title="Sexe">
                <CheckBox id="male" label="Male" />
                <CheckBox id="female" label="Female" />
            </GroupCheckBox>
            <GroupCheckBox title="Date de naissance">
                <CheckBox id="petit" label="Plus petit" />
                <CheckBox id="grand" label="Plus grand" />
            </GroupCheckBox>
            <Button text="Ajouter un utilisateur"/>
        </aside>
    );
}
function FilterBloc(props){
    return (
        <aside>
            <div>
                <h4>Rechercher</h4>
                <TextBox id="username" placeholder="Nom d'utilisateur" />
            </div>
            <GroupCheckBox title="Trier par">
                <CheckBox id="male" label="male" />
                <CheckBox id="female" label="female" />
            </GroupCheckBox>
            <GroupCheckBox title="Date de naissance">
                <CheckBox id="petit" label="Plus petit" />
                <CheckBox id="grand" label="Plus grand" />
            </GroupCheckBox>
        </aside>
    );
}
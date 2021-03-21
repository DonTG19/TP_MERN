class UserList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
                this.props.users.length != 0 ?
                <section>
                    <div>
                        {
                            this.props.users.map(function(user){
                                return (
                                    <UserCard key={user._id} image="images/logo.png">
                                        <h4>{user.username}</h4>
                                        <h4>{user.gender}</h4>
                                    </UserCard>
                                )
                            })
                        }
                    </div>
                    <Pagination />
                </section>
                :
                <section>
                    <p>Aucun utilisateur dans la base de données !</p>
                </section>
        );
    }

}
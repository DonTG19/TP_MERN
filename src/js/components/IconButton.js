class IconButton extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.confirmDelete(this.props.id);
    }

    render(){
        return (
            <div>
                <img src={this.props.icon} onClick={this.handleClick} alt="icon" />
            </div>
        );
    }
}
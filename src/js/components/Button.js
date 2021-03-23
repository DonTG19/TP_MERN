class Button extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.click();
    }

    render(){
        return (
            <div className="button">
                <button disabled={this.props.disabled} onClick={this.handleClick}>{this.props.text}</button>
            </div>
        );
    }
}

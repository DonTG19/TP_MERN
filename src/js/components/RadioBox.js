class RadioBox extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        if(e.target.checked)
            this.props.onValueChange(e.target.value);
    }

    render(){
        return (
            <div className="form-check">
                <input 
                    checked={this.props.checked && 'checked'}
                    className="form-check-input" 
                    value={this.props.value} 
                    onChange={this.handleChange} 
                    name={this.props.name} 
                    type="radio" 
                    id={this.props.id}
                />
                <label className="form-check-label" htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        );
    }
}
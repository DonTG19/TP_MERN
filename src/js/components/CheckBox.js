class CheckBox extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        if(e.target.checked)
            this.props.onValueChange(e.target.value);
        else
            this.props.onValueChange(0);
    }

    render(){
        return (
            <div className="form-check">
                <input 
                    onChange={this.handleChange}
                    className="form-check-input" 
                    value={this.props.value} 
                    type="checkbox" 
                    checked={this.props.checked == this.props.value}
                    id={this.props.id}
                />
                <label className="form-check-label" htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        );
    }
}

class TextBox extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onValueChange(e.target.value);
    }

    render(){
        return (
            <div className="mb-3">
                { this.props.label != null && <label htmlFor={this.props.id} className="form-label">{this.props.label}</label> }
                <input 
                    type="text" 
                    value={this.props.value} 
                    name={this.props.name} 
                    autoComplete="off" 
                    className="form-control" 
                    id={this.props.id} 
                    placeholder={this.props.placeholder} 
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
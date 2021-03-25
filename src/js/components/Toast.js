class Toast extends React.Component{
    constructor(props){
        super(props);
        this.state = {message: ''};

        this.displayToast = this.displayToast.bind(this);
    }

    displayToast(message){
        this.setState({message});
        new bootstrap.Toast(document.querySelector('.toast'), {}).show();
    }

    render(){
        return (
            <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">{this.state.message}</div>
                    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        );
    }
}

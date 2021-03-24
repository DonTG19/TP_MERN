class Pagination extends React.Component{
    constructor(props){
        super(props);

        this.makePagination = this.makePagination.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.onPaginate(e.target.text);
    }

    makePagination(){
        let links = [], index = 0, page = Math.ceil(this.props.numberUser / 10);
        for (index; index < page; index++) {
            links.push(
                <li key={index} className="page-item">
                    <a className="page-link" onClick={this.handleClick} href="#">{index + 1}</a>
                </li>
            );
        }
        return links;
    }

    render(){
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {this.makePagination()}
                </ul>
            </nav>
        );
    }
}
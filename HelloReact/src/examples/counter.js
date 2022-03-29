class Counter extends React.Component {

    constructor(props)
    {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.state = {
            number: 0
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {
                number: prevState.number + 1
            }
        })
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                number: prevState.number - 1
            }
        })
    }

render(){
    return (
        <div>
            <h1>Number : {this.state.number}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
        </div>
    );
}

}

ReactDOM.render(<Counter />,document.getElementById('root'));
import React from 'react';

class Pokemon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            results: [],
        };
    }

    render() {

        return (
            <div className="results">

                <br />

                <div className="button">
                    <button onClick={this.getPokemon}>
                        Check Pokemon
                    </button>
                </div>
                {/* <div>
                    {
                        this.state.results.map((element) => <button key={element.url}>{element.name}</button>)
                    }
                </div> */}
                <div>
                    {this.state.results.length && this.state.results.map(
                        (element) => {
                            return (
                                <tr>
                                    <td>{element.name}</td>
                                    <td>{element.url}</td>
                                </tr>
                            );
                        })}
                </div>
            </div>
        );
    }


    getPokemon = () => {

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
            .then(response => response.json())
            .then(json => json.results)
            .then(data => {
                this.setState({
                    results: data,
                });
            });
        console.log(this.state.results);
    }
}

export default class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (
            <div className="main">
                <div className="title">
                    What's the pokemon?
                    <a href='https://pokeapi.co/?ref=morioh.com&utm_source=morioh.com'>open pokemon map</a>
                </div>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>url</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Pokemon />
                    </tbody>
                </table>
                <br />
                <hr />
            </div>

        );
    }
}
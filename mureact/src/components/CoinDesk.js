import React from 'react';


class CoinDesk extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bpi: [],

        };
    }

    render() {

        return (
            <div className="bpi">

                <br />

                <div className="button">
                    <button onClick={this.getCoinDesk}>
                        Check CoinDesk
                    </button>
                </div>
                <tbody>
                    {Object.entries(this.state.bpi)
                        .map(([key, value]) => {
                            return <tr>
                                <td>{key}</td><td>{value.code}</td> <td>{value.rate}</td>
                            </tr>
                        })
                    }
                </tbody>
            </div>
        );
    }


    getCoinDesk = () => {

        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then(response => response.json())
            .then(json => json.bpi)
            .then(data => {
                this.setState({
                    bpi: data,
                });

            });

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
                    What's the CoinDesk?
                    <a href='https://api.coindesk.com/v1/bpi/currentprice.json'>open coindesk map</a>
                </div>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>code</th>
                            <th>rate</th>
                        </tr>
                    </thead>

                    <CoinDesk />

                </table>
                <br />
                <hr />
            </div>
        );
    }
}
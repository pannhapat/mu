import React from 'react';

class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            location: "",
            apikey: "",
            place: "",
            temp: "",
            weather: ""
        };
    }

    render() {

        return (
            <div className="weather">
                <label htmlFor="text">Enter Location</label>
                <br />
                <div id="location">
                    <input onChange={this.changeValue}
                        type="text" value={this.state.location} />
                </div>
                <label htmlFor="text">Enter ApiKey</label>
                <br />
                <div id="apikey">
                    <input onChange={this.changeValue2}
                        type="text" value={this.state.apikey} />
                </div>
                <div className="button">
                    <button onClick={this.getWeather}>
                        Check Weather
                    </button>
                </div>
                <div>
                    <h1>Location: {this.state.place}</h1>
                    <h3>Temperature: {this.state.temp} C</h3>
                    <h3>Condition: {this.state.weather}</h3>
                </div>
            </div>
        );
    }

    changeValue = (event) => {

        this.setState({
            location: event.target.value,
        });
    }
    changeValue2 = (event) => {

        this.setState({
            apikey: event.target.value
        });
    }

    getWeather = () => {
        fetch(`
https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=${this.state.apikey}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    place: data.name,
                    temp: data.main.temp,
                    weather: data.weather[0].main
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
                    What's the Weather?
                    <a href='https://home.openweathermap.org/myservices'>open weather map</a>
                </div>
                <hr />
                <Weather />
                <br />
                <hr />
            </div>
        );
    }
}
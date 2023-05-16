const React = require("react");
const moment = require('moment');
const DefaultLayout = require("../layout/Default");
const Destination = require("../../models/destination");

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    console.log(flights)
    return (
      <DefaultLayout
      title = 'Flight Index: display all flights'
      >
        <a href='/flights/new'>Create a Flight</a>
        <ul>
          {flights.map((flight, i) => {
            return (
              <li key={i}>
                Airline: <a href={`/flights/${flight._id}`}>{flight.airline}</a>
                <br />
                Flight No: {flight.flightNo} <br />
                Depature: {moment(flight.departs).format('ddd MM/DD/YYYY, hh:mm a')}
                <br />

                <a href={`/flights/${flight._id}/edit`}>Edit This Flight</a>
                <form 
                  action={`/flights/${flight._id}?_method=DELETE`} 
                  method="POST"                 > 
                <input type="submit" value="DELETE" />
                </form><br />
                
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
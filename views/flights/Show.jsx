const React = require('react')
const destination = require('../../models/destination')
const DefaultLayout = require('../layout/Default')

const date = ()=>{
    let date = new Date();
    date.setDate(date.getDate()+1)
    return date;
}


class Show extends React.Component{

    render (){

        const flight = this.props.flight;
        const departs = new Date(flight.departs).toString();
        const arrival = date().toString(); 
        const destination = flight.destination
        console.log(destination,'testing')

        return (
            <DefaultLayout>
                <h1>This page shows individual flight info</h1>
                <a href='/flights'>Flight Index</a><br />
                <a href='/flights/new'>Book a Flight</a><br />
                <br />
                Airline: {flight.airline}<br />
                Flight No: {flight.flightNo}<br />
                Departure: {departs} <br />
                Airport: {flight.airport} <br />
                

                <a href={`/flights/${flight._id}/edit`}>Edit This Flight</a><br />

                Arrival: {flight.destination.arrival} <br />
                Airport: {flight.destination.airport} <br />
            </DefaultLayout>
        )
    }
}

module.exports = Show


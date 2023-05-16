const React = require('react')
const DefaultLayout = require('../layout/Default')
const Destination = require('../../models/destination')

class New extends React.Component{
    render() {
        
        
        const date = ()=>{
            let date = new Date();
            date.setFullYear(date.getFullYear()+1)
            return date;
          }

        const defaultAirport = Destination.airport || 'SAN'
        return(
            <
            DefaultLayout
            title = 'Book a Flight'
            link = '/flights'
            text = 'Back to flight index'
            >
                <form action='/flights' method='POST'>
                    <label>Airlines:</label>
                    <select name='airline'>
                        <option>American</option>
                        <option>Southwest</option>
                        <option>United</option>
                    </select><br />

                    Flight No.:<input type='text' name='flightNo' placeholder='10 - 9999' /><br />
                    Departure:<input type='datetime-local' name='departs' defaultValue={date().toISOString().slice(0, -8)}/><br />

                    <label>Departure Airport:</label> 
                    <select name='airport' defaultValue='SAN'>
                        <option>AUS</option>
                        <option>DAL</option>
                        <option>LAX</option>
                        <option>SAN</option>
                        <option>SEA</option>
                    </select><br />

                    <label>Arrival Airport:</label>
                    <select name={defaultAirport} defaultValue='SAN'>
                        <option>AUS</option>
                        <option>DAL</option>
                        <option>LAX</option>
                        <option>SAN</option>
                        <option>SEA</option>
                    </select><br />
                    <input type='submit' value='Create a Flight' />
                </form>

            </DefaultLayout>
        )
    }
}

module.exports = New;


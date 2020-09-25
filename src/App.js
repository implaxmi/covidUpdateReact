import React from 'react';

import { Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';




class App extends React.Component {

    state = {
        data : {},
        country : ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState( {data : fetchedData} )
    }

    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchData(country);
        this.setState( { data : fetchedData, country : country});

        //set the state 
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
            <h1>COVID-19</h1>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country} />
            </div>
        )
    }
}

export default App;
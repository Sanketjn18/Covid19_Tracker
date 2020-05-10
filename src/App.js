import React, { Component } from 'react'
import Cards from "./components/Cards/Cards"
import Charts from "./components/Charts/Charts"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import styles from "./App.module.css";
import { fetchData } from "./api" ;

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 data: {},
                 country:"",
        }
    }
   async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
        
    }
    handleCountryChange = async (country) => {
        //fetch data
        const fetchedData = await fetchData(country);
        // console.log(fetchedData)
        // console.log(country);
        

        //set data to state
        this.setState({data:fetchedData, country: country});

    }
    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={require("./Images/virus.png")} alt="COVID-19" />
                <Cards data={this.state.data} />
                <CountryPicker CountryChange={this.handleCountryChange}/>
                <Charts data={this.state.data} country={this.state.country}/>
                
            </div>
        )
    }
}

export default App

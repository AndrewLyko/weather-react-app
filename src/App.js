import {useState} from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";
import WeatherForecastChart from "./components/WeatherForecastChart/WeatherForecastChart";

import './styles/main.scss'

function App() {

    const [searchValue, setSearchValue] = useState('');



    return (
        <main className="App">
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Weather/>
            <WeatherForecastChart/>
        </main>
    );
}

export default App;

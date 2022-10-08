import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";
import WeatherForecastChart from "./components/WeatherForecastChart/WeatherForecastChart";

import './styles/main.scss'

function App() {
    return (
        <main className="App">
            <SearchBar/>
            <Weather/>
            <WeatherForecastChart/>
        </main>
    );
}

export default App;

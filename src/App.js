import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";
import WeatherForecastChart from "./components/WeatherForecastChart/WeatherForecastChart";

function App() {
    return (
        <main>
            <SearchBar/>
            <Weather/>
            <WeatherForecastChart/>
        </main>
    );
}

export default App;

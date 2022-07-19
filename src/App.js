import './App.css';
import MainComponents from "./components/MainComponents/MainComponents";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className="app-wrapper">
            <div>
                <Header/>
            </div>
            <MainComponents/>
        </div>
    );
}

export default App;

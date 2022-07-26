import './App.css';
import MainComponents from "./components/MainComponents/MainComponents";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className="app-wrapper">
            <div style={{margin: "1.7vw"}}>
                <Header/>
            </div>
            <MainComponents/>
        </div>
    );
}

export default App;

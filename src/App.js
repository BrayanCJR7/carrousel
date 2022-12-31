import './App.css';
import {Carrousel} from "./components/carrousel/carrousel";
import {MainContainer} from "./components/theme";

function App() {
    return (
        <div className="App">
            <MainContainer>
                <Carrousel/>
            </MainContainer>
        </div>
    );
}

export default App;

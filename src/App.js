import './App.scss';
import AppRouter from "./react/components/AppRouter";
import Navbar from "./react/sections/Navbar";

function App() {
    return (
        <main>
            <Navbar />
            <AppRouter />
        </main>
    );
}

export default App;
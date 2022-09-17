import s from './App.module.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const App = (props) => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <Content/>
        </div>
    )
}

export default App;

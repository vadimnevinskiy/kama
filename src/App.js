import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";



const App = (props) => {
    return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Sidebar sidebar={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogs} /> } />
                <Route path='/profile' render={ () => <Profile profile={props.state.profile} /> } />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
            <Footer />
        </div>
    </BrowserRouter>
    );
}


export default App;

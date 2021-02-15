import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";



const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar sidebar={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.pages.dialogs} addMessage={props.addMessage} writingMessage={props.writingMessage} /> } />
                <Route path='/profile' render={ () => <Profile profile={props.state.pages.profile} addPost={props.addPost} writingPostMessage={props.writingPostMessage} /> } />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
            <Footer />
        </div>
    );
}


export default App;

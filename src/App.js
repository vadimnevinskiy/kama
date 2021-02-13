import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
    return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route path='/dialogs' component={Dialogs} dialogs={props.dialogs} messages={props.messages} />*/}
                {/*<Route path='/profile' component={Profile} />*/}
                <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} /> } />
                <Route path='/profile' render={ () => <Profile posts={props.posts} /> } />
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

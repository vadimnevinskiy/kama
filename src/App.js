import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar store={props.store}/>
            {/*<Sidebar sidebar={props.state.sidebar}/>*/}
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} /> } />
                <Route path='/profile' render={ () => <Profile store={props.store} /> } />
                {/*<Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogs} dispatch={props.dispatch} /> } />*/}
                {/*<Route path='/profile' render={ () => <Profile profile={props.state.profile} dispatch={props.dispatch} /> } />*/}
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
            <Footer />
        </div>
    );
}


export default App;

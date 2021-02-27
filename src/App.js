import './App.css';
import React from 'react';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";




const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <SidebarContainer />
            {/*<Sidebar sidebar={props.state.sidebar}/>*/}
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                <Route path='/profile' render={ () => <Profile /> } />
                <Route path='/users' render={ () => <UsersContainer /> } />
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

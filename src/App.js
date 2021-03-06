import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';





const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <SidebarContainer />
            {/*<Sidebar sidebar={props.state.sidebar}/>*/}
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
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

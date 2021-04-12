import './App.css';
import React, {Suspense} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from './components/Footer/Footer';
import SidebarContainer from './components/Sidebar/SidebarContainer';



import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import PreloaderBar from "./components/common/PreloaderBar/PreloaderBar";


// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainerWithHooks from "./components/Profile/ProfileContainerWithHooks";
// import UsersContainer from './components/Users/UsersContainer';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';
// import LoginContainer from "./components/Login/LoginContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainerWithHooks = React.lazy(() => import('./components/Profile/ProfileContainerWithHooks'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));




class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <SidebarContainer/>
                    {/*<Sidebar sidebar={props.state.sidebar}/>*/}
                    <div className="app-wrapper-content">
                        <Suspense fallback={<PreloaderBar />}>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainerWithHooks/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/login' render={() => <LoginContainer/>}/>
                        </Suspense>
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
let AppContainer = compose(
    withRouter,
    connect(
        mapStateToProps,
        {initializeApp}
    )
)(App);

const AppMain = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}
window.store = store;
export default AppMain;

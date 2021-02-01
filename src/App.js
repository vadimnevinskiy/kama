import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <div className="h-block">
                    header
                </div>
            </header>
            <nav className='nav'>
                <a href="#">Profile</a>
                <a href="#">Messages</a>
                <a href="#">News</a>
                <a href="#">Music</a>
                <a href="#">Settings</a>
            </nav>
            <div className='content'>
                <div className="user">
                    <div className="user-avatar">
                        <img src="https://f3.mylove.ru/J1NuDGy2QF.jpg"/>
                    </div>
                    <div className="user-name">
                        <h3>MrBluff</h3>
                        <div className="status">
                            Заходил 6 минут назад
                        </div>
                    </div>
                </div>

                <div className="mypost">
                    <div className="post-item">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorem esse est explicabo
                        labore maxime molestiae obcaecati quaerat sequi similique.
                    </div>
                    <div className="post-item">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi magni suscipit.
                    </div>
                </div>

            </div>
        </div>
    );
}


export default App;

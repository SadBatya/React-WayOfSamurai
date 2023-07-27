import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header name='Vladimir' age='20' />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              exact
              path='/dialogs/*'
              element={<Dialogs state={props.state.messagesPage} />}
            />
            <Route
              path='/profile'
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route path='/News' element={<News />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

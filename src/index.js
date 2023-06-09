import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LanguageContextProvider from './context/LanguageContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import LoginContextProvider, { LoginContext } from './context/LoginContext';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import { store } from './store';
import SectionFavorite from './components/SectionFavorite';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';;
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

  

    <ThemeContextProvider  >
      <LanguageContextProvider>
        <LoginContextProvider>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>

                <Route path='/' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/favorite' element={<SectionFavorite />} />
                <Route path='/about/:id' element={<About />} />
                <Route path='*' element={<NotFound />} />
                {/* <App />  */}
              </Routes>
            </BrowserRouter>
          </Provider>
        </LoginContextProvider>
      </LanguageContextProvider>
    </ThemeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

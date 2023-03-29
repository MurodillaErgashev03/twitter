import React, { useEffect, useState } from 'react';
import { LanguageContext } from './context/LanguageContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import SectionTrends from './components/SectionTrends';
import SectionHero from './components/SectionHero';
import { LoginContext } from './context/LoginContext';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from './context/ThemeContext';



function App() {

        

    const favorite = useSelector(prev => prev.favorite)


    const dispatch = useDispatch();

    const addFavoriteHandler = (user) => {
        user.favorite = (!user.favorite);




        dispatch({

            type: 'add',
            payload: user,
        });



    };


 const { setIsLogin, isLogin } = useContext(LoginContext);

    const logoutHandler = () => {
        setIsLogin(false);
        localStorage.removeItem('token');
    }

    const { setLanguageType, languageType } = useContext(LanguageContext);
    const [users, setUsers] = useState([]);




    useEffect(() => {
        fetch('https://6407723177c1a905a0f95674.mockapi.io/users/')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            })
    }, [])
    return (
        <div className="container">

            <main className='flex'>

                <SectionHero />

                <section className='home w-[915px]'>
                    <div className=' home__top-block p-5 flex items-center'>
                        <h2 className=' home__top-title font-bold text-2xl'>
                            Home
                        </h2>
                        <div className='flex gap-[20px] about p-[5px] text-[24px] mr-[10px] '>

                            {!isLogin ? (
                                <Link
                                    to={'/login'}>
                                    Log in
                                </Link>
                            ) : (
                                <button
                                    onClick={logoutHandler}
                                >
                                    Log out
                                </button>
                            )}
                        </div>
                        <div className='flex '>
                            <select onChange={(evt) => {
                                localStorage.setItem('lang', evt.target.value)
                                setLanguageType(evt.target.value)
                            }}>
                                <option value="eng">Eng</option>
                                <option value="ru">Rus</option>
                            </select>
                            <img className='ml-[5px]' src="./images/yulduz.svg" alt="" />
                        </div>
                    </div>



                    <div className='happening'>
                        <div className=' pl-5 pr-5 flex'>
                            <img className='w-16' src="./images/bobur.svg" alt="" />
                            <div className='mt-4 ml-3.5'>
                                <h3 className='happening-title font-semibold '>
                                    What’s happening
                                </h3>
                            </div>
                        </div>
                        <div className='ml-24 mt-8 flex gap-x-5'>
                            <img src="./images/image.svg" alt="" />
                            <img src="./images/gif.svg" alt="" />
                            <img src="./images/stats.svg" alt="" />
                            <img src="./images/smile.svg" alt="" />
                            <img src="./images/schedule.svg" alt="" />
                        </div>
                        <button className=' happening-btn bg-blue-500  font-bold text-white py-3 px-7 opacity-40 '>
                            Tweet
                        </button>
                    </div>

                    {users.map((user, i) => (
                        <div key={i} >
                            <div className='designsta pl-6 pr-6 pt-8 flex pb-5'>
                                <div className='des-top '>
                                    <Link to='/about'> <img className='w-[60px] h-[60px] rounded-[50%]	' src={user.avatar} alt="" /></Link>
                                </div>

                                <div className='des-block ml-4'>

                                    <div className='flex mt-1 '>
                                        <h3 className='des-center-title  font-bold mr-1'>{user.name}</h3>
                                        <a className='des-center-link opacity-60  font-normal' href="#">{user.username} · 25m</a>
                                    </div>
                                    <p className='des-center-text font-normal'>
                                        Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
                                    </p>
                                    <p className='des-center-text font-normal' onClick={(evt) => addFavoriteHandler(user)}>
                                        {user.favorite ? '❤️' : '🤍'}
                                    </p>
                                    <div className='flex gap-24 mt-6'>
                                        <img src="images/des1.svg" alt="" />
                                        <img src="images/des2.svg" alt="" />
                                        <img src="images/des3.svg" alt="" />
                                        <img src="images/des4.svg" alt="" />
                                        <img src="images/des5.svg" alt="" />

                                    </div>
                                </div>

                                <div className='des-bottom ml-auto'>
                                    <img src="images/left-bt.svg" alt="" />
                                </div>




                            </div>
                        </div>
                    ))}

                    <div className='designsta pl-6 pr-6 pt-8 flex pb-5'  >
                        <div className='des-top '>
                            <img src="./images/creat.svg" alt="" />
                        </div>

                        <div className='des-block ml-4'>

                            <div className='flex mt-1 '>
                                <h3 className='des-center-title  font-bold mr-1'>CreativePhoto</h3>
                                <a className='des-center-link opacity-60  font-normal' href="#">@cloutexhibition · 1h</a>
                            </div>
                            <p className='des-center-text font-normal'>
                                Обетда..... <br />
                                Кечиринглар
                            </p>
                            <img className='mt-4 mb-6' src="./images/food.png" alt="" />
                            <div className='flex gap-24 mt-6'>
                                <img src="images/des1.svg" alt="" />
                                <img src="images/des2.svg" alt="" />
                                <img src="images/des3.svg" alt="" />
                                <img src="images/des4.svg" alt="" />
                                <img src="images/des5.svg" alt="" />

                            </div>
                        </div>

                        <div className='des-bottom ml-auto'>
                            <img src="images/left-bt.svg" alt="" />
                        </div>
                    </div>





                </section>
                <SectionTrends />


            </main>
        </div>

    );
}

export default App;

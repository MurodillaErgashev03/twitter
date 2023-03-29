import React from 'react';
import { language } from '../language';
import { LanguageContext } from '../context/LanguageContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useRef } from 'react';

function SectionHero() {

    const section = useRef();
    
    
    const {themee, setThemee} = useContext(ThemeContext);
    // console.log(themee)


    const { setLanguageType, languageType } = useContext(LanguageContext);
    // const [theme, setTheme] = useState(true)

    const Theme = () => {
        setThemee(themee => !themee);

        // if (themee) {
        //     section.current.className = "dark";
        // }
        // else{
        //     section.current.className = "hero";
        // }
    }

    return (

        <section ref={section} className='hero'>



            <ul className='list-group mt-8 ml-44 w-[275px] '>
                <li className='mb-12'>
                    <img src="./images/twitter-logo.svg" alt="" />
                </li>

                <Link to='/'>  <li className='list-group-item flex items-center mb-8 '>
                    <img className='mr-5' src="./images/left1.svg" alt="" />
                    <h3 className='font-bold text-lg	leading-6	'>{language[languageType].main.section1.ul.li.title1}</h3>
                </li>  </Link>

                <li className='list-group-item flex items-center mb-8 '>
                    <img className='mr-5' src="./images/Vector.svg" alt="" />
                    <h3 className='font-semibold text-lg	leading-6	'>{language[languageType].main.section1.ul.li.title2}</h3>
                </li>

                <li className='list-group-item flex items-center mb-8 '>
                    <img className='mr-5' src="./images/notification.svg" alt="" />
                    <h3 className='font-semibold text-lg	leading-6	'>{language[languageType].main.section1.ul.li.title3}</h3>
                </li>

                <li className='list-group-item flex items-center mb-8 '>
                    <img className='mr-5' src="./images/messages.svg" alt="" />
                    <h3 className='font-semibold text-lg	leading-6	'>{language[languageType].main.section1.ul.li.title4}</h3>
                </li>

                <li className='list-group-item flex items-center mb-8 '>
                    <img className='mr-5' src="./images/bookmarks.svg" alt="" />
                    <h3 className='font-semibold text-lg	leading-6	'>{language[languageType].main.section1.ul.li.title5}</h3>
                </li>

                <li className='list-group-item flex items-center mb-8 '>
                    <img className='mr-5' src="./images/lists.svg" alt="" />
                    <h3 className='font-semibold text-lg	leading-6	'>{language[languageType].main.section1.ul.li.title6}</h3>
                </li>

                <li className='list-group-item flex items-center mb-8 '>
                    <img className='mr-5' src="./images/profile.svg" alt="" />
                    <h3 className='font-semibold text-lg	leading-6	'>
                        <Link to='/about' >{language[languageType].main.section1.ul.li.title7}</Link>
                    </h3>
                </li>

                <li className='list-group-item flex items-center mb-8 '>
                    <img className='mr-5' src="./images/more.svg" alt="" />
                    <h3 className='font-semibold  text-lg	leading-6	'>{language[languageType].main.section1.ul.li.title8}</h3>
                </li>
                <li className='list-group-item flex items-center mb-8 '>
                    <img className='mr-5  w-[28px] h-[28px]' src="./images/heart.svg" alt="" />
                    <Link to='/favorite'>  <h3 className='font-semibold  text-lg	leading-6	'>{language[languageType].main.section1.ul.li.title11}</h3></Link>
                </li>

                <li
                    className='list-group-item flex items-center mb-8 '>
                    <h2
                        onClick={(evt) => Theme(themee)} >
                        {themee ? (

                            <div className='list-group-item flex items-center mb-8 '>
                                <img className='mr-5 w-[28px] h-[28px]' src="./images/sun.svg" alt="" />
                                <button
                                    value={themee}
                                    className='light font-semibold  text-lg	leading-6	'>
                                   {language[languageType].main.section1.ul.li.title12}
                                </button>
                            </div>
                        ) : (
                            <div className='list-group-item flex items-center mb-8 '>
                                <img className='mr-5 w-[28px] h-[28px]' src="./images/moon.svg" alt="" />
                                <button
                                    value={themee}
                                    className='light font-semibold  text-lg	leading-6	'>
                                    {language[languageType].main.section1.ul.li.title10}
                                </button>
                            </div>
                        )}
                    </h2>
                    {/* <button  className='light font-semibold  text-lg	leading-6	'></button> */}
                </li>


                <li className='list-group-item'>
                    <button className=' left__btn bg-blue-500 text-white   py-5 w-[250px]  font-bold  text-lg	leading-6	 border-none '>
                        {language[languageType].main.section1.ul.li.title9}
                    </button>
                </li>

                <li className='flex items-center mt-64 mb-5'>
                    <img src="./images/bobur.svg" alt="" />
                    <div className='ml-2'>
                        <h3 className='font-semibold text-base	'	>Bobur</h3>
                        <a className='font-normal	 opacity-60	' href="#">@bobur_mavlonov</a>
                    </div>
                    <img className='ml-9' src="./images/left-bt.svg" alt="" />
                </li>

            </ul>
        </section>
    )
}

export default SectionHero
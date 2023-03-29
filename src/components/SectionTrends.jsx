import React from 'react'
import { language } from '../language';
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';


function SectionTrends() {
    const { setLanguageType, languageType } = useContext(LanguageContext);
    return (
        <div className='flex'>

            <section className='trends pt-5 pl-7 relative'>

                <form className='trends-form'>
                    <input placeholder={language[languageType].main.section2.ul.li.title1} className='trends-input w-[374px]' type="text" />
                </form>

                <div className='trends-top-block'>
                    <div className='flex space-between box'>
                        <h3 className='trends-top__title'>
                            {language[languageType].main.section2.ul.li.title2}
                        </h3>
                        <img src="./images/settings.svg" alt="" />
                    </div>

                    <ul className='trends-list'>
                        <li className='trends-list-item mt-5 flex justify-between '>
                            <div>
                                <p className='trends-text font-normal opacity-60'>
                                    {language[languageType].main.section2.ul.li.title3}
                                </p>
                                <h3 className='trends-item-title'>
                                    {language[languageType].main.section2.ul.li.title4}
                                </h3>
                                <p className='trends-text  font-normal opacity-60'>
                                    {language[languageType].main.section2.ul.li.title5}
                                </p>
                            </div>
                            <img src="./images/left-bt.svg" alt="" />
                        </li>
                        <li className='trends-list-item mt-5 flex justify-between '>
                            <div>
                                <p className='trends-text font-normal opacity-60'>
                                    {language[languageType].main.section2.ul.li.title3}
                                </p>
                                <h3 className='trends-item-title'>
                                    {language[languageType].main.section2.ul.li.title4}
                                </h3>
                                <p className='trends-text  font-normal opacity-60'>
                                    {language[languageType].main.section2.ul.li.title5}
                                </p>
                            </div>
                            <img src="./images/left-bt.svg" alt="" />
                        </li>
                        <li className='trends-list-item mt-5 flex justify-between '>
                            <div>
                                <p className='trends-text font-normal opacity-60'>
                                    {language[languageType].main.section2.ul.li.title3}
                                </p>
                                <h3 className='trends-item-title'>
                                    {language[languageType].main.section2.ul.li.title4}
                                </h3>
                                <p className='trends-text  font-normal opacity-60'>
                                    {language[languageType].main.section2.ul.li.title5}
                                </p>
                            </div>
                            <img src="./images/left-bt.svg" alt="" />
                        </li>
                        <a className='trends-link' href="#">{language[languageType].main.section2.ul.li.title6}</a>
                    </ul>
                </div>

                <div className='might'>
                    <h3 className='might-title'>
                        {language[languageType].main.section2.ul.li.title7}
                    </h3>
                    <div className='flex items-center'>
                        <img src="./images/mushtariy.svg" alt="" />
                        <div className='might-box'>
                            <h4 className='might-text '> {language[languageType].main.section2.ul.li.title8}</h4>
                            <a className='might-link mt-[10px]' href="">@Mushtar565266</a>
                        </div>
                        <button className='might-btn w-[100px]'>{language[languageType].main.section2.ul.li.title10}</button>
                    </div>
                    <div className='flex items-center mt-6 justify-between'>
                        <img src="./images/shuhrat.svg" alt="" />
                        <div className='might-box'>
                            <h4 className='might-text'> {language[languageType].main.section2.ul.li.title9}</h4>
                            <a className='might-link mt-[10px] ' href="">@mrshukhrat</a>
                        </div>
                        <button className='might-btn w-[100px] '>{language[languageType].main.section2.ul.li.title10}</button>
                    </div>
                    <a className='might-link mt-[25px]' href="#">{language[languageType].main.section2.ul.li.title6}</a>
                </div>

                <div className='trends-bottom w-[380px]'>
                    <div className=' flex flex-wrap gap-[10px] '>
                        <p className='trends-bottom-text '>{language[languageType].main.section2.ul.li.title11}</p>
                        <p className='trends-bottom-text'>{language[languageType].main.section2.ul.li.title12}</p>
                        <p className='trends-bottom-text'>{language[languageType].main.section2.ul.li.title13}</p>
                    </div>
                    <div className='flex mt-[5px] flex-wrap gap-[10px]'>
                        <p className='trends-bottom-text '>{language[languageType].main.section2.ul.li.title14}</p>
                        <p className='trends-bottom-text'>{language[languageType].main.section2.ul.li.title15}</p>
                        <p className='trends-bottom-text'>{language[languageType].main.section2.ul.li.title16}</p>
                        <p className='trends-bottom-text'>{language[languageType].main.section2.ul.li.title17}</p>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default SectionTrends
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SectionHero from '../components/SectionHero';
import SectionLike from '../components/SectionLike';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';




  function About() {

    
  
    
    const  params = useParams();
    console.log(params);
  

    useEffect(() => {
        fetch('https://6407723177c1a905a0f95674.mockapi.io/users/' + params.id)
            .then((res) => res.json())
            .then((data) => {
            
                console.log(data)
            })
    }, [])
  return (
    <div className="container">

      <main className='flex'>


         
        <SectionHero />
        <section className='main w-[915px] '>
            <div>

                <div className='hero-block flex justify-between items-center  '>
                    <div className='flex pt-[22px] pl-[31px] pb-[15px] items-center '>
                        <Link className='mr-[40px]' to="/"><img src="./images/arrow.svg" alt="" /></Link>
                        <div>
                            <h2 className='font-bold text-[20px] leading-[27px]'>
                                Bobur
                            </h2>
                            <p className='font-normal text-[16px] leading-[21px] mt-[2px]'>
                                1,070 Tweets
                            </p>
                        </div>
                           
                                
                           
                    </div>
                </div>

                <div className='relative bobur-top-block border-b-[3px] pb-[1px]'>
                    <img src="./images/big-img.png" alt="img" />
                    <img className='absolute top-[205px] left-[25px]' src="./images/bobur1.png" alt="" />
                    <button className='mt-[20px] ml-[764px] w-[120px] h-[44px] border-[1px] border-[gray] rounded-[50px] font-semibold text-[18px] leading-[24px]'>Edit profile</button>
                    <h3 className='mt-[10px] ml-[25px] font-bold text-[24px] leading-[32px]'>
                        Bobur
                    </h3>
                    <a className='ml-[25px] font-normal text-[16px] leading-[21px] opacity-60'>
                        @bobur_mavlonov
                    </a>
                    <p className='ml-[25px] mt-[15px] font-normal text-[18px] leading-[24px]  '>
                        UX&UI designer at
                        <a className='text-[#1DA1F2] ml-[5px]' href="#"> @abutechuz</a>
                    </p>


                    <div className='ml-[25px] mt-[15px]'>
                        <ul className='flex items-center justify-between'>
                            <li className='flex '>
                                <img src="./images/b1.svg" alt="" />
                                <p className='ml-[5px]  font-normal text-[18px] leading-[24px] opacity-60 '>
                                    Mashag’daman
                                </p>
                            </li>
                            <li className='flex '>
                                <img src="./images/b2.svg" alt="" />
                                <a href='' className='ml-[5px]  text-[#1DA1F2] font-normal text-[18px] leading-[24px] '>
                                    t.me/boburjon_mavlonov
                                </a>
                            </li>
                            <li className='flex '>
                                <img src="./images/b3.svg" alt="" />
                                <p className='ml-[5px]  font-normal text-[18px] leading-[24px] opacity-60 '>
                                    Born November 24, 2000
                                </p>
                            </li>
                            <li className='flex mr-[24px] '>
                                <img src="./images/b4.svg" alt="" />
                                <p className=' ml-[5px] font-normal text-[18px] leading-[24px] opacity-60 '>
                                    Joined May 2020
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className='flex mt-[15px] ml-[25px]'  >
                        <p className='font-normal text-[18px] leading-[24px]'><span className=' mr-[5px] font-bold text-[18px] leading-[24px]'>67</span>Following</p>
                        <p className='font-normal text-[18px] leading-[24px] ml-[30px]'><span className=' mr-[5px] font-bold text-[18px] leading-[24px]'>47</span>Followers</p>
                    </div>

                    <ul className='list-top flex mt-[40px] px-[50px] justify-between'>
                        <li className='tweets font-normal pb-[15px] text-[18px] leading-[24px]'>
                            Tweets
                        </li>
                        <li className='tweets font-normal pb-[15px] text-[18px] leading-[24px]'>
                            Tweets & replies
                        </li>
                        <li className='tweets font-normal pb-[15px] text-[18px] leading-[24px]'>
                            Media
                        </li>
                        <li className='tweets font-normal pb-[15px] text-[18px] leading-[24px]'>
                            Likes
                        </li>
                    </ul>



                </div>

                <div className='bobur-bottom-block'>

                    <div className=' flex mt-[15px] ml-[66px]'>
                        <img src="./images/pin.svg" alt="" />
                        <h3>
                            Pinned Tweet
                        </h3>
                    </div>

                    <div className='designsta pl-[25px] pr-[25px] pt-[10px] flex pb-[21px]'  >
                        <div className=' w-[60px] h-[60px] '>
                            <img className='w-[60px] h-[60px]' src="./images/bobur-main.svg" alt="" />
                        </div>

                        <div className=' ml-4'>

                            <div className='flex mt-1 items-center '>
                                <h3 className='text-[20px] leading-[27px]  font-bold mr-[5px] '>Bobur</h3>
                                <a className='text-[18px] leading-[24px] opacity-60  font-normal' href="#">@bobur_mavlonov · Apr 1</a>
                            </div>
                            <p className='text-[18px] leading-[24px] font-normal w-[740px] mt-[5px]'>
                                4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim
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

                    <div className='designsta pl-6 pr-6 pt-8 flex pb-5'  >

                        <div className='des-top '>
                            <img className='w-[60px] h-[60px]' src="./images/bobur-main.svg" alt="" />
                        </div>

                        <div className='des-block ml-4'>

                            <div className='flex mt-1 '>
                                <h3 className='text-[20px] leading-[27px]  font-bold mr-[5px]  mr-1'>Bobur</h3>
                                <a className=' text-[18px] leading-[24px] opacity-60  font-normal' href="#">@bobur_mavlonov · Apr 1</a>
                            </div>
                            <p className=' text-[18px] leading-[24px] font-normal mt-[5px] w-[735px]'>
                                Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz.
                            </p>
                            <p className=' text-[18px] leading-[24px] font-normal mt-[10px] w-[735px]'>
                                Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida.

                            </p>
                            <p className=' text-[18px] leading-[24px] font-normal mt-[10px] w-[735px]'>
                                Gap faqat biznes trenerlar haqida emas.
                            </p>


                            <div className='flex gap-24 mt-6'>
                                <img src="images/col1.svg" alt="" />
                                <img src="images/col2.svg" alt="" />
                                <img src="images/col3.svg" alt="" />
                                <img src="images/des4.svg" alt="" />
                                <img src="images/des5.svg" alt="" />

                            </div>
                        </div>

                        <div className='des-bottom ml-auto'>
                            <img src="images/left-bt.svg" alt="" />
                        </div>
                    </div>

                    <div className='designsta flex pl-6 pr-6 pt-8 pb-5'>


                        <div className='des-top '>
                            <img className='w-[60px] h-[60px]' src="./images/bobur-main.svg" alt="" />
                        </div>
                        <div className=' mt-1 ml-[20px] '>
                            <div className='flex'> <h3 className='text-[20px] leading-[27px]  font-bold mr-[5px]  mr-1'>Bobur</h3>
                                <a className=' text-[18px] leading-[24px] opacity-60  font-normal' href="#">@bobur_mavlonov · Apr 1</a></div>
                            <p className=' text-[18px] leading-[24px] font-normal mt-[5px] '>
                                A bo'pti maskamasman
                            </p>
                            <img className='mt-[15px]' src="./images/bobur-big.png" alt="" />
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


            </div>
        </section>
        <SectionLike/>


      </main>
    </div>
  )
}

export default About
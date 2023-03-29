import React from 'react'
import { useSelector } from 'react-redux'
import SectionHero from './SectionHero';
import SectionTrends from './SectionTrends';

function SectionFavorite() {

    const favorite = useSelector(prev => prev.favorite);
    
  return (
    <div className='container flex'>
          <SectionHero />
            <div className=' w-[915px]'>

            <div className=' home__top-block p-5 flex items-center'>
                        <h2 className=' home__top-title font-bold text-2xl'>
                            Favorite
                        </h2>
                    </div>
              <div className='p-[25px] text-[24px] mr-[10px] '>


                 
                    {favorite.map((user, i) => (
                        <div key={i} >
                            <div className='designsta pl-6 pr-6 pt-8 flex pb-5'>
                                <div className='des-top '>
                                     <img className='w-[60px] h-[60px] rounded-[50%]	' src={user.avatar} alt="" />
                                </div>

                                <div className='des-block ml-4'>

                                    <div className='flex mt-1 '>
                                        <h3 className='des-center-title  font-bold mr-1'>{user.name}</h3>
                                        <a className='des-center-link opacity-60  font-normal' href="#">{user.username} · 25m</a>
                                    </div>
                                    <p className='des-center-text font-normal'>
                                        Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
                                    </p>
                                    {/* <p className='des-center-text font-normal' onClick={(evt) => addFavoriteHandler(user)}>
                                        {user.favorite ? '❤️' : '🤍'}
                                    </p> */}
                                  
                                </div>

                            


                            </div>
                        </div>
                    ))}


              </div>
            </div>
            
            <SectionTrends />
            
    </div>
  )
}

export default SectionFavorite
import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='flex flex-col'>
            <div className='w-full min-h-screen md:h-screen'>
                <div className='w-full h-full absolute bg-[#FFFBF7]'>
                    <Image src={`/images/hypo_back.png`} alt='' width={1000} height={1000} className='w-full h-full' />
                </div>
                <div className='px-[20px] py-40 md:px-20 lg:px-40 h-full z-50 flex flex-col md:flex-row gap-[20px] items-center relative'>
                    <div className='w-full md:w-[55%] flex flex-col gap-[30px]'>
                        <span className='text-[18px] font-outfit'>I'm a product designer with a passion for using technology to reinvent and improve the world through first principle's thinking and problem centric design.</span>
                        <span className='text-[18px] font-outfit'>Born and raised in Seattle, WA, I cut my teeth in the world of design at Microsoft, designing MR interactions for the HoloLens 2. Then I moved down to San Francisco, CA, where I took my background in spatial design and used it to reinvent how people engage with their health at Forward. In my free time, I'm a collector of hobbies but the ones I show most love to are climbing, cooking, and ultimate frisbee.</span>

                    </div>
                    <div className='w-full md:w-[40%] flex flex-col h-full gap-[20px]'>
                        <div className='w-full h-[60vh]  bg-white py-40'></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[30px] px-[20px] py-20 md:px-20 lg:px-40'>
                <div className='w-full md:w-[30%]'>
                    <h1 className='font-[600] font-outfit md:text-start text-center'>EXPRIENCE</h1>
                </div>
                <div className='w-ful md:w-[70%] flex flex-col gap-[40px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[5px] text-center md:text-start'>
                            <span className='text-[16px] text-[#5A5757] font-outfit'>Comprehensive staffing limited  </span>
                            <h2 className='font-[600] text-[16px] font-outfit'>UI/UX designer (Full time)  </h2>
                        </div>
                        <span className='text-[#757575] text-[16px] font-outfit text-center md:text-start'>Designed modern medical dashboards to streamline patient management and data visualization for healthcare professionals, developed responsive medical websites ensuring accessibility and seamless navigation for both patients and staff, and created in-house management tools, including modules for leave tracking, task assignments, and project management, to optimize internal workflows.</span>
                    </div>
                  
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[5px] text-center md:text-start'>
                            <span className='text-[16px] text-[#5A5757] font-outfit'>Comprehensive staffing limited  </span>
                            <h2 className='font-[600] text-[16px] font-outfit'>UI/UX designer (Full time)  </h2>
                        </div>
                        <span className='text-[#757575] text-[16px] font-outfit text-center md:text-start'>Designed modern medical dashboards to streamline patient management and data visualization for healthcare professionals, developed responsive medical websites ensuring accessibility and seamless navigation for both patients and staff, and created in-house management tools, including modules for leave tracking, task assignments, and project management, to optimize internal workflows.</span>
                    </div>
                  
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[5px] text-center md:text-start'>
                            <span className='text-[16px] text-[#5A5757] font-outfit'>Comprehensive staffing limited  </span>
                            <h2 className='font-[600] text-[16px] font-outfit'>UI/UX designer (Full time)  </h2>
                        </div>
                        <span className='text-[#757575] text-[16px] font-outfit text-center md:text-start'>Designed modern medical dashboards to streamline patient management and data visualization for healthcare professionals, developed responsive medical websites ensuring accessibility and seamless navigation for both patients and staff, and created in-house management tools, including modules for leave tracking, task assignments, and project management, to optimize internal workflows.</span>
                    </div>
                  
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[5px] text-center md:text-start'>
                            <span className='text-[16px] text-[#5A5757] font-outfit'>Comprehensive staffing limited  </span>
                            <h2 className='font-[600] text-[16px] font-outfit'>UI/UX designer (Full time)  </h2>
                        </div>
                        <span className='text-[#757575] text-[16px] font-outfit text-center md:text-start'>Designed modern medical dashboards to streamline patient management and data visualization for healthcare professionals, developed responsive medical websites ensuring accessibility and seamless navigation for both patients and staff, and created in-house management tools, including modules for leave tracking, task assignments, and project management, to optimize internal workflows.</span>
                    </div>
                  
                   
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
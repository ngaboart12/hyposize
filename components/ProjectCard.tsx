import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface cardType {
    flexType?: string
    imageUrl?: string
}
const ProjectCard = ({ flexType,imageUrl }: cardType) => {
    return (
        <div className={`w-full flex ${flexType != "reverse" ? "md:flex-row-reverse" : "md:flex-row"} flex-col-reverse font-outfit  gap-[40px] items-center py-10`}>
            <div className={`flex flex-col gap-[10px] w-full md:w-1/4 md:items-start items-center md:justify-start justify-center `}>
                <span className='uppercase text-black font-[700] text-[32px] max-w-[300px] text-center md:text-start'>meal space  web&mobile app</span>
                <table className='mx-auto md:mx-0 w-full md:w-auto'>
                    <tbody>
                        <tr className='h-10'>
                            <td className='font-[700]'>Company</td>
                            <td>Throw</td>
                        </tr>
                        <tr className='h-10'>
                            <td className='font-[700]'>TYPE</td>
                            <td>Ui design</td>
                        </tr>
                        <tr className='h-10'>
                            <td className='font-[700]'>ROLE</td>
                            <td>Legal</td>
                        </tr>
                        <tr className='h-10'>
                            <td className='font-[700]'>YEAR</td>
                            <td>2023</td>
                        </tr>
                    </tbody>
                </table>
                <Link href={``} className='p-4 px-10 bg-[#FFB061] w-fit rounded-[12px] mx-auto md:mx-0 text-white flex flex-row items-center gap-[10px]'>
                    Explore <br /> casestudy
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11.9998H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </Link>
            </div>
            <div className=' h-[40vh] md:h-[60vh] w-full md:w-3/4 '>
                <Image src={`${imageUrl}`} alt='' width={1000} height={1000} className='w-full h-full rounded-[24px] object-cover' />
            </div>
        </div>
    )
}

export default ProjectCard
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-[10px] md:px-20 lg:px-40 py-4 flex flex-col gap-[20px] font-outfit'>
      <h1 className=' text-[80px] md:text-[100px] lg:text-[160px] text-center font-[700] text-[#FFE0C2]'>GET IN TOUCH</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-[20px]'>
        <div className='flex flex-col items-center sm:items-start sm:flex-row  gap-[20px] '>
          <Link href={`/`}>
            <svg width="70" height="70" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.0416 54.0961C24.0182 54.0961 20.3136 53.4092 16.928 52.0353C13.5424 50.6614 10.5739 48.7478 8.02241 46.2945C5.52001 43.8411 3.55734 40.9707 2.1344 37.6833C0.711468 34.3467 0 30.7648 0 26.9376C0 23.1104 0.686934 19.5776 2.0608 16.3392C3.48374 13.0518 5.44641 10.1813 7.94881 7.72801C10.4512 5.27468 13.3952 3.38561 16.7808 2.06081C20.1664 0.686937 23.871 0 27.8944 0C31.9179 0 35.6225 0.686937 39.0081 2.06081C42.3937 3.38561 45.3377 5.27468 47.8401 7.72801C50.3425 10.1813 52.2806 13.0518 53.6545 16.3392C55.0774 19.6267 55.7889 23.184 55.7889 27.0112C55.7889 30.8384 55.0774 34.3958 53.6545 37.6833C52.2806 40.9707 50.3425 43.8657 47.8401 46.3681C45.3377 48.8214 42.3937 50.735 39.0081 52.1089C35.6715 53.4337 32.016 54.0961 28.0416 54.0961ZM27.8944 42.3201C30.8384 42.3201 33.3899 41.6822 35.5489 40.4065C37.7078 39.1307 39.3761 37.3398 40.5537 35.0337C41.7313 32.7275 42.3201 30.0288 42.3201 26.9376C42.3201 24.6806 41.9766 22.6198 41.2897 20.7552C40.6518 18.8907 39.695 17.296 38.4193 15.9712C37.1435 14.5974 35.6225 13.5424 33.8561 12.8064C32.0896 12.0704 30.1024 11.7024 27.8944 11.7024C24.9504 11.7024 22.399 12.3403 20.24 13.616C18.0811 14.8427 16.4128 16.6091 15.2352 18.9152C14.0576 21.2214 13.4688 23.8955 13.4688 26.9376C13.4688 29.2928 13.7878 31.4272 14.4256 33.3409C15.1126 35.2054 16.0939 36.8246 17.3696 38.1985C18.6454 39.5233 20.1664 40.5537 21.9328 41.2897C23.6992 41.9766 25.6864 42.3201 27.8944 42.3201Z" fill="black" />
              <path fillRule="evenodd" clipRule="evenodd" d="M34.5848 19.5596C35.0341 19.5457 35.4093 19.9076 35.4229 20.368L35.6448 27.8711C35.6584 28.3315 35.3052 28.7161 34.856 28.73C34.4067 28.744 34.0315 28.382 34.0179 27.9216L33.8555 22.4312L23.5276 33.6776L28.8847 33.5112C29.334 33.4972 29.7092 33.8592 29.7228 34.3196C29.7364 34.78 29.3833 35.1646 28.934 35.1785L21.6131 35.4059C21.1638 35.4198 20.7886 35.0579 20.775 34.5975L20.5531 27.0944C20.5395 26.634 20.8927 26.2495 21.3419 26.2355C21.7912 26.2216 22.1664 26.5835 22.18 27.0439L22.3423 32.5343L32.6703 21.288L27.3131 21.4543C26.8639 21.4683 26.4887 21.1064 26.475 20.6459C26.4614 20.1855 26.8146 19.801 27.2638 19.787L34.5848 19.5596Z" fill="black" />
            </svg>
          </Link>
          <div className='flex flex-col gap-[10px] items-center sm:items-start'>
            <span className='text-[16px] text-[#FFB061] font-[500] '>SAY HELLO</span>
            <span>kwizerhypo@gmail.com</span>
            <span>0782665552</span>
          </div>
        </div>
        <div className='flex flex-col gap-[10px] items-center sm:items-start'>
          <span className='text-[16px] text-[#FFB061] font-[500] '>CUrrently</span>
          <span className='text-center sm:text-start '>Creanting user interfaces for both  mobile and web apps and design digivisual designs for tech campanies</span>
        </div>
      </div>
      <div className='w-full flex flex-row justify-between py-5'>
        <Link href={`/`} className='uppercase font-[500]'>instagram PROFILE</Link>
        <Link href={`/`} className='uppercase font-[500]'>dribble PROFILE</Link>
        <Link href={`/`} className='uppercase font-[500]'>linkedin profilE</Link>
        <Link href={`/`} className='uppercase font-[500]'>behance PROFILE</Link>
      </div>
    </div>
  )
}

export default Footer
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
    return (
        <div className='w-full'>
            <div className='w-full h-screen relative'>
                <div className='w-full h-full absolute bg-[#FFFBF7]'>
                    <Image src={`/images/hypo_back.png`} alt='' width={1000} height={1000} className='w-full h-full' />
                </div>
                <div className='h-full w-full flex flex-col items-center justify-between relative z-50 px-[10px] md:px-20'>
                    {/* take first space */}
                    <div></div>

                    <div className='flex flex-col md:flex-row gap-[60px] items-center'>
                        <div className='relative flex flex-row'>
                            <h1 className='text-right text-[50px] font-[700] leading-[60px] font-fira'>KWIZERA <br />HYPOLITE</h1>
                            <div className=' absolute bottom-[-30px] right-[-50px]'>

                                <svg width="106" height="73" viewBox="0 0 106 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_73_271)">
                                        <rect width="96.9117" height="44" transform="translate(0 31.3021) rotate(-18.8442)" fill="#FFB061" />
                                        <path d="M26.9772 39.5972C27.264 40.4376 27.1678 41.134 26.6885 41.6864C26.2168 42.2362 25.4964 42.6765 24.5273 43.0072L21.9153 43.8987L19.2292 36.0284L21.7277 35.1757C22.6287 34.8682 23.4098 34.7792 24.071 34.9085C24.7297 35.0303 25.1804 35.4471 25.4233 36.1588C25.5758 36.6055 25.5648 37.0192 25.3904 37.3999C25.2161 37.7806 24.9388 38.095 24.5585 38.3432C25.0866 38.2559 25.5714 38.3018 26.0129 38.4808C26.4594 38.6496 26.7808 39.0217 26.9772 39.5972ZM23.6153 36.9914C23.5094 36.6809 23.3347 36.4912 23.0914 36.4221C22.853 36.3428 22.5256 36.3743 22.1092 36.5164L21.5413 36.7102L22.1654 38.5386L22.8014 38.3216C23.1951 38.1872 23.4582 38.0171 23.5908 37.8112C23.7209 37.5978 23.729 37.3245 23.6153 36.9914ZM25.0308 40.1727C24.8964 39.779 24.6872 39.5376 24.4032 39.4486C24.1268 39.3569 23.7766 39.3835 23.3526 39.5282L22.5917 39.7879L23.3127 41.9002L23.9941 41.6677C24.4256 41.5204 24.738 41.3335 24.9312 41.1069C25.1319 40.8778 25.1651 40.5664 25.0308 40.1727ZM29.7448 39.3246L29.9174 41.1677L27.964 41.8343L27.6856 33.1424L29.9456 32.371L35.0393 39.4196L33.0405 40.1018L32.0503 38.5378L29.7448 39.3246ZM31.2863 37.3023L29.2446 34.1065L29.5827 37.8837L31.2863 37.3023ZM40.5624 34.9607C40.7304 35.4528 40.7502 35.9321 40.622 36.3985C40.4938 36.8649 40.2236 37.2868 39.8114 37.6642C39.4042 38.0314 38.8712 38.3274 38.2125 38.5522C36.9103 38.9966 35.7438 38.9721 34.7131 38.4785L35.2992 37.112C36.0782 37.4378 36.8765 37.4612 37.6942 37.1822C38.0879 37.0478 38.3737 36.8573 38.5516 36.6106C38.7344 36.3538 38.7741 36.0739 38.6708 35.7711C38.5726 35.4834 38.3942 35.2949 38.1355 35.2057C37.8818 35.1063 37.4539 35.0664 36.852 35.0858C35.8327 35.1209 35.0654 35.0151 34.55 34.7683C34.0347 34.5216 33.675 34.0991 33.4708 33.501C33.3106 33.0316 33.2998 32.5788 33.4384 32.1427C33.5845 31.7039 33.8499 31.3175 34.2346 30.9833C34.6268 30.6466 35.0993 30.3839 35.652 30.1953C36.8104 29.7999 37.8655 29.8202 38.8173 30.2562L38.2878 31.5654C37.9479 31.4362 37.6046 31.3716 37.258 31.3716C36.9164 31.3614 36.5828 31.4118 36.2573 31.5229C35.8939 31.647 35.6294 31.8133 35.4639 32.0219C35.3034 32.2204 35.2658 32.4446 35.3511 32.6944C35.4079 32.861 35.5012 32.9856 35.6308 33.0681C35.768 33.1481 35.9632 33.1998 36.2163 33.2233C36.4695 33.2468 36.8389 33.2518 37.3245 33.2382C38.2097 33.2065 38.9113 33.3179 39.4292 33.5723C39.9521 33.8165 40.3299 34.2793 40.5624 34.9607ZM43.0416 31.5025L45.7673 30.5723L46.2091 31.867L43.4835 32.7972L44.1695 34.8074L47.4517 33.6872L47.909 35.0273L42.7644 36.7831L40.0784 28.9128L45.223 27.157L45.4834 28.5517L42.3944 29.6059L43.0416 31.5025ZM53.6801 28.6198C54.5845 31.2698 53.7685 33.0275 51.2321 33.8932L49.1084 34.618L46.4224 26.7477L48.4098 26.0694C49.5985 25.6637 50.6481 25.6183 51.5586 25.9331C52.4664 26.2403 53.1736 27.1359 53.6801 28.6198ZM51.7608 29.2749C51.4274 28.2982 51.0486 27.6836 50.6243 27.4311C50.1975 27.1711 49.7039 27.1366 49.1436 27.3278L48.7461 27.4635L50.5097 32.6309L50.9072 32.4952C51.475 32.3014 51.8407 31.961 52.0042 31.4741C52.1727 30.9771 52.0915 30.244 51.7608 29.2749ZM65.8785 21.6291L64.2545 22.1833L66.0065 27.3166L67.6305 26.7623L68.0995 28.1365L62.9889 29.8807L62.5199 28.5065L64.1439 27.9523L62.392 22.819L60.768 23.3733L60.3029 22.0104L65.4134 20.2663L65.8785 21.6291ZM68.6845 20.8743C68.9566 21.4239 69.2108 21.9584 69.4473 22.4779C69.6812 22.9898 69.9002 23.5448 70.1043 24.1429L71.1159 27.107L69.5373 27.6458L66.8513 19.7755L69.1795 18.981L73.3294 24.6018C72.7498 23.4979 72.2842 22.431 71.9328 21.4014L70.9057 18.3918L72.4843 17.8531L75.1703 25.7233L72.9103 26.4946L68.6845 20.8743ZM30.3042 49.717C30.4851 50.247 30.4937 50.7427 30.33 51.2044C30.1713 51.6558 29.8858 52.0576 29.4734 52.4096L32.6607 55.0243L30.5484 55.7452L27.8177 53.317L27.2953 53.4953L28.3224 56.5049L26.4599 57.1406L23.7739 49.2703L26.2497 48.4253C27.3323 48.0558 28.2096 47.9762 28.8816 48.1864C29.5535 48.3967 30.0277 48.9068 30.3042 49.717ZM28.3849 50.372C28.2557 49.9934 28.0516 49.7546 27.7726 49.6554C27.5012 49.5536 27.1421 49.5789 26.6954 49.7314L26.0821 49.9407L26.8573 52.212L27.5501 51.9756C27.9589 51.8361 28.2333 51.6368 28.3731 51.3777C28.5205 51.1161 28.5244 50.7808 28.3849 50.372ZM38.5391 53.0181L36.6085 53.677L34.1068 48.2417L35.3933 54.0917L33.4286 54.7622L29.8908 47.1827L31.6284 46.5896L34.0443 52.7769L32.8583 47.1842L34.471 46.6338L36.9062 51.8002L35.149 45.3881L36.773 44.8338L38.5391 53.0181ZM41.0764 50.2502L41.249 52.0932L39.2956 52.7599L39.0172 44.0679L41.2772 43.2966L46.3709 50.3452L44.3721 51.0273L43.3818 49.4633L41.0764 50.2502ZM42.6178 48.2279L40.5762 45.032L40.9143 48.8093L42.6178 48.2279ZM45.9678 43.4202C46.2399 43.9697 46.4942 44.5042 46.7307 45.0237C46.9645 45.5356 47.1836 46.0906 47.3877 46.6887L48.3993 49.6529L46.8207 50.1916L44.1347 42.3214L46.4628 41.5268L50.6128 47.1477C50.0331 46.0437 49.5676 44.9769 49.2162 43.9472L48.1891 40.9377L49.7677 40.3989L52.4537 48.2692L50.1937 49.0405L45.9678 43.4202ZM58.202 41.8694C59.1064 44.5194 58.2904 46.2771 55.7541 47.1428L53.6304 47.8676L50.9443 39.9973L52.9318 39.319C54.1204 38.9133 55.17 38.8679 56.0805 39.1827C56.9884 39.4899 57.6956 40.3855 58.202 41.8694ZM56.2827 42.5245C55.9494 41.5478 55.5706 40.9332 55.1463 40.6807C54.7194 40.4207 54.2258 40.3862 53.6656 40.5775L53.2681 40.7131L55.0316 45.8805L55.4291 45.7448C55.997 45.551 56.3626 45.2106 56.5261 44.7237C56.6946 44.2267 56.6135 43.4936 56.2827 42.5245ZM61.5053 43.278L61.6779 45.121L59.7245 45.7877L59.4461 37.0957L61.7061 36.3244L66.7998 43.373L64.801 44.0551L63.8108 42.4912L61.5053 43.278ZM63.0468 41.2557L61.0051 38.0599L61.3433 41.8371L63.0468 41.2557Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_73_271">
                                            <rect width="96.9117" height="44" fill="white" transform="translate(0 31.3021) rotate(-18.8442)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                        </div>

                        {/* bio */}
                        <span style={{ wordSpacing: "1rem" }} className='text-center md:text-start  uppercase text-black text-[18px] md:text-[22px] max-w-[600px] space-x-[70px] font-fira font-[500]'>product designer with 4 years of experience in end-to-end experiences for both business and consumer PRODUCTS</span>
                    </div>

                    <div className='w-full flex flex-col-reverse sm:flex-row gap-[20px] items-center justify-between py-8 px-[10px]  md:px-20 lg:px-40'>
                        <Link href={`#`} className='flex flex-row gap-[20px] items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 20V4" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 15C17 15 13.3175 20 11.9999 20C10.6823 20 7 15 7 15" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className='uppercase text-[16px] text-black font-[700]'>scroll down</span>
                        </Link>
                        <div className='flex flex-col gap-[4px] text-center sm:text-start'>
                            <span className='text-[14px] text-black font-outfit'>Currently at </span>
                            <span className=' font-outfit'>Compressive staffing resources ltd</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full py-14 px-[10px] md:px-20 lg:px-40 flex items-center justify-center'>
                <div className='flex flex-col gap-[40px] w-full md:w-[70%]'>
                    <h1 className='text-[#707070] text-[14px] text-center font-outfit'> A few Campanies I have worked with</h1>
                    <div className='w-full flex flex-col items-center justify-center gap-[20px]'>
                        <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-[20px]'>
                            <div className='w-[50px]'>
                                <Image src={`/images/logo1.png`} width={1000} height={1000} className='w-full' alt='' />
                            </div>
                            <div className='w-[50px]'>
                                <Image src={`/images/ewawe.png`} width={1000} height={1000} className='w-full' alt='' />
                            </div>
                            <div className='w-[100px]'>
                                <Image src={`/images/uruti.png`} width={1000} height={1000} className='w-full' alt='' />
                            </div>
                            <div className='w-[100px]'>
                                <Image src={`/images/infinity.png`} width={1000} height={1000} className='w-full' alt='' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 items-center gap-[20px]'>
                            <div className='w-[100px]'>
                                <Image src={`/images/crust.png`} width={1000} height={1000} className='w-full' alt='' />
                            </div>
                            <div className='w-[100px]'>
                                <Image src={`/images/brigthforth.png`} width={1000} height={1000} className='w-full' alt='' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* project card list */}
            <div className='w-full flex flex-col gap-[100px] items-center justify-between py-14 px-[10px] md:px-20 lg:px-40'>
                <ProjectCard flexType='' imageUrl='/images/meal_space.png' />
                <ProjectCard flexType='reverse' imageUrl='/images/umugongo.png' />
                <ProjectCard flexType='' imageUrl='/images/quonect.png' />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage
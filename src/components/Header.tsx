// import { Space_Grotesk } from 'next/font/google';

export default function Header(){

    return(
        <div className="flex fixed w-full h-20 mb-5 bg-body top-0 items-center">
            <h1 className='font-sans-serif cursor-pointer font-bold text-2xl ml-10'>ZNS</h1>
            <div className='flex gap-10 justify-center cursor-pointer items-center absolute left-1/2 transform -translate-x-1/2'>
                <p>General Dashboard</p>
                <p>Referral Dashboard</p>
            </div>
            <div className=" flex ml-auto mr-10">
            <button className="flex items-center justify-center cursor-pointer text-black bg-primary py-2 px-8 text-xl font-sans-serif rounded-xl font-semibold bg-button ">Connect</button>
        </div>
        </div>
    )

}

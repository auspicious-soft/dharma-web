import React from 'react'
import { Button } from '../ui/button'

export default function Newsletter() {
    return (
        <div className='footer-newsletter'>
            <div className="self-stretch p-10 bg-white/5 rounded-[20px] flex justify-between items-center">
                <p className="max-w-[541px] justify-start text-white text-base font-normal leading-8">Subscribe to our newsletter to received product update and promotions</p>
                <div className="flex justify-start items-center gap-2.5 max-w-[394px] w-full">
                    <input type="text" placeholder='Email Address...' className='w-full h-11 max-w-64 text-light-blue py-3 px-4 bg-transparent rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#F0F8FF80] text-xs font-normal leading-6' />
                    <Button>Submit</Button>
                </div>
            </div>
        </div>
    )
}

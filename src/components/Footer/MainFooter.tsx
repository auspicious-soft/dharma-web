import React from 'react'
import Newsletter from './Newsletter'
import Copyright from './Copyright'

export default function MainFooter() {
    return (
        <footer className='bg-Black_light'>
            <div className='footer-upper py-[50px]'>
                <div className='max-w-[1226px] w-full px-3 md:px-4 m-auto'>
                    <Newsletter />
                </div>
            </div>
            <Copyright />
        </footer>
    )
}

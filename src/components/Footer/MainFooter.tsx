import React from 'react'
import Newsletter from './Newsletter'
import Copyright from './Copyright'
import FooterMenu from './FooterMenu'

export default function MainFooter() {
    return (
        <footer className='bg-Black_light'>
            <div className='footer-upper py-9 md:py-[50px]'>
                <div className='max-w-[1226px] w-full px-3 md:px-4 m-auto gap-8 md:gap-[50px] grid'>
                    <Newsletter />
                    <FooterMenu/>
                </div>
            </div>
            <Copyright />
        </footer>
    )
}

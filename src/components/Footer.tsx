import React from 'react'
import '../assets/css/footer.css'

export default function Footer() {
    return (
        <footer className='footer max-w-screen-2xl pt-24 pb-10 px-6 mx-auto bg-gray-200'>
            <div className='footer-container flex flex-wrap justify-between'>
                <div className='brand-info'>
                    <div className='flex flex-col gap-6 mb-14'>
                        <img className='w-24' src='retailer-of-watch-content/logo.svg' alt="logo" />
                        <p className='brand-des text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloremque.</p>
                    </div>
                    <span className='text-xs'>copyright@2023. All right preserved</span>
                </div>
                <div className='footer-links h-auto flex flex-col justify-between'>
                    <div className='flex gap-6 mb-14'>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Security</li>
                        </ul>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Security</li>
                        </ul>
                    </div>
                    <span className='text-xs'>copyright@2023. All right preserved</span>
                </div>
            </div>
        </footer>
    )
}

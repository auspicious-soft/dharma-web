import React from 'react'
import FooterLogo from "@/assets/footer-logo.png";

export default function FooterMenu() {
    return (
        <div className='FooterMenu grid grid-cols-[4fr_8fr] gap-5'>
            <div className="w-72 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                    <img src={FooterLogo} alt="Logo" className="max-w-[70px]" />
                    <div className="self-stretch flex flex-col justify-start items-start gap-9">
                        <div className="self-stretch flex flex-col justify-start items-start gap-5">
                            <p className="justify-start text-light-blue text-sm font-normal  leading-7">325 N Saint  Paul Street, Suite 3100,<br />Dallas TX 75201</p>
                            <p className="text-center justify-start text-light-blue text-sm font-normal leading-none">
                                <a href="telto:16502830123" className="no-underline">
                                    +1-650-283-0123
                                </a>
                            </p>
                            <p className="text-center justify-start text-light-blue text-sm font-normal leading-none">
                                <a href="mailto: team@vcareprojectmanagement.com" className="no-underline"> team@vcareprojectmanagement.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="inline-flex justify-start items-center gap-[5px]">
                    
                </div>
            </div>

        </div>
    )
}

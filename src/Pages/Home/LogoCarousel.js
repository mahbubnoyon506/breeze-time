import React from "react";
import Marquee from "react-fast-marquee";
import logo from '../../assets/images/ancestry.svg'
import logo2 from '../../assets/images/Compass.svg'
import logo3 from '../../assets/images/ebay.svg'
import logo4 from '../../assets/images/Loreal.svg'
import logo5 from '../../assets/images/Twilio.svg'
import logo6 from '../../assets/images/Vector.svg'
import logo7 from '../../assets/images/Vector2.svg'
import logo8 from '../../assets/images/Zendesk.svg'

export default function LogoCarousel() {
    return (
        <div className="py-24 bg-[#F8F8F8] px-28">
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-center text-secondary leading-relaxed">Simplified scheduling for more than</h2>
                <h2 className="text-3xl font-bold text-center text-secondary"><span className="text-primary">100000 </span>users worldwide </h2>
            </div>
            <Marquee speed={70} gradient={false}>
                <img className="h-[40px] mx-5" src={logo} alt="" />
                <img className="h-[40px] mx-5" src={logo2} alt="" />
                <img className="h-[40px] mx-5" src={logo3} alt="" />
                <img className="h-[40px] mx-5" src={logo4} alt="" />
                <img className="h-[40px] mx-5" src={logo5} alt="" />
                <img className="h-[40px] mx-5" src={logo6} alt="" />
                <img className="h-[40px] mx-5" src={logo7} alt="" />
                <img className="h-[40px] mx-5" src={logo8} alt="" />
            </Marquee>
        </div>
    );
}

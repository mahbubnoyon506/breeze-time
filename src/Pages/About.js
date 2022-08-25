import React from 'react';
import { Link } from "react-router-dom";
import mahbub from '../assets/images/about_mahbub.png';
import jiku from '../assets/images/about_jiku.png';
import nishat from '../assets/images/about_nishat.png'
import noman from '../assets/images/about_noman.png'
import shohag from '../assets/images/about_shohag.png'
import kaniz from '../assets/images/about_kaniz.png'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaUser } from "react-icons/fa";

const About = () => {
    return (
        <div className='w-full mx-auto font-sans'>
            {/* about site  */}
            <div className='mb-8'>
                <div className='text-center w-full mx-auto my-8'>
                    <h1 className="text-2xl lg:text-5xl font-bold text-center">About Site</h1>
                </div>
                <div className='text-justify px-20 w-full mx-auto'>
                    <p>
                        Welcome to BreezeTime, your number one source for any kind of online events through video conferencing with the professionals. We're dedicated to giving you the very best of platform for online events, with a focus on time and your needs.
                        <br />
                        Founded in 2022 by Team GoalDiggers, BreezeTime has come a long way from its beginnings in Bangladesh. When GoalDiggers first started out, their passion for "Make your time organized" drove them to quit day job, do tons of research, etc. So that BreezeTime can offer you "the world's most advanced online platform for online events through video conference". We now serve customers all over the world, and are thrilled that we're able to turn our passion into our own website.
                        <br />
                        We hope you enjoy our site as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to
                        <span className='text-lg font-bold text-secondary-focus'><Link to='/contact'> Contact us</Link></span>.
                    </p>
                </div>
            </div>

            {/* about team  */}
            <div className='my-16'>
                <div className='text-center w-full mx-auto my-8'>
                    <h1 className="text-2xl lg:text-5xl font-bold text-center">About Team</h1>
                </div>
                <div className='w-fit m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>


                    {/* Md. Mahbub Alam  */}
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:bg-accent-focus">
                        <div className=''>
                            <div class="avatar">
                                <div class="w-1/5 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-6 items-center">
                                    <img src={mahbub} />
                                </div>
                            </div>
                            <div className="card-body text-justify">
                                <h2 className="text-3xl font-bold text-center">Md. Mahbub Alam</h2>
                                <p className='text-lg font-bold text-center'>Jr. MERN Web Developer</p>
                                <div class="divider"></div>
                                <div className='flex justify-center'>
                                    <a href="https://www.facebook.com/mahbub4noyon/" target={'_blank'}><FaFacebookF className='mx-4 my-2' /></a>
                                    <a href="https://www.linkedin.com/in/mahbubnoyon/" target={'_blank'}><FaLinkedinIn className='mx-4 my-2' /></a>
                                    <a href="https://github.com/mahbubnoyon506" target={'_blank'}><FaGithub className='mx-4 my-2' /></a>
                                    <a href=" http://webapparchitect.com/" target={'_blank'}><FaUser className='mx-4 my-2' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Md. Mahbub Alam  */}

                    {/* Nishat Tasnim  */}
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:bg-accent-focus">
                        <div className=''>
                            <div class="avatar">
                                <div class="w-1/5 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-6 items-center">
                                    <img src={nishat} />
                                </div>
                            </div>
                            <div className="card-body text-justify">
                                <h2 className="text-3xl font-bold text-center">Nishat Tasnim</h2>
                                <p className='text-lg font-bold text-center'>Jr. MERN Web Developer</p>
                                <div class="divider"></div>
                                <div className='flex justify-center'>
                                    <a href="https://www.facebook.com/nishattasnim24" target={'_blank'}><FaFacebookF className='mx-4 my-2' /></a>
                                    <a href="https://www.linkedin.com/in/nishattasnim24/" target={'_blank'}><FaLinkedinIn className='mx-4 my-2' /></a>
                                    <a href="https://github.com/nishattasnim08" target={'_blank'}><FaGithub className='mx-4 my-2' /></a>
                                    <a href="https://nishat-tasnim-portfolio.web.app/" target={'_blank'}><FaUser className='mx-4 my-2' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Nishat Tasnim  */}

                    {/* Muhammad Azizul Haque Jiku  */}
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:bg-accent-focus">
                        <div className=''>
                            <div class="avatar">
                                <div class="w-1/5 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-6 items-center">
                                    <img src={jiku} />
                                </div>
                            </div>
                            <div className="card-body text-justify">
                                <h2 className="text-3xl font-bold text-center">Muhammad Azizul Haque Jiku</h2>
                                <p className='text-lg font-bold text-center'>Jr. MERN Web Developer</p>
                                <div class="divider"></div>
                                <div className='flex justify-center'>
                                    <a href="https://www.facebook.com/azizul.azizulhoquejiku" target={'_blank'}><FaFacebookF className='mx-4 my-2' /></a>
                                    <a href="https://www.linkedin.com/in/muhammad-azizul-hoque-jiku-775057211/" target={'_blank'}><FaLinkedinIn className='mx-4 my-2' /></a>
                                    <a href="https://github.com/muhammad-jiku" target={'_blank'}><FaGithub className='mx-4 my-2' /></a>
                                    <a href="https://muhammad-azizul-hoque-jiku.web.app/" target={'_blank'}><FaUser className='mx-4 my-2' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Muhammad Azizul Haque Jiku  */}

                    {/* Md. Neamul Haque Noman  */}
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:bg-accent-focus">
                        <div className=''>
                            <div class="avatar">
                                <div class="w-1/5 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-6 items-center">
                                    <img src={noman} />
                                </div>
                            </div>
                            <div className="card-body text-justify">
                                <h2 className="text-3xl font-bold text-center">Md. Neamul Haque Noman</h2>
                                <p className='text-lg font-bold text-center'>Jr. MERN Web Developer</p>
                                <div class="divider"></div>
                                <div className='flex justify-center'>
                                    <a href="https://web.facebook.com/neamul.haque.1614" target={'_blank'}><FaFacebookF className='mx-4 my-2' /></a>
                                    <a href="https://www.linkedin.com/in/neamul62/" target={'_blank'}><FaLinkedinIn className='mx-4 my-2' /></a>
                                    <a href="https://github.com/Neamul01" target={'_blank'}><FaGithub className='mx-4 my-2' /></a>
                                    <a href="https://neamuls-portfolio.web.app/" target={'_blank'}><FaUser className='mx-4 my-2' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Md. Neamul Haque Noman  */}

                    {/* Kaniz Fatima  */}
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:bg-accent-focus">
                        <div className=''>
                            <div class="avatar">
                                <div class="w-1/5 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-6 items-center">
                                    <img src={kaniz} />
                                </div>
                            </div>
                            <div className="card-body text-justify">
                                <h2 className="text-3xl font-bold text-center">Kaniz Fatima</h2>
                                <p className='text-lg font-bold text-center'>Jr. MERN Web Developer</p>
                                <div class="divider"></div>
                                <div className='flex justify-center'>
                                    <a href="https://www.facebook.com/kaniz.fatema.148116" target={'_blank'}><FaFacebookF className='mx-4 my-2' /></a>
                                    <a href="https://www.linkedin.com/in/kaniz-fatema-292927164" target={'_blank'}><FaLinkedinIn className='mx-4 my-2' /></a>
                                    <a href="https://github.com/Kanizfatema47" target={'_blank'}><FaGithub className='mx-4 my-2' /></a>
                                    <a href="https://kanizfatema.netlify.app/" target={'_blank'}><FaUser className='mx-4 my-2' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Kaniz Fatima  */}

                    {/* Md. Shohag  */}
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:bg-accent-focus">
                        <div className=''>
                            <div class="avatar">
                                <div class="w-1/5 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-6 items-center">
                                    <img src={shohag} />
                                </div>
                            </div>
                            <div className="card-body text-justify">
                                <h2 className="text-3xl font-bold text-center">Md. Shohag</h2>
                                <p className='text-lg font-bold text-center'>Jr. MERN Web Developer</p>
                                <div class="divider"></div>
                                <div className='flex justify-center'>
                                    <a href="https://www.facebook.com/profile.php?id=100004130176262" target={'_blank'}><FaFacebookF className='mx-4 my-2' /></a>
                                    <a href="https://www.linkedin.com/in/md-shohag-034bb6190/" target={'_blank'}><FaLinkedinIn className='mx-4 my-2' /></a>
                                    <a href="https://github.com/MDSHOHAG617" target={'_blank'}><FaGithub className='mx-4 my-2' /></a>
                                    <a href="https://myportfolio-7252c.web.app/" target={'_blank'}><FaUser className='mx-4 my-2' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Md. Shohag  */}
                </div>
            </div>
        </div>
    );
};

export default About;
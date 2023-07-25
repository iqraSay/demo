import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Aboutus = () => {
    return (
        
        <div className="m-0 p-0 relative bg-white">
            <div class="w-full h-24 backdrop-opacity-80 bg-emerald-400 bg-[url('https://images.rosewoodhotels.com/is/image/rwhg/seascape-ocean-view-twin-room:WIDE-LARGE-16-9 bg-cover bg-bottom')]">
                < Header />
            </div>

                <div class="pt-3 pr-0 w-full h-auto bg-white">
                    <div class="pt-3 pr-0 float-left w-6/12 inline-block">
                        <h1 className="text-center text-emerald-500 w-1/5">About us</h1>
                        <hr className="w-1/5  border-t-black"/>
                        <p className="text-base mt-5 mr-auto w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    </div>
                    <div class="w-6/12 inline-block">
                        <img  className="w-full" src="https://images.adsttc.com/media/images/619d/4b60/f91c/818c/6e00/0006/large_jpg/shutterstock_728342668.jpg?1637698337" />
                    </div>
                    <div class="clear"></div>
                </div>



                <div class="pt-4 pr-0 w-full h-auto ">

                    <div className="float-left w-2/4 inline-block">
                        <img className="w-full h-screen" src="https://images.unsplash.com/photo-1611641613359-f698d54566dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&w=1000&q=80" />
                    </div>
                    <div className="pt-2 pr-0 w-2/5 inline-block">
                        <h1 className="text-center mt-0 mr-0 pr-0 mb-0 ml-auto text-emerald-500">Our branches</h1>
                        <hr className="w-1/5 border-t-black" />
                        <p className="mt-4 ml-4 mr-auto text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p className="mt-4 ml-4 mr-auto text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    </div>
                    <div class="clear-both"></div>

                </div>

                

                <div className="team" /*class="w-11/12 m-auto pt-3 pr-3 overflow-hidden "*/>
                    <h1 className="text-center text-emerald-400"> Our Team<hr className="w-2/12 border-t-black bg-transparent mb-12" /></h1>


{/*


*/}
                    <div className="card"/*class="py-5 realtive min-w-4   h-96 inline-block mt-4 mr2 sahdow-md text-center"*/>
                        <div className="circle-container"/*class="realtive bg-emerald-600 w-48 h-48 rounded-full m-auto text-white"*/>
                            <h1  /*className=" py-14 text-6xl" style={{ color: '#fff' }}*/>J</h1>
                        </div>
                        <h2 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/>John E U</h2>
                        <h4 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/>Technical Lead</h4>
                        <p /*className="w-24 mt-3 mr-0 text-center"*/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>



                    <div className="card"/*class="py-5 realtive min-w-4   h-96 inline-block mt-4 mr2 sahdow-md text-center"*/>
                        <div className="circle-container"/*class="realtive bg-emerald-600 w-48 h-48 rounded-full m-auto text-white"*/>
                            <h1  /*className=" py-14 text-6xl" style={{ color: '#fff' }}*/>R</h1>
                        </div>
                        <h2 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/>Rachel Doe</h2>
                        <h4 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/>Evangelist</h4>
                        <p /*className="w-24 mt-3 mr-0 text-center"*/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="card"/*class="py-5 realtive min-w-4   h-96 inline-block mt-4 mr2 sahdow-md text-center"*/>
                        <div className="circle-container"/*class="realtive bg-emerald-600 w-48 h-48 rounded-full m-auto text-white"*/>
                            <h1  /*className=" py-14 text-6xl" style={{ color: '#fff' }}*/>H</h1>
                        </div>
                        <h2 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/>Harry Osborn</h2>
                        <h4 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/>Evangelist</h4>
                        <p /*className="w-24 mt-3 mr-0 text-center"*/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>



                    <div className="card"/*class="py-5 realtive min-w-4   h-96 inline-block mt-4 mr2 sahdow-md text-center"*/>
                        <div className="circle-container"/*class="realtive bg-emerald-600 w-48 h-48 rounded-full m-auto text-white"*/>
                            <h1 /*className=" py-14 text-6xl" style={{ color: '#fff' }}*/>P</h1>
                        </div>
                        <h2 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/>Paul Rudd</h2>
                        <h4 /*className="text-center mt-2 mr-0 ml-0 mb-0 "*/>Evangelist</h4>
                        <p /*className="w-24 mt-3 mr-0 text-center"*/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="card"/*class="py-5 realtive min-w-4   h-96 inline-block mt-4 mr2 sahdow-md text-center"*/>
                        <div className="circle-container"/*class="realtive bg-emerald-600 w-48 h-48 rounded-full m-auto text-white"*/>
                            <h1 /*className=" py-14 text-6xl" style={{ color: '#fff' }}*/>A</h1>
                        </div>
                        <h2 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/>Anna Holland</h2>
                        <h4 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/> Advisor</h4>
                        <p /*className="w-24 mt-3 mr-0 text-center"*/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>



                    <div className="card"/*class="py-5 realtive min-w-4   h-96 inline-block mt-4 mr2 sahdow-md text-center"*/>
                        <div className="circle-container"/*class="realtive bg-emerald-600 w-48 h-48 rounded-full m-auto text-white"*/>
                            <h1  /*className=" py-14 text-6xl" style={{ color: '#fff' }}*/>C</h1>
                        </div>
                        <h2 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/>Chad Parker</h2>
                        <h4 /*className="text-center mt-3 mr-0 ml-0 mb-0 "*/> Advisor</h4>
                        <p /*className="w-24 mt-3 mr-0 text-center"*/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>


                </div>


            
           <Footer/>
        </div>
    )
}

export default Aboutus;
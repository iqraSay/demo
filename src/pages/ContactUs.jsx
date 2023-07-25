import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { collection, addDoc } from "firebase/firestore"; 
import {db} from "../firebase/firebase"
function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Pno, setPno] = useState('')
    const [website, setWebsite] = useState('')
    const [msg, setMsg] = useState('')

    console.log(name)
    console.log(email)
    console.log(Pno)
    console.log(website)
    console.log(msg)

    const handleClick = async ()  => {
        try {
            const docRef = await addDoc(collection(db, "contactRq"), {
              name:name,
              email:email,
              Pno:Pno,
              website:website,
              msg:msg,

            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    }



    return (

        //     background-image: url('https://images.timesproperty.com/blog/2347/unnamed___2022_06_14T183130168.jpg');
        // }
        <div>

            <Header />
            <div className="font-['Open_Sans': 'Helvetica, Arial, sans-serif'] flex justify-center items-center font-light text-xs leading-8 text-neutral-500  mt-12 bg-[url('https://images.timesproperty.com/blog/2347/unnamed___2022_06_14T183130168.jpg')] bg-cover	 ">

                <div class="max-w-md w-full my-10">
               
                    <form id="contact" className='bg-white p-7 mt-12 mr-0 rounded-t-lg'>
                        <h3 className='text-orange-500 block text-3xl font-normal'>Quick Contact</h3>
                        <h4 className='mt-2 mr-0 mb-3 text-sm'>Contact us today, and get reply with in 24 hours!</h4>
                        <fieldset className='border-slate-950 mt-0 mr-0 mb-3 p-0 w-full'> 
                            <input placeholder="Your name" type="text" tabindex="1" onChange={(e) => {
                                setName(e.target.value)
                            }} required autofocus />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Email Address" type="email" onChange={(e) => {
                                setEmail(e.target.value)

                            }} tabindex="2" required />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Phone Number" type="tel" tabindex="3" onChange={(e) => {
                                setPno(e.target.value)
                            }} required />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Web Site starts with http://" type="url" tabindex="4" onChange={(e) => {
                                setWebsite(e.target.value)
                            }}
                                required />
                        </fieldset>
                        <fieldset>
                            <textarea placeholder="Type your Message Here...." tabindex="5"
                                onChange={(e) => {
                                    setMsg(e.target.value)
                                }} required></textarea>
                        </fieldset>
                        <fieldset>
                            <button name="submit" onClick={handleClick} type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                        </fieldset>
                    </form>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;
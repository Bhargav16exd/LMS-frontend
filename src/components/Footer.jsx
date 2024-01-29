import {BsInstagram,BsLinkedin,BsFacebook,BsTwitterX} from "react-icons/bs"
import img from "../assets/download.png"


function Footer(){
     
    const date = new Date()
    const year = date.getFullYear();

    return(
        <>
        <footer className="relative left-0 bottom-0 h-[60vh]  bg-[#191A19] text-white flex">
       
        <div className="border-gray-500 w-1/2 h-full flex">

          <div className="border-gray-500 w-1/2 px-4 space-y-2 flex flex-col justify-center items-start">

            <h1 className="font-extrabold text-xl">ASK US</h1>

                 <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input  
                    id="email"
                    type="email"
                    placeholder="Enter Email ..."
                    className=" bg-transparent px-2 py-2 w-72 my-4 focus:outline-none shadow-md rounded-lg " />
                   </div>

                   <div className="flex flex-col gap-1">
                    <label htmlFor="query">Query</label>
                    <input  
                    id="query"
                    type="text"
                    placeholder="Queries ..."
                    className=" bg-transparent px-2 py-2 w-72 my-4 focus:outline-none shadow-md rounded-lg " />
                   </div>

                   <button className="rounded-lg py-2 mx-5 px-8 border border-yellow-600 text-yellow-600 font-semibold">
                     Submit Query
                    </button>
          </div>
          <div className="border-gray-500 w-1/2">
             
            {/* image div  */}
            <div className="h-1/4  py-3 px-5">
             <img src={img} alt=""  className="h-full w-full"/>    
            </div>
            
            {/* Quick Links  */}
            <div className="h-3/4  px-4 py-4">

             <h1 className="font-extrabold text-xl my-4">Quick Links</h1>
             
             <div className="flex ">
             <div className="flex flex-col mx-4">
              <p>Sponser</p>
              <p>Prizes </p>
              <p>Theme</p>
              <p>About</p>
             </div>
             <div className="flex flex-col mx-4">
              <p>FAQs</p>
              <p>Timeline </p>
              <p>Call for sponsers</p>
              <p>Call for Mentors</p>
             </div>
             </div>

                  
            </div>

          </div>

        </div>
             
        <div className="border-gray-500 w-1/2 h-full">

          <div className="border-gray-500 h-1/2 w-full px-6">
            
            <h1 className="font-extrabold text-xl my-4">Get in Touch</h1>

            <p className="font-mono text-xl my-6 underline" >noInertiaCop@gmail.com</p>

            <section className="flex items-center justify-start text-4xl">
            
            <a className="px-2 hover:transition ease-in-out hover:text-green-600 " > <BsInstagram/> </a>
            <a className="px-2 hover:transition ease-in-out hover:text-green-600"> <BsFacebook/> </a>
            <a className="px-2 hover:transition ease-in-out  hover:text-green-600"> <BsTwitterX/> </a>
            <a className="px-2 hover:transition ease-in-out  hover:text-green-600"> <BsLinkedin/> </a>
        
            </section>


          </div>

          <div className="border-gray-500 h-1/2 w-full py-6 px-6">

          <h1 className="font-extrabold text-xl my-4">Contact Us</h1>

          <p className="font-mono text-xl my-6" >A.....65</p>
          <p className="font-mono text-xl my-2" >7776</p>

          </div>

        </div>

        </footer>
        </>
    )
} 

export default Footer;
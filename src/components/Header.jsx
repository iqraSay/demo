
const Header = () => {
return (

    <header>
    
        <nav  class="flex ps-2.5 justify-between overflow-hidden bg-zinc-800 text-white w-full  h-24 absolute top-0 z-10 text-2xl font-bold">
            <h1 class="flex items-center ">Royal Stays</h1>
          
            <ul class="flex items-center p-4">
                <li className="p-4"><a href="/" className=" pr-4 pt-6 hover:bg-stone-800 hoevr:text-orange-400 ">Home</a></li>
                <li className="p-4"><a href="/aboutus" className="  pt-6 hover:bg-stone-800 hoevr:text-orange-400 ">About us</a></li>
                <li className="p-4"><a href="/ContactUs" className="pr-4 pt-6 hover:bg-stone-800 hoevr:text-orange-400 ">Contact us</a></li>
            </ul>
        </nav>
    </header>
);
}

export default Header;


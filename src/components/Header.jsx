import React from "react";
function Header() {
    return (
         <header className="flex"
        // style={{
        //     backgroundImage: "url('https://images.unsplash.com/photo-1612903351512-96acf84e5306?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwcGxlJTIwbGFwdG9wfGVufDB8fDB8fHww')",
        // }}
         >
            
           <img className="w-full h-2/5 rounded-lg flex justify-center items-center relative" src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-landing-og-202408?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1721332809720" alt="" />
            <p className=" bg-blue-300 w-56 font-bold ml-72 text-5xl font-sans text-white rounded-lg shadow-2xl absolute flex top-56 p-5">Choose The Best One Of The Brand Your Things</p>
            {/* <div className="">
                <div className=" flex justify-center">
                    <p className="text-6xl text-white font-bold font-serif mt-24 w-52">Mac For Students</p>
                </div>
                <div className="flex justify-center">
                    <button className="text-white text-xl mt-6 font-sans border border-solid rounded-2xl p-2 items-center">Shop Now</button>
                </div>
            </div> */}

              
        </header>
    
    );
}
export default Header;
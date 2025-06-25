function Footer(){
return(
  <footer className="bg-gray-100 p-7 mt-4">
    <a className="flex gap-2 items-center mb-4" href="">
                <img className="w-6 h-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" width="50" />
           <h1 className="text-xl font-sans font-bold">Apple</h1>
            </a>

           <span className="flex mb-4 ml-9">Copyright <p>&copy;2025 Apple Inc.All rights reserved</p></span>
       <ul className="flex mb-4 ml-9">
        <li>Privacypolicy |</li>
        <li>Terms of use |</li>
        <li>Sales policy |</li>
        <li>Legal |</li>
        <li>Site map |</li>
       </ul>

      <h1 className="flex justify-end mr-24 text-xl font-sans font-bold">Indian</h1>

  </footer>

);
}
export default Footer;
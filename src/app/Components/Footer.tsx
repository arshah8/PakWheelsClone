import Link from "next/link";

export default function Footer () {
    return(
        
        <footer className=" flex items-center bg-gray-900 w-full h-24">
         <div className="justify-start items-center h-6 w-8"></div>

         <div className="flex justify-start items-center h-10 w-3/12">
         <div className="text-white space-x-3">
  <p className="flex justify-start flex-col-5 gap-3 pl-8">
    &copy; {new Date().getFullYear() } 
    <a className="space-x-6" href="https://www.linkedin.com/in/abdur-rahman-shah-29ba86246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" >
      AR SHAH
    </a>
     All rights reserved.
  </p>
  <div className="text-white pl-5"><p>Contact: arshahdev08@gmail.com</p></div>
</div>
</div>
    
  
    <div className="flex justify-end items-center ml-[400px] h-5 w-5/12">
      <Link href="/about" legacyBehavior>
        <a className="text-white hover:text-gray-300 justify-end h-5 w-2/12">ABOUT</a>
      </Link>
      <Link href="/blog" legacyBehavior>
        <a className="text-white hover:text-gray-300 h-5 w-2/12 justify-center">BLOG</a>
      </Link>
    </div>

</footer>

    )
}
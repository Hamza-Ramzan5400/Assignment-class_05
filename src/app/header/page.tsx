import Link from "next/link";

const Nav = () => {
  return (

<div className="bg-slate-100 w-auto h-full">

<header className="flex justify-center items-center w-full bg-black h-12 ">
  <div  className="  h-10 w-40 flex justify-center items-center text-slate-300 ">Logo</div>
  <div className=" h-10 w-full flex justify-center items-center -ml-7 mr-4 text-slate-300">Heading</div>

<div className="flex justify-center items-center w-40 text-slate-300 ">
<div className=" h-10 flex justify-center items-center  w-44 mr-4 text-slate-300"><Link href="##">Products</Link></div>
<div className=" h-10 flex justify-center items-center ml-1 mr-4 w-44 text-slate-300"><Link href="##">About</Link></div>
<div className=" h-10 flex justify-center items-center ml-1 mr-14 w-44 text-slate-300"><Link href="##">Contact</Link></div>
</div>
</header>

<section className="flex justify-center items-center w-full h-40 mt-3">
  <div className="bg-slate-700 w-full ml-4 h-36 rounded-lg">card1</div>
  <div className="bg-green-700 w-full ml-4 h-36 rounded-lg">card2</div>
  <div className="bg-yellow-500 w-full ml-4 mr-4 h-36 rounded-lg">card3</div>
</section>


<section className="flex justify-center items-center w-full mt-10 h-40">
  <div className="bg-blue-700 w-full ml-4 h-56 rounded-lg">card4</div>
  <div className="bg-red-700 w-full mr-4 ml-2 h-56 rounded-lg">card5</div>
</section>

<footer 
className="bg-black h-16 w-full mt-10 mb-1 flex justify-center items-center">

  <div >

<div><h2 className="text-slate-100">All rights reserved @ Hamza</h2></div>

  </div>
</footer>

</div>


)
};
export default Nav;

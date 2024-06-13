import{Menu, X} from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen)
  }
  return (
    <nav className="sticky py-5 top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between item-center">
                <div className="flex item-center  flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                    <span className="flex items-center text-xl tracking-tight"><a href="#hero">DENZO</a></span>
                </div>
                <ul className='hidden lg:flex items-center ml-14 space-x-12' >
                {navItems.map((item, index)=>
                <li key={index}>
                    <a href={item.href}>{item.label}</a>
                </li>
                )}
                </ul>
              <div className="hidden lg:flex justify-center space-x-12 itemcenter">
                <a href="#" className="py-2 px-3 border-b focus:outline-none rounded-md">
                  Sign In
                </a>
                <a href="#" className="bg-gradient-to-r from-yellow-500 to-yellow-800
                py-2 px-3 rounded-md">
                  Create an account
                </a>
              </div>
              <div className="lg:hidden md-flex flex:col justify-end">
                <button onClick={toggleNavbar}>
                  {mobileDrawerOpen ? <X/> : <Menu/>}
                </button>
              </div>
            </div>
            {mobileDrawerOpen && (
              <div className="absolute fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul className="flex flex-col text-center">
                  {navItems.map((item, index)=>(
                    <li key={index} className="py-4">
                      <a href={item.href}>{item.label}</a>
                    </li>


                  ))}
                </ul>
                <div className="flex flex-col space-y-6">
                  <a href="#" className="px-4 py-2 text-center border rounded-md">
                    sign In
                  </a>
                  <a href="" className="py-2 px-3 text-center rounded-md bg-gradient-to-r from-yellow-500 to-yellow-800">
                    Create an account
                  </a>
                  
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar

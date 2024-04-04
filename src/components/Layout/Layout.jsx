import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { SideBar } from "../Sidebar/SideBar";

/* eslint-disable react/prop-types */ //

export function Layout({ children }) {
  const [sideBarMinimized, setSideBarMinimized] = useState(false);

  const checkScreenSize = () => {
    // console.log(window.innerWidth, window.innerWidth >= 890 ,sideBarMinimized )
    if(window.innerWidth < 890 && sideBarMinimized == false){
      // console.log("amannnnnnnnnnnnnnnnnnnnnnnnnnn, sidebarMinimised is not getting true, check this")
      setSideBarMinimized(prev => true);
    }
    else if(window.innerWidth >= 890 && sideBarMinimized == true ){
      setSideBarMinimized(prev => false);
    }
    else{
      setSideBarMinimized(false);
    }
  }

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => { window.removeEventListener('resize', checkScreenSize)}
  }, [])

  return (
    <div className="bg-sky-100">
      <SideBar setSideBarMinimized={setSideBarMinimized} sideBarMinimized={sideBarMinimized}/>
      <div className="ml-[200px] min-h-[100vh] p-2 transition-all duration-500"
        style={sideBarMinimized ? {marginLeft : '80px'} : {marginLeft : '200px'}}
      >
        {children}
        <Footer />
      </div>
    </div>
  )
}
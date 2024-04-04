import logo from '../../assets/images/logo.png'
import smallLogo from '../../assets/images/crystal_logo_small.png'

import { RxDashboard } from "react-icons/rx";
import { IoPerson } from "react-icons/io5";
import { CiSquareQuestion } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { useEffect, useState } from 'react';

const SIDEBAR_MINI_WIDTH = 80;
const SIDEBAR_NORMAL_WIDTH = 200;

export function SideBar({ sideBarMinimized, setSideBarMinimized }) {

  const urlSlug = useLocation();
  const pureUrl = urlSlug.pathname.substring(1);

  const navigate = useNavigate()

  const [sideBarWidth, setSideBarWidth] = useState(SIDEBAR_NORMAL_WIDTH);
  // console.log('side -> ', sideBarMinimized, 'hideSide -> ', sideBarMinimized, '------');

  useEffect(() => {
    // console.log('mounting !!!!!!!');

    if (sideBarMinimized == true) {
      setSideBarWidth(SIDEBAR_MINI_WIDTH);
      localStorage.setItem('sideBarMini', sideBarMinimized);
      setSideBarMinimized(true);
    }
    else if (sideBarMinimized == false) {
      setSideBarWidth(SIDEBAR_NORMAL_WIDTH);
      localStorage.setItem('sideBarMini', sideBarMinimized);
      setSideBarMinimized(false);
    }

    // return () => {
    //   console.log('quiting XXXXXXXXXXx')
    // }

  }, [sideBarMinimized])

  return (
    <div className="fixed h-[100vh] top-0 left-0 rounded-xl bg-sky-300 flex flex-col justify-start gap-12 items-center overflow-hidden transition-all ease-in-out duration-800"
      style={{ width: sideBarWidth + 'px', paddingLeft: sideBarMinimized ? '25px' : '' }}
    >
      <div className='p-1 ml-4' onClick={() => navigate('/home')}>
        {!sideBarMinimized ?
          <img src={logo} alt='' className='w-3/4 -ml-0 mt-2' /> :
          <img src={smallLogo} alt='small_logo' className='w-[100px] max-w-full m-0 -ml-5 mt-2 p-0' />}
      </div>
      <div className='flex flex-col justify-start gap-4 items-start text-sky-800'>
        <Link to='/dashboard'>
          <div className='flex justify-start items-center gap-2 -ml-8 py-1 px-2 rounded-lg hover:bg-sky-100'
            style={pureUrl === 'dashboard' ? { color: 'white', backgroundColor: 'purple' } : {}}
          >
            <RxDashboard />
            {sideBarMinimized ? '' : 'Dashboard'}
          </div>
        </Link>

        <Link to='/customers'>
          <div className='flex justify-start items-center gap-2 -ml-8 py-1 px-2 rounded-lg hover:bg-sky-100'
            style={pureUrl === 'customers' ? { color: 'white', backgroundColor: 'purple' } : {}}
          >
            <IoPerson />
            {sideBarMinimized ? '' : 'Customers'}
          </div>
        </Link>

        <Link to='/enquiry'>
          <div className='flex justify-start items-center gap-2 -ml-8 py-1 px-2 rounded-lg hover:bg-sky-100'
            style={pureUrl === 'enquiry' ? { color: 'white', backgroundColor: 'purple' } : {}}
          >
            <CiSquareQuestion />
            {sideBarMinimized ? '' : 'Enquiry'}
          </div>
        </Link>

        <Link to='/orders'>
          <div className='flex justify-start items-center gap-2 -ml-8 py-1 px-2 rounded-lg hover:bg-sky-100'
            style={pureUrl === 'orders' ? { color: 'white', backgroundColor: 'purple' } : {}}
          >
            <IoDocumentOutline />
            {sideBarMinimized ? '' : 'Orders'}
          </div>
        </Link>

        <Link to='/vehicle'>
          <div className='flex justify-start items-center gap-2 -ml-8 py-1 px-2 rounded-lg hover:bg-sky-100'
            style={pureUrl === 'vehicle' ? { color: 'white', backgroundColor: 'purple' } : {}}
          >
            <FaCarAlt />
            {sideBarMinimized ? '' : 'Vehicle'}
          </div>
        </Link>

        <Link to='driver'>
          <div className='flex justify-start items-center gap-2 -ml-8 py-1 px-2 rounded-lg hover:bg-sky-100'
            style={pureUrl === 'driver' ? { color: 'white', backgroundColor: 'purple' } : {}}
          >
            <MdAirlineSeatReclineNormal />
            {sideBarMinimized ? '' : 'Driver'}
          </div>
        </Link>

        <Link to='/masterData'>
          <div className='flex justify-start items-center gap-2 -ml-8 py-1 px-2 rounded-lg hover:bg-sky-100'
            style={pureUrl === 'masterData' ? { color: 'white', backgroundColor: 'purple' } : {}}
          >
            <GoDatabase />
            {sideBarMinimized ? '' : 'Master Data'}
          </div>
        </Link>

      </div>

      <div className='relative -top-[50px]'
        style={!sideBarMinimized ? { left: '80px', top: '-50px' } : { left: '5px', top: '50px' }}
      >
        {!sideBarMinimized && <BsChevronBarLeft className='text-3xl text-white rounded hover:bg-sky-200 hover:rounded-[10%] hover:h-[100px] w-8 h-[100px] hover:animate-pulse'
          onClick={() => {
            setSideBarMinimized(true)
          }}
        />}

        {sideBarMinimized && <BsChevronBarRight className='text-3xl text-white rounded hover:bg-sky-200 hover:h-[100px] w-8 h-[100px] hover:animate-pulse'
          onClick={() => {
            setSideBarMinimized(false)
          }}
        />}

      </div>
    </div>
  )
}
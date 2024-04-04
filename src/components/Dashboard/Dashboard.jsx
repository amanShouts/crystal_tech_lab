import { FaLongArrowAltRight } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import person from '../../assets/images/Image.png'
import { GenericTable } from "../GenericTable/GenericTable";
import { FaChartLine } from "react-icons/fa6";
import { BsQuestionCircle } from "react-icons/bs";
import { FaBox } from "react-icons/fa";

const header1 = [
  'Enquiry Number', 'Vehicle Number', 'PickUp Date', 'Total Fright'
]

const data1 = [
  {
    'enquiry_number' : '#25ETZF34YU', 
    'vehicle_number' : 'Chiller',
    'pickupdate' : '1 Apr 2024',
    'total' : '234.5'
  },
  {
    'enquiry_number' : '#11111111111', 
    'vehicle_number' : 'Frozen',
    'pickupdate' : '2 Apr 2024',
    'total' : '500.5'
  },
  {
    'enquiry_number' : '#25ETZF34YU', 
    'vehicle_number' : 'Chiller',
    'pickupdate' : '1 Apr 2024',
    'total' : '234.5'
  },
  {
    'enquiry_number' : '#25ETZF34YU', 
    'vehicle_number' : 'Chiller',
    'pickupdate' : '1 Apr 2024',
    'total' : '234.5'
  },
  {
    'enquiry_number' : '#25ETZF34YU', 
    'vehicle_number' : 'Chiller',
    'pickupdate' : '1 Apr 2024',
    'total' : '234.5'
  },
  {
    'enquiry_number' : '#25ETZF34YU', 
    'vehicle_number' : 'Chiller',
    'pickupdate' : '1 Apr 2024',
    'total' : '234.5'
  },
]

export function Dashboard() {
  return (
    <div>
      {/* header for dashboard - title and subtitle */}
      <div className="flex justify-between items-center mt-4 p-1">
        <div className="flex flex-col justify-between items-start gap-12">
          <div className="font-semibold text-2xl text-sky-600 -mt-4">Dashboard</div>
          <p className="text-gray-400 text-sm font-semibold">Overview</p>
        </div>
        <div className="flex flex-col justify-between items-end gap-6">
          <div className="flex justify-center items-center gap-1 p-2 border-black  bg-white rounded-lg " style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' }}>
            <img src={person} alt={'user'} className="rounded-[50%] border-[1px] border-black w-[32px]" />
            <span>Jaspinder singh</span>
            <FaAngleDown />
          </div>

          <div className="flex justify-center items-center gap-1 p-2 border-black  bg-sky-600 text-white rounded-lg ">
            <SlCalender />
            <span className="text-xs font-semibold">Last 6 Months</span>
            <FaAngleDown className="text-sm" />
          </div>
        </div>
      </div>

      {/* 4 info cards section */}
      <div className="flex flex-col flex-wrap justify-evenly items-center mt-4 lg:flex-nowrap gap-8 sm:flex-col md:flex-row ">
        <div className="bg-white rounded-lg p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 max-w-xs" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
          <div>
            <p className="font-semibold text-gray-400 text-xs">Total Customers</p>
            <p className="mt-[1px] text-black font-bold text-md"> 16</p>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <p className="text-sky-600 flex justify-start items-center gap-1">
              <span className="text-xs">
                See Details
              </span>
              <FaLongArrowAltRight className="text-sky-600" />
            </p>
            <IoPersonSharp className="text-sky-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 max-w-xs" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
          <div>
            <p className="font-semibold text-gray-400 text-xs">Total Orders</p>
            <p className="mt-[1px] text-black font-bold text-md"> 45</p>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <p className="text-sky-600 flex justify-start items-center gap-1">
              <span className="text-xs">
                See Details
              </span>
              <FaLongArrowAltRight className="text-sky-600" />
            </p>
            <FaBox className="text-sky-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 max-w-xs" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
          <div>
            <p className="font-semibold text-gray-400 text-xs">Total Enquiries</p>
            <p className="mt-[1px] text-black font-bold text-md"> 97</p>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <p className="text-sky-600 flex justify-start items-center gap-1">
              <span className="text-xs">
                See Details
              </span>
              <FaLongArrowAltRight className="text-sky-600" />
            </p>
            <BsQuestionCircle className="text-sky-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 max-w-xs" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
          <div>
            <p className="font-semibold text-gray-400 text-xs">Total Order Value</p>
            <p className="mt-[1px] text-black font-bold text-md"> $ 4600000</p>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <p className="text-sky-600 flex justify-start items-center gap-1">
              <span className="text-xs">
                See Details
              </span>
              <FaLongArrowAltRight className="text-sky-600" />
            </p>
            <FaChartLine className="text-sky-500" />
          </div>
        </div>

      </div>

      {/* table section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-8">
        <GenericTable pendingValue={25} pendingContext={'Enquiries'} header={header1} tableData={data1}/>
        <GenericTable pendingValue={45} pendingContext={'Orders'} header={header1} tableData={data1}/>
      </div>
    </div>
  )
}
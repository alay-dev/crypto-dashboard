import CryptoStat from '@/components/cyrptoStat/CryptoStat'
import SideNav from '@/components/sideNav/SideNav'
import SummaryCard from '@/components/summaryCard/SummaryCard'
import SummaryLeft from '@/components/summaryStat/SummaryLeft'
import SummaryRight from '@/components/summaryStat/SummaryRight'
import Image from 'next/image'
import { PiCopyLight } from "react-icons/pi"


export default function Home() {

  return (
    <main className='flex' >
      <div className='w-20 fixed h-screen' >
        <SideNav />
      </div>
      <div className='flex-1 ml-20 bg-white' >
        {/* Goo morning Section */}
        <div className='p-6 flex justify-between items-center ' >
          <div className='flex items-center gap-2' >
            <div className='relative w-14 h-14 rounded-full overflow-hidden' >
              <Image alt="avatar" fill src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
            </div>
            <h1 className='font-semibold text-lg' >Good Morning Noor!</h1>
          </div>
          <div className='flex gap-2 items-center' >
            <select className='bg-gray-100 p-2  outline-none w-40 rounded-md' >
              <option>Account 1</option>
              <option>Account 2</option>
              <option>Account 3</option>
            </select>
            <button className='bg-blue-700 p-2 shadow-sm hover:shadow-md hover:bg-black transition-all  rounded-md '>
              <PiCopyLight className='text-white text-2xl' />
            </button>
          </div>
        </div>
        {/* Goo morning Section */}
        <div className='p-6 pt-0 ' >
          <SummaryCard />
        </div>
        {/* summary  */}
        <div className='border-t-2 border-gray-200'  >
          <div className='border-b-2 border-gray-200 py-2 px-4 flex items-center' >
            <div className='flex-1 flex justify-center items-center h-11' >
              <h1 className='font-semibold text-lg' >ACTIVITY SUMMARY</h1>
            </div>
            <div className='flex-1 flex justify-center items-center h-11' >
              <h1 className='font-semibold text-lg text-gray-400' >SPENDING SUMMARY</h1>
            </div>
            <div className='flex-1 flex justify-center items-center h-11' >
              <h1 className='font-semibold text-lg text-gray-400' >INCOME SUMMARY</h1>
            </div>
          </div>
          <div className='flex' >
            <div className=' w-8/12 border-r border-gray-200 ' >
              <SummaryLeft />
            </div>
            <SummaryRight />

          </div>
        </div>
        {/* summary  */}
      </div>
      <div className='w-4/12 min-h-screen' >
        <CryptoStat />
      </div>
    </main>
  )
}

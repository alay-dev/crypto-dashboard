import { PiChartLineUpThin, PiChartLineDownThin } from "react-icons/pi"
import { RxDashboard } from "react-icons/rx"
import { IoBagRemoveOutline } from "react-icons/io5"

const SummaryCard = () => {
    return (
        <div className="flex gap-4 p-4 px-6 border-2 justify-between items-center border-gray-200 rounded-md shadow-sm" >
            <div className="flex flex-col gap-12 justify-center" >
                <div className="flex gap-4 items-center" >
                    <div className="bg-green-300 p-2 rounded-md" >
                        <PiChartLineUpThin className="text-4xl" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs ">Total Earning</p>
                        <h2 className="text-xl font-semibold" >Rs 12,594.10</h2>
                    </div>
                </div>
                <div className="flex gap-4 items-center" >
                    <div className="bg-green-100 p-2 rounded-md"  >
                        <RxDashboard className="text-4xl" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs ">Goal for this month</p>
                        <h2 className="text-xl font-semibold" >Rs 16,494.80</h2>
                    </div>
                </div>
            </div>

            <div className="p-4 relative overflow-hidden  bg-[#F7D06B] w-80 h-40 rounded-md shadow-sm " >
                <div className="relative z-10 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500" >Name Card</p>
                        <h3 className="font-semibold text-lg" >Noor Hossain</h3>
                    </div>
                    <h1 className="font-semibold text-2xl italic"  >VISA</h1>
                </div>
                <div className="relative z-10 flex gap-2 items-center mt-1 mb-1 ">
                    <p>****</p>
                    <p>****</p>
                    <p>****</p>
                    <p>1234</p>
                </div>
                <div className="relative z-10 flex gap-5" >
                    <div>
                        <p className="text-sm text-gray-500">Exp Date</p>
                        <p>12/23</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">CVV Number</p>
                        <p>123</p>
                    </div>
                </div>
                <div className=" absolute -bottom-14 -left-12 rounded-full w-48 h-44 bg-[#F4BB60]" >
                </div>
            </div>

            <div className="flex flex-col gap-12 justify-center" >
                <div className="flex gap-4 items-center" >
                    <div className="bg-orange-200 p-2 rounded-md" >
                        <PiChartLineDownThin className="text-4xl" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs ">Total Spendings</p>
                        <h2 className="text-xl font-semibold" >Rs 243,594.10</h2>
                    </div>
                </div>
                <div className="flex gap-4 items-center" >
                    <div className="bg-blue-100 p-2 rounded-md" >
                        <IoBagRemoveOutline className="text-4xl" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs ">Spending goal</p>
                        <h2 className="text-xl font-semibold" >Rs 653,494.80</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryCard
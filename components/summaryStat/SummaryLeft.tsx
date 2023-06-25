"use client"

import { useEffect } from "react"

import { PiChartLineUpLight } from "react-icons/pi"
import { BiRightArrowAlt } from "react-icons/bi"
import { CiMoneyBill, CiShoppingCart, CiSettings } from "react-icons/ci"
import dynamic from "next/dynamic"

const Charts = dynamic(() => import("./Chart"), { ssr: false })

const SummaryLeft = () => {


    return (
        <div className="p-4">
            <div className="flex justify-between items-center" >
                <h5 className="text-gray-400 font-medium" >Activity Graph</h5>
                <h3 className="font-semibold" >Rs 156K</h3>
            </div>
            <div className="h-48" >
                {typeof window !== "undefined" &&
                    <Charts />}
                {/* 
                <Charts height="200" options={options2 as any} series={series as any} type="donut" /> */}
            </div>
            <ul className="flex flex-col gap-5" >
                <li className="flex justify-between items-center">
                    <div className="flex gap-2 items-center" >
                        <div className="bg-blue-100 rounded-md p-2" >
                            <PiChartLineUpLight className="text-2xl text-blue-600 " />
                        </div>
                        <p>Goal</p>

                    </div>
                    <button className="bg-white rounded-full p-1 shadow-lg" >
                        <BiRightArrowAlt className="text-xl" />
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="flex gap-2 items-center" >
                        <div className="bg-blue-100 rounded-md p-2" >
                            <CiMoneyBill className="text-2xl text-blue-600 " />
                        </div>
                        <p>Monthly Pay</p>

                    </div>
                    <button className="bg-white rounded-full p-1 shadow-lg" >
                        <BiRightArrowAlt className="text-xl" />
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="flex gap-2 items-center" >
                        <div className="bg-blue-100 rounded-md p-2" >
                            <CiShoppingCart className="text-2xl text-blue-600 " />
                        </div>
                        <p>Shopping</p>

                    </div>
                    <button className="bg-white rounded-full p-1 shadow-lg" >
                        <BiRightArrowAlt className="text-xl" />
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="flex gap-2 items-center" >
                        <div className="bg-blue-100 rounded-md p-2" >
                            <CiSettings className="text-2xl text-blue-600 " />
                        </div>
                        <p>Settings</p>

                    </div>
                    <button className="bg-white rounded-full p-1 shadow-lg" >
                        <BiRightArrowAlt className="text-xl" />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SummaryLeft
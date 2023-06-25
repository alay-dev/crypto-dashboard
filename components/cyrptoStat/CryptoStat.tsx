'use client'

import { IoSearchOutline } from "react-icons/io5"
import { PiBellSimpleRinging } from "react-icons/pi"
import { BiSignal4 } from "react-icons/bi"
import { BsDownload, BsUpload } from "react-icons/bs"

import dynamic from 'next/dynamic'
const Charts = dynamic(() => import('react-apexcharts'), { ssr: false });

const CryptoStat = () => {

    const options = {
        chart: {
            height: 100,
            type: 'area',
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            show: false,
            labels: {
                show: false
            }
        },
        yaxis: {
            show: false,
            labels: {
                show: false
            }
        },
        grid: {
            show: false,

            xaxis: {
                lines: {
                    show: false
                }

            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },

        stroke: {
            curve: 'smooth'
        }
    };

    const series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }];

    return (
        <div className='bg-gray-100 h-full p-4 overflow-hidden' >
            <div className='flex justify-between items-center mb-9' >
                <div>
                    <h3 className='font-semibold text-lg' >Orizon crypto</h3>
                    <p className='text-sm text-gray-500' >Inside your sales</p>
                </div>
                <div className='flex gap-2 items-center' >
                    <button className='bg-white p-2 rounded-full hover:bg-black hover:text-white transition ' >
                        <IoSearchOutline className="text-lg" />
                    </button>
                    <button className='bg-white p-2 rounded-full hover:bg-black hover:text-white transition ' >
                        <PiBellSimpleRinging className="text-lg" />
                    </button>
                </div>

            </div>
            <div className="rounded-lg p-5 pb-12 bg-blue-700 relative mb-20" >
                <div className="relative z-10 text-white flex justify-between items-center" >
                    <div>
                        <p className="text-sm text-gray-200" >My Portfolio</p>
                        <h3 className=" text-lg font-semibold" >Rs 243,594.80</h3>
                    </div>
                    <div className="flex flex-col items-end" >
                        <BiSignal4 className="text-white text-xl" />
                        <p  >+ 25%</p>
                    </div>
                </div>
                <div className="absolute -right-9 -top-14 bg-white opacity-10 w-36 h-36 rounded-full" >

                </div>
                <div className=" absolute flex gap-5 bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 " >
                    <button className=" hover:bg-black hover:text-white transition shadow-lg bg-white rounded-md p-3 text-black flex items-center gap-2" >
                        <BsDownload />
                        <p>Deposit</p>
                    </button>
                    <button className="hover:bg-black hover:text-white transition shadow-lg bg-white rounded-md p-3 text-black flex items-center gap-2" >
                        <BsUpload />
                        <p>Withdraw</p>
                    </button>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center" >
                    <p className="font-medium" >Favourites</p>
                    <a className="text-blue-400 hover:underline cursor-pointer" >See all</a>
                </div>
                <div className="mt-3 mb-3 flex gap-3" >
                    <div className="shadow-lg bg-white rounded-md p-3 flex-1" >
                        <div className="flex gap-2 items-center" >
                            <div className="p-2 bg-orange-300 w-10 h-10 rounded-full overflow-hidden flex justify-center items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" id="ethereum" width="100%" height="100%"><path fill="#fff" d="M103.2 63.6v-.2c0-.1 0-.1-.1-.2V63c0-.1-.1-.1-.1-.2 0 0 0-.1-.1-.1L65.7 1c-.1-.1-.2-.3-.3-.4h-.1c-.1-.1-.2-.2-.3-.2 0 0-.1 0-.1-.1-.1-.1-.2-.1-.3-.1h-.1c-.2-.2-.3-.2-.5-.2s-.3 0-.5.1h-.1c-.1 0-.2.1-.3.1 0 0-.1 0-.1.1-.1.1-.2.1-.3.2h-.1c-.1.1-.2.2-.3.4L25.1 62.7s0 .1-.1.1c0 .1-.1.1-.1.2v.2c0 .1 0 .1-.1.2v.8c0 .1 0 .1.1.2v.1c.1.2.2.3.3.4l.1.1.3.3s.1 0 .1.1L63 87.2h.1c.1.1.2.1.3.1h.1c.2 0 .3.1.5.1s.3 0 .5-.1h.1c.1 0 .2-.1.3-.1h.1l37.2-21.7c.1 0 .1-.1.2-.1l.1-.1.2-.2.1-.1c0-.1.1-.1.1-.2s.1-.1.1-.2 0-.1.1-.2c0-.1 0-.1.1-.2V63.6zM62 45.6 31.9 59.3 62 9.2v36.4zm0 4.4v32L31.2 64 62 50zm4 0 30.8 14L66 82V50zm0-4.4V9.2l30.1 50.1L66 45.6z"></path><path fill="#fff" d="M100.1 72 64 93.7 27.9 72c-.8-.5-1.9-.3-2.5.4-.6.7-.7 1.7-.2 2.5l37.2 52.2.1.1c.1.1.1.2.2.2l.1.1c.1.1.2.1.2.2 0 0 .1 0 .1.1.1 0 .2.1.3.1h.1c.1 0 .3.1.4.1.2 0 .3 0 .4-.1h.1c.1 0 .2-.1.3-.1 0 0 .1 0 .1-.1.1 0 .2-.1.2-.2l.1-.1.2-.2.1-.1 37.2-52.2c.5-.8.5-1.8-.2-2.5s-1.4-.8-2.3-.4zM62 97.1v22.6L34 80.4l28 16.7zm4 22.6V97.1l28-16.8-28 39.4z"></path></svg>
                            </div>
                            <div>
                                <p className="leading-4" >ETH</p>
                                <p className="text-sm text-gray-400" >Ethurium</p>
                            </div>
                        </div>
                        <Charts options={options as any} series={series as any} type="area" height={100} />

                        <div className=" mt-2 flex justify-between items-center" >
                            <h4 className="font-semibold" >Rs 21,586</h4>
                            <p className="text-gray-400" >+ 0.25%</p>
                        </div>
                    </div>
                    <div className="shadow-lg bg-white rounded-md p-3 flex-1" >
                        <div className=" flex gap-2 items-center" >
                            <div className="p-2 bg-black w-10 h-10 rounded-full overflow-hidden flex justify-center items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="bitcoin"><path fill="#fff" d="M15.7216187,11.5477295c1.5537109-1.3565063,1.713562-3.7156372,0.3571167-5.2693481C15.3659668,5.4619751,14.3337402,4.9954834,13.25,5H12V3.5C12,3.223877,11.776123,3,11.5,3S11,3.223877,11,3.5V5H8V3.5C8,3.223877,7.776123,3,7.5,3S7,3.223877,7,3.5V5H5.5C5.223877,5,5,5.223877,5,5.5S5.223877,6,5.5,6H7v12H5.5C5.223877,18,5,18.223877,5,18.5S5.223877,19,5.5,19H7v1.5C7,20.776123,7.223877,21,7.5,21S8,20.776123,8,20.5V19h3v1.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5V19h3.25c2.0657959,0.005249,3.7446899-1.6651611,3.749939-3.730957C19.0047607,13.3782959,17.5978394,11.781311,15.7216187,11.5477295z M8,6h5.25C14.7687988,6,16,7.2312012,16,8.75s-1.2312012,2.75-2.75,2.75H8V6z M15.25,18H8v-5.5h7.25c1.5187988,0,2.75,1.2312012,2.75,2.75S16.7687988,18,15.25,18z"></path></svg>
                            </div>
                            <div>
                                <p className="leading-4" >BTC</p>
                                <p className="text-sm text-gray-400" >Bitcoin</p>
                            </div>

                        </div>
                        <Charts options={{ ...options, colors: ["#AED581"] } as any} series={series as any} type="area" height={100} />
                        <div className=" mt-2 flex justify-between items-center" >
                            <h4 className="font-semibold" >Rs 21,586</h4>
                            <p className="text-gray-400" >+ 0.25%</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-16" >
                <div className="flex justify-between items-center" >
                    <p className="font-medium" >Live prices</p>
                </div>
                <ul className="mt-4 flex flex-col gap-7">
                    <li className="flex justify-between items-center" >
                        <div className="flex gap-2 items-center" >
                            <div className="p-2 bg-orange-300 w-10 h-10 rounded-full overflow-hidden flex justify-center items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" id="ethereum" width="100%" height="100%"><path fill="#fff" d="M103.2 63.6v-.2c0-.1 0-.1-.1-.2V63c0-.1-.1-.1-.1-.2 0 0 0-.1-.1-.1L65.7 1c-.1-.1-.2-.3-.3-.4h-.1c-.1-.1-.2-.2-.3-.2 0 0-.1 0-.1-.1-.1-.1-.2-.1-.3-.1h-.1c-.2-.2-.3-.2-.5-.2s-.3 0-.5.1h-.1c-.1 0-.2.1-.3.1 0 0-.1 0-.1.1-.1.1-.2.1-.3.2h-.1c-.1.1-.2.2-.3.4L25.1 62.7s0 .1-.1.1c0 .1-.1.1-.1.2v.2c0 .1 0 .1-.1.2v.8c0 .1 0 .1.1.2v.1c.1.2.2.3.3.4l.1.1.3.3s.1 0 .1.1L63 87.2h.1c.1.1.2.1.3.1h.1c.2 0 .3.1.5.1s.3 0 .5-.1h.1c.1 0 .2-.1.3-.1h.1l37.2-21.7c.1 0 .1-.1.2-.1l.1-.1.2-.2.1-.1c0-.1.1-.1.1-.2s.1-.1.1-.2 0-.1.1-.2c0-.1 0-.1.1-.2V63.6zM62 45.6 31.9 59.3 62 9.2v36.4zm0 4.4v32L31.2 64 62 50zm4 0 30.8 14L66 82V50zm0-4.4V9.2l30.1 50.1L66 45.6z"></path><path fill="#fff" d="M100.1 72 64 93.7 27.9 72c-.8-.5-1.9-.3-2.5.4-.6.7-.7 1.7-.2 2.5l37.2 52.2.1.1c.1.1.1.2.2.2l.1.1c.1.1.2.1.2.2 0 0 .1 0 .1.1.1 0 .2.1.3.1h.1c.1 0 .3.1.4.1.2 0 .3 0 .4-.1h.1c.1 0 .2-.1.3-.1 0 0 .1 0 .1-.1.1 0 .2-.1.2-.2l.1-.1.2-.2.1-.1 37.2-52.2c.5-.8.5-1.8-.2-2.5s-1.4-.8-2.3-.4zM62 97.1v22.6L34 80.4l28 16.7zm4 22.6V97.1l28-16.8-28 39.4z"></path></svg>
                            </div>
                            <div>
                                <p className="leading-4" >ETH</p>
                                <p className="text-sm text-gray-400" >Ethurium</p>
                            </div>
                        </div>
                        <div className="text-right" >
                            <p className="font-semibold leading-4" >Rs 21,586</p>
                            <p className="text-orange-400" >-0.35%</p>
                        </div>
                    </li>
                    <li className="flex justify-between items-center" >
                        <div className="flex gap-2 items-center" >
                            <div className="p-2 bg-black w-10 h-10 rounded-full overflow-hidden flex justify-center items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="bitcoin"><path fill="#fff" d="M15.7216187,11.5477295c1.5537109-1.3565063,1.713562-3.7156372,0.3571167-5.2693481C15.3659668,5.4619751,14.3337402,4.9954834,13.25,5H12V3.5C12,3.223877,11.776123,3,11.5,3S11,3.223877,11,3.5V5H8V3.5C8,3.223877,7.776123,3,7.5,3S7,3.223877,7,3.5V5H5.5C5.223877,5,5,5.223877,5,5.5S5.223877,6,5.5,6H7v12H5.5C5.223877,18,5,18.223877,5,18.5S5.223877,19,5.5,19H7v1.5C7,20.776123,7.223877,21,7.5,21S8,20.776123,8,20.5V19h3v1.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5V19h3.25c2.0657959,0.005249,3.7446899-1.6651611,3.749939-3.730957C19.0047607,13.3782959,17.5978394,11.781311,15.7216187,11.5477295z M8,6h5.25C14.7687988,6,16,7.2312012,16,8.75s-1.2312012,2.75-2.75,2.75H8V6z M15.25,18H8v-5.5h7.25c1.5187988,0,2.75,1.2312012,2.75,2.75S16.7687988,18,15.25,18z"></path></svg>
                            </div>
                            <div>
                                <p className="leading-4" >BTC</p>
                                <p className="text-sm text-gray-400" >Bitcoin</p>
                            </div>
                        </div>
                        <div className="text-right" >
                            <p className="font-semibold leading-4" >Rs 21,586</p>
                            <p className="text-blue-400" >-0.35%</p>
                        </div>
                    </li>
                    <li className="flex justify-between items-center" >
                        <div className="flex gap-2 items-center" >
                            <div className="p-2 bg-red-500 w-10 h-10 rounded-full overflow-hidden flex justify-center items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" id="ethereum" width="100%" height="100%"><path fill="#fff" d="M103.2 63.6v-.2c0-.1 0-.1-.1-.2V63c0-.1-.1-.1-.1-.2 0 0 0-.1-.1-.1L65.7 1c-.1-.1-.2-.3-.3-.4h-.1c-.1-.1-.2-.2-.3-.2 0 0-.1 0-.1-.1-.1-.1-.2-.1-.3-.1h-.1c-.2-.2-.3-.2-.5-.2s-.3 0-.5.1h-.1c-.1 0-.2.1-.3.1 0 0-.1 0-.1.1-.1.1-.2.1-.3.2h-.1c-.1.1-.2.2-.3.4L25.1 62.7s0 .1-.1.1c0 .1-.1.1-.1.2v.2c0 .1 0 .1-.1.2v.8c0 .1 0 .1.1.2v.1c.1.2.2.3.3.4l.1.1.3.3s.1 0 .1.1L63 87.2h.1c.1.1.2.1.3.1h.1c.2 0 .3.1.5.1s.3 0 .5-.1h.1c.1 0 .2-.1.3-.1h.1l37.2-21.7c.1 0 .1-.1.2-.1l.1-.1.2-.2.1-.1c0-.1.1-.1.1-.2s.1-.1.1-.2 0-.1.1-.2c0-.1 0-.1.1-.2V63.6zM62 45.6 31.9 59.3 62 9.2v36.4zm0 4.4v32L31.2 64 62 50zm4 0 30.8 14L66 82V50zm0-4.4V9.2l30.1 50.1L66 45.6z"></path><path fill="#fff" d="M100.1 72 64 93.7 27.9 72c-.8-.5-1.9-.3-2.5.4-.6.7-.7 1.7-.2 2.5l37.2 52.2.1.1c.1.1.1.2.2.2l.1.1c.1.1.2.1.2.2 0 0 .1 0 .1.1.1 0 .2.1.3.1h.1c.1 0 .3.1.4.1.2 0 .3 0 .4-.1h.1c.1 0 .2-.1.3-.1 0 0 .1 0 .1-.1.1 0 .2-.1.2-.2l.1-.1.2-.2.1-.1 37.2-52.2c.5-.8.5-1.8-.2-2.5s-1.4-.8-2.3-.4zM62 97.1v22.6L34 80.4l28 16.7zm4 22.6V97.1l28-16.8-28 39.4z"></path></svg>
                            </div>
                            <div>
                                <p className="leading-4" >CTC</p>
                                <p className="text-sm text-gray-400" >Litecoin</p>
                            </div>
                        </div>
                        <div className="text-right" >
                            <p className="font-semibold leading-4" >Rs 21,586</p>
                            <p className="text-red-400" >-0.35%</p>
                        </div>
                    </li>
                    <li className="flex justify-between items-center" >
                        <div className="flex gap-2 items-center" >
                            <div className="p-2 bg-green-600 w-10 h-10 rounded-full overflow-hidden flex justify-center items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" id="ethereum" width="100%" height="100%"><path fill="#fff" d="M103.2 63.6v-.2c0-.1 0-.1-.1-.2V63c0-.1-.1-.1-.1-.2 0 0 0-.1-.1-.1L65.7 1c-.1-.1-.2-.3-.3-.4h-.1c-.1-.1-.2-.2-.3-.2 0 0-.1 0-.1-.1-.1-.1-.2-.1-.3-.1h-.1c-.2-.2-.3-.2-.5-.2s-.3 0-.5.1h-.1c-.1 0-.2.1-.3.1 0 0-.1 0-.1.1-.1.1-.2.1-.3.2h-.1c-.1.1-.2.2-.3.4L25.1 62.7s0 .1-.1.1c0 .1-.1.1-.1.2v.2c0 .1 0 .1-.1.2v.8c0 .1 0 .1.1.2v.1c.1.2.2.3.3.4l.1.1.3.3s.1 0 .1.1L63 87.2h.1c.1.1.2.1.3.1h.1c.2 0 .3.1.5.1s.3 0 .5-.1h.1c.1 0 .2-.1.3-.1h.1l37.2-21.7c.1 0 .1-.1.2-.1l.1-.1.2-.2.1-.1c0-.1.1-.1.1-.2s.1-.1.1-.2 0-.1.1-.2c0-.1 0-.1.1-.2V63.6zM62 45.6 31.9 59.3 62 9.2v36.4zm0 4.4v32L31.2 64 62 50zm4 0 30.8 14L66 82V50zm0-4.4V9.2l30.1 50.1L66 45.6z"></path><path fill="#fff" d="M100.1 72 64 93.7 27.9 72c-.8-.5-1.9-.3-2.5.4-.6.7-.7 1.7-.2 2.5l37.2 52.2.1.1c.1.1.1.2.2.2l.1.1c.1.1.2.1.2.2 0 0 .1 0 .1.1.1 0 .2.1.3.1h.1c.1 0 .3.1.4.1.2 0 .3 0 .4-.1h.1c.1 0 .2-.1.3-.1 0 0 .1 0 .1-.1.1 0 .2-.1.2-.2l.1-.1.2-.2.1-.1 37.2-52.2c.5-.8.5-1.8-.2-2.5s-1.4-.8-2.3-.4zM62 97.1v22.6L34 80.4l28 16.7zm4 22.6V97.1l28-16.8-28 39.4z"></path></svg>
                            </div>
                            <div>
                                <p className="leading-4" >BNB</p>
                                <p className="text-sm text-gray-400" >Binance</p>
                            </div>
                        </div>
                        <div className="text-right" >
                            <p className="font-semibold leading-4" >Rs 21,586</p>
                            <p className="text-green-400" >-0.35%</p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default CryptoStat
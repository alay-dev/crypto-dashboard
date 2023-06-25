import React from 'react'
import Charts from "react-apexcharts"

// import dynamic from 'next/dynamic'
// const Charts = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart = () => {
    const series = [44, 55, 41, 17];

    const options2 = {
        chart: {
            type: 'donut',
            fontFamily: 'Poppins, sans-serif',
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },

        plotOptions: {

            pie: {
                // customScale: 1,

                donut: {
                    size: '10%',
                    labels: {
                        show: false,
                        // name: {
                        //   show: true,
                        //   fontSize: '0.8rem',
                        //   fontWeight: '600',
                        //   color: 'grey',
                        // },

                        value: {
                            show: false,
                            fontSize: '1.6rem',
                            fontWeight: '800',

                            //   formatter: function (val) {
                            //     return val * 3;
                            //   },
                        },

                        total: {
                            show: false,
                            label: 'Total users',
                            fontSize: '0.9rem',
                            color: '#fff',
                        },
                    },
                },
            },
        },
        labels: ['18-24', '25-34', '35-44', "45-60+"],
    };
    return (
        <Charts height="200" options={options2 as any} series={series as any} type="donut" />
    )
}

export default Chart
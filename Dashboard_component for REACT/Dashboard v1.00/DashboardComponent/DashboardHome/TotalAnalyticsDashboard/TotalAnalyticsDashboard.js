import React from 'react';
const totalAnalyticsDashboard = [
    {
        title: "Total Clients",
        total: 100000,
        rate: '10%'
    },
    {
        title: "Total Candidates",
        total: 100000,
        rate: '10%'
    },
    {
        title: "New requests",
        total: 100000,
        rate: '10%'
    },
    // {
    //     title: "Calls Schedule",
    //     total: 100000,
    // },
]

const TotalAnalyticsDashboard = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                totalAnalyticsDashboard?.map((t, index) => {
                    return (
                        <div className='flex items-center justify-between font-normal h-28 bg-white w-full sm:max-w-sm p-5 boxShadow'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-lg'>
                                    {
                                        t?.title
                                    }
                                </h1>
                                <h1 className='text-2xl'>
                                    {
                                        t?.total
                                    }
                                </h1>
                            </div>
                            <div>
                                <span className='text-[#1BE754] text-lg'>
                                    {
                                        t?.rate
                                    }
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default TotalAnalyticsDashboard;
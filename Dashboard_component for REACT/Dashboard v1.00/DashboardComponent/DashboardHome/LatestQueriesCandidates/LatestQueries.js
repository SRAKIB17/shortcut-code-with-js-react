import React from 'react';
const client = [
    {
        companyName: 'Proglearn',
        workEmail: 'rakibulssc5@gmail.com',
    },
    {
        companyName: 'CollabTalent',
        workEmail: 'rakibulssc5@gmail.com',
    },

]

const LatestQueries = () => {
    return (
        <div className='p-4 sm:p-5 mt-6 bg-white w-full  boxShadow'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-bold'>
                    Latest Queries
                </h1>
                <button className='text-[#1D7BEA] text-xs'>
                    View all
                </button>
            </div>
            <div>
                {
                    client?.map((c, index) => {
                        return (
                            <div key={index} >
                                <div className="flex gap-4 pb-2 pt-2 border-b border-[#E5E7EB]">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8 h-8">
                                            <span className="text-lg">
                                                {
                                                    c?.companyName?.[0]
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-sm font-medium'>
                                            {
                                                c?.companyName
                                            }
                                        </h1>
                                        <h4 className='text-[#6B7280] text-xs font-normal'>
                                            {
                                                c?.workEmail
                                            }
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LatestQueries;
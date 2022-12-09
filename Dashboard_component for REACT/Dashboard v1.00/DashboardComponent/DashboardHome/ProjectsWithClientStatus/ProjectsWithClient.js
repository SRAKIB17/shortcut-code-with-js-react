import React from 'react';
const test = [
    {
        clientName: "RAKIB",
        companyName: 'CollabTalent',
        teams: 'Developer',
        dateTime: new Date(),
        amount: '-$5000',
        status: 'Completed',
    },
    {
        clientName: "RAKIB",
        companyName: 'CollabTalent',
        teams: 'Developer',
        dateTime: new Date(),
        amount: '-$5000',
        status: 'Cancelled',
    },
    {
        clientName: "RAKIB",
        companyName: 'CollabTalent',
        teams: 'Developer',
        dateTime: new Date(),
        amount: '-$5000',
        status: 'In progress',
    }
]
console.log(test)
const ProjectsWithClient = () => {
    return (
        <div className='p-4 sm:p-5 mt-6 bg-white w-full  boxShadow'>
            <div>
                <h1 className='text-lg'>
                    Projects 
                </h1>
                <p className='text-[#71717A] text-sm'>
                    This is a list of latest Projects
                </p>
            </div>
            <div className='pt-4'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full ">
                        <thead>
                            <tr>
                                <td className='text-[#6B7280] capitalize font-semibold text-sm'>Client Name</td>
                                <td className='text-[#6B7280] capitalize font-semibold text-sm'>Company Name</td>
                                <td className='text-[#6B7280] capitalize font-semibold text-sm'>Teams</td>
                                <td className='text-[#6B7280] capitalize font-semibold text-sm'>DATE & TIME</td>
                                <td className='text-[#6B7280] capitalize font-semibold text-sm'>AMOUNT</td>
                                <td className='text-[#6B7280] capitalize font-semibold text-sm'>STATUS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                test?.map((client, index) => {
                                    return (
                                        <tr key={index} className='hover'>
                                            <td className='text-sm font-semibold'>
                                                {client?.clientName}
                                            </td>
                                            <td className='text-[#6B7280] text-sm font-normal'>
                                                {client?.companyName}
                                            </td>
                                            <td className='text-[#6B7280] text-sm font-normal'>
                                                {client?.teams}
                                            </td>
                                            <td className='text-[#6B7280] text-sm font-normal'>
                                                {new Date(client?.dateTime).toDateString()}
                                            </td>
                                            <td className='text-[16px] font-normal'>
                                                {client?.amount}
                                            </td>
                                            <td>
                                                {
                                                    client?.status === "Completed" &&
                                                    <span className='text-[#03543F] bg-[#DEF7EC] px-[10px] py-1 text-[12px] rounded-[10px]'>
                                                        Completed
                                                    </span>
                                                }
                                                {
                                                    client?.status === "Cancelled" &&
                                                    <span className='text-[#9B1C1C] bg-[#FBD5D5] px-[10px] py-1 text-[12px] rounded-[10px]'>
                                                        Completed
                                                    </span>
                                                }
                                                {
                                                    client?.status === "In progress" &&
                                                    <span className='text-[#1E429F] bg-[#E1EFFE] px-[10px] py-1 text-[12px] rounded-[10px]'>
                                                        Completed
                                                    </span>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectsWithClient;
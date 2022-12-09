import React from 'react';

const candidates = [
    {
        "u_id": 2,
        "firstName": "Md Rakibul",
        "lastName": "Islalm",
        "phone": "+8801873989651",
        "email": "rakibul.islam.r608@gmail.com",
        "emailVerify": "true",
        "resume": "http://localhost:8080/v1/upload/resume/1669655242357-532261141-OfferLetter_Rakibul.pdf",
        "profile": "http://localhost:8080/v1/upload/profile/1669655397334-6561991-wallpaper (1).jpg",
        "street": "5345",
        "city": "Kurigram ",
        "postal": "33333",
        "country": "Bangladesh",
        "about": "hat doesn't work, copy and paste the following link in your browser:\nhttp://localhost:3000/register/confirm/eyJvdHAiOiI5NjEyNzMiLCJlbWFpbCI6InJha2lidWwuaXNsYW0ucjYwOEBnbWFpbC5jb20iLCJpYXQiOjE2Njk2NTUxNDgsImV4cCI6MS4wMDAwMDAwMDAwMDAwMDAxZSszM30/",
        "desireJobTitle": "full stack devloper",
        "skills": "Html,Python,React,Next.Js",
        "desireJobType": "Full-time,Part-time,Contract,Temporary,Internship,Other",
        "desireScheduleDay": "Weekend availability,Monday to Friday,Weekends only,No weekends,Holidays",
        "desireScheduleShift": "4 hour shift,10 hour shift,Day shift,No weekends,Evening shift",
        "certificates": "https://www.youtube.com/watch?v=xcv9cucvZmg,https://www.google.com/",
        "resumeUpdate": "2022-11-28T17:07:25.899Z",
        "language": "hindi, english, bangla"
    },
    {
        "u_id": 3,
        "firstName": "Emtiaz",
        "lastName": "Hossain ",
        "phone": null,
        "email": "emtiaz@collabtalent.co",
        "emailVerify": "true",
        "resume": null,
        "profile": "http://localhost:8080/v1/upload/profile/1669729762426-541091581-Emtiaz.jpg",
        "street": null,
        "city": null,
        "postal": null,
        "country": null,
        "about": null,
        "desireJobTitle": null,
        "skills": null,
        "desireJobType": null,
        "desireScheduleDay": null,
        "desireScheduleShift": null,
        "certificates": ",",
        "resumeUpdate": null,
        "language": null
    },
]

const Candidates = () => {
    console.log(candidates)
    return (
        <div className='p-4 sm:p-5 mt-6 bg-white w-full  boxShadow'>
            <div>
                <h1 className='text-lg font-bold'>
                    Candidates
                </h1>
            </div>

            <div>
                {
                    candidates?.map((candidate, index) => {
                        return (
                            <div className='flex'>
                                <div>
                                    <h1 className='text-[16px] font-medium'>
                                        {
                                            candidate?.firstName
                                        }
                                        &nbsp;
                                        {
                                            candidate?.lastName
                                        }
                                    </h1>
                                    <h3 className='text-[#6B7280] text-xs font-normal'>
                                        {
                                            candidate?.desireJobTitle
                                        }
                                    </h3>
                                    <h2 className='text-sm text-[#6B7280]'>
                                        {
                                            candidate?.street + ", " + candidate?.city + ", " + candidate?.country
                                        }
                                    </h2>
                                </div>
                                <div>
                                    <h3 className='text-[#575757] text-sm'>
                                        Experience
                                    </h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Candidates;

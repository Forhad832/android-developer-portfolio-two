import React from 'react';
import app from '../../../assets/an.png'
const Project = () => {
    return (
       <div className='pt-12'>
        <h2 className='text-2xl font-medium mb-6'>My Project</h2>
         <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            <div className='mb-6 tooltip tooltip-bottom bg-[#150f2d] p-2 rounded-md tooltip-open tooltip-primary' data-tip="Employee Management system">
                <img className='w-56 lg:w-32 mx-auto ' src={app} alt="" />
            </div>
            <div className='mb-6 tooltip tooltip-bottom bg-[#150f2d] p-2 rounded-md tooltip-open tooltip-primary' data-tip="Business Management system">
                <img className='w-56 lg:w-32 mx-auto ' src={app} alt="" />
            </div>
            <div className='mb-6 tooltip tooltip-bottom bg-[#150f2d] p-2 rounded-md tooltip-open tooltip-primary' data-tip="Earning System App">
                <img className='w-56 lg:w-32 mx-auto ' src={app} alt="" />
            </div>
            <div className='mb-6 tooltip tooltip-bottom bg-[#150f2d] p-2 rounded-md tooltip-open tooltip-primary' data-tip="Ads Networking  App">
                <img className='w-56 lg:w-32 mx-auto ' src={app} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Project;
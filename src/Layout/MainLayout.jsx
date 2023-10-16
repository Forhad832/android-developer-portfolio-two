import React from 'react';
import LeftSideNavabr from '../components/LeftSideNavbar/LeftSideNavabr';
import Home from '../components/Home/Home';

const MainLayout = () => {
    return (
        <div className="bg-[#010313] ">
            <div className='container mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 gap-3 lg:grid-cols-12 bg-[#010313] text-base-300 '>
                    <div className='col-span-12 lg:col-span-3 lg:h-[760px] border border-base-300 rounded-lg'>
                        <div className="container mx-auto px-4 ">
                            <LeftSideNavabr></LeftSideNavabr>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-9 min-  border border-base-300 rounded-lg'>
                        <Home></Home>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;
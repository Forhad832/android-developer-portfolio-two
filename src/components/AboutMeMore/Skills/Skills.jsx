import React from 'react';
import c from '../../../assets/C_Logo.png'
import cc from '../../../assets/c++.png'
import java from '../../../assets/java.png'
import python from '../../../assets/python.png'
const Skills = () => {
    return (
        <div className='py-12'>
            <h2 className='text-2xl font-medium mb-6'>My Skills</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4  gap-2">
                <div className='bg-[#150f2d] flex items-center justify-center p-2 rounded-md'>
                    <img className='w-16' src={c} alt="" />
                </div>
                <div className='bg-[#150f2d] flex items-center justify-center p-2 rounded-md'>
                    <img className='w-16' src={cc} alt="" />
                </div>
                <div className='bg-[#150f2d] flex items-center justify-center p-2 rounded-md'>
                    <img className='w-32' src={java} alt="" />
                </div>
                <div className='bg-[#150f2d] flex items-center justify-center p-2 rounded-md'>
                    <img className='w-20' src={python} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills;
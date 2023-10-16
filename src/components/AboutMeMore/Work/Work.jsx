import React from 'react';
import desk from '../../../assets/des.png'
import android from '../../../assets/android.png'
const Work = () => {
    return (
        <div>
            <h2 className='text-2xl font-medium mb-6'>What I’m Doing !</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex items-center gap-8 rounded-md p-3 bg-[#150f2d]'>
                    <div>
                     <img className='w-8' src={android} alt="" />
                    </div>
                    <div>
                        <h4>Android App Development</h4>
                        <p><small>App Development is my passion</small></p>
                    </div>
                </div>
                <div className='flex gap-8 items-center rounded-md p-3 bg-[#150f2d]'>
                    <div>
                    <img className='w-8' src={desk} alt="" />
                    </div>
                    <div>
                        <h4>Desktop App Development</h4>
                        <p><small>App Development is my passion</small></p>
                    </div>
                </div>
                <div className='flex gap-8 items-center rounded-md p-3 bg-[#150f2d]'>
                    <div>
                    <img className='w-8' src={desk} alt="" />
                    </div>
                    <div>
                        <h4>Desktop App Development</h4>
                        <p><small>App Development is my passion</small></p>
                    </div>
                </div>
                <div className='flex items-center gap-8 rounded-md p-3 bg-[#150f2d]'>
                    <div>
                     <img className='w-8' src={android} alt="" />
                    </div>
                    <div>
                        <h4>Android App Development</h4>
                        <p><small>App Development is my passion</small></p>
                    </div>
                </div>
               
            </div>

        </div>
    );
};

export default Work;
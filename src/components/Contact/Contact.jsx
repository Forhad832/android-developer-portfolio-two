import React from 'react';

const Contact = () => {
    return (
        <div className='py-8'>
            <h2 className='text-2xl font-medium mb-6'>Contact With Me</h2>
            <div className="card  w-full min-w-sm shadow-2xl bg-[#150f2d]">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base-300">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered bg-[#010313]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base-300">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered bg-[#010313]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base-300">Message</span>
                        </label>
                        <textarea name="" placeholder='message' className='p-4 textarea textarea-bordered bg-[#010313]' id="" cols="30" rows="5"></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import Work from '../AboutMeMore/Work/Work';
import Education from '../AboutMeMore/Work/Education/Education';
import Skills from '../AboutMeMore/Skills/Skills';
import Contact from '../Contact/Contact';
import Project from '../AboutMeMore/Project/Project';


const About = () => {
    return (
        <div className='px-4 lg:px-12'>
            <div>
                <h2 className='text-3xl font-medium mt-12 lg:mt-0'>About Me</h2>
                <div className='border border-indigo-400 w-36 mt-2'></div>
            </div>
            <div className='pt-12'>
                <p className='text-lg tracking-wider text-base-300 mb-4'>I am an Android App Deleveloper. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro facere, tempore voluptatem distinctio molestias impedit perspiciatis autem quis provident quam error, modi vero, deserunt rerum eius maxime blanditiis incidunt quod?</p>
                <p className='text-lg tracking-wider text-base-300 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloremque nesciunt, ea inventore quisquam vitae velit minus accusamus, aperiam eligendi corporis veritatis quam perferendis necessitatibus delectus recusandae magnam ipsa commodi reprehenderit animi, id perspiciatis cum? Facere amet pariatur ducimus totam cumque sunt, maxime unde dicta!</p>
                <p className='text-lg tracking-wider text-base-300 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloremque nesciunt, ea inventore quisquam vitae velit minus accusamus, aperiam eligendi corporis veritatis quam perferendis necessitatibus delectus recusandae magnam ipsa commodi reprehenderit animi, id perspiciatis cum? Facere amet pariatur ducimus totam cumque sunt, maxime unde dicta!</p>
            </div>
            <div className='py-12'>
                <Work></Work>
            </div>
            <div>
                <Education></Education>
            </div>
            <div>
                <Skills></Skills>
            </div>
            <div>
                <Project></Project>
            </div>
            <div className='py-12'>
                <Contact></Contact>
            </div>
            
        </div>
    );
};

export default About;
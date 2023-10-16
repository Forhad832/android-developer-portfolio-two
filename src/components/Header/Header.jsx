import React from 'react';

const Header = () => {
    return (
        <div className="navbar fixed bottom-0 left-0 bg-black md:bg-transparent z-10 items-center justify-center md:static ">
        <div className="flex-none md:flex-1">
         
        </div>
        <div className="md:flex-none">
          <ul className="flex gap-8 px-4 text-lg">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Service</a></li>
            <li><a href='#'>Contact</a></li>
           
          </ul>
        </div>
      </div>
    );
};

export default Header;
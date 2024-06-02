import React from 'react';

const Header = () => {
  return (
    <header className='bg-white border-b border-accent py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <a href='/' className='text-2xl font-bold text-primary'>
            Analogue Store
          </a>
        </div>
        <nav className='space-x-4'>
          <a
            href='/collections/all-books/Product-Design'
            className='text-text hover:text-primary'
          >
            Books
          </a>
          <a
            href='/collections/all-magazines'
            className='text-text hover:text-primary'
          >
            Technology
          </a>
          <a
            href='/collections/all-stationery'
            className='text-text hover:text-primary'
          >
            Design
          </a>
        </nav>
        <div className='flex items-center'>
          <a href='/cart' className='text-text hover:text-primary'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 3h2l.4 2M7 13h10l3.3-7H6.3L7 13zm0 0l-.5 3h12l-.5-3M16 16a2 2 0 110 4 2 2 0 010-4zm-8 0a2 2 0 110 4 2 2 0 010-4z'
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

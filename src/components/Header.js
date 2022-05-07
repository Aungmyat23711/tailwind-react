const Header = () => {
  const clickMenu = () => {
    if (document.getElementById('menu-btn').classList.contains('open')) {
      console.log('contain');
      document.getElementById('menu').classList.add('hidden');
      document.getElementById('menu').classList.remove('flex');
      document.getElementById('menu-btn').classList.remove('open');
    } else {
      document.getElementById('menu').classList.remove('hidden');
      document.getElementById('menu').classList.add('flex');
      document.getElementById('menu-btn').classList.add('open');
    }
  };
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <img
            src={require('../img/react.png')}
            alt='react'
            className='h-16 w-auto'
          />
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href='#' className='hover:text-gray-600'>
            Pricing
          </a>
          <a href='#' className='hover:text-gray-600'>
            Product
          </a>
          <a href='#' className='hover:text-gray-600'>
            About Us
          </a>
          <a href='#' className='hover:text-gray-600'>
            Careers
          </a>
          <a href='#' className='hover:text-gray-600'>
            Community
          </a>
        </div>
        {/* Button */}
        <a
          href='#'
          className='hidden md:block p-3 px-6 pt-2 text-white bg-red-600 rounded-full self-baseline hover:bg-red-500'
        >
          Get Started
        </a>
        <button
          id='menu-btn'
          className='block  hamburger md:hidden focus:outline-none'
          onClick={() => clickMenu()}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>
      <div className='md:hidden'>
        <div
          id='menu'
          className='absolute  flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
        >
          <a href='#'>Pricing</a>
          <a href='#'>Products</a>
          <a href='#'>About Us</a>
          <a href='#'>Careers</a>
          <a href='#'>Community</a>
        </div>
      </div>
    </nav>
  );
};
export default Header;

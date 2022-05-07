const Content = () => {
  return (
    <>
      <section id='content'>
        {/* flex container */}
        <div className='container flex flex-col-reverse md:flex-row item-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          {/* left item */}
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
              Bring everyone together to build better products
            </h1>
            <p className='max-w-sm text-center text-gray-400 md:text-left'>
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value. If you
              cannot provide a valid href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles.
            </p>
            <div className='flex justify-center md:justify-start'>
              <a
                href='#'
                className='p-3 px-6 pt-2 text-white bg-red-600 rounded-full self-baseline hover:bg-red-500'
              >
                Get Started
              </a>
            </div>
          </div>
          <div className='md:w-1/2'>
            <img
              src={require('../img/illustration-intro.svg').default}
              alt='intro'
            />
          </div>
        </div>
      </section>
      <section id='feature'>
        <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
          <div className='flex flex-col space-y-12 md:w-1/2'>
            <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
              What's different about Manage?
            </h2>
            <p className='max-w-sm text-center text-gray-500 md:text-left'>
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value.
            </p>
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            {/* List Item 1 */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/* Heading */}
              <div className='rounded-l-full bg-red-100 md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-red-500'>
                    01
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden md:block mb-4 text-lg font-bold'>
                  Track company-wide progress
                </h3>
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href, but still need the element to
                  resemble a link, use a button and change it with appropriate
                  styles.
                </p>
              </div>
            </div>
            {/* List Item 2 */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/* Heading */}
              <div className='rounded-l-full bg-red-100 md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-red-500'>
                    02
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden md:block mb-4 text-lg font-bold'>
                  Track company-wide progress
                </h3>
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href, but still need the element to
                  resemble a link, use a button and change it with appropriate
                  styles.
                </p>
              </div>
            </div>
            {/* List Item 3 */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/* Heading */}
              <div className='rounded-l-full bg-red-100 md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-red-500'>
                    03
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden md:block mb-4 text-lg font-bold'>
                  Track company-wide progress
                </h3>
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href, but still need the element to
                  resemble a link, use a button and change it with appropriate
                  styles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='testiomials'>
        <div className='container max-w-6xl px-5 mx-auto mt-32 text-center'>
          <h2 className='text-4xl font-bold text-center'>
            What's Different About Manage?
          </h2>
          <div className='flex flex-col mt-24 md:flex-row md:space-x-6 space-y-12 md:space-y-0'>
            {/* Testimonial 1 */}
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:w-1/3'>
              <img
                src={require('../img/avatar-ali.png')}
                className='w-16 -mt-14'
              />
              <h5 className='text-lg font-bold'>Anisha Li</h5>
              <p className='text-sm text-gray-500'>
                The href attribute requires a valid value to be accessible.
                Provide a valid, navigable address as the href value. If you
                cannot provide a valid href, but still need the element to
                resemble a link, use a button and change it with appropriate
                styles.
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:w-1/3'>
              <img
                src={require('../img/avatar-richard.png')}
                className='w-16 -mt-14'
              />
              <h5 className='text-lg font-bold'>Richard</h5>
              <p className='text-sm text-gray-500'>
                The href attribute requires a valid value to be accessible.
                Provide a valid, navigable address as the href value. If you
                cannot provide a valid href, but still need the element to
                resemble a link, use a button and change it with appropriate
                styles.
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:w-1/3'>
              <img
                src={require('../img/avatar-shanai.png')}
                className='w-16 -mt-14'
              />
              <h5 className='text-lg font-bold'>Shanai</h5>
              <p className='text-sm text-gray-500'>
                The href attribute requires a valid value to be accessible.
                Provide a valid, navigable address as the href value. If you
                cannot provide a valid href, but still need the element to
                resemble a link, use a button and change it with appropriate
                styles.
              </p>
            </div>
          </div>
          {/* Button */}
          <div className='my-16'>
            <a
              href='#'
              className='p-3 px-6 pt-2 text-white bg-red-600 rounded-full self-baseline hover:bg-red-500'
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      <section id='cta' className='bg-red-300'>
        <div className='container flex flex-col justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
          {/* Heading */}
          <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
            Simplify how your team works today
          </h2>
          {/* Button */}
          <div>
            <a
              href='#'
              className='p-3 px-6 pt-2 text-red-300 bg-white rounded-full shadow-2xl baseline hover:bg-gray-300'
            >
              Get Start
            </a>
          </div>
        </div>
      </section>
      <section id='footer' className='bg-black'>
        <div className='container flex flex-col-reverse justify-around px-6 py-20 space-y-12 md:py-12 md:flex-row'>
          <div className='flex flex-col space-y-12 p-6'>
            <img src={require('../img/react.png')} className='h-10 w-10' />
            <div className='flex flex-row space-x-2 md:space-x-4'>
              <img
                src={require('../img/icon-facebook.svg').default}
                className='h-6 w-auto bg-blue-500'
              />
              <img
                src={require('../img/icon-instagram.svg').default}
                className='h-6 w-auto bg-orange-500'
              />
              <img
                src={require('../img/icon-pinterest.svg').default}
                className='h-6 w-auto bg-red-500'
              />
              <img
                src={require('../img/icon-twitter.svg').default}
                className='h-6 w-auto bg-blue-300'
              />
              <img
                src={require('../img/icon-youtube.svg').default}
                className='h-6 w-auto bg-red-700'
              />
            </div>
          </div>
          <div className='flex flex-row justify-around  md:w-1/2'>
            <div className='flex flex-col text-white'>
              <a href='#' className='hover:text-gray-600'>
                Home
              </a>
              <a href='#' className='hover:text-gray-600'>
                Pricing
              </a>
              <a href='#' className='hover:text-gray-600'>
                Products
              </a>
              <a href='#' className='hover:text-gray-600'>
                About Us
              </a>
            </div>
            <div className='flex flex-col text-white'>
              <a href='#' className='hover:text-gray-600'>
                Careers
              </a>
              <a href='#' className='hover:text-gray-600'>
                Community
              </a>
              <a href='#' className='hover:text-gray-600'>
                Privacy Policy
              </a>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-row space-x-6'>
              <input
                type='text'
                className='rounded-full pl-5 md:w-15 w-full'
                placeholder='update in your inbox'
              />
              <a
                href='#'
                className='p-3 px-6 pt-2 text-white bg-red-600 rounded-full self-baseline hover:bg-red-500'
              >
                Go
              </a>
            </div>
            <div className='text-white pt-12'>
              Copyright 2020 All rights reserved
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Content;

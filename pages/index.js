import React from 'react';

const Layout = (props) =>  {
    return (
      <>
           <section id="hero">
              <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
                <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                  <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                    Bring everyone together to build better products
                  </h1>
                  <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                  </p>

                  <div className='flex justify-center md:justify-start'>
                    <a href="#" className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>
                      Get Started
                    </a>
                  </div>

                </div>
               
                <div className='md:w-1/2'>
                  <img src="images/illustration-intro.svg" alt="ilustration" />  
                </div> 

              </div>
           </section>

           <section id="features">
            <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
              <div className='flex flex-col space-y-12 md:w-1/2'>
                <h2 className='max-w-md text-4xl font-bold text-center md:text-left'> What's different about manage ? </h2>
                <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'> 
                  Manage provides all the functionality your team needs , without the complexity.
                  Our software is tailor-made for modern digital product teams
                </p>
              </div>

              <div className='flex flex-col space-y-8 md:w-1/2'>
                <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                  <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                    <div className='flex items-center space-x-2'>
                      <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                        01
                      </div>
                      <h3 className='text-base font-bold md:mb-4 md:hidden'> Track Company Wide Progress </h3>
                    </div>
                  </div>

                  <div>
                    <h3 className='hidden mb-4 text-lg font-bold md:block'> Track Company Wide Progress </h3>
                    <p className='text-darkGrayishBlue'>
                      See how your day to day task fit into wider version . Go from tracking progress at the milestone level
                      all the way done to the smallest of details. Never loose sight of the bigger picture again
                    </p>
                  </div>
                </div>

                <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                  <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                    <div className='flex items-center space-x-2'>
                      <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                        02
                      </div>
                      <h3 className='text-base font-bold md:mb-4 md:hidden'> Advanced Built-in Reports </h3>
                    </div>
                  </div>

                  <div>
                    <h3 className='hidden mb-4 text-lg font-bold md:block'> Advanced Built-in Reports </h3>
                    <p className='text-darkGrayishBlue'>
                      See how your day to day task fit into wider version . Go from tracking progress at the milestone level
                      all the way done to the smallest of details. Never loose sight of the bigger picture again
                    </p>
                  </div>
                </div>

                <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                  <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                    <div className='flex items-center space-x-2'>
                      <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                        03
                      </div>
                      <h3 className='text-base font-bold md:mb-4 md:hidden'> Everything you need in one place </h3>
                    </div>
                  </div>

                  <div>
                    <h3 className='hidden mb-4 text-lg font-bold md:block'> Everything you need in one place </h3>
                    <p className='text-darkGrayishBlue'>
                      See how your day to day task fit into wider version . Go from tracking progress at the milestone level
                      all the way done to the smallest of details. Never loose sight of the bigger picture again
                    </p>
                  </div>
                </div>


              </div>
            </div>

           </section>


           <section id="testimonials">
            <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
              <h2 className='text-4xl font-bold text-center'> What's different about manage ? </h2>
              
              <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                  <img src="/images/avatar-anisha.png" className='w-16 -mt-14' alt="testimonial1" />
                  <h5 className='text-lg font-bold'>Anisha Li</h5>
                  <p className='text-sm text-darkGyayishBlue'>
                    Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestone at all times
                    keeps everyone motivated.
                  </p>
                </div>
             

              
                <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex'>
                  <img src="/images/avatar-ali.png" className='w-16 -mt-14' alt="testimonial1" />
                  <h5 className='text-lg font-bold'>Ali Bravo</h5>
                  <p className='text-sm text-darkGyayishBlue'>
                    Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestone at all times
                    keeps everyone motivated.
                  </p>
                </div>
              


              <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex'>
                <img src="/images/avatar-richard.png" className='w-16 -mt-14' alt="testimonial1" />
                <h5 className='text-lg font-bold'>Richard Watts</h5>
                <p className='text-sm text-darkGyayishBlue'>
                  Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestone at all times
                  keeps everyone motivated.
                </p>
              </div>
              </div>
              
            <div className='my-16'>
              <a href="#" className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</a>
            </div>

            </div>
            </section>


            <section id="cta" className='bg-brightRed'>
              <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
                <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
                  Simplify how your team works today
                </h2>

                <div>
                <a href="#" className='p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900'>Get Started</a>
                </div>
              </div>

            </section>
           </>
    )
}

export default Layout;
import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='container mx-auto my-12'>
            <div class="card mx-auto w-full lg:w-1/2 bg-base-100 shadow-xl border-2 border-natural">
                <div class="card-body">
                    <h2 class="card-title">My name is <span className='text-2xl text-primary'>Shadik Mahamud</span></h2>
                    <p><strong>Email address: </strong>shadikmahamudsohan@gmail.com</p>
                    <p><strong>Educational background: </strong> I am a student of class nine.I read in Barishal Zilla School.</p>
                    <p><strong>Technologies or skills I have as a web developer</strong></p>
                    <ul className='list-decimal leading-7 list-inside'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Node js</li>
                        <li>React js</li>
                        <li>Mongodb</li>
                        <li>Firebase authentication</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
            <h1 className='my-8 font-bold text-3xl text-center text-primary'>My projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div class="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/k1mXYhZ/2022-05-28.png" className='w-full' alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="font-bold text-2xl text-center text-base-100">PharmaBD</h2>
                        <p className='text-base-100'>It is a warehouse management website.</p>
                        <a class="btn btn-primary sm:w-full lg:w-1/3 mx-auto" href="https://pharmabd-9c8e0.web.app/" target="_blank">Visit Now</a>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/DtHrCVF/2022-05-28-1.png" className='w-full' alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="font-bold text-2xl text-center text-base-100">IP-BD_Doctor</h2>
                        <p className='text-base-100'>This is a website about an independent services of a doctor.</p>
                        <a class="btn btn-primary sm:w-full lg:w-1/3 mx-auto" href="https://independent-service-prov-f2cb2.web.app/" target="_blank">Visit Now</a>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/pZtybZV/2022-05-28-2.png" className='w-full' alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="font-bold text-2xl text-center text-base-100">Red-Onion</h2>
                        <p className='text-base-100'>This is a website about buying food.</p>
                        <a class="btn btn-primary sm:w-full lg:w-1/3 mx-auto" href="https://red-onion-c424a.web.app/" target="_blank">Visit Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
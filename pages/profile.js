import { PencilIcon } from '@heroicons/react/solid'


import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className='bg-slate-900'>
                <div className="container  pt-16 mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
                    <div className="bg-slate-900 shadow">
                        <div className="py-5">
                            <h3 className="text-lg leading-6 font-medium text-gray-200">Profile Information</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-400">This information is not public.</p>
                        </div>
                        <div className="overflow-hidden sm:rounded-lg">
                            <dl>
                                <div className="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                   
                                        <dt className="text-sm font-medium text-gray-200">Full name</dt>
                                        <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2 flex items-center justify-between"><span>Margot Foster </span><PencilIcon className='w-5 h-5 text-gray-400' /></dd>
                                    
                                    
                                </div>
                                <div className="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-200">Username</dt>
                                    <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2 flex items-center justify-between"><span>margotd </span><PencilIcon className='w-5 h-5 text-gray-400' /></dd>
                                </div>
                                <div className="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-200">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2 flex items-center justify-between"><span>margotfoster@example.com </span><PencilIcon className='w-5 h-5 text-gray-400' /></dd>
                                </div>
                                <div className="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-200">Phone no</dt>
                                    <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2 flex items-center justify-between"><span>+91 850 990 8943 </span><PencilIcon className='w-5 h-5 text-gray-400' /></dd>
                                </div>
                                <div className="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-200">Address</dt>
                                    <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2 flex items-center justify-between"><span>
                                            Madhakhali, Bhupatinagar, Purba Medinipur
                                         </span><PencilIcon className='w-5 h-5 text-gray-400' />
                                        
                                    </dd>
                                </div>
                                <div className="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-200">State</dt>
                                    <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2 flex items-center justify-between"><span>West Bengal </span><PencilIcon className='w-5 h-5 text-gray-400' /></dd>
                                </div>
                                <div className="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-200">Residence Country</dt>
                                    <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2 flex items-center justify-between"><span>India </span></dd>
                                </div>
                                
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

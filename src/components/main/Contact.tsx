'use client';

import { FC } from 'react';
// import { useForm } from 'react-hook-form';
// import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  message: string;
};

const Contact: FC = () => {
//   const { register, handleSubmit } = useForm<FormData>();

//   function onSubmit(data: FormData) {
//     sendEmail(data);
//   }

  return (
    <div className='px-20 my-1'>
        <h1 className="mt-20 mb-20 flex flex-col items-center justify-center m-auto text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
             Contact
        </h1>
        <section
            id="contact"
            className="items-center justify-center grid md:grid-cols-2  md:my-12 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
            </div>
            </div>

            <div>
                <form className="flex flex-col" >
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                        Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                        Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Message..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>

    </div>
    
    // <div id="contact" className='my-5 items-center justify-center'>
    //     <h1 className="flex flex-col items-center justify-center m-auto text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
    //         Contact
    //     </h1>
    //     <section    
    //         className="mt-10 flex flex-col items-left grid-cols-5 justify-left gap-3 h-full w-1/2 relative overflow-hidden"
    //         style={{ transform: "scale(0.9" }}
    //     >
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //             <div className='mb-5'>
    //                 <label
    //                 htmlFor='name'
    //                 className='mb-3 block text-base font-medium text-black'
    //                 >
    //                 Full Name
    //                 </label>
    //                 <input
    //                 type='text'
    //                 placeholder='Full Name'
    //                 className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
    //                 {...register('name', { required: true })}
    //                 />
    //             </div>
    //             <div className='mb-5'>
    //                 <label
    //                 htmlFor='email'
    //                 className='mb-3 block text-base font-medium text-black'
    //                 >
    //                 Email Address
    //                 </label>
    //                 <input
    //                 type='email'
    //                 placeholder='example@domain.com'
    //                 className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
    //                 {...register('email', { required: true })}
    //                 />
    //             </div>
    //             <div className='mb-5'>
    //                 <label
    //                 htmlFor='message'
    //                 className='mb-3 block text-base font-medium text-black'
    //                 >
    //                 Message
    //                 </label>
    //                 <textarea
    //                 rows={4}
    //                 placeholder='Type your message'
    //                 className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
    //                 {...register('message', { required: true })}
    //                 ></textarea>
    //             </div>
    //             <div>
    //                 <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
    //                 Submit
    //                 </button>
    //             </div>
    //         </form>
    //     </section>

    // </div>

    
  );
};

export default Contact;
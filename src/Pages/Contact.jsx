import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
       <section className="py-12 md:py-20 bg-gray-200 min-h-screen text-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#00a86b] tracking-tight">
              Get in Touch
            </h2>
            <div className="h-1 w-16 bg-[#f42a41]"></div>
            <p className="text-black text-base md:text-lg leading-relaxed text-justify">
              Have questions or want to know about plants 
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12  rounded-full bg-[#1e1e1e] flex items-center justify-center ransition-all">
                  <span className="text-lg md:text-xl text-white">
                    <FaLocationDot />
                  </span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="font-medium text-sm md:text-base">
                    Lalmatia,Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#1e1e1e] flex items-center justify-center  transition-all">
                  <span className="text-lg md:text-xl text-white">
                    <MdEmail />
                  </span>
                </div>
                <div className="break-all">
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="font-medium text-sm md:text-base">
                    admin@plantstore
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1e1e1e] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-800 shadow-2xl">
            <form
              className="space-y-4 md:space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 text-white focus:border-[#00a86b] focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 text-white focus:border-[#00a86b] focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Write a subject of your Issue"
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 text-white focus:border-[#00a86b] focus:outline-none transition-colors text-sm"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 text-white focus:border-[#00a86b] focus:outline-none transition-colors text-sm resize-none"
                  placeholder="Your Issue?"
                  required
                ></textarea>
              </div>
             <div className='flex justify-center items-center'> <span className='text-5xl mt-2 text-white'><MdEmail /></span>
              <button
                type="submit"
                className="px-5 py-3 md:py-2 bg-[#00a86b] hover:bg-[#008f5a] text-white rounded-lg font-bold shadow-lg shadow-[#00a86b]/20 transition-all active:scale-[0.98] text-sm md:text-base mt-2"
              >
                  submit
              </button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Contact;
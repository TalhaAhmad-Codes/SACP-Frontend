import  { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Technical Support',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Successfully:', formData);
    
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex justify-center items-center ">
      <form 
        onSubmit={handleSubmit} 
        className="md:min-w-2xl sm:max-w-2xl mx-auto bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col gap-4 "
      >
        <h3 className="text-2xl font-heading font-extrabold text-gray-900 tracking-wide mb-3 italic">
          Send us a Message
        </h3>
        
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 flex flex-col ">
            <label className="text-xs font-semibold text-gray-600">Full Name</label>
            <input 
              type="text" 
              placeholder=""
              value={formData.fullName}
              className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/30 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              onChange={e => setFormData({...formData, fullName: e.target.value})}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-600">Email Address</label>
            <input 
              type="email" 
              placeholder=""
              value={formData.email}
              className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/30 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              onChange={e => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
        </div>

        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-600">Subject</label>
          <div className="relative">
            <select 
              value={formData.subject}
              className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/30 focus:outline-none focus:border-blue-500 focus:bg-white appearance-none cursor-pointer transition-all"
              onChange={e => setFormData({...formData, subject: e.target.value})}
            >
              <option>Technical Support</option>
              <option>Institutional Access</option>
              <option>General Inquiry</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-600 ">Message</label>
          <textarea 
            rows="10"
            placeholder="How can we assist your research journey today?"
            value={formData.message}
            className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/30 focus:outline-none focus:border-blue-500 focus:bg-white resize-none transition-all"
            onChange={e => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
        </div>

       
        <div>
          <div className='flex justify-center'>

          <button 
            type="submit"
            className="w-full px-15 sm:w-auto inline-flex items-center justify-center gap-2  py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm focus:outline-none active:scale-[0.98] cursor-pointer"
          >
            Send Message 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
            </div>
      </form>
    </div>
  );
}
import { useState, useCallback } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  return (
    <div className="w-full max-w-lg space-y-6 ">
     <div className="w-full max-w-lg space-y-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full p-4 bg-slate-700/50 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors backdrop-blur-sm"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full p-4 bg-slate-700/50 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors backdrop-blur-sm"
              required
            />
          </div>
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full p-4 bg-slate-700/50 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors backdrop-blur-sm"
            required
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone (Optional)"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full p-4 bg-slate-700/50 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors backdrop-blur-sm"
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows="5"
            className="w-full p-4 bg-slate-700/50 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors backdrop-blur-sm resize-none"
            required
          />
          
          <button
            type="button"
            onClick={() => {
              alert('Not Functional Yet');
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
              });
            }}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Send Message
          </button>
        </div>
    </div>
  );
}
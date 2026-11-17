import React, { useState } from 'react';
import Button from '../components/Button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Info column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-forest bg-forest/10 px-3.5 py-1.5 rounded-full inline-block">
              Get In Touch
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest-900 tracking-tight">
              Let's Discuss Your Next Construction Project.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Have architectural drawings, land ready for construction, or need a preliminary budget estimation? Send us a message and our civil engineering lead will connect within 24 hours.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest text-lg flex-shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-forest-900 text-sm">Visit Us</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Calgary, Albarta</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest text-lg flex-shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-forest-900 text-sm">Call Us</h4>
                  <p className="text-xs sm:text-sm text-gray-600">(403) 423-050</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest text-lg flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-forest-900 text-sm">Email Inquiries</h4>
                  <p className="text-xs sm:text-sm text-gray-600">info@mtcl.ca</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7 bg-cream-50 p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-md">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-limeAccent/30 text-forest text-3xl flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-forest-900">Thank You!</h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                  Your project requirements have been submitted successfully. Our engineering team will review the details and get back to you shortly.
                </p>
                <Button
                  variant="primary"
                  onClick={() => setSubmitted(false)}
                  className="!rounded-xl"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest bg-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">
                    Project Details & Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details such as location, land size, estimated budget, or project timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest bg-white text-sm"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full !rounded-xl !py-3.5 font-bold"
                >
                  Submit Project Inquiry
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

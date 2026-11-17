import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcee] text-gray-800">
      <Navbar />

      <main className="flex-grow py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Card */}
          <div className="bg-forest text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#cbe875]/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#cbe875] text-xs font-bold uppercase tracking-widest mb-4">
              Legal Documentation
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
              Privacy Policy
            </h1>
            
            <p className="text-sm sm:text-base text-gray-300">
              <strong className="text-white">Effective Date:</strong> November 17, 2026
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200/80 space-y-8 text-sm sm:text-base leading-relaxed text-gray-700">
            
            <section className="space-y-4">
              <p>
                <strong className="text-forest-900 font-bold">Multiple Trades Construction Ltd.</strong> ("MTCL", "we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us through our website.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you visit our website, contact us, request a quote, or use our construction-related services.
              </p>
              <div className="p-4 rounded-2xl bg-cream-100 border-l-4 border-forest text-forest-900 font-medium">
                By accessing or using our website, you agree to the practices described in this Privacy Policy.
              </div>
            </section>

            {/* Section 1 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                1. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>

              <div className="space-y-3">
                <h3 className="font-bold text-forest-900 text-base">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Full name.</li>
                  <li>Email address.</li>
                  <li>Phone number.</li>
                  <li>Mailing or project address.</li>
                  <li>Any information you provide through our contact forms.</li>
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-forest-900 text-base">Project-Related Information</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Details about your construction or renovation project.</li>
                  <li>Type of services you are interested in.</li>
                  <li>Project requirements and specifications.</li>
                  <li>Additional information or documents you voluntarily share with us.</li>
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-forest-900 text-base">Technical Information</h3>
                <p>When you visit our website, certain technical information may be collected automatically, including:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>IP address.</li>
                  <li>Browser type and version.</li>
                  <li>Device information.</li>
                  <li>Operating system.</li>
                  <li>Website pages visited.</li>
                  <li>Date and time of your visit.</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                2. How We Use Your Information
              </h2>
              <p>We may use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Respond to your inquiries and requests.</li>
                <li>Provide construction service information and project estimates.</li>
                <li>Prepare and deliver quotations.</li>
                <li>Communicate with clients regarding ongoing or potential projects.</li>
                <li>Improve our website, services, and customer experience.</li>
                <li>Manage business operations and customer relationships.</li>
                <li>Send important updates related to our services.</li>
                <li>Maintain website security and prevent unauthorized activities.</li>
                <li>Comply with applicable legal and regulatory requirements.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                3. Sharing of Information
              </h2>
              <p>
                Multiple Trades Construction Ltd. does not sell, rent, or trade your personal information to third parties.
              </p>
              <p>We may share your information only when necessary:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>With trusted service providers who assist us in operating our website or business.</li>
                <li>With contractors, suppliers, or business partners when required to deliver requested services.</li>
                <li>When required by law, legal proceedings, or government authorities.</li>
                <li>To protect our legal rights, business operations, or the safety of others.</li>
              </ul>
              <p className="text-gray-600 italic">
                Any third-party service provider receiving personal information is expected to handle it appropriately and securely.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                4. Cookies and Website Technologies
              </h2>
              <p>
                Our website may use cookies and similar technologies to improve website functionality and user experience.
              </p>
              <p>Cookies may help us:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Understand how visitors interact with our website.</li>
                <li>Remember certain website preferences.</li>
                <li>Improve website performance.</li>
                <li>Analyze website traffic and usage patterns.</li>
              </ul>
              <p className="text-gray-600">
                You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect certain website functionalities.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                5. Data Protection and Security
              </h2>
              <p>
                We take reasonable technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, loss, or misuse.
              </p>
              <p className="text-gray-600">
                Although we make every reasonable effort to secure your information, no method of internet transmission or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                6. Data Retention
              </h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, maintain business records, provide services, and comply with applicable legal obligations.
              </p>
              <p className="text-gray-600">
                When personal information is no longer required, we take reasonable steps to securely delete or anonymize it.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                7. Third-Party Websites
              </h2>
              <p>
                Our website may contain links to third-party websites or services. Multiple Trades Construction Ltd. is not responsible for the privacy practices, policies, or content of external websites.
              </p>
              <p className="text-gray-600">
                We encourage visitors to review the privacy policies of any third-party websites they access.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                8. Your Privacy Rights
              </h2>
              <p>Depending on applicable privacy laws, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                <li>Request access to your personal information.</li>
                <li>Request corrections to inaccurate or incomplete information.</li>
                <li>Withdraw your consent to certain uses of your information.</li>
                <li>Request deletion of your personal information, subject to applicable legal requirements.</li>
                <li>Ask questions about how your personal information is collected and used.</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the contact information provided below.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                9. Children's Privacy
              </h2>
              <p className="text-gray-600">
                Our website and services are intended for general business and construction-related purposes and are not specifically directed toward children. We do not knowingly collect personal information from children without appropriate consent. If we become aware that such information has been collected improperly, we will take reasonable steps to delete it.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                Multiple Trades Construction Ltd. reserves the right to update or modify this Privacy Policy at any time. Any changes will be published on this page along with an updated Effective Date. We encourage visitors to review this page periodically to stay informed about how we protect personal information.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4 pt-6 border-t-2 border-forest/10">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                11. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us:
              </p>

              <div className="bg-[#fbfcee] p-6 rounded-2xl border border-forest/10 space-y-2">
                <h3 className="font-extrabold text-forest-900 text-base">
                  Multiple Trades Construction Ltd.
                </h3>
                <p className="text-gray-700">
                  <strong>Website:</strong>{' '}
                  <a href="https://mtcl-website-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-forest underline font-medium hover:text-[#107548]">
                    https://mtcl-website-six.vercel.app/
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@mtcl.ca" className="text-forest underline font-medium hover:text-[#107548]">
                    info@mtcl.ca
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Location:</strong> Calgary, Alberta, Canada
                </p>
                <p className="text-xs text-gray-500 pt-2">
                  We will make reasonable efforts to respond to privacy-related inquiries within an appropriate timeframe.
                </p>
              </div>

              <div className="pt-4 text-center sm:text-left">
                <p className="font-extrabold text-forest-900">Multiple Trades Construction Ltd.</p>
                <p className="text-xs text-forest/80 italic font-semibold tracking-wide">Fine Creations With Dedication.</p>
              </div>
            </section>

          </div>

          {/* Back to Home Button */}
          <div className="mt-8 text-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-forest text-white font-bold hover:bg-forest-800 transition-all shadow-md active:scale-95 text-sm"
            >
              ← Back to Homepage
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

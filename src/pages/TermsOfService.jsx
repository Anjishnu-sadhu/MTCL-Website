import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            
            <p className="text-sm sm:text-base text-gray-300">
              <strong className="text-white">Effective Date:</strong> November 17, 2026
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200/80 space-y-8 text-sm sm:text-base leading-relaxed text-gray-700">
            
            <section className="space-y-4">
              <p>
                Welcome to <strong className="text-forest-900 font-bold">Multiple Trades Construction Ltd.</strong> ("MTCL", "we", "our", or "us").
              </p>
              <p>
                These Terms of Service govern your access to and use of our website and the construction-related services provided by Multiple Trades Construction Ltd.
              </p>
              <div className="p-4 rounded-2xl bg-cream-100 border-l-4 border-forest text-forest-900 font-medium">
                By accessing our website, submitting an inquiry, requesting a quotation, or engaging our services, you agree to comply with these Terms of Service. If you do not agree with these terms, please discontinue using our website and services.
              </div>
            </section>

            {/* Section 1 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                1. About Our Services
              </h2>
              <p>
                Multiple Trades Construction Ltd. provides professional construction and related services, which may include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Drywall Installation and Finishing.</li>
                <li>Steel Stud Framing.</li>
                <li>Insulation Services.</li>
                <li>Taping and Texturing.</li>
                <li>Ceiling Systems.</li>
                <li>Other Construction and Renovation-Related Services.</li>
              </ul>
              <p className="text-gray-600">
                Our services are subject to project requirements, availability, agreed specifications, and applicable construction regulations. We reserve the right to modify, expand, or discontinue any service at our discretion.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                2. Website Usage
              </h2>
              <p>By using our website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                <li>Use the website only for lawful purposes.</li>
                <li>Provide accurate and complete information when submitting inquiries.</li>
                <li>Avoid submitting misleading, fraudulent, or unauthorized information.</li>
                <li>Not attempt to damage, disrupt, or interfere with website functionality.</li>
                <li>Not attempt unauthorized access to our website, servers, or systems.</li>
                <li>Not copy, reproduce, or distribute website content without prior written permission.</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to restrict or terminate access to our website if these terms are violated.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                3. Quotations and Estimates
              </h2>
              <p>
                Any quotations, estimates, or pricing information provided through our website, email, telephone, or other communication channels are subject to confirmation:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                <li>Estimates are based on the information available at the time of preparation.</li>
                <li>Final pricing may vary depending on project scope, materials, labour, site conditions, and additional requirements.</li>
                <li>Quotations may be subject to an expiry date.</li>
                <li>Any changes to the original project requirements may result in revised pricing.</li>
                <li>A quotation does not constitute a binding project agreement unless formally accepted by both parties.</li>
              </ul>
              <p className="text-gray-700 font-medium">
                All final project costs, timelines, and specifications will be confirmed through an agreed project proposal or contract.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                4. Project Agreements and Responsibilities
              </h2>
              <p>
                Every construction project may require a separate written agreement outlining the specific terms and conditions. Depending on the project, the agreement may include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Project scope and specifications.</li>
                <li>Estimated start and completion dates.</li>
                <li>Pricing and payment schedules.</li>
                <li>Materials and labour requirements.</li>
                <li>Responsibilities of the client and contractor.</li>
                <li>Change requests and additional work.</li>
                <li>Warranty and service conditions.</li>
              </ul>
              <p className="text-gray-600">
                In case of any conflict between these Terms of Service and a separately signed project agreement, the project agreement will govern the relevant project-specific matters to the extent permitted by applicable law.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                5. Payments and Billing
              </h2>
              <p>
                Payment terms will be communicated and agreed upon before the commencement of applicable construction work. Depending on the project agreement:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                <li>Deposits or advance payments may be required.</li>
                <li>Progress payments may be scheduled according to project milestones.</li>
                <li>Final payments will be due according to the agreed payment terms.</li>
                <li>Additional work outside the original scope may involve additional charges.</li>
                <li>Applicable taxes and other agreed expenses may be added to the final invoice.</li>
              </ul>
              <p className="text-gray-600">
                Clients are responsible for making payments according to the agreed schedule. Any late payment charges or other consequences must be specified in the applicable agreement and comply with applicable law.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                6. Project Changes and Cancellations
              </h2>
              <p>
                Any modifications to the agreed project scope, materials, design, or specifications should be communicated to MTCL in writing. Changes may affect project costs, material requirements, labour requirements, project schedules, and estimated completion dates.
              </p>
              <p className="text-gray-600">
                Cancellation requests must be communicated in writing. Any applicable cancellation charges, refunds, or payments for completed work and committed materials will be handled according to the signed project agreement and applicable law.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                7. Project Timelines and Delays
              </h2>
              <p>
                We make reasonable efforts to complete projects within the agreed timelines. However, construction schedules may be affected by circumstances beyond our reasonable control, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Severe weather conditions.</li>
                <li>Material shortages or supply-chain disruptions.</li>
                <li>Unexpected site conditions.</li>
                <li>Delays caused by other contractors or third parties.</li>
                <li>Changes requested by the client.</li>
                <li>Government restrictions, permits, or regulatory requirements.</li>
                <li>Other unforeseen circumstances.</li>
              </ul>
              <p className="text-gray-600">
                We will make reasonable efforts to communicate significant delays and adjust project schedules where necessary.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                8. Client Responsibilities
              </h2>
              <p>Clients engaging our construction services agree to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                <li>Provide accurate project information.</li>
                <li>Ensure reasonable access to the project site.</li>
                <li>Communicate project requirements clearly.</li>
                <li>Obtain approvals or permits where their responsibility requires it.</li>
                <li>Inform us of relevant site conditions, restrictions, or potential hazards.</li>
                <li>Make payments according to the agreed schedule.</li>
                <li>Cooperate with our team throughout the project.</li>
              </ul>
              <p className="text-gray-600">
                Failure to meet these responsibilities may affect project timelines, costs, or service delivery.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                9. Safety and Site Conditions
              </h2>
              <p>
                Construction work involves certain risks and safety requirements. MTCL expects all clients, visitors, contractors, and other authorized individuals to respect applicable site safety procedures.
              </p>
              <p className="text-gray-600">
                We reserve the right to restrict access to construction areas where necessary for safety, operational, or regulatory reasons. All construction activities will be performed subject to applicable safety standards and regulations.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                10. Warranty and Workmanship
              </h2>
              <p>
                Any warranties, guarantees, or workmanship commitments will be specified in the applicable project agreement. Unless otherwise agreed in writing, no additional warranty is created merely by information published on our website.
              </p>
              <p className="text-gray-600">
                Nothing in these Terms of Service limits any mandatory consumer rights or statutory warranties that cannot legally be excluded under applicable law.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                11. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Multiple Trades Construction Ltd. shall not be responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                <li>Temporary website interruptions or technical issues.</li>
                <li>Losses resulting from inaccurate information submitted by website visitors.</li>
                <li>Unauthorized use of information caused by circumstances beyond our reasonable control.</li>
                <li>Indirect or consequential losses arising from website usage.</li>
              </ul>
              <p className="text-gray-600">
                With respect to construction services, liability will be determined in accordance with the applicable project agreement and relevant laws. Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law, including liability arising from negligence, fraud, or other legally non-excludable circumstances.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                12. Intellectual Property
              </h2>
              <p>
                All website content, including text and written materials, logos and branding, images and graphics, website design and layouts, and other original materials are owned by or licensed to Multiple Trades Construction Ltd., unless otherwise stated.
              </p>
              <p className="text-gray-600">
                You may not reproduce, distribute, modify, publish, or commercially use our website content without prior written permission.
              </p>
            </section>

            {/* Section 13 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                13. Third-Party Links
              </h2>
              <p className="text-gray-600">
                Our website may contain links to third-party websites, resources, or services for informational purposes. MTCL does not control or guarantee the accuracy, security, availability, or content of external websites. Accessing third-party websites is at your own discretion and subject to their respective terms and privacy policies.
              </p>
            </section>

            {/* Section 14 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                14. Privacy and Personal Information
              </h2>
              <p className="text-gray-600">
                Your use of our website is also subject to our Privacy Policy. We may collect and process personal information submitted through our website to respond to inquiries, prepare quotations, communicate with clients, and provide requested services. For additional information about how we collect, use, and protect your personal information, please review our <a href="#privacy" className="text-forest underline font-semibold hover:text-[#107548]">Privacy Policy</a>.
              </p>
            </section>

            {/* Section 15 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                15. Suspension and Termination
              </h2>
              <p>
                We reserve the right to suspend or restrict access to our website if we reasonably believe that a visitor has violated these Terms of Service, attempted unauthorized access to our systems, used the website for unlawful activities, or engaged in activities that may harm our business, website, or other users. Termination of website access does not automatically terminate any separate project agreement.
              </p>
            </section>

            {/* Section 16 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                16. Governing Law
              </h2>
              <p className="text-gray-600">
                These Terms of Service shall be governed by and interpreted in accordance with the laws of the Province of Alberta and the applicable federal laws of Canada. Any disputes arising from the use of our website or services will be handled by the courts of competent jurisdiction in Alberta, subject to applicable legal requirements.
              </p>
            </section>

            {/* Section 17 */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                17. Changes to These Terms
              </h2>
              <p className="text-gray-600">
                Multiple Trades Construction Ltd. reserves the right to update, revise, or modify these Terms of Service at any time. Updated terms will be published on this page with a revised Effective Date. Your continued use of our website after changes are published constitutes acceptance of the revised terms to the extent permitted by applicable law.
              </p>
            </section>

            {/* Section 18 */}
            <section className="space-y-4 pt-6 border-t-2 border-forest/10">
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 tracking-tight">
                18. Contact Information
              </h2>
              <p>
                If you have any questions regarding these Terms of Service, our website, or our construction services, please contact us:
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
                  <strong>Location:</strong> Calgary, Alberta, Canada
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@mtcl.ca" className="text-forest underline font-medium hover:text-[#107548]">
                    info@mtcl.ca
                  </a>
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

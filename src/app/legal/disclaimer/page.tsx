import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Disclaimer — Darkhaven",
  description: "Important legal disclaimers regarding Darkhaven's technology services and content.",
};

export default function DisclaimerPage() {
  return (
    <main>
      <Navbar />
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-medium text-blue uppercase tracking-widest">Legal</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4 text-text-dark">Disclaimer</h1>
            <p className="text-sm text-text-dark-3">Last updated: June 2026</p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "General Disclaimer",
                content: <p className="text-text-dark-2">The information provided on Darkhaven&apos;s website and through our services is for general informational and technology reference purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information, products, services, or related graphics for any particular purpose.</p>,
              },
              {
                title: "No Financial Advice",
                content: <p className="text-text-dark-2">Darkhaven is a technology and infrastructure company. Nothing on this website or in our services constitutes financial advice, investment advice, trading advice, or any other form of advisory service. You should not interpret any content as a recommendation to buy, sell, or hold any financial instrument or participate in any particular trading or investment strategy.</p>,
              },
              {
                title: "Technology Services Only",
                content: <p className="text-text-dark-2">Darkhaven provides technology infrastructure, software engineering, and data systems services. We do not provide brokerage, trading, or financial services of any kind. Our platform and tools are designed for technology operations, system management, and digital infrastructure support only.</p>,
              },
              {
                title: "Limitation of Liability",
                content: <p className="text-text-dark-2">In no event shall Darkhaven, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of data, profits, or goodwill arising from your access to or use of (or inability to access or use) our services.</p>,
              },
              {
                title: "External Links",
                content: <p className="text-text-dark-2">Our website may contain links to third-party websites or services that are not owned or controlled by Darkhaven. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. Accessing these links is at your own risk.</p>,
              },
              {
                title: "Service Availability",
                content: <p className="text-text-dark-2">Darkhaven does not guarantee that our services will be available at all times or without interruption. We may experience hardware, software, or other problems resulting in interruptions, errors, or loss of data. We are not responsible for any damages or losses arising from such interruptions.</p>,
              },
              {
                title: "Changes to This Disclaimer",
                content: <p className="text-text-dark-2">We reserve the right to update or modify this disclaimer at any time without prior notice. Changes become effective immediately upon posting to the website. Your continued use of our services following any changes constitutes acceptance of the updated disclaimer.</p>,
              },
              {
                title: "Contact Us",
                content: (
                  <>
                    <p className="mb-3 text-text-dark-2">If you have questions about this disclaimer, please contact us:</p>
                    <ul className="space-y-2 text-text-dark-2">
                      <li><strong className="text-text-dark">Email:</strong> support@darkhaven.com</li>
                      <li><strong className="text-text-dark">Phone:</strong> (657) 531-9327</li>
                    </ul>
                  </>
                ),
              },
            ].map((section, i) => (
              <div
                key={i}
                className="border rounded-xl p-0 overflow-hidden"
                style={{ borderColor: "#e8e8e8" }}
              >
                {/* Heading with divider */}
                <div
                  className="px-5 sm:px-6 py-3.5 sm:py-4 border-b"
                  style={{ borderColor: "#f0f0f0", background: "#fafafa" }}
                >
                  <h2 className="text-sm sm:text-base font-semibold text-text-dark">
                    {section.title}
                  </h2>
                </div>
                {/* Content body */}
                <div className="px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-base leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
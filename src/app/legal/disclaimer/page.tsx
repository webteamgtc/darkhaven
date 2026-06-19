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
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden" style={{ background: "#0F0F12" }}>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A962" }}>Legal</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4 text-white">Disclaimer</h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Last updated: June 2026</p>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>General Disclaimer</h2>
              <p>The information provided on Darkhaven&apos;s website and through our services is for general informational and technology reference purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information, products, services, or related graphics for any particular purpose.</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>No Financial Advice</h2>
              <p>Darkhaven is a technology and infrastructure company. Nothing on this website or in our services constitutes financial advice, investment advice, trading advice, or any other form of advisory service. You should not interpret any content as a recommendation to buy, sell, or hold any financial instrument or participate in any particular trading or investment strategy.</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>Technology Services Only</h2>
              <p>Darkhaven provides technology infrastructure, software engineering, and data systems services. We do not provide brokerage, trading, or financial services of any kind. Our platform and tools are designed for technology operations, system management, and digital infrastructure support only.</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>Limitation of Liability</h2>
              <p>In no event shall Darkhaven, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of data, profits, or goodwill arising from your access to or use of (or inability to access or use) our services.</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>External Links</h2>
              <p>Our website may contain links to third-party websites or services that are not owned or controlled by Darkhaven. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. Accessing these links is at your own risk.</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>Service Availability</h2>
              <p>Darkhaven does not guarantee that our services will be available at all times or without interruption. We may experience hardware, software, or other problems resulting in interruptions, errors, or loss of data. We are not responsible for any damages or losses arising from such interruptions.</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>Changes to This Disclaimer</h2>
              <p>We reserve the right to update or modify this disclaimer at any time without prior notice. Changes become effective immediately upon posting to the website. Your continued use of our services following any changes constitutes acceptance of the updated disclaimer.</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>Contact Us</h2>
              <p className="mb-3">If you have questions about this disclaimer, please contact us:</p>
              <ul className="space-y-2">
                <li><strong className="text-white">Email:</strong> support@darkhaven.com</li>
                <li><strong className="text-white">Phone:</strong> (657) 531-9327</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

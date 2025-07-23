import { Heart, Users, Home as HomeIcon, Phone, Mail, Shield, Target, Utensils } from 'lucide-react';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-6 shadow-lg animate-bounce">
              <Heart className="w-16 h-16 text-orange-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight animate-fade-in">
            Help Nest Foundation
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto animate-slide-in-left" style={{animationDelay: '0.3s'}}>
            Supporting Gaza crisis survivors with immediate relief and hope for a better tomorrow
          </p>
          <button 
            onClick={() => scrollToSection('donation')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 animate-bounce hover:scale-110"
            style={{animationDelay: '0.6s'}}
          >
            Donate Now
          </button>
        </div>
      </section>

      {/* Crisis Information Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-slide-in-left">
              The Gaza Crisis: Your Help Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Families in Gaza are facing unprecedented challenges. Many have lost their homes, 
                  livelihoods, and access to basic necessities. Your donation provides immediate relief 
                  including food, shelter, medical care, and hope for rebuilding lives.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-orange-50 p-4 rounded-lg animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
                    <div className="text-2xl font-bold text-orange-600 animate-pulse">2M+</div>
                    <div className="text-sm text-gray-600">People Affected</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.6s'}}>
                    <div className="text-2xl font-bold text-orange-600 animate-pulse" style={{animationDelay: '0.2s'}}>500K+</div>
                    <div className="text-sm text-gray-600">Children in Need</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.8s'}}>
                    <div className="text-2xl font-bold text-orange-600 animate-pulse" style={{animationDelay: '0.4s'}}>24/7</div>
                    <div className="text-sm text-gray-600">Emergency Response</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-8 text-center animate-slide-in-right" style={{animationDelay: '0.4s'}}>
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=humanitarian%20aid%20workers%20helping%20families%20in%20crisis%20zone%2C%20compassionate%20scene%2C%20hope%20and%20resilience%2C%20warm%20lighting%2C%20photorealistic&image_size=square_hd" 
                  alt="Humanitarian aid in Gaza" 
                  className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                />
                <p className="text-gray-600 italic animate-fade-in" style={{animationDelay: '0.8s'}}>
                  "Every donation brings hope and healing to families in their darkest hour."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Make a Difference Today
          </h2>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 animate-fade-in">
                  Scan to Donate via PayPal
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                  <img
                    src="./QR.jpg"
                    alt="Donation QR Code"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 animate-fade-in">
                  How to Donate:
                </h4>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 animate-pulse">1</span>
                    Open your PayPal app or scan with camera
                  </li>
                  <li className="flex items-start animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 animate-pulse">2</span>
                    Scan the PayPal QR code
                  </li>
                  <li className="flex items-start animate-slide-in-left" style={{animationDelay: '0.3s'}}>
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 animate-pulse">3</span>
                    Enter your donation amount
                  </li>
                  <li className="flex items-start animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 animate-pulse">4</span>
                    Complete the secure PayPal payment
                  </li>
                </ol>
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-3">Suggested amounts:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce" style={{animationDelay: '0.1s'}}>$5</span>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce" style={{animationDelay: '0.2s'}}>$25</span>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce" style={{animationDelay: '0.3s'}}>$50</span>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce" style={{animationDelay: '0.4s'}}>$100</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-4 text-sm text-gray-600">
              <Shield className="w-5 h-5" />
              <span>100% Secure Payment</span>
              <span>•</span>
              <span>Instant Transfer</span>
              <span>•</span>
              <span>Tax Deductible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Usage Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            How Your Donations Help
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-float">
                <Utensils className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Food & Water</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2 animate-pulse">40%</div>
              <p className="text-gray-600 text-sm">
                Emergency food supplies, clean water, and nutrition support for families
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.3s'}}>
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <HomeIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Shelter & Safety</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2 animate-pulse" style={{animationDelay: '0.2s'}}>35%</div>
              <p className="text-gray-600 text-sm">
                Temporary housing, blankets, and safe spaces for displaced families
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.5s'}}>
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Care</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2 animate-pulse" style={{animationDelay: '0.4s'}}>25%</div>
              <p className="text-gray-600 text-sm">
                Emergency medical treatment, medicines, and healthcare support
              </p>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-700 font-medium">Transparency Report</span>
              <Target className="w-5 h-5 text-orange-500" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full" style={{width: '92%'}}></div>
            </div>
            <p className="text-sm text-gray-600">
              92% of donations go directly to aid programs. 8% covers operational costs and ensures sustainable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Stories of Hope
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg animate-slide-in-left hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20middle%20eastern%20woman%20with%20hopeful%20expression%2C%20warm%20lighting%2C%20compassionate%20eyes%2C%20headscarf%2C%20photorealistic&image_size=square" 
                  alt="Amira's photo" 
                  className="w-12 h-12 rounded-full object-cover mr-4 animate-pulse"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Amira, Mother of 3</h4>
                  <p className="text-sm text-gray-600">Gaza Resident</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The food packages from Help Nest Foundation kept my children fed when we had nothing. 
                Your kindness gave us strength to keep going."
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg animate-slide-in-right hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20middle%20eastern%20elderly%20man%20with%20kind%20eyes%2C%20traditional%20clothing%2C%20wise%20expression%2C%20warm%20lighting%2C%20photorealistic&image_size=square" 
                  alt="Omar's photo" 
                  className="w-12 h-12 rounded-full object-cover mr-4 animate-pulse"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Omar, Community Elder</h4>
                  <p className="text-sm text-gray-600">Local Leader</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Help Nest Foundation doesn't just provide aid - they provide hope. 
                Their support helps our community heal and rebuild together."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Get in Touch
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Have questions about donations or want to learn more about our work? 
            We're here to help and ensure complete transparency.
          </p>
          <div className="flex justify-center">
            <div className="bg-blue-800 rounded-lg p-8 max-w-md w-full animate-fade-in hover:scale-105 transition-transform duration-300">
              <Mail className="w-12 h-12 text-orange-400 mx-auto mb-6 animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Email Us</h3>
              <p className="text-blue-100 mb-6 text-center">For general inquiries and donation receipts</p>
              <button 
                onClick={() => window.location.href = 'mailto:contact@helpnestfoundation.org'}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg w-full transition-all duration-300 cursor-pointer hover:scale-105 animate-pulse"
              >
                contact@helpnestfoundation.org
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-700">
            <div className="flex justify-center items-center space-x-6 text-sm text-blue-200">
              <span>Registered NGO</span>
              <span>•</span>
              <span>80G Tax Exemption</span>
              <span>•</span>
              <span>FCRA Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Help Nest Foundation</h3>
          <p className="text-gray-400 mb-4">
            Supporting Gaza crisis survivors with compassion, transparency, and hope.
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Help Nest Foundation. All rights reserved. | 
            <span className="text-orange-400"> Made with ❤️ for humanity</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
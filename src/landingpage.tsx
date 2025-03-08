import React, { useState } from "react";
import { Link } from "react-router-dom";
import './tailwind.css'
import LoginSignup from './LoginSignup';
import { FaLinkedin, FaTwitter, FaFacebook, FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      title: "Predict Case Outcomes with Precision",
      description: "Our AI analyzes case histories, legal arguments, and precedents to deliver accurate predictions, complete with confidence scores."
    },
    {
      title: "Quantify Legal Risks",
      description: "Assign risk scores based on case strength, opposing counsel history, and other critical factors to guide your strategy."
    },
    {
      title: "Enhanced Document Analysis",
      description: "Compare your documents against successful past cases, identify weaknesses, and refine your content for maximum impact."
    },
    {
      title: "Judge & Opposing Counsel Insights",
      description: "Gain critical insights into judicial tendencies and opposing counsel's track records, helping you stay prepared."
    },
    {
      title: "Interactive Visualizations",
      description: "Easily interpret case outcome probabilities, financial risks, and strategic scenarios with dynamic charts and graphs."
    }
  ];

  const whyChooseUs = [
    {
      title: "AI-Driven Precision",
      description: "Predict outcomes based on real data and legal precedents."
    },
    {
      title: "Comprehensive Insights",
      description: "From judge biases to financial exposure, we provide a 360° case view."
    },
    {
      title: "Time-Saving Automation",
      description: "Automate research, drafting, and risk assessments."
    },
    {
      title: "Data Security",
      description: "Bank-level encryption ensures your case data is safe and confidential."
    }
  ];

  const testimonials = [
    {
      quote: "Judgmentalytics has revolutionized how we prepare for cases. The risk assessment tool alone has saved us countless hours!",
      author: "Sarah Mehta, Senior Legal Advisor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      quote: "With Judgmentalytics, we approach every case with confidence, knowing the odds are in our favor.",
      author: "Ravi Kumar, Partner, Law & Associates",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  const steps = [
    {
      step: "Step 1",
      title: "Input Case Details",
      description: "Upload case documents or key information to start."
    },
    {
      step: "Step 2",
      title: "Get AI Insights",
      description: "View predictions, risk scores, and tailored strategies."
    },
    {
      step: "Step 3",
      title: "Act with Confidence",
      description: "Use our insights to refine arguments, strengthen documents, and plan winning strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">Judgmentalytics</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">Legal Success Starts with Smarter Insights</h1>
    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
      Judgmentalytics uses AI and analytics to transform how you approach litigation, risk management, and case preparation.
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <Link to="/LoginSignup">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
          Get Started for Free
        </button>
      </Link>
      <Link to="/demo">
        <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
          Request a Demo
        </button>
      </Link>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Judgmentalytics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Legal Practice?</h2>
    <p className="text-xl mb-10">Discover smarter litigation strategies today.</p>
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <Link to="/signup">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
          Sign Up Now
        </button>
      </Link>
      <Link to="/demo">
        <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
          Schedule a Demo
        </button>
      </Link>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400"><FaLinkedin size={24} /></a>
                <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
                <a href="#" className="hover:text-blue-400"><FaFacebook size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2024 Judgmentalytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

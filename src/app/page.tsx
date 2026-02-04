import React from "react";
import Link from "next/link";
import { 
  FaFire, 
  FaDumbbell, 
  FaHeartbeat, 
  FaChartLine, 
  FaAppleAlt, 
  FaClock, 
  FaUsers, 
  FaMobileAlt,
  FaStar,
  FaCheckCircle,
  FaEnvelope // Added this import for the contact button icon
} from "react-icons/fa";
import { GiMuscleUp, GiWeightLiftingUp, GiRunningShoe } from "react-icons/gi";

export default function Page() {
  const features = [
    {
      icon: <FaFire className="text-3xl text-orange-500" />,
      title: "Personalized Workouts",
      description: "AI-powered workout plans tailored to your fitness level, goals, and available equipment.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <FaDumbbell className="text-3xl text-blue-500" />,
      title: "Expert Trainers",
      description: "Certified professionals with 10+ years experience in biomechanics and sports nutrition.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <FaChartLine className="text-3xl text-green-500" />,
      title: "Smart Progress Tracking",
      description: "Real-time analytics, body composition tracking, and performance insights.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaHeartbeat className="text-3xl text-pink-500" />,
      title: "Health Monitoring",
      description: "Integration with wearables for heart rate, sleep, and activity tracking.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <FaAppleAlt className="text-3xl text-yellow-500" />,
      title: "Nutrition Planning",
      description: "Custom meal plans with macro tracking and recipe suggestions.",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: <FaMobileAlt className="text-3xl text-cyan-500" />,
      title: "Mobile App Access",
      description: "Full platform access on iOS & Android with offline workout support.",
      gradient: "from-cyan-500 to-sky-500"
    }
  ];

  const programs = [
    {
      icon: <GiRunningShoe className="text-4xl" />,
      title: "Fat Burn & Cardio",
      duration: "8-12 Weeks",
      level: "All Levels",
      features: ["HIIT Workouts", "Metabolic Training", "Fat Loss Nutrition", "Progress Photos"],
      color: "bg-gradient-to-r from-red-500 to-orange-500"
    },
    {
      icon: <GiMuscleUp className="text-4xl" />,
      title: "Muscle Building",
      duration: "12-16 Weeks",
      level: "Intermediate+",
      features: ["Hypertrophy Focus", "Strength Periodization", "Protein Optimization", "Recovery Protocols"],
      color: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      icon: <GiWeightLiftingUp className="text-4xl" />,
      title: "Strength & Power",
      duration: "16+ Weeks",
      level: "Advanced",
      features: ["Powerlifting", "Olympic Lifting", "Peak Performance", "Competition Prep"],
      color: "bg-gradient-to-r from-emerald-500 to-green-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Lost 45 lbs",
      content: "Be-Fit transformed my life. The personalized approach helped me lose weight sustainably.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Gained 20 lbs Muscle",
      content: "As a former skinny guy, the muscle building program gave me incredible results.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Marathon Runner",
      content: "The endurance training and nutrition plans helped me shave 15 minutes off my PB.",
      rating: 5
    }
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden">
      {/* ================= ENHANCED HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <FaStar className="text-yellow-400" />
                <span className="text-sm font-medium">Trusted by 50,000+ Members</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  TRANSFORM
                </span>
                <br />
                Your Body & Mind
              </h1>
              
              <p className="mt-6 max-w-2xl text-xl text-gray-300 leading-relaxed">
                Be-Fit combines cutting-edge science with personalized coaching to help you achieve 
                sustainable fitness results. Track, train, and transform with our all-in-one platform.
              </p>

              <div className="mt-10 flex flex-wrap gap-6">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>

                <Link href="/programs">
                  <button className="group px-8 py-4 border-2 border-white/50 rounded-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                    <FaUsers />
                    <span>Explore Programs</span>
                  </button>
                </Link>

                {/* ============ ADDED CONTACT US BUTTON HERE ============ */}
                <Link href="/contact">
                  <button className="group px-8 py-4 bg-transparent border-2 border-green-500 text-green-500 font-semibold rounded-xl hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                    <FaEnvelope />
                    <span>Contact Us</span>
                  </button>
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" />
                  <span className="text-gray-300">30-Day Money Back</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" />
                  <span className="text-gray-300">24/7 Coach Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" />
                  <span className="text-gray-300">No Equipment Needed</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-gray-800/50 p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-semibold">Active Users</span>
                      </div>
                      <div className="text-3xl font-bold">50K+</div>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-semibold">Workouts</span>
                      </div>
                      <div className="text-3xl font-bold">500+</div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gray-800/50 p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-semibold">Trainers</span>
                      </div>
                      <div className="text-3xl font-bold">45+</div>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-sm font-semibold">Success Rate</span>
                      </div>
                      <div className="text-3xl font-bold">94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines training, nutrition, and community for complete transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} bg-opacity-10 mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS SHOWCASE ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformative
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scientifically designed programs that deliver real results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className={`h-3 ${program.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    {program.icon}
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold">
                      {program.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FaClock className="text-gray-400" />
                      <span className="text-gray-600">Level: {program.level}</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full py-4 bg-gradient-to-r from-gray-900 to-black text-white font-bold rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform group-hover:scale-105">
                    Explore Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NUTRITION SECTION ================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Precision
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Nutrition</span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Food is fuel. Our nutrition platform provides personalized meal plans, macro tracking, 
                and recipe suggestions tailored to your goals and dietary preferences.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                    <FaAppleAlt className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Smart Meal Planning</h4>
                    <p className="text-gray-600">AI-generated meal plans based on your calories and preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <FaChartLine className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Macro Tracking</h4>
                    <p className="text-gray-600">Track protein, carbs, and fats with our intuitive food logger</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <FaHeartbeat className="text-2xl text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Supplement Guidance</h4>
                    <p className="text-gray-600">Science-based recommendations for optimal performance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                      <h4 className="font-bold text-lg mb-3">Muscle Gain</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Protein</span>
                          <span className="font-bold">180g</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                      <h4 className="font-bold text-lg mb-3">Fat Loss</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Calories</span>
                          <span className="font-bold">1800</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
                      <h4 className="font-bold text-lg mb-3">Performance</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Carbs</span>
                          <span className="font-bold">250g</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                      <h4 className="font-bold text-lg mb-3">Recovery</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sleep</span>
                          <span className="font-bold">8h</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands who transformed their lives with Be-Fit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-green-500/50 transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-lg text-gray-300 mb-8 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-green-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to
            <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Transform Your Life?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join Be-Fit today and get access to personalized training, nutrition planning, 
            and expert support for 30 days free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-2xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaStar />
                Start Free Trial
              </span>
              <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            
            <Link href="/contact">
              <button className="px-12 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 hover:border-white flex items-center justify-center gap-3">
                <FaEnvelope />
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Full platform access</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENHANCED FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Be-Fit</h3>
              <p className="text-gray-500">
                Your ultimate fitness and wellness platform for sustainable transformation.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Programs</h4>
              <ul className="space-y-3">
                <li><Link href="/programs/fat-loss" className="hover:text-white transition">Fat Loss</Link></li>
                <li><Link href="/programs/muscle-building" className="hover:text-white transition">Muscle Building</Link></li>
                <li><Link href="/programs/strength" className="hover:text-white transition">Strength Training</Link></li>
                <li><Link href="/programs/yoga" className="hover:text-white transition">Yoga & Mobility</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><Link href="/blog" className="hover:text-white transition">Blog & Articles</Link></li>
                <li><Link href="/recipes" className="hover:text-white transition">Recipes</Link></li>
                <li><Link href="/workouts" className="hover:text-white transition">Workout Library</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ & Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p>© 2026 Be-Fit. All rights reserved. Transform your life, one workout at a time.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Add this to your global CSS for animations
// @keyframes blob {
//   0% { transform: translate(0px, 0px) scale(1); }
//   33% { transform: translate(30px, -50px) scale(1.1); }
//   66% { transform: translate(-20px, 20px) scale(0.9); }
//   100% { transform: translate(0px, 0px) scale(1); }
// }
// .animate-blob {
//   animation: blob 7s infinite;
// }
// .animation-delay-2000 {
//   animation-delay: 2s;
// }
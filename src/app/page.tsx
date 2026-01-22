export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-slate-800">

      {/* HERO */}
      <section className="px-6 py-28 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            BE-FIT
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            A smart fitness & wellness platform that helps you shape your body,
            improve your skin, grow healthier habits, and feel confident.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg">
              Start Your Journey
            </button>

            <button className="px-8 py-4 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Tell us about <span className="text-blue-600">your goals</span>
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {/* Body Type */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold text-blue-600">Body Type</h3>
              <p className="mt-3 text-slate-600">
                Choose what best describes you.
              </p>
              <ul className="mt-5 space-y-2 text-slate-700">
                <li>• Slim</li>
                <li>• Overweight</li>
                <li>• Muscular</li>
              </ul>
            </div>

            {/* Fitness Goal */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold text-emerald-600">
                Fitness Goal
              </h3>
              <p className="mt-3 text-slate-600">
                What do you want to achieve?
              </p>
              <ul className="mt-5 space-y-2 text-slate-700">
                <li>• Weight loss</li>
                <li>• Muscle gain</li>
                <li>• Stay fit & active</li>
              </ul>
            </div>

            {/* Height */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold text-purple-600">
                Height Growth
              </h3>
              <p className="mt-3 text-slate-600">
                Want to improve posture & height naturally?
              </p>
              <ul className="mt-5 space-y-2 text-slate-700">
                <li>• Stretching routines</li>
                <li>• Posture correction</li>
                <li>• Spine health tips</li>
              </ul>
            </div>

            {/* Skin */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold text-pink-600">
                Skin Health
              </h3>
              <p className="mt-3 text-slate-600">
                Improve your skin from inside out.
              </p>
              <ul className="mt-5 space-y-2 text-slate-700">
                <li>• Acne & pimples</li>
                <li>• Dull skin</li>
                <li>• Oily / dry skin</li>
              </ul>
            </div>

            {/* Lifestyle */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold text-orange-600">
                Lifestyle
              </h3>
              <p className="mt-3 text-slate-600">
                Your daily habits matter.
              </p>
              <ul className="mt-5 space-y-2 text-slate-700">
                <li>• Sleep improvement</li>
                <li>• Stress reduction</li>
                <li>• Energy boost</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold">
                Personalized Plan
              </h3>
              <p className="mt-4 text-white/90">
                Answer a few questions and BE-FIT will create a plan made just
                for your body, goals, and lifestyle.
              </p>
              <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition">
                Get My Plan →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} BE-FIT • Built for real transformation
      </footer>

    </main>
  );
}


  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <Mail className="text-orange-400 mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive marketing insights, tips, and early access to new products. 
            Join our community of 10,000+ marketing professionals.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <Send size={20} />
                Subscribe
              </button>
            </form>
          ) : (
            <div className="bg-green-500 text-white px-8 py-4 rounded-lg inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Thank you for subscribing!
            </div>
          )}
          
          <p className="text-blue-200 text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
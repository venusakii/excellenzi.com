export function VideoSection() {
  return (
    <section className="relative py-24 md:py-32 bg-clay/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-sage uppercase tracking-widest">Watch</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-charcoal text-balance">
            The Art of Compact Living
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img src="/modern-micro-apartment-kitchen-cooking-natural-lig.jpg" alt="Compact living lifestyle" className="w-full h-full object-cover" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30">
            
          </div>

          {/* Quote overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-charcoal/80 to-transparent">
            <p className="text-xl md:text-2xl font-serif text-porcelain text-center italic">
              "A kitchen can be small and still feel infinite."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

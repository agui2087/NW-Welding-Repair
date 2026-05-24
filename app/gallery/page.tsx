export default function GalleryPage() {
  return (
    <div className="space-y-20">

      {/* HERO BANNER */}
      <section className="bg-white border-b py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Project Gallery
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          A look at some of the welding, fabrication, and repair work we've completed. 
          Photos will be added as projects are documented.
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-6xl mx-auto px-6 space-y-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Recent Work</h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          These placeholders will be replaced with real project photos once uploaded. 
          Each image can include a short description of the repair or fabrication.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* PHOTO 1 */}
          <div className="bg-gray-100 border rounded-lg h-64 flex items-center justify-center text-gray-500">
            Photo 1 Placeholder
          </div>

          {/* PHOTO 2 */}
          <div className="bg-gray-100 border rounded-lg h-64 flex items-center justify-center text-gray-500">
            Photo 2 Placeholder
          </div>

          {/* PHOTO 3 */}
          <div className="bg-gray-100 border rounded-lg h-64 flex items-center justify-center text-gray-500">
            Photo 3 Placeholder
          </div>

          {/* PHOTO 4 */}
          <div className="bg-gray-100 border rounded-lg h-64 flex items-center justify-center text-gray-500">
            Photo 4 Placeholder
          </div>

          {/* PHOTO 5 */}
          <div className="bg-gray-100 border rounded-lg h-64 flex items-center justify-center text-gray-500">
            Photo 5 Placeholder
          </div>

          {/* PHOTO 6 */}
          <div className="bg-gray-100 border rounded-lg h-64 flex items-center justify-center text-gray-500">
            Photo 6 Placeholder
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center space-y-4 pb-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900">Want Your Project Featured?</h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We update our gallery regularly with new welding and fabrication work. 
          Ask about having your project showcased.
        </p>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <a
            href="/contact"
            className="bg-red-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}

export default function SchedulePage() {
  return (
    <main className="min-h-screen p-10">

      <h1 className="text-5xl font-bold text-center mb-8">
        Schedule a Service
      </h1>

      <div className="max-w-5xl mx-auto">
        <iframe
          src="https://calendly.com/YOUR-LINK"
          width="100%"
          height="700"
          className="rounded-2xl border"
        ></iframe>
      </div>

    </main>
  );
}
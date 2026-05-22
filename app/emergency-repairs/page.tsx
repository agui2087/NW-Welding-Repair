export default function EmergencyRepairsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold text-gray-900">
        Emergency Welding Repairs
      </h1>

      <p className="text-gray-600">
        When urgent failures happen, we respond fast. Emergency repair services
        are available with rapid dispatch times, typically within two hours of request.
      </p>

      <div className="bg-white border rounded-lg p-6 shadow-sm space-y-4">

        <p>
          Emergency services are billed at standard labor and material rates,
          plus an emergency response surcharge due to immediate dispatch priority.
        </p>

        <p>
          This ensures we can mobilize equipment and technicians quickly to
          restore safety, functionality, and structural integrity as soon as possible.
        </p>

        <p className="font-semibold text-red-600">
          Response time: within 2 hours of confirmed request (based on availability and location)
        </p>

      </div>
    </div>
  );
}
export default function SomeUsefulLinks() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-12 text-black">
      <h1 className="text-3xl font-bold mb-6">
        Some Useful Links
      </h1>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>
          <a
            href="https://cgu-odisha.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            C. V. Raman Global University, Bhubaneswar, Odisha
          </a>
        </li>
        <li>
          <a
            href="https://infocomm.iitmandi.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            InfoComm Lab, IIT Mandi
          </a>
        </li>
      </ul>
    </div>
  );
}

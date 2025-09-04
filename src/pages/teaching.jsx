import Navbar from "../component/navbar/navbar";

export default function Teaching() {
  const teachingPoints = [
    "I have been teaching undergraduate and postgraduate students for several years.",
    "My teaching style focuses on clarity, real-world applications, and interactive learning.",
    "I emphasize conceptual understanding rather than rote memorization.",
    "I integrate research insights into classroom discussions to make learning dynamic.",
    "Students are encouraged to ask questions and engage in collaborative projects.",
    "My goal is to inspire curiosity and critical thinking in every learner.",
  ];

  return (
    <>
          <div className="fixed top-3 inset-x-0 z-50">
            <Navbar />
          </div>
    <div className="flex justify-center min-h-screen bg-gray-50 px-6 pt-16">
      <div className="max-w-3xl w-full text-black">
        <div className="space-y-6">
          {teachingPoints.map((point, index) => (
            <p key={index} className="text-lg leading-relaxed text-justify">
              <span className="text-black font-semibold mr-2">{index + 1}.</span>
              <span className="text-gray-700">{point}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

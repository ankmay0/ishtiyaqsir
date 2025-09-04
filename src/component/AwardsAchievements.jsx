import React from "react";

const awards = [
  "Honored to be judge for nationwide Smart India Hackathon 2023 (Software edition).",
  <>Delivered a talk at <a href="https://www.iitk.ac.in/jtg2021/index.php?page=Course%20Information%20and%20Speakers" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700">JTG/IEEE ITSoc Summer School @ IIT Kanpur</a>, June 2021.</>,
  <>Co-winner of <a href="https://2021.ieee-isit.org/Challenge.asp" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700">Four-Minute Two-Techniques Contest, ISIT-2021</a>.</>,
  "Best Poster Presentation Award, IIT Mandi, 2018.",
  "Best Teaching Assistant Award, IIT Mandi, 2018-19.",
  "Special recognition from IIT Mandi on its 12th Foundation Day.",
];

export default function AwardsAchievements() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6 font-sans text-black">
      <div className="flex gap-8">
        {/* Left Column: Title */}
        <div className="w-1/4 ml-6">
          <h3 className="text-2xl font-semibold border-b border-gray-300 pb-2">
            Awards & Achievements
          </h3>
        </div>

        {/* Right Column: Awards List */}
        <div className="w-3/4">
          <ul className="list-disc list-inside space-y-2 text-base">
            {awards.map((award, idx) => (
              <li key={idx} className="text-black">
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}




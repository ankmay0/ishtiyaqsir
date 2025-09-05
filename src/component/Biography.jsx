import React, { useState } from "react";

function Biography() {
  const [expanded, setExpanded] = useState(false);

  const initialText = (
    <>
      Mohammad Ishtiyaq Qureshi achieved his PhD from the School of Computing and Electrical Engineering at the Indian Institute of Technology Mandi, HP, India, in December 2022, under the guidance of Dr Satyajit Thakor. He obtained a Master of Design in Communication Systems in 2015 from the Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram, TN, India. In 2012, he completed his BE in Electronics and Communication Engineering from Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, MP, India.
      <br /><br />
      From April 2021 to mid-July 2021, Ishtiyaq served as an intern at the IIT Mandi iHub and HCI Foundation. The iHub is one of the 25 Technology Innovation Hubs (TIHs) in India and operates as a Section-8 company. He gained teaching experience as an assistant professor at the NRI Institute of Information Science and Technology, Bhopal, from August 24, 2015, to January 15, 2016. Subsequently, he worked as a Project Associate at IIT Mandi from July 2021 to mid-April 2023. Since July 2023, he has been working as an Assistant Professor in the Department of Computer Science Engineering at C. V. Raman Global University, Bhubaneswar. His research interests revolve around machine learning, theoretical computer science, communication, and information theory.
    </>
  );

  const remainingText = (
    <>
      <br /><br />
      Ishtiyaq delivered a Young Research Talk at the JTG/IEEE ITSoc Summer School in Information Theory, Signal Processing, Telecommunication, and Networking held at IIT Kanpur from June 28 to July 1, 2021. He was one of the Co-Winners of the Four-Minute Two-Techniques Contest, ISIT-2021. In recognition of his work as a Teaching Assistant, he received a special acknowledgement from IIT Mandi on its 12th Foundation Day. He also received the Best Poster Presentation Award 2018 and the Best Teaching Assistant Award 2018-19 from IIT Mandi.
    </>
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      <h2 className=" top-24 font-semibold text-3xl md:text-3xl text-black">
        Biography
      </h2>
      <div className="flex flex-col md:flex-row gap-8">



        {/* Right column: Content */}
        <div className=" text-justify leading-relaxed mt-5">
          <p>{initialText}</p>
          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
            >
              [More]
            </button>
          ) : (
            <p>{remainingText}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Biography;



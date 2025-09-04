import Navbar from "../component/navbar/navbar";

export default function Youtube() {
  const videos = [
    {
      id: "8ese3Ko2EJE",
      title: "Blockchains & Differential Privacy",
      description: (
        <>
          The video was recorded for a contest in ISIT 2021 and won an award with
          prize money of USD 300.
          <br /><br />
          In the first part of this video, a brief introduction of blockchains is
          presented (the second part "Differential Privacy" was delivered by another
          presenter). In this, the tamper-evident and tamper-resistant properties of
          blockchains are explained in brief. The properties are explained by taking
          an example of financial transactions. Although the blockchains are
          popularly known because of their use case in financial transactions
          (cryptocurrencies), some other use cases of blockchains are discussed at
          the end of the part of the video.
        </>
      ),
    },
    {
      id: "rZMgYajPa4E",
      title: "On the Information Flow in Undirected Unicast Networks",
      description: (
        <>
          This talk was delivered live in 2021 in an IEEE summer school @ IIT Kanpur.
          <br /><br />
          One of the important unsolved problems in information theory is the conjecture 
          that network coding has no rate benefit over routing in undirected unicast networks. 
          If the conjecture is true, then the undirected unicast network information capacity 
          is the same as the routing capacity. In this talk, we present an upper bound, called 
          the partition bound, on the symmetric rate for information flow in general undirected 
          unicast networks. We show explicit routing solutions achieving the partition bound for 
          a class of complete n-partite networks called Type-I n-partite networks. Recently, the conjecture was proved for a new class of networks, and it was shown that all the network instances for which the conjecture is proved previously are elements of this class. We show the existence of a network outside of the class of networks with unverified conjecture such that the partition bound is tight and attainable by routing.
        </>
      ),
    },
  ];

  return (
    <>
          <div className="fixed top-3 inset-x-0 z-50">
            <Navbar />
          </div>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 px-6 py-12">
      <div className="space-y-16 max-w-7xl mx-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {/* Video Embed */}
            <div className="w-full md:w-1/2 aspect-video p-4">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>

            {/* Description */}
            <div className="w-full md:w-1/2 p-6 text-center md:text-left">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-black hover:underline sticky top-4 bg-white"
              >
                {video.title}
              </a>
              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

import React from "react";
import Navbar from "../component/navbar/navbar";

export default function Research() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans text-black">
            <div className="fixed top-3 inset-x-0 z-50 ">
              <Navbar />
            </div>
      {/* TOP LEVEL OVERVIEW */}
      <div className="mb-8 mt-8">
        <p className="mb-5">
          In today's modern world, it is very important to transport information from one place to another place. Information networks are used to transport information and hence finding the capacity of information networks becomes extremely important.
        </p>
        <p className="mb-5">
          To transport information over the networks, routing or network coding can be used. One of the important unsolved problems in information theory is the <a href="https://ieeexplore.ieee.org/document/4787632" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline hover:text-blue-700">conjecture</a> that network coding has no rate benefit over routing in undirected unicast networks. If the conjecture is true, then the undirected unicast network information capacity is the same as the routing capacity.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3">Introduction</h2>
      </div>

      {/* FIRST TOPIC: Directed Acyclic Networks */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
        <div className="md:w-1/2 w-full">
          <h3 className="text-lg font-semibold mb-2">Routing vs network coding in directed acyclic unicast networks</h3>
          <p className="mb-2">
            As mentioned earlier, one can use routing or network coding to transport information from a source node s(i) to its respective sink (destination) node t(i).
          </p>
          <strong>Routing</strong>
          <p className="mb-2">
            In the network shown in the figure, only one path is available to transport information from s(1) to t(1) and is shown by thick red arrows. Similarly, the only path to transport information from s(2) to t(2) is shown by black arrows. Due to the bottleneck edge (the common orange coloured edge in both of these paths), a total of one bit can be delivered at a time.
          </p>
          <strong>Network coding</strong>
          <p>
            On the other hand, upon using the simple network coding (by doing XOR operations as shown in the figure), a sum-rate of two bits can be delivered in the same network.
            This shows a clear advantage of network coding over routing in these types of networks. A directed acyclic network demonstrates the advantage of network coding over routing. The capacity of every edge in the network is 1.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center">
          <img
            src="/Butterfly directed-1.gif"
            alt="Directed acyclic network example"
            className="w-full max-w-md rounded shadow-md mb-2"
          />
          <p className="text-center text-sm text-gray-500 mt-1">
            A directed acyclic network demonstrates the advantage of network coding over routing. The capacity of every edge in the network is 1.
          </p>
        </div>
      </div>

      {/* SECOND TOPIC: Undirected Unicast Networks */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2 w-full">
          <h3 className="text-lg font-semibold mb-2">Is network coding required in undirected unicast networks?</h3>
          <p className="mb-2">
            For the network shown in the figure, routing is sufficient to achieve the information capacity of the network. An optimal routing solution is shown in the figure by red and black arrows. This solution achieves the sum-rate of 2 bits which is the information capacity of the network as even <a href="https://www.jstor.org/stable/168023?seq=1#metadata_info_tab_contents" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline hover:text-blue-700">a network coding cannot achieve more than this rate in the network</a>.
            <br /> It is conjectured that network coding has no rate benefit over routing in undirected unicast networks.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center">
          <img
            src="/Butterfly undirected-1.gif"
            alt="Undirected network illustration"
            className="w-full max-w-md rounded shadow-md mb-2"
          />
          <p className="text-center text-sm text-gray-500 mt-1">
            An optimal routing solution achieves the network information capacity in undirected unicast networks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="text-white space-y-32">
      <section id="home">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg text-gray-800">This is the homepage introduction.</p>
      </section>

      <section id="research">
        <h2 className="text-3xl font-bold mb-4">Research</h2>
        <p className="text-lg text-gray-800">Details about my research work...</p>
      </section>

      <section id="cv">
        <h2 className="text-3xl font-bold mb-4">Curriculum Vitae</h2>
        <p className="text-lg text-gray-800">Brief CV or link to download full version...</p>
      </section>
    </div>
  );
}

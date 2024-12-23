import SoundGeneration from "./components/sound-generation";

export default function Home() {
  return (
    <main className = "min-h-screen p-4 bg-gray-50">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Text to Sound Effect using Elevenlabs API
      </h1>
      <div className="flex justify-center">
        Enjoy the perfect generated audio.
      </div>
      <SoundGeneration />
    </div>
    </main>
  );
}

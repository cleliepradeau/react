
import User from "./components/User";



function App() {
  return (
    <main className="w-120 m-10 p-5 shadow-xl">
    <section>
      <h1 className="text-5xl">Room</h1>
      <p className="text-gray-400">5 people are around right now</p>
    </section>
    
    <User src="https://i.pravatar.cc/75?img=24" name="Dale Houston" job="software Engineer"/>
    <User src="https://i.pravatar.cc/75?img=22" name="Madge Murphy" job = "Product Designer"/>
    <User src="https://i.pravatar.cc/75?img=15" name="Margaret Garner" job = "Writer & Journalist"/>
    <User src="https://i.pravatar.cc/75?img=6" name="Gertrude Roberts" job = "Fashion Designer"/>
    <User src="https://i.pravatar.cc/75?img=8" name="Joshua Olson" job = "Photographer"/>
  

    </main>
  );
}

export default App;
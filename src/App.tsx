import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card"; 
import { cn } from "./lib/utils";
import ReactGA from "react-ga";
const TRACKING_ID = "G-BFB8G99L9Z";
ReactGA.initialize(TRACKING_ID);

type Repo = {
  id: number;
  name: string;
  html_url: string;
  star_count: number;
};

function App() {
   useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchRepos = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(res.data);
    } catch (error) {
      console.error("Failed to fetch repos");
    }
  };

  return (
     <div className="relative min-h-screen flex  w-full items-center justify-center bg-black">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
          
    <div className="relative p-6 max-w-4xl mx-auto">
      <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-7xl font-bold text-transparent ">GitHub Activity Viewer</h1>
      <div className="flex gap-2 mb-4">
            
        <Input className="relative" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter GitHub username" />

        <Button className="cursor-pointer hover:bg-zinc-800" onClick={fetchRepos}>Fetch</Button>
      </div>

      <div className="space-y-4">
        {repos.map((repo) => (
          <Card key={repo.id} className="p-4 bg-transparent">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="font-bold text-3xl  bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent tracking-wider uppercase ">
              {repo.name}
            </a>
            <p>⭐ {repo.star_count}</p>
            
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
import Index from "./pages/Index";
import GithubProvider from "./context/github/GithubProvider";

function App() {
  return (
    <GithubProvider>
      <div>
        <Index />
      </div>
    </GithubProvider>
  );
}

export default App;

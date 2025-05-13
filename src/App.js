import Layout from "./components/Layout";
import "./App.css";
import { QuizData } from "./hooks/Quiz";
import ResultContexthook from "./hooks/Result";

function App() {
  return (
    <div className="App">
      <QuizData>
        <ResultContexthook>
          <Layout />
        </ResultContexthook>
      </QuizData>
    </div>
  );
}

export default App;

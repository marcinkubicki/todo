import { Todo } from "@/components/Todo";
import { ErrorBoundary } from "react-error-boundary";

function App() {
   return (
      <main className="h-full flex flex-col justify-center items-center p-8">
         <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
            <Todo />
         </ErrorBoundary>
      </main>
   )
}

export default App;
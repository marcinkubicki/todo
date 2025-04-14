const TaskDescription = () => {
   return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
         <header className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">📝 Todo List – Live Code Interview Task</h1>
            <p className="text-gray-600 text-lg">
               Twoim zadaniem jest stworzenie interaktywnej listy zadań w React z integracją z zewnętrznym API oraz
               prostymi optymalizacjami renderowania.
            </p>
         </header>

         <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">🎯 Wymagania funkcjonalne</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
               <li>
                  🌐 Pobieranie zadań z <code>https://jsonplaceholder.typicode.com/todos</code>.
               </li>
               <li>
                  ➕ Dodawanie zadań przez input i przycisk „Add” – wysyłane jako <code>POST</code>.
               </li>
               <li>
                  🗑️ Usuwanie zadań poprzez <code>DELETE</code> – każde zadanie ma przycisk „Delete”.
               </li>
               <li>
                  🧠 Stan komponentu: <code>tasks</code> (lista zadań) i <code>newTask</code> (tekst z inputa).
               </li>
               <li>
                  💡 Każde zadanie musi mieć unikalne <code>id</code> (API zapewnia to automatycznie).
               </li>
               <li>✅ Input powinien czyścić się po dodaniu zadania.</li>
            </ul>
         </section>

         <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">⚙️ Optymalizacje</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
               <li>
                  🧩 Komponent zadania opakowany w <code>React.memo</code>.
               </li>
               <li>
                  ⚡️ Memoizacja funkcji z <code>useCallback</code>.
               </li>
               <li>
                  🧮 Lista zadań generowana z <code>useMemo</code>.
               </li>
            </ul>
         </section>

         <section className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">✨ Bonusy</h2>
            <p className="text-gray-700">
               Styluj z pomocą <strong>Tailwind CSS</strong> i użyj gotowych komponentów z <strong>shadcn/ui</strong>{' '}
               aby zbudować nowoczesny UI.
            </p>
         </section>
      </div>
   )
}

export default TaskDescription

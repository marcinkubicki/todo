const TaskDescription = () => {
   return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
         <header className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">📝 Todo List – Live Code Interview Task</h1>
            <p className="text-gray-600 text-lg">
               Zbuduj interaktywną aplikację zarządzania zadaniami w <strong>React + TypeScript</strong> z integracją z
               API.
            </p>
         </header>

         <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">🎯 Główne funkcjonalności</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
               <li>
                  🌐 Pobierz listę zadań z{' '}
                  <a
                     href="https://jsonplaceholder.typicode.com/todos"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-600 underline"
                  >
                     JSONPlaceholder
                  </a>{' '}
                  (limituj do 10-15 zadań).
               </li>
               <li>➕ Dodawanie nowych zadań (input + przycisk „Add”, metoda POST).</li>
               <li>🗑️ Usuwanie zadań (przycisk „Delete”, metoda DELETE).</li>
               <li>✅ Zmiana statusu zadania (checkbox, metoda PATCH/PUT).</li>
               <li>🔄 Obsługa stanów API (ładowanie, błędy, wskaźniki operacji).</li>
            </ul>
         </section>

         <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">✨ Bonusowe możliwości</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
               <li>⚡️ Optymistyczne aktualizacje i rollback w razie błędów.</li>
               <li>📣 Powiadomienia użytkownika (np. z react-toastify, Sonner).</li>
               <li>💠 Skeletony ładowania zamiast zwykłego „Loading...”.</li>
               <li>
                  🎨 Stylowanie z użyciem <strong>Tailwind CSS</strong> + komponenty <strong>shadcn/ui</strong>.
               </li>
               <li>✅ Obsługa dostępności (a11y): semantyczny HTML, ARIA, obsługa klawiatury.</li>
               <li>
                  🧾 Obsługa formularza z <code className="bg-gray-100 rounded p-1">React Hook Form</code>.
               </li>
            </ul>
         </section>

         <footer className="text-sm text-gray-400">
            <p>
               ℹ️ Backend: API <code className="bg-gray-100 rounded p-1">JSONPlaceholder</code> jest tylko symulacją –
               operacje POST/DELETE/PATCH nie zapisują trwale danych.
            </p>
         </footer>
      </div>
   )
}

export default TaskDescription

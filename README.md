# 📝 Todo List – Live Code Interview Task

Twoim zadaniem jest stworzenie interaktywnej aplikacji Todo List przy użyciu React i TypeScript. Aplikacja powinna umożliwiać zarządzanie zadaniami (dodawanie, usuwanie, oznaczanie jako ukończone) i integrować się z zewnętrznym API.

## 🚀 Podstawowe Technologie

-  **Framework:** React (v18+ lub v19)
-  **Język:** TypeScript

## 🎯 Wymagania Funkcjonalne

1. **Pobieranie Danych:** Po załadowaniu aplikacji, pobierz początkową listę zadań z API JSONPlaceholder.
   -  **Endpoint:** `https://jsonplaceholder.typicode.com/todos`
   -  **Limit:** Możesz ograniczyć liczbę pobieranych zadań (np. do 10-15) dla przejrzystości.
2. **Wyświetlanie Listy:** Wyrenderuj pobrane zadania na liście.
3. **Dodawanie Zadań:**
   -  Umożliw użytkownikowi wpisanie nowego zadania w polu tekstowym.
   -  Po zatwierdzeniu (np. kliknięciu przycisku "Add"), wyślij nowe zadanie do API metodą `POST`.
   -  Nowo dodane zadanie powinno pojawić się na liście w interfejsie użytkownika.
   -  Pole tekstowe powinno zostać wyczyszczone po dodaniu zadania.
4. **Usuwanie Zadań:**
   -  Każde zadanie na liście powinno mieć przycisk lub ikonę do usunięcia.
   -  Kliknięcie powinno wysłać żądanie `DELETE` do API dla odpowiedniego `taskId`.
   -  Usunięte zadanie powinno zniknąć z listy w interfejsie użytkownika.
5. **Oznaczanie Ukończenia:**
   -  Umożliw użytkownikowi oznaczenie zadania jako ukończone lub aktywne (np. za pomocą checkboxa).
   -  Zmiana statusu powinna wysłać żądanie `PATCH` (lub `PUT`) do API z nowym statusem `completed`.
   -  Wygląd zadania w interfejsie powinien odzwierciedlać jego status (np. przekreślenie tekstu dla zadań ukończonych).
6. **Obsługa Stanu API:** Zapewnij podstawową informację zwrotną dla użytkownika dotyczącą stanu operacji asynchronicznych (np. wskaźnik ładowania podczas pobierania danych, obsługa ewentualnych błędów komunikacji z API).

## ⚙️ Wskazówki Techniczne

-  **Zarządzanie Stanem:** Efektywnie zarządzaj stanem aplikacji, w tym listą zadań, stanem formularza oraz stanami ładowania/błędów. Możesz użyć wbudowanych haków React (`useState`, `useReducer`, `useContext`) lub zewnętrznych bibliotek do zarządzania stanem (np. Zustand, Redux, Jotai) lub stanu serwera (np. React Query, SWR). Wybór należy do Ciebie.
-  **Interakcja z API:** Wykorzystaj odpowiednią metodę do komunikacji z API (`Workspace`, `axios` lub inną). Pamiętaj o obsłudze odpowiedzi i błędów.
-  **API Endpoint:** `https://jsonplaceholder.typicode.com/todos`
   > **Uwaga:** JSONPlaceholder to fałszywe API. Żądania `POST`, `DELETE`, `PATCH` zwrócą sukces, ale **zmiany nie zostaną trwale zapisane**. Skup się na poprawnej symulacji komunikacji.
-  **Klucze Listy:** Pamiętaj o używaniu stabilnych i unikalnych kluczy (`key`) podczas renderowania listy zadań (API dostarcza `id`).

## ⭐ Opcjonalne Ulepszenia / Bonus Points

Rozważ implementację poniższych punktów, aby zademonstrować dodatkowe umiejętności:

1. **Optymistyczne Aktualizacje:** Popraw responsywność interfejsu, aktualizując UI natychmiast po akcji użytkownika (usunięcie, zmiana statusu), zanim nadejdzie potwierdzenie z API. Zaimplementuj mechanizm wycofywania zmian w przypadku błędu API.
2. **Lepszy Feedback Użytkownika:** Użyj bardziej zaawansowanych metod informowania użytkownika niż proste komunikaty tekstowe, np. dedykowanej biblioteki do powiadomień toast (jak Sonner, react-toastify).
3. **Skeleton Loading:** Wyświetlaj elementy "szkieletowe" (placeholdery) podczas początkowego ładowania listy zadań zamiast prostego napisu "Loading...".
4. **Optymalizacja Wydajności:** Zminimalizuj niepotrzebne re-renderowanie komponentów, dbając o zależności w hakach i ewentualnie stosując techniki memoizacji (np. `React.memo`), jeśli uznasz to za stosowne.
5. **Styling i UI:** Zadbaj o estetyczny i nowoczesny wygląd interfejsu. Możesz użyć:
   -  Czystego CSS / CSS Modules
   -  Frameworka CSS Utility-First (np. Tailwind CSS)
   -  Biblioteki komponentów UI (np. Shadcn/ui, Material UI, Chakra UI) - _wybór dowolny_.
6. **Dostępność (a11y):** Zastosuj podstawowe praktyki dostępności (semantyczny HTML, atrybuty ARIA tam, gdzie potrzebne, obsługa klawiatury).
7. **Obsługa Formularzy:** Rozważ użycie biblioteki do obsługi formularzy (np. React Hook Form) dla bardziej zaawansowanej walidacji i zarządzania stanem formularza dodawania.

---

## 🚀 Getting Started (z szablonem repozytorium)

Jeśli używasz tego repozytorium jako szablonu startowego:

1. **Sklonuj repozytorium**

   ```bash
   git clone [https://github.com/orzechovski/to-do-list.git](https://github.com/orzechovski/to-do-list.git)
   cd to-do-list
   ```

2. **Zainstaluj zależności**

   ```bash
   npm install
   ```

   lub

   ```bash
   yarn install
   ```

3. **Uruchom serwer deweloperski**

   ```bash
   npm run dev
   ```

   lub

   ```bash
   yarn dev
   ```

4. Otwórz przeglądarkę i przejdź do adresu podanego przez Vite (zwykle `http://localhost:5173`). Zacznij implementować logikę w `src/App.tsx` lub tworząc własne komponenty.

---

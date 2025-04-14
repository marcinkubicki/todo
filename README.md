# 📝 Todo List – Live Code Interview Task

Twoim zadaniem jest stworzenie interaktywnej aplikacji **Todo List** przy użyciu **React** i **TypeScript**. Aplikacja powinna umożliwiać zarządzanie zadaniami (dodawanie, usuwanie, oznaczanie jako ukończone) oraz integrować się z zewnętrznym API.

---

## 🚀 Technologie

-  **Framework:** React (v18+ lub v19)
-  **Język:** TypeScript

---

## 🎯 Wymagania funkcjonalne

### 1. 📅 Pobieranie danych

-  Po załadowaniu aplikacji, pobierz początkową listę zadań z API:
   -  Endpoint: `https://jsonplaceholder.typicode.com/todos`
   -  Limit: Ogranicz liczbę zadań (np. do 10–15) dla przejrzystości.

### 2. 📋 Wyświetlanie listy

-  Wyrenderuj pobrane zadania w interfejsie użytkownika.

### 3. ➕ Dodawanie zadań

-  Umożliwi użytkownikowi dodanie nowego zadania:
   -  Pole tekstowe do wpisania treści zadania.
   -  Przycisk **"Add"** do zatwierdzenia.
-  Po dodaniu:
   -  Wyślij zadanie do API metodą `POST`.
   -  Dodaj je do listy w UI.
   -  Wyczyść pole tekstowe.

### 4. 🗑️ Usuwanie zadań

-  Każde zadanie powinno mieć przycisk/usuwania.
-  Po kliknięciu:
   -  Wyślij żądanie `DELETE` z odpowiednim `taskId`.
   -  Usuń zadanie z UI.

### 5. ✅ Oznaczanie jako ukończone

-  Użytkownik może oznaczyć zadanie jako ukończone/aktywne (np. checkbox).
-  Zmiana powinna:
   -  Wysłać `PATCH` lub `PUT` z nowym statusem `completed`.
   -  Zmienić wygląd zadania (np. przekreślenie ukończonych).

### 6. 🔄 Obsługa stanu API

-  Pokazuj użytkownikowi:
   -  Informacje o trwającym ładowaniu.
   -  Błędy komunikacji z API.
   -  Potwierdzenia powodzenia.

---

## ⚙️ Wskazówki techniczne

-  **Zarządzanie stanem:** Możesz użyć `useState`, `useReducer`, `useContext` lub zewnętrznych bibliotek (np. Zustand, Redux, React Query).
-  **Komunikacja z API:** Możesz użyć `fetch`, `axios` lub innej biblioteki HTTP.
-  **Uwaga:** JSONPlaceholder to fałszywe API — `POST`, `PATCH`, `DELETE` zwracają sukces, ale nie zapisują zmian trwale.
-  **Klucze w listach:** Używaj unikalnych `id` jako `key`.

---

## ⭐ Opcjonalne ulepszenia (Bonus Points)

Chcesz zabłysnąć? Dodaj coś z poniższej listy:

1. **Optymistyczne aktualizacje:** UI aktualizuje się od razu, bez czekania na odpowiedź z API. Dodaj rollback w razie błędu.
2. **Lepszy feedback:** Użyj biblioteki powiadomień (np. `react-toastify`, `Sonner`).
3. **Skeleton Loading:** Zamiast `Loading...`, pokaż szkielet UI.
4. **Optymalizacja wydajności:** Użyj `React.memo`, dbaj o zależności w hookach.
5. **Stylizacja UI:**
   -  Czysty CSS / CSS Modules
   -  Tailwind CSS
   -  UI Library: Shadcn/UI, MUI, Chakra – Twój wybór
6. **Dostępność (a11y):** Semantyczny HTML, obsługa klawiatury, ARIA.
7. **Formularze:** Obsługa formularzy np. przez `React Hook Form`.

---

## 🛠️ Getting Started

Jeśli używasz tego repozytorium jako szablonu:

### 1. Sklonuj repozytorium

```bash
git clone https://github.com/orzechovski/to-do-list.git
cd to-do-list
```

### 2. Utwórz branch z Twoim nickiem

```bash
git checkout -b twoj-nick
```

### 3. Zainstaluj zależności

```bash
npm install
# lub
yarn install
```

### 4. Uruchom projekt

```bash
npm run dev
# lub
yarn dev
```

### 5. Rozpocznij pracę

Otwórz przeglądarkę i przejdź do `http://localhost:5173`. Rozpocznij implementację w `src/App.tsx` lub stwórz własne komponenty.

---

## ✅ Zakończenie pracy

Po zakończeniu implementacji wypchnij zmiany:

```bash
git add .
git commit -m "Implementacja Todo List"
git push origin twoj-nick
```

# 📝 Todo List – Live Code Interview Task

## Framework

**React**

## Author

**Yangshun Tay**
Ex-Meta Staff Engineer

---

## 🚀 Getting Started

This project uses [Vite](https://vitejs.dev/) with **Tailwind CSS** and **shadcn/ui**.

### 🔧 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/todo-live-interview.git
   cd todo-live-interview
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

---

## ✅ Solution Overview

### 🧠 State Management

-  `tasks`: lista zadań pobrana z API (`https://jsonplaceholder.typicode.com/todos`).
-  `newTask`: zawartość pola tekstowego, kontrolowana.

### 🔄 Backend Integration

-  Zadania są inicjalnie pobierane z JSONPlaceholder (limitowane do pierwszych 10).
-  Dodawanie nowego zadania wykonuje zapytanie `POST`.
-  Usuwanie zadania to `DELETE`.

> JSONPlaceholder to fake API – zmiany nie są trwałe, ale symulują realną komunikację.

### ➕ Adding Tasks

-  Dodawane na końcu listy.
-  Wysyłane do API.
-  Input czyści się po dodaniu.

### 🗑️ Deleting Tasks

-  Usuwanie zadań po ID.
-  Komunikacja z API (DELETE).
-  Task znika z interfejsu po potwierdzeniu usunięcia.

### ⚙️ Optimizations

-  `React.memo` dla komponentów zadań.
-  `useMemo` i `useCallback` dla funkcji renderujących i handlers.
-  Minimalizacja niepotrzebnych renderów.

---

## ♿ Accessibility

-  Pola input z `aria-label`.
-  Opcjonalne: `aria-live` region z informacją o dodaniu zadania.

---

## ✨ Bonus

-  Stylowanie z **Tailwind CSS**
-  Komponenty UI z **shadcn/ui**
-  Schludna, nowoczesna prezentacja UI

---

## 🧪 Test Cases

### Add Tasks

-  ✅ Dodaj nowy task
-  ✅ Dodaj kilka tasków
-  ✅ Zadanie z kodem HTML (XSS) – bezpieczne
-  ✅ Input resetuje się po dodaniu

### Delete Tasks

-  ✅ Usuń istniejące zadanie
-  ✅ Usuń wiele zadań
-  ✅ Usuń nowo dodane zadanie

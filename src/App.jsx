// src/App.jsx
import { QRCard } from "./components/QRCard";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-100">
      <header className="py-6 text-center">
        <h1 className="text-2xl font-semibold text-slate-800">
          QR Libre
        </h1>
        <p className="text-slate-500 text-sm">
          Genera códigos QR sin expiración
        </p>
      </header>

      <section className="flex justify-center px-4">
        <QRCard />
      </section>
    </main>
  );
}

export default App;

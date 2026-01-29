import { useState } from "react";
import { useQR } from "../hooks/useQR";
import { isValidUrl } from "../utils/isValidUrl";

export const QRCard = () => {
  const [url, setUrl] = useState("");
  const [color, setColor] = useState("#111827");
  const [size, setSize] = useState(220);

  const isValid = isValidUrl(url);

  const { qrRef, qrInstance } = useQR({
    width: size,
    height: size,
    data: isValid ? url : " ",
    dotsOptions: {
      color,
      type: "rounded",
    },
    backgroundOptions: {
      color: "#ffffff",
    },
  });

  const handleDownload = () => {
    if (!qrInstance.current) return;
    qrInstance.current.download({
      name: "qr-libre",
      extension: "png",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4 text-center sticky top-0 z-10">
        <h1 className="text-lg font-semibold">QR Libre</h1>
        <p className="text-xs text-slate-400">
          QR sin expiración
        </p>
      </header>

      {/* QR Preview */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div
          onClick={isValid ? handleDownload : undefined}
          className="bg-white p-6 rounded-3xl shadow-lg active:scale-95 transition"
        >
          <div ref={qrRef} />
        </div>

        <p className="text-xs text-slate-400 mt-3">
          Toca el QR para descargar
        </p>
      </main>

      {/* Controls */}
      <section className="bg-white rounded-t-3xl px-4 py-6 shadow-xl">
        <input
          type="url"
          placeholder="https://..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={`w-full border rounded-xl px-4 py-3 mb-4
            ${
              isValid
                ? "border-green-500"
                : "border-slate-300"
            }
          `}
        />

        <div className="flex items-center gap-4">
          {/* Color */}
          <div className="flex flex-col items-center">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12 h-12 rounded-xl border"
            />
            <span className="text-xs text-slate-500 mt-1">
              Color
            </span>
          </div>

          {/* Size */}
          <div className="flex-1">
            <input
              type="range"
              min="150"
              max="320"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-xs text-slate-500">
              Tamaño ({size}px)
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
<button
  onClick={handleDownload}
  disabled={!isValid}
  className="
    mt-6 w-full
    bg-indigo-600 text-white
    py-3 rounded-xl
    text-base font-semibold
    shadow-md
    transition
    hover:bg-indigo-700
    active:scale-95
    disabled:opacity-40
  "
>
  Descargar QR
</button>

    </div>
  );
};

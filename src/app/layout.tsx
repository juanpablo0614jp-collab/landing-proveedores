import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestión Documental de Proveedores — JP Digital Solutions",
  description:
    "Centraliza la documentación de tus proveedores, controla vigencias y reduce el seguimiento manual.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Logo de fondo */}
        <div
          className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <img
            src="/PageGroup_Logo.png"
            alt=""
            className="w-[400px] h-[400px] object-contain opacity-[0.03]"
          />
        </div>

        {/* Contenido */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}


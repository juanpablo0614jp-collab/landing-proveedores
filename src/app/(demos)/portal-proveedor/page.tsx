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
  <div className="relative z-10">
    {children}
  </div>
</body>
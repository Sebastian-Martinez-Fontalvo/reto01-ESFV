# App de Escritorio — Reto 01 ESFV

Aplicación de **escritorio** (Windows) del Reto 01 ESFV: **Planeación Solar Práctica — Caracterización de Demanda Energética**.

Esta versión es la **contraparte de escritorio** de la aplicación web (`../web/`). Fue compilada con **MATLAB Compiler (R2026a)**, por lo que el código fuente está embebido en el ejecutable (no se incluye el código `.m` en este repositorio).

---

## Contenido

```
desktop/
├── PlaneacionSolarPractica.exe   ← ejecutable principal de la app
├── MyAppInstaller.exe            ← instalador (empaqueta la app)
├── readme.txt                    ← instrucciones oficiales de MATLAB Compiler
├── splash.png                    ← imagen de inicio de la app
├── build/                        ← logs de compilación (buildresult.json, etc.)
└── package/                      ← registro del instalador (deploymentLog.html)
```

---

## Cómo ejecutarlo

### Requisito previo

La app necesita el **MATLAB Runtime R2026a** para ejecutarse, pero **no hace falta instalarlo por separado**: puedes instalar todo desde el propio instalador `MyAppInstaller.exe`, que lo incluye automáticamente.

- Si **no tienes MATLAB**, ejecuta `MyAppInstaller.exe` y el instalador se encargará de instalar el runtime por ti.
- Si **tienes MATLAB R2026a** instalado en el equipo, también es válido como equivalente del runtime (o puedes descargar el runtime en https://www.mathworks.com/products/compiler/mcr/index.html).

### Ejecución

1. Si aún no tienes el runtime/MATLAB R2026a, ejecuta `MyAppInstaller.exe` (instala la app y el runtime; requiere permisos de administrador).
2. Ejecuta `PlaneacionSolarPractica.exe` con **doble clic**.

### Plataforma

- **Sistema operativo**: Windows
- Los archivos `.exe` generados por MATLAB Compiler **solo funcionan en Windows**. No se ejecutan en Linux/macOS.

---

## Notas

- Esta app de escritorio y la aplicación web (`../web/`) comparten la misma lógica de cálculo (RF-01 a RF-12 del plan de implementación), cumpliendo con el **RF-12: doble presentación (web + escritorio)**.
- El ejecutable fue generado como **standalone** de MATLAB Compiler; el código fuente original (`*.m`) no forma parte de este repositorio.

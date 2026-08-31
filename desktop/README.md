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

### Requisito previo: MATLAB Runtime

La app necesita el **MATLAB Runtime R2026a** instalado en el equipo. Si no lo tienes:

- Descárgalo en: https://www.mathworks.com/products/compiler/mcr/index.html
- O, si el instalador `MyAppInstaller.exe` incluye el runtime, instálalo con él.
- Se requieren **derechos de administrador** para instalar el runtime.

### Ejecución

1. Instala el MATLAB Runtime R2026a (ver requisito previo).
2. Ejecuta `PlaneacionSolarPractica.exe` con **doble clic**.

> Alternativa: ejecuta `MyAppInstaller.exe` para instalar la aplicación en el sistema y luego ábrela desde el acceso directo.

### Plataforma

- **Sistema operativo**: Windows
- Los archivos `.exe` generados por MATLAB Compiler **solo funcionan en Windows**. No se ejecutan en Linux/macOS.

---

## Notas

- Esta app de escritorio y la aplicación web (`../web/`) comparten la misma lógica de cálculo (RF-01 a RF-12 del plan de implementación), cumpliendo con el **RF-12: doble presentación (web + escritorio)**.
- El ejecutable fue generado como **standalone** de MATLAB Compiler; el código fuente original (`*.m`) no forma parte de este repositorio.

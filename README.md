# Reto 01 — ESFV

**Planeación Solar Práctica: Caracterización de Demanda Energética**

Herramienta para automatizar el **Reto 1** del curso de Sistemas Fotovoltaicos: recopilación y análisis de los datos de consumo energético de un cliente.

Este repositorio contiene **dos aplicaciones** que comparten la misma lógica de cálculo (cumpliendo el **RF-12: doble presentación**):

| Carpeta | App | Plataforma | Tecnología |
|---------|-----|-----------|------------|
| [`web/`](web/) | Aplicación web | Navegador (Windows, Mac, Linux) | HTML + CSS + JavaScript |
| [`desktop/`](desktop/) | Aplicación de escritorio | Windows | MATLAB Compiler (R2026a) |

---

## 🖥️ App Web (`web/`)

Aplicación de una sola página (sin frameworks). Se ejecuta **100% en el navegador**: no requiere servidor, instalación ni compilación.

### Cómo ejecutarla

**En línea (GitHub Pages)** — prueba rápida sin descargar nada:

> **https://sebastian-martinez-fontalvo.github.io/reto01-ESFV/web/**

**Localmente** — clona el repo y abre `web/index.html` con doble clic (o arrástralo al navegador):

```bash
git clone https://github.com/Sebastian-Martinez-Fontalvo/reto01-ESFV.git
cd reto01-ESFV/web
```

**Con servidor local** (opcional, para desarrollo):

```bash
python3 -m http.server 8000      # luego abre http://localhost:8000
# o
npx serve .
```

> 📘 Manual detallado de la app web: [`web/README.md`](web/README.md)

---

## 💻 App de Escritorio (`desktop/`)

Aplicación **Windows** compilada con **MATLAB Compiler (R2026a)**. El ejecutable está en `desktop/PlaneacionSolarPractica.exe`.

### Cómo ejecutarla

1. Ejecuta `desktop/MyAppInstaller.exe` (el instalador incluye el runtime, no hace falta instalar MATLAB por separado; requiere permisos de administrador).
2. Ejecuta `desktop/PlaneacionSolarPractica.exe` (o, si tienes MATLAB R2026a instalado en el equipo, sirve como equivalente del runtime).

> ⚠️ Los archivos `.exe` **solo funcionan en Windows** (no en Linux/macOS).

> 📘 Manual detallado: [`desktop/README.md`](desktop/README.md)

---

## Estructura del repositorio

```
reto01-ESFV/
├── README.md               ← este archivo (manual general)
├── web/                    ← 🖥️ aplicación web
│   ├── index.html          ← página principal
│   ├── css/                ← estilos
│   ├── js/                 ← lógica (app, calculations, chart, excel, i18n, ...)
│   ├── img/                ← imágenes y logo
│   └── implementation_plan.md
└── desktop/                ← 💻 aplicación de escritorio (Windows)
    ├── PlaneacionSolarPractica.exe   ← ejecutable
    ├── MyAppInstaller.exe            ← instalador
    ├── readme.txt                    ← instrucciones de MATLAB Compiler
    ├── splash.png                    ← imagen de inicio
    ├── build/                        ← logs de compilación
    └── package/                      ← registro del instalador
```

---

## Funcionalidades (comunes a ambas apps)

- **Proyecto**: datos del proyecto, integrantes, fecha y tipo de sistema (off-grid, on-grid, híbrido).
- **Cuadro de Cargas**: tabla interactiva de equipos (descripción, cantidad, potencia y franjas horarias de 24 h). Clasificación diurna / nocturna / mixta con validación.
- **Resultados**: potencia instalada, demanda máxima, perfil de demanda de 24 h, proyección de consumo (diario/mensual/anual) y costos de energía.
- **Reporte**: informe ejecutivo imprimible / exportable a PDF.
- **Persistence**: guardar y cargar el proyecto como archivo `.json`.
- **Extras**: interfaz en español e inglés, modo claro/oscuro.

---

## Licencia

Uso académico / educativo (curso de Sistemas Fotovoltaicos).

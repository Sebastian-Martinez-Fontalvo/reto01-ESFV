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

**En línea (despliegue principal — Vercel):**

> **https://ensoldidactico.vercel.app/**

**Alternativa en GitHub Pages:**

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

## Funcionalidades

Considera los [términos de referencia del Reto 01](https://energia-solar-fotovoltaica-2026-ii) de **Energía Solar Fotovoltaica · 2026-II**. Ambas aplicaciones (web y escritorio) cubren los requisitos funcionales **RF-01 a RF-12** con la misma lógica de cálculo.

| ID | Función | Estado |
|----|---------|--------|
| RF-01 | **Proyecto y contexto**: nombre/ID del proyecto, integrantes, fecha y tipo de aplicación (off-grid, on-grid, híbrido off-grid, híbrido on-grid) | ✅ |
| RF-02 | **Cuadro de cargas**: agregar, editar y eliminar cargas (descripción, cantidad, potencia unitaria [W], horarios de uso) | ✅ |
| RF-03 | **Franjas horarias**: uno o varios intervalos por carga, discontinuos y que cruzan la medianoche; resolución mínima 1 h | ✅ |
| RF-04 | **Clasificación temporal**: diurna / nocturna / mixta, con criterio horario visible y configurable (día/noche por defecto 06:00–18:00) | ✅ |
| RF-05 | **Potencia**: potencia instalada total [W/kW] y demanda máxima simultánea [W/kW], mostradas por separado | ✅ |
| RF-06 | **Energía y perfil 24 h**: energía diaria [kWh/día] y perfil horario de potencia (00:00–23:00) con gráfico | ✅ |
| RF-07 | **Proyección de consumo**: consumo diario, mensual y anual, con días de operación configurables (sin supuestos ocultos) | ✅ |
| RF-08 | **Costo de energía**: costo unitario CU [$/kWh] como dato de entrada; costo diario, mensual y anual | ✅ |
| RF-09 | **Validación**: impide datos inválidos (cantidades/potencias negativas, intervalos incorrectos, campos vacíos, duplicidades) | ✅ |
| RF-10 | **Persistencia**: guardar y recuperar el proyecto como archivo estructurado (`.json`) | ✅ |
| RF-11 | **Informe automático**: informe ejecutivo de una página (datos del proyecto, contexto, cuadro resumido, indicadores, perfil 24 h, costos) | ✅ |
| RF-12 | **Despliegue dual**: versiones web y escritorio con la misma lógica, unidades, resultados y flujo | ✅ |

### Principales funcionalidades de la interfaz

- **Proyecto**: datos del proyecto, integrantes, fecha y tipo de sistema (off-grid, on-grid, híbrido).
- **Cuadro de Cargas**: tabla interactiva de equipos (descripción, cantidad, potencia y franjas horarias de 24 h). Clasificación diurna / nocturna / mixta con validación.
- **Resultados**: potencia instalada, demanda máxima, perfil de demanda de 24 h, proyección de consumo (diario/mensual/anual) y costos de energía.
- **Reporte**: informe ejecutivo imprimible / exportable a PDF.
- **Persistencia**: guardar y cargar el proyecto como archivo `.json`.
- **Extras**: interfaz en español e inglés, modo claro/oscuro, importación/exportación a Excel.

---

## Licencia

Uso académico / educativo (curso de Sistemas Fotovoltaicos).

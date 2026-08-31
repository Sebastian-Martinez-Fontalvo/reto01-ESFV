# App Web — Reto 01 ESFV

**Planeación Solar Práctica: Caracterización de Demanda Energética**

Aplicación web de una sola página (HTML/CSS/JS sin frameworks) para automatizar el **Reto 1** del curso de Sistemas Fotovoltaicos.

Esta es la **versión web** del proyecto. La **versión de escritorio** (Windows, compilada con MATLAB) está en `../desktop/`. Ambas comparten la misma lógica de cálculo (RF-01 a RF-12 del plan de implementación, en `implementation_plan.md`).

Todo se ejecuta **100% en el navegador**: no requiere servidor, ni instalación de dependencias, ni compilación.

---

## Cómo ejecutarla

### Opción A — En línea (GitHub Pages)

Prueba rápida sin descargar nada:

> **https://sebastian-martinez-fontalvo.github.io/reto01-ESFV/web/**

Solo abre el enlace en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).

### Opción B — Localmente (desde la carpeta)

1. Descarga el repositorio o clónalo:
   ```bash
   git clone https://github.com/Sebastian-Martinez-Fontalvo/reto01-ESFV.git
   cd reto01-ESFV/web
   ```
2. Abre el archivo `index.html` directamente en tu navegador (**doble clic** sobre él).

> No hace falta ningún servidor ni comando adicional: al ser una aplicación estática, se ejecuta abriendo `index.html`.

### Opción C — Con un servidor local (opcional, recomendado para desarrollo)

- Con **Python**:
  ```bash
  python3 -m http.server 8000
  ```
  Luego abre `http://localhost:8000`.

- Con **Node.js**:
  ```bash
  npx serve .
  ```
  Luego abre la URL que indique la consola.

---

## Funcionalidades

La app web cumple los requisitos funcionales **RF-01 a RF-12** de los [términos de referencia del Reto 01](https://energia-solar-fotovoltaica-2026-ii):

| ID | Función | Estado |
|----|---------|--------|
| RF-01 | Proyecto y contexto (off-grid, on-grid, híbrido off-grid, híbrido on-grid) | ✅ |
| RF-02 | Cuadro de cargas (agregar, editar, eliminar) | ✅ |
| RF-03 | Franjas horarias (múltiples intervalos, cruce de medianoche, resolución 1 h) | ✅ |
| RF-04 | Clasificación diurna / nocturna / mixta configurable | ✅ |
| RF-05 | Potencia instalada y demanda máxima, por separado | ✅ |
| RF-06 | Energía diaria y perfil horario 24 h (gráfico) | ✅ |
| RF-07 | Proyección diaria, mensual y anual (días de operación configurables) | ✅ |
| RF-08 | Costo de energía con CU [$/kWh] de entrada | ✅ |
| RF-09 | Validación de datos | ✅ |
| RF-10 | Persistencia (guardar/cargar `.json`) | ✅ |
| RF-11 | Informe ejecutivo de una página (imprimible/PDF) | ✅ |
| RF-12 | Despliegue dual (web + escritorio equivalentes) | ✅ |

Para un detalle por pestaña:

---

## Estructura de la carpeta web

```
web/
├── index.html              ← página principal (abre este archivo)
├── css/
│   └── styles.css          ← estilos (tema oscuro, diseño moderno)
├── js/
│   ├── app.js              ← controlador principal, navegación por pestañas
│   ├── project.js          ← gestión de datos del proyecto (RF-01)
│   ├── loads.js            ← cuadro de cargas CRUD y validación (RF-02/03/04/09)
│   ├── calculations.js     ← potencia, energía, perfil, proyecciones y costos
│   ├── chart.js            ← gráfico del perfil de 24 h (Chart.js)
│   ├── persistence.js      ← guardar/cargar proyecto en JSON (RF-10)
│   ├── excel.js            ← exportación a Excel
│   ├── report.js           ← informe ejecutivo imprimible (RF-11)
│   ├── i18n.js             ← español / inglés
│   └── logo_data.js        ← logo en base64
├── img/
│   └── logo.png, logo.jpg, logo_base64.txt
└── implementation_plan.md  ← plan de implementación y detalle técnico
```

---

## Dependencias (CDN)

La app carga las siguientes librerías desde CDN (requiere conexión a internet al abrirla):

- [Chart.js](https://www.chartjs.org/) — gráfico del perfil de demanda.
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) — generación de PDF del reporte.
- [xlsx-js-style](https://github.com/SheetJS) — exportación a Excel.

---

## Verificación rápida (modo prueba)

1. Abre la app (Online o local).
2. Ve a la pestaña **📋 Proyecto** y completa los campos (nombre, tipo de sistema, etc.).
3. Ve a **⚡ Cuadro de Cargas** y agrega 2–3 equipos de ejemplo (ej. "Foco LED – 10 W", "Refrigerador – 150 W"), marcando sus franjas horarias.
4. Ve a **📊 Resultados** y comprueba que la potencia instalada, el perfil de 24 h, el consumo y los costos se calculan automáticamente.
5. Prueba **💾 Guardar** (exporta `.json`) y **Cargar** (importa de nuevo) para verificar la persistencia.
6. Prueba **📄 Reporte** para generar el informe imprimible/PDF.

---

## Licencia

Uso académico / educativo (curso de Sistemas Fotovoltaicos).

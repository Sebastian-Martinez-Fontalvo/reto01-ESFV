# Reto 01 — ESFV

**Planeación Solar Práctica: Caracterización de Demanda Energética**

Aplicación web de una sola página (HTML/CSS/JS sin frameworks) para automatizar el **Reto 1** del curso de Sistemas Fotovoltaicos: recopilación y análisis de los datos de consumo energético de un cliente.

Todo se ejecuta **100% en el navegador** (lado cliente): no requiere servidor, ni instalación de dependencias, ni compilación.

---

## Funcionalidades

- **Proyecto**: datos del proyecto, integrantes, fecha y tipo de sistema (off-grid, on-grid, híbrido).
- **Cuadro de Cargas**: tabla interactiva para agregar equipos (descripción, cantidad, potencia unitaria y franjas horarias de 24 h). Clasificación automática diurna / nocturna / mixta con validación de datos.
- **Resultados**: potencia instalada, demanda máxima, perfil de demanda de 24 h (gráfico con Chart.js), proyección de consumo (diario/mensual/anual) y costos de energía.
- **Reporte**: informe ejecutivo imprimible / exportable a PDF.
- **Persistence**: guardar y cargar el proyecto como archivo `.json`.
- **Extras**: interfaz en español e inglés, modo claro/oscuro.

---

## Cómo ejecutarlo

### Opción A — En la web (GitHub Pages)

El proyecto está publicado y se puede probar en línea sin descargar nada:

> **https://sebastian-martinez-fontalvo.github.io/reto01-ESFV/**

Solo abre el enlace en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).

### Opción B — Localmente (desde la carpeta)

1. Descarga y descomprime el repositorio (o clónalo):
   ```bash
   git clone https://github.com/Sebastian-Martinez-Fontalvo/reto01-ESFV.git
   cd reto01-ESFV
   ```
2. Abre el archivo `index.html` directamente en tu navegador (**doble clic** sobre él) o arrástralo a una ventana del navegador.

> No hace falta ningún servidor ni comando adicional: al ser una aplicación estática, se ejecuta abriendo `index.html`.

### Opción C — Con un servidor local (opcional, recomendado para desarrollo)

Si trabajas con las herramientas de desarrollo o prefieres una URL real:

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

## Estructura del proyecto

```
reto01-ESFV/
├── index.html              ← página principal (abre este archivo)
├── css/
│   └── styles.css          ← estilos (tema oscuro, diseño moderno)
├── js/
│   ├── app.js              ← controlador principal, navegación por pestañas
│   ├── project.js          ← gestión de datos del proyecto (RF-01)
│   ├── loads.js            ← cuadro de cargas CRUD y validación (RF-02/03/04/09)
│   ├── calculations.js     ← potencia, energía, perfil, proyecciones y costos
│   ├── chart.js            ← gráfico de perfil de 24 h (Chart.js)
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

El proyecto carga las siguientes librerías desde CDN (requiere conexión a internet al abrirlo):

- [Chart.js](https://www.chartjs.org/) — gráfico del perfil de demanda.
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) — generación de PDF del reporte.
- [xlsx-js-style](https://github.com/SheetJS) — exportación a Excel.

---

## Verificación rápida (modo prueba)

Para probar la aplicación de forma rápida:

1. Abre la app (Online o local).
2. Ve a la pestaña **📋 Proyecto** y completa los campos (nombre, tipo de sistema, etc.).
3. Ve a **⚡ Cuadro de Cargas** y agrega 2–3 equipos de ejemplo (ej. "Foco LED – 10 W", "Refrigerador – 150 W"), marcando sus franjas horarias.
4. Ve a **📊 Resultados** y comprueba que la potencia instalada, el perfil de 24 h, el consumo y los costos se calculan automáticamente.
5. Prueba **💾 Guardar** (exporta `.json`) y **Cargar** (importa de nuevo) para verificar la persistencia.
6. Prueba **📄 Reporte** para generar el informe imprimible/PDF.

---

## Licencia

Uso académico / educativo (curso de Sistemas Fotovoltaicos).

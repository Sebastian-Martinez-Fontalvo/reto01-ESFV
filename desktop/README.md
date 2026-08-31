# App de Escritorio — Reto 01 ESFV

**Planeación Solar Práctica: Caracterización de Demanda Energética**

Esta es la **versión de escritorio (Windows)** del Reto 01 ESFV, compilada con **MATLAB Compiler (R2026a)**. Es la contraparte de la aplicación web (`../web/`), con la misma lógica de cálculo (RF-01 a RF-12).

---

## 📦 Qué necesitas descargar

Del repositorio (carpeta `desktop/`) descarga estos **dos archivos**:

| Archivo | Tamaño | Qué es |
|---------|--------|--------|
| `PlaneacionSolarPractica.exe` | ~1.7 MB | El ejecutable principal de la aplicación |
| `MyAppInstaller.exe` | ~3.1 MB | El instalador (incluye la app y el runtime de MATLAB) |

> Descarga ambos desde la página del repositorio:
> https://github.com/Sebastian-Martinez-Fontalvo/reto01-ESFV/tree/main/desktop

---

## 🛠️ Guía de instalación paso a paso

### Paso 1 — Descargar los archivos

1. Entra al repositorio: https://github.com/Sebastian-Martinez-Fontalvo/reto01-ESFV
2. Abre la carpeta **`desktop/`**.
3. Descarga **`PlaneacionSolarPractica.exe`** y **`MyAppInstaller.exe`** (botón "Download" o mediante el clon).
4. Guárdalos en una misma carpeta (ej. `Escritorio/Reto01`), ya que ambos son necesarios.

### Paso 2 — Ejecutar el instalador

1. Haz **doble clic** sobre **`MyAppInstaller.exe`**.
2. Acepta el aviso de seguridad de Windows ("¿Desea permitir que esta aplicación realice cambios en el dispositivo?") pulsando **Sí**.
3. Sigue el asistente de instalación pulsando **Siguiente / Next** y **Finalizar / Finish**.

> ⚠️ El instalador requiere **permisos de administrador** porque instala el **MATLAB Runtime R2026a** (necesario para ejecutar la app). **No necesitas instalar MATLAB** en ningún caso: el instalador lo hace todo automáticamente.

### Paso 3 — Ejecutar la aplicación

1. Localiza **`PlaneacionSolarPractica.exe`** en la carpeta donde lo descargaste.
2. Haz **doble clic** sobre él para abrir la aplicación.
3. (Opcional) Si el instalador creó un acceso directo, úsalo igualmente.

> 💡 La primera vez que la ejecutes, Windows puede mostrar el aviso "Windows protegió su equipo". Pulsa **Más información → Ejecutar de todas formas** si confías en el archivo.

---

## ✅ Si ya tienes MATLAB 2026

Si ya tienes **MATLAB R2026a** instalado en tu equipo, sirve como equivalente del runtime. En ese caso:

1. No necesitas instalar nada más.
2. Ejecuta directamente **`PlaneacionSolarPractica.exe`** con doble clic.

Podrías saltarte el Paso 2 (el instalador del runtime) y ejecutar directamente el ejecutable.

---

## 🖥️ Requisitos del sistema

- **Sistema operativo**: Windows (64 bits)
- Los ejecutables generados por MATLAB Compiler **solo funcionan en Windows**. **No funcionan en Linux ni macOS**.
- Espacio en disco: ~1 GB (por la instalación del MATLAB Runtime).

---

## ❓ Solución de problemas

| Problema | Solución |
|----------|----------|
| Windows bloquea el ejecutable | Pulsa **Más información → Ejecutar de todas formas** |
| Error de "MATLAB Runtime no encontrado" | Ejecuta `MyAppInstaller.exe` para instalar el runtime |
| La app no abre o se cierra al inicio | Asegúrate de tener espacio en disco y permisos de administrador al instalar |
| Solo aparece un instalador | Ejecuta primero `MyAppInstaller.exe`, y después `PlaneacionSolarPractica.exe` |

---

## Contenido de la carpeta desktop

```
desktop/
├── PlaneacionSolarPractica.exe   ← ejecutable principal de la app
├── MyAppInstaller.exe            ← instalador (app + MATLAB Runtime)
├── readme.txt                    ← instrucciones oficiales de MATLAB Compiler
├── splash.png                    ← imagen de inicio de la app
├── build/                        ← logs de compilación (buildresult.json, etc.)
└── package/                      ← registro del instalador (deploymentLog.html)
```

---

## Notas

- Esta app de escritorio y la aplicación web (`../web/`) comparten la misma lógica de cálculo (RF-01 a RF-12 del plan de implementación), cumpliendo con el **RF-12: doble presentación (web + escritorio)**.
- El ejecutable fue generado como **standalone** de MATLAB Compiler; el código fuente original (`*.m`) no forma parte de este repositorio.

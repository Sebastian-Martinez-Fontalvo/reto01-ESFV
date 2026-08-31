# PV Energy Demand Characterization — Web App

Build a single-page HTML/CSS/JS application that automates **Challenge 1** of the Solar PV course project: gathering and analyzing energy consumption data for a client.

## Proposed Architecture

**Single-page app** with 4 logical sections/tabs, all in vanilla HTML + CSS + JavaScript (no frameworks). Everything runs client-side.

### File Structure

```
Reto01-ESFV/
├── index.html          ← main page with all sections
├── css/
│   └── styles.css      ← all styles (dark theme, modern aesthetic)
├── js/
│   ├── app.js          ← main controller, tab navigation, initialization
│   ├── project.js      ← RF-01: project info & context management
│   ├── loads.js         ← RF-02/03/04/09: load table CRUD, time slots, classification, validation
│   ├── calculations.js ← RF-05/06/07/08: power, energy, profile, projections, costs
│   ├── chart.js        ← RF-06: 24h demand profile chart (using Chart.js CDN)
│   ├── persistence.js  ← RF-10: save/load project as JSON file
│   └── report.js       ← RF-11: generate printable executive report
└── assets/
    └── favicon.ico
```

---

## Proposed Changes — Section by Section

### Section 1: Project & Context (RF-01)

Form to capture:
- Project name / ID
- Team members (text input, comma-separated or multi-line)
- Date (auto-filled, editable)
- **System type**: dropdown — off-grid, on-grid, hybrid off-grid, hybrid on-grid

This data is stored in a global `project` object and included in the report.

---

### Section 2: Load Table (RF-02, RF-03, RF-04, RF-09)

This is the core of the app. An interactive table where the user adds electrical loads.

#### Each load entry contains:
| Field | Type | Notes |
|---|---|---|
| Description | text | e.g. "LED light", "Refrigerator" |
| Quantity (Nᵢ) | number | ≥ 1, validated |
| Unit Power (Pᵢ) | number [W] | > 0, validated |
| Time Slots | multi-interval picker | One or more `[start, end)` pairs, 1h resolution |
| Classification | auto-computed | Diurnal / Nocturnal / Mixed |

#### Time Slot Handling (RF-03)
- Each load can have **multiple discontinuous intervals** (e.g., 08:00–12:00 and 18:00–22:00).
- Intervals that **cross midnight** are supported (e.g., 22:00–02:00).
- Minimum resolution: **1 hour**.
- UI: A row of 24 toggleable hour-buttons (00–23) per load. User clicks to toggle hours on/off. This is intuitive and eliminates input errors.

#### Day/Night Classification (RF-04)
- **Configurable threshold** (default: day = 06:00–18:00, night = 18:00–06:00).
- Exposed as two time pickers at the top of the section.
- Each load is auto-classified:
  - **Diurnal**: all active hours fall within day range
  - **Nocturnal**: all active hours fall within night range
  - **Mixed**: active hours span both

#### Validation (RF-09)
- Quantity and power must be positive numbers
- At least one time slot must be selected per load
- Description cannot be empty
- Duplicate detection (same description + same power)
- Inline error messages on the form

---

### Section 3: Results & Analysis (RF-05, RF-06, RF-07, RF-08)

All calculations are **reactive** — they update automatically whenever loads are added/edited/removed.

#### Power Metrics (RF-05)
- **Installed Power**: `Pinst = Σ (Nᵢ × Pᵢ)` — displayed in W and kW
- **Maximum Simultaneous Demand**: `Pmax = max[P(h)]` for h = 0…23 — displayed in W and kW

#### 24h Profile Chart (RF-06)
- Bar chart (Chart.js) showing power demand per hour (00:00 – 23:00)
- `P(h) = Σ (Nᵢ × Pᵢ)` for all loads active during hour `h`
- Daily energy: `Ed = Σ P(h) × 1 / 1000` [kWh/day] (since Δt = 1h)
- Day/night zones shaded on the chart

#### Consumption Projection (RF-07)
- Configurable inputs:
  - Operating days per month (default: 30)
  - Operating months per year (default: 12)
- Calculated values:
  - **Daily**: Ed [kWh/day]
  - **Monthly**: Em = Ed × days/month [kWh/month]
  - **Annual**: Ea = Em × months/year [kWh/year]

#### Energy Cost (RF-08)
- User input: **Unit cost CU** [$/kWh]
- Calculated:
  - Daily cost = Ed × CU
  - Monthly cost = Em × CU
  - Annual cost = Ea × CU

---

### Section 4: Report & Persistence (RF-10, RF-11)

#### Save/Load (RF-10)
- **Save**: exports the full project state (project info + all loads + config) as a `.json` file via browser download
- **Load**: file input to import a previously saved `.json` and restore the entire state

#### Executive Report (RF-11)
- Single-page printable report containing:
  - Project info (name, team, date, system type)
  - Summarized load table
  - Key indicators (Pinst, Pmax, Ed, Em, Ea)
  - 24h demand profile chart
  - Cost estimates
- Generated as a **print-optimized view** (CSS `@media print`) or opened in a new window

---

### RF-12: Dual Display

> [!NOTE]
> RF-12 asks for web + desktop versions with identical logic. The web version is what we're building. The MATLAB app is out of scope per your instruction. If later you want a desktop version, we could wrap this in Electron or use the MATLAB app.

---

## UI / UX Design

- **Dark theme** with accent colors (solar-inspired: amber/gold gradients on dark slate)
- **Tab-based navigation**: Project → Loads → Results → Report
- **Responsive** layout (works on laptop and tablet)
- **Micro-animations** on buttons, cards, and transitions
- **Spanish language UI** (matching the course language)
- Chart.js via CDN for the 24h profile chart

---

## Calculation Rules Summary

| Indicator | Formula |
|---|---|
| Installed Power | `Pinst = Σ (Nᵢ × Pᵢ)` |
| Hourly Profile | `P(h) = Σ (Nᵢ × Pᵢ)` for loads active at hour h |
| Max Demand | `Pmax = max[P(h)]` for h ∈ [0, 23] |
| Daily Energy | `Ed = Σ P(h) · Δt / 1000` [kWh/day], Δt = 1h |
| Monthly Energy | `Em = Ed × operating_days_per_month` |
| Annual Energy | `Ea = Em × operating_months_per_year` |
| Cost | `Cost = Energy × CU` (daily/monthly/annual) |
| Day/Night | Default: day 06:00–18:00, night 18:00–06:00. Configurable. |

---

## Open Questions

> [!IMPORTANT]
> **Language**: The document is in Spanish. Should the web app UI be entirely in **Spanish** (matching your course), or in **English**?

> [!IMPORTANT]
> **Currency symbol**: The spec uses `$`. Should costs display with `$` (generic), `MXN`, `COP`, or another currency?

> [!IMPORTANT]
> **Common loads library**: Would you like a pre-loaded list of common household/commercial appliances (e.g., "Foco LED – 10W", "Refrigerador – 150W", "Aire acondicionado – 1500W") that the user can pick from to speed up data entry? This is not in the spec but would make the tool much more user-friendly.

---

## Verification Plan

### Manual Verification
- Add sample loads and verify all calculations match hand-computed values
- Test edge cases: midnight-crossing intervals, mixed classification, zero loads
- Test save/load round-trip (export JSON → import → verify state restored)
- Test report generation (print preview)
- Verify responsive layout on different screen sizes

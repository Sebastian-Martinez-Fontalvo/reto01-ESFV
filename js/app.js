/* ═══════════════════════════════════════════════
   app.js — Global State, Tabs, Utilities, Init
   ═══════════════════════════════════════════════ */

// ───── GLOBAL STATE ─────
const APP = {
    state: {
        project: {
            name: '',
            id: '',
            members: '',
            date: new Date().toISOString().split('T')[0],
            systemType: 'off-grid'
        },
        config: {
            dayStart: 6,
            dayEnd: 18,
            daysPerMonth: 30,
            monthsPerYear: 12,
            unitCost: 890
        },
        loads: []
    },
    editingId: null,
    chart: null
};

// ───── UTILITIES ─────

/** Check if an hour is daytime based on current config */
function isDayHour(hour) {
    const { dayStart, dayEnd } = APP.state.config;
    if (dayStart < dayEnd) {
        return hour >= dayStart && hour < dayEnd;
    }
    // Wraps around midnight (e.g., day 20:00–06:00 — unusual but supported)
    return hour >= dayStart || hour < dayEnd;
}

/** Classify a load's hour array as Diurna / Nocturna / Mixta */
function classifyLoad(hours) {
    if (!hours || hours.length === 0) return '—';
    let hasDay = false, hasNight = false;
    for (const h of hours) {
        if (isDayHour(h)) hasDay = true;
        else hasNight = true;
        if (hasDay && hasNight) return 'Mixta';
    }
    return hasDay ? 'Diurna' : 'Nocturna';
}

/** Format an array of hours into readable time ranges */
function formatHourRanges(hours) {
    if (!hours || hours.length === 0) return '—';
    const sorted = [...hours].sort((a, b) => a - b);
    const ranges = [];
    let start = sorted[0], prev = sorted[0];

    for (let i = 1; i <= sorted.length; i++) {
        if (i === sorted.length || sorted[i] !== prev + 1) {
            const sStr = String(start).padStart(2, '0') + ':00';
            const eStr = String((prev + 1) % 24).padStart(2, '0') + ':00';
            ranges.push(`${sStr}–${eStr}`);
            if (i < sorted.length) { start = sorted[i]; prev = sorted[i]; }
        } else {
            prev = sorted[i];
        }
    }
    return ranges.join(', ');
}

/** Format a number as COP currency (no decimals) */
function formatCOP(value) {
    const rounded = Math.round(value);
    return `$ ${rounded.toLocaleString('es-CO')} COP`;
}

/** Format watts, showing kW if ≥ 1000 */
function formatPower(watts) {
    if (watts >= 1000) return `${(watts / 1000).toFixed(2)} kW`;
    return `${watts.toLocaleString('es-CO')} W`;
}

/** Show a toast notification */
function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(30px)';
        toast.style.transition = '0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ───── TAB NAVIGATION ─────
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
}

function switchTab(tabId) {
    // Deactivate all
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    // Activate target
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    const panel = document.getElementById(`tab-${tabId}`);
    panel.classList.add('active');
    // If switching to results, recalculate and update chart
    if (tabId === 'resultados') {
        recalculateAll();
        if (APP.chart) APP.chart.resize();
    }
}

// ───── CENTRAL RECALCULATE ─────
function recalculateAll() {
    if (typeof updateCalculations === 'function') updateCalculations();
    if (typeof updateChart === 'function') updateChart();
}

// ───── THEME TOGGLE ─────
function initTheme() {
    const saved = localStorage.getItem('solarcalc-theme') || 'dark';
    applyTheme(saved);

    document.getElementById('btn-theme').addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem('solarcalc-theme', next);
    });
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('theme-icon').textContent = '☀️';
        document.getElementById('theme-label').textContent = 'Modo Oscuro';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('theme-icon').textContent = '🌙';
        document.getElementById('theme-label').textContent = 'Modo Claro';
    }
    // Update chart colors if chart exists
    if (APP.chart && typeof updateChart === 'function') {
        setTimeout(() => updateChart(), 100);
    }
}

// ───── INIT ─────
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTabs();
    if (typeof initProject === 'function') initProject();
    if (typeof initLoads === 'function') initLoads();
    if (typeof initCalculations === 'function') initCalculations();
    if (typeof initProfileChart === 'function') initProfileChart();
    if (typeof initPersistence === 'function') initPersistence();
    if (typeof initReport === 'function') initReport();
    if (typeof initExcel === 'function') initExcel();
});

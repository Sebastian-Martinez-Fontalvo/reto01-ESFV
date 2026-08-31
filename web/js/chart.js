/* ═══════════════════════════════════════════════
   chart.js — RF-06: 24h Demand Profile Chart
   ═══════════════════════════════════════════════ */

let chartType = 'bar'; // 'bar' or 'line' (area)

function isLightTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light';
}

function initProfileChart() {
    const ctx = document.getElementById('profile-chart').getContext('2d');
    
    // Toggle button logic
    const btnType = document.getElementById('btn-chart-type');
    if (btnType) {
        btnType.addEventListener('click', () => {
            chartType = chartType === 'bar' ? 'line' : 'bar';
            btnType.innerHTML = chartType === 'bar' 
                ? '<span class="btn-icon">🌊</span> Área'
                : '<span class="btn-icon">📊</span> Barras';
            updateChart(); // Re-render
        });
    }

    const labels = Array.from({ length: 24 }, (_, i) =>
        String(i).padStart(2, '0') + ':00'
    );

    const light = isLightTheme();

    APP.chart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: 'Demanda (W)',
                data: new Array(24).fill(0),
                backgroundColor: generateBarColors(),
                borderColor: generateBarBorders(),
                borderWidth: 1.5,
                borderRadius: 4,
                borderSkipped: false,
                fill: true, // For area chart
                tension: 0.4, // Smooth curves for area chart
                pointRadius: chartType === 'line' ? 3 : 0,
                segment: {
                    backgroundColor: ctx => {
                        const h = ctx.p0DataIndex;
                        const light = isLightTheme();
                        if (isDayHour(h)) {
                            return light ? 'rgba(245, 158, 11, 0.4)' : 'rgba(251, 191, 36, 0.4)';
                        }
                        return light ? 'rgba(79, 70, 229, 0.3)' : 'rgba(99, 102, 241, 0.3)';
                    },
                    borderColor: ctx => {
                        const h = ctx.p0DataIndex;
                        const light = isLightTheme();
                        if (isDayHour(h)) {
                            return light ? 'rgba(217, 119, 6, 0.9)' : 'rgba(251, 191, 36, 1)';
                        }
                        return light ? 'rgba(67, 56, 202, 0.8)' : 'rgba(129, 140, 248, 0.9)';
                    }
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: light ? 'rgba(255, 255, 255, 0.96)' : 'rgba(15, 23, 42, 0.95)',
                    titleColor: light ? '#0f172a' : '#f1f5f9',
                    bodyColor: light ? '#475569' : '#94a3b8',
                    borderColor: light ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12,
                    titleFont: { family: 'Inter', weight: '600' },
                    bodyFont: { family: 'Inter' },
                    callbacks: {
                        label: (ctx) => {
                            const w = ctx.raw;
                            return ` ${w.toLocaleString('es-CO')} W  (${(w / 1000).toFixed(2)} kW)`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: light ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.07)',
                        drawTicks: false
                    },
                    ticks: {
                        color: light ? '#475569' : '#64748b',
                        font: { family: 'Inter', size: 10 },
                        maxRotation: 45,
                        minRotation: 0
                    },
                    border: { color: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.1)' }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: light ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.07)',
                        drawTicks: false
                    },
                    ticks: {
                        color: light ? '#475569' : '#64748b',
                        font: { family: 'Inter', size: 11 },
                        callback: (v) => v >= 1000 ? `${(v / 1000).toFixed(1)} kW` : `${v} W`
                    },
                    border: { color: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.1)' }
                }
            },
            animation: {
                duration: 500,
                easing: 'easeOutQuart'
            }
        }
    });
}

/** Generate bar colors based on day/night hours */
function generateBarColors() {
    const light = isLightTheme();
    return Array.from({ length: 24 }, (_, h) => {
        if (isDayHour(h)) {
            return light ? 'rgba(245, 158, 11, 0.75)' : 'rgba(251, 191, 36, 0.8)';
        }
        return light ? 'rgba(79, 70, 229, 0.6)' : 'rgba(99, 102, 241, 0.7)';
    });
}

function generateBarBorders() {
    const light = isLightTheme();
    return Array.from({ length: 24 }, (_, h) => {
        if (isDayHour(h)) {
            return light ? 'rgba(217, 119, 6, 0.9)' : 'rgba(251, 191, 36, 1)';
        }
        return light ? 'rgba(67, 56, 202, 0.8)' : 'rgba(129, 140, 248, 0.9)';
    });
}

/** Update chart data with current hourly profile */
function updateChart(profile) {
    if (!APP.chart) return;
    if (!profile) profile = calcHourlyProfile();

    const light = isLightTheme();

    // Update dataset config based on chart type
    APP.chart.config.type = chartType;
    APP.chart.data.datasets[0].pointRadius = chartType === 'line' ? 3 : 0;
    APP.chart.data.datasets[0].pointBackgroundColor = light ? '#fff' : '#0f172a';
    APP.chart.data.datasets[0].pointBorderWidth = 2;

    // Update data and colors
    APP.chart.data.datasets[0].data = profile;
    APP.chart.data.datasets[0].backgroundColor = generateBarColors();
    APP.chart.data.datasets[0].borderColor = generateBarBorders();

    // Update scale/grid colors for current theme
    const gridColor = light ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.07)';
    const borderColor = light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.1)';
    const tickColor = light ? '#475569' : '#64748b';

    APP.chart.options.scales.x.grid.color = gridColor;
    APP.chart.options.scales.x.ticks.color = tickColor;
    APP.chart.options.scales.x.border.color = borderColor;
    APP.chart.options.scales.y.grid.color = gridColor;
    APP.chart.options.scales.y.ticks.color = tickColor;
    APP.chart.options.scales.y.border.color = borderColor;

    // Update tooltip colors
    APP.chart.options.plugins.tooltip.backgroundColor = light ? 'rgba(255, 255, 255, 0.96)' : 'rgba(15, 23, 42, 0.95)';
    APP.chart.options.plugins.tooltip.titleColor = light ? '#0f172a' : '#f1f5f9';
    APP.chart.options.plugins.tooltip.bodyColor = light ? '#475569' : '#94a3b8';
    APP.chart.options.plugins.tooltip.borderColor = light ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';

    APP.chart.update('active');
}

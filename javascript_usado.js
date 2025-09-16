// ---------- FUNÇÕES PRINCIPAIS ----------

// Atualiza KPIs principais (faturamento, clientes, pedidos)
function updateKPIs() {
    const revenue = (Math.random() * 100000).toFixed(2);
    const customers = Math.floor(Math.random() * 5000) + 1000;
    const orders = Math.floor(Math.random() * 2000) + 200;

    document.getElementById("revenue").textContent = "R$ " + revenue;
    document.getElementById("customers").textContent = customers;
    document.getElementById("orders").textContent = orders;
}

// Atualiza gráfico de vendas
function updateSalesChart() {
    const ctx = document.getElementById("salesChart").getContext("2d");

    const salesData = {
        labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
        datasets: [{
            label: "Vendas",
            data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 500) + 50),
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            tension: 0.3,
            fill: true
        }]
    };

    if (window.salesChartInstance) {
        window.salesChartInstance.data = salesData;
        window.salesChartInstance.update();
    } else {
        window.salesChartInstance = new Chart(ctx, {
            type: "line",
            data: salesData,
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
}

// Atualiza metas (progresso)
function updateGoals() {
    const goals = [
        { id: "goal-revenue", value: Math.floor(Math.random() * 100) },
        { id: "goal-customers", value: Math.floor(Math.random() * 100) },
        { id: "goal-orders", value: Math.floor(Math.random() * 100) }
    ];

    goals.forEach(goal => {
        const progress = document.getElementById(goal.id);
        progress.style.width = goal.value + "%";
        progress.textContent = goal.value + "%";
    });
}

// Atualiza lista de produtos mais vendidos
function updateTopProducts() {
    const products = [
        "Produto A", "Produto B", "Produto C", "Produto D", "Produto E"
    ];

    let productHTML = "";
    products.forEach(prod => {
        const sales = Math.floor(Math.random() * 500) + 10;
        productHTML += `
            <div class="flex justify-between bg-gray-100 rounded-lg p-2 mb-1">
                <span>${prod}</span>
                <span>${sales} vendas</span>
            </div>`;
    });

    document.getElementById("top-products-list").innerHTML = productHTML;
}

// Atualiza tráfego
function updateTraffic() {
    const traffic = {
        visits: Math.floor(Math.random() * 10000) + 5000,
        unique: Math.floor(Math.random() * 5000) + 2000,
        bounce: (Math.random() * 50).toFixed(2) + "%"
    };

    document.getElementById("visits").textContent = traffic.visits;
    document.getElementById("unique").textContent = traffic.unique;
    document.getElementById("bounce").textContent = traffic.bounce;
}

// Atualiza alertas
function updateAlerts() {
    const alerts = [
        "Vendas abaixo da média em determinado produto.",
        "Tráfego aumentou 20% na última hora.",
        "Novo cliente VIP cadastrado.",
        "Produto em falta no estoque."
    ];

    const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
    document.getElementById("alerts").innerHTML = "<p>" + randomAlert + "</p>";
}

// ---------- EXTRA ----------

// Notificação rápida
function notify(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

// Liga/desliga auto refresh
let autoRefresh = true;
let refreshInterval;

function toggleAutoRefresh() {
    autoRefresh = !autoRefresh;

    if (autoRefresh) {
        refreshInterval = setInterval(refreshData, 5000);
        notify("Auto atualização ligada");
    } else {
        clearInterval(refreshInterval);
        notify("Auto atualização desligada");
    }
}

// Troca de período (ex: hoje, semana, mês)
function changePeriod(period) {
    notify("Período alterado para: " + period);
    refreshData();
}

// ---------- FUNÇÃO GERAL ----------

function refreshData() {
    updateKPIs();
    updateSalesChart();
    updateGoals();
    updateTopProducts();
    updateTraffic();
    updateAlerts();
}

// ---------- BOOT ----------

document.addEventListener("DOMContentLoaded", () => {
    refreshData();
    refreshInterval = setInterval(refreshData, 5000);
});

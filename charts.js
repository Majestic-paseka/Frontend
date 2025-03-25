// Данные для графиков (пока просто заглушки)
const beeData = [50, 48, 52, 47, 55, 53];  // Динамика семей
const flowerYield = [100, 120, 110, 130, 125, 140];  // Урожайность

// Месяцы для оси X
const labels = ["Янв", "Фев", "Март", "Апр", "Май", "Июнь"];

// Функция создания графика
function createChart(ctx, label, data, color) {
    new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderColor: color,
                borderWidth: 2,
                fill: false,
                pointBackgroundColor: color,
                pointRadius: 5,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

// Создание графиков
document.addEventListener("DOMContentLoaded", function () {
    createChart(document.getElementById("beeChart").getContext("2d"),
                "Пчелиные семьи", beeData, "gold");
    
    createChart(document.getElementById("flowerChart").getContext("2d"),
                "Урожайность (кг)", flowerYield, "green");
});

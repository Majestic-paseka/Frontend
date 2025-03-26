const ctx1 = document.getElementById('beeChart').getContext('2d');
const ctx2 = document.getElementById('flowerChart').getContext('2d');

const beeChart = new Chart(ctx1, {
    type: 'line', // Линейный график для прироста пчел
    data: {
        labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь'],
        datasets: [{
            label: 'Количество пчелиных семей',
            data: [50, 55, 53, 60, 65, 70],
            borderColor: '#FFC107', // Медовый жёлтый
            backgroundColor: 'rgba(255, 193, 7, 0.2)',
            borderWidth: 3,
            pointBackgroundColor: '#212121', // Точки на графике черные
            pointBorderColor: '#FFC107',
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#212121' // Чёрный цвет текста в легенде
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#212121' } // Чёрный текст оси X
            },
            y: {
                ticks: { color: '#212121' } // Чёрный текст оси Y
            }
        }
    }
});

const flowerChart = new Chart(ctx2, {
    type: 'bar', // Столбчатый график для урожайности цветов
    data: {
        labels: ['Душистый горошек', 'Крокус', 'Мак', 'Подсолнух', 'Синий яркоцвет', 'Сказочная роза', 'Тюльпан'],
        datasets: [{
            label: 'Урожайность цветов (кг)',
            data: [200, 300, 250, 400, 180, 240, 50],
            backgroundColor: '#FFA000', // Тёмно-жёлтые столбцы
            borderColor: '#212121', // Чёрная обводка
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#212121' // Чёрный цвет текста в легенде
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#212121' } // Чёрный текст оси X
            },
            y: {
                ticks: { color: '#212121' } // Чёрный текст оси Y
            }
        }
    }
});
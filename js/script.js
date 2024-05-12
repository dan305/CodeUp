
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const container = document.querySelector('.carousel-container');

function moveCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  } else if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  const offset = currentIndex * items[0].offsetWidth;
  container.style.transform = `translateX(-${offset}px)`;
}

// Define chart options
const maxValor = 100;

const chartOptions = {
    chart: {
        type: 'area',
        height: 180,
        toolbar: { show: false }, // Ocultar la barra de herramientas del gráfico
        zoom: { enabled: false } // Desactivar el zoom del gráfico
    },
    colors: ['#3498db'], // Poner el color del gráfico
    series: [{
        name: '',
        data: [
            { x: 'Competencia a', y: 10 },
            { x: 'Competencia b', y: 84 },
            { x: 'Competencia c', y: 43 },
            { x: 'Competencia d', y: 51 },
            { x: 'Competencia e', y: 20 },
            { x: 'Code Up', y: maxValor }
        ]
    }],
    dataLabels: { enabled: false }, // Ocultar las etiquetas de datos del gráfico
    stroke: { width: 2, curve: 'smooth' }, // Establecer las propiedades del trazo del gráfico
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 90, 100] // Establecer los puntos de parada del degradado del gráfico
        }
    },
    markers: {
        size: 10, // Establecer el tamaño de los marcadores
        colors: ['#3498db'], // Establecer el color de los marcadores
        hover: {
            sizeOffset: 4 // Establecer el desplazamiento del tamaño de los marcadores al pasar el mouse sobre ellos
        }
    },
    xaxis: {
        type: 'category', // Establecer el tipo de datos del eje x como categorías
        labels: {
            style: {
                colors: '#75C8E7', // Establecer el color de los textos del eje x
                size: 10,
                fontFamily: 'Poppins-Italic'
            },
            formatter: function(val) {
                if (val === 'TU AGENCIA') {
                    return 'TU AGENCIA';
                }
                return val;
            }
        }
    },
    yaxis: { show: true }, // Ocultar el eje y del gráfico
    grid: {
        borderColor: 'rgba(0, 0, 0, 0)', // Establecer el color del borde de la cuadrícula del gráfico
        padding: { top: -30, bottom: -8, left: 12, right: 12 } // Establecer el relleno de la cuadrícula del gráfico
    },
    tooltip: {
        enabled: true, // Habilitar el tooltip del gráfico
        y: { formatter: value => `${value}` }, // Establecer el formato del tooltip del eje y
        style: { fontFamily: 'Poppins-ExtraBold' } // Establecer la fuente del tooltip del gráfico
    }
};

// Create new ApexCharts instance with chart options and render it
const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();


document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});

function toggleArrow(question) {
    const arrow = question.querySelector('.fa-arrow-up');
    arrow.classList.toggle('arrow-down');
}

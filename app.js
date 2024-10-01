document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.querySelector('#project-1 .read-more');
    const moreText = document.querySelector('#project-1 .more-text');

    readMoreBtn.addEventListener('click', () => {
        if (moreText.style.display === 'none') {
            moreText.style.display = 'inline';
            readMoreBtn.textContent = 'Read Less'; 
        } else {
            moreText.style.display = 'none'; 
            readMoreBtn.textContent = 'Read More'; 
        }
    });
});
 // No.2
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var changeBgBtn = document.getElementById('project-2').querySelector('.change-bg');
var projectContainer = document.getElementById('project-2');

changeBgBtn.addEventListener('click', function() 
{
    projectContainer.style.backgroundColor = getRandomColor();
});

// No.3

// No.4

var startProgressBtn = document.querySelector('#project-4 .start-progress');
var resetProgressBtn = document.querySelector('#project-4 .reset-progress');
var progressBar = document.getElementById('progress-bar');

var interval;

startProgressBtn.addEventListener('click', function() {
    let width = 0; 
    progressBar.style.width = '0%';
    
    progressBar.style.display = 'block';
    resetProgressBtn.style.display = 'inline-block';
    startProgressBtn.style.display = 'none';

    interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%'; 
        }
    }, 100); 
});

resetProgressBtn.addEventListener('click', function() {
    clearInterval(interval);
    progressBar.style.width = '0%';

    resetProgressBtn.style.display = 'none';
    startProgressBtn.style.display = 'inline-block';
});


// No 5

var searchButton = document.querySelector('#project-5 .search-button');
var clearButton = document.querySelector('#project-5 .clear-button');
var searchInput = document.getElementById('search-input');
var contentDiv = document.querySelector('#project-5 .content');

searchInput.addEventListener('focus', function() {
    contentDiv.style.display = 'block'; 
});

searchButton.addEventListener('click', function() {
    var searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        return;
    }

    var regex = new RegExp(searchTerm, 'gi');
    contentDiv.innerHTML = contentDiv.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');

    contentDiv.innerHTML = contentDiv.innerHTML.replace(regex, function(match) {
        return '<span class="highlight">' + match + '</span>';
    });
});

clearButton.addEventListener('click', function() {
    searchInput.value = '';

    contentDiv.innerHTML = contentDiv.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');

    contentDiv.style.display = 'none';
});

// No.6 Object Slider
var slides = document.querySelectorAll('#project-6 .slide');
var prevIcon = document.querySelector('#project-6 .prev-icon');
var nextIcon = document.querySelector('#project-6 .next-icon');

var currentSlide = 0;

function updateSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

updateSlide();

nextIcon.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

prevIcon.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

// No.7 
const totalPages = 5;

const numericPagination = document.querySelector('.numeric-pagination');
for (let i = 1; i <= totalPages; i++) {
    let pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.classList.add('page-btn');
    if (i === 1) pageButton.classList.add('active');
    pageButton.addEventListener('click', function() {
        updateActiveButton(numericPagination, i - 1);
    });
    numericPagination.appendChild(pageButton);
}

const bulletPagination = document.querySelector('.bullet-pagination');
for (let i = 1; i <= totalPages; i++) {
    let bullet = document.createElement('span');
    bullet.classList.add('bullet');
    if (i === 1) bullet.classList.add('active');
    bullet.addEventListener('click', function() {
        updateActiveBullet(bulletPagination, i - 1);
    });
    bulletPagination.appendChild(bullet);
}

function updateActiveButton(container, activeIndex) {
    const buttons = container.querySelectorAll('button');
    buttons.forEach((btn, index) => {
        if (index === activeIndex) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateActiveBullet(container, activeIndex) {
    const bullets = container.querySelectorAll('span');
    bullets.forEach((bullet, index) => {
        if (index === activeIndex) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

// NO.8 Form Validation

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';
    errorMessage.style.display = 'none';

    if (!validateEmail(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        emailInput.focus(); 
    } else {
        alert('Email is valid!');
        emailInput.value = ''; 
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// No.9 Task List
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// 10 Build Table

document.getElementById('generate-table').addEventListener('click', function() {
    const rowInput = document.getElementById('row-input');
    const colInput = document.getElementById('col-input');
    const tableContainer = document.getElementById('table-container');

    tableContainer.innerHTML = '';

    const rows = parseInt(rowInput.value);
    const cols = parseInt(colInput.value);

    if (rows > 0 && cols > 0) {
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');

        for (let i = 1; i <= cols; i++) {
            const th = document.createElement('th');
            th.textContent = `Header ${i}`;
            headerRow.appendChild(th);
        }
        table.appendChild(headerRow);

        for (let i = 1; i <= rows; i++) {
            const tr = document.createElement('tr');
            for (let j = 1; j <= cols; j++) {
                const td = document.createElement('td');
                td.textContent = `Row ${i}, Col ${j}`;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        tableContainer.appendChild(table);
    } else {
        alert('Please enter valid numbers for rows and columns.'); 
    }
});

document.getElementById('clear-table').addEventListener('click', function() {
    document.getElementById('row-input').value = '';
    document.getElementById('col-input').value = ''; 
    document.getElementById('table-container').innerHTML = ''; 
});

// 11. Column 
document.getElementById('generate-columns').addEventListener('click', function() {
    const columnCountInput = document.getElementById('column-count');
    const columnsContainer = document.getElementById('columns-container');

    columnsContainer.innerHTML = '';

    const columnCount = parseInt(columnCountInput.value);

    if (columnCount > 0) {
        for (let i = 1; i <= columnCount; i++) {
            const columnDiv = document.createElement('div');
            columnDiv.className = 'column';
            columnDiv.textContent = `Column ${i}`; 
            columnsContainer.appendChild(columnDiv); 
        }
    } else {
        alert('Please enter a valid number for columns.');
    }
});

document.getElementById('clear-columns').addEventListener('click', function() {
    document.getElementById('column-count').value = '';
    document.getElementById('columns-container').innerHTML = ''; 
});

// No.12 Animation
document.getElementById('animate-name').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input');
    const nameDisplay = document.getElementById('name-display');

    nameInput.style.display = 'none'; 
    this.style.display = 'none'; 

    nameDisplay.innerHTML = '';

    const name = nameInput.value.trim();
    if (name) {
        nameDisplay.textContent = name;
        nameDisplay.classList.add('rotate'); 
        nameDisplay.style.opacity = '1'; 

        setTimeout(() => {
            nameDisplay.classList.remove('rotate');
            nameDisplay.style.opacity = '0';
            setTimeout(() => {
                nameInput.style.display = '';
                document.getElementById('animate-name').style.display = '';
                nameDisplay.innerHTML = ''; 
            }, 500); 
        }, 5000); 
    } else {
        alert('Please enter your name.');
    }
});

// 13. Timer

let timer;
let isCountingDown = true;

document.getElementById('start-timer').addEventListener('click', function() {
    const timerInput = document.getElementById('timer-input');
    const timerDisplay = document.getElementById('timer-display');
    
    const time = parseInt(timerInput.value, 10);
    if (isNaN(time) || time < 0) {
        alert('Please enter a valid positive number for seconds.');
        return;
    }

    timerInput.style.display = 'none'; 
    this.style.display = 'none'; 

    let remainingTime = time; 

    timerDisplay.innerHTML = remainingTime;

    const updateTimer = () => {
        if (isCountingDown) {
            if (remainingTime > 0) {
                remainingTime--;
            } else {
                clearInterval(timer);
                alert('Countdown finished!');
                resetTimer();
                return;
            }
        } else {
            remainingTime++;
        }

        timerDisplay.innerHTML = remainingTime;
    };

    timer = setInterval(updateTimer, 1000); 
});

document.getElementById('stop-timer').addEventListener('click', function() {
    clearInterval(timer);
    resetTimer(); 
});

const resetTimer = () => {
    document.getElementById('timer-input').style.display = '';
    document.getElementById('start-timer').style.display = ''; 
    document.getElementById('timer-display').innerHTML = '0'; 
    isCountingDown = true; 
};

// 14. Date Countdown
let countdownTimer; 

document.getElementById('date-input').addEventListener('focus', function() {
    document.getElementById('countdown-display').style.display = 'none';
});

document.getElementById('start-countdown').addEventListener('click', function() {
    const dateInput = document.getElementById('date-input');
    const countdownDisplay = document.getElementById('countdown-display');
    const stopButton = document.getElementById('stop-countdown');
    
    const deadline = new Date(dateInput.value).getTime();
    
    if (isNaN(deadline)) {
        alert('Please select a valid date and time.');
        return;
    }

    dateInput.style.display = 'none';
    this.style.display = 'none';
    stopButton.style.display = 'inline';
    countdownDisplay.style.display = 'block';
    const updateCountdown = () => {
        const now = new Date().getTime();
        const remainingTime = deadline - now;

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (remainingTime < 0) {
            clearInterval(countdownTimer);
            countdownDisplay.innerHTML = "EXPIRED";
            resetCountdown();
        }
    };

    countdownTimer = setInterval(updateCountdown, 1000);
});

document.getElementById('stop-countdown').addEventListener('click', function() {
    clearInterval(countdownTimer);
    resetCountdown(); 
});

const resetCountdown = () => {
    document.getElementById('date-input').style.display = '';
    document.getElementById('start-countdown').style.display = ''; 
    document.getElementById('stop-countdown').style.display = 'none';
    document.getElementById('countdown-display').innerHTML = 'Time remaining will be displayed here.';
    document.getElementById('countdown-display').style.display = 'none'; 
};

// 15. AutoComplete Box

const suggestionsList = document.getElementById('suggestions');
const autocompleteInput = document.getElementById('autocomplete-input');

const suggestions = [
    'Apple',
    'Banana',
    'Blueberry',
    'Cherry',
    'Grape',
    'Lemon',
    'Mango',
    'Orange',
    'Peach',
    'Strawberry',
    'Watermelon'
];

autocompleteInput.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    
    suggestionsList.innerHTML = '';

    if (!inputValue) {
        suggestionsList.style.display = 'none';
        return;
    }

    const filteredSuggestions = suggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(inputValue)
    );

    if (filteredSuggestions.length > 0) {
        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = suggestion;
            suggestionItem.addEventListener('click', function() {
                autocompleteInput.value = suggestion;
                suggestionsList.innerHTML = ''; 
                suggestionsList.style.display = 'none'; 
            });
            suggestionsList.appendChild(suggestionItem);
        });
        suggestionsList.style.display = 'block'; 
    } else {
        suggestionsList.style.display = 'none'; 
    }
});

document.addEventListener('click', function(event) {
    if (!suggestionsList.contains(event.target) && event.target !== autocompleteInput) {
        suggestionsList.style.display = 'none';
    }
});

// 16 Background Color

const colorSelect = document.getElementById('color-select');
const project16 = document.getElementById('project-16'); 

colorSelect.addEventListener('change', function() {
    const selectedColor = this.value;

    if (selectedColor) {
        project16.style.backgroundColor = selectedColor; 
    } else {
        project16.style.backgroundColor = '';
    }
});

// 17.Background Swap

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

document.getElementById('swap-btn').addEventListener('click', function() {
    let tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;
});

// 18. Title Change
let button = document.getElementById('start-stop-btn');
let output = document.getElementById('time-secs');
let startTime;
let isRunning = false;

button.addEventListener('click', function() {
    if (!isRunning) {
        // Start timer
        startTime = new Date().getTime();
        button.textContent = "Stop";
        isRunning = true;
    } else {
        // Stop timer 
        let endTime = new Date().getTime();
        let timeDiff = (endTime - startTime) / 1000; // Convert milliseconds to seconds
        output.textContent = timeDiff.toFixed(2); // Display time in seconds
        button.textContent = "Start";
        isRunning = false;
    }
});

// 19. Image swap text
const containers = document.querySelectorAll('.container');

containers.forEach(container => {
    const textElement = container.querySelector('.text');
    const imgElement = container.querySelector('img');

    container.addEventListener('mouseenter', function() {
        textElement.style.display = 'none';
        imgElement.style.display = 'block';
    });

    container.addEventListener('mouseleave', function() {
        textElement.style.display = 'block';
        imgElement.style.display = 'none';
    });
});

// 20. Image Control

const rangeControl = document.getElementById('range-control');
const image = document.getElementById('image');

rangeControl.addEventListener('input', function() {
    const blurValue = rangeControl.value;
    image.style.filter = `blur(${blurValue / 10}px)`;
    image.style.opacity = 1 - blurValue / 100; 
});

// 21. Lazy Load

document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('.lazy');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.onload = () => {
                    img.style.opacity = 1;
                };
                observer.unobserve(img); 
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});

// 22 Particlejs
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});












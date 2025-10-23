// media_script.js - простой код для видео карусели

// Получаем элементы со страницы
const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const timeDisplay = document.getElementById('timeDisplay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const videoTitle = document.getElementById('videoTitle');
const videoCounter = document.getElementById('videoCounter');

// Текущий номер видео
let currentVideoIndex = 0;

// Функция для загрузки видео
function loadVideo(index) {
    // Получаем данные видео из JSON
    const videoData = videoList[index];
    
    // Устанавливаем новое видео
    video.src = videoData.src;
    videoTitle.textContent = videoData.title;
    videoCounter.textContent = (index + 1) + '/' + videoList.length;
    
    // Сбрасываем кнопки и прогресс
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
    progressBar.style.width = '0%';
    timeDisplay.textContent = '0:00 / 0:00';
    
    // Загружаем видео
    video.load();
}

// Функция для воспроизведения
playBtn.addEventListener('click', function() {
    video.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
});

// Функция для паузы
pauseBtn.addEventListener('click', function() {
    video.pause();
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
});

// Обновление прогресс-бара
video.addEventListener('timeupdate', function() {
    // Вычисляем прогресс
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = progress + '%';
    
    // Форматируем время
    const currentMinutes = Math.floor(video.currentTime / 60);
    const currentSeconds = Math.floor(video.currentTime % 60);
    const totalMinutes = Math.floor(video.duration / 60);
    const totalSeconds = Math.floor(video.duration % 60);
    
    // Обновляем отображение времени
    timeDisplay.textContent = 
        currentMinutes + ':' + (currentSeconds < 10 ? '0' : '') + currentSeconds + 
        ' / ' + 
        totalMinutes + ':' + (totalSeconds < 10 ? '0' : '') + totalSeconds;
});

// Перемотка при клике на прогресс-бар
progressContainer.addEventListener('click', function(e) {
    const rect = progressContainer.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    video.currentTime = clickPosition * video.duration;
});

// Следующее видео
nextBtn.addEventListener('click', function() {
    currentVideoIndex++;
    if (currentVideoIndex >= videoList.length) {
        currentVideoIndex = 0; // Возвращаемся к первому видео
    }
    loadVideo(currentVideoIndex);
});

// Предыдущее видео
prevBtn.addEventListener('click', function() {
    currentVideoIndex--;
    if (currentVideoIndex < 0) {
        currentVideoIndex = videoList.length - 1; // Переходим к последнему видео
    }
    loadVideo(currentVideoIndex);
});

// Загружаем первое видео при запуске
loadVideo(currentVideoIndex);
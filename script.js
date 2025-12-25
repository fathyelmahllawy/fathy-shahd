// 1. العداد من تاريخ 29 مايو 2022
const start = new Date("2022-05-29");
function updateCounter() {
    const diff = Math.floor((new Date() - start) / (1000 * 60 * 60 * 24));
    const dayElement = document.getElementById("days-count");
    if(dayElement) dayElement.innerText = diff + " days ❤️";
}
updateCounter();

// 2. سلايدر الصور العادية (20 صورة) - بنظام الأقواس img (1)
let currentImg = 1;
const totalImgs = 20; 

function moveSlide(n) {
    currentImg += n;
    if (currentImg > totalImgs) currentImg = 1;
    if (currentImg < 1) currentImg = totalImgs;
    
    // التعديل هنا لقرأة القوس والمسافة
    document.getElementById('main-gallery-img').src = `images/img (${currentImg}).jpg`;
}

// 3. سلايدر الشات (10 صور) - بنظام الأقواس chat (1)
let currentChat = 1;
const totalChats = 10;

function moveChat(n) {
    currentChat += n;
    if (currentChat > totalChats) currentChat = 1;
    if (currentChat < 1) currentChat = totalChats;
    
    // التعديل هنا لقرأة القوس والمسافة
    document.getElementById('main-chat-img').src = `images/chat (${currentChat}).jpg`;
}

// 4. الموسيقى
let audio = document.getElementById("bgMusic");
function toggleMusic() {
    audio.paused ? audio.play() : audio.pause();
}
// تشغيل مع أول ضغطة في الموقع
document.addEventListener('click', () => { 
    if(audio) audio.play(); 
}, {once: true});
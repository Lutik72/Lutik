let Name = prompt("Добро пожаловать! Как вас зовут?");
alert("Приятно познакомиться, " + Name)
function showAlert() { alert("Отличный выбор, " + Name); } 

document.addEventListener("DOMContentLoaded", function() {
console.log("страница загрузилась");
});

    let btn1 = document.getElementById('1');
    let btn2 = document.getElementById('2');
    let btn3 = document.getElementById('3');
    btn1.addEventListener('click', function()
    { console.log('Выбран капучино');
    }); 
    btn2.addEventListener('click', function() 
    { console.log('Выбран латте'); 
    }); 
    btn3.addEventListener('click', function() 
    { console.log('Выбран горячий шоколад');
    });

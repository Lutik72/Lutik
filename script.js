// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Парсим данные из dataProducts
    const products = JSON.parse(dataProducts);
    const cartBox = document.querySelector('.cart-box');
    
    // Очищаем контейнер на случай, если там есть статический контент
    cartBox.innerHTML = '';
    
    // Создаем карточку для каждого товара
    products.forEach(product => {
        // Создаем основной элемент item
        const item = document.createElement('div');
        item.className = 'item';
        
        // Создаем изображение
        const img = document.createElement('img');
        img.src = product.url;
        img.alt = product.name;
        
        // Создаем контейнер для контента
        const itemContent = document.createElement('div');
        itemContent.className = 'item-content';
        
        // Создаем заголовок
        const heading = document.createElement('h3');
        heading.className = 'item-heading';
        heading.innerHTML = `<b>${product.name}</b>`;
        
        // Создаем цену
        const price = document.createElement('p');
        price.className = 'item-text';
        price.innerHTML = `Price: <span class="item-color">$${product.price}</span>`;
        
        // Создаем цвет
        const color = document.createElement('p');
        color.className = 'item-text';
        color.textContent = `Color: ${product.color}`;
        
        // Создаем размер
        const size = document.createElement('p');
        size.className = 'item-text';
        size.textContent = `Size: ${product.size}`;
        
        // Создаем блок количества с input
        const quantityDiv = document.createElement('div');
        quantityDiv.className = 'item-text';
        quantityDiv.textContent = 'Quantity: ';
        
        const quantityInput = document.createElement('input');
        quantityInput.type = 'text';
        quantityInput.className = 'item-input';
        quantityInput.value = product.quantity;
        
        quantityDiv.appendChild(quantityInput);
        
        // Собираем структуру
        itemContent.appendChild(heading);
        itemContent.appendChild(price);
        itemContent.appendChild(color);
        itemContent.appendChild(size);
        itemContent.appendChild(quantityDiv);
        
        item.appendChild(img);
        item.appendChild(itemContent);
        
        // Добавляем карточку в контейнер
        cartBox.appendChild(item);
    });
});
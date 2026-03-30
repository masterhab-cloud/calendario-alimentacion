// Base de datos de alimentos para bebés
const FOODS_DATABASE = {
    fruits: [
        { name: 'Manzana', category: 'fruits', allergen: false, age: '6m+', icon: '🍎' },
        { name: 'Plátano', category: 'fruits', allergen: false, age: '6m+', icon: '🍌' },
        { name: 'Pera', category: 'fruits', allergen: false, age: '6m+', icon: '🍐' },
        { name: 'Peach', category: 'fruits', allergen: false, age: '6m+', icon: '🍑' },
        { name: 'Naranja', category: 'fruits', allergen: true, age: '8m+', icon: '🍊' },
        { name: 'Mandarina', category: 'fruits', allergen: true, age: '8m+', icon: '🍊' },
        { name: 'Fresa', category: 'fruits', allergen: false, age: '8m+', icon: '🍓' },
        { name: 'Arándanos', category: 'fruits', allergen: false, age: '8m+', icon: '🫐' },
        { name: 'Melocotón', category: 'fruits', allergen: false, age: '6m+', icon: '🍑' },
        { name: 'Sandía', category: 'fruits', allergen: false, age: '8m+', icon: '🍉' },
        { name: 'Melón', category: 'fruits', allergen: false, age: '8m+', icon: '🍈' },
        { name: 'Kiwi', category: 'fruits', allergen: true, age: '8m+', icon: '🥝' },
        { name: 'Mango', category: 'fruits', allergen: false, age: '8m+', icon: '🥭' },
        { name: 'Papaya', category: 'fruits', allergen: false, age: '8m+', icon: '🥭' }
    ],
    vegetables: [
        { name: 'Zanahoria', category: 'vegetables', allergen: false, age: '6m+', icon: '🥕' },
        { name: 'Calabaza', category: 'vegetables', allergen: false, age: '6m+', icon: '🎃' },
        { name: 'Patata', category: 'vegetables', allergen: false, age: '6m+', icon: '🥔' },
        { name: 'Batata', category: 'vegetables', allergen: false, age: '6m+', icon: '🍠' },
        { name: 'Guisantes', category: 'vegetables', allergen: false, age: '6m+', icon: '🟢' },
        { name: 'Brócoli', category: 'vegetables', allergen: false, age: '8m+', icon: '🥦' },
        { name: 'Espinacas', category: 'vegetables', allergen: false, age: '6m+', icon: '🥬' },
        { name: 'Judías verdes', category: 'vegetables', allergen: false, age: '8m+', icon: '🟩' },
        { name: 'Pimiento', category: 'vegetables', allergen: false, age: '8m+', icon: '🫑' },
        { name: 'Tomate', category: 'vegetables', allergen: false, age: '8m+', icon: '🍅' },
        { name: 'Calabacín', category: 'vegetables', allergen: false, age: '8m+', icon: '🥒' },
        { name: 'Cebolla', category: 'vegetables', allergen: false, age: '8m+', icon: '🧅' },
        { name: 'Ajo', category: 'vegetables', allergen: false, age: '8m+', icon: '🧄' },
        { name: 'Champiñones', category: 'vegetables', allergen: false, age: '8m+', icon: '🍄' }
    ],
    proteins: [
        { name: 'Pollo', category: 'proteins', allergen: false, age: '6m+', icon: '🍗' },
        { name: 'Pavo', category: 'proteins', allergen: false, age: '6m+', icon: '🦃' },
        { name: 'Ternera', category: 'proteins', allergen: false, age: '8m+', icon: '🥩' },
        { name: 'Cordero', category: 'proteins', allergen: false, age: '8m+', icon: '🍖' },
        { name: 'Pescado blanco', category: 'proteins', allergen: true, age: '8m+', icon: '🐟' },
        { name: 'Salmón', category: 'proteins', allergen: true, age: '8m+', icon: '🐟' },
        { name: 'Merluza', category: 'proteins', allergen: true, age: '8m+', icon: '🐟' },
        { name: 'Gambas', category: 'proteins', allergen: true, age: '12m+', icon: '🦐' },
        { name: 'Langostinos', category: 'proteins', allergen: true, age: '12m+', icon: '🦐' },
        { name: 'Huevo', category: 'proteins', allergen: true, age: '8m+', icon: '🥚' },
        { name: 'Lentejas', category: 'proteins', allergen: false, age: '8m+', icon: '🟤' },
        { name: 'Garbanzos', category: 'proteins', allergen: false, age: '8m+', icon: '🟤' },
        { name: 'Tofu', category: 'proteins', allergen: true, age: '8m+', icon: '🟦' }
    ],
    grains: [
        { name: 'Arroz', category: 'grains', allergen: false, age: '6m+', icon: '🍚' },
        { name: 'Avena', category: 'grains', allergen: false, age: '6m+', icon: '🥣' },
        { name: 'Cebada', category: 'grains', allergen: false, age: '8m+', icon: '🌾' },
        { name: 'Trigo', category: 'grains', allergen: true, age: '8m+', icon: '🌾' },
        { name: 'Pasta', category: 'grains', allergen: true, age: '8m+', icon: '🍝' },
        { name: 'Pan', category: 'grains', allergen: true, age: '8m+', icon: '🍞' },
        { name: 'Galletas', category: 'grains', allergen: true, age: '8m+', icon: '🍪' },
        { name: 'Couscous', category: 'grains', allergen: false, age: '8m+', icon: '🌾' },
        { name: 'Quinoa', category: 'grains', allergen: false, age: '8m+', icon: '🌾' },
        { name: 'Mijo', category: 'grains', allergen: false, age: '8m+', icon: '🌾' }
    ],
    dairy: [
        { name: 'Yogur natural', category: 'dairy', allergen: true, age: '8m+', icon: '🥛' },
        { name: 'Yogur de frutas', category: 'dairy', allergen: true, age: '8m+', icon: '🥛' },
        { name: 'Queso fresco', category: 'dairy', allergen: true, age: '8m+', icon: '🧀' },
        { name: 'Queso cottage', category: 'dairy', allergen: true, age: '8m+', icon: '🧀' },
        { name: 'Leche de vaca', category: 'dairy', allergen: true, age: '12m+', icon: '🥛' },
        { name: 'Leche de fórmula', category: 'dairy', allergen: false, age: '0m+', icon: '🍼' }
    ],
    nuts: [
        { name: 'Mantequilla de maní', category: 'nuts', allergen: true, age: '12m+', icon: '🥜' },
        { name: 'Almendras molidas', category: 'nuts', allergen: true, age: '12m+', icon: '🥜' },
        { name: 'Nueces molidas', category: 'nuts', allergen: true, age: '12m+', icon: '🥜' },
        { name: 'Avellanas molidas', category: 'nuts', allergen: true, age: '12m+', icon: '🥜' },
        { name: 'Castañas', category: 'nuts', allergen: true, age: '12m+', icon: '🌰' }
    ]
};

// Estado de la aplicación
let currentDate = new Date();
let foodEntries = [];
let currentTab = 'calendar';

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    loadGitHubConfig();
    initCalendar();
    populateFoodSelects();
    renderFoodsCatalog();
    renderAllergensControl();
    renderHistory();
    checkReminders();
    updateSyncStatus();
});

// Gestión de datos
function saveData() {
    localStorage.setItem('babyFoodEntries', JSON.stringify(foodEntries));
}

function loadData() {
    const saved = localStorage.getItem('babyFoodEntries');
    if (saved) {
        foodEntries = JSON.parse(saved);
    }
}

// Sistema de calendario
function initCalendar() {
    renderCalendar();
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Actualizar encabezado
    document.getElementById('current-month').textContent = getMonthName(month);
    document.getElementById('current-year').textContent = year;
    
    // Obtener primer día del mes y número de días
    // Ajustar para que la semana empiece en lunes (0 = lunes, 6 = domingo)
    const firstDay = new Date(year, month, 1).getDay();
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1; // Convertir domingo (0) a 6, otros -1
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Generar grid del calendario
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';
    
    // Días vacíos al principio
    for (let i = 0; i < adjustedFirstDay; i++) {
        grid.innerHTML += '<div></div>';
    }
    
    // Días del mes
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateStr = formatDate(date);
        const dayEntries = getEntriesForDate(dateStr);
        const isToday = date.toDateString() === today.toDateString();
        const isPast = date < today;
        
        let dayHtml = `
            <div class="calendar-day border rounded-lg p-2 cursor-pointer hover:bg-blue-50 ${isToday ? 'bg-blue-100 border-blue-500' : 'border-gray-200'} ${isPast ? '' : 'opacity-50'}"
                 onclick="showDayDetails('${dateStr}')">
                <div class="font-bold text-sm mb-1">${day}</div>
        `;
        
        if (dayEntries.length > 0) {
            dayHtml += '<div class="space-y-1">';
            dayEntries.slice(0, 3).forEach(entry => {
                const food = getFoodInfo(entry.food);
                dayHtml += `
                    <div class="text-xs ${food.allergen ? 'text-red-600 font-bold' : 'text-gray-600'}">
                        ${food.icon} ${entry.food}
                    </div>
                `;
            });
            if (dayEntries.length > 3) {
                dayHtml += `<div class="text-xs text-gray-500">+${dayEntries.length - 3} más</div>`;
            }
            dayHtml += '</div>';
        }
        
        dayHtml += '</div>';
        grid.innerHTML += dayHtml;
    }
}

function getMonthName(month) {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return months[month];
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

function goToToday() {
    currentDate = new Date();
    renderCalendar();
}

// Gestión de alimentos
function getFoodInfo(foodName) {
    for (let category in FOODS_DATABASE) {
        const food = FOODS_DATABASE[category].find(f => f.name === foodName);
        if (food) return food;
    }
    return { name: foodName, category: 'other', allergen: false, age: 'unknown', icon: '🍽️' };
}

function getEntriesForDate(dateStr) {
    return foodEntries.filter(entry => entry.date === dateStr);
}

function populateFoodSelects() {
    const selects = ['quick-food-select', 'modal-food'];
    const allFoods = [];
    
    for (let category in FOODS_DATABASE) {
        allFoods.push(...FOODS_DATABASE[category]);
    }
    
    // Ordenar por mes de recomendación y luego alfabéticamente
    allFoods.sort((a, b) => {
        // Extraer el número del mes del campo age
        const getMonthOrder = (age) => {
            if (age.includes('0m+')) return 0;
            if (age.includes('6m+')) return 6;
            if (age.includes('8m+')) return 8;
            if (age.includes('12m+')) return 12;
            return 999; // Para otros casos
        };
        
        const monthOrderA = getMonthOrder(a.age);
        const monthOrderB = getMonthOrder(b.age);
        
        if (monthOrderA !== monthOrderB) {
            return monthOrderA - monthOrderB;
        }
        
        // Si mismo mes, ordenar alfabéticamente
        return a.name.localeCompare(b.name);
    });
    
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.innerHTML = '<option value="">Seleccionar alimento...</option>';
            
            // Agrupar por mes de recomendación
            let currentMonth = '';
            allFoods.forEach(food => {
                if (food.age !== currentMonth) {
                    currentMonth = food.age;
                    const option = document.createElement('option');
                    option.value = '';
                    option.textContent = `--- ${food.age} ---`;
                    option.disabled = true;
                    option.style.fontWeight = 'bold';
                    option.style.color = '#3B82F6';
                    select.appendChild(option);
                }
                
                const option = document.createElement('option');
                option.value = food.name;
                option.textContent = `${food.icon} ${food.name}`;
                if (food.allergen) {
                    option.classList.add('text-red-600');
                }
                select.appendChild(option);
            });
        }
    });
}

function addFoodToday() {
    const select = document.getElementById('quick-food-select');
    const foodName = select.value;
    
    if (!foodName) {
        showNotification('Por favor selecciona un alimento', 'warning');
        return;
    }
    
    const today = formatDate(new Date());
    const entry = {
        id: Date.now(),
        date: today,
        food: foodName,
        quantity: 'normal',
        reaction: 'none',
        notes: '',
        timestamp: new Date().toISOString()
    };
    
    foodEntries.push(entry);
    saveData();
    renderCalendar();
    renderHistory();
    
    select.value = '';
    showNotification(`${foodName} añadido correctamente`, 'success');
    
    // Verificar si es alérgeno para mostrar recordatorio
    const food = getFoodInfo(foodName);
    if (food.allergen) {
        showNotification(`${foodName} es un alérgeno. Recuerda reintroducirlo periódicamente.`, 'info');
    }
}

function showDayDetails(dateStr) {
    const entries = getEntriesForDate(dateStr);
    if (entries.length === 0) {
        openFoodModal(dateStr);
        return;
    }
    
    // Mostrar detalles del día en un modal
    let details = `<h3 class="text-lg font-bold mb-4">Alimentos del ${dateStr}</h3>`;
    details += '<div class="space-y-2">';
    
    entries.forEach(entry => {
        const food = getFoodInfo(entry.food);
        details += `
            <div class="border rounded p-3 ${food.allergen ? 'border-red-300 bg-red-50' : 'border-gray-200'}">
                <div class="flex justify-between items-start">
                    <div>
                        <span class="font-bold">${food.icon} ${entry.food}</span>
                        ${food.allergen ? '<span class="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded">Alérgeno</span>' : ''}
                        <div class="text-sm text-gray-600">
                            Cantidad: ${getQuantityLabel(entry.quantity)} | 
                            Reacción: ${getReactionLabel(entry.reaction)}
                        </div>
                        ${entry.notes ? `<div class="text-sm text-gray-500 mt-1">${entry.notes}</div>` : ''}
                    </div>
                    <button onclick="deleteEntry(${entry.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    details += '</div>';
    details += `
        <div class="mt-4 flex gap-2">
            <button onclick="openFoodModal('${dateStr}')" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                <i class="fas fa-plus"></i> Añadir alimento
            </button>
            <button onclick="closeModal('day-details')" class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                Cerrar
            </button>
        </div>
    `;
    
    showModal('day-details', details);
}

function openFoodModal(dateStr = null) {
    const modal = document.getElementById('food-modal');
    const dateInput = document.getElementById('modal-date');
    
    if (dateStr) {
        dateInput.value = dateStr;
    } else {
        dateInput.value = formatDate(new Date());
    }
    
    // Resetear formulario
    document.getElementById('modal-food').value = '';
    document.getElementById('modal-quantity').value = 'normal';
    document.getElementById('modal-reaction').value = 'none';
    document.getElementById('modal-notes').value = '';
    
    modal.classList.remove('hidden');
}

function closeFoodModal() {
    document.getElementById('food-modal').classList.add('hidden');
}

function saveFoodEntry() {
    const date = document.getElementById('modal-date').value;
    const food = document.getElementById('modal-food').value;
    const quantity = document.getElementById('modal-quantity').value;
    const reaction = document.getElementById('modal-reaction').value;
    const notes = document.getElementById('modal-notes').value;
    const liked = document.querySelector('input[name="liked"]:checked')?.value || 'neutral';
    
    if (!date || !food) {
        showNotification('Por favor completa la fecha y el alimento', 'warning');
        return;
    }
    
    const entry = {
        id: Date.now(),
        date: date,
        food: food,
        quantity: quantity,
        reaction: reaction,
        liked: liked,
        notes: notes,
        timestamp: new Date().toISOString()
    };
    
    foodEntries.push(entry);
    saveData();
    renderCalendar();
    renderHistory();
    closeFoodModal();
    
    showNotification(`${food} registrado correctamente`, 'success');
    
    // Verificar alérgenos
    const foodInfo = getFoodInfo(food);
    if (foodInfo.allergen) {
        checkReminders();
    }
}

function deleteEntry(entryId) {
    if (confirm('¿Estás seguro de que quieres eliminar este registro?')) {
        foodEntries = foodEntries.filter(entry => entry.id !== entryId);
        saveData();
        renderCalendar();
        renderHistory();
        closeModal('day-details');
        showNotification('Registro eliminado', 'info');
    }
}

// Catálogo de alimentos
function renderFoodsCatalog() {
    const container = document.getElementById('foods-catalog');
    container.innerHTML = '';
    
    // Ordenar categorías por mes de recomendación
    const categoryOrder = {
        'dairy': 0,    // 0m+ (leche de fórmula)
        'fruits': 6,   // 6m+
        'vegetables': 6, // 6m+
        'grains': 6,   // 6m+
        'proteins': 8, // 8m+
        'nuts': 12     // 12m+
    };
    
    const sortedCategories = Object.keys(FOODS_DATABASE).sort((a, b) => {
        return categoryOrder[a] - categoryOrder[b];
    });
    
    sortedCategories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'mb-6';
        
        // Ordenar alimentos dentro de cada categoría por mes y luego alfabéticamente
        const sortedFoods = [...FOODS_DATABASE[category]].sort((a, b) => {
            const getMonthOrder = (age) => {
                if (age.includes('0m+')) return 0;
                if (age.includes('6m+')) return 6;
                if (age.includes('8m+')) return 8;
                if (age.includes('12m+')) return 12;
                return 999;
            };
            
            const monthOrderA = getMonthOrder(a.age);
            const monthOrderB = getMonthOrder(b.age);
            
            if (monthOrderA !== monthOrderB) {
                return monthOrderA - monthOrderB;
            }
            
            return a.name.localeCompare(b.name);
        });
        
        categoryDiv.innerHTML = `
            <h3 class="text-lg font-bold text-gray-800 mb-3">${getCategoryLabel(category)}</h3>
            <div class="grid grid-cols-1 gap-2">
                ${sortedFoods.map(food => `
                    <div class="food-item border rounded-lg p-3 hover:shadow-md cursor-pointer ${food.allergen ? 'border-red-300 bg-red-50' : 'border-gray-200'}"
                         onclick="addFoodFromCatalog('${food.name}')">
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-lg">${food.icon}</span>
                                <span class="font-medium ml-2">${food.name}</span>
                                <span class="text-sm text-gray-500 ml-2">${food.age}</span>
                            </div>
                            ${food.allergen ? '<span class="text-xs bg-red-500 text-white px-2 py-1 rounded allergen-badge">Alérgeno</span>' : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(categoryDiv);
    });
}

function getCategoryLabel(category) {
    const labels = {
        fruits: 'Frutas',
        vegetables: 'Verduras',
        proteins: 'Proteínas',
        grains: 'Cereales',
        dairy: 'Lácteos',
        nuts: 'Frutos Secos'
    };
    return labels[category] || category;
}

function addFoodFromCatalog(foodName) {
    document.getElementById('quick-food-select').value = foodName;
    showTab('calendar');
    showNotification(`${foodName} seleccionado. Haz clic en "Añadir" para registrar.`, 'info');
}

function searchFoods() {
    const searchTerm = document.getElementById('food-search').value.toLowerCase();
    const container = document.getElementById('foods-catalog');
    container.innerHTML = '';
    
    // Ordenar categorías por mes de recomendación
    const categoryOrder = {
        'dairy': 0,    // 0m+ (leche de fórmula)
        'fruits': 6,   // 6m+
        'vegetables': 6, // 6m+
        'grains': 6,   // 6m+
        'proteins': 8, // 8m+
        'nuts': 12     // 12m+
    };
    
    const sortedCategories = Object.keys(FOODS_DATABASE).sort((a, b) => {
        return categoryOrder[a] - categoryOrder[b];
    });
    
    sortedCategories.forEach(category => {
        // Filtrar y ordenar alimentos
        const filteredFoods = FOODS_DATABASE[category].filter(food => 
            food.name.toLowerCase().includes(searchTerm)
        );
        
        if (filteredFoods.length > 0) {
            // Ordenar alimentos filtrados por mes y luego alfabéticamente
            const sortedFoods = filteredFoods.sort((a, b) => {
                const getMonthOrder = (age) => {
                    if (age.includes('0m+')) return 0;
                    if (age.includes('6m+')) return 6;
                    if (age.includes('8m+')) return 8;
                    if (age.includes('12m+')) return 12;
                    return 999;
                };
                
                const monthOrderA = getMonthOrder(a.age);
                const monthOrderB = getMonthOrder(b.age);
                
                if (monthOrderA !== monthOrderB) {
                    return monthOrderA - monthOrderB;
                }
                
                return a.name.localeCompare(b.name);
            });
            
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'mb-6';
            categoryDiv.innerHTML = `
                <h3 class="text-lg font-bold text-gray-800 mb-3">${getCategoryLabel(category)}</h3>
                <div class="grid grid-cols-1 gap-2">
                    ${sortedFoods.map(food => `
                        <div class="food-item border rounded-lg p-3 hover:shadow-md cursor-pointer ${food.allergen ? 'border-red-300 bg-red-50' : 'border-gray-200'}"
                             onclick="addFoodFromCatalog('${food.name}')">
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-lg">${food.icon}</span>
                                    <span class="font-medium ml-2">${food.name}</span>
                                    <span class="text-sm text-gray-500 ml-2">${food.age}</span>
                                </div>
                                ${food.allergen ? '<span class="text-xs bg-red-500 text-white px-2 py-1 rounded allergen-badge">Alérgeno</span>' : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            container.appendChild(categoryDiv);
        }
    });
}

// Control de alérgenos
function renderAllergensControl() {
    const container = document.getElementById('allergens-list');
    container.innerHTML = '';
    
    const allergens = getAllergenFoods();
    
    allergens.forEach(food => {
        const entries = foodEntries.filter(entry => entry.food === food.name);
        const lastEntry = entries.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
        const daysSinceLast = lastEntry ? Math.floor((new Date() - new Date(lastEntry.date)) / (1000 * 60 * 60 * 24)) : null;
        const needsReintroduction = daysSinceLast !== null && daysSinceLast > 7;
        
        const foodDiv = document.createElement('div');
        foodDiv.className = `border rounded-lg p-4 ${needsReintroduction ? 'border-orange-400 bg-orange-50' : 'border-gray-200'}`;
        foodDiv.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <div>
                    <h4 class="font-bold text-lg">${food.icon} ${food.name}</h4>
                    <p class="text-sm text-gray-600">${food.age}</p>
                </div>
                ${needsReintroduction ? '<span class="text-xs bg-orange-500 text-white px-2 py-1 rounded">Requiere reintroducción</span>' : ''}
            </div>
            
            ${lastEntry ? `
                <div class="text-sm text-gray-600 mb-3">
                    <div>Última administración: ${lastEntry.date}</div>
                    <div>Días desde última: ${daysSinceLast}</div>
                    <div>Reacción: ${getReactionLabel(lastEntry.reaction)}</div>
                </div>
            ` : '<div class="text-sm text-gray-500 mb-3">No administrado aún</div>'}
            
            <div class="flex gap-2">
                <button onclick="addFoodFromCatalog('${food.name}')" class="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">
                    <i class="fas fa-plus"></i> Administrar ahora
                </button>
                ${lastEntry ? `
                    <button onclick="showFoodHistory('${food.name}')" class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                        <i class="fas fa-history"></i> Historial
                    </button>
                ` : ''}
            </div>
        `;
        container.appendChild(foodDiv);
    });
    
    checkReminders();
}

function getAllergenFoods() {
    const allergens = [];
    for (let category in FOODS_DATABASE) {
        allergens.push(...FOODS_DATABASE[category].filter(food => food.allergen));
    }
    return allergens.sort((a, b) => a.name.localeCompare(b.name));
}

function checkReminders() {
    const container = document.getElementById('reminders-container');
    container.innerHTML = '';
    
    const allergens = getAllergenFoods();
    const reminders = [];
    
    allergens.forEach(food => {
        const entries = foodEntries.filter(entry => entry.food === food.name);
        if (entries.length > 0) {
            const lastEntry = entries.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
            const daysSinceLast = Math.floor((new Date() - new Date(lastEntry.date)) / (1000 * 60 * 60 * 24));
            
            if (daysSinceLast > 7) {
                reminders.push({
                    food: food,
                    daysSinceLast: daysSinceLast,
                    lastEntry: lastEntry
                });
            }
        }
    });
    
    if (reminders.length > 0) {
        container.innerHTML = `
            <div class="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-6 reminder-alert">
                <h3 class="font-bold text-orange-800 mb-3">
                    <i class="fas fa-bell"></i> Recordatorios de Reintroducción
                </h3>
                <div class="space-y-2">
                    ${reminders.map(reminder => `
                        <div class="flex justify-between items-center bg-white rounded p-3">
                            <div>
                                <span class="font-medium">${reminder.food.icon} ${reminder.food.name}</span>
                                <span class="text-sm text-gray-600 ml-2">
                                    Hace ${reminder.daysSinceLast} días (último: ${reminder.lastEntry.date})
                                </span>
                            </div>
                            <button onclick="addFoodFromCatalog('${reminder.food.name}')" 
                                    class="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600">
                                Administrar ahora
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// Historial
function renderHistory() {
    const container = document.getElementById('history-list');
    const sortedEntries = [...foodEntries].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (sortedEntries.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-8">No hay registros aún</p>';
        return;
    }
    
    container.innerHTML = '';
    let currentDateGroup = null;
    
    sortedEntries.forEach(entry => {
        const food = getFoodInfo(entry.food);
        const entryDate = new Date(entry.date).toLocaleDateString('es-ES');
        
        if (entryDate !== currentDateGroup) {
            currentDateGroup = entryDate;
            const dateHeader = document.createElement('div');
            dateHeader.className = 'text-lg font-bold text-gray-800 mt-6 mb-3 border-b pb-2';
            dateHeader.textContent = entryDate;
            container.appendChild(dateHeader);
        }
        
        const entryDiv = document.createElement('div');
        entryDiv.className = `border rounded-lg p-3 mb-2 ${food.allergen ? 'border-red-300 bg-red-50' : 'border-gray-200'}`;
        entryDiv.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span class="text-lg">${food.icon}</span>
                        <span class="font-medium">${entry.food}</span>
                        ${food.allergen ? '<span class="text-xs bg-red-500 text-white px-2 py-1 rounded">Alérgeno</span>' : ''}
                    </div>
                    <div class="text-sm text-gray-600 mt-1">
                        Cantidad: ${getQuantityLabel(entry.quantity)} | 
                        Reacción: ${getReactionLabel(entry.reaction)}
                    </div>
                    ${entry.notes ? `<div class="text-sm text-gray-500 mt-2">${entry.notes}</div>` : ''}
                </div>
                <div class="flex gap-2">
                    <button onclick="editEntry(${entry.id})" class="text-blue-500 hover:text-blue-700">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteEntry(${entry.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(entryDiv);
    });
}

function filterHistory() {
    const startDate = document.getElementById('history-start').value;
    const endDate = document.getElementById('history-end').value;
    
    if (!startDate || !endDate) {
        showNotification('Por favor selecciona ambas fechas', 'warning');
        return;
    }
    
    const filtered = foodEntries.filter(entry => 
        entry.date >= startDate && entry.date <= endDate
    );
    
    // Renderizar filtrados
    const container = document.getElementById('history-list');
    container.innerHTML = '';
    
    if (filtered.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-8">No hay registros en este período</p>';
        return;
    }
    
    // Usar la misma lógica que renderHistory pero con filtered
    let currentDateGroup = null;
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(entry => {
        const food = getFoodInfo(entry.food);
        const entryDate = new Date(entry.date).toLocaleDateString('es-ES');
        
        if (entryDate !== currentDateGroup) {
            currentDateGroup = entryDate;
            const dateHeader = document.createElement('div');
            dateHeader.className = 'text-lg font-bold text-gray-800 mt-6 mb-3 border-b pb-2';
            dateHeader.textContent = entryDate;
            container.appendChild(dateHeader);
        }
        
        const entryDiv = document.createElement('div');
        entryDiv.className = `border rounded-lg p-3 mb-2 ${food.allergen ? 'border-red-300 bg-red-50' : 'border-gray-200'}`;
        entryDiv.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span class="text-lg">${food.icon}</span>
                        <span class="font-medium">${entry.food}</span>
                        ${food.allergen ? '<span class="text-xs bg-red-500 text-white px-2 py-1 rounded">Alérgeno</span>' : ''}
                    </div>
                    <div class="text-sm text-gray-600 mt-1">
                        Cantidad: ${getQuantityLabel(entry.quantity)} | 
                        Reacción: ${getReactionLabel(entry.reaction)}
                    </div>
                    ${entry.notes ? `<div class="text-sm text-gray-500 mt-2">${entry.notes}</div>` : ''}
                </div>
                <div class="flex gap-2">
                    <button onclick="editEntry(${entry.id})" class="text-blue-500 hover:text-blue-700">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteEntry(${entry.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(entryDiv);
    });
}

function exportHistory() {
    const dataStr = JSON.stringify(foodEntries, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `baby-food-history-${formatDate(new Date())}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('Historial exportado correctamente', 'success');
}

function editEntry(entryId) {
    const entry = foodEntries.find(e => e.id === entryId);
    if (!entry) return;
    
    // Llenar el modal con los datos del entry
    document.getElementById('modal-date').value = entry.date;
    document.getElementById('modal-food').value = entry.food;
    document.getElementById('modal-quantity').value = entry.quantity;
    document.getElementById('modal-reaction').value = entry.reaction;
    document.getElementById('modal-notes').value = entry.notes;
    
    // Establecer el valor del radio button de liked
    if (entry.liked) {
        document.querySelector(`input[name="liked"][value="${entry.liked}"]`).checked = true;
    } else {
        document.querySelector('input[name="liked"][value="neutral"]').checked = true;
    }
    
    // Eliminar el entry actual y abrir el modal
    foodEntries = foodEntries.filter(e => e.id !== entryId);
    document.getElementById('food-modal').classList.remove('hidden');
}

function showFoodHistory(foodName) {
    const entries = foodEntries.filter(entry => entry.food === foodName);
    const sortedEntries = entries.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let historyHtml = `<h3 class="text-lg font-bold mb-4">Historial de ${foodName}</h3>`;
    
    if (sortedEntries.length === 0) {
        historyHtml += '<p class="text-gray-500">No hay registros de este alimento</p>';
    } else {
        historyHtml += '<div class="space-y-2">';
        sortedEntries.forEach(entry => {
            historyHtml += `
                <div class="border rounded p-3">
                    <div class="font-medium">${entry.date}</div>
                    <div class="text-sm text-gray-600">
                        Cantidad: ${getQuantityLabel(entry.quantity)} | 
                        Reacción: ${getReactionLabel(entry.reaction)}
                    </div>
                    ${entry.notes ? `<div class="text-sm text-gray-500 mt-1">${entry.notes}</div>` : ''}
                </div>
            `;
        });
        historyHtml += '</div>';
    }
    
    historyHtml += `
        <div class="mt-4">
            <button onclick="closeModal('food-history')" class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                Cerrar
            </button>
        </div>
    `;
    
    showModal('food-history', historyHtml);
}

// Utilidades
function getQuantityLabel(quantity) {
    const labels = {
        poco: 'Poco',
        normal: 'Normal',
        mucho: 'Mucho'
    };
    return labels[quantity] || quantity;
}

function getReactionLabel(reaction) {
    const labels = {
        none: 'Sin reacción',
        mild: 'Leve',
        moderate: 'Moderada',
        severe: 'Grave'
    };
    return labels[reaction] || reaction;
}

// Sistema de pestañas
function showTab(tabName) {
    // Ocultar todas las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Mostrar la pestaña seleccionada
    document.getElementById(`${tabName}-tab`).classList.remove('hidden');
    
    // Actualizar botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600');
        btn.classList.add('text-gray-600');
    });
    
    const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
    activeBtn.classList.remove('text-gray-600');
    activeBtn.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
    
    currentTab = tabName;
    
    // Actualizar contenido específico de la pestaña
    if (tabName === 'calendar') {
        renderCalendar();
    } else if (tabName === 'allergens') {
        renderAllergensControl();
    } else if (tabName === 'history') {
        renderHistory();
    } else if (tabName === 'summary') {
        renderSummary();
    } else if (tabName === 'sync') {
        updateSyncStatus();
    }
}

// Sistema de modales
function showModal(modalId, content) {
    // Crear modal dinámicamente si no existe
    let modal = document.getElementById(modalId);
    if (!modal) {
        modal = document.createElement('div');
        modal.id = modalId;
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
                <div id="${modalId}-content"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    document.getElementById(`${modalId}-content`).innerHTML = content;
    modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const colors = {
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 reminder-alert`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Funciones de importación/exportación
function exportData() {
    const dataStr = JSON.stringify(foodEntries, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `baby-food-data-${formatDate(new Date())}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('Datos exportados correctamente', 'success');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Validar que los datos importados sean válidos
            if (Array.isArray(importedData)) {
                // Opción 1: Reemplazar todos los datos
                if (confirm('¿Quieres reemplazar todos los datos actuales con los importados?')) {
                    foodEntries = importedData;
                    saveData();
                    renderAll();
                    showNotification('Datos importados correctamente', 'success');
                }
                // Opción 2: Combinar datos (eliminar duplicados)
                else if (confirm('¿Quieres combinar los datos importados con los existentes?')) {
                    const existingIds = new Set(foodEntries.map(entry => entry.id));
                    const newEntries = importedData.filter(entry => !existingIds.has(entry.id));
                    foodEntries = [...foodEntries, ...newEntries];
                    saveData();
                    renderAll();
                    showNotification(`Se añadieron ${newEntries.length} nuevos registros`, 'success');
                }
            } else {
                showNotification('El archivo no contiene datos válidos', 'error');
            }
        } catch (error) {
            showNotification('Error al leer el archivo. Asegúrate de que es un JSON válido.', 'error');
            console.error('Error importing data:', error);
        }
    };
    
    reader.readAsText(file);
    
    // Limpiar el input para poder importar el mismo archivo otra vez
    event.target.value = '';
}

function renderAll() {
    renderCalendar();
    renderHistory();
    if (currentTab === 'summary') {
        renderSummary();
    }
    if (currentTab === 'allergens') {
        renderAllergensControl();
    }
}

// Cerrar modales al hacer clic fuera
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fixed') && event.target.classList.contains('inset-0')) {
        event.target.classList.add('hidden');
    }
});

// Funciones del Summary/Dashboard
function renderSummary() {
    updateSummaryStats();
    renderPreferencesLists();
    renderReactionsSummary();
    renderCharts();
}

function updateSummaryStats() {
    const uniqueFoods = [...new Set(foodEntries.map(entry => entry.food))];
    const likedFoods = foodEntries.filter(entry => entry.liked === 'yes').map(entry => entry.food);
    const dislikedFoods = foodEntries.filter(entry => entry.liked === 'no').map(entry => entry.food);
    const reactionsCount = foodEntries.filter(entry => entry.reaction !== 'none').length;
    
    document.getElementById('total-foods').textContent = uniqueFoods.length;
    document.getElementById('liked-foods').textContent = [...new Set(likedFoods)].length;
    document.getElementById('disliked-foods').textContent = [...new Set(dislikedFoods)].length;
    document.getElementById('reactions-count').textContent = reactionsCount;
}

function renderPreferencesLists() {
    // Alimentos que le gustan
    const likedFoods = {};
    foodEntries.filter(entry => entry.liked === 'yes').forEach(entry => {
        if (!likedFoods[entry.food]) {
            likedFoods[entry.food] = [];
        }
        likedFoods[entry.food].push(entry);
    });
    
    const likedContainer = document.getElementById('liked-foods-list');
    likedContainer.innerHTML = '';
    
    Object.keys(likedFoods).forEach(food => {
        const foodInfo = getFoodInfo(food);
        const lastEntry = likedFoods[food].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
        const foodDiv = document.createElement('div');
        foodDiv.className = 'flex justify-between items-center bg-white rounded p-2';
        foodDiv.innerHTML = `
            <div>
                <span class="font-medium">${foodInfo.icon} ${food}</span>
                <span class="text-xs text-gray-500 ml-2">(${likedFoods[food].length} veces)</span>
            </div>
            <span class="text-green-500"><i class="fas fa-heart"></i></span>
        `;
        likedContainer.appendChild(foodDiv);
    });
    
    if (Object.keys(likedFoods).length === 0) {
        likedContainer.innerHTML = '<p class="text-gray-500 text-center">No hay alimentos que le gusten aún</p>';
    }
    
    // Alimentos que no le gustan
    const dislikedFoods = {};
    foodEntries.filter(entry => entry.liked === 'no').forEach(entry => {
        if (!dislikedFoods[entry.food]) {
            dislikedFoods[entry.food] = [];
        }
        dislikedFoods[entry.food].push(entry);
    });
    
    const dislikedContainer = document.getElementById('disliked-foods-list');
    dislikedContainer.innerHTML = '';
    
    Object.keys(dislikedFoods).forEach(food => {
        const foodInfo = getFoodInfo(food);
        const lastEntry = dislikedFoods[food].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
        const foodDiv = document.createElement('div');
        foodDiv.className = 'flex justify-between items-center bg-white rounded p-2';
        foodDiv.innerHTML = `
            <div>
                <span class="font-medium">${foodInfo.icon} ${food}</span>
                <span class="text-xs text-gray-500 ml-2">(${dislikedFoods[food].length} veces)</span>
            </div>
            <span class="text-red-500"><i class="fas fa-heart-broken"></i></span>
        `;
        dislikedContainer.appendChild(foodDiv);
    });
    
    if (Object.keys(dislikedFoods).length === 0) {
        dislikedContainer.innerHTML = '<p class="text-gray-500 text-center">No hay alimentos que no le gusten aún</p>';
    }
}

function renderReactionsSummary() {
    const reactions = {
        none: foodEntries.filter(entry => entry.reaction === 'none').length,
        mild: foodEntries.filter(entry => entry.reaction === 'mild').length,
        moderate: foodEntries.filter(entry => entry.reaction === 'moderate').length,
        severe: foodEntries.filter(entry => entry.reaction === 'severe').length
    };
    
    document.getElementById('no-reactions').textContent = reactions.none;
    document.getElementById('mild-reactions').textContent = reactions.mild;
    document.getElementById('moderate-reactions').textContent = reactions.moderate;
    document.getElementById('severe-reactions').textContent = reactions.severe;
}

function renderCharts() {
    // Pequeña demora para asegurar que el canvas está visible
    setTimeout(() => {
        renderPreferencesChart();
        renderEvolutionChart();
    }, 100);
}

function renderPreferencesChart() {
    const ctx = document.getElementById('preferences-chart').getContext('2d');
    
    // Calcular preferencias por categoría
    const categoryPreferences = {};
    
    // Inicializar todas las categorías
    for (let category in FOODS_DATABASE) {
        categoryPreferences[category] = { liked: 0, disliked: 0, neutral: 0 };
    }
    
    // Contar las preferencias reales
    foodEntries.forEach(entry => {
        const food = getFoodInfo(entry.food);
        if (categoryPreferences[food.category]) {
            let preference = 'neutral'; // valor por defecto
            
            // Manejar diferentes casos del campo liked
            if (entry.liked === 'yes' || entry.liked === true) {
                preference = 'liked';
            } else if (entry.liked === 'no' || entry.liked === false) {
                preference = 'disliked';
            } else if (entry.liked === 'neutral') {
                preference = 'neutral';
            } else {
                // Si no tiene el campo liked o es undefined/null, contar como neutral
                preference = 'neutral';
            }
            
            categoryPreferences[food.category][preference]++;
        }
    });
    
    const labels = Object.keys(categoryPreferences).map(cat => getCategoryLabel(cat));
    const likedData = Object.values(categoryPreferences).map(cat => cat.liked);
    const dislikedData = Object.values(categoryPreferences).map(cat => cat.disliked);
    const neutralData = Object.values(categoryPreferences).map(cat => cat.neutral);
    
    // Debug: mostrar datos en consola
    console.log('Datos de preferencias por categoría:', categoryPreferences);
    console.log('Labels:', labels);
    console.log('Liked:', likedData);
    console.log('Disliked:', dislikedData);
    console.log('Neutral:', neutralData);
    console.log('Total entries:', foodEntries.length);
    
    // Destruir gráfico anterior si existe
    if (window.preferencesChartInstance) {
        window.preferencesChartInstance.destroy();
    }
    
    window.preferencesChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Le gusta',
                    data: likedData,
                    backgroundColor: 'rgba(34, 197, 94, 0.8)',
                    borderColor: 'rgba(34, 197, 94, 1)',
                    borderWidth: 1
                },
                {
                    label: 'No le gusta',
                    data: dislikedData,
                    backgroundColor: 'rgba(239, 68, 68, 0.8)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Neutral',
                    data: neutralData,
                    backgroundColor: 'rgba(156, 163, 175, 0.8)',
                    borderColor: 'rgba(156, 163, 175, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `Total de registros: ${foodEntries.length}`
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 0
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    },
                    title: {
                        display: true,
                        text: 'Cantidad'
                    }
                }
            }
        }
    });
}

function renderEvolutionChart() {
    const ctx = document.getElementById('evolution-chart').getContext('2d');
    
    // Agrupar entradas por semana
    const weeklyData = {};
    const sortedEntries = [...foodEntries].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    sortedEntries.forEach(entry => {
        const date = new Date(entry.date);
        const weekStart = new Date(date.setDate(date.getDate() - date.getDay()));
        const weekKey = weekStart.toISOString().split('T')[0];
        
        if (!weeklyData[weekKey]) {
            weeklyData[weekKey] = { new: 0, liked: 0, total: 0 };
        }
        
        weeklyData[weekKey].total++;
        if (entry.liked === 'yes') {
            weeklyData[weekKey].liked++;
        }
    });
    
    // Calcular alimentos nuevos por semana
    const seenFoods = new Set();
    Object.keys(weeklyData).forEach(week => {
        const weekEntries = foodEntries.filter(entry => {
            const entryDate = new Date(entry.date);
            const weekStart = new Date(entryDate.setDate(entryDate.getDate() - entryDate.getDay()));
            return weekStart.toISOString().split('T')[0] === week;
        });
        
        weekEntries.forEach(entry => {
            if (!seenFoods.has(entry.food)) {
                seenFoods.add(entry.food);
                weeklyData[week].new++;
            }
        });
    });
    
    const labels = Object.keys(weeklyData).sort().map(week => {
        const date = new Date(week);
        return `Sem ${Math.ceil((date.getDate() + new Date(date.getFullYear(), date.getMonth(), 1).getDay()) / 7)}`;
    });
    const newData = Object.keys(weeklyData).sort().map(week => weeklyData[week].new);
    const likedData = Object.keys(weeklyData).sort().map(week => weeklyData[week].liked);
    const totalData = Object.keys(weeklyData).sort().map(week => weeklyData[week].total);
    
    // Destruir gráfico anterior si existe
    if (window.evolutionChartInstance) {
        window.evolutionChartInstance.destroy();
    }
    
    window.evolutionChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Nuevos alimentos',
                    data: newData,
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Le gustaron',
                    data: likedData,
                    borderColor: 'rgba(34, 197, 94, 1)',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Total consumiciones',
                    data: totalData,
                    borderColor: 'rgba(156, 163, 175, 1)',
                    backgroundColor: 'rgba(156, 163, 175, 0.1)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 0
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Sistema de sincronización con GitHub
let githubConfig = {
    username: '',
    token: '',
    repo: ''
};

function saveGitHubConfig() {
    githubConfig.username = document.getElementById('github-username').value;
    githubConfig.token = document.getElementById('github-token').value;
    githubConfig.repo = document.getElementById('github-repo').value;
    
    if (!githubConfig.username || !githubConfig.token || !githubConfig.repo) {
        showNotification('Por favor completa todos los campos', 'error');
        return;
    }
    
    localStorage.setItem('githubConfig', JSON.stringify(githubConfig));
    updateSyncStatus();
    showNotification('Configuración guardada correctamente', 'success');
    addSyncLog('Configuración guardada');
}

function loadGitHubConfig() {
    const saved = localStorage.getItem('githubConfig');
    if (saved) {
        githubConfig = JSON.parse(saved);
        document.getElementById('github-username').value = githubConfig.username || '';
        document.getElementById('github-token').value = githubConfig.token || '';
        document.getElementById('github-repo').value = githubConfig.repo || '';
        return true;
    }
    return false;
}

function updateSyncStatus() {
    const isConfigured = githubConfig.username && githubConfig.token && githubConfig.repo;
    document.getElementById('config-status').textContent = isConfigured ? 'Configurado' : 'No configurado';
    document.getElementById('config-status').className = isConfigured ? 'text-green-600' : 'text-red-600';
    
    document.getElementById('local-count').textContent = foodEntries.length;
    
    const lastSync = localStorage.getItem('lastSync');
    document.getElementById('last-sync').textContent = lastSync ? new Date(lastSync).toLocaleString() : 'Nunca';
}

async function testConnection() {
    if (!githubConfig.username || !githubConfig.token || !githubConfig.repo) {
        showNotification('Primero configura la sincronización', 'warning');
        return;
    }
    
    addSyncLog('Probando conexión con GitHub...');
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        if (response.ok) {
            showNotification('Conexión exitosa con GitHub', 'success');
            addSyncLog('✅ Conexión exitosa');
            getRemoteCount();
        } else {
            throw new Error('Error de autenticación');
        }
    } catch (error) {
        showNotification('Error de conexión: ' + error.message, 'error');
        addSyncLog('❌ Error: ' + error.message);
    }
}

async function getRemoteCount() {
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}/contents/data.json`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            const content = JSON.parse(atob(data.content));
            document.getElementById('remote-count').textContent = content.length;
            return content;
        }
    } catch (error) {
        document.getElementById('remote-count').textContent = '0';
    }
    return [];
}

async function syncToGitHub() {
    if (!githubConfig.username || !githubConfig.token || !githubConfig.repo) {
        showNotification('Primero configura la sincronización', 'warning');
        return;
    }
    
    addSyncLog('Subiendo datos a GitHub...');
    
    try {
        const data = JSON.stringify(foodEntries, null, 2);
        const content = btoa(data);
        
        const getResponse = await fetch(`https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}/contents/data.json`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        let body = {
            message: `Update baby food data - ${new Date().toISOString()}`,
            content: content
        };
        
        if (getResponse.ok) {
            const existingData = await getResponse.json();
            body.sha = existingData.sha;
        }
        
        const response = await fetch(`https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}/contents/data.json`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${githubConfig.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        if (response.ok) {
            localStorage.setItem('lastSync', new Date().toISOString());
            updateSyncStatus();
            showNotification('Datos subidos correctamente', 'success');
            addSyncLog('✅ Datos subidos exitosamente');
        } else {
            throw new Error('Error al subir datos');
        }
    } catch (error) {
        showNotification('Error al sincronizar: ' + error.message, 'error');
        addSyncLog('❌ Error: ' + error.message);
    }
}

async function syncFromGitHub() {
    if (!githubConfig.username || !githubConfig.token || !githubConfig.repo) {
        showNotification('Primero configura la sincronización', 'warning');
        return;
    }
    
    addSyncLog('Descargando datos de GitHub...');
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}/contents/data.json`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            const content = JSON.parse(atob(data.content));
            
            if (confirm(`¿Quieres reemplazar tus ${foodEntries.length} registros locales con ${content.length} registros de la nube?`)) {
                foodEntries = content;
                saveData();
                renderAll();
                localStorage.setItem('lastSync', new Date().toISOString());
                updateSyncStatus();
                showNotification('Datos descargados correctamente', 'success');
                addSyncLog('✅ Datos descargados exitosamente');
            } else {
                addSyncLog('❌ Sincronización cancelada por el usuario');
            }
        } else {
            showNotification('No hay datos en la nube', 'info');
            addSyncLog('ℹ️ No hay datos en la nube');
        }
    } catch (error) {
        showNotification('Error al descargar: ' + error.message, 'error');
        addSyncLog('❌ Error: ' + error.message);
    }
}

async function autoSync() {
    if (!githubConfig.username || !githubConfig.token || !githubConfig.repo) {
        showNotification('Primero configura la sincronización', 'warning');
        return;
    }
    
    addSyncLog('Iniciando sincronización automática...');
    
    try {
        const remoteData = await getRemoteCount();
        
        if (remoteData.length === 0) {
            await syncToGitHub();
            return;
        }
        
        if (foodEntries.length > remoteData.length) {
            await syncToGitHub();
            addSyncLog('✅ Sincronización automática: datos locales subidos');
        } 
        else if (remoteData.length > foodEntries.length) {
            await syncFromGitHub();
            addSyncLog('✅ Sincronización automática: datos remotos descargados');
        } else {
            addSyncLog('✅ Sincronización automática: datos ya están sincronizados');
            showNotification('Datos ya están sincronizados', 'info');
        }
    } catch (error) {
        showNotification('Error en sincronización automática: ' + error.message, 'error');
        addSyncLog('❌ Error: ' + error.message);
    }
}

function addSyncLog(message) {
    const log = document.getElementById('sync-log');
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.textContent = `[${timestamp}] ${message}`;
    logEntry.className = 'mb-1';
    
    log.appendChild(logEntry);
    log.scrollTop = log.scrollHeight;
    
    while (log.children.length > 50) {
        log.removeChild(log.firstChild);
    }
}

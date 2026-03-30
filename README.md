# 🍼 Calendario Alimentación Bebé

Aplicación web para gestionar la introducción de alimentos en bebés de 8 meses, con control especial de alimentos alergénicos y sistema de recordatorios.

## 🌟 Características Principales

### 📅 **Calendario Interactivo**
- Registro diario de alimentos consumidos
- Vista mensual con navegación fácil
- Indicadores visuales de alimentos alergénicos
- Click en cualquier día para ver detalles o añadir alimentos

### 🥘 **Catálogo de Alimentos Completo**
- **Frutas**: Manzana, plátano, pera, naranja, fresa, kiwi, mango, etc.
- **Verduras**: Zanahoria, calabaza, brócoli, espinacas, tomate, etc.
- **Proteínas**: Pollo, pavo, pescado, huevo, lentejas, garbanzos, etc.
- **Cereales**: Arroz, avena, pasta, pan, quinoa, etc.
- **Lácteos**: Yogur, queso, leche de fórmula, etc.
- **Frutos Secos**: Mantequilla de maní, almendras, nueces (12m+)

### ⚠️ **Control de Alérgenos Inteligente**
- Identificación automática de 8 alérgenos principales:
  - Huevos
  - Lácteos  
  - Frutos secos
  - Pescado
  - Mariscos
  - Soja
  - Trigo
  - Cítricos
- **Sistema de recordatorios**: Alerta cuando hace más de 7 días desde la última administración
- Seguimiento de reacciones alérgicas (ninguna, leve, moderada, grave)

### 📊 **Historial y Estadísticas**
- Registro completo con fechas, cantidades y reacciones
- Filtros por período de tiempo
- Exportación de datos en formato JSON
- Historial individual por alimento

### 💾 **Persistencia de Datos**
- Todos los datos se guardan localmente en el navegador
- Acceso offline sin necesidad de conexión
- Privacidad total: los datos nunca salen de tu dispositivo

## 🚀 Cómo Usar

### 1. **Abrir la Aplicación**
- Abre el archivo `index.html` en tu navegador web
- No requiere instalación ni conexión a internet

### 2. **Registrar Alimentos**
#### Método Rápido (Recomendado):
1. Ve a la pestaña **Calendario**
2. Usa el selector "Añadir Alimento Hoy"
3. Selecciona el alimento y haz clic en "Añadir"

#### Método Detallado:
1. Haz clic en cualquier día del calendario
2. Completa el formulario con:
   - Fecha
   - Alimento
   - Cantidad (poco/normal/mucho)
   - Reacción (si la hay)
   - Notas adicionales

### 3. **Controlar Alérgenos**
1. Ve a la pestaña **Control de Alérgenos**
2. Revisa los recordatorios de reintroducción (aparecen en naranja)
3. Los alimentos que necesitan reintroducción se muestran con alerta

### 4. **Consultar Catálogo**
1. Ve a la pestaña **Catálogo de Alimentos**
2. Busca alimentos por nombre
3. Haz clic en cualquier alimento para añadirlo rápidamente

### 5. **Ver Historial**
1. Ve a la pestaña **Historial**
2. Usa los filtros de fecha si necesitas un período específico
3. Exporta los datos si quieres una copia de seguridad

## 🎯 Recomendaciones de Uso

### **Frecuencia de Alérgenos**
- **Reintroducción recomendada**: Cada 3-7 días
- **Alerta automática**: La app te avisa cuando pasan 7 días
- **Registro de reacciones**: Anota cualquier reacción, por leve que sea

### **Nuevos Alimentos**
- Introduce un nuevo alimento cada 3-4 días
- Espera 2-3 días antes de añadir otro nuevo
- Registra siempre las cantidades y reacciones

### **Backup de Datos**
- Exporta regularmente tu historial usando el botón "Exportar"
- Guarda el archivo JSON en lugar seguro

## 🛠️ Aspectos Técnicos

### **Tecnologías Utilizadas**
- **HTML5** para la estructura
- **TailwindCSS** para el diseño responsive
- **JavaScript Vanilla** para la funcionalidad
- **Font Awesome** para los iconos
- **LocalStorage** para persistencia de datos

### **Compatibilidad**
- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Móviles y tablets

### **Seguridad y Privacidad**
- ✅ Sin conexión a servidores externos
- ✅ Datos almacenados localmente
- ✅ Sin tracking ni analytics
- ✅ Código abierto y transparente

## 📱 Uso en Móvil

La aplicación está optimizada para uso en dispositivos móviles:
- Interfaz táctil amigable
- Diseño responsive que se adapta a cualquier pantalla
- Navegación intuitiva con pestañas
- Botones grandes para fácil acceso

## 🔧 Personalización

### **Añadir Nuevos Alimentos**
Para añadir nuevos alimentos al catálogo, edita el archivo `script.js`:

```javascript
const FOODS_DATABASE = {
    // ... categorías existentes
    vegetables: [
        // ... alimentos existentes
        { name: 'Nuevo Vegetal', category: 'vegetables', allergen: false, age: '8m+', icon: '🥬' }
    ]
};
```

### **Ajustar Frecuencia de Recordatorios**
En `script.js`, busca la función `checkReminders()` y modifica el valor:

```javascript
if (daysSinceLast > 7) { // Cambia 7 por los días que prefieras
```

## ❓ Preguntas Frecuentes

**¿Puedo usar esta aplicación sin conexión a internet?**
Sí, una vez cargada la página, funciona completamente offline.

**¿Mis datos están seguros?**
Totalmente seguros. Todos los datos se guardan en tu navegador y nunca se envían a servidores externos.

**¿Puedo exportar mis datos?**
Sí, usa el botón "Exportar" en la pestaña Historial para descargar un archivo JSON con todos tus registros.

**¿Cómo puedo hacer backup de mis datos?**
Exporta regularmente el historial y guarda los archivos JSON en un lugar seguro.

**¿La aplicación funciona en móviles?**
Sí, está completamente optimizada para uso en móviles y tablets.

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, puedes:
1. Revisar que tu navegador esté actualizado
2. Limpiar la caché del navegador
3. Verificar que JavaScript esté habilitado

---

**¡Cuidando la alimentación de tu bebé con tecnología y amor!** 👶❤️

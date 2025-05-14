// بيانات جميع الوجبات من ملف PDF
const meals = [
    // المشروبات الساخنة (17 عنصرًا)
    { category: "hot-drinks", name: "ميكانيكو", price: "14 ريال", calories: "20 سعرة" },
    { category: "hot-drinks", name: "فلات وايت", price: "13 ريال", calories: "19 سعرة" },
    { category: "hot-drinks", name: "كورتادو", price: "13 ريال", calories: "40 سعرة" },
    { category: "hot-drinks", name: "كابتشينو", price: "14 ريال", calories: "70 سعرة" },
    { category: "hot-drinks", name: "لاتيه", price: "14 ريال", calories: "50 سعرة" },
    { category: "hot-drinks", name: "اسبرسو سنجل", price: "7 ريال", calories: "5 سعرة" },
    { category: "hot-drinks", name: "اسبرسو دبل", price: "9 ريال", calories: "10 سعرة" },
    { category: "hot-drinks", name: "هوت شوكولات", price: "13 ريال", calories: "35 سعرة" },
    { category: "hot-drinks", name: "موكا", price: "14 ريال", calories: "150 سعرة" },
    { category: "hot-drinks", name: "كرك", price: "14 ريال", calories: "150 سعرة" },
    { category: "hot-drinks", name: "قهوة تركي بالحليب", price: "12 ريال", calories: "55 سعرة" },
    { category: "hot-drinks", name: "قهوة فرنسي بالبندق", price: "14 ريال", calories: "50 سعرة" },
    { category: "hot-drinks", name: "قهوة إيطالي", price: "14 ريال", calories: "200 سعرة" },
    { category: "hot-drinks", name: "قهوة سعودي", price: "5 ريال", calories: "200 سعرة" },
    { category: "hot-drinks", name: "قهوة سعودي دلة", price: "20 ريال", calories: "80 سعرة" },
    { category: "hot-drinks", name: "بالك كوفي", price: "9 ريال", calories: "60 سعرة" },
    { category: "hot-drinks", name: "اسباشن حار", price: "14 ريال", calories: "110 سعرة" },
    { category: "hot-drinks", name: "لاتيه كراميل", price: "14 ريال", calories: "50 سعرة" },

    // المشروبات الباردة (16 عنصرًا)
    { category: "cold-drinks", name: "إيس كركنية كبير", price: "15 ريال", calories: "غير معروف" },
    { category: "cold-drinks", name: "إيس كركنية صغير", price: "13 ريال", calories: "غير معروف" },
    { category: "cold-drinks", name: "إيس كراميل ميكيانو", price: "15 ريال", calories: "غير معروف" },
    { category: "cold-drinks", name: "سباشن لاتيه بارد", price: "15 ريال", calories: "غير معروف" },
    { category: "cold-drinks", name: "إيس لاتيه", price: "15 ريال", calories: "غير معروف" },
    { category: "cold-drinks", name: "إيس أمريكانو", price: "10 ريال", calories: "غير معروف" },
    { category: "cold-drinks", name: "إيس وايت موكا كبير", price: "17 ريال", calories: "غير معروف" },
    { category: "cold-drinks", name: "روز لاتيه", price: "15 ريال", calories: "300 سعرة" },
    { category: "cold-drinks", name: "إيس لاتيه كراميل", price: "15 ريال", calories: "250 سعرة" },
    { category: "cold-drinks", name: "لاتيه يستاشيو", price: "15 ريال", calories: "300 سعرة" },
    { category: "cold-drinks", name: "إيس وايت موكا صغير", price: "15 ريال", calories: "غير معروف" },
    { category: "cold-drinks", name: "إيس شيكن وايت موكا", price: "15 ريال", calories: "300 سعرة" },
    { category: "cold-drinks", name: "إيس مانشا", price: "15 ريال", calories: "260 سعرة" },
    { category: "cold-drinks", name: "إيس فلات وايت", price: "15 ريال", calories: "160 سعرة" },
    { category: "cold-drinks", name: "موهينو", price: "12 ريال", calories: "غير معروف" },
    { category: "cold-drinks", name: "ماء (330 مل)", price: "12 ريال", calories: "غير معروف" },

    // الحلويات (17 عنصرًا)
    { category: "desserts", name: "فرنش توست قشطة", price: "23 ريال", calories: "600 سعرة" },
    { category: "desserts", name: "تارت الفواكة", price: "19 ريال", calories: "400 سعرة" },
    { category: "desserts", name: "كوكيز البيكان", price: "10 ريال", calories: "250 سعرة" },
    { category: "desserts", name: "تشيز الكنافة", price: "17 ريال", calories: "350-500 سعرة" },
    { category: "desserts", name: "حل المكارون", price: "21 ريال", calories: "70-100 سعرة" },
    { category: "desserts", name: "حل كوب", price: "15 ريال", calories: "300-500 سعرة" },
    { category: "desserts", name: "سبيشيال كيك", price: "20 ريال", calories: "250-400 سعرة" },
    { category: "desserts", name: "تشيز مقلوبة", price: "19 ريال", calories: "350-450 سعرة" },
    { category: "desserts", name: "هبة دبي", price: "17 ريال", calories: "300-500 سعرة" },
    { category: "desserts", name: "بودينغ", price: "15 ريال", calories: "150-250 سعرة" },
    { category: "desserts", name: "ترفل مانجو", price: "18 ريال", calories: "200-300 سعرة" },
    { category: "desserts", name: "تيراميسو ايس كريم", price: "20 ريال", calories: "300-400 سعرة" },
    { category: "desserts", name: "دريم كيك", price: "15 ريال", calories: "350-500 سعرة" },
    { category: "desserts", name: "غوستو", price: "21 ريال", calories: "300-500 سعرة" },
    { category: "desserts", name: "فرنش توست مكس", price: "27 ريال", calories: "400-600 سعرة" },
    { category: "desserts", name: "فرنش توست مكس", price: "25 ريال", calories: "400-600 سعرة" },
    { category: "desserts", name: "كيكة الزعفران", price: "18 ريال", calories: "300-400 سعرة" }
];

// متغيرات النظام
let selectedMeal = null;

// 1. تحديث قائمة الوجبات عند اختيار التصنيف
function updateMealList() {
    const category = document.getElementById('category-select').value;
    const mealSelect = document.getElementById('meal-select');
    mealSelect.innerHTML = '<option value="">اختر وجبة</option>';

    meals.filter(meal => meal.category === category).forEach(meal => {
        const option = document.createElement('option');
        option.value = meal.name;
        option.textContent = `${meal.name} - ${meal.price}`;
        mealSelect.appendChild(option);
    });
}

// 2. عرض تفاصيل الوجبة المختارة
function updateSelectedMeal() {
    const mealName = document.getElementById('meal-select').value;
    selectedMeal = meals.find(meal => meal.name === mealName);
    const selectedDiv = document.getElementById('selected-meal');
    
    selectedDiv.innerHTML = selectedMeal ? `
        <div class="meal-details">
            <h3>الوجبة المختارة:</h3>
            <p>الاسم: ${selectedMeal.name}</p>
            <p>السعر: ${selectedMeal.price}</p>
            <p>السعرات الحرارية: ${selectedMeal.calories}</p>
        </div>
    ` : '';
}

// 3. معالجة الدفع
function processPayment() {
    const paymentStatus = document.getElementById('payment-status');
    const invoiceDiv = document.getElementById('invoice');

    if (!selectedMeal) {
        paymentStatus.innerHTML = '<p style="color: red;">❗ الرجاء اختيار وجبة أولاً</p>';
        return;
    }

    paymentStatus.innerHTML = '<p>🔄 جارٍ معالجة الدفع...</p>';
    
    // محاكاة عملية الدفع (2 ثانية)
    setTimeout(() => {
        paymentStatus.innerHTML = '<p style="color: green;">✅ تم الدفع بنجاح!</p>';
        generateInvoice();
    }, 2000);
}

// 4. إنشاء الفاتورة
function generateInvoice() {
    const invoiceDiv = document.getElementById('invoice');
    invoiceDiv.innerHTML = `
        <div class="invoice-details">
            <h3>فاتورة الدفع</h3>
            <p>الوجبة: ${selectedMeal.name}</p>
            <p>السعر: ${selectedMeal.price}</p>
            <p>طريقة الدفع: تحويل بنكي</p>
            <p>الحساب البنكي: 3210***********51544</p>
            <p>التاريخ: ${new Date().toLocaleDateString('ar-SA')}</p>
        </div>
    `;
}

// 5. نظام الرد الصوتي
// 5. نظام الرد الصوتي
function startVoiceAssistant() {
    window.open("https://vapi.ai?demo=true&shareKey=f612978f-043a-48ad-8133-d5902b2aba32&assistantId=acdaf234-999f-4fc9-b229-d51e1d9fd10d", "_blank");
}

function handleVoiceCommand(command) {
    const responseDiv = document.getElementById('voice-response');
    responseDiv.innerHTML += `<p><strong>👤 أنت:</strong> ${command}</p>`;

    if (command.includes("حجز")) {
        responseDiv.innerHTML += '<p><strong>🤖 النظام:</strong> كم عدد الأشخاص؟</p>';
    } else if (command.includes("قائمة")) {
        responseDiv.innerHTML += '<p><strong>🤖 النظام:</strong> تصفح القائمة من الأعلى</p>';
    } else {
        responseDiv.innerHTML += '<p><strong>🤖 النظام:</strong> لم أفهم، الرجاء المحاولة</p>';
    }
}

// 6. تبديل الأقسام
function toggleSection(sectionId) {
    const content = document.getElementById(`${sectionId}-content`);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// التهيئة الأولية
window.onload = () => {
    document.getElementById('category-select').addEventListener('change', updateMealList);
};
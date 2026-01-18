// === 1. البيانات ===
const initialRecipes = [
    { id: 1, name: "طاجين زيتون", type: "مرقة", ingredients: ["دجاج", "زيتون", "بصل", "زرودية"], instruction: "قلي الدجاج والبصل، ضيفي الزيتون المغلي والزرودية." },
    { id: 2, name: "شطيطحة دجاج", type: "مرقة", ingredients: ["دجاج", "ثوم", "حمص", "فلفل"], instruction: "درسي الثوم والفلفل، قلي الدجاج، مرقي بالماء والحمص." },
    { id: 3, name: "لوبيا بيضاء", type: "حبوب", ingredients: ["لوبيا", "طماطم", "ثوم", "بصل"], instruction: "رنخي اللوبيا، طيبيها مع الدرجة (ثوم وكمون)." },
    { id: 4, name: "عدس", type: "حبوب", ingredients: ["عدس", "زرودية", "بطاطا", "بصل"], instruction: "ديري كلش بارد في بارد مع الخضرة." },
    { id: 5, name: "جلبانة بالقرنون", type: "مرقة", ingredients: ["جلبانة", "قرنون", "لحم", "بصل"], instruction: "مرقة بيضاء بالجلبانة والقرنون." },
    { id: 6, name: "كسكسي", type: "عجائن", ingredients: ["كسكسي", "دجاج", "زرودية", "قرعة"], instruction: "فوري الكسكسي وطيبي المرقة بالخضرة." },
    { id: 7, name: "رشتة", type: "عجائن", ingredients: ["رشتة", "دجاج", "لفت", "حمص"], instruction: "الرشتة العاصمية بالدجاج واللفت." },
    { id: 8, name: "غراتان بطاطا", type: "غراتان", ingredients: ["بطاطا", "جبن", "بيض", "حليب"], instruction: "بطاطا مقلية مع البيشاميل للكوشة." },
    { id: 9, name: "سردين مقلي", type: "حوت", ingredients: ["سردين", "ثوم", "كمون", "فرينة"], instruction: "درسي السردين واقليه." },
    { id: 10, name: "شكشوكة", type: "خفيف", ingredients: ["فلفل", "طماطم", "بصل", "بيض"], instruction: "طيبي الفلفل والطماطم وزيدي البيض." },
    { id: 11, name: "شربة فريك", type: "شربة", ingredients: ["فريك", "لحم", "طماطم", "قصبر"], instruction: "شربة رمضان بالفريك واللحم." },
    { id: 12, name: "مقرونة بالبشاميل", type: "عجائن", ingredients: ["مقرونة", "لحم مرحي", "جبن", "حليب"], instruction: "مقرونة في الكوشة." },
    { id: 13, name: "محاجب", type: "عجائن", ingredients: ["سميد", "بصل", "طماطم"], instruction: "عجني الدقيق وحضري تشكشوكة بصل وطماطم." },
    { id: 14, name: "بوراك", type: "مقبلات", ingredients: ["ديول", "بطاطا", "لحم مرحي", "جبن"], instruction: "عمري الديول واقليهم." },
    { id: 15, name: "فريت أومليت", type: "خفيف", ingredients: ["بطاطا", "بيض", "معدنوس"], instruction: "قلي البطاطا مكعبات، وزيدي عليها البيض والمعدنوس." }
];

const allIngredients = [
    "دجاج", "لحم", "لحم مرحي", "سردين", 
    "بطاطا", "طماطم", "بصل", "ثوم", "زرودية", "قرعة", "لفت", "فلفل", "جلبانة", "لوبيا", "قرنون", "زيتون", "عدس", "حمص",
    "بيض", "جبن", "حليب", "سميد", "فرينة", "ديول",
    "كسكسي", "رشتة", "شخشوخة", "مقرونة", "أرز", "تليتلي", "فريك"
];

let recipesDB = [];
let selectedIngredients = [];
let currentMode = '';
let currentPlan = []; 
let selectedIngredientsForNewRecipe = [];

// === 2. التشغيل والتهيئة ===
window.onload = function() {
    // تحميل الوصفات المضافة من الذاكرة
    const customRecipes = JSON.parse(localStorage.getItem('myCustomRecipes')) || [];
    recipesDB = [...initialRecipes, ...customRecipes];
    renderIngredients('ingredientsList', false);
    renderIngredients('newRecipeIngredients', true);
};

function renderIngredients(containerId, isForNewRecipe) {
    const list = document.getElementById(containerId);
    list.innerHTML = "";
    allIngredients.forEach(ing => {
        const div = document.createElement('div');
        div.className = 'ingredient-item';
        div.innerText = ing;
        div.onclick = () => {
            if (isForNewRecipe) toggleNewRecipeIngredient(div, ing);
            else toggleIngredient(div, ing);
        };
        list.appendChild(div);
    });
}

function toggleIngredient(element, ing) {
    element.classList.toggle('selected');
    if (selectedIngredients.includes(ing)) { selectedIngredients = selectedIngredients.filter(i => i !== ing); } else { selectedIngredients.push(ing); }
}

function toggleNewRecipeIngredient(element, ing) {
    element.classList.toggle('selected');
    if (selectedIngredientsForNewRecipe.includes(ing)) { selectedIngredientsForNewRecipe = selectedIngredientsForNewRecipe.filter(i => i !== ing); } else { selectedIngredientsForNewRecipe.push(ing); }
}

function showScreen(screenId) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(screenId).classList.add('active'); }
function goBack(id) { showScreen(id); }

function setMode(mode) {
    currentMode = mode;
    showScreen('screen-ingredients');
    const btnText = mode === 'daily' ? "اقترحي لي طبخة!" : "اعطيني جدول أسبوعي!";
    document.querySelector('#screen-ingredients .btn-primary').innerText = btnText;
}

// === 3. التوليد (Generate) ===
function generatePlan() {
    if (selectedIngredients.length === 0) { alert("يا يما، خيري واش عندك مقادير!"); return; }
    let matched = recipesDB.filter(r => r.ingredients.some(ing => selectedIngredients.includes(ing)));
    if (matched.length === 0) { alert("ما لقيتش وصفات، زيدي خيري مقادير!"); return; }
    
    matched = matched.sort(() => Math.random() - 0.5);
    const container = document.getElementById('resultsContainer');
    container.innerHTML = "";
    currentPlan = [];

    // إظهار الأزرار الأساسية
    document.getElementById('btn-pdf').style.display = 'inline-block';
    document.getElementById('btn-share').style.display = 'inline-block';

    if (currentMode === 'daily') {
        document.getElementById('resultTitle').innerText = "وجبة اليوم:";
        document.getElementById('btn-shopping').style.display = 'none'; // إخفاء زر القضيان في اليومي
        
        const recipe = matched[0];
        currentPlan.push(recipe);
        container.innerHTML = createRecipeCard(recipe);
    } else {
        document.getElementById('resultTitle').innerText = "جدول الأسبوع:";
        document.getElementById('btn-shopping').style.display = 'inline-block'; // إظهار زر القضيان في الأسبوعي
        
        let weekly = [...matched];
        if (weekly.length < 7) {
            let others = recipesDB.filter(r => !weekly.includes(r)).sort(() => Math.random() - 0.5);
            weekly = weekly.concat(others).slice(0, 7);
        } else { weekly = weekly.slice(0, 7); }
        currentPlan = weekly;
        const days = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];
        weekly.forEach((recipe, index) => {
            container.innerHTML += `
                <div class="weekly-item">
                    <div class="day-label">${days[index]}</div>
                    <div class="meal-name">${recipe.name}</div>
                    <button class="btn-small" onclick="showRecipeDetails(${recipe.id})">الوصفة</button>
                </div>
            `;
        });
    }
    showScreen('screen-result');
}

function createRecipeCard(recipe) {
    const imgSrc = "https://placehold.co/600x400/FF6B6B/ffffff?text=" + encodeURI(recipe.name);
    return `<div class="card"><img src="${imgSrc}"><h3>${recipe.name}</h3><p>${recipe.ingredients.join('، ')}</p><button class="btn-secondary" onclick="showRecipeDetails(${recipe.id})">طريقة التحضير</button></div>`;
}

// === 4. الطباعة PDF ===
function preparePrintTable(recipesList, dateTitle) {
    const tbody = document.getElementById('printTableBody');
    tbody.innerHTML = "";
    document.getElementById('printDate').innerText = dateTitle || new Date().toLocaleDateString('ar-DZ');
    const days = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];

    recipesList.forEach((recipe, index) => {
        const recipeName = recipe.name ? recipe.name : recipe;
        let ingredientsTxt = "-";
        if (recipe.ingredients) { ingredientsTxt = recipe.ingredients.join('، '); } 
        else { const found = recipesDB.find(r => r.name === recipeName); if(found) ingredientsTxt = found.ingredients.join('، '); }

        let dayName;
        if (recipesList.length === 1) { dayName = "وجبة اليوم"; } 
        else { dayName = days[index] || `يوم ${index + 1}`; }

        tbody.innerHTML += `
            <tr>
                <td style="text-align:center; font-weight:bold">${dayName}</td>
                <td style="font-weight:bold; font-size:16px">${recipeName}</td>
                <td>${ingredientsTxt}</td>
            </tr>`;
    });
}

function handlePrint() {
    document.body.classList.add('printing-mode');
    setTimeout(() => { window.print(); setTimeout(() => { document.body.classList.remove('printing-mode'); }, 1000); }, 100);
}

function printCurrentPlan() {
    if(currentPlan.length === 0) return;
    preparePrintTable(currentPlan, "تاريخ الجدول: " + new Date().toLocaleDateString('ar-DZ'));
    handlePrint();
}

function printSavedPlan(index) {
    const saved = JSON.parse(localStorage.getItem('myPlans')) || [];
    const targetPlan = saved[index];
    if (!targetPlan) return;

    let enrichedPlan = [];
    targetPlan.items.forEach(itemName => {
        const found = recipesDB.find(r => r.name === itemName);
        if(found) enrichedPlan.push(found); else enrichedPlan.push({ name: itemName, ingredients: [] });
    });
    preparePrintTable(enrichedPlan, "جدول محفوظ من تاريخ: " + targetPlan.date);
    handlePrint();
}

// === 5. مشاركة الجدول ===
function shareCurrentPlan() {
    if(currentPlan.length === 0) return;
    performShare(currentPlan, "جدول كوزينتي الجديد");
}

function shareSavedPlan(index) {
    const saved = JSON.parse(localStorage.getItem('myPlans')) || [];
    const targetPlan = saved[index];
    if (!targetPlan) return;

    let enrichedPlan = [];
    targetPlan.items.forEach(itemName => {
        const found = recipesDB.find(r => r.name === itemName);
        if(found) enrichedPlan.push(found); else enrichedPlan.push({ name: itemName, ingredients: [] });
    });
    
    performShare(enrichedPlan, "جدول محفوظ (" + targetPlan.date + ")");
}

function performShare(planList, title) {
    const days = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];
    let text = `👩‍🍳 *${title}*\n\n`;

    planList.forEach((recipe, index) => {
        let label = "";
        if (planList.length === 1) { label = "🍽️ وجبة اليوم: "; }
        else { label = `📅 ${days[index] || ('يوم '+(index+1))}: `; }
        text += `${label} *${recipe.name}*\n`;
    });

    text += `\n❤️ بصحتكم ولهنا!`;

    if (navigator.share) {
        navigator.share({ title: 'كوزينتي', text: text }).catch(console.error);
    } else {
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
}

// === 6. قائمة القضيان (Shopping List) - تم إضافتها ===
function generateShoppingList() {
    if (currentPlan.length === 0) return;

    let allIngredientsRaw = [];
    currentPlan.forEach(recipe => {
        let ingredients = recipe.ingredients;
        if (!ingredients || ingredients.length === 0) {
            const found = recipesDB.find(r => r.name === recipe.name);
            if (found) ingredients = found.ingredients;
        }
        if (ingredients) { allIngredientsRaw.push(...ingredients); }
    });

    let uniqueIngredients = [...new Set(allIngredientsRaw)];
    const listContainer = document.getElementById('shoppingListItems');
    listContainer.innerHTML = "";
    
    if (uniqueIngredients.length === 0) {
        listContainer.innerHTML = "<li>ماكانش مقادير مسجلة.</li>";
    } else {
        uniqueIngredients.forEach(ing => {
            listContainer.innerHTML += `<li style="margin-bottom:5px; font-size:16px;">▫️ ${ing}</li>`;
        });
    }
    document.getElementById('shoppingModal').style.display = "block";
}

function closeShoppingModal() { document.getElementById('shoppingModal').style.display = "none"; }

function copyShoppingList() {
    const listItems = document.querySelectorAll('#shoppingListItems li');
    let textToCopy = "🛒 *قائمة القضيان:*\n\n";
    listItems.forEach(item => { textToCopy += item.innerText + "\n"; });
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("تم نسخ القائمة!");
    }).catch(err => {
        alert("انسخي النص يدوياً.");
    });
}

// === 7. الوظائف الأخرى ===
function showAllRecipes() { renderCatalog(recipesDB); showScreen('screen-catalog'); }
function filterRecipes() { const term = document.getElementById('searchBox').value.toLowerCase(); const filtered = recipesDB.filter(r => r.name.toLowerCase().includes(term)); renderCatalog(filtered); }
function renderCatalog(list) { const container = document.getElementById('catalogContainer'); container.innerHTML = ""; list.forEach(r => { container.innerHTML += `<div class="card" style="text-align:right; padding:10px;"><h3 style="margin:0">${r.name}</h3><small>${r.type}</small><button class="btn-small" style="float:left" onclick="showRecipeDetails(${r.id})">شوف</button><div style="clear:both"></div></div>`; }); }
function showAddRecipeScreen() { selectedIngredientsForNewRecipe = []; document.querySelectorAll('#newRecipeIngredients .ingredient-item').forEach(el => el.classList.remove('selected')); document.getElementById('newRecipeName').value = ''; document.getElementById('newRecipeInstructions').value = ''; showScreen('screen-add'); }

// إضافة وصفة جديدة مع حفظها في LocalStorage
function addNewRecipe() { 
    const name = document.getElementById('newRecipeName').value; 
    const type = document.getElementById('newRecipeType').value; 
    const instructions = document.getElementById('newRecipeInstructions').value; 
    
    if (!name || selectedIngredientsForNewRecipe.length === 0) { alert("لازم تكتبي الاسم وتختاري المقادير!"); return; } 
    
    const newRecipe = { id: Date.now(), name: name, type: type, ingredients: [...selectedIngredientsForNewRecipe], instruction: instructions || "طريقة التحضير المعروفة." }; 
    recipesDB.push(newRecipe); 
    
    // الحفظ في المتصفح
    const stored = JSON.parse(localStorage.getItem('myCustomRecipes')) || []; 
    stored.push(newRecipe); 
    localStorage.setItem('myCustomRecipes', JSON.stringify(stored)); 
    
    alert("تم إضافة " + name + " بنجاح!"); 
    showScreen('screen-welcome'); 
}

function showRecipeDetails(id) { const recipe = recipesDB.find(r => r.id === id); if (!recipe) return; document.getElementById('modalTitle').innerText = recipe.name; document.getElementById('modalIngredients').innerText = recipe.ingredients.join(' - '); document.getElementById('modalBody').innerText = recipe.instruction; document.getElementById('modalImage').src = "https://placehold.co/600x400/FF6B6B/ffffff?text=" + encodeURI(recipe.name); document.getElementById('recipeModal').style.display = "block"; }
function closeModal() { document.getElementById('recipeModal').style.display = "none"; }

// حفظ الجدول في LocalStorage
function saveCurrentPlan() { 
    if(currentPlan.length === 0) return; 
    let saved = JSON.parse(localStorage.getItem('myPlans')) || []; 
    saved.push({ type: currentMode, date: new Date().toLocaleDateString('ar-DZ'), items: currentPlan.map(p => p.name) }); 
    localStorage.setItem('myPlans', JSON.stringify(saved)); 
    alert("تم الحفظ!"); 
    showScreen('screen-welcome'); 
}

function showSavedMenus() {
    const saved = JSON.parse(localStorage.getItem('myPlans')) || [];
    const list = document.getElementById('savedList');
    list.innerHTML = saved.length ? "" : "ماكانش جداول محفوظة.";
    
    for (let i = saved.length - 1; i >= 0; i--) {
        const plan = saved[i];
        let contentHtml = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div><strong>${plan.type === 'daily' || plan.type === 'يومي' ? 'يومي' : 'أسبوعي'} - ${plan.date}</strong></div>
                <div style="display:flex; gap:5px;">
                   <button class="btn-small" style="background:#25D366" onclick="shareSavedPlan(${i})">📲</button>
                   <button class="btn-small" style="background:#3498db" onclick="printSavedPlan(${i})">🖨️</button>
                </div>
            </div>
        `;
        
        if (plan.type === 'daily' || plan.type === 'يومي') {
            contentHtml += `<div style="margin-top:5px; color:#FF6B6B; font-weight:bold">${plan.items[0]}</div>`;
        } else {
            contentHtml += `<ul style="padding-right:20px; margin-top:5px; font-size:14px; color:#555">`;
            plan.items.slice(0, 3).forEach(item => { contentHtml += `<li>${item}</li>`; });
            if(plan.items.length > 3) contentHtml += `<li>... والبقية</li>`;
            contentHtml += `</ul>`;
        }

        const li = document.createElement('li');
        li.style.background = "white"; li.style.margin = "10px 0"; li.style.padding = "15px"; 
        li.style.borderRadius = "10px"; li.style.borderRight = "5px solid #4ECDC4"; li.style.textAlign = "right";
        li.innerHTML = contentHtml;
        list.appendChild(li);
    }
    showScreen('screen-saved');
}

window.onclick = function(event) { if (event.target == document.getElementById('recipeModal')) closeModal(); }
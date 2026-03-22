// ================================================================
// كوزينتي v2.0 — JavaScript كامل
// ================================================================

// ================================================================
// 1. قاعدة البيانات
// ================================================================
const recipesDB = [
    // وجبات جزائرية تقليدية
    { id: 1,  name: "طاجين زيتون",          category: "meal", cookTime: 40, ingredients: ["دجاج","زيتون","بصل","زرودية","معدنوس","ليمون مرقد"],    instruction: "قلي الدجاج مع البصل والثوم، ضيفي الزيتون والزرودية والليمون المرقد، مرقي على نار هادية 40 دقيقة." },
    { id: 2,  name: "كسكسي بالخضر",         category: "meal", cookTime: 60, ingredients: ["كسكسي","لحم","لفت","قرعة","زرودية","حمص","ملفوف"],       instruction: "فوري الكسكسي ثلاث مرات، وطيبي المرقة الحمراء باللحم والخضرة والحمص، قدميها مع المرق جانباً." },
    { id: 3,  name: "شطيطحة دجاج",          category: "meal", cookTime: 35, ingredients: ["دجاج","ثوم","حمص","طماطم","كمون","فلفل حار"],            instruction: "قلي الدجاج بالثوم والعكري وضيفي الحمص والطماطم والفلفل الحار على نار هادية." },
    { id: 4,  name: "غراتان بطاطا ودجاج",   category: "meal", cookTime: 45, ingredients: ["بطاطا","دجاج","بيض","حليب","فرماج","بصل"],              instruction: "طيبي الدجاج، قليه مع البطاطا والبصل، ديريهم في بلا، فرغي فوقهم البيض والحليب والفرماج وطيبيهم في الكوشة." },
    { id: 5,  name: "شربة فريك",             category: "meal", cookTime: 60, ingredients: ["لحم","فريك","طماطم","بصل","حمص","قزبر","زرودية"],       instruction: "قلي اللحم والبصل والطماطم، مرقي وضيفي الفريك المغسول والحشيش والحمص وخليها تطيب ساعة." },
    { id: 6,  name: "حريرة",                 category: "meal", cookTime: 50, ingredients: ["لحم","طماطم","بصل","حمص","فرينة","قزبر","ليمون"],       instruction: "طيبي المرقة باللحم والبصل والطماطم والحمص، ارحيها، وعقديها بالفرينة المذابة وعصرة ليمون." },
    { id: 7,  name: "لوبيا بيضاء باللحم",   category: "meal", cookTime: 55, ingredients: ["لوبيا","لحم","بصل","ثوم","طماطم مصبرة","كمون"],          instruction: "انقعي اللوبيا الليل، اغليها، طيبيها مع اللحم والبصل والثوم والطماطم المصبرة والتوابل." },
    { id: 8,  name: "شوربة عدس",             category: "meal", cookTime: 35, ingredients: ["عدس","بصل","زرودية","بطاطا","ثوم","ليمون","كمون"],      instruction: "قليي الزرودية والبصل والثوم، ضيفي العدس والبطاطا والتوابل، مرقي واخلطي بالبلانديرة." },
    { id: 9,  name: "كبدة مشرملة",           category: "meal", cookTime: 20, ingredients: ["كبدة","ثوم","طماطم","كمون","خل","فلفل"],                instruction: "قلي الكبدة بسرعة، وجدي صلصة الثوم والطماطم والكمون والخل، رجعي الكبدة تتشرب الصلصة." },
    { id: 10, name: "دولمة خرشف",            category: "meal", cookTime: 50, ingredients: ["لحم مفروم","خرشف","حمص","بصل","معدنوس","ليمون"],       instruction: "نظفي الخرشف، عمريه باللحم المفروم المتبل، طيبيه في مرقة بيضاء بالحمص والليمون." },
    { id: 11, name: "محاجب",                 category: "meal", cookTime: 30, ingredients: ["سميد","بصل","طماطم","فلفل","قزبر","زيت"],               instruction: "اعجني السميد بالزيت والملح، وجدي شكشوكة البصل والطماطم والفلفل والقزبر، عمري العجين وطيبيه في الطاجين." },
    { id: 12, name: "بيتزا بيتية",           category: "meal", cookTime: 40, ingredients: ["فرينة","طماطم مصبرة","فرماج","زيتون","لحم مفروم","خميرة"], instruction: "حضري عجين البيتزا وخليه يخمر، سرحيه، ضيفي الصلصة والفرماج والتوبينقز وطيبيه في الكوشة." },
    { id: 13, name: "دجاج بالكوشة",          category: "meal", cookTime: 45, ingredients: ["دجاج","بطاطا","بصل","ثوم","طماطم","فلفل"],              instruction: "تبلي الدجاج بالتوابل والثوم، رصيه مع البطاطا والخضرة في بلا وأدخليه للكوشة 45 دقيقة." },
    { id: 14, name: "غراتان شوفلور",         category: "meal", cookTime: 40, ingredients: ["شوفلور","دجاج","فرماج","حليب","بيض","فرينة"],           instruction: "غلي الشوفلور وقليه مع الدجاج، ضعيهم في بلا مع صلصة البيشاميل والفرماج وحمريهم في الكوشة." },
    { id: 15, name: "مقرون بالبيشاميل",     category: "meal", cookTime: 45, ingredients: ["مقرون","لحم مفروم","فرماج","حليب","فرينة","زبدة","طماطم"], instruction: "غلي المقرون، طيبي اللحم بالطماطم والتوابل، حضري البيشاميل، ارصيهم طبقات وحمريهم." },
    { id: 16, name: "طاجين الحلو بالبرقوق",  category: "meal", cookTime: 55, ingredients: ["لحم غنم","برقوق","زبيب","لوز","بصل","عسل","قرفة"],     instruction: "طيبي اللحم مع البصل والقرفة، من بعد ضيفي البرقوق والزبيب والعسل وخليها تعقد." },
    { id: 17, name: "شخشوخة",               category: "meal", cookTime: 45, ingredients: ["لحم","طماطم","فلفل","حمص","فطائر","بصل","زرودية"],     instruction: "طيبي مرقة حمراء باللحم والخضرة والحمص، كسري فوقها الفطائر وخليها تتشرب المرقة." },
    { id: 18, name: "رشتة",                 category: "meal", cookTime: 50, ingredients: ["رشتة","لحم","بصل","حمص","زرودية","لوبيا","زيت"],        instruction: "طيبي مرقة بيضاء باللحم والحمص واللوبيا، فوقيها الرشتة ودوبيها فيها مع الزيت في الآخر." },
    { id: 19, name: "مسلوقة خرشف",          category: "meal", cookTime: 30, ingredients: ["خرشف","ليمون","زيت زيتون","ثوم","ملح"],                instruction: "غلي الخرشف في ماء مملح مع الليمون، قدميه مع صلصة الثوم والزيت والليمون." },
    { id: 20, name: "بريك بالتونة",         category: "meal", cookTime: 15, ingredients: ["ملسوقة","تونة","بيض","معدنوس","بصل","زيت"],             instruction: "ضعي تونة ومعدنوس وبصل على الملسوقة، وجدي في المنتصف بيضة، طيهي وقليها في الزيت." },
    { id: 21, name: "طاجين كفتة",           category: "meal", cookTime: 35, ingredients: ["لحم مفروم","بيض","طماطم","بصل","معدنوس","كمون","فلفل"], instruction: "كوري اللحم المفروم المتبل حبات، طيبي صلصة الطماطم والبصل، ضعي الكفتة واطيبي وكسري البيض فوق." },
    { id: 22, name: "شربة حمضيات",          category: "meal", cookTime: 40, ingredients: ["دجاج","ليمون","بصل","قزبر","زنجبيل","زعفران"],          instruction: "طيبي الدجاج مع البصل والزعفران والزنجبيل، من بعد ضيفي عصير الليمون والقزبر في الآخر." },
    { id: 23, name: "فاصوليا خضراء باللحم", category: "meal", cookTime: 40, ingredients: ["فاصوليا خضراء","لحم","طماطم","بصل","ثوم","زيت"],        instruction: "قليي الفاصوليا مع اللحم والبصل والطماطم والثوم، مرقي قليلاً وخليها تطيب على نار هادية." },
    { id: 24, name: "كسكسي بالبوفا",        category: "meal", cookTime: 55, ingredients: ["كسكسي","دجاج","حليب","زبدة","حمص","زبيب","قرفة"],      instruction: "فوري الكسكسي، طيبي الدجاج المحمر مع الحمص، قدمي الكسكسي بالحليب والزبدة والزبيب والقرفة." },
    { id: 25, name: "بوزلوف",               category: "meal", cookTime: 120, ingredients: ["رأس الغنم","كمون","فلفل","خل","ثوم","ليمون"],           instruction: "نظفي الرأس واغليه ساعتين، تبليه بالثوم والكمون والخل وقدميه حار." },
    // وجبات عالمية
    { id: 26, name: "ماكرونة بولونيز",      category: "meal", cookTime: 30, ingredients: ["مقرون","لحم مفروم","طماطم مصبرة","بصل","ثوم","زيتون أخضر"], instruction: "قلي البصل والثوم، ضيفي اللحم المفروم ثم الطماطم المصبرة، مرقي 20 دقيقة وقدمي على المقرون." },
    { id: 27, name: "ريزوتو بالفرماج",      category: "meal", cookTime: 35, ingredients: ["أرز أربوريو","مرقة دجاج","فرماج","بصل","زبدة"],          instruction: "قلي البصل، ضيفي الأرز وقلبيه، أضيفي المرقة مغرفة مغرفة مع التقليب المستمر حتى ينضج الأرز." },
    { id: 28, name: "كاري دجاج",            category: "meal", cookTime: 30, ingredients: ["دجاج","حليب جوز هند","كاري","بصل","ثوم","زنجبيل","طماطم"], instruction: "قلي البصل والثوم والزنجبيل، ضيفي الكاري والدجاج والطماطم، مرقي بحليب جوز الهند 25 دقيقة." },
    { id: 29, name: "ساندويش كلوب",         category: "meal", cookTime: 15, ingredients: ["خبز توست","دجاج مشوي","بيض","طماطم","خس","مايونيز"],    instruction: "حمري الخبز، رصي الدجاج والبيض المقلي والطماطم والخس والمايونيز وأغلقي الساندويش." },
    { id: 30, name: "شاورما دجاج",          category: "meal", cookTime: 25, ingredients: ["دجاج","ثوم","خبز عربي","طماطم","خيار","كريمة","ليمون"], instruction: "تبلي الدجاج بالبهارات وشويه، اثميه مع الخضرة وصلصة الثوم في الخبز العربي." },
    { id: 31, name: "سباغيتي كاربونارا",    category: "meal", cookTime: 25, ingredients: ["سباغيتي","لحم مدخن","بيض","فرماج","فلفل أسود"],          instruction: "غلي السباغيتي، قلي اللحم المدخن، خلطي البيض والفرماج، ضيفيهم على الباستا الساخنة بسرعة." },
    { id: 32, name: "صيادية سمك",           category: "meal", cookTime: 45, ingredients: ["سمك","أرز","بصل","زعفران","كمون","ليمون","لوز"],        instruction: "قلي البصل حتى يحمار، طيبي السمك مع التوابل، طيبي الأرز في مرقة السمك مع الزعفران واللوز." },
    { id: 33, name: "برغر بيتي",            category: "meal", cookTime: 20, ingredients: ["لحم مفروم","خبز برغر","طماطم","فرماج","بصل","خس","مايونيز"], instruction: "كوري اللحم قرصات وحمريها في الشواية أو الكوشة، ارصيها مع المقبلات في الخبز." },
    { id: 34, name: "سمك بالكوشة",         category: "meal", cookTime: 35, ingredients: ["سمك","بطاطا","طماطم","بصل","ثوم","فلفل","زيت زيتون"],   instruction: "رصي السمك مع البطاطا والخضرة في بلا، تبليهم بالثوم والتوابل وزيت الزيتون وطيبيهم في الكوشة." },
    { id: 35, name: "لفائف دجاج وخضر",     category: "meal", cookTime: 20, ingredients: ["خبز تورتيا","دجاج","فلفل","بصل","فرماج","كريمة"],       instruction: "قلي الدجاج مع الفلفل والبصل، ضيفي الفرماج والكريمة، وزعي الخليط على التورتيا ولفيها." },
    // تحليات
    { id: 101, name: "محلبي عاصمي",         category: "dessert", cookTime: 20, ingredients: ["حليب","أرز مطحون","سكر","ماء زهر","قرفة"],           instruction: "خلطي الحليب مع الأرز المطحون والسكر، طيبي على نار هادية مع التقليب المستمر حتى يعقد، زيني بالقرفة." },
    { id: 102, name: "فلون منزلي",           category: "dessert", cookTime: 50, ingredients: ["حليب","بيض","سكر","فانيليا","كراميل"],               instruction: "وجدي الكراميل في القالب، خلطي البيض والحليب والسكر والفانيليا، صبيها فوق الكراميل وطيبيها في حمام مائي." },
    { id: 103, name: "بسبوسة بالليمون",     category: "dessert", cookTime: 30, ingredients: ["سميد","بيض","سكر","ليمون","زيت","خميرة"],            instruction: "خلطي المكونات جيداً، طيبيها في الكوشة 30 دقيقة، وشربيها بشاربات الليمون وهي ساخنة." },
    { id: 104, name: "مسكوتشو",             category: "dessert", cookTime: 35, ingredients: ["فرينة","بيض","سكر","زيت","حليب","فانيليا","خميرة"],  instruction: "طلعي البيض والسكر بالبلانديرة، ضيفي الزيت والحليب، ارحي الفرينة والخميرة وطيبيها في الكوشة 35 دقيقة." },
    { id: 105, name: "كريب شوكولا",         category: "dessert", cookTime: 20, ingredients: ["فرينة","حليب","بيض","شوكولا","زبدة","سكر"],          instruction: "ارحي الفرينة مع البيض والحليب والسكر، طيبي في مقلة خفيفة الدهن، اطلي بشوكولا النوتيلا." },
    { id: 106, name: "موس الشوكولا",        category: "dessert", cookTime: 15, ingredients: ["شوكولا داكنة","بيض","سكر","زبدة","كريمة"],           instruction: "ذوبي الشوكولا مع الزبدة، خلطي مع صفار البيض والسكر، طلعي البياض والكريمة واخلطيهم ببطء." },
    { id: 107, name: "تيراميسو",            category: "dessert", cookTime: 20, ingredients: ["بسكويت بيدو","قهوة","كريمة مسكو","كاكاو","سكر","بيض"], instruction: "شمخي البسكويت في القهوة الباردة، ارصي طبقة بسكويت ثم طبقة كريم المسكو، زيني بالكاكاو وبريديها." },
    { id: 108, name: "قلب اللوز",           category: "dessert", cookTime: 35, ingredients: ["سميد خشن","سكر","لوز","ماء زهر","زبدة","قرفة"],      instruction: "خلطي السميد مع السكر والزبدة وماء الزهر، ديري في السنيوة، زيني باللوز والقرفة وطيبيه في الكوشة." },
    { id: 109, name: "بغرير بالعسل",        category: "dessert", cookTime: 25, ingredients: ["سميد ناعم","فرينة","خميرة","عسل","زبدة","ماء"],      instruction: "ارحي المقادير في الخلاط، خلي العجينة ترتاح ساعة، طيبي الحبات في مقلة بدون دهن واسقيهم بالعسل والزبدة." },
    { id: 110, name: "سلطة فواكه",          category: "dessert", cookTime: 10, ingredients: ["تفاح","بنان","فراولة","برتقال","عنب","سكر","ليمون"],  instruction: "قطعي كل الفواكه صغيرة، ضيفي السكر وعصرة الليمون وماء الزهر، خلطيهم وبريديهم." },
    { id: 111, name: "طمينة",               category: "dessert", cookTime: 15, ingredients: ["سميد متوسط","عسل","زبدة","قرفة","قزحة"],             instruction: "حمسي السميد في الفرن أو المقلة حتى يحمار، ذوبي الزبدة مع العسل وخلطيهم، قدميها بالقرفة والقزحة." },
    { id: 112, name: "مقروط تمر",           category: "dessert", cookTime: 40, ingredients: ["سميد خشن","تمر","زيت","عسل","ماء زهر","قرفة"],      instruction: "اعجني السميد بالزيت وماء الزهر والملح، احشيه بالغرس المتبل بالقرفة، شكليه وطيبيه وعسليه." },
    { id: 113, name: "زلابية",              category: "dessert", cookTime: 30, ingredients: ["فرينة","خميرة","سكر","عسل","زيت","ماء زهر","زعفران"], instruction: "حضري عجينة سائلة بالفرينة والخميرة والزعفران، قليها دوائر في الزيت واسقيها فوراً بالعسل وماء الزهر." },
    { id: 114, name: "كعك بالزيت",          category: "dessert", cookTime: 35, ingredients: ["فرينة","زيت","سكر","بيض","فانيليا","خميرة","سمسم"],  instruction: "خلطي المكونات لعجينة متماسكة، شكليها حلقات، دحرجيها في السمسم وطيبيها في الكوشة حتى تذهب." },
    { id: 115, name: "شعيبيات",             category: "dessert", cookTime: 30, ingredients: ["ملسوقة","لوز","سكر بودرة","ماء زهر","زبدة"],         instruction: "طحني اللوز مع السكر وماء الزهر، ضعي الحشوة في الملسوقة المدهونة بالزبدة، قطعيها وطيبيها." },
    { id: 116, name: "تشاركة بالعسل",      category: "dessert", cookTime: 10, ingredients: ["تمر","لوز","كاوكاو","سمسم","عسل","قرفة"],            instruction: "نزعي نوى التمر، احشيه بالكاوكاو أو اللوز، مرغيه في السمسم أو عسليه وقدميه." },
    { id: 117, name: "حلوى تافيفالت",      category: "dessert", cookTime: 20, ingredients: ["تمر","سميد","زبدة","عسل","لوز","قزحة"],              instruction: "دقي التمر مع السميد المحمس والزبدة وماء الزهر، كوري الكرات وزينيها باللوز أو القزحة." },
    { id: 118, name: "براونيز شوكولا",      category: "dessert", cookTime: 25, ingredients: ["شوكولا داكنة","زبدة","سكر","بيض","فرينة","كاكاو"],   instruction: "ذوبي الشوكولا مع الزبدة، خلطي مع البيض والسكر، ضيفي الفرينة والكاكاو، طيبي في الكوشة 20 دقيقة." },
    { id: 119, name: "كيك ليمون",           category: "dessert", cookTime: 35, ingredients: ["فرينة","بيض","سكر","زيت","ليمون","خميرة","حليب"],    instruction: "خلطي الجاف، خلطي السائل منفصل، ارحيهم، ضيفي قشرة الليمون وطيبي 35 دقيقة." },
    { id: 120, name: "بنا كوتا",            category: "dessert", cookTime: 15, ingredients: ["كريمة","حليب","سكر","جيلاتين","فانيليا","فراولة"],   instruction: "سخني الكريمة والحليب والسكر، ذوبي فيهم الجيلاتين المنقوع، ضيفي الفانيليا وصبي في القوالب وبريدي." },
    { id: 121, name: "بنكيك بالعسل",        category: "dessert", cookTime: 20, ingredients: ["فرينة","بيض","حليب","زبدة","سكر","عسل","خميرة"],    instruction: "ارحي الفرينة مع البيض والحليب والزبدة والخميرة، طيبي الحبات المستديرة، قدميها بالعسل والزبدة." },
    { id: 122, name: "آيس كريم بيتي",       category: "dessert", cookTime: 10, ingredients: ["كريمة","حليب مكثف","فانيليا","بسكويت","شوكولا"],    instruction: "اخفقي الكريمة جيداً، خلطيها بالحليب المكثف والفانيليا، علبيها مع الطبقات وبريديها 6 ساعات." },
    { id: 123, name: "مافن تمر وجوز",       category: "dessert", cookTime: 22, ingredients: ["فرينة","تمر","جوز","بيض","زيت","سكر","خميرة","قرفة"], instruction: "خلطي الجاف والسائل منفصلين، ضيفي التمر المفروم والجوز، وزعي في قوالب المافن وطيبي 20 دقيقة." }
];

const mealIngredients = [
    "دجاج","لحم","لحم مفروم","كبدة","سمك","تونة",
    "بصل","ثوم","زنجبيل","طماطم","طماطم مصبرة","فلفل","فلفل حار",
    "بطاطا","زرودية","قرعة","لفت","شوفلور","خرشف","فاصوليا خضراء","ملفوف",
    "زيتون","حمص","عدس","لوبيا","فريك","كسكسي","أرز","مقرون","سباغيتي","رشتة",
    "فرينة","سميد","ملسوقة","خبز عربي","خبز تورتيا",
    "بيض","حليب","فرماج","كريمة","زبدة","زيت","زيت زيتون",
    "قزبر","معدنوس","كمون","زعفران","قرفة","خل",
    "برقوق","زبيب","لوز","سكر","ليمون","ليمون مرقد",
    "مايونيز","كاري","حليب جوز هند","خميرة","خس","خيار"
];

const dessertIngredients = [
    "حليب","حليب مكثف","كريمة","كريمة مسكو",
    "سكر","سكر بودرة","عسل","كراميل",
    "بيض","زبدة","زيت",
    "أرز مطحون","مايزينا","جيلاتين",
    "سميد ناعم","سميد خشن","سميد متوسط","فرينة",
    "ماء زهر","فانيليا","قرفة","قزحة",
    "شوكولا داكنة","شوكولا","كاكاو",
    "بسكويت","بسكويت بيدو","قهوة",
    "لوز","جوز","كاوكاو","سمسم",
    "تمر","زبيب","برقوق","خميرة",
    "ليمون","برتقال","تفاح","بنان","فراولة","عنب"
];

// ================================================================
// 2. المتغيرات
// ================================================================
let currentMode        = '';
let currentCategory    = '';
let selectedIngredients = [];
let currentPlan        = [];
let catalogFilter      = 'all';
let timerInterval      = null;
let timerSeconds       = 20 * 60;
let timerRunning       = false;
let pendingDeleteId    = null;
let pendingDeleteType  = null; // 'recipe' | 'plan'

// ================================================================
// 3. التهيئة
// ================================================================
window.onload = function () {
    // ثيم
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    document.getElementById('themeBtn').innerText = savedTheme === 'dark' ? '☀️' : '🌙';

    // استرجاع وصفات مخصصة
    loadCustomRecipes();

    // إخفاء السبلاش بعد ثانيتين
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        splash.classList.add('hide');
        setTimeout(() => splash.remove(), 600);
    }, 2000);
};

// ================================================================
// 4. الثيم
// ================================================================
function toggleTheme() {
    const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.getElementById('themeBtn').innerText = newTheme === 'dark' ? '☀️' : '🌙';
}

// ================================================================
// 5. Toast Notifications
// ================================================================
function showToast(msg, type = 'info', duration = 2800) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('out');
        setTimeout(() => toast.remove(), 350);
    }, duration);
}

// ================================================================
// 6. التنقل
// ================================================================
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}
function goBack(id) { showScreen(id); }

// ================================================================
// 7. المقادير والاقتراح
// ================================================================
function setMode(mode, category) {
    currentMode = mode;
    currentCategory = category;
    selectedIngredients = [];
    const title = category === 'meal' ? '🥘 اختاري مقادير الوجبة:' : '🧁 اختاري مقادير التحلية:';
    document.getElementById('ingredientsTitle').innerText = title;
    renderIngredients();
    showScreen('screen-ingredients');
}

function renderIngredients() {
    const list = document.getElementById('ingredientsList');
    list.innerHTML = '';
    const activeList = [...(currentCategory === 'meal' ? mealIngredients : dessertIngredients)].sort();
    activeList.forEach(ing => {
        const div = document.createElement('div');
        div.className = 'ingredient-item';
        div.innerText = ing;
        div.onclick = () => {
            div.classList.toggle('selected');
            if (selectedIngredients.includes(ing))
                selectedIngredients = selectedIngredients.filter(i => i !== ing);
            else selectedIngredients.push(ing);
        };
        list.appendChild(div);
    });
}

function generatePlan() {
    if (selectedIngredients.length === 0) {
        showToast('⚠️ اختاري مقدار واحد على الأقل!', 'error');
        return;
    }
    let filtered = recipesDB.filter(r =>
        r.category === currentCategory &&
        r.ingredients.some(ing => selectedIngredients.includes(ing))
    );
    if (filtered.length === 0) filtered = recipesDB.filter(r => r.category === currentCategory);

    // خلط عشوائي حقيقي
    filtered = [...filtered].sort(() => Math.random() - 0.5);

    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';
    currentPlan = [];

    if (currentMode === 'daily') {
        const recipe = filtered[0];
        currentPlan.push(recipe);
        document.getElementById('btn-shopping').style.display = 'none';
        document.getElementById('resultTitle').innerText = 'اقتراح اليوم 🍽️';
        container.innerHTML = `
            <div class="card">
                <h2 style="color:${currentCategory === 'meal' ? 'var(--primary)' : 'var(--dessert)'};font-size:22px;margin-bottom:10px;">${recipe.name}</h2>
                <p style="font-size:13px;color:var(--text-muted);margin-bottom:14px;">
                    <strong>المقادير:</strong> ${recipe.ingredients.join(' · ')}
                </p>
                <button class="btn-primary" onclick="showRecipe(${recipe.id})">طريقة التحضير 🍳</button>
            </div>`;
    } else {
        const days = ["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"];
        document.getElementById('btn-shopping').style.display = 'block';
        document.getElementById('resultTitle').innerText = 'جدول الأسبوع 📅';
        days.forEach((day, i) => {
            const recipe = filtered[i % filtered.length];
            currentPlan.push(recipe);
            const color = currentCategory === 'meal' ? 'var(--primary)' : 'var(--dessert)';
            container.innerHTML += `
                <div class="weekly-item" style="border-right-color:${color}">
                    <span class="day-label">${day}</span>
                    <span class="meal-name">${recipe.name}</span>
                    <button class="btn-small" onclick="showRecipe(${recipe.id})">وصفة</button>
                </div>`;
        });
    }
    showScreen('screen-result');
}

// ================================================================
// 8. الحفظ والمشاركة والطباعة
// ================================================================
function saveCurrentPlan() {
    if (!currentPlan.length) return;
    let saved = JSON.parse(localStorage.getItem('myPlans') || '[]');
    saved.push({
        type: currentMode,
        category: currentCategory,
        date: new Date().toLocaleDateString('ar-DZ'),
        items: currentPlan.map(p => p.name)
    });
    localStorage.setItem('myPlans', JSON.stringify(saved));
    showToast('✅ تم حفظ الجدول بنجاح!', 'success');
    setTimeout(() => showScreen('screen-welcome'), 1500);
}

function showSavedMenus() {
    const saved = JSON.parse(localStorage.getItem('myPlans') || '[]');
    const list = document.getElementById('savedList');
    list.innerHTML = '';

    if (!saved.length) {
        list.innerHTML = `
            <div class="empty-saved">
                <span class="empty-icon">📂</span>
                <p>ماكانش جداول محفوظة بعد</p>
                <p style="font-size:12px;margin-top:6px;opacity:0.6">جربي اقتراح وجبة واحفظيها!</p>
            </div>`;
        showScreen('screen-saved');
        return;
    }

    for (let i = saved.length - 1; i >= 0; i--) {
        const plan = saved[i];
        const isMeal = plan.category === 'meal';
        const borderColor = isMeal ? 'var(--primary)' : 'var(--dessert)';
        const typeLabel = plan.type === 'daily' ? 'يومي' : 'أسبوعي';
        const catLabel = isMeal ? '🥘 وجبات' : '🧁 تحليات';

        let itemsHtml = '';
        if (plan.type === 'daily') {
            itemsHtml = `<div style="margin-top:6px;color:${borderColor};font-weight:700;font-size:14px;">${plan.items[0]}</div>`;
        } else {
            itemsHtml = `<ul>`;
            plan.items.slice(0, 3).forEach(item => { itemsHtml += `<li>${item}</li>`; });
            if (plan.items.length > 3) itemsHtml += `<li>... و${plan.items.length - 3} أكثر</li>`;
            itemsHtml += `</ul>`;
        }

        const li = document.createElement('li');
        li.className = 'saved-item';
        li.style.borderRight = `5px solid ${borderColor}`;
        li.innerHTML = `
            <div class="saved-item-header">
                <div class="saved-item-title">${typeLabel} (${catLabel})<br><span style="font-weight:400;font-size:11px;color:var(--text-muted)">${plan.date}</span></div>
                <div class="saved-item-actions">
                    <button class="btn-small" style="background:#25D366" onclick="shareSavedPlan(${i})">📲</button>
                    <button class="btn-small" style="background:var(--blue)" onclick="printSavedPlan(${i})">🖨️</button>
                    <button class="btn-small" style="background:var(--primary);opacity:0.8" onclick="confirmDeletePlan(${i})">🗑️</button>
                </div>
            </div>
            ${itemsHtml}`;
        list.appendChild(li);
    }
    showScreen('screen-saved');
}

// --- حذف جدول ---
function confirmDeletePlan(index) {
    pendingDeleteId = index;
    pendingDeleteType = 'plan';
    document.getElementById('confirmText').innerText = 'هل تريدين حذف هذا الجدول؟';
    document.getElementById('confirmYesBtn').onclick = () => {
        let saved = JSON.parse(localStorage.getItem('myPlans') || '[]');
        saved.splice(pendingDeleteId, 1);
        localStorage.setItem('myPlans', JSON.stringify(saved));
        closeModal('confirmModal');
        showToast('🗑️ تم حذف الجدول', 'info');
        showSavedMenus();
    };
    document.getElementById('confirmModal').style.display = 'block';
}

// --- المشاركة ---
function shareCurrentPlan() {
    performShare(currentPlan, `جدول كوزينتي (${currentCategory === 'meal' ? 'وجبات' : 'تحليات'})`);
}
function shareSavedPlan(index) {
    const saved = JSON.parse(localStorage.getItem('myPlans') || '[]');
    const target = saved[index];
    if (!target) return;
    const enriched = target.items.map(name => recipesDB.find(r => r.name === name) || { name, ingredients: [] });
    performShare(enriched, `جدول محفوظ (${target.category === 'meal' ? 'وجبات' : 'تحليات'})`);
}
function performShare(planList, title) {
    const days = ["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"];
    let text = `👩‍🍳 *${title}*\n\n`;
    planList.forEach((r, i) => {
        const label = planList.length === 1 ? '🍽️ الاقتراح: ' : `📅 ${days[i] || 'يوم ' + (i + 1)}: `;
        text += `${label}*${r.name}*\n`;
    });
    text += `\n❤️ بصحتكم ولهنا! — كوزينتي`;
    if (navigator.share) navigator.share({ title: 'كوزينتي', text }).catch(() => {});
    else window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

// --- الطباعة ---
function printCurrentPlan() {
    preparePrintTable(currentPlan, `جدول ${currentCategory === 'meal' ? 'الوجبات' : 'التحليات'} — ${new Date().toLocaleDateString('ar-DZ')}`);
    handlePrint();
}
function printSavedPlan(index) {
    const saved = JSON.parse(localStorage.getItem('myPlans') || '[]');
    const target = saved[index];
    if (!target) return;
    const enriched = target.items.map(name => recipesDB.find(r => r.name === name) || { name, ingredients: [] });
    preparePrintTable(enriched, `جدول محفوظ (${target.date})`);
    handlePrint();
}
function preparePrintTable(list, title) {
    const tbody = document.getElementById('printTableBody');
    tbody.innerHTML = '';
    document.getElementById('printDate').innerText = title;
    const days = ["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"];
    list.forEach((r, i) => {
        tbody.innerHTML += `
            <tr>
                <td style="text-align:center;font-weight:bold">${list.length === 1 ? 'وجبة اليوم' : (days[i] || `يوم ${i+1}`)}</td>
                <td style="font-weight:bold;font-size:15px">${r.name}</td>
                <td>${r.ingredients ? r.ingredients.join('، ') : '—'}</td>
            </tr>`;
    });
}
function handlePrint() {
    document.body.classList.add('printing-mode');
    setTimeout(() => {
        window.print();
        setTimeout(() => document.body.classList.remove('printing-mode'), 1000);
    }, 100);
}

// ================================================================
// 9. قائمة التسوق
// ================================================================
function generateShoppingList() {
    const all = [];
    currentPlan.forEach(r => { if (r.ingredients) all.push(...r.ingredients); });
    const unique = [...new Set(all)];
    const container = document.getElementById('shoppingListItems');
    container.innerHTML = unique.length
        ? unique.map(ing => `
            <li class="shopping-item" onclick="this.classList.toggle('bought')">
                <span class="checkbox-circle"></span>
                <span>${ing}</span>
            </li>`).join('')
        : '<p style="color:var(--text-muted);padding:20px">لا توجد مقادير.</p>';
    document.getElementById('shoppingModal').style.display = 'block';
}

// ================================================================
// 10. مؤقت الطبخ
// ================================================================
function adjustTimer(delta) {
    if (timerRunning) return;
    timerSeconds = Math.max(60, timerSeconds + delta * 60);
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    document.getElementById('timerDisplay').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function startTimerFromDisplay() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        document.querySelector('.timer-start').innerText = '▶ ابدأ';
        return;
    }
    timerRunning = true;
    document.querySelector('.timer-start').innerText = '⏸ إيقاف';
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            document.getElementById('timerDisplay').innerText = 'الوقت انتهى! 🔔';
            document.querySelector('.timer-start').innerText = '▶ ابدأ';
            showToast('⏰ راهو طاب الأكل!', 'success', 4000);
        }
    }, 1000);
}

// ================================================================
// 11. عرض الوصفة
// ================================================================
function showRecipe(id) {
    const r = recipesDB.find(x => x.id === id);
    if (!r) return;

    document.getElementById('modalTitle').innerText = r.name;
    document.getElementById('modalIngredients').innerText = '🧂 ' + r.ingredients.join(' · ');
    document.getElementById('modalBody').innerText = r.instruction;

    const sourceBadge = document.getElementById('modalSource');
    const isCustom = id > 1000000;
    if (isCustom) {
        sourceBadge.style.display = 'inline-block';
        sourceBadge.innerText = '✏️ وصفتك الخاصة';
    } else {
        sourceBadge.style.display = 'none';
    }

    // ضبط المؤقت حسب وقت الطبخ
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = (r.cookTime || 20) * 60;
    updateTimerDisplay();
    if (document.querySelector('.timer-start'))
        document.querySelector('.timer-start').innerText = '▶ ابدأ';

    document.getElementById('recipeModal').style.display = 'block';
}

// ================================================================
// 12. الـ Modals
// ================================================================
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    if (id === 'recipeModal') {
        clearInterval(timerInterval);
        timerRunning = false;
    }
}

function handleModalBgClick(e, id) {
    if (e.target.id === id) closeModal(id);
}

// ================================================================
// 13. الكتالوج
// ================================================================
function showAllRecipes() {
    catalogFilter = 'all';
    document.getElementById('searchBox').value = '';
    document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
    renderCatalog();
    showScreen('screen-catalog');
}

function filterCatalog(cat, btn) {
    catalogFilter = cat;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderCatalog();
}

function searchCatalog() { renderCatalog(); }

function renderCatalog() {
    const query = (document.getElementById('searchBox')?.value || '').trim().toLowerCase();
    const filtered = recipesDB.filter(r => {
        const matchCat = catalogFilter === 'all' || r.category === catalogFilter;
        const matchSearch = !query || r.name.includes(query) || r.ingredients.some(i => i.includes(query));
        return matchCat && matchSearch;
    });

    // عداد الوصفات
    const total = recipesDB.length;
    const meals = recipesDB.filter(r => r.category === 'meal').length;
    const desserts = recipesDB.filter(r => r.category === 'dessert').length;
    document.getElementById('catalogStats').innerText =
        `${total} وصفة — ${meals} وجبة · ${desserts} تحلية`;

    const container = document.getElementById('catalogContainer');
    if (!filtered.length) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🔍</span>
                <p>ما لقيناش وصفة مناسبة</p>
            </div>`;
        return;
    }

    const customIds = (JSON.parse(localStorage.getItem('customRecipes') || '[]')).map(r => r.id);

    container.innerHTML = filtered.map(r => {
        const isDessert = r.category === 'dessert';
        const isCustom = customIds.includes(r.id);
        const emoji = isDessert ? '🧁' : '🥘';
        const badge = isCustom ? 'وصفتي' : (isDessert ? 'تحلية' : 'وجبة');
        const cardClass = isCustom ? 'custom-card' : (isDessert ? 'dessert-card' : '');
        return `
            <div class="catalog-card ${cardClass}" onclick="showRecipe(${r.id})">
                ${isCustom ? `<button class="card-delete-btn" onclick="event.stopPropagation(); confirmDeleteRecipe(${r.id})">✕</button>` : ''}
                <span class="card-badge">${badge}</span>
                <span class="card-emoji">${emoji}</span>
                <div class="card-name">${r.name}</div>
                <div class="card-ingredients">${r.ingredients.slice(0, 3).join(' · ')}${r.ingredients.length > 3 ? '…' : ''}</div>
            </div>`;
    }).join('');
}

// ================================================================
// 14. إضافة وصفة جديدة
// ================================================================
function showAddRecipeScreen() {
    document.getElementById('newRecipeName').value = '';
    document.getElementById('newRecipeInstructions').value = '';
    document.getElementById('newRecipeCategory').value = 'meal';
    updateNewRecipeIngredients();
    showScreen('screen-add');
}

function updateNewRecipeIngredients() {
    const cat = document.getElementById('newRecipeCategory').value;
    const list = [...(cat === 'meal' ? mealIngredients : dessertIngredients)].sort();
    const grid = document.getElementById('newRecipeIngredients');
    grid.innerHTML = '';
    list.forEach(ing => {
        const div = document.createElement('div');
        div.className = 'ingredient-item';
        div.innerText = ing;
        div.onclick = () => div.classList.toggle('selected');
        grid.appendChild(div);
    });
}

function addNewRecipe() {
    const name = document.getElementById('newRecipeName').value.trim();
    const category = document.getElementById('newRecipeCategory').value;
    const instruction = document.getElementById('newRecipeInstructions').value.trim();
    const selected = [...document.querySelectorAll('#newRecipeIngredients .ingredient-item.selected')].map(el => el.innerText);

    if (!name) { showToast('⚠️ اكتبي اسم الوصفة!', 'error'); return; }
    if (!instruction) { showToast('⚠️ اكتبي طريقة التحضير!', 'error'); return; }
    if (!selected.length) { showToast('⚠️ اختاري مقدار واحد على الأقل!', 'error'); return; }

    const customs = JSON.parse(localStorage.getItem('customRecipes') || '[]');
    const newId = Date.now();
    const newRecipe = { id: newId, name, category, cookTime: 25, ingredients: selected, instruction };
    customs.push(newRecipe);
    localStorage.setItem('customRecipes', JSON.stringify(customs));
    recipesDB.push(newRecipe);

    showToast(`✅ تم حفظ "${name}"!`, 'success');
    setTimeout(() => showScreen('screen-welcome'), 1400);
}

// حذف وصفة مخصصة
function confirmDeleteRecipe(id) {
    pendingDeleteId = id;
    pendingDeleteType = 'recipe';
    document.getElementById('confirmText').innerText = 'هل تريدين حذف هذه الوصفة نهائياً؟';
    document.getElementById('confirmYesBtn').onclick = () => {
        let customs = JSON.parse(localStorage.getItem('customRecipes') || '[]');
        customs = customs.filter(r => r.id !== pendingDeleteId);
        localStorage.setItem('customRecipes', JSON.stringify(customs));

        const idx = recipesDB.findIndex(r => r.id === pendingDeleteId);
        if (idx > -1) recipesDB.splice(idx, 1);

        closeModal('confirmModal');
        showToast('🗑️ تم حذف الوصفة', 'info');
        renderCatalog();
    };
    document.getElementById('confirmModal').style.display = 'block';
}

// ================================================================
// 15. استرجاع الوصفات المخصصة
// ================================================================
function loadCustomRecipes() {
    const customs = JSON.parse(localStorage.getItem('customRecipes') || '[]');
    customs.forEach(cr => {
        if (!recipesDB.find(r => r.id === cr.id)) recipesDB.push(cr);
    });
}

// ================================================================
// 16. شاشة عن التطبيق — إحصائيات
// ================================================================
function showAboutStats() {
    const meals   = recipesDB.filter(r => r.category === 'meal').length;
    const desserts = recipesDB.filter(r => r.category === 'dessert').length;
    const customs  = JSON.parse(localStorage.getItem('customRecipes') || '[]').length;
    const saved    = JSON.parse(localStorage.getItem('myPlans') || '[]').length;

    const container = document.getElementById('aboutStats');
    if (container) {
        container.innerHTML = `
            <div class="about-stat-item">🥘 ${meals} وجبة</div>
            <div class="about-stat-item">🧁 ${desserts} تحلية</div>
            ${customs ? `<div class="about-stat-item">✏️ ${customs} وصفتي</div>` : ''}
            ${saved ? `<div class="about-stat-item">📂 ${saved} جدول محفوظ</div>` : ''}`;
    }
}
// ==========================================
// دالة زر تحميل التطبيق للأندرويد
// ==========================================
function downloadAndroidApp() {
    // اسم ملف الـ APK تماماً كما قمت بتسميته في مجلد مشروعك
    const apkFileName = "كوزينتي_1_1.0.apk"; 
    
    // إنشاء رابط التحميل برمجياً
    const link = document.createElement('a');
    link.href = apkFileName;
    link.download = "Cuisinety_App.apk"; // الاسم الذي سيظهر للمستخدم عند تحميل الملف
    
    // إضافة الرابط للصفحة، الضغط عليه، ثم إزالته
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// تحديث الإحصائيات عند فتح الشاشة
const _origShowScreen = showScreen;
// نعيد تعريف showScreen لإضافة سلوك إضافي
window.showScreen = function(id) {
    _origShowScreen(id);
    if (id === 'screen-about') showAboutStats();
};
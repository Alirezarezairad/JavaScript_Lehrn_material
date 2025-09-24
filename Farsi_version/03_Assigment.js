// ===============================
// 🎓 تفاوت کپی آبجکت و آرایه در جاوااسکریپت
// ===============================

// --------- Object ---------
let person = { name: "Hadi" };
let aPerson;

// ---- Normal Assignment (کپی سطحی / Shallow Copy) ----
        // 📌 کاربرد: وقتی از = استفاده کنیم، فقط "آدرس حافظه" کپی میشه
        // یعنی هر تغییری در aPerson روی person هم اثر می‌ذاره
// aPerson = person;

// ---- Deep Assignment (کپی عمیق / Deep Copy) ----
        // 📌 کاربرد: ساختن یک آبجکت جدید مستقل
        // حالا تغییرات در aPerson روی person اثری نداره
 aPerson = Object.assign({}, person);

// اینجا چون aPerson تعریف شده ولی مقدار نگرفته، مقدارش undefined هست
// در نتیجه اگر خط زیر اجرا بشه خطا میده
aPerson.name = "Mahdi";

console.log(person);
console.log(aPerson);


// --------- Array ---------
let number = [1, 2, 3];
let aNumber;

// ---- Normal Assignment ----
// 📌 کاربرد: مثل آبجکت، فقط "آدرس آرایه" کپی میشه
// یعنی تغییر در aNumber روی number هم اثر میذاره
// aNumber = number;

// ---- Deep Assignment ----
// 📌 کاربرد: ساختن آرایه جدید مستقل
 aNumber = Object.assign([], number);

// اینجا چون aNumber مقدار نداره (undefined)،
 // دسترسی به aNumber[0] خطا خواهد داد
aNumber[0] = 0;

console.log(number);
console.log(aNumber);


// ✨ نکات آموزشی

// وقتی با = یک آبجکت یا آرایه رو به متغیر دیگه می‌دی → فقط آدرس کپی میشه.

// یعنی هر دو متغیر به همون داده‌ی اصلی اشاره می‌کنن.

// برای درست کپی گرفتن باید از روش‌هایی مثل Object.assign یا spread operator ({...person} , [...number]) استفاده کنی.

// 📌 کاربرد واقعی

// وقتی فقط می‌خوای یک نام مستعار (alias) داشته باشی → normal assignment کافیه.

// وقتی می‌خوای داده‌ها مستقل باشن (مثلاً در فرم ثبت‌نام نسخه‌ی پشتیبان بگیری) → deep copy لازم داری.

// 🔥 نکته: الان کدی که نوشتی خطا میده چون aPerson و aNumber مقداردهی نشدن (undefined هستن).
// اگه بخوای درست کار کنه باید یکی از دو روش کپی رو فعال کنی.
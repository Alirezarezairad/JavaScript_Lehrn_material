let result;
let firtstName = "Hadi";
let lastName = "Mahdi";
let age = 25;
let job = "Engineer";

// ===============================
// 🎓 کار با رشته‌ها (Strings) در JavaScript
// ===============================

// --------- Escape Character (\) ---------
// 📌 کاربرد: استفاده از کاراکترهای خاص داخل رشته (مثل ' یا ")
// اینجا از \' استفاده شده تا داخل رشته بتونیم از ' استفاده کنیم
result = 'it\'s a great day to learn javascript';
console.log(result);

// --------- Concatenation (اتصال رشته‌ها) ---------
// 📌 کاربرد: ترکیب چند رشته با هم
result = firtstName + " " + lastName;
console.log(result);

// اتصال رشته‌ها به صورت سنتی (قدیمی‌تر)
result = "hello my name is " + firtstName + " " + lastName + 
         " and i am " + age + " years old and i am a " + job + ".";
console.log(result);

// --------- Template Literals (بک‌تیک و ${}) ---------
// 📌 کاربرد: نوشتن رشته‌ها به شکل خواناتر و راحت‌تر
result = `hello my name is ${firtstName} ${lastName} and i am ${age} years old and i am a ${job}.`;
console.log(result);


// ===============================
// 🎓 متدها و ویژگی‌های رشته‌ها
// ===============================

let fName = "Hadi hashemi";
let str = "hello my name is Hadi hashemi and i am 25 years old and i am a Engineer.";

// --------- length ---------
// 📌 کاربرد: پیدا کردن طول رشته (تعداد کاراکترها)
result = fName.length;
console.log(result);

// --------- toUpperCase() ---------
// 📌 کاربرد: تبدیل تمام حروف به بزرگ
result = fName.toUpperCase();
console.log(result);

// --------- toLowerCase() ---------
// 📌 کاربرد: تبدیل تمام حروف به کوچک
result = fName.toLowerCase();
console.log(result);

// --------- دسترسی با ایندکس ---------
// 📌 کاربرد: گرفتن یک کاراکتر مشخص از رشته
// اینجا آخرین کاراکتر رشته رو می‌ده
result = fName[fName.length - 1];
console.log(result);

// --------- indexOf() ---------
// 📌 کاربرد: پیدا کردن اولین موقعیت (ایندکس) یک کلمه یا کاراکتر
result = fName.indexOf('hashemi');
console.log(result);

// --------- lastIndexOf() ---------
// 📌 کاربرد: پیدا کردن آخرین ایندکس یک کاراکتر در رشته
result = fName.lastIndexOf("d");
console.log(result);

// --------- slice(start,end) ---------
// 📌 کاربرد: برش بخشی از رشته
// اینجا کاراکترهای 0 تا 3 (یعنی "Hadi")
result = fName.slice(0,4);
console.log(result);

// --------- split() ---------
// 📌 کاربرد: تبدیل رشته به آرایه بر اساس یک جداکننده
// اینجا بر اساس فاصله " " رشته به آرایه تقسیم میشه
result = str.split(" ");
console.log(result);

// --------- replace() ---------
// 📌 کاربرد: جایگزینی متن
// اینجا "Hadi" با "Mahdi" عوض میشه
result = fName.replace("Hadi","Mahdi");
console.log(result);

// --------- includes() ---------
// 📌 کاربرد: بررسی وجود یک زیررشته (true/false)
result = fName.includes("Hadi");
console.log(result);

// --------- charAt() ---------
// 📌 کاربرد: گرفتن یک کاراکتر مشخص از رشته
// اینجا "H" رو می‌ده
result = fName.charAt(0);
console.log(result);    

// ✨ نکات آموزشی

// Concatenation (+) → روش قدیمی برای ترکیب رشته‌هاست.

// Template Literals (`, ${}) → روش مدرن‌تر و خواناتر برای نوشتن متن‌های طولانی.

// length → تعداد کاراکترها (شامل فاصله‌ها هم).

// slice → برای بریدن بخشی از متن.

// split → برای تبدیل جمله به کلمات (آرایه).

// replace → فقط اولین occurrence رو جایگزین می‌کنه (برای همه باید از regex یا replaceAll استفاده کنی).

// includes → خیلی سریع چک می‌کنه که آیا فلان کلمه داخل رشته هست یا نه.

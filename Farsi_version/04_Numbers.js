// ===============================
// 🎓 عملگرهای عددی و شیء Math در JavaScript
// ===============================

let result;
let num1 = 5;
let num2 = 10;

// --------- جمع (+) ---------
// 📌 کاربرد: محاسبات ساده، جمع قیمت‌ها، مجموع امتیاز
result = num1 + num2;
console.log("جمع 5 و 10 => " + result + " \n");

// --------- تفریق (-) ---------
// 📌 کاربرد: اختلاف دو مقدار، محاسبه فاصله، مانده حساب
result = num1 - num2;
console.log("تفریق 5 و 10 => " + result + " \n");

// --------- ضرب (*) ---------
// 📌 کاربرد: مساحت، قیمت × تعداد، مقیاس‌دهی
result = num1 * num2;
console.log("ضرب 5 و 10 => " + result + " \n");

// --------- تقسیم (/) ---------
// 📌 کاربرد: میانگین، نسبت‌ها، تبدیل واحدها
result = num1 / num2;
console.log("تقسیم 5 و 10 => " + result + " \n");

// --------- باقیمانده (%) ---------
// 📌 کاربرد: تشخیص زوج/فرد (n % 2)، حلقه‌ها، تقسیم‌بندی دسته‌ها
result = num1 % num2;
console.log("باقیمانده 5 و 10 => " + result + " \n");

// --------- توان (**) ---------
// 📌 کاربرد: توان‌های ریاضی، رشد نمایی، مربع/مکعب
result = num1 ** num2;
console.log("قدر 5 و 10 => " + result + " \n");


// ===============================
// 🔺 اولویت عملگرها (Operator Precedence)
// * و / و % قبل از + و - اجرا می‌شوند
// ** از همه بالاتر است (راست‌چسبان)
// پرانتز همیشه از همه اولویت بالاتری دارد
// ===============================
result = 1 + 2 * 2;      // 1 + (2*2) = 5
console.log("1+2*2 => " + result + " \n");

result = (1 + 2) * 2;    // (1+2) * 2 = 6
console.log("(1+2)*2 => " + result + " \n");

result = 1 + 2 ** 2;     // 1 + (2**2) = 5
console.log("1+2**2 => " + result + " \n");

result = (1 + 2) ** 2;   // (3)**2 = 9
console.log("(1+2)**2 => " + result + " \n");


// ===============================
// ✍️ خلاصه‌نویسی انتساب (Compound Assignment)
// 📌 کاربرد: کوتاه‌نویسی افزایش/کاهش و مقیاس‌دهی متغیرها
// ===============================
result = 3;

// result = result + 1;
result += 1;
console.log("result+=1 => " + result + " \n");

result -= 1;
console.log("result-=1 => " + result + " \n");

result *= 2;
console.log("result*=2 => " + result + " \n");

result /= 2;
console.log("result/=2 => " + result + " \n");

result **= 2;
console.log("result**=2 => " + result + " \n");

// -------------------------------
// ++ و -- (افزایش/کاهش یکی‌یکی)
// 📌 کاربرد: شمارنده حلقه‌ها، حرکت قدم‌به‌قدم
// post-increment: result++  → اول مقدار فعلی استفاده می‌شود، بعد +1
// pre-increment:  ++result  → اول +1 می‌شود، بعد مقدار جدید استفاده می‌شود
// در console.log تفاوت دیده نمی‌شود، اما در عبارات پیچیده فرق دارد
// -------------------------------
result++;
console.log("result++ => " + result + " \n");

result--;
console.log("result-- => " + result + " \n");

++result;
console.log("++result => " + result + " \n");

--result;
console.log("--result => " + result + " \n");


// ===============================
// 🧮 شیء Math (توابع و ثابت‌های ریاضی پرکاربرد)
// 📌 کاربرد: گرد کردن اعداد، قدرمطلق، توان/ریشه، کمینه/بیشینه، تصادفی
// ===============================

// ثابت‌های ریاضی
result = Math.PI;    // عدد پی ≈ 3.14159
console.log("PI => " + result + " \n");

result = Math.E;     // عدد نپر ≈ 2.71828
console.log("E => " + result + " \n");

// گرد کردن‌ها
result = Math.round(3.5);   // گرد به نزدیک‌ترین عدد صحیح (0.5 به بالا رو به بالا)
console.log("round(3.5) => " + result + " \n");

result = Math.ceil(3.5);    // سقف: همیشه رو به بالا
console.log("ceil(3.5) => " + result + " \n");

result = Math.floor(3.5);   // کف: همیشه رو به پایین
console.log("floor(3.5) => " + result + " \n");

// قدر مطلق
result = Math.abs(-3.5);    // تبدیل منفی به مثبت
console.log("abs(-3.5) => " + result + " \n");

// توان و ریشه
result = Math.pow(3, 2);    // 3**2
console.log("pow(3,2) => " + result + " \n");

result = Math.sqrt(9);      // ریشه دوم
console.log("sqrt(9) => " + result + " \n");

// کمینه/بیشینه
result = Math.min(0,1,2,3,4,5,6,7,8,9,10);
console.log("min => " + result + " \n");

result = Math.max(0,1,2,3,4,5,6,7,8,9,10);
console.log("max => " + result + " \n");

// عدد تصادفی [0, 1)
result = Math.random();
console.log("random [0,1) => " + result + " \n");

// الگوهای رایج برای بازه‌های تصادفی:

// عدد صحیح بین 0 تا 9 (شامل 0 و 9): [0,9]
result = Math.floor(Math.random() * 10);
console.log("randInt [0,9] => " + result + " \n");

// عدد صحیح بین 1 تا 10: [1,10]
result = Math.floor(Math.random() * 10) + 1;
console.log("randInt [1,10] => " + result + " \n");

// عدد صحیح بین 5 تا 10: [5,10]
// فرمول عمومی: floor(random() * (max - min + 1)) + min
result = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
console.log("randInt [5,10] => " + result + " \n");


// نکات مهمِ یادگیری

// ** (توان) اولویت بالایی دارد و راست‌چسبان است: 2**3**2 = 2**(3**2) = 2**9.

// result++ و ++result در عبارات پیچیده فرق دارند؛ در console.log هر دو فقط مقدار نهایی را نشان می‌دهند.

// برای اعداد تصادفی در بازه‌ی [min, max] از الگوی:
// Math.floor(Math.random() * (max - min + 1)) + min استفاده کن.
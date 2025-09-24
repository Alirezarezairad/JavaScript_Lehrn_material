// ===============================
// 🎓 متدهای پرکاربرد روی آرایه‌ها در JavaScript
// ===============================

// --------- push() ---------
// 📌 کاربرد: اضافه کردن مقدار جدید به انتهای لیست
let number = [1,2,3,4,5,6,7,8,9,10];
console.log("array => " + number);
console.log("push(): آخرین مقدار آرایه رو اضافه می‌کنه (اینجا → 11 اضافه می‌شه).");
number.push(11);
console.log("push => " + number);
console.log("");

// --------- pop() ---------
// 📌 کاربرد: حذف آخرین مقدار لیست (مثل خارج کردن آخرین آیتم از سبد خرید)
number = [1,2,3,4,5,6,7,8,9,10];
console.log("array => " + number);
console.log("pop(): آخرین مقدار آرایه رو حذف می‌کنه (اینجا → 10 حذف می‌شه).");
number.pop();
console.log("pop => " + number);
console.log("");

// --------- shift() ---------
// 📌 کاربرد: حذف اولین عنصر آرایه (مثل خارج کردن نفر اول از صف)
number = [1,2,3,4,5,6,7,8,9,10];
console.log("array => " + number);
console.log("shift(): اولین مقدار آرایه رو حذف می‌کنه (اینجا → 1 حذف می‌شه).");
number.shift();
console.log("shift => " + number);
console.log("");

// --------- unshift() ---------
// 📌 کاربرد: اضافه کردن مقدار جدید به ابتدای لیست (مثل اضافه شدن نفر جدید به اول صف)
number = [1,2,3,4,5,6,7,8,9,10];
console.log("array => " + number);
console.log("unshift(): یک مقدار جدید به ابتدای آرایه اضافه می‌کنه (اینجا → 0 اضافه می‌شه).");
number.unshift(0);
console.log("unshift => " + number);
console.log("");

// --------- indexOf() + splice() ---------
// indexOf: 📌 کاربرد → پیدا کردن ایندکس (جایگاه) یک مقدار
// splice: 📌 کاربرد → حذف یا اضافه کردن عنصر در یک موقعیت خاص
number = [1,2,3,4,5,6,7,8,9,10];
console.log("array => " + number);
console.log("indexOf(): شماره مکان (ایندکس) یک مقدار خاص رو برمی‌گردونه.");
console.log("index of 9 => " + number.indexOf(9));
console.log("splice(8,1): از ایندکس ۸ به مدت ۱ عنصر رو حذف می‌کنه (یعنی مقدار 9 حذف می‌شه).");
number.splice(8,1);
console.log("splice => " + number);
console.log("");

// --------- درج مقدار با splice ---------
// 📌 کاربرد: درج مقدار در وسط آرایه (نه فقط اول یا آخر)
number = [1,2,3,4,5,6,7,8,9,10];
console.log("array => " + number);
console.log("می‌خوایم بین 6 و 7 عدد 6.5 اضافه کنیم:");

// 6 در ایندکس 5 هست، پس باید روی ایندکس 6 درج کنیم
number.splice(6,0,6.5);
console.log("splice => " + number);
console.log("اینجا بین 6 و 7 عدد 6.5 اضافه می‌شه.");
console.log("");

// --------- reverse() ---------
// 📌 کاربرد: برعکس کردن ترتیب عناصر لیست (مواقعی مثل برگرداندن کارت‌ها یا تاریخ‌ها)
number = [1,2,3,4,5,6,7,8,9,10];
console.log("array => " + number);
console.log("reverse(): ترتیب عناصر آرایه رو برعکس می‌کنه.");
number.reverse();
console.log("reverse => " + number);
console.log("");

// --------- sort() ---------
// 📌 کاربرد: مرتب‌سازی لیست به ترتیب حروف الفبا یا عدد (اما به صورت string!)
// نکته: برای مرتب‌سازی درست عددی باید تابع مقایسه بدی
number = [9,8,7,6,5,4,3,2,1,0];
console.log("array => " + number);
console.log("sort(): عناصر آرایه رو به ترتیب استرینگ مرتب می‌کنه (یعنی '10' جلوتر از '2').");
number.sort();
console.log("sort => " + number);
console.log("");

// ===============================
// 🎓 مثال ترکیبی با آبجکت
// ===============================
let person = {
    name: "John",
    age: 30,
    city: "New York",
    job: "Engineer",
    salary: 5000,
    isEmployed: true,
    hobbies: ["reading", "traveling", "sports"],
};

// 📌 کاربرد: اضافه کردن یک hobby جدید در موقعیت خاص
// اینجا بین "reading" و "traveling" مقدار "music" درج می‌کنیم
person.hobbies.splice(1,0,"music");

console.log(person.hobbies);
console.log(person);
console.log("");


// ✨ نکات آموزشی

// push / pop → کار با انتهای لیست

// shift / unshift → کار با ابتدای لیست

// splice → ابزار همه‌کاره برای حذف یا اضافه در هر جای لیست

// reverse → برعکس کردن لیست

// sort → مرتب‌سازی، ولی پیش‌فرضش به صورت متن هست
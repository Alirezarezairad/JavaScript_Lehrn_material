// ===============================
//  🎓 انواع داده در JavaScript
// ===============================

// 🔹 Primitive Data Types (انواع اولیه)
// string , number , boolean , null , undefined

// --------- String ---------
// رشته = متن
// 📌 کاربرد: برای ذخیره متن مثل اسم، آدرس، توضیحات، پیام کاربر
let name = "Hadi";
console.log(name);
console.log(typeof(name) + "\n");

// --------- Number ---------
// عدد
// 📌 کاربرد: برای محاسبات ریاضی، قیمت‌ها، سن، امتیاز بازی
let age = 25;
console.log(age);
console.log(typeof(age) + "\n");

// وقتی عدد داخل "" باشه → رشته است نه عدد
let notNumber = "25";
console.log(notNumber);
console.log(typeof(notNumber) + "\n");

// --------- Boolean ---------
// مقدار درست/غلط (true/false)
// 📌 کاربرد: برای شرط‌ها و وضعیت‌ها (آیا فعال است؟ بله/خیر)
let isCold = true;
console.log(isCold);
console.log(typeof(isCold) + "\n");

// --------- Null ---------
// یعنی «عمداً خالی»
// 📌 کاربرد: وقتی می‌خواهیم بگیم مقدار الان خالی است اما بعداً مقدار می‌گیرد
let person = null;
console.log(person);
console.log(typeof(person) + "\n");
// نکته: typeof(null) === "object" (اشتباه تاریخی جاوااسکریپت)

// --------- Undefined ---------
// یعنی متغیر تعریف شده ولی هنوز مقدار نگرفته
// 📌 کاربرد: وقتی متغیری رو تعریف می‌کنیم ولی مقدارش بعداً مشخص میشه
let job;
console.log(job);
console.log(typeof(job) + "\n");

// --------- Empty String ---------
// رشته‌ی خالی (طول صفر دارد)
// 📌 کاربرد: وقتی متن داریم ولی می‌خواهیم عمداً خالی باشد
let persons = "";
console.log(persons);
console.log(typeof(persons) + "\n");


// ===============================
//  Reference Data Types (انواع ارجاعی)
// array , object , function
// ===============================

// --------- Array ---------
// آرایه = لیست مرتب از داده‌ها
// 📌 کاربرد: برای نگهداری چندین مقدار پشت سر هم مثل لیست خرید، نمرات، اسامی
let number = ["4","OPEN-CODE",1,2,3,true,false,null,undefined];
console.log(number);
console.log("length => " + number.length); // تعداد عناصر
console.log(number[2]); 
console.log(number[1]);
console.log("typeof(number) => " + typeof(number));
// بررسی دقیق‌تر برای تشخیص آرایه
console.log("Array.isArray(number) => " + Array.isArray(number) + "\n\n\n");


// --------- Object ---------
// آبجکت = مجموعه‌ای از کلید و مقدار
// 📌 کاربرد: برای نمایش موجودیت‌های دنیای واقعی (کاربر، ماشین، محصول)
const personObject = {
    name : "Hadi",
    lastName : "hosseini",
    gender : "male",
    age : 25,
    job : "IT-Engineer",
    isEmployed : true,

    // آبجکت تو در تو (برای دسته‌بندی اطلاعات)
    // 📌 کاربرد: آدرس کامل کاربر
    address: {
        city : "Tehran",
        country : "Iran"
    },

    // آرایه داخل آبجکت
    // 📌 کاربرد: علایق کاربر
    hobbies : ["reading", "traveling", "sports"]
}

console.log(personObject);
console.log("typeOf(personObject) => " + typeof(personObject));

// دسترسی به propertyها
console.log(personObject.name);
console.log(personObject.lastName);
console.log(personObject.age);
console.log(personObject.job);
console.log(personObject.isEmployed);
console.log(personObject.address.city);
console.log(personObject.address.country);
console.log(personObject.hobbies[0]);

// اضافه کردن property جدید
// 📌 کاربرد: وقتی می‌خواهیم داده‌ی جدید به آبجکت اضافه کنیم
personObject.email = "Hadi@gmail.com";
console.log(personObject.email);

// تغییر مقدار property
// 📌 کاربرد: وقتی می‌خواهیم اطلاعات آبجکت آپدیت شود
personObject.name = "Mehdi";
console.log(personObject.name);
console.log("\n");

/*
    🔹 const و object
    
    const = ظرف ثابت می‌ماند (همیشه به همان آبجکت اشاره دارد)
    اما محتویات داخل آبجکت (propertyها) قابل تغییر است

    📌 کاربرد: 
    وقتی می‌خواهیم مطمئن باشیم متغیر همیشه به همان آبجکت اشاره کند،
    اما بتوانیم جزئیات داخلش را تغییر بدهیم.
*/


// --------- Object Methods ---------
// 📌 کاربرد: دسترسی سریع به کلیدها و مقادیر یک آبجکت
console.log("object.keys(personObject) => \n" + Object.keys(personObject));   // همه کلیدها
console.log("\n");

console.log("object.values(personObject) => \n" + Object.values(personObject)); // همه مقادیر
console.log("\n");

console.log("object.entries(personObject) => \n" + Object.entries(personObject)); // جفت کلید-مقدار
console.log("\n");


// --------- Function ---------
// تابع = بخشی از کد که قابل استفاده‌ی مجدد است
// 📌 کاربرد: برای جلوگیری از تکرار کد، انجام عملیات خاص بارها و بارها

function myFunction() {
    console.log("Hello World!");
}
myFunction();
console.log("typeof(myFunction) => " + typeof(myFunction));
console.log("\n");

// تابع با ورودی
// 📌 کاربرد: ارسال اطلاعات مختلف به تابع و تولید خروجی متفاوت
function myNameIs(name, age) {
    console.log("My name is " + name + " and I am " + age + " years old.");
}
myNameIs("Hadi", 25);
myNameIs("Mehdi", 25);
myNameIs("Ali", 29);
myNameIs("Parisa", 39);
console.log("\n");

// تابع با خروجی (return)
// 📌 کاربرد: وقتی می‌خواهیم نتیجه‌ی محاسبه یا پردازش را برگردانیم
function square(number) {
    return number * number;
}

console.log("square(5) => " + square(5));
console.log("square(10) => " + square(10));
console.log("square(15) => " + square(15));
console.log("\n");

// ذخیره‌ی خروجی تابع در متغیر
// 📌 کاربرد: وقتی لازم است نتیجه‌ی تابع را دوباره استفاده کنیم
let nu;

nu = square(5);
console.log("nu => " + nu);

nu = square(10);
console.log("nu2 => " + nu);

nu = square(15);
console.log("nu3 => " + nu);

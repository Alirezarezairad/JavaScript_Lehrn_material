// ===============================
// 🎓 شرط‌ها در جاوااسکریپت: if / else if / else / switch
// ===============================

// ساختار پایهٔ if
// 📌 کاربرد: اجرای یک بلاک فقط وقتی شرط true است
// if (test) { statement; }
if (test) {
  statement;
}

let number = 4;

// --------- if ساده ---------
// 📌 اگر number بزرگ‌تر از 1 باشد، پیام را چاپ کن
if (number > 1) {
  console.log("over one");
}

// --------- if ... else ---------
// 📌 دوشاخه‌ای: یکی از دو مسیر اجرا می‌شود
if (number > 1) {
  console.log("over one");
} else {
  console.log("under one");
}

// --------- if ... else if ... else ---------
// 📌 چندشاخه‌ای: اولین شرطی که true شود اجرا می‌شود و بقیه نادیده گرفته می‌شوند
// نکته: ترتیب شرط‌ها مهم است
if (number > 1) {
  console.log("over one");
} else if (number < 1) {
  console.log("number is a zero");
} else if (number == 1) {
  // نکتهٔ آموزشی: در پروژهٔ واقعی بهتر است از === استفاده کنیم
  // چون === هم مقدار و هم نوع را چک می‌کند (strict equality)
  console.log("number is one");
} else {
  console.log("it's not a number");
}

// --------- عملگرهای منطقی && و || و ! ---------
// &&: هر دو شرط باید true باشند
// ||: کافیست یکی true باشد
// !: نقیض (برعکس کردن true/false)
let isRich = true;
let isKind = true;

if (isRich && isKind) {
  console.log("You are rich and kind");
} else if (isRich && !isKind) {
  console.log("You are rich but not kind");
} else if (!isRich && isKind) {
  console.log("You are kind but not rich");
} else {
  console.log("You are not rich and not kind");
}

// مثال OR: اگر یکی از ویژگی‌ها برقرار بود
if (isRich || isKind) {
  console.log("You are rich or kind");
}

// --------- زنجیرهٔ طولانی if/else برای چند مقدار مشخص ---------
// 📌 کاربرد: وقتی ورودی تعداد حالت‌های محدودی دارد (0 تا 4)
// نکته: برای مساوی در عدد، بهتر است از === استفاده شود
let number1 = 5;

if (number1 == 0) {
  console.log("zero is ok");
} else if (number1 == 1) {
  console.log("one is ok");
} else if (number1 == 2) {
  console.log("two is ok");
} else if (number1 == 3) {
  console.log("three is ok");
} else if (number1 == 4) {
  console.log("four is ok");
} else {
  console.log("enter a number between 0 and 4");
}

// --------- switch ---------
// 📌 کاربرد: وقتی مقدار دقیقاً یکی از حالت‌های ثابت است
// خواناتر از if/else طولانی برای حالت‌های مساوی
switch (number1) {
  case 0:
    console.log("zero is ok");
    break; // نکته: break لازم است تا به case بعدی نلغزد

  case 1:
    console.log("one is ok");
    break;

  case 2:
    console.log("two is ok");
    break;

  case 3:
    console.log("three is ok");
    break;

  case 4:
    console.log("four is ok");
    break;

  default:
    // 📌 کاربرد: اگر هیچ caseی یکسان نبود، اینجا اجرا می‌شود
    console.log("enter a number between 0 and 4");
}


// نکته‌های کلیدی (خیلی کوتاه)

// برای مساوی بودن همیشه از === استفاده کن (نه ==) تا خطای نوع نگیری.

// ترتیب else if‌ها مهمه؛ اولین شرط true اجرا میشه و بقیه رد میشن.

// switch وقتی ورودی چند حالت ثابت داره (۰،۱،۲،۳…) خواناتر از if/else طولانیه.

// && برای «هر دو شرط»، || برای «حداقل یکی»، ! برای «نقیض» استفاده میشه.
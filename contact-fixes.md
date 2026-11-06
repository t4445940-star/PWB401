# إصلاحات صفحة اتصل بنا (contact.html)

## المشاكل المطلوب إصلاحها

---

## 1. استخدام Bootstrap Alerts لرسائل النجاح/الفشل

### الخطوة 1: تعديل HTML
في ملف `contact.html`، استبدل السطر:
```html
<p id="result" class="mt-3 mb-0" aria-live="polite"></p>
```

بـ:
```html
```

### الخطوة 2: تعديل JavaScript
في ملف `assets/js/main.js`، استبدل كود التحقق من النموذج:

```javascript
var contactinput = document.getElementById('contactinput');
if (contactinput) {
    contactinput.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        document.getElementById('result').textContent = 'شكراً ' + name + ' تم استلام رسالتك !';
        contactinput.reset();
    });
}
```

بـ:
```javascript
var contactinput = document.getElementById('contactinput');
if (contactinput) {
    contactinput.addEventListener('submit', function (event) {
        event.preventDefault();
        
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();
        var result = document.getElementById('result');
        
        if (name === '' || email === '' || message === '') {
            result.className = 'alert alert-danger';
            result.textContent = 'عبي كل الحقول :)';
            return;
        }
        
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            result.className = 'alert alert-danger';
            result.textContent ="شكل ال email مو مظبوط لازم يكون test@test.com";
            return;
        }
        
        result.className = 'alert alert-success';
        result.textContent = 'سوف نرد عليك في اقرب وقت  ' + name + 'استلمنا رسالتك';
        contactinput.reset();
    });
}
```

---

## 2. إضافة معلومات تواصل بديلة

### الخطوة 1: أضف قسم معلومات التواصل
بعد الصورة في `contact.html`، أضف:

```html
<div class="col-md-5">
    <img src="assets/img/cont.jpg" alt="صورة التواصل" class="img-fluid rounded mb-4"/>
    
    <div class="contact-info">
        <h4>معلومات التواصل</h4>
        <ul class="list-unstyled">
            <li class="mb-2">
                <strong>البريد الإلكتروني:</strong>
                <a href="mailto:info@events-guide.com">info@events-guide.com</a>
            </li>
            <li class="mb-2">
                <strong>الهاتف:</strong>
                <a href="tel:+963111234567">+963 11 123 4567</a>
            </li>
        </ul>
        
        <h5 class="mt-3">تابعنا على</h5>
        <div class="d-flex gap-3">
            <a href="https://facebook.com" class="text-primary" aria-label="Facebook">
                <svg width="24" height="24"><use href="#facebook"></use></svg>
            </a>
            <a href="https://instagram.com" class="text-danger" aria-label="Instagram">
                <svg width="24" height="24"><use href="#instagram"></use></svg>
            </a>
        </div>
    </div>
</div>
```

---

## 3. إضافة سمة alt للصورة

### الخطوة:
استبدل:
```html
<img src="assets/img/cont.jpg"/>
```

بـ:
```html
<img src="assets/img/cont.jpg" alt="صورة التواصل" class="img-fluid rounded"/>
```

---

## 4. إضافة سمة name لحقول النموذج

### الخطوة:
عدّل حقول النموذج لتشمل سمة `name`:

```html
<input id="name" name="name" class="form-control" type="text" >
<input id="email" name="email" class="form-control" type="email" >
<textarea id="message" name="message" class="form-control" rows="4" ></textarea>
```

---

## 5. تحديث روابط السوشيال في الفوتر

### الخطوة:
في الفوتر، استبدل `href="#"` بروابط حقيقية أو وهمية:

```html
<a class="fg-2" href="https://instagram.com/events_guide" aria-label="Instagram">
<a class="fg-2" href="https://facebook.com/events.guide" aria-label="Facebook">
```

---

## ملخص التعديلات

| الملف | التعديل |
|-------|---------|
| `contact.html` | تغيير `<p id="result">` إلى `<div class="alert">` |
| `contact.html` | إضافة `alt` للصورة |
| `contact.html` | إضافة `name` لحقول النموذج |
| `contact.html` | إضافة قسم معلومات التواصل البديلة |
| `assets/js/main.js` | إضافة تحقق من صيغة البريد + Bootstrap Alerts |

---

## النتيجة المتوقعة

بعد التعديلات:
- رسالة نجاح خضراء (alert-success) عند إرسال صحيح
- رسالة خطأ حمراء (alert-danger) عند وجود خطأ
- تحقق من صيغة البريد الإلكتروني
- معلومات تواصل بديلة (بريد + هاتف + سوشيال)

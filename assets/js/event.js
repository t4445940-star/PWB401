const params = new URLSearchParams(window.location.search);
const eventID = params.get("id");

const eventsData = [
    {
        id: "1",
        title: "مناقشة رسالة ماجستير في إدارة التقانة",
        category: "أكاديمي",
        badgeClass: "badge badge-subtle theme-info",
        date: "الأربعاء 26-03-2025، الساعة 11:00 صباحاً",
        place: "مدرج وزارة التعليم العالي والبحث العلمي، دمشق",
        image: "assets/img/graduation.jpg",
        description: "مناقشة رسالة الماجستير للطالب رامي قاسم بعنوان «دراسة القاعدة الصناعية في سورية: إمكانية التطوير وسبل الربط بالبحث العلمي المحلي والعالمي». لجنة الحكم: د. داوود قره كولله (رئيساً)، د. لؤي صالح (عضواً)، د. باسل يونس (مشرفاً)."
    ,gallery: ["assets/img/e1-1.jpg", "assets/img/e1-2.jpg", "assets/img/e1-3.jpg"]



    },
    {
        id: "2",
        title: "ورشة استخدامات الخرائط الرقمية في إدارة الكوارث",
        category: "مسؤولية مجتمعية",
        badgeClass: "badge badge-subtle theme-success",
        date: "الأربعاء 22-03-2023",
        place: "دمشق",
        image: "assets/img/map.jpg",
        description: "ورشة نظّمها فريق مبادرة بُناة التطوعي بإشراف برنامج ماجستير BIMM، وافتتحتها د. سونيا أحمد بحضور وزير التعليم العالي ورئيس الجامعة. عُرضت فيها حالة تطبيقية لمدينة جبلة، وقُدّمت محاضرات عن استعداد الدراسات الإقليمية للزلازل، والخرائط الديناميكية للزلازل، وأهمية المسح الليزري في تقييم الأضرار، والتخطيط لإدارة الكوارث."
      ,gallery: ["assets/img/e2-1.jpg", "assets/img/e2-2.jpg", "assets/img/e2-3.jpg"]

  
    },
    {
        id: "3",
        title: "المسابقة البرمجية المحلية للجامعة الافتراضية السورية",
        category: "مسابقات برمجية",
        badgeClass: "badge badge-subtle theme-inverse",
        date: "الأحد 19-06-2022",
        place: "مركز التعلم مدى الحياة، دمشق",
        image: "assets/img/programming.jpg",
        description: "تنافست فيها فرق من طلاب الجامعة، وتأهلت خمسة فرق إلى المسابقة البرمجية السورية: AHA و Yes I Code و #include<venom> و PIVOT!!! و Codefather. وكُرّمت الفرق الفائزة في مدرج الباسل بمبنى وزارة التعليم العالي."
        ,gallery: ["assets/img/e3-1.jpg", "assets/img/e3-2.jpg", "assets/img/e3-3.jpg"]

    }
];

const event = eventsData.find(function (item) {
    return item.id === eventID;
});
document.getElementById("title").textContent = event.title;
document.getElementById("cat").textContent = event.category;
document.getElementById("date").textContent = event.date;
document.getElementById("place").textContent = event.place;
document.getElementById("des").textContent = event.description;
document.getElementById("img").src = event.image;


const related = document.querySelectorAll(".ri");

related.forEach(function (event) {
    if (event.dataset.id === eventID) {
        event.style.display = "none";
    }
});

document.getElementById("g1").src = event.gallery[0];
document.getElementById("g2").src = event.gallery[1];
document.getElementById("g3").src = event.gallery[2];
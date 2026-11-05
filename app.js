// আপনার হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ):
const WHATSAPP_NUMBER = "8801700000000"; 

// কোর্স ডাটাবেজ
const courses = [
    {
        id: 1,
        title: "গোপাল ভাঁড় নাচ-বল্টু YouTube আপলোড সিক্রেট কোর্স",
        category: "youtube",
        price: 499,
        originalPrice: 1500,
        image: "images/gopal_bhar_course.jpg", 
        shortDesc: "শূন্য থেকে ইউটিউব ক্যারিয়ার গড়ুন এবং গোপাল ভাঁড় & বল্টু ভিডিও দিয়ে আয় করুন!",
        fullDesc: `
            <ul class="lh-lg">
                <li>ভিডিও তৈরি ও আপলোডের সম্পূর্ণ গাইড</li>
                <li>ট্রেন্ডিং টপিক খুঁজে কনটেন্ট তৈরি</li>
                <li>চ্যানেল অপটিমাইজেশন ও SEO কৌশল</li>
                <li>ইউটিউব মনিটাইজেশন সম্পর্কে A to Z</li>
                <li>আয় বাড়ানোর কৌশল ও ইনকামের উৎস</li>
                <li>Watch Time ও ভিডিও রিটেনশন বাড়ানোর উপায়</li>
                <li class="text-info fw-bold">অর্ডার দেওয়ার সাথে সাথেই ইমেইলে ইনস্ট্যান্ট ড্রাইভ লিংক পেয়ে যাবেন!</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Web Development Masterclass",
        category: "web",
        price: 499,
        originalPrice: 1999,
        image: "images/web_dev.jpg",
        shortDesc: "HTML, CSS, JavaScript এবং Responsive Design-এর সম্পূর্ণ গাইডলাইন।",
        fullDesc: "জিরো থেকে ওয়েবসাইট তৈরি এবং ফ্রি সার্ভারে হোস্ট করার পূর্ণাঙ্গ প্র্যাকটিক্যাল কোর্স।"
    },
    {
        id: 3,
        title: "Graphic Design Complete Suite",
        category: "graphics",
        price: 399,
        originalPrice: 1200,
        image: "images/graphic_design.jpg",
        shortDesc: "Photoshop & Illustrator দিয়ে প্রফেশনাল ডিজাইন শিখুন সহজ ভাষায়।",
        fullDesc: "সোশ্যাল মিডিয়া ব্যানার, লোগো এবং কোর্স কভার ৩ডি মকআপ ডিজাইনের কমপ্লিট প্যাকেজ।"
    }
];

// DOM Elemente নির্বাচন
const container = document.getElementById('courseContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// কোর্স কার্ড রেন্ডার করা
function renderCourses(courseList) {
    container.innerHTML = '';
    if (courseList.length === 0) {
        container.innerHTML = '<div class="col-12 text-center text-secondary py-5">কোনো কোর্স পাওয়া যায়নি!</div>';
        return;
    }

    courseList.forEach(course => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="course-card">
                <div class="course-img-wrapper">
                    <img src="${course.image}" class="course-img" alt="${course.title}" onerror="this.src='https://via.placeholder.com/400x220?text=One+Digital'">
                    <span class="category-badge">${course.category.toUpperCase()}</span>
                </div>
                <div class="p-3 d-flex flex-column flex-grow-1">
                    <h5 class="fw-bold fs-6">${course.title}</h5>
                    <p class="text-secondary small flex-grow-1 mb-2">${course.shortDesc}</p>
                    <div class="mb-3">
                        <span class="price-tag">৳${course.price}</span>
                        <span class="original-price">৳${course.originalPrice}</span>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-info btn-sm" onclick="openDetails(${course.id})">বিবরণ দেখুন</button>
                        <a href="${getWhatsappLink(course.title, course.price)}" target="_blank" class="btn btn-whatsapp btn-sm">
                            <i class="fa-brands fa-whatsapp me-1"></i>WhatsApp-এ কিনুন
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// হোয়াটসঅ্যাপ লিংক জেনারেট করা
function getWhatsappLink(title, price) {
    const msg = encodeURIComponent(`হ্যালো One Digital, আমি "${title}" কোর্সটি ৳${price} দিয়ে কিনতে চাই। অর্ডারের নিয়মটি বলবেন।`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

// মোডাল এ ডিটেইলস দেখানো
function openDetails(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return;

    document.getElementById('modalTitle').innerText = course.title;
    document.getElementById('modalBody').innerHTML = `
        <div class="text-center mb-3">
            <img src="${course.image}" class="img-fluid rounded border border-secondary" style="max-height: 250px;" onerror="this.src='https://via.placeholder.com/600x300?text=One+Digital'">
        </div>
        <h6 class="fw-bold text-info">কোর্সের বিবরণ:</h6>
        <div>${course.fullDesc}</div>
    `;
    document.getElementById('modalPrice').innerText = `৳${course.price}`;
    document.getElementById('modalOriginalPrice').innerText = `৳${course.originalPrice}`;
    document.getElementById('modalWhatsappBtn').href = getWhatsappLink(course.title, course.price);

    const modal = new bootstrap.Modal(document.getElementById('courseModal'));
    modal.show();
}

// সার্চ ফিল্টারিং
searchInput.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    const filtered = courses.filter(c => c.title.toLowerCase().includes(text) || c.shortDesc.toLowerCase().includes(text));
    renderCourses(filtered);
});

// ক্যাটাগরি ফিল্টারিং
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
            b.classList.remove('btn-info', 'active');
            b.classList.add('btn-outline-info');
        });
        btn.classList.remove('btn-outline-info');
        btn.classList.add('btn-info', 'active');

        const cat = btn.getAttribute('data-category');
        if (cat === 'all') {
            renderCourses(courses);
        } else {
            const filtered = courses.filter(c => c.category === cat);
            renderCourses(filtered);
        }
    });
});

// প্রথম লোড
renderCourses(courses);

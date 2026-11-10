// আপনার হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ):
const WHATSAPP_NUMBER = "8801700000000"; 

// সম্পূর্ণ কোর্স ও প্রোডাক্ট ডাটাবেজ (সকল বিবরণ সহ)
const courses = [
    // ChatGPT Premium
    { id: 1, title: "ChatGPT Premium 1 Month (Shared)", category: "subscription", price: 70, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১ মাসের ChatGPT Premium shared subscription।", fullDesc: "<ul class='lh-lg'><li>মেয়াদ: ১ মাস</li><li>ধরন: Shared</li></ul>" },
    { id: 2, title: "ChatGPT Go 1 Device (1 Month)", category: "subscription", price: 330, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১ মাসের জন্য ১টি ডিভাইসে ChatGPT Go।", fullDesc: "<ul class='lh-lg'><li>১টি ডিভাইসে ব্যবহার</li><li>মেয়াদ: ১ মাস</li></ul>" },
    { id: 3, title: "ChatGPT Plus 1 Device (1 Month)", category: "subscription", price: 540, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১ মাসের জন্য ১টি ডিভাইসে ChatGPT Plus।", fullDesc: "<ul class='lh-lg'><li>১টি ডিভাইসে ব্যবহার</li><li>মেয়াদ: ১ মাস</li></ul>" },
    { id: 4, title: "ChatGPT Go Full Account (1 Month)", category: "subscription", price: 690, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১ মাসের ChatGPT Go full account।", fullDesc: "<ul class='lh-lg'><li>Full Account</li><li>মেয়াদ: ১ মাস</li></ul>" },
    { id: 5, title: "ChatGPT Plus Private (1 Month)", category: "subscription", price: 1550, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১ মাসের ChatGPT Plus private subscription।", fullDesc: "<ul class='lh-lg'><li>Private subscription</li><li>মেয়াদ: ১ মাস</li></ul>" },
    { id: 6, title: "ChatGPT Plus Full Account (1 Month)", category: "subscription", price: 2020, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১ মাসের ChatGPT Plus full account।", fullDesc: "<ul class='lh-lg'><li>Full Account</li><li>মেয়াদ: ১ মাস</li></ul>" },

    // CapCut Premium
    { id: 7, title: "CapCut Premium (1 Month)", category: "subscription", price: 80, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১ মাসের CapCut Premium subscription।", fullDesc: "<ul class='lh-lg'><li>মেয়াদ: ১ মাস</li></ul>" },
    { id: 8, title: "CapCut Premium (3 Months)", category: "subscription", price: 180, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "৩ মাসের CapCut Premium subscription।", fullDesc: "<ul class='lh-lg'><li>মেয়াদ: ৩ মাস</li></ul>" },
    { id: 9, title: "CapCut Premium (1 Year)", category: "subscription", price: 540, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১ বছরের CapCut Premium subscription।", fullDesc: "<ul class='lh-lg'><li>মেয়াদ: ১ বছর</li></ul>" },

    // YouTube Premium
    { id: 10, title: "YouTube Premium (1 Month)", category: "subscription", price: 110, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১ মাসের YouTube Premium subscription।", fullDesc: "<ul class='lh-lg'><li>মেয়াদ: ১ মাস</li></ul>" },
    { id: 11, title: "YouTube Premium (3 Months)", category: "subscription", price: 480, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "৩ মাসের YouTube Premium subscription।", fullDesc: "<ul class='lh-lg'><li>মেয়াদ: ৩ মাস</li></ul>" },

    // Gemini Premium
    { id: 12, title: "Gemini Premium (18 Months)", category: "subscription", price: 530, originalPrice: 0, image: "assets/premium software.jpg", shortDesc: "১৮ মাসের Gemini Premium subscription।", fullDesc: "<ul class='lh-lg'><li>মেয়াদ: ১৮ মাস</li></ul>" },

    // Existing course and software products
    {
        id: 13,
        title: "গোপাল ভাঁড় নাচ-বল্টু YouTube আপলোড সিক্রেট কোর্স",
        category: "youtube",
        price: 200,
        originalPrice: 1500,
        image: "assets/gopal vhar course.jpg",
        shortDesc: "শূন্য থেকে ইউটিউব ক্যারিয়ার গড়ুন এবং গোপাল ভাঁড় & বল্টু ভিডিও দিয়ে আয় করুন!",
        fullDesc: "<ul class='lh-lg'><li>ভিডিও তৈরি ও আপলোডের সম্পূর্ণ গাইড</li><li>ট্রেন্ডিং টপিক খুঁজে কনটেন্ট তৈরি</li><li>চ্যানেল অপটিমাইজেশন ও SEO কৌশল</li><li>ইউটিউব মনিটাইজেশন সম্পর্কে A to Z</li><li>আয় বাড়ানোর কৌশল ও ইনকামের উৎস</li><li>Watch Time ও ভিডিও রিটেনশন বাড়ানোর উপায়</li><li class='text-info fw-bold'>অর্ডার দেওয়ার সাথে সাথেই ইমেইলে ইনস্ট্যান্ট ড্রাইভ লিংক পেয়ে যাবেন!</li></ul>"
    },
    {
        id: 14,
        title: "PC Software Combo Pack (পিসির অল-ইন-ওয়ান প্রয়োজনীয় সফটওয়্যার)",
        category: "software",
        price: 349,
        originalPrice: 999,
        image: "assets/premium software.jpg",
        shortDesc: "কম্পিউটারের দরকারি সফটওয়্যার একসাথে, এক প্যাকেজে।",
        fullDesc: "<ul class='lh-lg'><li><strong>Windows OS:</strong> Windows XP / 7 / 10 / 11 Pro</li><li><strong>Microsoft Office:</strong> Office 2007 থেকে 2024 এবং Office 365</li><li><strong>Design & Editing Tools:</strong> Photoshop, Illustrator, Premiere Pro, After Effects, CorelDRAW, Camtasia, CapCut Pro</li><li><strong>Utility & Essential Tools:</strong> IDM, 4K Downloader, Folder Locker, Data Recovery Tools, AutoCAD</li><li class='text-warning fw-bold'>বিশেষ বোনাস: ৫০GB+ গ্রাফিক্স কালেকশন</li></ul>"
    },
    {
        id: 15,
        title: "Windows 8.1/10/11 Pro Lifetime Key",
        category: "software",
        price: 330,
        originalPrice: 0,
        image: "assets/win pro.jpg",
        shortDesc: "Windows 8.1/10/11 Pro Lifetime Activation Key।",
        fullDesc: "<ul class='lh-lg'><li>Windows 8.1 / 10 / 11 Pro</li><li>Lifetime Key</li></ul>"
    },
    {
        id: 16,
        title: "মায়াজালের ইউটিউব সিক্রেট কোর্স",
        category: "youtube",
        price: 190,
        originalPrice: 15000,
        image: "assets/mayajall.jpg",
        shortDesc: "৫৫ টি ক্লাস, ৬০ ঘণ্টা+ ভিডিও এবং সাথে ফ্রি CapCut Pro!",
        fullDesc: "<ul class='lh-lg'><li>৫৫ টি সম্পূর্ণ মাস্টারক্লাস ভিডিও লেসন</li><li>৬০ ঘণ্টার বেশি প্র্যাকটিক্যাল গাইডলাইন</li><li>CapCut Pro ফুল ভার্সন সম্পূর্ণ ফ্রি</li><li>মায়াজাল স্টাইলে রহস্যময় ভিডিও মেকিং ও ভয়েসওভার সিক্রেট</li><li>ইউটিউব অটোমেশন ও ক্যাশ কাউ চ্যানেল তৈরির কৌশল</li></ul>"
    },
    {
        id: 17,
        title: "Web Development Masterclass",
        category: "web",
        price: 549,
        originalPrice: 1999,
        image: "images/web_dev.jpg",
        shortDesc: "HTML, CSS, JavaScript এবং Responsive Design-এর সম্পূর্ণ গাইডলাইন।",
        fullDesc: "<ul class='lh-lg'><li>HTML5, CSS3, এবং Modern JavaScript</li><li>মোবাইল ও পিসির জন্য রেসপনসিভ ওয়েবসাইট তৈরি</li><li>GitHub ও ফ্রি সার্ভারে ওয়েবসাইট লাইভ করার উপায়</li></ul>"
    },
    {
        id: 18,
        title: "Graphic Design Complete Suite",
        category: "graphics",
        price: 449,
        originalPrice: 1200,
        image: "images/graphic_design.jpg",
        shortDesc: "Photoshop & Illustrator দিয়ে প্রফেশনাল ডিজাইন শিখুন সহজ ভাষায়।",
        fullDesc: "<ul class='lh-lg'><li>Adobe Photoshop এবং Illustrator-এর বেসিক টু এডভান্সড বিষয়সমূহ</li><li>সোশ্যাল মিডিয়া ব্যানার, পোস্টার, লোগো এবং ব্র্যান্ডিং ডিজাইন</li><li>প্রোডাক্ট কভার ও ৩ডি মকআপ ডিজাইন</li></ul>"
    }
];

// DOM Element Selection
const container = document.getElementById('courseContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render Courses & Products
function renderCourses(courseList) {
    container.innerHTML = '';
    if (courseList.length === 0) {
        container.innerHTML = '<div class="col-12 text-center text-secondary py-5">কোনো প্রোডাক্ট পাওয়া যায়নি!</div>';
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
                        ${course.originalPrice > course.price ? `<span class="original-price">৳${course.originalPrice}</span>` : ""}
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

// WhatsApp Order Link Generator
function getWhatsappLink(title, price) {
    const msg = encodeURIComponent(`হ্যালো One Digital, আমি "${title}" প্রোডাক্টটি ৳${price} দিয়ে কিনতে চাই। অর্ডারের নিয়মটি বলবেন।`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

// Modal View Details
function openDetails(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return;

    document.getElementById('modalTitle').innerText = course.title;
    document.getElementById('modalBody').innerHTML = `
        <div class="text-center mb-3">
            <img src="${course.image}" class="img-fluid rounded border border-secondary" style="max-height: 250px;" onerror="this.src='https://via.placeholder.com/600x300?text=One+Digital'">
        </div>
        <h6 class="fw-bold text-info">প্রোডাক্টের বিবরণ:</h6>
        <div>${course.fullDesc}</div>
    `;
    document.getElementById('modalPrice').innerText = `৳${course.price}`;
    document.getElementById('modalOriginalPrice').innerText = course.originalPrice > course.price ? `৳${course.originalPrice}` : "";
    document.getElementById('modalWhatsappBtn').href = getWhatsappLink(course.title, course.price);

    const modal = new bootstrap.Modal(document.getElementById('courseModal'));
    modal.show();
}

// Search Functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const text = e.target.value.toLowerCase();
        const filtered = courses.filter(c => c.title.toLowerCase().includes(text) || c.shortDesc.toLowerCase().includes(text));
        renderCourses(filtered);
    });
}

// Category Filter Functionality
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

// Initial Render
renderCourses(courses);

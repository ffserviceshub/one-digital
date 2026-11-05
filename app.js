// আপনার হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ):
const WHATSAPP_NUMBER = "8801700000000"; 

// সম্পূর্ণ কোর্স ও প্রোডাক্ট ডাটাবেজ (সকল বিবরণ সহ)
const courses = [
    {
        id: 1,
        title: "ChatGPT Go 1 Device (1 Month)",
        category: "subscription",
        price: 250,
        originalPrice: 400,
        image: "images/chatgpt.jpg", 
        shortDesc: "১ মাসের জন্য ১টি ডিভাইসে ব্যবহারের জন্য ChatGPT Go সাবস্ক্রিপশন।",
        fullDesc: `
            <ul class="lh-lg">
                <li>১টি ডিভাইসে পার্সোনাল ব্যবহারের সুযোগ</li>
                <li>১ মাসের মেয়াদ (Instant Delivery)</li>
                <li>ফাস্ট রেসপন্স ও নো-ল্যাগ সাপোর্ট</li>
                <li>সহজ লগইন গাইড সহ ইনস্ট্যান্ট অ্যাক্টিভেশন</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "ChatGPT Plus 1 Device (1 Month)",
        category: "subscription",
        price: 459,
        originalPrice: 700,
        image: "images/chatgpt_plus.jpg", 
        shortDesc: "১ মাসের জন্য ১টি ডিভাইসে ব্যবহারের জন্য ChatGPT Plus (GPT-4) এক্সেস।",
        fullDesc: `
            <ul class="lh-lg">
                <li>GPT-4 ও GPT-4o মডেল এক্সেস</li>
                <li>DALL-E 3 ইমেজ জেনারেটর ব্যবহার করার সুবিধা</li>
                <li>অ্যাডভান্সড ডাটা এনালাইসিস ও ফাইল আপলোড ফিচার</li>
                <li>১টি ডিভাইসে ১ মাসের পূর্ণ মেয়াদী সার্ভিস</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "ChatGPT Go Full Account (1 Month)",
        category: "subscription",
        price: 700,
        originalPrice: 1000,
        image: "images/chatgpt_full.jpg", 
        shortDesc: "১ মাসের ফুল প্রাইভেট একাউন্ট (ChatGPT Go)।",
        fullDesc: `
            <ul class="lh-lg">
                <li>১০০% প্রাইভেট ফুল একাউন্ট</li>
                <li>যেকোনো ডিভাইসে আনলিমিটেড ব্যবহার করতে পারবেন</li>
                <li>১ মাসের গ্যারান্টি সহ ফুল অ্যাক্সেস</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "ChatGPT Plus Full Account (1 Month)",
        category: "subscription",
        price: 2000,
        originalPrice: 2800,
        image: "images/chatgpt_plus_full.jpg", 
        shortDesc: "১ মাসের জন্য সম্পূর্ণ প্রাইভেট ChatGPT Plus ফুল একাউন্ট।",
        fullDesc: `
            <ul class="lh-lg">
                <li>ChatGPT Plus-এর সব প্রিমিয়াম ফিচার আনলকড</li>
                <li>১০০% প্রাইভেট ফুল একাউন্ট (কাউকে শেয়ার করা হবে না)</li>
                <li>GPT-4o, Custom GPTs ও DALL-E 3 এর আনলিমিটেড ব্যবহারের সুবিধা</li>
            </ul>
        `
    },
    {
        id: 5,
        title: "YouTube Premium (1 Month)",
        category: "subscription",
        price: 200,
        originalPrice: 350,
        image: "images/yt_premium.jpg", 
        shortDesc: "১ মাসের জন্য অ্যাড-ফ্রি ইউটিউব ভিডিও এবং YouTube Music।",
        fullDesc: `
            <ul class="lh-lg">
                <li>কোনো বিজ্ঞাপন (Ad) ছাড়াই ইউটিউব দেখার সুবিধা</li>
                <li>স্ক্রিন অফ রেখে ব্যাকগ্রাউন্ডে গান/ভিডিও প্লে করার সুবিধা</li>
                <li>YouTube Music Premium ফ্রিতে ব্যবহারের সুবিধা</li>
                <li>ভিডিও অফলাইনে দেখার জন্য ডাউনলোড অপশন</li>
            </ul>
        `
    },
    {
        id: 6,
        title: "YouTube Premium (6 Months)",
        category: "subscription",
        price: 500,
        originalPrice: 900,
        image: "images/yt_premium_6m.jpg", 
        shortDesc: "৬ মাসের জন্য অ্যাড-ফ্রি ইউটিউব ভিডিও এবং YouTube Music।",
        fullDesc: `
            <ul class="lh-lg">
                <li>৬ মাস মেয়াদী সম্পূর্ণ অ্যাড-ফ্রি ইউটিউব এক্সেস</li>
                <li>ইউটিউব ব্যাকগ্রাউন্ড প্লে ও পিকচার-ইন-পিকচার (PiP) মোড</li>
                <li>YouTube Music Premium মেম্বারশিপ অন্তর্ভুক্ত</li>
            </ul>
        `
    },
    {
        id: 7,
        title: "CapCut Premium Subscription",
        category: "subscription",
        price: 200,
        originalPrice: 400,
        image: "images/capcut.jpg", 
        shortDesc: "CapCut Pro-এর সব প্রফেশনাল এডিটিং ইফেক্টস ও ফিচারস।",
        fullDesc: `
            <ul class="lh-lg">
                <li>কোনো ওয়াটারমার্ক (Watermark) ছাড়া হাই-কোয়ালিটি এক্সপোর্ট</li>
                <li>সকল প্রফেশনাল প্রিমিয়াম ফিল্টার, টেক্সট ও ট্রানজিশন</li>
                <li>AI অটো-ক্যাপশন (Auto Captions) ও ব্যাকগ্রাউন্ড রিমুভার</li>
                <li>মোবাইল ও পিসি দুই ভার্সনেই ব্যবহারযোগ্য</li>
            </ul>
        `
    },
    {
        id: 8,
        title: "Gemini Premium Subscription",
        category: "subscription",
        price: 250,
        originalPrice: 500,
        image: "images/gemini.jpg", 
        shortDesc: "Google Gemini Advanced-এর সেরা এআই পাওয়ার ও ফিচারস এক্সেস।",
        fullDesc: `
            <ul class="lh-lg">
                <li>Google AI Advanced মডেলের দ্রুত উত্তর ও সর্বোচ্চ নির্ভুলতা</li>
                <li>জটিল কোডিং, কনটেন্ট রাইটিং ও ডাটা এনালাইসিস সাপোর্ট</li>
                <li>প্রিমিয়াম স্পিড ও প্রায়োরিটি সাপোর্ট</li>
            </ul>
        `
    },
    {
        id: 9,
        title: "গোপাল ভাঁড় নাচ-বল্টু YouTube আপলোড সিক্রেট কোর্স",
        category: "youtube",
        price: 200,
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
        id: 10,
        title: "PC Software Combo Pack (পিসির অল-ইন-ওয়ান প্রয়োজনীয় সফটওয়্যার)",
        category: "software",
        price: 349,
        originalPrice: 999,
        image: "images/pc_software_combo.jpg",
        shortDesc: "কম্পিউটারের সব দরকারি সফটওয়্যার এখন একসাথে, এক প্যাকেজে! (লাইফটাইম মেয়াদে প্রি-অ্যাক্টিভেটেড)",
        fullDesc: `
            <ul class="lh-lg">
                <li><strong>Windows OS:</strong> Windows XP / 7 / 10 / 11 Pro - সব ভার্সন</li>
                <li><strong>Microsoft Office:</strong> Office 2007 থেকে 2024 এবং Office 365 (Word, Excel, PowerPoint, Outlook, OneNote সহ)</li>
                <li><strong>Design & Editing Tools:</strong> Photoshop, Illustrator, Premiere Pro, After Effects, CorelDRAW, Camtasia, CapCut Pro, Lightroom, XD, InDesign, DrawPad, Topaz Studio</li>
                <li><strong>Utility & Essential Tools:</strong> IDM (Internet Download Manager), 4K Downloader, Folder Locker, Data Recovery Tools, বিজয় বায়ান্নো, AutoCAD</li>
                <li class="text-warning fw-bold">বিশেষ বোনাস: ৫০GB+ গ্রাফিক্স কালেকশন (৭,০০০+ গ্রাফিক্স ফাইল)</li>
            </ul>
        `
    },
    {
        id: 11,
        title: "Windows Genuine License & Lifetime Activation Key",
        category: "software",
        price: 250,
        originalPrice: 1000,
        image: "images/windows_activation.jpg",
        shortDesc: "Windows 10/11 Pro & Home - 25-Digit Product Key সহ লাইফটাইম জেনুইন অ্যাক্টিভেশন।",
        fullDesc: `
            <ul class="lh-lg">
                <li>Windows 10 / 11 Pro ও Home ভার্সন সাপোর্ট</li>
                <li>ফুল লাইফটাইম অ্যাক্টিভেশন (Lifetime Activation)</li>
                <li>আসল জেনুইন লাইসেন্স কি (25-Digit Product Key)</li>
                <li>ইনস্টলেশন সহায়তার জন্য ২৪/৭ টেকনিক্যাল সাপোর্ট</li>
            </ul>
        `
    },
    {
        id: 12,
        title: "মায়াজালের ইউটিউব সিক্রেট কোর্স",
        category: "youtube",
        price: 240,
        originalPrice: 15000,
        image: "images/mayajal_course.jpg",
        shortDesc: "৫৫ টি ক্লাস, ৬০ ঘণ্টা+ ভিডিও এবং সাথে ফ্রি CapCut Pro! ১৫,০০০ টাকার কোর্স মাত্র ২৪০ টাকায়!",
        fullDesc: `
            <ul class="lh-lg">
                <li>৫৫ টি সম্পূর্ণ মাস্টারক্লাস ভিডিও লেসন</li>
                <li>৬০ ঘণ্টার বেশি প্র্যাকটিক্যাল গাইডলাইন</li>
                <li>CapCut Pro ফুল ভার্সন সম্পূর্ণ ফ্রি</li>
                <li>মায়াজাল স্টাইলে রহস্যময় ভিডিও মেকিং ও ভয়েসওভার সিক্রেট</li>
                <li>ইউটিউব অটোমেশন ও ক্যাশ কাউ চ্যানেল তৈরির পূর্ণাঙ্গ কৌশল</li>
            </ul>
        `
    },
    {
        id: 13,
        title: "Web Development Masterclass",
        category: "web",
        price: 549,
        originalPrice: 1999,
        image: "images/web_dev.jpg",
        shortDesc: "HTML, CSS, JavaScript এবং Responsive Design-এর সম্পূর্ণ গাইডলাইন।",
        fullDesc: `
            <ul class="lh-lg">
                <li>HTML5, CSS3, এবং Modern JavaScript শেখার সুযোগ</li>
                <li>মোবাইল ও পিসির জন্য রেসপনসিভ ওয়েবসাইট তৈরি</li>
                <li>GitHub ও ফ্রি সার্ভারে ওয়েবসাইট লাইভ করার উপায়</li>
            </ul>
        `
    },
    {
        id: 14,
        title: "Graphic Design Complete Suite",
        category: "graphics",
        price: 449,
        originalPrice: 1200,
        image: "images/graphic_design.jpg",
        shortDesc: "Photoshop & Illustrator দিয়ে প্রফেশনাল ডিজাইন শিখুন সহজ ভাষায়।",
        fullDesc: `
            <ul class="lh-lg">
                <li>Adobe Photoshop এবং Illustrator-এর বেসিক টু এডভান্সড বিষয়সমূহ</li>
                <li>সোশ্যাল মিডিয়া ব্যানার, পোস্টার, লোগো এবং ব্র্যান্ডিং ডিজাইন</li>
                <li>প্রোডাক্ট কভার ও ৩ডি মকআপ ডিজাইনের প্র্যাকটিক্যাল কমপ্লিট প্যাকেজ</li>
            </ul>
        `
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
    document.getElementById('modalOriginalPrice').innerText = `৳${course.originalPrice}`;
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

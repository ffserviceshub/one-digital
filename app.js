// Apnar WhatsApp Number (Country code shoho):
const WHATSAPP_NUMBER = "8801700000000"; 

// Complete Product Database (All Products Included with Updated Prices)
const courses = [
    // --- OTT & AI Subscriptions ---
    {
        id: 1,
        title: "ChatGPT Go 1 Device (1 Month)",
        category: "subscription",
        price: 250,
        originalPrice: 400,
        image: "images/chatgpt.jpg", 
        shortDesc: "1 masher jonno 1ti device-e beboharer jonno ChatGPT Go subscription.",
        fullDesc: "1ti device-e personal beboharer jonno 1 masher ChatGPT Go access. Fast response o instant delivery."
    },
    {
        id: 2,
        title: "ChatGPT Plus 1 Device (1 Month)",
        category: "subscription",
        price: 459,
        originalPrice: 700,
        image: "images/chatgpt_plus.jpg", 
        shortDesc: "1 masher jonno 1ti device-e beboharer jonno ChatGPT Plus (GPT-4) access.",
        fullDesc: "GPT-4, DALL-E 3 o advanced feature-sho 1 device-er jonno 1 masher instant access."
    },
    {
        id: 3,
        title: "ChatGPT Go Full Account (1 Month)",
        category: "subscription",
        price: 700,
        originalPrice: 1000,
        image: "images/chatgpt_full.jpg", 
        shortDesc: "1 masher full private account (ChatGPT Go).",
        fullDesc: "Shompurno private full account. Apnar nijo email ba prodotto account-e 1 masher full access."
    },
    {
        id: 4,
        title: "ChatGPT Plus Full Account (1 Month)",
        category: "subscription",
        price: 2000,
        originalPrice: 2800,
        image: "images/chatgpt_plus_full.jpg", 
        shortDesc: "1 masher jonno shompurno private ChatGPT Plus full account.",
        fullDesc: "ChatGPT Plus-er shob premium feature sho 100% private full account 1 masher jonno."
    },
    {
        id: 5,
        title: "YouTube Premium (1 Month)",
        category: "subscription",
        price: 200,
        originalPrice: 350,
        image: "images/yt_premium.jpg", 
        shortDesc: "1 masher jonno ad-free YouTube video ebong YouTube Music.",
        fullDesc: "Biggapon chara video dekha, background play ebong YouTube Music premium access (1 mash)."
    },
    {
        id: 6,
        title: "YouTube Premium (6 Months)",
        category: "subscription",
        price: 500,
        originalPrice: 900,
        image: "images/yt_premium_6m.jpg", 
        shortDesc: "6 masher jonno ad-free YouTube video ebong YouTube Music.",
        fullDesc: "Biggapon chara video dekha, background play ebong YouTube Music premium access (6 mash)."
    },
    {
        id: 7,
        title: "CapCut Premium",
        category: "subscription",
        price: 200,
        originalPrice: 400,
        image: "images/capcut.jpg", 
        shortDesc: "CapCut Pro-er shob all-in-one video editing effects o features.",
        fullDesc: "Watermark chara video export, shokol professional effect, filter o text template access."
    },
    {
        id: 8,
        title: "Gemini Premium Subscription",
        category: "subscription",
        price: 250,
        originalPrice: 500,
        image: "images/gemini.jpg", 
        shortDesc: "Google Gemini Advanced-er sherah AI power o features access.",
        fullDesc: "Google AI Advanced model-er druto uttor, coding o content writing support sho premium access."
    },

    // --- Courses & Software Packs ---
    {
        id: 9,
        title: "গোপাল ভাঁড় নাচ-বল্টু YouTube আপলোড সিক্রেট কোর্স",
        category: "youtube",
        price: 200,
        originalPrice: 1500,
        image: "images/gopal_bhar_course.jpg", 
        shortDesc: "Shunno theke YouTube career gorun ebong Gopal Bhar & Boltu video diye ay korun!",
        fullDesc: `
            <ul class="lh-lg">
                <li>Video toiri o uploader shompurno guide</li>
                <li>Trending topic khunje content toiri</li>
                <li>Channel optimization o SEO koushol</li>
                <li>YouTube monetization shomporke A to Z</li>
                <li>Ay baranor koushol o incomer utsho</li>
                <li>Watch Time o video retention baranor upay</li>
                <li class="text-info fw-bold">Order deoyar shathe shathei emaile instant Drive link peye jaben!</li>
            </ul>
        `
    },
    {
        id: 10,
        title: "PC Software Combo Pack (পিসির অল-ইন-ওয়ান সফটওয়্যার)",
        category: "software",
        price: 349,
        originalPrice: 999,
        image: "images/pc_software_combo.jpg",
        shortDesc: "Computerer shob dorkari software ekhon ekshathe, ek packege! (Lifetime meyade pre-activated)",
        fullDesc: `
            <ul class="lh-lg">
                <li><strong>Windows OS:</strong> Windows XP / 7 / 10 / 11 Pro</li>
                <li><strong>Microsoft Office:</strong> Office 2007 theke 2024 ebong Office 365 (Word, Excel, PowerPoint, Outlook, OneNote sho)</li>
                <li><strong>Design & Editing Tools:</strong> Photoshop, Illustrator, Premiere Pro, After Effects, CorelDRAW, Camtasia, CapCut Pro, Lightroom, XD, InDesign, DrawPad, Topaz Studio</li>
                <li><strong>Utility Tools:</strong> IDM, 4K Downloader, Folder Locker, Data Recovery Tools, Bijoy Bayanno, AutoCAD</li>
                <li class="text-warning fw-bold">Bishesh Bonus: 50GB+ Graphics collection (7,000+ file)</li>
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
        shortDesc: "Windows 10/11 Pro & Home - 25-Digit Product Key sho lifetime genuine activation.",
        fullDesc: `
            <ul class="lh-lg">
                <li>Windows 10/11 Pro & Home Support</li>
                <li>Full Lifetime Activation</li>
                <li>Genuine License Key (25-Digit Product Key)</li>
                <li>24/7 Technical Support</li>
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
        shortDesc: "55 ti class, 60 ghanta+ video ebong shathe free CapCut Pro!",
        fullDesc: `
            <ul class="lh-lg">
                <li>55 ti shompurno masterclass lesson</li>
                <li>60 ghantar beshi practical video guide</li>
                <li>CapCut Pro full version shompurno free</li>
                <li>Mayajal style-e rohosshomoy video making o voiceover secret</li>
                <li>YouTube automation o cash cow channel toirir purnanggo koushol</li>
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
        shortDesc: "HTML, CSS, JavaScript ebong Responsive Design-er shompurno guideline.",
        fullDesc: "Zero theke website toiri ebong free server-e host korar purnanggo practical course."
    },
    {
        id: 14,
        title: "Graphic Design Complete Suite",
        category: "graphics",
        price: 449,
        originalPrice: 1200,
        image: "images/graphic_design.jpg",
        shortDesc: "Photoshop & Illustrator diye professional design shikhun sohoj vashay.",
        fullDesc: "Social media banner, logo ebong course cover 3D mockup designer complete package."
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
        container.innerHTML = '<div class="col-12 text-center text-secondary py-5">Kono product paoya jayni!</div>';
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
                        <button class="btn btn-outline-info btn-sm" onclick="openDetails(${course.id})">Biboron Dekhun</button>
                        <a href="${getWhatsappLink(course.title, course.price)}" target="_blank" class="btn btn-whatsapp btn-sm">
                            <i class="fa-brands fa-whatsapp me-1"></i>WhatsApp-e Kinun
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
    const msg = encodeURIComponent(`Hello One Digital, ami "${title}" product-ti ৳${price} dame kinte chai. Order-er niyomti bolben.`);
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
        <h6 class="fw-bold text-info">Product-er Biboron:</h6>
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

// Product Database - Minimum 7 products per brand
const productsDatabase = [
    // NIKE - 8 products
    {
        id: 1,
        name: "Nike Air Max 270",
        brand: "Nike",
        category: "mens",
        price: 2499000,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/air-max-270-shoes-nnTrqDGR.png",
        description: "Sepatu Nike Air Max 270 dengan teknologi cushioning terbaru untuk kenyamanan maksimal sepanjang hari.",
        availableSizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 2,
        name: "Nike React Infinity Run",
        brand: "Nike",
        category: "womens",
        price: 2299000,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/80499960-56cd-469b-bc55-2825f2366159/react-infinity-run-flyknit-2-road-running-shoes-n77q2N.png",
        description: "Running shoes dengan teknologi React foam yang memberikan responsivitas dan kenyamanan luar biasa.",
        availableSizes: [36, 37, 38, 39, 40, 41]
    },
    {
        id: 3,
        name: "Nike Blazer Mid '77",
        brand: "Nike",
        category: "mens",
        price: 1899000,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-dNWPTj.png",
        description: "Desain retro yang iconic dengan sentuhan modern untuk tampilan kasual yang stylish.",
        availableSizes: [40, 41, 42, 43, 44, 45]
    },
    {
        id: 4,
        name: "Nike Air Force 1",
        brand: "Nike",
        category: "kids",
        price: 1599000,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-next-nature-womens-shoes-fvxZ0g.png",
        description: "Klasik yang timeless, cocok untuk anak-anak dengan kualitas premium Nike.",
        availableSizes: [32, 33, 34, 35, 36, 37]
    },
    {
        id: 5,
        name: "Nike Pegasus 40",
        brand: "Nike",
        category: "mens",
        price: 2199000,
        image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f91a5813-295d-4043-9d43-7e4f226c1238/NIKE+AIR+ZOOM+PEGASUS+40+PRM.png",
        description: "Sepatu lari versatile untuk latihan harian dengan cushioning yang responsif.",
        availableSizes: [40, 41, 42, 43, 44]
    },
    {
        id: 6,
        name: "Nike Dunk Low",
        brand: "Nike",
        category: "womens",
        price: 1999000,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79a35c4b-23ec-4d9e-a2f3-bb0049f96fbd/NIKE+DUNK+LOW+RETRO.png",
        description: "Sneaker lifestyle dengan colorway menarik untuk tampilan casual yang trendy.",
        availableSizes: [36, 37, 38, 39, 40]
    },
    {
        id: 7,
        name: "Nike Cortez",
        brand: "Nike",
        category: "mens",
        price: 1799000,
        image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/1ffa33d7-7c39-4b91-805d-7db531db0d35/W+NIKE+CORTEZ.png",
        description: "Heritage running shoe dengan design classic yang tetap relevan hingga kini.",
        availableSizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 8,
        name: "Nike Jordan 1 Mid",
        brand: "Nike",
        category: "kids",
        price: 1899000,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ca325de-ca5a-46ed-ab9f-5a5426e58889/AIR+FORCE+1+MID+EASYON+%28GS%29.png",
        description: "Iconic basketball shoe untuk anak dengan desain yang legendary.",
        availableSizes: [32, 33, 34, 35, 36, 37, 38]
    },

    // ADIDAS - 8 products
    {
        id: 9,
        name: "Adidas Ultraboost 23",
        brand: "Adidas",
        category: "mens",
        price: 2799000,
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/9fc33404c64d4b8db52af275add6b62e_9366/IE1768_01_standard.jpg",
        description: "Running shoes premium dengan teknologi Boost untuk energy return maksimal.",
        availableSizes: [40, 41, 42, 43, 44, 45]
    },
    {
        id: 10,
        name: "Adidas Stan Smith",
        brand: "Adidas",
        category: "womens",
        price: 1699000,
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/FX5502_01_standard.jpg",
        description: "Tennis shoe klasik yang menjadi ikon fashion dengan design minimalis.",
        availableSizes: [36, 37, 38, 39, 40, 41]
    },
    {
        id: 11,
        name: "Adidas Samba OG",
        brand: "Adidas",
        category: "mens",
        price: 1899000,
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/fe28d7b3ff524de2a5041f87d5f008b7_9366/IG6169_01_standard.jpg",
        description: "Sepatu futsal klasik yang kini menjadi fashion statement di jalanan.",
        availableSizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 12,
        name: "Adidas Superstar",
        brand: "Adidas",
        category: "kids",
        price: 1499000,
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/53a9d48dee9b4e9a9c76895d28ebd719_9366/ID7801_01_standard.jpg",
        description: "Iconic shell-toe design untuk anak dengan kenyamanan yang luar biasa.",
        availableSizes: [32, 33, 34, 35, 36, 37]
    },
    {
        id: 13,
        name: "Adidas NMD R1",
        brand: "Adidas",
        category: "mens",
        price: 2299000,
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c3bd9dda9fdd4a7cbc9aad1e00dd0045_9366/GZ9260_01_standard.jpg",
        description: "Modern lifestyle sneaker dengan teknologi Boost dan desain futuristik.",
        availableSizes: [40, 41, 42, 43, 44]
    },
    {
        id: 14,
        name: "Adidas Gazelle",
        brand: "Adidas",
        category: "womens",
        price: 1799000,
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/be101f424a2b4671944cf23a659a13de_9366/IG5796_01_standard.jpg",
        description: "Retro sneaker dengan suede premium untuk tampilan vintage yang stylish.",
        availableSizes: [36, 37, 38, 39, 40]
    },
    {
        id: 15,
        name: "Adidas Predator",
        brand: "Adidas",
        category: "mens",
        price: 2599000,
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/a389d2f70c35451d915fb3eb287664af_9366/GZ0021_01_standard_hover.jpg",
        description: "Sepatu futsal dengan teknologi grip untuk kontrol bola yang maksimal.",
        availableSizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 16,
        name: "Adidas Forum Low",
        brand: "Adidas",
        category: "kids",
        price: 1599000,
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/be267c0d2b55486f98beacfd01049bfc_9366/FY7978_01_standard.jpg",
        description: "Basketball-inspired sneaker untuk anak dengan ankle strap yang iconic.",
        availableSizes: [32, 33, 34, 35, 36, 37, 38]
    },

    // NEW BALANCE - 8 products
    {
        id: 17,
        name: "New Balance 990v6",
        brand: "New Balance",
        category: "mens",
        price: 2999000,
        image: "https://static.ftshp.digital/img/p/1/1/0/8/2/1/3/1108213.jpg",
        description: "Premium running shoe dengan cushioning superior dan stabilitas terbaik.",
        availableSizes: [40, 41, 42, 43, 44, 45]
    },
    {
        id: 18,
        name: "New Balance 327",
        brand: "New Balance",
        category: "womens",
        price: 1899000,
        image: "https://www.newbalance.co.id/media/catalog/product/0/8/0888-NEWWS327NKD01808H-1.jpg",
        description: "Retro-inspired sneaker dengan oversized N logo yang eye-catching.",
        availableSizes: [36, 37, 38, 39, 40, 41]
    },
    {
        id: 19,
        name: "New Balance 574",
        brand: "New Balance",
        category: "mens",
        price: 1699000,
        image: "https://www.newbalance.co.id/media/catalog/product/0/1/01-NEW-BALANCE-FFSSBNEW0-NEWML574EVG-Grey.jpg",
        description: "Klasik lifestyle sneaker dengan comfort yang all-day wearable.",
        availableSizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 20,
        name: "New Balance 530",
        brand: "New Balance",
        category: "kids",
        price: 1499000,
        image: "https://data.sneakers76.com/images/galleries/6133/mr530ta_202.jpg",
        description: "Running-inspired casual shoe untuk anak dengan cushioning yang nyaman.",
        availableSizes: [32, 33, 34, 35, 36, 37]
    },
    {
        id: 21,
        name: "New Balance Fresh Foam X 1080",
        brand: "New Balance",
        category: "mens",
        price: 2599000,
        image: "https://intersportbgazure.lhscdn.com/uploads/resources/466436/7def8900-d367-4-huge.jpg?lm=DB2F5F1E2C728AD798C49D3C7490859F",
        description: "Performance running shoe dengan Fresh Foam untuk cushioning maksimal.",
        availableSizes: [40, 41, 42, 43, 44]
    },
    {
        id: 22,
        name: "New Balance 550",
        brand: "New Balance",
        category: "womens",
        price: 1999000,
        image: "https://data.sneakers76.com/images/galleries/6087/bb550lsb_202.png",
        description: "Basketball heritage dengan design clean dan colorway yang versatile.",
        availableSizes: [36, 37, 38, 39, 40]
    },
    {
        id: 23,
        name: "New Balance 2002R",
        brand: "New Balance",
        category: "mens",
        price: 2399000,
        image: "https://static.ftshp.digital/img/p/8/2/3/8/9/4/823894.jpg",
        description: "Y2K aesthetic dengan N-ergy cushioning untuk comfort superior.",
        availableSizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 24,
        name: "New Balance 373",
        brand: "New Balance",
        category: "kids",
        price: 1399000,
        image: "https://images.novelship.com/product/new_balance_373_shoes_grey_ml373mta_0_17225.jpeg?fit=fill&bg=FFFFFF&trim=color&q=75&w=1200&h=1200&pad=80&fm=webp&auto=compress",
        description: "Retro runner untuk anak dengan design yang timeless dan comfortable.",
        availableSizes: [32, 33, 34, 35, 36, 37, 38]
    },

    // VANS - 8 products
    {
        id: 25,
        name: "Vans Old Skool",
        brand: "Vans",
        category: "mens",
        price: 1299000,
        image: "https://i.ebayimg.com/images/g/xFcAAOSwJcZWdL5y/s-l1600.jpg",
        description: "Iconic skate shoe dengan side stripe yang legendary dan canvas durable.",
        availableSizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 26,
        name: "Vans Authentic",
        brand: "Vans",
        category: "womens",
        price: 1199000,
        image: "https://i5.walmartimages.com/asr/79eccd47-bd4c-4e89-9484-94f5e74818b9.4f6e52ab75c1d1f87fa24e1eb6835d9a.jpeg",
        description: "Simple low-top dengan canvas construction untuk everyday wear.",
        availableSizes: [36, 37, 38, 39, 40, 41]
    },
    {
        id: 27,
        name: "Vans Sk8-Hi",
        brand: "Vans",
        category: "mens",
        price: 1399000,
        image: "https://socalskateshop.com/mm5/graphics/00000001/34/Vans-Skate-Sk8-Hi-Pro-Shoes-Raw-Canvas-Classic-White-1.jpg",
        description: "High-top skate shoe dengan ankle support dan Vans waffle outsole.",
        availableSizes: [40, 41, 42, 43, 44, 45]
    },
    {
        id: 28,
        name: "Vans Slip-On",
        brand: "Vans",
        category: "kids",
        price: 1099000,
        image: "https://www.consortium.co.uk/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/v/a/vans-classic-slip-on-98-dx-anaheim-factory-checkerboard-black-white-cat.jpg",
        description: "Easy on-off sneaker untuk anak dengan checkerboard pattern yang iconic.",
        availableSizes: [32, 33, 34, 35, 36, 37]
    },
    {
        id: 29,
        name: "Vans Era",
        brand: "Vans",
        category: "mens",
        price: 1199000,
        image: "https://www.natterjacks.com/images/vans-era-black-p39669-296659_image.jpg",
        description: "Classic skate shoe dengan padded collar untuk extra comfort.",
        availableSizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 30,
        name: "Vans Knu Skool",
        brand: "Vans",
        category: "womens",
        price: 1499000,
        image: "https://assets.solesense.com/en/images/products/500/vans-knu-skool-black-white-vn0009qc6bt_1.jpg",
        description: "Chunky sneaker dengan puffy tongue untuk 90s inspired look.",
        availableSizes: [36, 37, 38, 39, 40]
    },
    {
        id: 31,
        name: "Vans UltraRange",
        brand: "Vans",
        category: "mens",
        price: 1599000,
        image: "https://images.tcdn.com.br/img/img_prod/1025063/tenis_vans_ultrarange_16921_2_753c4c7ba04170719888527763a0a6ae.jpg",
        description: "Modern performance shoe dengan UltraCush untuk all-day comfort.",
        availableSizes: [40, 41, 42, 43, 44, 45]
    },
    {
        id: 32,
        name: "Vans ComfyCush",
        brand: "Vans",
        category: "kids",
        price: 1299000,
        image: "https://content.backcountry.com/images/items/900/VAN/VANR5AL/BLAWHI.jpg",
        description: "Extra comfort version dengan ComfyCush technology untuk anak-anak.",
        availableSizes: [32, 33, 34, 35, 36, 37, 38]
    }
];

// Global Variables
let currentUser = null;
let currentProduct = null;
let selectedSize = null;
let currentFilter = { type: 'all', value: null };

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// Hapus atau komentari variabel const productsDatabase = [...] yang panjang itu.

function initApp() {
    // Kita pakai data manual (productsDatabase) yang ada di atas
    displayProducts(productsDatabase);
    
    setupHeroSlider();
    setupEventListeners();
    checkLoginStatus();
}

// Hero Slider
function setupHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = n;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Display Products
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <p class="product-brand-tag">${product.brand}</p>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price-tag">Rp ${product.price.toLocaleString('id-ID')}</p>
            </div>
            <button class="view-details-btn">View Details</button>
        `;

        productCard.addEventListener('click', () => showProductDetail(product));
        productsGrid.appendChild(productCard);
    });
}

// Filter Products
function filterProducts(type, value) {
    let filtered = productsDatabase;

    if (type === 'brand') {
        filtered = productsDatabase.filter(p => p.brand === value);
    } else if (type === 'category') {
        filtered = productsDatabase.filter(p => p.category === value);
    }

    displayProducts(filtered);
    currentFilter = { type, value };
}

// Search Products
function searchProducts(query) {
    const filtered = productsDatabase.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filtered);
}

// Show Product Detail
function showProductDetail(product) {
    currentProduct = product;
    selectedSize = null;

    document.getElementById('detailImage').src = product.image;
    document.getElementById('detailBrand').textContent = product.brand;
    document.getElementById('detailName').textContent = product.name;
    document.getElementById('detailPrice').textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
    document.getElementById('detailDescription').textContent = product.description;

    // Load sizes
    const sizeButtons = document.getElementById('sizeButtons');
    sizeButtons.innerHTML = '';
    product.availableSizes.forEach(size => {
        const btn = document.createElement('button');
        btn.classList.add('size-btn');
        btn.textContent = size;
        btn.addEventListener('click', () => selectSize(size, btn));
        sizeButtons.appendChild(btn);
    });

    // Hide error
    document.getElementById('sizeError').classList.remove('show');

    // Show page
    showPage('productDetailPage');
}

// Select Size
function selectSize(size, button) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    document.getElementById('sizeError').classList.remove('show');
}

// Buy Now
function buyNow() {
    if (!selectedSize) {
        document.getElementById('sizeError').classList.add('show');
        return;
    }

    // Auto-fill user data if logged in
    if (currentUser) {
        
        // Isi Nama (Ambil dari fullName, kalau kosong pakai username)
        if(document.getElementById('checkoutName')) {
            document.getElementById('checkoutName').value = currentUser.fullName || currentUser.username;
        }

        // Isi Alamat (Ambil dari database)
        if(document.getElementById('checkoutAddress')) {
            document.getElementById('checkoutAddress').value = currentUser.address || '';
        }

        // Isi Telepon (Ambil dari database - INI BARU DITAMBAHKAN)
        if(document.getElementById('checkoutPhone')) {
            document.getElementById('checkoutPhone').value = currentUser.phone || '';
        }
    }

    // 1. Tampilan Visual (Ringkasan Pesanan)
    document.getElementById('summaryImage').src = currentProduct.image;
    document.getElementById('summaryName').textContent = currentProduct.name;
    document.getElementById('summarySize').textContent = selectedSize;
    document.getElementById('summaryPrice').textContent = `Rp ${currentProduct.price.toLocaleString('id-ID')}`;
    document.getElementById('totalPrice').textContent = `Rp ${currentProduct.price.toLocaleString('id-ID')}`;

    // 2. ISI DATA KE INPUT TERSEMBUNYI (PENTING! INI YANG DIKIRIM KE PHP)
    document.getElementById('hiddenProductName').value = currentProduct.name;
    document.getElementById('hiddenProductPrice').value = currentProduct.price;

    showPage('checkoutPage');
}

// Checkout
// Checkout Process (Kirim ke PHP & Tampilkan Invoice)
function processCheckout(e) {
    e.preventDefault();

    const form = document.getElementById('paymentForm');
    const formData = new FormData(form);

    // Ambil nilai manual untuk tampilan Invoice
    const name = document.getElementById('checkoutName').value;
    const address = document.getElementById('checkoutAddress').value;
    const phone = document.getElementById('checkoutPhone').value;
    // Perbaikan selector radio button sesuai name di HTML
    const payment = document.querySelector('input[name="payment_method"]:checked').value; 

    // KIRIM KE PHP (Checkout.php)
    fetch('checkout.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'success') {
            // JIKA SUKSES MASUK DB, BARU TAMPILKAN INVOICE
            
            // Isi data Invoice
            document.getElementById('invoiceName').textContent = name;
            document.getElementById('invoiceAddress').textContent = address;
            document.getElementById('invoicePhone').textContent = phone;
            document.getElementById('invoiceImage').src = currentProduct.image;
            document.getElementById('invoiceProductName').textContent = currentProduct.name;
            document.getElementById('invoiceSize').textContent = selectedSize;
            document.getElementById('invoicePrice').textContent = `Rp ${currentProduct.price.toLocaleString('id-ID')}`;
            document.getElementById('invoicePayment').textContent = payment;
            document.getElementById('invoiceTotal').textContent = `Rp ${currentProduct.price.toLocaleString('id-ID')}`;

            alert("Pesanan Berhasil Disimpan!");
            showPage('invoicePage');
        } else {
            alert("Gagal: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Terjadi kesalahan koneksi database.");
    });
}

// Login/Register
function showLoginModal() {
    if (currentUser) {
        showPage('profilePage');
        loadProfile();
    } else {
        document.getElementById('loginModal').classList.add('active');
    }
}

//Login to PHP
async function login(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
        const response = await fetch('login.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();

        if (result.status === 'success') {
            // Simpan data user dari DATABASE
            currentUser = result.data;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            document.getElementById('loginModal').classList.remove('active');
            alert('Login berhasil! Halo, ' + currentUser.username);
            
            // Langsung update tampilan profil
            showPage('profilePage');
            loadProfile();
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Gagal login. Cek koneksi server.');
    }
}

//Register to PHP
async function register(e) {
    e.preventDefault();
    
    // Ambil data dari form HTML
    const usernameInput = document.getElementById('registerUsername');
    const passwordInput = document.getElementById('registerPassword');
    const fullNameInput = document.getElementById('registerFullName');
    const phoneInput = document.getElementById('registerPhone');
    const addressInput = document.getElementById('registerAddress');

    // Cek dulu, jaga-jaga kalau ada elemen yang null (biar gak crash)
    if (!usernameInput || !passwordInput || !fullNameInput || !phoneInput || !addressInput) {
        console.error("Ada elemen input yang hilang di HTML!");
        alert("Terjadi kesalahan sistem (Input Missing). Silakan refresh.");
        return;
    }

    // Ambil nilainya (Value)
    const username = usernameInput.value;
    const password = passwordInput.value;
    const fullName = fullNameInput.value;
    const phone = phoneInput.value;
    const address = addressInput.value;

    // Siapkan data untuk dikirim ke PHP
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('full_name', fullName);
    formData.append('address', address);
    formData.append('phone', phone);

    // Tampilkan Loading (Opsional, biar user tau sedang proses)
    const btnDaftar = document.querySelector('#registerForm button');
    const textAsli = btnDaftar.innerText;
    btnDaftar.innerText = "Memproses...";
    btnDaftar.disabled = true;

    try {
        const response = await fetch('register.php', {
            method: 'POST',
            body: formData
        });
        
        // Cek apakah response valid JSON
        const textResponse = await response.text(); 
        let result;
        try {
            result = JSON.parse(textResponse);
        } catch (err) {
            console.error("Error PHP:", textResponse);
            alert("Terjadi kesalahan server. Cek console.");
            return;
        }

        if (result.status === 'success') {
            alert(result.message);
            // Reset form dan pindah ke tab login
            document.getElementById('registerForm').reset();
            document.querySelector('.tab-btn[data-tab="login"]').click();
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Gagal register. Cek koneksi server.');
    } finally {
        // Kembalikan tombol seperti semula
        btnDaftar.innerText = textAsli;
        btnDaftar.disabled = false;
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showPage('homePage');
    alert('Logout berhasil!');
}

function checkLoginStatus() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
}

// Profile
function loadProfile() {
    if (currentUser) {
        document.getElementById('profileUsername').textContent = currentUser.username;
        document.getElementById('profileFullName').value = currentUser.fullName || '';
        document.getElementById('profileAddress').value = currentUser.address || '';
        // Pastikan ID ini ada di HTML
        if(document.getElementById('profilePhone')) {
            document.getElementById('profilePhone').value = currentUser.phone || ''; 
        }
    }
}

//Save Profile to PHP
async function saveProfile(e) {
    e.preventDefault();

    const fullName = document.getElementById('profileFullName').value;
    const address = document.getElementById('profileAddress').value;
    const phone = document.getElementById('profilePhone').value;

    const formData = new FormData();
    // Username dipakai sebagai kunci (WHERE username = ...)
    formData.append('username', currentUser.username);
    formData.append('fullName', fullName);
    formData.append('address', address);
    formData.append('phone', phone);

    try {
        const response = await fetch('update_profile.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();

        if (result.status === 'success') {
            // Update data di memori browser
            currentUser = result.data;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            alert('Profil berhasil disimpan ke Database!');
        } else {
            alert('Gagal update: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan koneksi.');
    }
}

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// Event Listeners Setup
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (link.dataset.page === 'home') {
                showPage('homePage');
                displayProducts(productsDatabase);
            } else if (link.dataset.category) {
                showPage('homePage');
                filterProducts('category', link.dataset.category);
            }
        });
    });

    // Brand filters
    document.querySelectorAll('.brand-card').forEach(card => {
        card.addEventListener('click', () => {
            const brand = card.dataset.brand;
            filterProducts('brand', brand);
            window.scrollTo({ top: document.querySelector('.products-section').offsetTop - 100, behavior: 'smooth' });
        });
    });

    // Search
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.getElementById('searchInput');

    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });

    // Cart icon
    document.getElementById('cartIcon').addEventListener('click', () => {
        // In a real app, this would show cart page
        alert('Fitur keranjang belanja akan segera hadir!');
    });

    // User icon
    document.getElementById('userIcon').addEventListener('click', showLoginModal);

    // Buy now button
    document.getElementById('buyNowBtn').addEventListener('click', buyNow);

    // Back buttons
    document.getElementById('backBtn').addEventListener('click', () => showPage('homePage'));
    document.getElementById('checkoutBackBtn').addEventListener('click', () => showPage('productDetailPage'));
    document.getElementById('profileBackBtn').addEventListener('click', () => showPage('homePage'));

    // Continue shopping
    document.getElementById('continueShoppingBtn').addEventListener('click', () => showPage('homePage'));

    // Forms
    document.getElementById('loginForm').addEventListener('submit', login);
    document.getElementById('registerForm').addEventListener('submit', register);
   // ID form kita di HTML adalah paymentForm, bukan checkoutForm
    document.getElementById('paymentForm').addEventListener('submit', processCheckout);
    document.getElementById('profileForm').addEventListener('submit', saveProfile);

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', logout);

    // Modal
    const modal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close-modal');

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Modal tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(tab + 'Tab').classList.add('active');
        });
    });
}

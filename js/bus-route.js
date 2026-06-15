// ── DATA ──────────────────────────────────────────────────────────────────────
// Structure: DISTRICTS[districtName][routeName] = [buses]
const DISTRICTS_LIST = [
    "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha",
    "Kottayam", "Idukki", "Ernakulam", "Thrissur",
    "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
];

const DATA = {
    "Thrissur": {
        "PUTHUKKADU": [
            { sl: 1, name: "Brothers", reg: "KL 12 D 1900", route: "Eravakkad,Chittisheri,Ollur,Paliyekara" },
            { sl: 2, name: "Brothers", reg: "KL 7 BH 4149", route: "Trissur,Arattupuzha,Ollur,Cherpp,Oorakam" },
            { sl: 3, name: "Orange", reg: "KL 8 AP 8342", route: "Ollur,Kuriyachira,Anakkallu,Perincheri,Perumballisheri,Cherpp" },
            { sl: 4, name: "Orange", reg: "KL 8 AR 4670", route: "Cherpp,Koorkkasheri,Kanimandalam,Chenam" },
            { sl: 5, name: "Sreekrishna", reg: "KL 8 AN 9111", route: "Arattupuzha,Oorakam,Cherpp,Palakkal,Kanimandalam" },
            { sl: 6, name: "Sreekrishna", reg: "KL 40 E 1224", route: "Ollur,Cherpp,Chathakudam,Perincheri" },
            { sl: 7, name: "St Antony's", reg: "KL 48 C 4446", route: "Trissur,Ollur,Vadakkestand,Anakkallu,Cherpp" }
        ],
        "CHALAKUDY": [
            { sl: 8, name: "Mahin Matha", reg: "KL 06 E 3694", route: "Chalakudi,Adichili,Melur,Pulani,Nirmala College,Kunjapilli" },
            { sl: 9, name: "Maha Maya", reg: "KL 02 X 2034", route: "Chalakudi,Vellur,Narayana Mangalam,Konjath Kadav,Kundaay" },
            { sl: 10, name: "Maha Maya", reg: "KL 17 D 5445", route: "Mankidi,Maniyamkaav,Chappara,Vellur,Kozhikualangara" },
            { sl: 11, name: "Govind", reg: "KL 45 B 5979", route: "Trissur,Oorakam Vazhi,Shakthan Stand" },
            { sl: 12, name: "Maha Maya", reg: "KL 06E 0834", route: "Mankidi,Kompidi,Sholayar,Parambiroad,Thumboor Madam,Puthan Chira" },
            { sl: 13, name: "Keyar", reg: "KL 08 BC 1991", route: "Kodakara" },
            { sl: 14, name: "Aiswarya", reg: "KL 11 AH 3435", route: "Iringalakuda,Aaloor,Pulloor,Kallettumkara,Thommana" },
            { sl: 15, name: "Nandhanam", reg: "KL 8 AK 687", route: "Mala,Kundoor" },
            { sl: 16, name: "Mishal", reg: "KL 2 AD 4662", route: "Mala,Ashtamichira" }
        ],
        "CHELAKKARA": [
            { sl: 17, name: "Muthalamchira", reg: "KL 48 J 3004", route: "Ottpalam,Kondad,Mayannur,Paramelppadi" },
            { sl: 18, name: "Muthalamchira", reg: "KL 48 M 6030", route: "Vattulli,Thottekad,Chelakkara,Thonatoorkara" },
            { sl: 19, name: "Paramurikal", reg: "KL 18 B 8179", route: "Pazhayannur,Thiruvillamala,Pambadi,Nehru College" },
            { sl: 20, name: "Thayamma", reg: "KL 48 B 4562", route: "Kuthampulli,Thiruvillamala,Pazhyannur,Chelakkara,Vadakancheri" },
            { sl: 21, name: "Gopal", reg: "KL 09 U 3787", route: "" },
            { sl: 22, name: "MMP", reg: "KL 45 C 0021", route: "Chelakkara,Pazhyannur,Mattupara,Vadakancheri" },
            { sl: 23, name: "SVT", reg: "KL 48 G 6262", route: "Pazhayannur,Mayannur,Kondaazhi" },
            { sl: 24, name: "Sreekrishna", reg: "KL 08 BT 5695", route: "Ottapalam,Chelakkara,Kodungallur,Vadakancheri" },
            { sl: 25, name: "Miracle", reg: "KL 11 AY 9936", route: "Elanad,Chelakkara,Kaliyaroad,Pazhyannur" }
        ],
        "WADAKKANCHERY": [
            { sl: 26, name: "Chalakkal", reg: "KL 08 BH 5727", route: "Adaatt,Ayyanthol,Puranattukara,Soba City" },
            { sl: 27, name: "Chalakkal", reg: "KL 03 T 3010", route: "Ayyanthol,Pullazhi,Pudhurkara" },
            { sl: 28, name: "Chalakkal", reg: "KL 8 AJ 1717", route: "Pullazhi,Pudhurkara,Ayyanthol,Trissur,KSRTC,Railway" },
            { sl: 29, name: "Chalakkal", reg: "KL 13T 3355", route: "Pullazhi,Ayyanthol,Pudhurkara" },
            { sl: 30, name: "Friends Travels", reg: "KL 08 AL 5727", route: "Muthuvara,Adatt,Ayyanthol,Nellankhara" },
            { sl: 31, name: "Friends Travels", reg: "KL 08 AS 2010", route: "Shakthan Stand,Mukkattukara,Mannuthi,Nellankhara" }
        ],
        "KUNNAMKULAM": [
            { sl: 32, name: "Sreelakshmi", reg: "KL 48 2869", route: "Trissur,Kunnamkulam,Poonkunnam,Shakthan Stand" },
            { sl: 33, name: "TVS Travels", reg: "KL 48 F 7800", route: "Kunnamkulam,Vadakancheri,Nelluvay,Erumapetty" },
            { sl: 34, name: "Thiruvonam", reg: "KL 02 V 9594", route: "Kunnamkulam,Chittattukara,Kadavallur,Mattam,Kunmakuchi,Choondal" },
            { sl: 35, name: "Sanchari", reg: "KL 49 4667", route: "Kunnamkulam,Guruvayur,Chavakkad" },
            { sl: 36, name: "Sanchari", reg: "KL 52 8192", route: "Kunnamkulam,Chavakkad" },
            { sl: 37, name: "Arya", reg: "KL 8 BE 1224", route: "Pazhanji,Shakthan Stand,Kattakambal,Perkulam Vazhi" },
            { sl: 38, name: "Arya", reg: "KL 08 AT 9070", route: "Shakthan Stand,Trissur,Poonkunnam" },
            { sl: 39, name: "Nisha", reg: "KL 48 B 5840", route: "Pazhanji,Chirakkal,Akkikaav,Karikkad" },
            { sl: 40, name: "Nisha", reg: "KL 48P 0004", route: "Pazhanji,Chirakkal,Cherkulam" },
            { sl: 41, name: "Nisha", reg: "KL 48 2148", route: "Trissur,Kunnamkulam,Katakambal" }
        ],
        "GURUVAYOOR": [
            { sl: 42, name: "Sangeetha", reg: "KL 71 A 1743", route: "Kundukadav,Guruvayoor,Aalthara,Puthanpalli" },
            { sl: 43, name: "Sangeetha", reg: "KL 09 AM 799", route: "Eramangalam,Maramuttam,Veliyamkod,Kothamukk" },
            { sl: 44, name: "Sangeetha", reg: "KL 46 R 0225", route: "Shakthan Stand,Guruvayoor" },
            { sl: 45, name: "Al Ameen", reg: "KL 08 AM 6255", route: "Chavakad,Ponnani" },
            { sl: 46, name: "Babu Raj", reg: "KL 46 J 2025", route: "Trissur,Guruvayoor,Chovhallurppadi,Shakthan Stand" },
            { sl: 47, name: "Sneha", reg: "KL 46J 5082", route: "Kunnamkulam,Aalthara,Anjoor,Kunnukadav" },
            { sl: 48, name: "Punchiri", reg: "KL 11X 399", route: "Kunnamkulam,Chavakad,Malad,Kottappadi,Thamburanpadi" },
            { sl: 49, name: "MKK", reg: "KL 08 BA 2322", route: "Shakthan Stand,Guruvayur,Chovhallurpadi,Vazhi" },
            { sl: 50, name: "Theeram", reg: "KL 58Q 5688", route: "Ponnani,Kunnamkulam" }
        ],
        "KODUNGALLUR": [
            { sl: 51, name: "MS Menon", reg: "KL 45 D 18", route: "Kodungallur,Iringalakuda,Oorakam" },
            { sl: 52, name: "MS Menon", reg: "KL 45 N 4599", route: "Shakthan Stand,Kodungallur,Iringalakuda,Oorakam Vazhi" },
            { sl: 53, name: "MS Menon", reg: "KL45 A 8676", route: "Trissur,Kodungallur,Iringalakuda,Oorakam Vazhi" },
            { sl: 54, name: "MS Menon", reg: "KL 08 AP 3222", route: "" },
            { sl: 55, name: "MS Menon", reg: "KL 18 K 9045", route: "" },
            { sl: 56, name: "Mishal", reg: "KL59 3225", route: "Mala,Keezhthali,Ashtamichira,Chethuruthi,Poyya" },
            { sl: 57, name: "Mishal", reg: "KL 43 F 4023", route: "Mala,Puthanvelikara,Ashtamichira,Vellangulangara,Velayanad" },
            { sl: 58, name: "VTS", reg: "KL 17 D 0525", route: "Azheekod,Kariyad,Block Vazhi" },
            { sl: 59, name: "VTS", reg: "KL 35 4387", route: "Kodungallur,Kottappuram,Anjangadi College,Pokklaay,Moonupeedika" },
            { sl: 60, name: "VTS", reg: "KL 16 C 3465", route: "Poyya,Kodungallur" }
        ],
        "IRINGALAKUDA": [
            { sl: 61, name: "Akila", reg: "KL 45 C 8595", route: "Iringalakuda,Valappad,Edamuttam,Kattur,Edathuruthi" },
            { sl: 62, name: "Harirama", reg: "KL 40 U 1925", route: "Thrippayar,Edamuttam,Kattur,Valppad" },
            { sl: 63, name: "Sivalaya", reg: "KL 26 B2266", route: "Iringalakuda,Kompidi,Kundaay,Pullur" },
            { sl: 64, name: "Holly Queen", reg: "KL 08 AT 6955", route: "Amballur,Iringalakuda" },
            { sl: 65, name: "Vellamparambil", reg: "KL 02 AA 7144", route: "Cherpp,Oorakam,Koorkancheri,Valiyalakkal" },
            { sl: 66, name: "Jeyar", reg: "KL 8 AK 7259", route: "" },
            { sl: 67, name: "Orange", reg: "KL 02Y 1044", route: "Puthukkad,Amballur,Ollur,Marathakara,Chiyyaram,Parappukara" }
        ],
        "THRISSUR": [
            { sl: 68, name: "Anthikadan", reg: "KL 12 E 8757", route: "Trissur,Veluthoor Olari,Kunnathangadi,Madhar ESI,Shakthan Stand" },
            { sl: 69, name: "Devamatha", reg: "KL 49 5400", route: "Trissur,Kodungallur" },
            { sl: 70, name: "Devamatha", reg: "KLOS AP 0972", route: "" },
            { sl: 71, name: "Devamatha", reg: "KL 45 C 1551", route: "Iringalakuda,Oorakam Vazhi,Trissur" },
            { sl: 72, name: "Santhosham", reg: "KL 48 5445", route: "Trissur,Guruvayoor,Poonkunnam" },
            { sl: 73, name: "Santhosham", reg: "KL 10 AE 9641", route: "Zoological Park,Kayyannur,Moorkanikara,JEM Hospital,Mulayam,Mannuthi,Paravattani,Trissur,Shakthan Stand" },
            { sl: 74, name: "Santhosham", reg: "KL 10 AK 8733", route: "Metro,Koorkancheri,Nedupuzha,Trissur,Panamukk" },
            { sl: 75, name: "Santhosham", reg: "KL GD 2866", route: "Nedupuzha,Panamukk,Koorkancheri,Kanimangalam,Over Bridge Vazhi" },
            { sl: 76, name: "Santhosham", reg: "KL 08 AZ 4748", route: "Nedupuzha,Panamukk,Kanimangalam" },
            { sl: 77, name: "Santhosham", reg: "KL 08 AZ 5900", route: "Trissur,Nedupuzha,Panamukk,Koorkancheri,Valiyalakkal" }
        ],
        "NATIKA": [
            { sl: 78, name: "Christ", reg: "KL 24E 1551", route: "Trissur,Koorkancheri" },
            { sl: 79, name: "Christ", reg: "KL 08 BT 9275", route: "Trissur,Koorkancheri,Palakkal,Kanimangalam,Trippeyar,Peringattukara" },
            { sl: 80, name: "Christ", reg: "KL 08 AT 9252", route: "Trissur,Trippeyar,Cherpp,Palakkal,Peringattukara" },
            { sl: 81, name: "Christ", reg: "KL 08 BB 3413", route: "Trissur,Trippeyar,Koorkancheri,Kanimangalam,Palakkal,Railway KSRTC" },
            { sl: 82, name: "Christ", reg: "KL 52 B 6548", route: "Trissur,Trippeyar,Cherpp,Chirakal,Pazhavil" },
            { sl: 83, name: "Marry Matha", reg: "KL 08 BM 5616", route: "Trissur,Trippeyar,Cherpp,Palakkal,Chirakal" },
            { sl: 84, name: "Annam", reg: "KL 63 A 0025", route: "Tirur,Trippeyar Kshethram,Palakkal,Cherpp,Peringattukara,Thannyam" },
            { sl: 85, name: "Jai Mary", reg: "KL 40 A 7843", route: "Trissur,Cherpp,Chirakal,Trippeyar Kshethram,Peringattukara" },
            { sl: 86, name: "AYYAPAmma", reg: "KL 16 E 5434", route: "Kattor,Karanchira Mission,Chenthrappini,Perumbalisheri,Cherpp" },
            { sl: 87, name: "SST", reg: "KL 08 AL 5331", route: "Trissur,Cherpp" }
        ],
        "OLLUR": [
            { sl: 88, name: "Manamel", reg: "KL 8 AF 6226", route: "Trissur,Mannuthi,Kattyapooyam" },
            { sl: 89, name: "Manamel", reg: "KL 58B 9471", route: "Vellanikkara,University,KVK,Chirakod,Pandiparamb,Paravattani" },
            { sl: 90, name: "Manamel", reg: "KL 48 E 1400", route: "Trissur,Chelakkara,Ottupara,Pazhayannur,Thiruvillamala,Vadakkancheri" },
            { sl: 91, name: "Manamel", reg: "KL 8 BH 3830", route: "Trissur,Thiruvillamala,Lakkidi,Pambadi,Nehru College,Ottapalam,Chelakkara" },
            { sl: 92, name: "AYYAPAS", reg: "KL 57 1720", route: "Peedikaparamb,Mulayam,Kozhukkulli,Mannuthi,Nadathara,Poochutti" },
            { sl: 93, name: "AYYAPAS", reg: "KL 08 AP 4033", route: "Mannuthi,Jubilee Mission,Paravattani,Ollukkara,GEM Hospital" },
            { sl: 94, name: "Mounam", reg: "KL 08 AJ 6010", route: "Mulayam,Mannuthi,Peedikaparamb,Kozhukkulli,Nadthara,Poochatty" },
            { sl: 95, name: "Mounam", reg: "KL 08 BE 9161", route: "Machad,Thiruvanikkav,Punnamparamb,Cheroor,Villadam,Ponganamkaad" },
            { sl: 96, name: "Mounam", reg: "KL 08 BA 2252", route: "Thanikudam,Pallimoola,Villadam" },
            { sl: 97, name: "Mounam", reg: "KL 08 BH 9467", route: "Trissur,Pallimoola,Cheroor,Peringaad,Vayanashala,Vimala College" },
            { sl: 98, name: "Karikootathil", reg: "KL 08 AJ 2244", route: "Peedikaparamb,Mulayam,Kozhukkulli,Mannuthi,Nadathara,Poochatti" },
            { sl: 99, name: "Karikootathil", reg: "KL 6 D 1380", route: "Chelakkara,Mayannur,Kondaazi" },
            { sl: 100, name: "Karikootathil", reg: "KL 59 M 4041", route: "Trissur,Thiruvillamala,Pazhayannur,Chelakkara" },
            { sl: 101, name: "AYYAPAS", reg: "KL12 E8007", route: "Trissur,Shakthan Stand" },
            { sl: 102, name: "AYYAPAS", reg: "KL 8 CG 1137", route: "Ottapalam" }
        ],
        "MANALOOR": [
            { sl: 103, name: "IShan", reg: "KL 58 4839", route: "Trissur,Anthikad" },
            { sl: 104, name: "IShan", reg: "KL 03 P 4822", route: "Trissur,Trippeyar Kshethram,Kanjaani,Anthikaad,Puthanpeedika,Avanagod,Peringattukara,Chemmappilli,Olari" },
            { sl: 105, name: "IShan", reg: "KL08 AS 6451", route: "Trissur,Anthikaad,Avanangod,Trippeyar Kshethram,Peringattukara" },
            { sl: 106, name: "IShan", reg: "KL 36 5225", route: "Trissur,Trippeyar Kshethram,Kanjaani,Anthikaad,Puthanpeedika,Avanagod" },
            { sl: 107, name: "IShan", reg: "KL 08 AH 2020", route: "Trissur,Anthikad,Muttichur,Kanjani,Puthanpeedika,Olari" },
            { sl: 108, name: "IShan", reg: "KL 35 A 6260", route: "Trissur,Shakthan Stand,Avanagod,Peringattukara" },
            { sl: 109, name: "IShan", reg: "KL 33 B 7290", route: "Trissur,Trippeyar Kshethram,Anthikaad" },
            { sl: 110, name: "Veenamol", reg: "KL 8 AY 9761", route: "Kodungallur,Trippeyar" },
            { sl: 111, name: "Veenamol", reg: "KL 6 B 5821", route: "Trippeyar,Perinjanam,Chavakad" },
            { sl: 112, name: "Veenamol", reg: "KL 47 7971", route: "Guruvayoor" }
        ],
        "KAYPAMANGALAM": [
            { sl: 113, name: "VTS", reg: "KL 47 A 6660", route: "Azeekod,Kodungallur,Anjappalam Vazhi" },
            { sl: 114, name: "VTS", reg: "KL 47A 4320", route: "Iringalakuda,Mathilakam" },
            { sl: 115, name: "VTS", reg: "KL08 AP 0786", route: "Kodungallur,Azheekod,Pattukulam Vazhi" },
            { sl: 116, name: "VTS", reg: "KL 57A 0981", route: "Asmabi College,Pokklay,Kothampramb" },
            { sl: 117, name: "Veenamol", reg: "KL 13V 4255", route: "Iringalakuda,Perinjala,Chelur,Moonupeedika,Kakathiruthi" },
            { sl: 118, name: "Veenamol", reg: "KL 54 3559", route: "Vellikulangara,Iringalakuda,Kodakara,Kodathi" },
            { sl: 119, name: "Veenamol", reg: "KL 31 1842", route: "Perinjanam,Moonupeedika,Kothaparamb,SN Puram,Mathilakam" }
        ]
    }
};

// ── STATE ─────────────────────────────────────────────────────────────────────
let state = { district: null, route: null };

// ── FLAT LIST FOR SEARCH ───────────────────────────────────────────────────────
const allBuses = [];
for (const [dist, routes] of Object.entries(DATA)) {
    for (const [route, buses] of Object.entries(routes)) {
        buses.forEach(b => allBuses.push({ ...b, district: dist, route }));
    }
}

// ── ICONS ─────────────────────────────────────────────────────────────────────
const iconReg = `<svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h10M7 14h6"/></svg>`;

// ── VIEW HELPERS ───────────────────────────────────────────────────────────────
function showView(id) {
    ['view-districts', 'view-routes', 'view-buses', 'view-bus'].forEach(v => {
        const el = document.getElementById(v);
        el.classList.remove('active');
        el.style.display = 'none';
    });
    const target = document.getElementById(id);
    target.style.display = 'block';
    target.classList.add('active');

    // Hide search wrapper on bus details view
    const searchWrap = document.querySelector('.br-search-container') || document.querySelector('.br-search-wrap');
    if (searchWrap) {
        if (id === 'view-bus') {
            searchWrap.style.display = 'none';
        } else {
            searchWrap.style.display = 'flex';
        }
    }

    // Show the district selector only in the districts part (Level 1)
    const selectWrap = document.querySelector('.br-select-wrap');
    if (selectWrap) {
        if (id === 'view-districts') {
            selectWrap.style.display = 'block';
        } else {
            selectWrap.style.display = 'none';
        }
    }

    window.scrollTo(0, 0);
}

// ── LEVEL 1: DISTRICTS ────────────────────────────────────────────────────────
function showDistricts() {
    window.location.hash = '/';
}

function showDistrictsInternal() {
    state.district = null;
    state.route = null;
    document.getElementById('searchInput').value = '';
    document.getElementById('searchInput').placeholder = 'Search districts or routes\u2026';

    const select = document.getElementById('districtSelect');
    if (select) {
        if (!state.isDropdownNavigation) {
            select.value = ''; // Only clear selection if NOT navigating via dropdown
        }
        delete state.isDropdownNavigation; // Clear flag
    }

    clearSearch();
    renderDistricts();
    showView('view-districts');
}

function renderDistricts() {
    const grid = document.getElementById('districtsGrid');
    const select = document.getElementById('districtSelect');
    const selectedVal = select ? select.value : '';
    const searchVal = document.getElementById('searchInput').value.trim().toLowerCase();

    // If both are empty, hide all cards and show a prompt
    if (!selectedVal && !searchVal) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 20px;color:var(--text-dim);font-size:15px;">Please select a district or search above.</div>`;
        const count = document.getElementById('searchCount');
        if (count) count.innerHTML = '';
        return;
    }

    // Filter districts list based on dropdown and search
    const matched = DISTRICTS_LIST.filter(d => {
        const matchesSelect = !selectedVal || d === selectedVal;
        const matchesSearch = !searchVal || d.toLowerCase().includes(searchVal);
        return matchesSelect && matchesSearch;
    });

    grid.innerHTML = matched.map(d => {
        const hasData = !!DATA[d];
        const routes = hasData ? Object.keys(DATA[d]) : [];
        const totalBuses = hasData ? routes.reduce((sum, r) => sum + DATA[d][r].length, 0) : 0;
        if (hasData) {
            return `<div class="district-card has-data" onclick="showRoutes('${d}')">
        <h3>${d}</h3>
        <div class="district-meta">
          <div class="district-meta-item"><span class="meta-label">Routes</span><span class="meta-value">${routes.length}</span></div>
          <div class="district-meta-item"><span class="meta-label">Buses</span><span class="meta-value">${totalBuses}</span></div>
        </div>
        <span class="district-arrow">›</span>
      </div>`;
        } else {
            return `<div class="district-card" style="cursor:default;opacity:0.55">
        <span class="coming-soon">Coming Soon</span>
        <h3>${d}</h3>
        <div class="district-meta">
          <div class="district-meta-item"><span class="meta-label">Routes</span><span class="meta-value dim">–</span></div>
          <div class="district-meta-item"><span class="meta-label">Buses</span><span class="meta-value dim">–</span></div>
        </div>
      </div>`;
        }
    }).join('');

    const count = document.getElementById('searchCount');
    if (count) {
        if (matched.length === 0) {
            grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 20px;color:var(--text-dim);font-size:15px;">No matching districts found.</div>`;
            count.innerHTML = `No results found`;
        } else {
            count.innerHTML = `Showing <b>${matched.length}</b> district${matched.length !== 1 ? 's' : ''}`;
        }
    }
}

// ── LEVEL 2: ROUTES ───────────────────────────────────────────────────────────
function showRoutes(district) {
    window.location.hash = '/' + encodeURIComponent(district);
}

function showRoutesInternal(district) {
    state.district = district;
    state.route = null;
    document.getElementById('searchInput').value = '';
    document.getElementById('searchInput').placeholder = 'Search routes in ' + district + '\u2026';
    clearSearch();
    document.getElementById('bc-district-name').textContent = district;
    document.getElementById('bc-district2').textContent = district;
    document.getElementById('bc-district3').textContent = district;
    renderRoutes(district);
    showView('view-routes');
}

function routeCardHTML(district, r, busesLength, ops) {
    return `<div class="route-card" onclick="showBuses('${district}','${r}')">
      <h3>${r}</h3>
      <div class="district-meta">
        <div class="district-meta-item"><span class="meta-label">Buses</span><span class="meta-value">${busesLength}</span></div>
        <div class="district-meta-item"><span class="meta-label">Operators</span><span class="meta-value">${ops}</span></div>
      </div>
      <button class="br-card-action-btn" onclick="openRouteEnquiry(event, '${district}', '${r}')">
        Enquire Route
      </button>
      <span class="district-arrow">›</span>
    </div>`;
}

function renderRoutes(district) {
    const routes = DATA[district] || {};
    const routeNames = Object.keys(routes);
    document.getElementById('routesTitle').textContent = district + ' District';
    document.getElementById('routesCount').textContent = routeNames.length + ' routes';

    document.getElementById('routesGrid').innerHTML = routeNames.map(r => {
        const buses = routes[r];
        const ops = [...new Set(buses.map(b => b.name))].length;
        return routeCardHTML(district, r, buses.length, ops);
    }).join('');
}

function goBackToRoutes() {
    if (state.district) {
        window.location.hash = '/' + encodeURIComponent(state.district);
    }
}

// ── LEVEL 3: BUSES ────────────────────────────────────────────────────────────
function showBuses(district, route) {
    window.location.hash = '/' + encodeURIComponent(district) + '/' + encodeURIComponent(route);
}

function showBusesInternal(district, route) {
    state.district = district;
    state.route = route;
    document.getElementById('searchInput').value = '';
    document.getElementById('searchInput').placeholder = 'Search buses in ' + route + '\u2026';
    clearSearch();
    document.getElementById('bc-route-name').textContent = route;
    document.getElementById('bc-route2').textContent = route;
    renderBuses(district, route);
    showView('view-buses');
}

// ── DATA AND BINDINGS ─────────────────────────────────────────────────────────
function renderBuses(district, route) {
    const buses = (DATA[district] || {})[route] || [];
    document.getElementById('busesTitle').textContent = route;
    document.getElementById('busesCount').textContent = buses.length + ' buses';
    document.getElementById('busesGrid').innerHTML = buses.map(b => busCardHTML(b, district, route)).join('');
}

function busCardHTML(b, district, route) {
    const stops = b.route ? b.route.split(',').map(s => s.trim()).filter(Boolean) : [];
    const stopsHTML = stops.length
        ? `<div class="route-stops">${stops.slice(0, 4).map(s => `<span class="stop-tag">${s}</span>`).join('')}${stops.length > 4 ? `<span class="stop-tag">+${stops.length - 4} more</span>` : ''}</div>`
        : '';
    const d = district || b.district;
    const r = route || b.route_area || b.district;
    return `<div class="bus-card" onclick="showBusDetail('${d}','${r}',${b.sl})">
    <div class="bus-card-name"><span class="sl-badge">#${b.sl}</span>${b.name}</div>
    <div class="bus-card-reg">${iconReg}&nbsp;${b.reg}</div>
    ${stopsHTML}
  </div>`;
}

function goBackToBuses() {
    if (state.district && state.route) {
        window.location.hash = '/' + encodeURIComponent(state.district) + '/' + encodeURIComponent(state.route);
    }
}

// ── LEVEL 4: BUS DETAIL ───────────────────────────────────────────────────────
function showBusDetail(district, route, sl) {
    window.location.hash = '/' + encodeURIComponent(district) + '/' + encodeURIComponent(route) + '/' + sl;
}

function showBusDetailInternal(district, route, sl) {
    state.district = district;
    state.route = route;
    const bus = ((DATA[district] || {})[route] || []).find(b => b.sl === sl);
    if (!bus) {
        window.location.hash = '/' + encodeURIComponent(district) + '/' + encodeURIComponent(route);
        return;
    }

    document.getElementById('bc-district3').textContent = district;
    document.getElementById('bc-route2').textContent = route;
    document.getElementById('bc-bus-name').textContent = `${bus.name} – ${bus.reg}`;

    const stops = bus.route ? bus.route.split(',').map(s => s.trim()).filter(Boolean) : [];
    const stopsHTML = stops.length
        ? stops.map(s => `<span class="stop-tag-full">${s}</span>`).join('')
        : '<span style="color:var(--text-faint);font-size:13px">Route info not available</span>';

    document.getElementById('busDetailCard').innerHTML = `
    <div class="bus-detail-header">
      <div>
        <div class="bus-detail-name">${bus.name}</div>
        <div class="bus-detail-reg">${bus.reg}</div>
        <div class="bus-detail-meta">Route #${bus.sl} &nbsp;·&nbsp; ${route} &nbsp;·&nbsp; ${district}</div>
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-label">Stops on this route</div>
      <div class="route-stops-full">${stopsHTML}</div>
    </div>
    <div class="detail-section" style="margin-top: 24px; border-top: 1px solid var(--border); padding-top: 24px;">
      <button class="btn-primary" onclick="openBusEnquiry(event, '${district}', '${route}', '${bus.name}', '${bus.reg}')" style="padding: 12px 24px; width: 100%; justify-content: center; font-size: 14px;">
        Enquire About This Bus
      </button>
    </div>`;

    showView('view-bus');
}

// ── HASH ROUTER ───────────────────────────────────────────────────────────────
function renderViewFromHash() {
    const hash = window.location.hash;
    if (!hash || hash === '#' || hash === '#/') {
        showDistrictsInternal();
        return;
    }

    const path = hash.startsWith('#/') ? hash.substring(2) : hash.substring(1);
    const parts = path.split('/').map(decodeURIComponent);
    const district = parts[0];
    const route = parts[1];
    const busSlStr = parts[2];

    if (!district) {
        showDistrictsInternal();
        return;
    }

    if (!DATA[district]) {
        window.location.hash = '/';
        return;
    }

    if (!route) {
        showRoutesInternal(district);
        return;
    }

    if (!DATA[district][route]) {
        window.location.hash = '/' + encodeURIComponent(district);
        return;
    }

    if (!busSlStr) {
        showBusesInternal(district, route);
        return;
    }

    const busSl = parseInt(busSlStr, 10);
    showBusDetailInternal(district, route, busSl);
}

// ── SEARCH ────────────────────────────────────────────────────────────────────
let searchTimeout;
document.getElementById('searchInput').addEventListener('input', function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => runSearch(this.value.trim()), 200);
});

// Dropdown change event listener
const distSelect = document.getElementById('districtSelect');
if (distSelect) {
    distSelect.addEventListener('change', function () {
        // Clear search input on select to avoid user confusion
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';

        // Go back to districts panel if we are currently looking at route or bus details
        if (state.district !== null) {
            state.isDropdownNavigation = true;
            state.district = null;
            state.route = null;
            window.location.hash = '/';
        } else {
            renderDistricts();
        }
    });
}

function getActiveView() {
    if (document.getElementById('view-buses').classList.contains('active')) return 'buses';
    if (document.getElementById('view-routes').classList.contains('active')) return 'routes';
    if (document.getElementById('view-districts').classList.contains('active')) return 'districts';
    return null;
}

function runSearch(q) {
    const activeView = getActiveView();
    if (!q) {
        clearSearch();
        if (activeView === 'districts') renderDistricts();
        else if (activeView === 'routes' && state.district) renderRoutes(state.district);
        else if (activeView === 'buses' && state.district && state.route) renderBuses(state.district, state.route);
        return;
    }

    const lower = q.toLowerCase();
    const count = document.getElementById('searchCount');

    if (activeView === 'districts') {
        renderDistricts();

    } else if (activeView === 'routes' && state.district) {
        const routes = DATA[state.district] || {};
        const allRouteNames = Object.keys(routes);
        const matched = allRouteNames.filter(r => r.toLowerCase().includes(lower));
        const grid = document.getElementById('routesGrid');
        grid.innerHTML = matched.map(r => {
            const buses = routes[r];
            const ops = [...new Set(buses.map(b => b.name))].length;
            return routeCardHTML(state.district, r, buses.length, ops);
        }).join('');
        if (matched.length === 0) {
            grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 20px;color:var(--text-dim)">No routes match "<b>${q}</b>".</div>`;
            count.innerHTML = `No results for "<b>${q}</b>"`;
        } else {
            count.innerHTML = `<b>${matched.length}</b> route${matched.length !== 1 ? 's' : ''} found`;
        }

    } else if (activeView === 'buses' && state.district && state.route) {
        const buses = (DATA[state.district] || {})[state.route] || [];
        const matched = buses.filter(b =>
            b.name.toLowerCase().includes(lower) ||
            b.reg.toLowerCase().includes(lower) ||
            b.route.toLowerCase().includes(lower)
        );
        const grid = document.getElementById('busesGrid');
        grid.innerHTML = matched.map(b => busCardHTML(b, state.district, state.route)).join('');
        if (matched.length === 0) {
            grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 20px;color:var(--text-dim)">No buses match "<b>${q}</b>".</div>`;
            count.innerHTML = `No results for "<b>${q}</b>"`;
        } else {
            count.innerHTML = `<b>${matched.length}</b> bus${matched.length !== 1 ? 'es' : ''} found`;
        }
    }
}

function clearSearch() {
    document.getElementById('searchCount').innerHTML = '';
}

// ── INIT ──────────────────────────────────────────────────────────────────────
// ── ENQUIRY MODAL FUNCTIONALITY ───────────────────────────────────────────────
function openEnquiryModal(type, targetName, district = '', route = '', busName = '', busReg = '') {
    console.log("openEnquiryModal setting inputs to:", { type, targetName, district, route, busName, busReg });
    const modal = document.getElementById('enquiryModal');
    if (!modal) return;

    // Set hidden fields
    document.getElementById('enquiryTypeInput').value = type;
    document.getElementById('enquiryDistrictInput').value = district;
    document.getElementById('enquiryRouteInput').value = route;
    document.getElementById('enquiryBusInput').value = busName;
    document.getElementById('enquiryRegInput').value = busReg;

    // Set header text
    document.getElementById('enquiryTargetText').textContent = targetName;

    // Set placeholder depending on context
    const messageField = document.querySelector('#enquiry-form textarea[name="message"]');
    if (messageField) {
        if (type === 'bus') {
            messageField.placeholder = `Specify requirements for bus advertising on ${busName} (${busReg}) in ${district}...`;
        } else if (type === 'route') {
            messageField.placeholder = `Specify requirements for bus advertising on route ${route} in ${district}...`;
        } else {
            messageField.placeholder = "Specify requirements, number of buses, timing, KPIs...";
        }
    }

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable page scrolling
}

function closeEnquiryModal() {
    const modal = document.getElementById('enquiryModal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore page scrolling
    document.getElementById('enquiry-form').reset();
    document.getElementById('enquiry-form-message').innerHTML = '';
}

// Add route and bus enquiry functions that route and bus cards call
window.openRouteEnquiry = function (e, district, route) {
    console.log("openRouteEnquiry received:", { e, district, route });
    if (e && typeof e.stopPropagation === 'function') {
        e.stopPropagation(); // Prevent navigating to the route's buses list
        console.log("Routing as Event + Data:", { district, route });
        openEnquiryModal('route', `Route: ${route}`, district, route);
    } else {
        // If first argument is not an event, then it is district, and the second is route
        const actualDistrict = e;
        const actualRoute = district;
        console.log("Routing as Direct Data (shifted):", { actualDistrict, actualRoute });
        openEnquiryModal('route', `Route: ${actualRoute}`, actualDistrict, actualRoute);
    }
};

window.openBusEnquiry = function (e, district, route, busName, busReg) {
    console.log("openBusEnquiry received:", { e, district, route, busName, busReg });
    if (e && typeof e.stopPropagation === 'function') {
        e.stopPropagation();
        console.log("Busing as Event + Data:", { district, route, busName, busReg });
        openEnquiryModal('bus', `Bus: ${busName} (${busReg})`, district, route, busName, busReg);
    } else {
        // If first argument is not an event, then arguments shifted left
        const actualDistrict = e;
        const actualRoute = district;
        const actualBusName = route;
        const actualBusReg = busName;
        console.log("Busing as Direct Data (shifted):", { actualDistrict, actualRoute, actualBusName, actualBusReg });
        openEnquiryModal('bus', `Bus: ${actualBusName} (${actualBusReg})`, actualDistrict, actualRoute, actualBusName, actualBusReg);
    }
};

// Setup Modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('enquiryModal');
    const closeBtn = document.getElementById('modalCloseBtn');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeEnquiryModal);
    }

    // Close modal when clicking outside container
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeEnquiryModal();
            }
        });
    }

    // Handle form submission
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const form = this;
            const submitBtn = document.getElementById('enquiry-submit-btn');
            const messageBox = document.getElementById('enquiry-form-message');

            submitBtn.disabled = true;
            const originalText = submitBtn.innerHTML;
            submitBtn.innerText = 'Submitting...';

            try {
                const response = await fetch('submit.php', {
                    method: 'POST',
                    body: new FormData(form)
                });
                const data = await response.json();

                if (data.status === 'success') {
                    messageBox.innerHTML = '<div class="success-message" style="margin-top:15px;">' + data.message + '</div>';
                    form.reset();
                    setTimeout(() => {
                        closeEnquiryModal();
                    }, 2500);
                } else {
                    messageBox.innerHTML = '<div class="error-message" style="margin-top:15px;">' + data.message + '</div>';
                }
            } catch (error) {
                messageBox.innerHTML = '<div class="error-message" style="margin-top:15px;">Something went wrong. Please try again.</div>';
            }

            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
    }
});

window.addEventListener('hashchange', renderViewFromHash);
renderViewFromHash();

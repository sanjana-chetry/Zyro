/* ===== Bajaj Life Assist — App Logic (Full i18n + Theme + Mentor) ===== */
'use strict';

// ─── i18n Translations ───
const i18n = {
    en: {
        welcome_title: "Hi, I'm Zyro 👋",
        welcome_subtitle_customer: "Your smart companion for exploring insurance, learning through fun challenges, and earning rewards.",
        welcome_subtitle_advisor: "Your AI-powered assistant for Bajaj Life Insurance advisory. Access risk analysis, scenario simulations, and policy comparisons.",
        customer: "Customer", advisor: "Advisor",
        check_protection: "Check Protection Score", scenario_sim: "Scenario Simulator",
        myth_buster: "Myth Buster", compare_types: "Compare Insurance",
        protection_analyzer: "Protection Risk Analyzer",
        analyzer_desc: "Answer a few quick questions to check your insurance protection level.",
        your_age: "What is your age?", next: "Next →",
        monthly_income: "Monthly income range?",
        below_25k: "Below ₹25,000", above_1l: "Above ₹1,00,000",
        own_vehicle: "Do you own a vehicle?",
        yes_own: "Yes, I own a vehicle", no_vehicle: "No vehicle",
        support_family: "Do you financially support family members?",
        yes_support: "Yes", no_support: "No",
        existing_insurance: "Do you already have any insurance?",
        have_health: "Health Insurance", have_motor: "Motor Insurance",
        have_both: "Both", have_none: "No Insurance",
        protection_score: "Protection Score", retake: "Retake Assessment",
        scenario_simulator: "Scenario Simulator",
        scenario_desc: "See how Bajaj insurance protects you in real-life situations.",
        road_accident: "Road Accident", road_accident_desc: "Vehicle collision & repair costs",
        hospitalization: "Hospitalization", hospitalization_desc: "Unexpected medical emergency",
        travel_emergency: "Travel Emergency", travel_emergency_desc: "Medical issue abroad",
        myth_buster_title: "Insurance Myth Buster",
        myth_desc: "Tap a myth to learn the truth!",
        myth1: '"Insurance is too expensive"', myth2: '"Young people don\'t need insurance"',
        myth3: '"Claims always get rejected"', myth4: '"I have savings, so I don\'t need it"',
        myth5: '"All policies are the same"', myth6: '"Insurance is only for older people"',
        input_placeholder: "Ask about insurance...",
        voice_unsupported: "Voice input not supported in this browser. Please use Chrome or Edge.",
        // Welcome cards
        card_motor: "Motor Insurance", card_motor_desc: "Car & bike coverage",
        card_health: "Health Insurance", card_health_desc: "Medical & hospitalization",
        card_travel: "Travel Insurance", card_travel_desc: "International coverage",
        card_home: "Home Insurance", card_home_desc: "Property protection",
        card_compare: "Compare Plans", card_compare_desc: "Side-by-side analysis",
        card_risk: "Risk Analysis", card_risk_desc: "Client risk profiling",
        card_sales: "Sales Tips", card_sales_desc: "Objection handling",
        card_policy: "Policy Details", card_policy_desc: "Deep-dive coverage",
        // Quick actions
        qa_play_quiz: "Play Quiz 🎮",
        qa_motor: "What is motor insurance?",
        qa_claim: "How to file a claim?",
        qa_health: "Best health insurance plan?",
        qa_travel: "Travel insurance benefits",
        qa_compare: "Compare motor vs health insurance",
        qa_exclusions: "Key policy exclusions",
        qa_upsell: "How to upsell travel insurance?",
        qa_walkthrough: "Claim process walkthrough",
    },
    hi: {
        welcome_title: "नमस्ते, मैं Zyro हूँ 👋",
        welcome_subtitle_customer: "बीमा खोजने, मज़ेदार चुनौतियों के माध्यम से सीखने और पुरस्कार अर्जित करने के लिए आपका स्मार्ट साथी।",
        welcome_subtitle_advisor: "बजाज लाइफ इंश्योरेंस सलाहकार के लिए AI-संचालित सहायक। जोखिम विश्लेषण, परिदृश्य सिमुलेशन और पॉलिसी तुलना देखें।",
        customer: "ग्राहक", advisor: "सलाहकार",
        check_protection: "सुरक्षा स्कोर जांचें", scenario_sim: "परिदृश्य सिम्युलेटर",
        myth_buster: "मिथक भंजक", compare_types: "बीमा तुलना",
        protection_analyzer: "सुरक्षा जोखिम विश्लेषक",
        analyzer_desc: "अपने बीमा सुरक्षा स्तर की जांच के लिए कुछ प्रश्नों के उत्तर दें।",
        your_age: "आपकी उम्र क्या है?", next: "अगला →",
        monthly_income: "मासिक आय सीमा?",
        below_25k: "₹25,000 से कम", above_1l: "₹1,00,000 से अधिक",
        own_vehicle: "क्या आपके पास वाहन है?",
        yes_own: "हाँ, मेरे पास वाहन है", no_vehicle: "कोई वाहन नहीं",
        support_family: "क्या आप परिवार के सदस्यों का आर्थिक रूप से समर्थन करते हैं?",
        yes_support: "हाँ", no_support: "नहीं",
        existing_insurance: "क्या आपके पास पहले से कोई बीमा है?",
        have_health: "स्वास्थ्य बीमा", have_motor: "मोटर बीमा",
        have_both: "दोनों", have_none: "कोई बीमा नहीं",
        protection_score: "सुरक्षा स्कोर", retake: "पुनः मूल्यांकन करें",
        scenario_simulator: "परिदृश्य सिम्युलेटर",
        scenario_desc: "देखें कि बजाज बीमा आपको वास्तविक स्थितियों में कैसे सुरक्षित करता है।",
        road_accident: "सड़क दुर्घटना", road_accident_desc: "वाहन टक्कर और मरम्मत",
        hospitalization: "अस्पताल में भर्ती", hospitalization_desc: "अप्रत्याशित चिकित्सा आपातकाल",
        travel_emergency: "यात्रा आपातकाल", travel_emergency_desc: "विदेश में चिकित्सा समस्या",
        myth_buster_title: "बीमा मिथक भंजक",
        myth_desc: "सच्चाई जानने के लिए किसी मिथक पर टैप करें!",
        myth1: '"बीमा बहुत महंगा है"', myth2: '"युवाओं को बीमा की जरूरत नहीं"',
        myth3: '"दावे हमेशा अस्वीकार होते हैं"', myth4: '"मेरे पास बचत है, बीमा की जरूरत नहीं"',
        myth5: '"सभी पॉलिसी एक जैसी हैं"', myth6: '"बीमा केवल बुजुर्गों के लिए है"',
        input_placeholder: "बीमा के बारे में पूछें...",
        voice_unsupported: "इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है। कृपया Chrome या Edge का उपयोग करें।",
        // Welcome cards
        card_motor: "मोटर बीमा", card_motor_desc: "कार और बाइक कवरेज",
        card_health: "स्वास्थ्य बीमा", card_health_desc: "चिकित्सा और अस्पताल",
        card_travel: "यात्रा बीमा", card_travel_desc: "अंतर्राष्ट्रीय कवरेज",
        card_home: "गृह बीमा", card_home_desc: "संपत्ति सुरक्षा",
        card_compare: "योजनाओं की तुलना", card_compare_desc: "साथ-साथ विश्लेषण",
        card_risk: "जोखिम विश्लेषण", card_risk_desc: "ग्राहक जोखिम प्रोफाइलिंग",
        card_sales: "बिक्री सुझाव", card_sales_desc: "आपत्ति निवारण",
        card_policy: "पॉलिसी विवरण", card_policy_desc: "गहन कवरेज",
        // Quick actions
        qa_play_quiz: "Play Quiz 🎮",
        qa_motor: "मोटर बीमा क्या है?",
        qa_claim: "दावा कैसे करें?",
        qa_health: "सबसे अच्छी स्वास्थ्य बीमा योजना?",
        qa_travel: "यात्रा बीमा के लाभ",
        qa_compare: "मोटर बनाम स्वास्थ्य बीमा तुलना",
        qa_exclusions: "प्रमुख पॉलिसी अपवाद",
        qa_upsell: "यात्रा बीमा कैसे बेचें?",
        qa_walkthrough: "दावा प्रक्रिया का विवरण",
    },
    as: {
        welcome_title: "নমষ্কাৰ, মই Zyro 👋",
        welcome_subtitle_customer: "বীমা অন্বেষণ কৰিবলৈ, আমোদজনক প্ৰত্যাহ্বানৰ জৰিয়তে শিকিবলৈ আৰু পুৰষ্কাৰৰ বাবে আপোনাৰ স্মাৰ্ট সংগী।",
        welcome_subtitle_advisor: "বাজাজ লাইফ ইন্স্যুৰেন্স উপদেষ্টাৰ বাবে AI-চালিত সহায়ক।",
        customer: "গ্ৰাহক", advisor: "উপদেষ্টা",
        check_protection: "সুৰক্ষা স্কোৰ পৰীক্ষা কৰক", scenario_sim: "পৰিস্থিতি চিমুলেটৰ",
        myth_buster: "মিথ ভাঙক", compare_types: "বীমা তুলনা",
        protection_analyzer: "সুৰক্ষা বিপদ বিশ্লেষক",
        analyzer_desc: "আপোনাৰ বীমা সুৰক্ষা স্তৰ পৰীক্ষা কৰিবলৈ কেইটামান প্ৰশ্নৰ উত্তৰ দিয়ক।",
        your_age: "আপোনাৰ বয়স কিমান?", next: "পৰৱৰ্তী →",
        monthly_income: "মাহিলী আয়ৰ পৰিসৰ?",
        below_25k: "₹25,000 তকৈ কম", above_1l: "₹1,00,000 তকৈ বেছি",
        own_vehicle: "আপোনাৰ বাহন আছে নে?",
        yes_own: "হয়, মোৰ বাহন আছে", no_vehicle: "বাহন নাই",
        support_family: "আপুনি পৰিয়ালৰ সদস্যসকলক আৰ্থিকভাৱে সহায় কৰে নে?",
        yes_support: "হয়", no_support: "নহয়",
        existing_insurance: "আপোনাৰ আগতে কোনো বীমা আছে নে?",
        have_health: "স্বাস্থ্য বীমা", have_motor: "মটৰ বীমা",
        have_both: "দুয়োটা", have_none: "কোনো বীমা নাই",
        protection_score: "সুৰক্ষা স্কোৰ", retake: "পুনৰ মূল্যায়ন কৰক",
        scenario_simulator: "পৰিস্থিতি চিমুলেটৰ",
        scenario_desc: "বাজাজ বীমাই আপোনাক বাস্তৱ পৰিস্থিতিত কেনেকৈ সুৰক্ষা দিয়ে চাওক।",
        road_accident: "পথ দুৰ্ঘটনা", road_accident_desc: "বাহন সংঘৰ্ষ আৰু মেৰামতি",
        hospitalization: "চিকিৎসালয়ত ভৰ্তি", hospitalization_desc: "অপ্ৰত্যাশিত চিকিৎসা জৰুৰীকালীন",
        travel_emergency: "ভ্ৰমণ জৰুৰীকালীন", travel_emergency_desc: "বিদেশত চিকিৎসা সমস্যা",
        myth_buster_title: "বীমা মিথ ভাঙক",
        myth_desc: "সত্য জানিবলৈ এটা মিথত টেপ কৰক!",
        myth1: '"বীমা বহুত দামী"', myth2: '"যুৱকসকলক বীমাৰ প্ৰয়োজন নাই"',
        myth3: '"দাবী সদায় অস্বীকাৰ হয়"', myth4: '"মোৰ সঞ্চয় আছে, বীমাৰ দৰকাৰ নাই"',
        myth5: '"সকলো পলিচি একে"', myth6: '"বীমা কেৱল বয়সীয়াসকলৰ বাবে"',
        input_placeholder: "বীমাৰ বিষয়ে সুধক...",
        voice_unsupported: "এই ব্ৰাউজাৰত ভইচ ইনপুট সমৰ্থিত নহয়। অনুগ্ৰহ কৰি Chrome বা Edge ব্যৱহাৰ কৰক।",
        // Welcome cards
        card_motor: "মটৰ বীমা", card_motor_desc: "গাড়ী আৰু বাইক কভাৰেজ",
        card_health: "স্বাস্থ্য বীমা", card_health_desc: "চিকিৎসা আৰু চিকিৎসালয়",
        card_travel: "ভ্ৰমণ বীমা", card_travel_desc: "আন্তৰ্জাতিক কভাৰেজ",
        card_home: "গৃহ বীমা", card_home_desc: "সম্পত্তি সুৰক্ষা",
        card_compare: "পৰিকল্পনা তুলনা", card_compare_desc: "পাশাপাশি বিশ্লেষণ",
        card_risk: "বিপদ বিশ্লেষণ", card_risk_desc: "গ্ৰাহক বিপদ প্ৰ'ফাইলিং",
        card_sales: "বিক্ৰী পৰামৰ্শ", card_sales_desc: "আপত্তি নিবাৰণ",
        card_policy: "পলিচি বিৱৰণ", card_policy_desc: "গভীৰ কভাৰেজ",
        // Quick actions
        qa_play_quiz: "Play Quiz 🎮",
        qa_motor: "মটৰ বীমা কি?",
        qa_claim: "দাবী কেনেকৈ কৰিব?",
        qa_health: "সৰ্বোত্তম স্বাস্থ্য বীমা পৰিকল্পনা?",
        qa_travel: "ভ্ৰমণ বীমাৰ সুবিধা",
        qa_compare: "মটৰ বনাম স্বাস্থ্য বীমা তুলনা",
        qa_exclusions: "প্ৰধান পলিচি ব্যতিক্ৰম",
        qa_upsell: "ভ্ৰমণ বীমা কেনেকৈ বিক্ৰী কৰিব?",
        qa_walkthrough: "দাবী প্ৰক্ৰিয়াৰ বিৱৰণ",
    }
};

// ─── Welcome Card Definitions (reference i18n keys) ───
const welcomeCardDefs = {
    customer: [
        { icon: "🚗", titleKey: "card_motor", descKey: "card_motor_desc", queryKey: "qa_motor" },
        { icon: "🏥", titleKey: "card_health", descKey: "card_health_desc", queryKey: "qa_health" },
        { icon: "✈️", titleKey: "card_travel", descKey: "card_travel_desc", queryKey: "qa_travel" },
        { icon: "🏠", titleKey: "card_home", descKey: "card_home_desc", queryKey: "qa_claim" },
    ],
    advisor: [
        { icon: "📊", titleKey: "card_compare", descKey: "card_compare_desc", queryKey: "qa_compare" },
        { icon: "🛡️", titleKey: "card_risk", descKey: "card_risk_desc", queryKey: "qa_exclusions" },
        { icon: "💡", titleKey: "card_sales", descKey: "card_sales_desc", queryKey: "qa_upsell" },
        { icon: "📋", titleKey: "card_policy", descKey: "card_policy_desc", queryKey: "qa_walkthrough" },
    ]
};

// ─── Quick Action Definitions (reference i18n keys) ───
const quickActionDefs = {
    customer: ["qa_motor", "qa_claim", "qa_health", "qa_travel"],
    advisor: ["qa_compare", "qa_exclusions", "qa_upsell", "qa_walkthrough"]
};

// ─── Language name map ───
const langNames = { en: "English", hi: "Hindi (हिंदी)", as: "Assamese (অসমীয়া)" };

// ─── System Prompts ───
const systemPrompts = {
    customer: `You are Bajaj Life Assist, a friendly and approachable insurance assistant who explains insurance concepts like a helpful mentor talking to a friend.

CORE RULES:
- ONLY answer questions about insurance topics: Motor, Health, Travel, Home, Term Plans, ULIP, and related products by Bajaj.
- If the user asks about anything unrelated, politely redirect them.
- Use a warm, friendly, human tone throughout.

CONVERSATIONAL STYLE:
- Start responses naturally with phrases like: "Great question!", "Let's break it down.", "Think of it this way…"
- Use relatable examples from everyday life: hospital bills, car accidents, travel problems, family responsibilities.
- Make it feel like a conversation. Occasionally ask light guiding questions like: "Does that make sense?", "Have you ever noticed how hospital bills can suddenly become huge?"
- Avoid robotic or textbook language. Never sound like a policy document.
- Use short paragraphs and spacing to make answers easy to read.
- Use comparisons and analogies when possible. Example: "Insurance works a bit like a safety helmet — you hope you never need it, but when something unexpected happens, it protects you from a big impact."
- Focus on making the user feel comfortable asking questions.
- End explanations with friendly encouragement like: "Let me know if you'd like me to explain that further!", "I can also show you a quick example if you'd like."

RESPONSE FORMAT:
- Use markdown formatting: **bold**, bullet points, headers (###), tables where appropriate.
- Keep responses concise but thorough (150-300 words typically).
- When comparing insurance types, use markdown tables.

MYTH BUSTER FORMAT (when busting myths):
Use this structure:
### 🔴 Myth
[State the myth]
### 🟢 Reality
[Explain the truth with facts, using a relatable story]
### 💡 Example
[Give a relatable real-life example involving Bajaj insurance]

GUIDED CONVERSATION:
- ALWAYS end your response with 2-3 follow-up suggestions formatted as:
---
**You might also want to know:**
- [suggestion 1]
- [suggestion 2]
- [suggestion 3]

SCENARIO RESPONSE FORMAT (for scenario simulations):
### 📋 Scenario: [Title]
**Without Insurance:**
- [Cost breakdown]
**With Bajaj Insurance:**
- [Coverage details and savings]
**💰 You Save:** [amount/percentage]`,

    advisor: `You are Bajaj Life Assist in Advisor Mode — an expert insurance advisory assistant for Bajaj Life Insurance agents and advisors.

CORE RULES:
- Provide professional, detailed insurance guidance focused on Bajaj Life Insurance products.
- Help advisors with sales techniques, policy comparisons, client profiling, and objection handling.
- Use industry terminology but explain where needed.
- If asked about non-insurance topics, politely redirect to insurance matters.

RESPONSE FORMAT:
- Use markdown formatting: **bold**, bullet points, headers (###), tables where appropriate.
- Be more detailed and technical than customer mode.
- Include data points and statistics where relevant.
- When comparing products, always use markdown tables.

GUIDED CONVERSATION:
- ALWAYS end with 2-3 actionable follow-up suggestions:
---
**Next steps you might consider:**
- [suggestion 1]
- [suggestion 2]
- [suggestion 3]`
};

// ─── State ───
let currentLang = localStorage.getItem('pm_lang') || 'en';
let currentMode = localStorage.getItem('pm_mode') || 'customer';
let currentTheme = localStorage.getItem('pm_theme') || 'light';

let conversationHistory = [];
let isTyping = false;

// ─── Gamified Quiz State ───
let userPoints = parseInt(localStorage.getItem('pm_quiz_points')) || 0;
let currentQuizIndex = -1;

const quizQuestions = [
    {
        q: "What does health insurance usually cover?",
        options: ["A) Hospitalization", "B) Car repair", "C) Mobile damage"],
        answerIndex: 0,
        explanation: "Health insurance mainly covers hospitalization and medical expenses."
    },
    {
        q: "Why do you pay a premium for insurance?",
        options: ["A) To buy the insurance policy", "B) As a penalty for claims", "C) To invest in mutual funds"],
        answerIndex: 0,
        explanation: "Premium is the amount you pay to the insurance company to keep your policy active."
    },
    {
        q: "Which insurance is mandatory by law in India for vehicles?",
        options: ["A) Comprehensive Motor Insurance", "B) Third-Party Motor Insurance", "C) Health Insurance"],
        answerIndex: 1,
        explanation: "Third-party motor insurance is a legal requirement for all vehicles on Indian roads."
    },
    {
        q: "What is a 'Nominee' in life insurance?",
        options: ["A) The person who pays the premium", "B) The insurance agent", "C) The person who receives the benefit"],
        answerIndex: 2,
        explanation: "A nominee is the designated person who receives the policy payout in case of the policyholder's demise."
    },
    {
        q: "What does a Term Insurance plan provide?",
        options: ["A) Pure life cover with no return on expiry", "B) High returns with low cover", "C) Lifetime pension"],
        answerIndex: 0,
        explanation: "Term insurance provides a high life cover at a low premium, but does not provide maturity returns if you survive the term."
    },
    {
        q: "What is 'No Claim Bonus' (NCB) in motor insurance?",
        options: ["A) A penalty for claiming too late", "B) A discount on premium for not claiming", "C) A free car wash"],
        answerIndex: 1,
        explanation: "NCB is a reward (premium discount) given for every claim-free year."
    },
    {
        q: "Can you change your insurance nominee after buying the policy?",
        options: ["A) Yes, anytime", "B) No, never", "C) Only within the first year"],
        answerIndex: 0,
        explanation: "Yes, you can change your nominee as many times as you like by submitting a form to the insurer."
    },
    {
        q: "Does travel insurance cover lost baggage?",
        options: ["A) Yes", "B) No", "C) Only in your home country"],
        answerIndex: 0,
        explanation: "Yes, comprehensive travel insurance covers lost baggage, medical emergencies, and trip cancellations."
    },
    {
        q: "What is a network hospital?",
        options: ["A) A hospital owned by the insurer", "B) A hospital that offers free internet", "C) A hospital tied up with the insurer for cashless treatment"],
        answerIndex: 2,
        explanation: "Network hospitals allow you to get cashless treatment; the insurer settles the bill directly."
    },
    {
        q: "What does ULIP stand for?",
        options: ["A) Unit Linked Insurance Plan", "B) Universal Life Insurance Policy", "C) Unified Life Investment Plan"],
        answerIndex: 0,
        explanation: "ULIP is a Unit Linked Insurance Plan, which combines life insurance cover with market-linked investments."
    }
];

// ─── DOM References ───
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);



const chatContainer = $('#chat-container');
const welcomeScreen = $('#welcome-screen');
const welcomeSubtitle = $('#welcome-subtitle');
const welcomeCardsEl = $('#welcome-cards');
const quickActionsEl = $('#quick-actions');

const chatInput = $('#chat-input');
const sendBtn = $('#send-btn');
const voiceBtn = $('#voice-btn');
const clearChatBtn = $('#clear-chat-btn');
const homeBtn = $('#home-btn');
const themeToggle = $('#theme-toggle');

const langBtns = $$('.lang-btn');
const modeBtns = $$('.mode-btn');
const modeSlider = $('#mode-slider');

const featureBar = $('#feature-bar');

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('data-mode', currentMode);
    document.documentElement.setAttribute('data-lang', currentLang);
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Initialize points display
    const pointsEl = document.getElementById('user-points');
    if (pointsEl) pointsEl.textContent = userPoints;

    applyThemeIcons();

    applyLanguage(currentLang);
    applyMode(currentMode);
    renderWelcomeCards();
    renderQuickActions();
    setupModeSlider();
    setupEventListeners();
});

// ─── Theme Toggle ───
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('pm_theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    applyThemeIcons();
}

function applyThemeIcons() {
    const sunIcon = $('#theme-icon-sun');
    const moonIcon = $('#theme-icon-moon');
    if (currentTheme === 'dark') {
        sunIcon.style.display = '';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = '';
    }
}

// ─── Language System ───
function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key;
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pm_lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    langBtns.forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });

    // Update all [data-i18n] elements
    $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18n[lang] && i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });

    // Update placeholder
    chatInput.placeholder = t('input_placeholder');

    // Update welcome subtitle
    const subKey = `welcome_subtitle_${currentMode}`;
    welcomeSubtitle.textContent = t(subKey);

    // Re-render cards and quick actions with new language
    renderWelcomeCards();
    renderQuickActions();
}

// ─── Mode Toggle ───
function applyMode(mode) {
    currentMode = mode;
    localStorage.setItem('pm_mode', mode);
    document.documentElement.setAttribute('data-mode', mode);

    modeBtns.forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    setupModeSlider();
    renderWelcomeCards();
    renderQuickActions();

    const subKey = `welcome_subtitle_${mode}`;
    welcomeSubtitle.textContent = t(subKey);
}

function setupModeSlider() {
    const activeBtn = $(`.mode-btn[data-mode="${currentMode}"]`);
    if (activeBtn && modeSlider) {
        modeSlider.style.left = activeBtn.offsetLeft + 'px';
        modeSlider.style.width = activeBtn.offsetWidth + 'px';
    }
}



// ─── Welcome Cards (i18n-aware) ───
function renderWelcomeCards() {
    const defs = welcomeCardDefs[currentMode] || welcomeCardDefs.customer;
    welcomeCardsEl.innerHTML = defs.map(c => `
    <div class="welcome-card" data-query="${t(c.queryKey)}">
      <div class="welcome-card-icon">${c.icon}</div>
      <div class="welcome-card-title">${t(c.titleKey)}</div>
      <div class="welcome-card-desc">${t(c.descKey)}</div>
    </div>
  `).join('');

    welcomeCardsEl.querySelectorAll('.welcome-card').forEach(card => {
        card.addEventListener('click', () => {
            sendMessage(card.dataset.query);
        });
    });
}

// ─── Quick Actions (i18n-aware) ───
function renderQuickActions() {
    const defs = quickActionDefs[currentMode] || quickActionDefs.customer;
    quickActionsEl.innerHTML = defs.map(key => {
        const label = t(key);
        return `<button class="chip" data-query="${label}">${label}</button>`;
    }).join('');

    quickActionsEl.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            sendMessage(chip.dataset.query);
        });
    });
}

// ─── Markdown Parser ───
function parseMarkdown(text) {
    let html = text
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        // Headers
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // HR
        .replace(/^---$/gm, '<hr>')
        // Tables
        .replace(/^\|(.+)\|$/gm, (match) => {
            return match;
        });

    // Process tables
    const lines = html.split('\n');
    let result = [];
    let inTable = false;
    let tableRows = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('|') && line.endsWith('|')) {
            if (!inTable) { inTable = true; tableRows = []; }
            // Skip separator rows
            if (/^\|[\s\-:|]+\|$/.test(line)) continue;
            tableRows.push(line);
        } else {
            if (inTable) {
                result.push(buildTable(tableRows));
                inTable = false;
                tableRows = [];
            }
            result.push(line);
        }
    }
    if (inTable) result.push(buildTable(tableRows));

    html = result.join('\n');

    // Unordered lists
    html = html.replace(/^[\-\*] (.+)$/gm, '<li>$1</li>');
    html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

    // Paragraphs
    html = html.replace(/\n{2,}/g, '</p><p>');
    html = '<p>' + html + '</p>';
    html = html.replace(/<p>\s*<\/p>/g, '');
    html = html.replace(/<p>\s*(<h3>|<ul>|<table|<hr>)/g, '$1');
    html = html.replace(/(<\/h3>|<\/ul>|<\/table>|<hr>)\s*<\/p>/g, '$1');

    return html;
}

function buildTable(rows) {
    if (rows.length === 0) return '';
    const parseRow = (row) => row.split('|').filter(c => c.trim() !== '').map(c => c.trim());
    const headerCells = parseRow(rows[0]);
    let tableHtml = '<table><thead><tr>' + headerCells.map(c => `<th>${c}</th>`).join('') + '</tr></thead><tbody>';
    for (let i = 1; i < rows.length; i++) {
        const cells = parseRow(rows[i]);
        tableHtml += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
    }
    tableHtml += '</tbody></table>';
    return tableHtml;
}

// ─── Chat Engine ───
async function sendMessage(text) {
    const message = text || chatInput.value.trim();
    if (!message || isTyping) return;

    // Hide floating quiz button when any conversation starts
    const fqBtn = document.getElementById('floating-quiz-btn');
    if (fqBtn) fqBtn.classList.add('hidden');

    if (message === "Play Quiz 🎮") {
        if (welcomeScreen) welcomeScreen.style.display = 'none';
        quickActionsEl.innerHTML = '';
        appendMessage('user', message);
        setTimeout(startQuiz, 600);
        return;
    }



    // Hide welcome, show chat
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    quickActionsEl.innerHTML = '';

    // Render user message
    appendMessage('user', message);
    chatInput.value = '';
    sendBtn.disabled = true;

    // Add to history
    conversationHistory.push({ role: 'user', content: message });

    // Show typing
    showTyping();

    try {
        const response = await callGroqAPI(message);
        hideTyping();
        appendMessage('bot', response);
        conversationHistory.push({ role: 'assistant', content: response });
    } catch (err) {
        hideTyping();
        const errMsg = err.message.includes('401') ? 'AI service authentication error. Please contact support.' :
            err.message.includes('429') ? 'Rate limit reached. Please wait a moment and try again.' :
                'Sorry, something went wrong. Please try again.';
        appendMessage('bot', errMsg);
    }
}

async function callGroqAPI(message) {
    // Build language instruction
    const langName = langNames[currentLang] || 'English';
    const langInstruction = currentLang !== 'en'
        ? `\n\nIMPORTANT LANGUAGE INSTRUCTION: You MUST respond ENTIRELY in ${langName}. Every word of your response must be in ${langName}. Do NOT use English at all.`
        : `\n\nRespond in English.`;

    const systemContent = systemPrompts[currentMode] + langInstruction;

    const messages = [
        { role: 'system', content: systemContent },
        ...conversationHistory.slice(-10)
    ];

    const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: messages,
            temperature: 0.7,
            max_tokens: 1024,
            top_p: 1
        })
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    return data.choices[0].message.content;
}

// ─── Message Rendering ───
function appendMessage(role, text) {
    const div = document.createElement('div');
    div.className = `message ${role}`;

    const avatar = role === 'bot' ? '<span class="bot-avatar-letter" style="color:white; font-weight:bold; font-size:16px;">Z</span>' : '👤';
    const bubbleContent = role === 'bot' ? parseMarkdown(text) : escapeHtml(text);

    div.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-content">
      <div class="msg-bubble">${bubbleContent}</div>
      ${role === 'bot' ? extractFollowUpChips(text) : ''}
    </div>
  `;

    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Add follow-up chip click handlers
    div.querySelectorAll('.follow-up-chip').forEach(chip => {
        chip.addEventListener('click', () => sendMessage(chip.textContent.trim()));
    });
}

function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function extractFollowUpChips(text) {
    // Look for follow-up suggestions after --- separator
    const parts = text.split('---');
    if (parts.length < 2) return '';

    const lastPart = parts[parts.length - 1];
    const suggestions = [];
    const lines = lastPart.split('\n');

    for (const line of lines) {
        const match = line.match(/^[\-\*]\s+(.+)$/);
        if (match) {
            const suggestion = match[1].replace(/\*\*/g, '').replace(/\*/g, '').trim();
            if (suggestion.length > 5 && suggestion.length < 100) {
                suggestions.push(suggestion);
            }
        }
    }

    if (suggestions.length === 0) return '';

    return `<div class="follow-up-chips">
    ${suggestions.map(s => `<button class="follow-up-chip">${s}</button>`).join('')}
  </div>`;
}

// ─── Typing Indicator ───
function showTyping() {
    isTyping = true;
    const div = document.createElement('div');
    div.className = 'typing-indicator';
    div.id = 'typing-indicator';
    div.innerHTML = `
    <div class="msg-avatar" style="background: linear-gradient(135deg, #003B7B, #0056B3); font-size: 0; position: relative;"><span style="font-size:15px;font-weight:800;color:white;font-family:Inter,Arial,sans-serif;">Z</span></div>
    <div class="typing-dots"><span></span><span></span><span></span></div>
  `;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function hideTyping() {
    isTyping = false;
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

// ─── Voice Input ───
function setupVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        voiceBtn.addEventListener('click', () => {
            alert(t('voice_unsupported'));
        });
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    let isRecording = false;

    function getLangCode(lang) {
        const map = { en: 'en-IN', hi: 'hi-IN', as: 'as-IN' };
        return map[lang] || 'en-IN';
    }

    voiceBtn.addEventListener('click', () => {
        if (isRecording) {
            recognition.stop();
            return;
        }
        recognition.lang = getLangCode(currentLang);
        recognition.start();
        isRecording = true;
        voiceBtn.classList.add('recording');
    });

    recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        chatInput.value = transcript;
        sendBtn.disabled = !transcript.trim();
        chatInput.focus();
    };

    recognition.onend = () => {
        isRecording = false;
        voiceBtn.classList.remove('recording');
    };

    recognition.onerror = () => {
        isRecording = false;
        voiceBtn.classList.remove('recording');
    };
}

// ─── Clear Chat ───
function clearChat() {
    conversationHistory = [];
    chatContainer.querySelectorAll('.message, .typing-indicator').forEach(el => el.remove());
    if (welcomeScreen) {
        welcomeScreen.style.display = '';
    }
    const fqBtn = document.getElementById('floating-quiz-btn');
    if (fqBtn) fqBtn.classList.remove('hidden');
    renderQuickActions();
}

// ─── Go Home ───
function goHome() {
    conversationHistory = [];
    chatContainer.querySelectorAll('.message, .typing-indicator').forEach(el => el.remove());
    if (welcomeScreen) {
        welcomeScreen.style.display = '';
    }
    const fqBtn = document.getElementById('floating-quiz-btn');
    if (fqBtn) fqBtn.classList.remove('hidden');
    renderQuickActions();
}

// ─── Risk Analyzer ───
const riskData = { age: 0, income: '', vehicle: '', dependents: '', existing: '' };

function setupRiskAnalyzer() {
    const modal = $('#risk-analyzer-modal');
    const closeBtn = $('#risk-modal-close');
    const form = $('#risk-form');
    const results = $('#risk-results');

    // Open
    $('#feat-risk').addEventListener('click', () => {
        modal.classList.remove('hidden');
        resetRiskForm();
    });

    // Close
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

    // Step 1: Age → Next
    const ageNextBtn = form.querySelector('.risk-next-btn[data-next="2"]');
    ageNextBtn.addEventListener('click', () => {
        const age = parseInt($('#risk-age').value);
        if (!age || age < 18 || age > 80) return;
        riskData.age = age;
        goToRiskStep(2);
    });

    // Steps 2-5: Option clicks
    ['risk-income', 'risk-vehicle', 'risk-dependents', 'risk-existing'].forEach((id, idx) => {
        const container = $(`#${id}`);
        const fields = ['income', 'vehicle', 'dependents', 'existing'];
        container.querySelectorAll('.risk-option').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.risk-option').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                riskData[fields[idx]] = btn.dataset.value;

                if (idx < 3) {
                    setTimeout(() => goToRiskStep(idx + 3), 300);
                } else {
                    setTimeout(() => showRiskResults(), 400);
                }
            });
        });
    });

    // Restart
    $('#risk-restart').addEventListener('click', resetRiskForm);
}

function goToRiskStep(step) {
    $$('.risk-step').forEach(s => s.classList.remove('active'));
    const target = $(`.risk-step[data-step="${step}"]`);
    if (target) target.classList.add('active');
}

function resetRiskForm() {
    Object.keys(riskData).forEach(k => riskData[k] = k === 'age' ? 0 : '');
    $$('.risk-step').forEach(s => s.classList.remove('active'));
    $(`.risk-step[data-step="1"]`).classList.add('active');
    $$('.risk-option').forEach(b => b.classList.remove('selected'));
    $('#risk-age').value = '';
    $('#risk-results').classList.add('hidden');
    $('#risk-form').style.display = '';
}

function showRiskResults() {
    let score = 100;
    const gaps = [];
    const recs = [];

    // Age factor
    if (riskData.age > 50) { score -= 10; gaps.push('Higher age increases health risk'); recs.push('Consider Bajaj Health Guard policy with senior citizen benefits'); }
    else if (riskData.age > 35) { score -= 5; }

    // Income factor
    if (riskData.income === 'below-25k') { score -= 15; gaps.push('Limited budget for comprehensive coverage'); recs.push('Start with Bajaj Health Insurance basic plan (₹500/month)'); }
    else if (riskData.income === '25k-50k') { score -= 8; recs.push('Good range for mid-tier Bajaj health + motor combo'); }

    // Vehicle
    if (riskData.vehicle === 'yes' && riskData.existing !== 'motor' && riskData.existing !== 'both') {
        score -= 20; gaps.push('Vehicle owned but no motor insurance'); recs.push('Get Bajaj Motor Insurance — mandatory by law and protects against accident costs');
    }

    // Dependents
    if (riskData.dependents === 'yes' && riskData.existing !== 'health' && riskData.existing !== 'both') {
        score -= 20; gaps.push('Family dependents without health coverage'); recs.push('Bajaj Family Floater Health Insurance covers your entire family');
    }

    // Existing insurance
    if (riskData.existing === 'none') { score -= 25; gaps.push('No existing insurance coverage'); recs.push('Start with Bajaj Health Ensure and add motor/travel as needed'); }
    else if (riskData.existing === 'health') { recs.push('Add Bajaj Travel Insurance for international trips'); }
    else if (riskData.existing === 'motor') { recs.push('Add Bajaj Health Insurance for medical emergencies'); }

    score = Math.max(score, 10);

    // Render
    $('#risk-form').style.display = 'none';
    const resultsEl = $('#risk-results');
    resultsEl.classList.remove('hidden');

    // Animate score ring
    const circumference = 339.292;
    const offset = circumference - (score / 100) * circumference;
    const ringFill = $('#score-ring-fill');
    ringFill.style.stroke = score >= 70 ? '#2ECC71' : score >= 40 ? '#F39C12' : '#E74C3C';
    setTimeout(() => { ringFill.style.strokeDashoffset = offset; }, 100);

    // Animate score number
    const scoreEl = $('#score-value');
    let current = 0;
    const step = Math.max(1, Math.floor(score / 30));
    const counter = setInterval(() => {
        current += step;
        if (current >= score) { current = score; clearInterval(counter); }
        scoreEl.textContent = current;
    }, 40);

    // Risk areas
    const areasEl = $('#risk-areas');
    if (gaps.length > 0) {
        areasEl.innerHTML = `<h4>⚠️ Risk Areas</h4><ul>${gaps.map(g => `<li>${g}</li>`).join('')}</ul>`;
    } else {
        areasEl.innerHTML = '<h4>✅ Good coverage! No major gaps detected.</h4>';
    }

    // Recommendations
    const recsEl = $('#risk-recommendations');
    if (recs.length > 0) {
        recsEl.innerHTML = `<h4>💡 Recommendations</h4><ul>${recs.map(r => `<li>${r}</li>`).join('')}</ul>`;
    } else {
        recsEl.innerHTML = '';
    }
}

// ─── Scenario Simulator ───
function setupScenarioSimulator() {
    const modal = $('#scenario-modal');
    const closeBtn = $('#scenario-modal-close');

    $('#feat-scenario').addEventListener('click', () => modal.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

    const scenarios = {
        accident: "Simulate a road accident scenario: I had a car accident and the repair cost is ₹85,000. Show me the cost breakdown with and without Bajaj Motor Insurance in the scenario format.",
        hospital: "Simulate a hospitalization scenario: I had an emergency appendectomy costing ₹2,50,000. Show me the cost breakdown with and without Bajaj Health Insurance in the scenario format.",
        travel: "Simulate a travel emergency scenario: I had a medical emergency while traveling abroad and the hospital bill was $5,000. Show me the cost breakdown with and without Bajaj Travel Insurance in the scenario format."
    };

    $$('.scenario-card').forEach(card => {
        card.addEventListener('click', () => {
            modal.classList.add('hidden');
            const scenario = card.dataset.scenario;
            sendMessage(scenarios[scenario]);
        });
    });
}

// ─── Myth Buster ───
function setupMythBuster() {
    const modal = $('#myth-modal');
    const closeBtn = $('#myth-modal-close');

    $('#feat-myth').addEventListener('click', () => modal.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

    $$('.myth-card').forEach(card => {
        card.addEventListener('click', () => {
            modal.classList.add('hidden');
            const myth = card.dataset.myth;
            sendMessage(`Bust this insurance myth using the Myth Buster format: "${myth}"`);
        });
    });
}

// ─── Compare Insurance ───
function setupCompareInsurance() {
    $('#feat-compare').addEventListener('click', () => {
        sendMessage("Compare the major Bajaj General Insurance types (Motor, Health, Travel, Home) side by side in a detailed markdown table. Include coverage, premium range, key benefits, and who it's best for.");
    });
}

// ─── Quiz Engine ───
function startQuiz() {
    currentQuizIndex = 0;
    // Shuffle questions so each game feels fresh
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    startQuiz._questions = shuffled;
    showQuizQuestion(shuffled[currentQuizIndex]);
}

function showQuizQuestion(q) {
    const total = startQuiz._questions.length;
    const num = currentQuizIndex + 1;

    const div = document.createElement('div');
    div.className = 'message bot quiz-message';
    div.id = 'quiz-card-' + currentQuizIndex;

    div.innerHTML = `
    <div class="msg-avatar"><span class="bot-avatar-letter" style="color:white;font-weight:bold;font-size:16px;">Z</span></div>
    <div class="msg-content">
      <div class="msg-bubble quiz-bubble">
        <div class="quiz-header">
          <span class="quiz-badge">🎮 Quiz</span>
          <span class="quiz-progress">Question ${num} / ${total}</span>
        </div>
        <div class="quiz-question">${q.q}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option-btn" data-index="${i}">${opt}</button>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="quiz-feedback-${currentQuizIndex}" style="display:none;"></div>
      </div>
    </div>
  `;

    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Attach click handlers
    div.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => handleQuizAnswer(btn, q, parseInt(btn.dataset.index)));
    });
}

function handleQuizAnswer(clickedBtn, q, selectedIndex) {
    const cardEl = document.getElementById('quiz-card-' + currentQuizIndex);
    if (!cardEl) return;

    // Disable all option buttons
    cardEl.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);

    const isCorrect = selectedIndex === q.answerIndex;
    const feedbackEl = document.getElementById('quiz-feedback-' + currentQuizIndex);

    // Highlight correct / wrong
    clickedBtn.classList.add(isCorrect ? 'quiz-correct' : 'quiz-wrong');
    cardEl.querySelectorAll('.quiz-option-btn')[q.answerIndex].classList.add('quiz-correct');

    // Show explanation
    feedbackEl.style.display = '';
    feedbackEl.innerHTML = `
      <div class="quiz-explanation ${isCorrect ? 'correct' : 'wrong'}">
        ${isCorrect ? '✅ Correct! +10 points' : '❌ Incorrect'}
        <p>${q.explanation}</p>
      </div>
    `;

    if (isCorrect) {
        userPoints += 10;
        localStorage.setItem('pm_quiz_points', userPoints); // Save points
        const pointsEl = document.getElementById('user-points');
        if (pointsEl) pointsEl.textContent = userPoints;
    }

    // Move to next question after a short delay
    currentQuizIndex++;
    const questions = startQuiz._questions;

    setTimeout(() => {
        if (currentQuizIndex < questions.length) {
            showQuizQuestion(questions[currentQuizIndex]);
        } else {
            showQuizResults(questions.length);
        }
    }, 1800);
}

function showQuizResults(total) {
    const maxPoints = total * 10;
    const percentage = Math.round((userPoints / maxPoints) * 100);
    let emoji = percentage >= 80 ? '🏆' : percentage >= 50 ? '🎉' : '💪';
    let msg = percentage >= 80 ? 'Insurance Expert!' : percentage >= 50 ? 'Good effort — keep learning!' : "Don't give up — try again!";

    const div = document.createElement('div');
    div.className = 'message bot';
    div.innerHTML = `
    <div class="msg-avatar"><span class="bot-avatar-letter" style="color:white;font-weight:bold;font-size:16px;">Z</span></div>
    <div class="msg-content">
      <div class="msg-bubble quiz-results-bubble">
        <div style="text-align:center;">
          <div style="font-size:2.5rem;">${emoji}</div>
          <h3 style="margin:8px 0 4px;">Quiz Complete!</h3>
          <p style="margin:0 0 8px;">${msg}</p>
          <div class="quiz-final-score">🏆 Total Points: <strong>${userPoints}</strong></div>
          <button class="quiz-play-again-btn" id="quiz-play-again">Play Again 🔄</button>
        </div>
      </div>
    </div>
  `;

    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    document.getElementById('quiz-play-again').addEventListener('click', () => {
        currentQuizIndex = 0;
        startQuiz();
    });
}

// ─── Event Listeners ───
function setupEventListeners() {


    // Send
    sendBtn.addEventListener('click', () => sendMessage());
    chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
    chatInput.addEventListener('input', () => { sendBtn.disabled = !chatInput.value.trim(); });

    // Language
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    // Mode
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => applyMode(btn.dataset.mode));
    });

    // Theme
    themeToggle.addEventListener('click', toggleTheme);

    // Clear
    clearChatBtn.addEventListener('click', clearChat);
    homeBtn.addEventListener('click', goHome);

    // Voice
    setupVoiceInput();

    // Floating Quiz Button
    const floatingQuizBtn = document.getElementById('floating-quiz-btn');
    if (floatingQuizBtn) {
        floatingQuizBtn.addEventListener('click', () => sendMessage('Play Quiz 🎮'));
    }

    // Features
    setupRiskAnalyzer();
    setupScenarioSimulator();
    setupMythBuster();
    setupCompareInsurance();
}

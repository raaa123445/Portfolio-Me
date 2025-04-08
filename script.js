document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('darkMode', null);
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Language Switching
    const translations = {
        km: {
            'lang-home': 'ទំព័រដើម',
            'lang-about': 'អំពីខ្ញុំ',
            'lang-skills': 'ជំនាញ',
            'lang-projects': 'គម្រោង',
            'lang-contact': 'ទំនាក់ទំនង',
            'lang-greeting': 'សួស្តី ខ្ញុំឈ្មោះ ចាន់ដារ៉ា',
            'lang-intro': 'អ្នកអភិវឌ្ឍន៍ និង រចនាគេហទំព័រ',
            'lang-cv': 'ទាញយក CV',
            'lang-social-follow': 'តាមដានខ្ញុំនៅលើ:',
            'lang-social-facebook': 'ហ្វេសប៊ុក',
            'lang-social-instagram': 'អ៊ីនស្តាក្រាម',
            'lang-social-telegram': 'តេលេក្រាម',
            'lang-social-github': 'ហ្គីតហាប',
            'lang-about-title': 'អំពីខ្ញុំ',
            'lang-about-text': 'ខ្ញុំជានិស្សិតឆ្នាំទី៤ ផ្នែកបច្ចេកវិទ្យាព័ត៌មានវិទ្យា ដែលមានបទពិសោធន៍ច្បាស់លាសឋក្នុងការអភិវឌ្ឍន៍គេហទំព័រទាំងផ្នែកខាងមុខ និងខាងក្រោយ។ ខ្ញុំបានធ្វើការជាមួយបច្ចេកវិទ្យាដូចជា HTML, CSS, jQuery, PHP, MySQL, Laravel, Python និងឧបករណ៍បណ្តាញ Cisco។',
            'lang-about-text-2': 'ខ្ញុំបានបង្កើតគម្រោងផ្សេងៗជាច្រើនទាំងផ្នែកសិក្សា និងផ្ទាល់ខ្លួន រួមទាំងប្រព័ន្ធគ្រប់គ្រង EDC (Laravel) ដែលមានមុខងារផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់ ការគ្រប់គ្រងការបង្ហោះ និងការធ្វើបច្ចុប្បន្នភាពទម្រង់។ ជំនាញរបស់ខ្ញុំរួមមានការរចនាអន្តរមុខឆ្លើយតប ការបង្កើតកម្មវិធីគេហទំព័រអន្តរកម្ម ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ និងការបង្កើតតក្កវិជ្ជាខាងម៉ាស៊ីនមេដ៏រឹងមាំ។',
            'lang-about-text-3': 'ខ្ញុំមានចំណង់ចំណូលចិត្តខ្លាំងក្នុងការអភិវឌ្ឍគេហទំព័រ ហើយខ្ញុំមានភាពរួសរាយក្នុងការចូលរួមជាមួយក្រុមការងារនៅសាប៉ូល ហើយចង់ចូលរួមចំណែកក្នុងការអភិវឌ្ឍស្ថាប័ន និងរៀនបន្ថែមពីអ្នកជំនាញ។',
            'lang-skills-title': 'ជំនាញរបស់ខ្ញុំ',
            'lang-projects-title': 'គម្រោងរបស់ខ្ញុំ',
            'lang-project1-title': 'ប្រព័ន្ធធនាគារ',
            'lang-project1-desc': 'ប្រព័ន្ធធនាគារដែលបង្កើតឡើងដោយប្រើប្រាស់ C និង C++, មានមុខងារគ្រប់គ្រងគណនី និងដំណើរការប្រតិបត្តិការ។',
            'lang-project2-title': 'ប្រព័ន្ធលក់រថយន្ត',
            'lang-project2-desc': 'ប្រព័ន្ធលក់សម្រាប់ក្រុមហ៊ុនលក់រថយន្តដែលបង្កើតឡើងដោយប្រើ PHP Laravel។',
            'lang-project3-title': 'ប្រព័ន្ធគ្រប់គ្រងហាង',
            'lang-project3-desc': 'កម្មវិធីគ្រប់គ្រងហាងដែលបង្កើតឡើងដោយប្រើ Python ជាមួយមូលដ្ឋានទិន្នន័យ។',
            'lang-project4-title': 'គេហទំព័រសាលា',
            'lang-project4-desc': 'គេហទំព័រសាលាទំនើបដែលបង្កើតឡើងដោយប្រើ React.js។',
            'lang-project5-title': 'ម៉ាស៊ីនគិតលេខ',
            'lang-project5-desc': 'កម្មវិធីគណនាដែលបង្កើតឡើងដោយប្រើ jQuery។',
            'lang-project6-title': 'ប្រព័ន្ធគ្រប់គ្រងស្តុក',
            'lang-project6-desc': 'ប្រព័ន្ធគ្រប់គ្រងស្តុកពេញលេញជាមួយនឹងការតាមដានការថែទាំ។',
            'lang-project7-title': 'ប្រព័ន្ធគ្រប់គ្រងអគ្គិសនីកម្ពុជា',
            'lang-project7-desc': 'ប្រព័ន្ធគ្រប់គ្រងសម្រាប់អគ្គិសនីកម្ពុជាដែលបង្កើតឡើងដោយប្រើ Laravel។',
            'lang-contact-title': 'ទំនាក់ទំនង',
            'lang-contact-facebook': 'ហ្វេសប៊ុក',
            'lang-contact-instagram': 'អ៊ីនស្តាក្រាម',
            'lang-contact-telegram': 'តេលេក្រាម',
            'lang-contact-github': 'ហ្គីតហាប',
            'lang-contact-email': 'អ៊ីមែល',
            'lang-contact-phone': 'ទូរស័ព្ទ',
            'lang-contact-location': 'ទីតាំង',
            'lang-footer': '© ២០២៥ ចាន់ដារ៉ា។ រក្សាសិទ្ធិគ្រប់យ៉ាង។'
        },
        en: {
            'lang-home': 'Home',
            'lang-about': 'About',
            'lang-skills': 'Skills',
            'lang-projects': 'Projects',
            'lang-contact': 'Contact',
            'lang-greeting': 'Hi, I\'m Chandara',
            'lang-intro': 'Web Developer & Designer',
            'lang-cv': 'Download CV',
            'lang-social-follow': 'Follow me on:',
            'lang-social-facebook': 'Facebook',
            'lang-social-instagram': 'Instagram',
            'lang-social-telegram': 'Telegram',
            'lang-social-github': 'GitHub',
            'lang-about-title': 'About Me',
            'lang-about-text': 'I am a fourth-year Information Technology student with strong hands-on experience in both front-end and back-end web development. I have worked with technologies such as HTML, CSS, jQuery, PHP, MySQL, Laravel, Python, and Cisco networking tools.',
            'lang-about-text-2': 'I have built various academic and personal projects, including a notable EDC Management System (Laravel) that features user authentication, post management, and profile updates. My skills include designing responsive interfaces, building interactive web apps, managing databases, and creating robust server-side logic.',
            'lang-about-text-3': 'I am passionate about web development and eager to contribute to Saint Paul Institute\'s team while gaining professional experience through this internship opportunity.',
            'lang-skills-title': 'My Skills',
            'lang-projects-title': 'My Projects',
            'lang-project1-title': 'Banking System',
            'lang-project1-desc': 'A comprehensive banking system implemented using C and C++, featuring account management and transaction processing.',
            'lang-project2-title': 'Car System POS',
            'lang-project2-desc': 'Point of Sale system for car dealerships built with PHP Laravel framework.',
            'lang-project3-title': 'Mart Management System',
            'lang-project3-desc': 'A GUI-based mart management application developed using Python with database integration.',
            'lang-project4-title': 'School Website',
            'lang-project4-desc': 'Modern school website frontend developed using React.js.',
            'lang-project5-title': 'Calculator',
            'lang-project5-desc': 'Interactive calculator application built using jQuery.',
            'lang-project6-title': 'Stock Management System',
            'lang-project6-desc': 'Comprehensive stock management system with maintenance tracking.',
            'lang-project7-title': 'EDC Management System',
            'lang-project7-desc': 'Management system for Electricite du Cambodge built with Laravel.',
            'lang-contact-title': 'Contact Me',
            'lang-contact-facebook': 'Facebook',
            'lang-contact-instagram': 'Instagram',
            'lang-contact-telegram': 'Telegram',
            'lang-contact-github': 'GitHub',
            'lang-contact-email': 'Email',
            'lang-contact-phone': 'Phone',
            'lang-contact-location': 'Location',
            'lang-footer': '© 2025 Chandara. All rights reserved.'
        }
    };

    const languageSelect = document.getElementById('languageSelect');
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        updateLanguage(savedLanguage);
    }
    
    languageSelect.addEventListener('change', (e) => {
        const language = e.target.value;
        updateLanguage(language);
        localStorage.setItem('language', language);
    });

    function updateLanguage(language) {
        const elements = document.querySelectorAll('[class*="lang-"]');
        elements.forEach(element => {
            const classes = Array.from(element.classList);
            const langClass = classes.find(className => className.startsWith('lang-'));
            if (langClass && translations[language][langClass]) {
                element.textContent = translations[language][langClass];
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
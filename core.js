// document.addEventListener('DOMContentLoaded', function () {
            
//             // Mobile menu open/close
//             const mobileBtn = document.getElementById('mobile-menu-button');
//             const mobileNav = document.getElementById('navbar-collapse-with-animation');
//             const closeBtn = document.getElementById('close-mobile-menu');

//             mobileBtn.addEventListener('click', () => {
//                 mobileNav.classList.toggle('hidden');
//             });
//             closeBtn.addEventListener('click', () => {
//                 mobileNav.classList.add('hidden');
//             });

//             // Smooth scrolling + auto-close on mobile
//             document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//                 anchor.addEventListener('click', function (e) {
//                     e.preventDefault();
//                     const target = document.querySelector(this.getAttribute('href'));
//                     if (target) {
//                         target.scrollIntoView({ behavior: 'smooth' });
//                     }
//                     if (!mobileNav.classList.contains('hidden')) {
//                         mobileNav.classList.add('hidden');
//                     }
//                 });
//             });
//         });
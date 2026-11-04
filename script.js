const card = document.getElementById('idCard');
const flipHint = document.getElementById('flipHint');
function flipCard(){ card.classList.toggle('flipped'); }
card.addEventListener('click', flipCard);
card.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); flipCard(); }});
flipHint.addEventListener('click', flipCard);

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, {rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section => sectionObserver.observe(section));


// Open uploaded project screenshots in a larger accessible viewer.
const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const viewerCaption = document.getElementById('viewerCaption');
document.querySelectorAll('.project-shot').forEach(shot => {
  shot.addEventListener('click', () => {
    viewerImage.src = shot.dataset.image;
    viewerImage.alt = shot.querySelector('img')?.alt || 'Project screenshot';
    viewerCaption.textContent = shot.dataset.caption || '';
    imageViewer.showModal();
  });
});
imageViewer.addEventListener('click', event => {
  if(event.target === imageViewer) imageViewer.close();
});


// Click any project preview to view the uploaded screenshot at a larger size.
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-lightbox]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    lightboxImage.src = link.getAttribute('href');
    lightboxImage.alt = link.querySelector('img')?.alt || link.dataset.lightbox;
    lightboxCaption.textContent = link.dataset.lightbox;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  });
});
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if(event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });

// Minimal site-wide helpers
const toastEl = document.getElementById('toast');

function toast(msg){
  if(!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(()=>toastEl.classList.remove('show'), 1800);
}
window.toast = toast;

// Mobile navigation toggle
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

if(menuBtn && mainNav){
  menuBtn.addEventListener('click', ()=>{
    const open = mainNav.classList.toggle('navOpen');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  // Close on outside click
  document.addEventListener('click', (e)=>{
    if(!menuBtn.contains(e.target) && !mainNav.contains(e.target)){
      mainNav.classList.remove('navOpen');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && mainNav.classList.contains('navOpen')){
      mainNav.classList.remove('navOpen');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
      menuBtn.focus();
    }
  });
}

const articleSearch=document.querySelector('[data-article-search]'),articleCategory=document.querySelector('[data-article-category]'),articleCards=[...document.querySelectorAll('[data-article-card]')],articleStatus=document.querySelector('[data-article-status]');function filterArticles(){if(!articleCards.length)return;const q=(articleSearch?.value||'').trim().toLowerCase(),cat=articleCategory?.value||'';let n=0;articleCards.forEach(c=>{const show=(!q||c.textContent.toLowerCase().includes(q))&&(!cat||c.dataset.category===cat);c.hidden=!show;if(show)n++});if(articleStatus)articleStatus.textContent=n+(n===1?' article':' articles')}articleSearch?.addEventListener('input',filterArticles);articleCategory?.addEventListener('change',filterArticles);filterArticles();

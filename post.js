// post page: read slug from query param ?p=..., load metadata + content fragment, build TOC + related
const contentEl = document.getElementById('postContent');
const catEl = document.getElementById('postCat');
const dateEl = document.getElementById('postDate');
const readEl = document.getElementById('postRead');
const tocListEl = document.getElementById('tocList');
const relatedEl = document.getElementById('relatedCards');

function getSlug(){
  const u = new URL(window.location.href);
  return u.searchParams.get('p');
}
function esc(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function setTitle(t){
  document.title = t ? `${t} • AI for QA` : 'Article • AI for QA';
}

function buildTOC(root){
  if(!tocListEl || !root) return;
  const hs = [...root.querySelectorAll('h2')];
  if(hs.length === 0){
    tocListEl.innerHTML = '<div style="color:rgba(11,16,32,.55)">No sections yet.</div>';
    return;
  }
  tocListEl.innerHTML = hs.map(h=>{
    if(!h.id){
      h.id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
    }
    return `<a href="#${esc(h.id)}">${esc(h.textContent)}</a>`;
  }).join('');
}

function card(p){
  const url = `post.html?p=${encodeURIComponent(p.slug)}`;
  return `
    <a class="card" href="${url}">
      <div class="cardMeta">
        <span class="badge2"><span class="bDot" aria-hidden="true"></span>${esc(p.category)}</span>
        <span>${esc(p.readingTime || '')}</span>
      </div>
      <div class="cardTitle2">${esc(p.title)}</div>
      <p>${esc(p.summary || '')}</p>
      <div class="cardMeta"><span class="link">Open</span></div>
    </a>
  `;
}

async function init(){
  const slug = getSlug();
  if(!slug){
    contentEl && (contentEl.innerHTML = `<div class="notice"><div class="noticeDot"></div><div><strong>Missing article.</strong> Open from the Best‑Of list.</div></div>`);
    return;
  }

  // load metadata
  const res = await fetch('data/posts.json', {cache:'no-store'});
  const posts = await res.json();
  const post = posts.find(p => p.slug === slug);

  if(!post){
    contentEl && (contentEl.innerHTML = `<div class="notice"><div class="noticeDot"></div><div><strong>Not found.</strong> That slug doesn't exist in posts.json.</div></div>`);
    return;
  }

  setTitle(post.title);
  if(catEl) catEl.textContent = post.category;
  if(dateEl) dateEl.textContent = post.date || '';
  if(readEl) readEl.textContent = post.readingTime || '';

  // load content fragment
  try{
    const c = await fetch(`content/${encodeURIComponent(slug)}.html`, {cache:'no-store'});
    const html = await c.text();
    if(contentEl) contentEl.innerHTML = html;
  }catch(err){
    console.error(err);
    if(contentEl) contentEl.innerHTML = `<div class="notice"><div class="noticeDot"></div><div><strong>Error:</strong> couldn't load content/${esc(slug)}.html</div></div>`;
  }

  // TOC
  buildTOC(contentEl);

  // Related: same category, else random
  const same = posts.filter(p=>p.slug!==slug && p.category===post.category);
  const pool = same.length ? same : posts.filter(p=>p.slug!==slug);
  const related = pool.slice(0, 6);
  if(relatedEl) relatedEl.innerHTML = related.map(card).join('');
}
init();

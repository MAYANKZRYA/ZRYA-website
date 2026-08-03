/* ============ DATA ============ */
const SP = "https://open.spotify.com/artist/3rXwnEWqZbpPVPL1mAKot7";

/* ART — ZRYA's discography (Spotify verified). cover -> art/<slug>.jpg */
const ART = [
  {t:"Paheli", slug:"paheli", year:"2026", credit:"Album", link:SP},
  {t:"Mai Qala", slug:"mai-qala", year:"2026", credit:"EP", link:SP},
  {t:"Gehna", slug:"gehna", year:"2026", credit:"Album", link:SP},
  {t:"Jaayaz", slug:"jaayaz", year:"2026", credit:"Album", link:SP},
  {t:"Udd Jaa", slug:"udd-jaa", year:"2026", credit:"Single", link:SP},
  {t:"Cutputli", slug:"cutputli", year:"2025", credit:"w/ Prabhanjan, DOST", desc:"Earthy percussion collapsing into distortion", id:"EJUGO6xq7aM"},
  {t:"Rakhna Jo Chaha", slug:"rakhna-jo-chaha", year:"2025", credit:"w/ Riya Goley", desc:"What we meant to keep", link:"https://open.spotify.com/track/5Yulju6u1GgrKIUgRjJCl1"},
  {t:"Panaah", slug:"panaah", year:"2025", credit:"Single", link:SP},
  {t:"Take Me Back Home", slug:"take-me-back-home", year:"2025", credit:"w/ DOST", desc:"A homeward ache, rendered in electronic haze", link:"https://open.spotify.com/track/5kttGIFqZPBFDqM7ph8Rik"},
  {t:"Boonden", slug:"boonden", year:"2024", credit:"w/ Varun Dagar", desc:"A slow unraveling", id:"qrj16aKZuMA"},
  {t:"Kyun Soya Jaye Na", slug:"kyun-soya-jaye-na", year:"2023", credit:"Prabhanjan × Riya Goley", desc:"Restless, half-awake", id:"2EK1IBIRiKE"},
];

/* WORK — commercial showreel (uses YouTube thumbnails as carousel imagery) */
const WORK = [
  {t:"The Great Indian Family", desc:"Music Producer, BGM", year:"2023", credit:"YRF", id:"jxRgnlvep94"},
  {t:"An Action Hero — Ghere", desc:"Music Production, Song", year:"2022", credit:"T-Series", id:"sEv3c58b3KQ"},
  {t:"An Action Hero — Asli Action Chaalu", desc:"Theme Song", year:"2022", credit:"T-Series", id:"54KHR3Dx-P4"},
  {t:"Looop Lapeta — Beqaraar", desc:"Music Production, Song", year:"2022", credit:"Zee Music", id:"sLK07viMibY"},
  {t:"Ghar Waapsi — Shama", desc:"Song · Hotstar Specials", year:"2023", credit:"Sony Music", id:"JRORviry-yI"},
  {t:"Suraj Pe Mangal Bhari", desc:"Audio Engineer & Producer, BGM", year:"2020", credit:"Zee Studios", id:"hs2MPHRkP9A"},
  {t:"The Zoya Factor", desc:"Music Producer, BGM", year:"2019", credit:"Star Studios", id:"tz9TN7ixPW0"},
  {t:"Bhram", desc:"Music Producer, BGM", year:"2019", credit:"ZEE5", id:"zhavQiEIvUc"},
  {t:"vivo — Joy of Homecoming", desc:"Diwali brand film", year:"2023", credit:"vivo India", id:"ZKH2NYhihQA"},
  {t:"Vicks Anthem — D'Cut", desc:"Ad jingle", year:"2023", credit:"Vicks", id:"5-w2gXS1NKA"},
  {t:"Volkswagen Taigun — Cityscapes", desc:"Ad audio production", year:"2021", credit:"Volkswagen India", id:"RZFn8Du213w"},
  {t:"Tanishq — Love Anthem", desc:"When It Rings True", year:"2023", credit:"Tanishq", id:"3xtoWn15Zt0"},
  {t:"Malabar Gold — Brides of India", desc:"ft. Alia Bhatt & Anil Kapoor", year:"2023", credit:"Malabar Gold", id:"G4o-Y01r-bY"},
  {t:"boAt — 50 Hour Music Challenge", desc:"IFP 2022 · Kati Patang", year:"2022", credit:"boAt", id:"EQvJBkaw01M"},
  {t:"Capri Loans — Farz Nibhaatey Hain", desc:"MSME campaign", year:"2023", credit:"Capri Loans", id:"ipjwbMr4Ab0"},
  {t:"JDU Campaign Song", desc:"Lok Sabha 2024", year:"2024", credit:"Janata Dal (United)", id:"g7wygLZEeUI"},
  {t:"Ishara Brand Anthem", desc:"Channel anthem", year:"2020", credit:"EPIC", id:"sJg-TMomfZM"},
  {t:"Ranjha — Kiara & Sidharth", desc:"Wedding film score", year:"2022", credit:"The Wedding Filmer", id:"tyBJioe8gOs"},
  {t:"Waheguru — Deepika & Ranveer", desc:"Wedding film score", year:"2023", credit:"The Wedding Filmer", id:"F4dzcwT4h20"},
  {t:"Tu Mila — TWF Originals", desc:"Original song", year:"2024", credit:"The Wedding Filmer", id:"G_ny4r9-WQs"},
  {t:"Lakh Shukrane — Mahek & Jay", desc:"Wedding film score", year:"2024", credit:"The Wedding Filmer", id:"9iLYCwrv6eU"},
  {t:"Guncha Koi", desc:"Contemporary cover", year:"2020", credit:"Umber Jafri", id:"-peiuSBwmKA"},
];

const YT = id => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&playsinline=1&rel=0`;
const WATCH = id => `https://www.youtube.com/watch?v=${id}`;
const esc = s => String(s).replace(/"/g,'&quot;');

/* ============ SHARED CHROME (injected on every page) ============ */
function injectChrome(){
  const page = document.body.dataset.page || 'home';
  const A = c => `class="navlink${page===c?' active':''}"`;
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="atmos"></div>
    <div id="loader"><div class="lbox"><img class="llogo" src="logo.png" alt="ZRYA"><div class="lp"><span id="lpn">Loading 0%</span></div></div></div>
    <nav>
      <div class="grp">
        <a ${A('art')} href="art.html">Art</a>
        <a ${A('work')} href="work.html">Work</a>
      </div>
      <a class="mark" href="index.html"><img class="navlogo" src="logo.png" alt="ZRYA"></a>
      <div class="grp">
        <button class="navlink" data-drawer="about">About</button>
        <button class="navlink" data-drawer="contact">Contact</button>
      </div>
    </nav>`);
  document.body.insertAdjacentHTML('beforeend', `
    <div class="drawer" id="drawer-about">
      <button class="dclose" data-close>Close</button>
      <div class="dwrap">
        <div class="eyebrow">About</div>
        <div class="about-grid">
          <div>
            <p class="big">ZRYA is the recording name of <em>Mayank Choudhary</em> — founder of TheM, a music and MusicTech studio in Delhi.</p>
            <p class="small">Composer and producer for film, OTT, and independent artists since 2018. Trained at Berklee College of Music, Boston. He isn't trying to explain the work — he wants you to feel disoriented, then found.</p>
            <div class="worked"><b>Worked with</b>Yash Raj Films · T-Series · Zee Studios · ZEE5 · MX Player · Hotstar Originals · TVF · Sony Music · Star Studios · Vivo · Volkswagen · Tanishq · Malabar Gold · boAt</div>
          </div>
          <div class="portrait"><div class="ph">portrait / texture</div><img alt="ZRYA" data-src="ZRYA.jpg"></div>
        </div>
      </div>
    </div>
    <div class="drawer" id="drawer-contact">
      <button class="dclose" data-close>Close</button>
      <div class="dwrap contact-inner">
        <div class="eyebrow">Contact</div>
        <h2>Reach <em>out.</em></h2>
        <p class="lead">For scores, collaboration, or the studio.</p>
        <div class="clinks">
          <a class="clink" href="mailto:mayank.does@gmail.com">Email<span class="arr">mayank.does@gmail.com</span></a>
          <a class="clink" href="${SP}" target="_blank" rel="noopener">Spotify<span class="arr">Listen →</span></a>
          <a class="clink" href="https://www.youtube.com/@Zrya" target="_blank" rel="noopener">YouTube<span class="arr">Watch →</span></a>
          <a class="clink" href="https://music.apple.com/us/artist/mayank-choudhary/1609747609" target="_blank" rel="noopener">Apple Music<span class="arr">Listen →</span></a>
        </div>
      </div>
    </div>
    <div class="preview" id="preview"></div>`);
}

/* ============ RENDERERS ============ */
function frame(a, wide){
  const href = a.id ? WATCH(a.id) : (a.link||'#');
  const src = wide ? `https://i.ytimg.com/vi/${a.id}/maxresdefault.jpg` : `art/${a.slug}.jpg`;
  const err = wide ? ` onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${a.id}/hqdefault.jpg'"` : '';
  return `<a class="sframe${wide?' wide':''}" href="${href}" target="_blank" rel="noopener"${a.id?` data-id="${a.id}"`:''}>
    <div class="init">${a.t[0]}</div>
    <img alt="${esc(a.t)}" data-src="${src}"${err}>
  </a>`;
}
function renderCarousel(list, sel, wide){
  document.querySelector(sel).innerHTML = list.map(a=>
    `<div class="hslide">
      <h3 class="stitle">${a.t}</h3>
      ${frame(a, wide)}
      <div class="scap">${a.year} · ${a.credit}</div>
      <div class="splay">${a.id?'Hover to play · click to watch':'Listen on Spotify'}</div>
    </div>`).join('');
}
function renderList(list, sel){
  document.querySelector(sel).innerHTML = list.map(r=>{
    const href = r.id ? WATCH(r.id) : (r.link||'#');
    return `<a class="row" href="${href}" target="_blank" rel="noopener"${r.id?` data-id="${r.id}"`:''}>
      <div><div class="rt">${r.t}</div>${r.desc?`<div class="rd">${r.desc}</div>`:''}</div>
      <div class="rmeta"><span class="yr">${r.year}</span><br>${r.credit}</div>
    </a>`;
  }).join('');
}

/* ============ WIRING ============ */
function lazyImages(){
  document.querySelectorAll('img[data-src]').forEach(img=>{
    img.src = img.dataset.src;
    img.onload = ()=>img.classList.add('loaded');
  });
}
function wireFloatingPreview(){
  const pv = document.getElementById('preview'); let curId=null;
  const move = e => { const w=pv.offsetWidth; let x=e.clientX+34; if(x+w>innerWidth-20)x=e.clientX-w-34; pv.style.left=x+'px'; pv.style.top=e.clientY+'px'; };
  document.querySelectorAll('.row[data-id]').forEach(row=>{
    const id=row.dataset.id;
    row.addEventListener('mouseenter',e=>{if(curId!==id){curId=id;pv.innerHTML=`<iframe src="${YT(id)}" allow="autoplay" allowfullscreen></iframe>`;}pv.classList.add('show');move(e);});
    row.addEventListener('mousemove',move);
    row.addEventListener('mouseleave',()=>pv.classList.remove('show'));
  });
}
function wireInlinePlay(){
  document.querySelectorAll('.sframe[data-id]').forEach(f=>{
    const id=f.dataset.id; let frame=null;
    f.addEventListener('mouseenter',()=>{if(!frame){frame=document.createElement('iframe');frame.allow='autoplay';frame.src=YT(id);f.appendChild(frame);}});
    f.addEventListener('mouseleave',()=>{if(frame){frame.remove();frame=null;}});
  });
}
function wireCarousel(){
  const car = document.querySelector('.hcar');
  if(!car) return;
  const wrap = car.closest('.carwrap');
  const nextBtn = wrap.querySelector('.next'), prevBtn = wrap.querySelector('.prev');
  const cur = wrap.querySelector('.pcur'), tot = wrap.querySelector('.ptot');
  const n = car.children.length; if(tot) tot.textContent = String(n).padStart(2,'0');
  const go = d => car.scrollBy({left:d*car.clientWidth, behavior:'smooth'});
  nextBtn && (nextBtn.onclick = ()=>go(1));
  prevBtn && (prevBtn.onclick = ()=>go(-1));
  /* update index */
  car.addEventListener('scroll', ()=>{ if(cur) cur.textContent = String(Math.round(car.scrollLeft/car.clientWidth)+1).padStart(2,'0'); }, {passive:true});
  /* wheel -> horizontal, but release to page scroll at the ends */
  car.addEventListener('wheel', e=>{
    const d = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    const atStart = car.scrollLeft <= 1, atEnd = car.scrollLeft + car.clientWidth >= car.scrollWidth - 1;
    if((d>0 && !atEnd) || (d<0 && !atStart)){ e.preventDefault(); car.scrollLeft += d; }
  }, {passive:false});
  /* drag / swipe */
  let down=false, sx=0, sl=0, moved=0;
  car.addEventListener('pointerdown', e=>{down=true;moved=0;sx=e.clientX;sl=car.scrollLeft;car.classList.add('drag');car.setPointerCapture(e.pointerId);});
  car.addEventListener('pointermove', e=>{if(!down)return;const dx=e.clientX-sx;moved+=Math.abs(dx);car.scrollLeft=sl-dx;});
  const end=()=>{down=false;car.classList.remove('drag');};
  car.addEventListener('pointerup',end); car.addEventListener('pointercancel',end);
  car.addEventListener('click', e=>{ if(moved>8) e.preventDefault(); }, true);
}
function wireDrawers(){
  const lock = v => document.body.style.overflow = v?'hidden':'';
  document.querySelectorAll('[data-drawer]').forEach(b=>b.onclick=()=>{document.getElementById('drawer-'+b.dataset.drawer).classList.add('open');lock(true);});
  const close=()=>{document.querySelectorAll('.drawer').forEach(d=>d.classList.remove('open'));lock(false);};
  document.querySelectorAll('[data-close]').forEach(b=>b.onclick=close);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
function wireReveal(){
  const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}}),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(n=>io.observe(n));
}
function wireLoader(){
  const n=document.getElementById('lpn'), L=document.getElementById('loader');
  let v=0; const t=setInterval(()=>{v+=Math.ceil((100-v)/6)+1;if(v>=100){v=100;clearInterval(t);setTimeout(()=>L.classList.add('done'),320);}n.textContent='Loading '+v+'%';},95);
}

/* ============ BOOT ============ */
document.addEventListener('DOMContentLoaded', ()=>{
  injectChrome();
  const page = document.body.dataset.page || 'home';
  if(page==='art'){ renderCarousel(ART,'#car',false); renderList(ART,'#list'); }
  if(page==='work'){ renderCarousel(WORK,'#car',true); renderList(WORK,'#list'); }
  lazyImages(); wireInlinePlay(); wireFloatingPreview(); wireCarousel();
  wireDrawers(); wireReveal(); wireLoader();
});

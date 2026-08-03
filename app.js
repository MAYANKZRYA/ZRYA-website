/* ============ DATA ============ */
const SP = "https://open.spotify.com/artist/3rXwnEWqZbpPVPL1mAKot7";

/* ART — ZRYA's discography (Spotify verified). cover -> art/<slug>.jpg
   link = the specific song/release. id (where present) = YouTube for inline hover-play. */
const ART = [
  {t:"Paheli", slug:"paheli", year:"2026", credit:"Album", link:"https://open.spotify.com/album/5EPJ6k9PVOVD7M5Y2gldZw"},
  {t:"Mai Qala", slug:"mai-qala", year:"2026", credit:"EP", link:"https://open.spotify.com/album/1G6SSp3amuZJq2EiX75zox"},
  {t:"Gehna", slug:"gehna", year:"2026", credit:"Album", link:"https://open.spotify.com/album/74QAHkEmX1PlmNI0erVB4Q"},
  {t:"Jaayaz", slug:"jaayaz", year:"2026", credit:"Album", link:"https://open.spotify.com/album/5XSf0rHHmTn6Y849TQR6BD"},
  {t:"Udd Jaa", slug:"udd-jaa", year:"2026", credit:"Single", link:"https://open.spotify.com/album/50D3Ny54bQ4CKPU95X9mkS"},
  {t:"Cutputli", slug:"cutputli", year:"2025", credit:"w/ Prabhanjan, DOST", link:"https://open.spotify.com/album/4m1UVbAbkp8slVp22aErGX", id:"EJUGO6xq7aM"},
  {t:"Rakhna Jo Chaha", slug:"rakhna-jo-chaha", year:"2025", credit:"w/ Riya Goley", link:"https://open.spotify.com/album/0oR8fVM3fllHhycajj0FUX"},
  {t:"Panaah", slug:"panaah", year:"2025", credit:"Single", link:"https://open.spotify.com/album/1wh9eBuOZCz20LrYwGfSA7"},
  {t:"Take Me Back Home", slug:"take-me-back-home", year:"2025", credit:"w/ DOST", link:"https://open.spotify.com/track/5kttGIFqZPBFDqM7ph8Rik"},
  {t:"Boonden", slug:"boonden", year:"2024", credit:"w/ Varun Dagar", link:"https://music.apple.com/in/album/boonden/6789449682", id:"qrj16aKZuMA"},
  {t:"Kyun Soya Jaye Na", slug:"kyun-soya-jaye-na", year:"2023", credit:"Prabhanjan × Riya Goley", link:"https://open.spotify.com/track/5Anc4EtMr2NjLvPgBHioQh", id:"2EK1IBIRiKE"},
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
            <p class="small">A multi-instrumentalist with the classical guitar as his primary voice, moving fluidly across Western, Indian, and folk traditions — and across the whole chain, from pre-production to the final mix. Composer and producer for film, OTT, and independent artists since 2018. Trained at Berklee College of Music, Boston.</p>
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
          <a class="clink" href="https://instagram.com/ekzrya" target="_blank" rel="noopener">Instagram<span class="arr">@ekzrya</span></a>
          <a class="clink" href="${SP}" target="_blank" rel="noopener">Spotify<span class="arr">Listen →</span></a>
          <a class="clink" href="https://music.apple.com/us/artist/zrya/1689356986" target="_blank" rel="noopener">Apple Music<span class="arr">Listen →</span></a>
        </div>
      </div>
    </div>
    <div class="preview" id="preview"></div>`);
}

/* ============ RENDERERS ============ */
function frame(a, wide){
  const href = a.link || (a.id ? WATCH(a.id) : '#');
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
    const href = r.link || (r.id ? WATCH(r.id) : '#');
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
  /* wheel -> horizontal ONLY when the pointer is over a cover/video frame;
     anywhere else in the band, let the page scroll vertically. */
  car.addEventListener('wheel', e=>{
    if(!e.target.closest('.sframe')) return;
    const d = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    e.preventDefault(); car.scrollLeft += d;
  }, {passive:false});
  /* drag / swipe — only starts on a cover/video frame */
  let down=false, sx=0, sl=0, moved=0;
  car.addEventListener('pointerdown', e=>{if(!e.target.closest('.sframe'))return;down=true;moved=0;sx=e.clientX;sl=car.scrollLeft;car.classList.add('drag');car.setPointerCapture(e.pointerId);});
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

/* ============ HOMEPAGE — 3D cover ring (and2es-style) ============
   A focal cover in front; the rest ride a ring that recedes BEHIND it. The ring
   tilts toward the cursor; dragging spins it (focal changes) with motion blur;
   only the focal cover is in colour, the rest monochrome. */
function initField(){
  const stage = document.getElementById('field');
  if(!stage) return;
  const nv = document.getElementById('nowview');
  const N = ART.length, TAU = Math.PI*2, STEP = TAU/N;

  const tiles = ART.map((a,i)=>{
    const el = document.createElement('a');
    el.className='rtile'; el.href=a.link; el.target='_blank'; el.rel='noopener'; el.dataset.i=i;
    el.innerHTML = `<img src="art/${a.slug}.jpg" alt="${esc(a.t)}" draggable="false">`;
    stage.appendChild(el);
    return {el, a, base:i*STEP};
  });

  let R, tileSize, cx, cy;
  function layout(){
    R = Math.max(230, Math.min(560, innerWidth*0.33));
    tileSize = Math.max(150, Math.min(340, innerWidth*0.20));
    cx = innerWidth/2; cy = innerHeight*0.48;
    tiles.forEach(t=>{ t.el.style.width=tileSize+'px'; t.el.style.height=tileSize+'px'; });
  }

  let spin=0, vSpin=0, down=false, lx=0, lastDx=0, moved=0, raf=null, snapTo=null;
  let tx=0, ty=0, ttx=0, tty=0;         // ring tilt (current / target)
  const MAXTILT = 0.36, lastFocal = {i:-1};

  function frame(){
    if(!down){
      spin += vSpin; vSpin *= 0.94; if(Math.abs(vSpin)<0.00004) vSpin=0;
      if(snapTo!==null){ spin += (snapTo-spin)*0.12; if(Math.abs(snapTo-spin)<0.0008){ spin=snapTo; snapTo=null; } }
      else if(vSpin===0){ const t=Math.round(spin/STEP)*STEP; spin += (t-spin)*0.12; if(Math.abs(t-spin)<0.0008) spin=t; } // rest-snap
    }
    tx += (ttx-tx)*0.07; ty += (tty-ty)*0.07;
    const blur = Math.min(18, Math.abs(vSpin)*2400 + (down?Math.abs(lastDx)*0.5:0));

    let focal=0, best=-2;
    const proj = tiles.map(t=>{
      const ang=t.base+spin;
      let px=Math.sin(ang)*R, py=0, pz=Math.cos(ang)*R;
      let y1=py*Math.cos(tx)-pz*Math.sin(tx), z1=py*Math.sin(tx)+pz*Math.cos(tx); py=y1; pz=z1; // tilt X (cursor Y)
      let x2=px*Math.cos(ty)-py*Math.sin(ty), y2=px*Math.sin(ty)+py*Math.cos(ty); px=x2; py=y2; // tilt Z (cursor X)
      return {px,py,pz,depth:pz/R};
    });
    proj.forEach((p,idx)=>{ if(p.depth>best){best=p.depth;focal=idx;} });

    tiles.forEach((t,idx)=>{
      const p=proj[idx];
      const s = 0.6 + (p.depth+1)/2*0.62;
      t.el.style.transform = `translate3d(${cx+p.px}px,${cy+p.py}px,0) translate(-50%,-50%) scale(${s})`;
      t.el.style.zIndex = String(1000+Math.round(p.pz));
      const isF = idx===focal;
      t.el.classList.toggle('focal', isF);
      t.el.style.filter = isF
        ? `blur(${Math.min(blur,3).toFixed(1)}px)`
        : `grayscale(1) brightness(${(0.5+(p.depth+1)/2*0.35).toFixed(2)}) blur(${blur.toFixed(1)}px)`;
    });

    if(nv && focal!==lastFocal.i){ lastFocal.i=focal; nv.querySelector('.nv-title').textContent=tiles[focal].a.t; nv.querySelector('.nv-cta').textContent='Listen →'; }

    const busy = down || vSpin || snapTo!==null || Math.abs(ttx-tx)>0.001 || Math.abs(tty-ty)>0.001 || Math.abs(Math.round(spin/STEP)*STEP - spin)>0.0008;
    if(busy){ raf=requestAnimationFrame(frame); } else { raf=null; }
  }
  const kick=()=>{ if(!raf) raf=requestAnimationFrame(frame); };

  stage.addEventListener('pointerdown', e=>{ down=true; moved=0; lx=e.clientX; vSpin=0; snapTo=null; lastDx=0; stage.setPointerCapture(e.pointerId); stage.classList.add('grabbing'); kick(); });
  stage.addEventListener('pointermove', e=>{
    ttx = (e.clientY/innerHeight - .5)*MAXTILT*2;   // ring leans toward cursor (vertical)
    tty = (e.clientX/innerWidth  - .5)*MAXTILT;     // subtle roll (horizontal)
    if(down){ const dx=e.clientX-lx; lx=e.clientX; lastDx=dx; moved+=Math.abs(dx); const d=dx*0.006; spin+=d; vSpin=d; }
    kick();
  });
  const up=()=>{ down=false; stage.classList.remove('grabbing'); kick(); };
  stage.addEventListener('pointerup',up); stage.addEventListener('pointercancel',up);
  stage.addEventListener('pointerleave', ()=>{ ttx=tty=0; kick(); });
  stage.addEventListener('click', e=>{
    const tileEl = e.target.closest('.rtile');
    if(moved>6){ e.preventDefault(); return; }        // was a drag
    if(!tileEl) return;
    if(!tileEl.classList.contains('focal')){          // select a ring cover -> spin it to front
      e.preventDefault();
      const base = tiles[+tileEl.dataset.i].base;
      let target = -base; target += Math.round((spin-target)/TAU)*TAU;
      snapTo = target; kick();
    } // clicking the focal follows its link
  }, true);

  let rt; addEventListener('resize', ()=>{ clearTimeout(rt); rt=setTimeout(()=>{layout();kick();},200); });
  layout(); frame();
}

/* ============ BOOT ============ */
document.addEventListener('DOMContentLoaded', ()=>{
  injectChrome();
  const page = document.body.dataset.page || 'home';
  if(page==='art'){ renderCarousel(ART,'#car',false); renderList(ART,'#list'); }
  if(page==='work'){ renderCarousel(WORK,'#car',true); renderList(WORK,'#list'); }
  if(page==='home'){ initField(); }
  lazyImages(); wireInlinePlay(); wireFloatingPreview(); wireCarousel();
  wireDrawers(); wireReveal(); wireLoader();
});

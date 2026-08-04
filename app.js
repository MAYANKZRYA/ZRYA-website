/* ============ DATA ============ */
const SP = "https://open.spotify.com/artist/3rXwnEWqZbpPVPL1mAKot7";

/* ART — ZRYA's own releases, newest first. cover -> art/<slug>.jpg ; link = the release. */
const ART = [
  {t:"Paheli", slug:"paheli", year:"2026", credit:"Composer, Music Producer, Mix Engineer", link:"https://open.spotify.com/album/5EPJ6k9PVOVD7M5Y2gldZw"},
  {t:"Gehna", slug:"gehna", year:"2026", credit:"Composer, Music Producer, Mix Engineer", link:"https://open.spotify.com/album/74QAHkEmX1PlmNI0erVB4Q"},
  {t:"Udd Jaa", slug:"udd-jaa", year:"2026", credit:"Composer, Music Producer, Mix Engineer", link:"https://open.spotify.com/album/50D3Ny54bQ4CKPU95X9mkS"},
  {t:"Jaayaz", slug:"jaayaz", year:"2026", credit:"Music Producer", link:"https://open.spotify.com/album/5XSf0rHHmTn6Y849TQR6BD"},
  {t:"Mai Qala", slug:"mai-qala", year:"2026", credit:"Music Producer", link:"https://open.spotify.com/album/1G6SSp3amuZJq2EiX75zox"},
  {t:"Rakhna Jo Chaha", slug:"rakhna-jo-chaha", year:"2025", credit:"Music Producer", desc:"w/ Riya Goley", link:"https://open.spotify.com/album/0oR8fVM3fllHhycajj0FUX"},
  {t:"Cutputli", slug:"cutputli", year:"2025", credit:"Composer, Music Producer, Mix Engineer", desc:"w/ Prabhanjan, DOST", link:"https://open.spotify.com/album/4m1UVbAbkp8slVp22aErGX"},
  {t:"Take Me Back Home", slug:"take-me-back-home", year:"2025", credit:"Composer, Music Producer", desc:"w/ DOST", link:"https://open.spotify.com/track/5kttGIFqZPBFDqM7ph8Rik"},
  {t:"Boonden", slug:"boonden", year:"2024", credit:"Music Producer", desc:"Varun Dagar", link:"https://music.apple.com/in/album/boonden/6789449682"},
  {t:"Kyun Soya Jaye Na", slug:"kyun-soya-jaye-na", year:"2024", credit:"Music Producer, Mix Engineer", desc:"Prabhanjan × Riya Goley", link:"https://open.spotify.com/track/5Anc4EtMr2NjLvPgBHioQh"},
  {t:"Halo", slug:"halo", year:"2023", credit:"Mix Engineer", link:"https://open.spotify.com/track/2gS2aJx9tLdol818n2fne0"},
  {t:"Phir Dikhi Tu", slug:"phir-dikhi-tu", year:"2020", credit:"Music Producer", desc:"Avish · Artiste First", link:"https://www.youtube.com/watch?v=F3XaGUVyjoQ"},
  {t:"Flight (Remix)", slug:"flight", year:"2018", credit:"Music Producer", desc:"Hans Zimmer", link:"https://soundcloud.com/zryaofdilli/flight-by-hans-zimmer-man-of"},
  {t:"Deewani Mastani (Remix)", slug:"deewani-mastani", year:"2018", credit:"Music Producer", desc:"Bajirao Mastani", link:"https://soundcloud.com/zryaofdilli/deewani-mastani-bajirao"},
  {t:"We Don't Talk Anymore (Remix)", slug:"we-dont-talk-anymore", year:"2018", credit:"Music Producer", desc:"Charlie Puth", link:"https://soundcloud.com/zryaofdilli/we-dont-talk-anymore-by"},
  {t:"If I Had A Heart (Remix)", slug:"if-i-had-a-heart", year:"2018", credit:"Music Producer", desc:"Fever Ray", link:"https://soundcloud.com/zryaofdilli/if-i-had-a-heart-by-fever-ray"},
  {t:"3 Dollars & a Quarter", slug:"3-dollars-and-a-quarter", year:"2017", credit:"Composer & Producer", link:"https://www.youtube.com/watch?v=FGDjin1QbLo"},
  {t:"Synchronized", slug:"synchronized", year:"2016", credit:"Music Producer", desc:"Mr. & Mrs. Cactus", link:"https://soundcloud.com/zryaofdilli/mr-mrs-cactus-synchronized-galileo-remix"},
  {t:"Free Fall", slug:"free-fall", year:"2015", credit:"Music Producer", desc:"The Quixotic", link:"https://soundcloud.com/thequixotic/freefall"},
  {t:"HIGH", slug:"high", year:"2015", credit:"Composer & Producer", desc:"Callisto", link:"https://www.youtube.com/watch?v=UGhq-QyShGs"},
];

/* WORK — film / OTT / brand credits, newest first. video (id) -> hover video; audio (slug) -> hover cover. */
const WORK = [
  {t:"Raasta", slug:"raasta", year:"2026", credit:"Music Producer", desc:'From "Matka King"', link:"https://open.spotify.com/track/3AE5vwkv7aoqda3js5Wu8N"},
  {t:"Garaariyan", slug:"garaariyan", year:"2026", credit:"Music Producer", desc:"Single", link:"https://open.spotify.com/track/7LwTWfTxOmtmq4cAVE0eKg"},
  {t:"Kaise Bataye", year:"2026", credit:"Music Producer", desc:"Varun Dagar", id:"dBd0--cX09I"},
  {t:"Panaah", slug:"panaah", year:"2025", credit:"Composer & Music Producer", desc:"TheM", link:"https://open.spotify.com/album/1wh9eBuOZCz20LrYwGfSA7"},
  {t:"Lakh Shukrane", year:"2025", credit:"Composer & Music Producer", desc:"The Wedding Filmer", id:"9iLYCwrv6eU"},
  {t:"Tu Mila", year:"2025", credit:"Composer & Music Producer", desc:"The Wedding Filmer", id:"G_ny4r9-WQs"},
  {t:"JDU Campaign Song", year:"2024", credit:"Music Producer", desc:"Lok Sabha 2024", id:"g7wygLZEeUI"},
  {t:"Joy of Homecoming", year:"2023", credit:"Music Producer", desc:"vivo India", id:"ZKH2NYhihQA"},
  {t:"Waheguru", year:"2023", credit:"Music Producer", desc:"The Wedding Filmer", id:"F4dzcwT4h20"},
  {t:"Love Anthem", year:"2023", credit:"Music Producer", desc:"Tanishq", id:"3xtoWn15Zt0"},
  {t:"D'Cut — Vicks Anthem", year:"2023", credit:"Music Producer", desc:"Vicks", id:"5-w2gXS1NKA"},
  {t:"Capri Loans", year:"2023", credit:"Music Producer", desc:"Farz Nibhaatey Hain", id:"ipjwbMr4Ab0"},
  {t:"The Great Indian Family", year:"2023", credit:"Composer, Music Producer", desc:"YRF", id:"jxRgnlvep94"},
  {t:"Sikhs & Greeks", year:"2023", credit:"Composer & Music Producer", desc:"The Wedding Filmer", id:"qOwctYqtmtw"},
  {t:"Brides of India", year:"2023", credit:"Music Producer", desc:"Malabar Gold", id:"G4o-Y01r-bY"},
  {t:"Ranjha", year:"2023", credit:"Music Producer", desc:"The Wedding Filmer", id:"tyBJioe8gOs"},
  {t:"Ghere", year:"2022", credit:"Music Producer", desc:"An Action Hero · T-Series", id:"sEv3c58b3KQ"},
  {t:"Asli Action Chaalu", year:"2022", credit:"Music Producer", desc:"An Action Hero · T-Series", id:"54KHR3Dx-P4"},
  {t:"Teri Meri Kahaani", year:"2022", credit:"Music Producer", desc:"The Wedding Filmer", id:"ugZNMWgf4Kg"},
  {t:"Jind Mahi", year:"2022", credit:"Music Producer", desc:"The Wedding Filmer", id:"t6OPpuxAvDU"},
  {t:"Shama", year:"2022", credit:"Music Producer", desc:"Ghar Waapsi · Hotstar", id:"JRORviry-yI"},
  {t:"Volkswagen Taigun", year:"2022", credit:"Ad Audio Production", desc:"Cityscapes", id:"RZFn8Du213w"},
  {t:"Nachdi Phirey", year:"2022", credit:"Music Producer", desc:"The Wedding Filmer", id:"jh-wxrgHM1M"},
  {t:"Beqaraar", year:"2022", credit:"Music Producer", desc:"Looop Lapeta · Zee", id:"sLK07viMibY"},
  {t:"Mangalyam", year:"2021", credit:"Music Producer", desc:"The Wedding Filmer", id:"4Zs-VNHVmEQ"},
  {t:"Guncha Koi", year:"2021", credit:"Music Producer", desc:"Umber Jafri", id:"-peiuSBwmKA"},
  {t:"Faraar Kab Tak", year:"2021", credit:"Composer & Music Producer", desc:"EPIC", id:"lAn8XgwDpzc"},
  {t:"Ishara Brand Anthem", year:"2021", credit:"Music Producer", desc:"EPIC", id:"sJg-TMomfZM"},
  {t:"Suraj Pe Mangal Bhari", year:"2020", credit:"Audio Engineer & Producer", desc:"Zee Studios", id:"hs2MPHRkP9A"},
  {t:"Bhram", year:"2019", credit:"Music Producer", desc:"ZEE5", id:"zhavQiEIvUc"},
  {t:"The Zoya Factor", year:"2019", credit:"Music Producer", desc:"Star Studios", id:"tz9TN7ixPW0"},
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
    const cover = r.slug ? ` data-cover="${r.slug}"` : '';        // ART rows -> cover-art on hover
    const vid = (!r.slug && r.id) ? ` data-id="${r.id}"` : '';     // WORK rows -> video on hover
    return `<a class="row" href="${href}" target="_blank" rel="noopener"${cover}${vid}>
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
function pvMove(pv,e){ const w=pv.offsetWidth; let x=e.clientX+34; if(x+w>innerWidth-20)x=e.clientX-w-34; pv.style.left=x+'px'; pv.style.top=e.clientY+'px'; }
function wireFloatingPreview(){          // WORK list — video preview on hover
  const pv = document.getElementById('preview'); let curId=null;
  document.querySelectorAll('.row[data-id]').forEach(row=>{
    const id=row.dataset.id;
    row.addEventListener('mouseenter',e=>{pv.classList.remove('cover');if(curId!==id){curId=id;pv.innerHTML=`<iframe src="${YT(id)}" allow="autoplay" allowfullscreen></iframe>`;}pv.classList.add('show');pvMove(pv,e);});
    row.addEventListener('mousemove',e=>pvMove(pv,e));
    row.addEventListener('mouseleave',()=>pv.classList.remove('show'));
  });
}
function wireCoverPreview(){             // ART list — cover art on hover
  const pv = document.getElementById('preview'); let cur=null;
  document.querySelectorAll('.row[data-cover]').forEach(row=>{
    const slug=row.dataset.cover;
    row.addEventListener('mouseenter',e=>{if(cur!==slug){cur=slug;pv.innerHTML=`<img src="art/${slug}.jpg" alt="">`;}pv.classList.add('cover','show');pvMove(pv,e);});
    row.addEventListener('mousemove',e=>pvMove(pv,e));
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

/* ============ HOMEPAGE — true 3D cover drum (and2es-style) ============
   Each cover is sliced into vertical strips wrapped onto an invisible cylinder,
   so it genuinely curves (top/bottom edges bow, sides compress, backs mirror).
   The focus cover lives INSIDE the drum at its axis and counter-rotates to face
   you, so the front arc passes in front of it and the back arc behind it. Drag
   spins it; cursor leans it; nothing blurs. */
function initField(){
  const stage = document.getElementById('field');
  if(!stage) return;
  const nv = document.getElementById('nowview');
  const N = ART.length, TAU = Math.PI*2, STEP = TAU/N, K = 8;    // K = strips per cover

  const band = document.createElement('div'); band.className='band3d'; stage.appendChild(band);
  const covers = ART.map((a,i)=>({a, theta:i*STEP}));

  // focus cover — a child of the drum, at its centre axis, so it depth-sorts with the strips
  const focalEl = document.createElement('a'); focalEl.className='bfocal'; focalEl.target='_blank'; focalEl.rel='noopener';
  focalEl.innerHTML = `<img alt="" draggable="false">`;
  focalEl.addEventListener('dragstart', e=>e.preventDefault());
  band.appendChild(focalEl);
  const focalImg = focalEl.querySelector('img');

  let tileSize, focalSize, R, cx, cy;
  function build(){
    band.querySelectorAll('.bstrip').forEach(e=>e.remove());
    const sw = tileSize/K, gamma = tileSize/R;             // cover's angular width on the drum
    covers.forEach((c,ci)=>{
      c.strips=[];
      for(let s=0;s<K;s++){
        const a = c.theta + ((s+0.5)/K - 0.5)*gamma;       // this strip's angle around the drum
        const el = document.createElement('div'); el.className='bstrip'; el.dataset.i=ci;
        el.style.width=(sw+1)+'px'; el.style.height=tileSize+'px';
        el.style.marginLeft=(-sw/2)+'px'; el.style.marginTop=(-tileSize/2)+'px';
        el.style.backgroundImage=`url(art/${c.a.slug}.jpg)`;
        el.style.backgroundSize=`${tileSize}px ${tileSize}px`;
        el.style.backgroundPosition=`${-s*sw}px 0`;
        el.style.transform=`rotateY(${a}rad) translateZ(${R}px)`;
        band.appendChild(el); c.strips.push(el);
      }
    });
  }
  function layout(){
    tileSize  = Math.max(58, Math.min(109, innerWidth*0.0595));                       // ring covers (15% smaller again)
    focalSize = Math.max(264, Math.min(506, Math.min(innerWidth*0.2875, innerHeight*0.46))); // focus cover 15% bigger
    R = Math.min(Math.max(tileSize*N/(TAU*0.46), innerWidth*0.27), innerWidth*0.40);   // drum radius (capped)
    cx = innerWidth/2; cy = innerHeight*0.49;
    stage.style.perspective = Math.round(R*2.2)+'px';
    band.style.left = cx+'px'; band.style.top = cy+'px';
    build();
    focalEl.style.width=focalSize+'px'; focalEl.style.height=focalSize+'px';
    focalEl.style.marginLeft=(-focalSize/2)+'px'; focalEl.style.marginTop=(-focalSize/2)+'px';
  }

  const BASE_TILT = 0;                         // no tilt at rest (cursor leans it)
  let spin=0, vSpin=0, vel=0, down=false, lx=0, moved=0, raf=null, snapTo=null;
  let tilt=BASE_TILT, roll=0, tTilt=BASE_TILT, tRoll=0;
  const lastFocal={i:-1};

  function frame(){
    if(!down){
      spin += vSpin; vSpin *= 0.95; if(Math.abs(vSpin)<0.00004) vSpin=0;
      if(snapTo!==null){ spin += (snapTo-spin)*0.12; if(Math.abs(snapTo-spin)<0.0008){ spin=snapTo; snapTo=null; } }
      else if(vSpin===0){ const t=Math.round(spin/STEP)*STEP; spin += (t-spin)*0.14; if(Math.abs(t-spin)<0.0008) spin=t; }
    }
    tilt += (tTilt-tilt)*0.08; roll += (tRoll-roll)*0.08;
    band.style.transform = `rotateX(${tilt}rad) rotateZ(${roll}rad) rotateY(${spin}rad)`;         // spin the drum
    focalEl.style.transform = `rotateY(${-spin}rad) rotateZ(${-roll}rad) rotateX(${-tilt}rad)`;   // keep focus facing viewer at the axis

    let focal=0, best=-2;                       // front cover = the one facing the viewer
    for(let i=0;i<N;i++){ const c=Math.cos(covers[i].theta+spin); if(c>best){best=c;focal=i;} }
    if(focal!==lastFocal.i){
      lastFocal.i=focal; const a=covers[focal].a;
      focalImg.src=`art/${a.slug}.jpg`; focalEl.href=a.link;
      if(nv){ nv.querySelector('.nv-title').textContent=a.t;
              const cta=nv.querySelector('.nv-cta'); cta.textContent='Listen →'; cta.href=a.link; }
    }
    const busy = down || vSpin || snapTo!==null || Math.abs(tTilt-tilt)>0.001 || Math.abs(tRoll-roll)>0.001 || Math.abs(Math.round(spin/STEP)*STEP-spin)>0.0008;
    if(busy){ raf=requestAnimationFrame(frame); } else { raf=null; }
  }
  const kick=()=>{ if(!raf) raf=requestAnimationFrame(frame); };

  let downCover=-1, downFocal=false;
  stage.addEventListener('pointerdown', e=>{ down=true; moved=0; lx=e.clientX; vSpin=0; vel=0; snapTo=null;
    const st=e.target.closest('.bstrip'); downCover = st?+st.dataset.i:-1; downFocal=!!e.target.closest('.bfocal');
    stage.setPointerCapture(e.pointerId); stage.classList.add('grabbing'); kick(); });
  stage.addEventListener('pointermove', e=>{
    tTilt = BASE_TILT + (e.clientY/innerHeight-.5)*0.30;   // lean the drum with cursor (vertical)
    tRoll = (e.clientX/innerWidth-.5)*0.16;                // slight roll with cursor (horizontal)
    if(down){ const dx=e.clientX-lx; lx=e.clientX; moved+=Math.abs(dx); const d=dx*0.007; spin+=d; vel=vel*0.6+d*0.4; }
    kick();
  });
  const up=()=>{ if(!down) return; down=false; stage.classList.remove('grabbing');
    if(moved<6){                                        // a tap
      vSpin=0;
      if(downCover>=0){ let target=-covers[downCover].theta; target+=Math.round((spin-target)/TAU)*TAU; snapTo=target; }
      else if(downFocal && focalEl.href){ window.open(focalEl.href,'_blank','noopener'); }
    } else {
      vSpin=Math.max(-0.08,Math.min(0.08,vel));          // a throw carries momentum
    }
    kick();
  };
  stage.addEventListener('pointerup',up); stage.addEventListener('pointercancel',up);
  stage.addEventListener('pointerleave', ()=>{ tTilt=BASE_TILT; tRoll=0; kick(); });
  stage.addEventListener('click', e=>e.preventDefault(), true);   // links handled on tap

  // wheel/scroll rotates the drum: a fast flick spins it, a slow scroll steps cover-by-cover
  let wAcc=0;
  stage.addEventListener('wheel', e=>{
    e.preventDefault();
    const dy=e.deltaY; if(!dy) return;
    const mag=Math.abs(dy);
    if(mag>40){                                             // fast flick -> free spin with momentum
      snapTo=null; vSpin += -Math.sign(dy)*Math.min(0.03, mag*0.00025); vSpin=Math.max(-0.13,Math.min(0.13,vSpin)); wAcc=0;
    } else {                                                // slow -> one cover per ~40px of scroll
      vSpin=0; wAcc += dy;
      while(Math.abs(wAcc)>=40){ const s=Math.sign(wAcc); const from=(snapTo!==null?snapTo:Math.round(spin/STEP)*STEP); snapTo=from - s*STEP; wAcc-=s*40; }
    }
    kick();
  }, {passive:false});
  // the wheel spins the drum, so descending the page is a button
  const eb=document.getElementById('ethosbtn');
  if(eb) eb.addEventListener('click',()=>{ const s=document.querySelector('.statement'); (s||document.body).scrollIntoView({behavior:'smooth',block:'start'}); });

  let rt; addEventListener('resize', ()=>{ clearTimeout(rt); rt=setTimeout(()=>{layout();kick();},200); });
  layout(); frame();
}

/* ============ BOOT ============ */
document.addEventListener('DOMContentLoaded', ()=>{
  injectChrome();
  const page = document.body.dataset.page || 'home';
  if(page==='art'){ renderList(ART,'#list'); }
  if(page==='work'){ renderList(WORK,'#list'); }
  if(page==='home'){ initField(); }
  lazyImages(); wireFloatingPreview(); wireCoverPreview();
  wireDrawers(); wireReveal(); wireLoader();
});

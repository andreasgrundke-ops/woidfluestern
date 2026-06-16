/* ============================================================
   WOIDflüstern – main.js
   Nav-Verhalten, mobiles Menü, Scroll-Reveal, Stimm-Player,
   Sticky-Buttons (CTA + nach oben), mailto-Kontaktformular.
   © 2026 Grundke IT-Service
   ============================================================ */

// ---- Nav: solide beim Scrollen + Sticky-Buttons ein-/ausblenden ----
const nav=document.getElementById('nav');
const toTop=document.getElementById('toTop');
const stickyCta=document.getElementById('stickyCta');
const onScroll=()=>{
  const y=window.scrollY;
  if(nav)nav.classList.toggle('solid',y>60);
  const show=y>window.innerHeight*0.8;          // erst nach dem Hero zeigen
  if(toTop)toTop.classList.toggle('show',show);
  if(stickyCta)stickyCta.classList.toggle('show',show);
};
onScroll();window.addEventListener('scroll',onScroll,{passive:true});

// ---- Sanft nach oben ----
if(toTop){
  toTop.addEventListener('click',()=>{
    const reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});
  });
}

// ---- Mobile-Menü (mit ARIA-Status) ----
const burger=document.getElementById('burger'),menu=document.getElementById('menu');
if(burger&&menu){
  burger.setAttribute('aria-expanded','false');
  const toggleMenu=(open)=>{
    menu.classList.toggle('open',open);
    burger.setAttribute('aria-expanded',open?'true':'false');
  };
  burger.addEventListener('click',()=>toggleMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')toggleMenu(false);});
}

// ---- Scroll-Reveal ----
const io=new IntersectionObserver((es)=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
}),{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ---- Wellenform aufbauen ----
const wave=document.getElementById('wave');
if(wave){
  for(let i=0;i<44;i++){const s=document.createElement('span');
    s.style.height=(20+Math.round(Math.random()*60))+'%';wave.appendChild(s);}
}

// ---- Stimm-Player ----
const audio=document.getElementById('voice'),vbtn=document.getElementById('vbtn'),
      vcard=document.getElementById('voice-card'),vicon=document.getElementById('vicon'),
      vtime=document.getElementById('vtime'),vhint=document.getElementById('vhint');
let ready=false;
const playIcon='<path d="M8 5v14l11-7z"/>';
const pauseIcon='<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>';
function fmt(s){const m=Math.floor(s/60),r=Math.floor(s%60);return m+':'+(r<10?'0':'')+r;}
if(audio&&vbtn){
  audio.addEventListener('loadedmetadata',()=>{
    if(isFinite(audio.duration)&&audio.duration>0){ready=true;vtime.textContent=fmt(audio.duration);vhint.style.display='none';}
  });
  audio.addEventListener('error',()=>{ready=false;});
  audio.addEventListener('ended',()=>{vcard.classList.remove('playing');vicon.innerHTML=playIcon;});
  vbtn.addEventListener('click',()=>{
    if(!ready){
      vhint.textContent='Die Sprachprobe wird in Kürze ergänzt.';
      vhint.style.display='block';
      vcard.animate([{opacity:.6},{opacity:1}],{duration:300}); return;
    }
    if(audio.paused){audio.play();vcard.classList.add('playing');vicon.innerHTML=pauseIcon;}
    else{audio.pause();vcard.classList.remove('playing');vicon.innerHTML=playIcon;}
  });
}

// ---- Kontaktformular: DSGVO-freier mailto-Versand ----
// Öffnet das Standard-Mailprogramm mit vorausgefüllter Nachricht.
// Keine Datenübertragung an Dritte, kein Backend (passt zu GitHub Pages).
const MAIL_TO='alex@woidfluestern.de';
const kf=document.getElementById('kontaktform');
if(kf){
  kf.addEventListener('submit',e=>{
    e.preventDefault();
    const name=(kf.name.value||'').trim();
    const kontakt=(kf.kontakt.value||'').trim();
    const nachricht=(kf.nachricht.value||'').trim();
    const betreff='Anfrage über die Website'+(name?` von ${name}`:'');
    const body=`Hallo,\n\n${nachricht||'[deine Nachricht]'}\n\n— — —\nName: ${name||'-'}\nErreichbar unter: ${kontakt||'-'}`;
    window.location.href=`mailto:${MAIL_TO}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(body)}`;
  });
}

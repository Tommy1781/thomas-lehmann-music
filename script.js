const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent=new Date().getFullYear();
// Every audio file is a separate, 45-second edited MP3; original full songs are NOT included in this website.
const tracks=[
  {
    "title": "The Love Time Never Took Away",
    "audio": "music/01-preview.mp3",
    "cover": "covers/01.webp"
  },
  {
    "title": "250 Years of America",
    "audio": "music/02-preview.mp3",
    "cover": "covers/02.webp"
  },
  {
    "title": "A Life Revisited",
    "audio": "music/03-preview.mp3",
    "cover": "covers/03.webp"
  },
  {
    "title": "The Girl and the Light",
    "audio": "music/04-preview.mp3",
    "cover": "covers/04.webp"
  },
  {
    "title": "When Time Stands Still",
    "audio": "music/05-preview.mp3",
    "cover": "covers/05.webp"
  },
  {
    "title": "Traces of Light",
    "audio": "music/06-preview.mp3",
    "cover": "covers/06.webp"
  },
  {
    "title": "After the Storm",
    "audio": "music/07-preview.mp3",
    "cover": "covers/07.webp"
  },
  {
    "title": "The Last Light",
    "audio": "music/08-preview.mp3",
    "cover": "covers/08.webp"
  },
  {
    "title": "Sometimes I Still See You",
    "audio": "music/09-preview.mp3",
    "cover": "covers/09.webp"
  },
  {
    "title": "Whispers of the Wild",
    "audio": "music/10-preview.mp3",
    "cover": "covers/10.webp"
  },
  {
    "title": "Beyond the Silence",
    "audio": "music/11-preview.mp3",
    "cover": "covers/11.webp"
  },
  {
    "title": "Where the River meets the Sea",
    "audio": "music/12-preview.mp3",
    "cover": "covers/12.webp"
  },
  {
    "title": "Echos of Yesterday",
    "audio": "music/13-preview.mp3",
    "cover": "covers/13.webp"
  },
  {
    "title": "Symphony of the Heart",
    "audio": "music/17-preview.mp3",
    "cover": "covers/17.webp"
  }
];
const list=document.querySelector('#track-list');
const audio=document.querySelector('#audio-player');
const title=document.querySelector('#current-title');
const cover=document.querySelector('#current-cover');
const search=document.querySelector('#track-search');
const count=document.querySelector('#music-count');
const empty=document.querySelector('#no-results');
let activeIndex=0;
function makeRow(t,i){
  const button=document.createElement('button');button.type='button';button.className='track-row';
  button.setAttribute('role','listitem');button.dataset.index=i;
  button.setAttribute('aria-label',`Listen to ${t.title}, a 45-second preview`);
  const image=document.createElement('img');image.src=t.cover;image.alt='';image.loading='lazy';image.className='track-cover';image.width=52;image.height=52;
  const info=document.createElement('span');info.className='track-text';
  const name=document.createElement('strong');name.textContent=t.title;
  const artist=document.createElement('small');artist.textContent='Thomas Lehmann · 0:45 preview';
  info.append(name,artist);
  const play=document.createElement('span');play.className='track-play';play.setAttribute('aria-hidden','true');play.textContent='▶';
  button.append(image,info,play);
  button.addEventListener('click',()=>selectTrack(i,true));
  return button;
}
function renderList(){
  const term=search.value.toLocaleLowerCase().trim();
  list.replaceChildren();let shown=0;
  tracks.forEach((t,i)=>{if(!t.title.toLocaleLowerCase().includes(term))return;
    const row=makeRow(t,i);row.classList.toggle('active',i===activeIndex);
    if(i===activeIndex)row.setAttribute('aria-current','true');
    list.append(row);shown++;
  });
  count.textContent=`${shown} of ${tracks.length} compositions`;
  empty.hidden=shown!==0;
}
function selectTrack(index,playNow=false){
  activeIndex=(index+tracks.length)%tracks.length;
  const t=tracks[activeIndex];
  audio.pause();audio.src=t.audio;audio.load();
  title.textContent=t.title;cover.src=t.cover;cover.alt=`Cover artwork: ${t.title}`;
  renderList();
  if(playNow){const p=audio.play();if(p&&typeof p.catch==='function')p.catch(()=>{});}
}
search.addEventListener('input',renderList);
document.querySelector('#prev-track').addEventListener('click',()=>selectTrack(activeIndex-1,true));
document.querySelector('#next-track').addEventListener('click',()=>selectTrack(activeIndex+1,true));
// Safety limit even if an audio file is replaced with a longer one.
audio.addEventListener('timeupdate',()=>{if(audio.currentTime>=45){audio.pause();}});
selectTrack(0,false);

// On a local file:// preview, YouTube rejects embedded players (error 153).
// For published https:// pages, load each player only after a click.
// The permanent YouTube links below remain available if embedding is blocked.
document.querySelectorAll('.video-launch').forEach((button)=>{
  button.addEventListener('click',()=>{
    const id=button.dataset.videoId;
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
    const link='https://www.youtube.com/watch?v='+id;
    if (window.location.protocol==='file:') {
      window.open(link,'_blank','noopener,noreferrer');
      return;
    }
    const iframe=document.createElement('iframe');
    iframe.title=button.getAttribute('aria-label')||'YouTube video';
    iframe.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';
    iframe.loading='eager';
    iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy='strict-origin-when-cross-origin';
    iframe.allowFullscreen=true;
    button.replaceWith(iframe);
  });
});


// CONTACT FORM CONFIGURATION
// Formspree endpoint for Thomas Lehmann Music Contact.
// Messages are handled by Formspree; confirm recipient email in Formspree settings.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgaoq1wp';
const contactForm=document.querySelector('#contact-form');
const contactStatus=document.querySelector('#contact-status');
const contactSubmit=document.querySelector('#contact-submit');
const endpointReady=/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(FORMSPREE_ENDPOINT);
if(endpointReady){
  contactStatus.textContent='Your message will be sent securely using Formspree.';
}
contactForm.addEventListener('submit',async(event)=>{
  event.preventDefault();
  if(!contactForm.checkValidity()){
    contactForm.reportValidity();
    return;
  }
  if(!endpointReady){
    contactStatus.dataset.state='error';
    contactStatus.textContent='The contact form is not active yet. Please try again after the website owner connects Formspree.';
    return;
  }
  if(contactForm.elements['_gotcha'].value){return;}
  contactSubmit.disabled=true;
  contactSubmit.textContent='Sending…';
  contactStatus.dataset.state='';
  contactStatus.textContent='Sending your message…';
  try{
    const response=await fetch(FORMSPREE_ENDPOINT,{
      method:'POST',
      body:new FormData(contactForm),
      headers:{'Accept':'application/json'}
    });
    if(!response.ok)throw new Error('Formspree request failed');
    contactStatus.dataset.state='success';
    contactStatus.textContent='Thank you! Your message has been sent.';
    contactForm.reset();
  }catch(error){
    contactStatus.dataset.state='error';
    contactStatus.textContent='Sorry, your message could not be sent. Please try again later.';
  }finally{
    contactSubmit.disabled=false;
    contactSubmit.innerHTML='Send Message <span aria-hidden="true">↗</span>';
  }
});

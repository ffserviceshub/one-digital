/* One Digital — custom cursor, magnetic hover, tilt, spotlight, particles and scroll reveal */
(() => {
  const fine = window.matchMedia('(pointer:fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (fine && !reduced) {
    const dot=document.createElement('div'), ring=document.createElement('div'), light=document.createElement('div');
    dot.className='od-cursor'; ring.className='od-cursor-ring'; light.className='od-spotlight';
    document.body.append(dot,ring,light);
    let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y,lastParticle=0;
    addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;dot.style.left=x+'px';dot.style.top=y+'px;';dot.style.top=y+'px';light.style.setProperty('--mx',x+'px');light.style.setProperty('--my',y+'px');dot.classList.add('is-visible');ring.classList.add('is-visible');
      if(performance.now()-lastParticle>28){lastParticle=performance.now();const p=document.createElement('i');p.className='od-particle';p.style.left=x+'px';p.style.top=y+'px';p.style.setProperty('--dx',(Math.random()*46-23)+'px');p.style.setProperty('--dy',(Math.random()*46-23)+'px');document.body.append(p);setTimeout(()=>p.remove(),700);}
    },{passive:true});
    const follow=()=>{rx+=(x-rx)*.18;ry+=(y-ry)*.18;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(follow)};follow();
    document.addEventListener('mouseover',e=>{if(e.target.closest('a,button,.course-card,input,.filter-btn')){ring.classList.add('is-hover');dot.classList.add('is-hover')}});
    document.addEventListener('mouseout',e=>{if(e.target.closest('a,button,.course-card,input,.filter-btn')){ring.classList.remove('is-hover');dot.classList.remove('is-hover')}});
    addEventListener('mouseout',e=>{if(!e.relatedTarget){dot.classList.remove('is-visible');ring.classList.remove('is-visible')}});
    document.addEventListener('mousemove',e=>{const card=e.target.closest('.course-card');if(!card)return;const r=card.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;card.style.transform='perspective(900px) rotateX('+((.5-py)*11)+'deg) rotateY('+((px-.5)*13)+'deg) translateY(-7px)';card.style.setProperty('--shine-x',(px*100)+'%');});
    document.addEventListener('mouseout',e=>{const c=e.target.closest('.course-card');if(c&&!c.contains(e.relatedTarget))c.style.transform='';});
    document.addEventListener('mousemove',e=>{const b=e.target.closest('.btn-whatsapp,.filter-btn');if(!b)return;const r=b.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);b.style.transform='translate('+dx*.10+'px,'+dy*.15+'px)';});
    document.addEventListener('mouseout',e=>{const b=e.target.closest('.btn-whatsapp,.filter-btn');if(b&&!b.contains(e.relatedTarget))b.style.transform='';});
  }
  const observe=()=>{
    const nodes=document.querySelectorAll('#courseContainer .course-card:not(.od-observed)');
    if(!nodes.length)return;
    nodes.forEach((el,i)=>{el.classList.add('od-observed','od-reveal');el.style.transitionDelay=Math.min(i%6,5)*65+'ms';});
    if(reduced||!('IntersectionObserver'in window)){nodes.forEach(n=>n.classList.add('od-in'));return;}
    const io=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('od-in');io.unobserve(en.target)}}),{threshold:.12});
    nodes.forEach(n=>io.observe(n));
  };
  observe();
  const container=document.getElementById('courseContainer');
  if(container)new MutationObserver(()=>observe()).observe(container,{childList:true});
  let ticking=false;
  addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const hero=document.querySelector('.hero-section');if(hero&&innerWidth>767)hero.style.backgroundPosition='center '+(scrollY*.22)+'px';ticking=false})},{passive:true});
})();
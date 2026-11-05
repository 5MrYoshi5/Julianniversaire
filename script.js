(() => {
  const cfg = window.SITE_CONFIG;
  const home = document.getElementById("home");
  const grid = document.getElementById("envelopes");
  const view = document.getElementById("letter-view");
  const content = document.getElementById("letter-content");
  const timeLabel = document.getElementById("letter-time");
  const signature = document.getElementById("letter-signature");
  const dateLabel = document.getElementById("date-label");
  document.title = cfg.title + " ♥";
  document.getElementById("headline").textContent = cfg.title;
  document.getElementById("intro-copy").textContent = cfg.intro;
  document.getElementById("unlock-note").textContent = cfg.waiting;
  dateLabel.textContent = new Date(cfg.date + "T12:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}).toUpperCase();

  const pad = n => String(n).padStart(2,"0");
  function currentUnlockIndex(){
    const now = new Date();
    const [y,m,d] = cfg.date.split("-").map(Number);
    const birthdayStart = new Date(y,m-1,d,0,0,0,0);
    const birthdayEnd = new Date(y,m-1,d+1,0,0,0,0);
    if(now < birthdayStart) return -1;
    if(now >= birthdayEnd) return cfg.envelopes.length-1;
    const hm = pad(now.getHours()) + ":" + pad(now.getMinutes());
    let unlocked = -1;
    cfg.envelopes.forEach((item,i)=>{ if(hm >= item.time) unlocked=i; });
    return unlocked;
  }
  function renderGrid(){
    grid.innerHTML = "";
    const unlocked = currentUnlockIndex();
    cfg.envelopes.forEach((item,i)=>{
      const isOpen = i <= unlocked;
      const btn = document.createElement("button");
      btn.className = "envelope";
      btn.disabled = !isOpen;
      btn.innerHTML = `<span class="env-icon">${isOpen ? "✉" : "♡"}</span><span class="env-time">${item.time}</span><span class="env-title">${item.title}</span><span class="env-sub">${item.subtitle || ""}</span>${isOpen ? "" : '<span class="locked">Encore un peu de patience…</span>'}`;
      if(isOpen) btn.addEventListener("click",()=>openEnvelope(i));
      grid.appendChild(btn);
    });
  }
  function addQuiz(item){
    const wrap=document.createElement("div");
    item.questions.forEach((q,qi)=>{
      const block=document.createElement("div");block.className="quiz-question";
      const h=document.createElement("h3");h.textContent=(qi+1)+". "+q.q;block.appendChild(h);
      const feedback=document.createElement("div");feedback.className="feedback";
      let solved=false;
      q.choices.forEach((choice,ci)=>{
        const b=document.createElement("button");b.className="choice";b.textContent=choice;
        b.addEventListener("click",()=>{
          if(ci===q.answer){
            solved=true;
            feedback.textContent=q.success;
          }else{
            feedback.textContent=solved?"Ce n'est pas celle-là, mais tu avais déjà trouvé la bonne ! 😉":"Pas tout à fait… retente ta chance. 😌";
          }
        });block.appendChild(b);
      });
      block.appendChild(feedback);wrap.appendChild(block);
    });
    content.appendChild(wrap);
  }
  function openEnvelope(i){
    const item=cfg.envelopes[i];content.innerHTML="";
    timeLabel.textContent=item.time+" · "+item.title;
    if(item.kind==="quiz"){addQuiz(item);}
    else{
      const div=document.createElement("div");div.innerHTML=item.content||"";content.appendChild(div);
      if(item.kind==="memories" && item.image){
        const img=document.createElement("img");img.className="letter-media";img.src=item.image;img.alt=item.imageCaption||"Un souvenir";content.appendChild(img);
        if(item.imageCaption){const cap=document.createElement("p");cap.textContent=item.imageCaption;content.appendChild(cap);}
      }
      if(item.kind==="gift" && item.gifts){
        const list=document.createElement("div");list.className="gift-list";
        item.gifts.forEach(g=>{
          const card=document.createElement("div");card.className="gift";
          const h=document.createElement("h3");h.textContent=g.title;const p=document.createElement("p");p.textContent=g.text;
          card.append(h,p);
          if(g.link){const a=document.createElement("a");a.href=g.link;a.target="_blank";a.rel="noopener";a.textContent="Ouvrir mon petit cadeau ↗";card.appendChild(a);}
          list.appendChild(card);
        });content.appendChild(list);
      }
    }
    signature.textContent=cfg.signature;
    home.classList.add("hidden");grid.classList.add("hidden");view.classList.remove("hidden");
    window.scrollTo({top:0,behavior:"smooth"});
  }
  document.getElementById("back-button").addEventListener("click",()=>{
    view.classList.add("hidden");home.classList.remove("hidden");grid.classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});
  });
  renderGrid();
  setInterval(renderGrid,15000);
})(); 

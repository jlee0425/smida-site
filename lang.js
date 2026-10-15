(function(){
  var d=document.documentElement,k="smida-lang",L=["en","ja","ko"],l;
  try{l=localStorage.getItem(k)}catch(e){}
  if(L.indexOf(l)<0){
    var n=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""];
    l="en";
    for(var i=0;i<n.length;i++){var m=/^(en|ja|ko)\b/i.exec(n[i]);if(m){l=m[1].toLowerCase();break}}
  }
  d.lang=l;
  document.addEventListener("DOMContentLoaded",function(){
    var bs=document.querySelectorAll(".lb");
    function sync(){
      for(var i=0;i<bs.length;i++){
        var on=bs[i].getAttribute("data-l")===d.lang;
        bs[i].setAttribute("aria-pressed",on?"true":"false");
        if(on)bs[i].setAttribute("aria-current","true");else bs[i].removeAttribute("aria-current");
      }
    }
    sync();
    for(var i=0;i<bs.length;i++)bs[i].addEventListener("click",function(){
      d.lang=this.getAttribute("data-l");
      try{localStorage.setItem(k,d.lang)}catch(e){}
      sync();
    });
  });
})();

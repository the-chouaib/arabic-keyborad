    var list=document.getElementById("list");
    // hna fin katgol ljs ana fax aywrk 3la chi botona l id dyalha howa a wla z wla e exécuter function a wla z wla e
    document.getElementById("a").addEventListener("click", a);
    document.getElementById("b").addEventListener("click", b);
    document.getElementById("c").addEventListener("click", c);
    document.getElementById("d").addEventListener("click", d);
       document.getElementById("f").addEventListener("click", f);
    document.getElementById("g").addEventListener("click", g);
    document.getElementById("h").addEventListener("click", h);
   document.getElementById("i").addEventListener("click", i);
    document.getElementById("j").addEventListener("click", j);
    document.getElementById("k").addEventListener("click", k);
    document.getElementById("l").addEventListener("click", l);
   document.getElementById("m").addEventListener("click", m);
    document.getElementById("n").addEventListener("click", n);
    document.getElementById("o").addEventListener("click", o);
    document.getElementById("p").addEventListener("click", p);
   document.getElementById("q").addEventListener("click", q);
    document.getElementById("r").addEventListener("click", r);
    document.getElementById("s").addEventListener("click", s);
    document.getElementById("t").addEventListener("click", t);
    document.getElementById("calma").addEventListener("click", calma);

  document.getElementById("u").addEventListener("click", u);
    document.getElementById("v").addEventListener("click", v);
   document.getElementById("w").addEventListener("click", w);
    document.getElementById("x").addEventListener("click", x);
    document.getElementById("y").addEventListener("click", y);
    document.getElementById("z").addEventListener("click", z);
   document.getElementById("ilyas").addEventListener("click", ilyas);
    document.getElementById("chouaib").addEventListener("click", chouaib);
    document.getElementById("yassine").addEventListener("click", yassine);
    document.getElementById("barcelona").addEventListener("click", barcelona);
   document.getElementById("clavier").addEventListener("click", clavier);
    document.getElementById("arabe").addEventListener("click", arabe);


    document.getElementById("espace").addEventListener("click", espace);

    //hna fin katgol ach ndir ila galo liya exécuter a wla z wla e
    function a() {
      var textnode = document.createTextNode("ع");
      document.getElementById("list").appendChild(textnode);
    }
     function b() {
      var textnode = document.createTextNode("ظ");
      document.getElementById("list").appendChild(textnode);
    }
     function c() {
      var textnode = document.createTextNode("ط");
      document.getElementById("list").appendChild(textnode);
    }
       function d() {
      var textnode = document.createTextNode("ض");
      document.getElementById("list").appendChild(textnode);
    }
       function f() {
      var textnode = document.createTextNode("ص");
      document.getElementById("list").appendChild(textnode);
    }
    function g() {
      var textnode = document.createTextNode("ش");
      document.getElementById("list").appendChild(textnode);
    }
  function calma() {
      var textnode = document.createTextNode("ت");
      document.getElementById("list").appendChild(textnode);
    }
    function h() {
      var textnode = document.createTextNode("س");
      document.getElementById("list").appendChild(textnode);
    }

    function i() {
      var textnode = document.createTextNode("ز");
      document.getElementById("list").appendChild(textnode);
    }

    function j() {
      var textnode = document.createTextNode("ر");
      document.getElementById("list").appendChild(textnode);
    }
    function k() {
      var textnode = document.createTextNode("ذ");
      document.getElementById("list").appendChild(textnode);
    }

    function l() {
      var textnode = document.createTextNode("د");
      document.getElementById("list").appendChild(textnode);
    }
  function m() {
      var textnode = document.createTextNode("خ");
      document.getElementById("list").appendChild(textnode);
    }
  function n() {
      var textnode = document.createTextNode("ح");
      document.getElementById("list").appendChild(textnode);
    }
 function o() {
      var textnode = document.createTextNode("ج");
      document.getElementById("list").appendChild(textnode);
    }

  function p() {
      var textnode = document.createTextNode("ث");
      document.getElementById("list").appendChild(textnode);
    }
  function q() {
      var textnode = document.createTextNode("ب");
      document.getElementById("list").appendChild(textnode);
    }

  function r() {
      var textnode = document.createTextNode("ا");
      document.getElementById("list").appendChild(textnode);
    }

 function s() {
      var textnode = document.createTextNode("ى");
      document.getElementById("list").appendChild(textnode);
    }

 function t() {
      var textnode = document.createTextNode("ئ");
      document.getElementById("list").appendChild(textnode);
    }


 function u() {
      var textnode = document.createTextNode("ؤ");
      document.getElementById("list").appendChild(textnode);
    }

 function v() {
      var textnode = document.createTextNode("ة");
      document.getElementById("list").appendChild(textnode);
    } function w() {
      var textnode = document.createTextNode("ي");
      document.getElementById("list").appendChild(textnode);
    } function x() {
      var textnode = document.createTextNode("و");
      document.getElementById("list").appendChild(textnode);
    }







 function y() {
      var textnode = document.createTextNode("ه");
      document.getElementById("list").appendChild(textnode);
    }

 




 function z() {
      var textnode = document.createTextNode("ن");
      document.getElementById("list").appendChild(textnode);
    }






 function ilyas() {
      var textnode = document.createTextNode("م");
      document.getElementById("list").appendChild(textnode);
    }





 function chouaib() {
      var textnode = document.createTextNode("ل");
      document.getElementById("list").appendChild(textnode);
    }





 function yassine() {
      var textnode = document.createTextNode("ك");
      document.getElementById("list").appendChild(textnode);
    }








 function barcelona() {
      var textnode = document.createTextNode("ق");
      document.getElementById("list").appendChild(textnode);
    }








 function clavier() {
      var textnode = document.createTextNode("ف");
      document.getElementById("list").appendChild(textnode);
    }






 function arabe() {
      var textnode = document.createTextNode("غ");
      document.getElementById("list").appendChild(textnode);
    }    function espace(){
      var textnode = document.createTextNode(" ");
      document.getElementById("list").appendChild(textnode);
    }


function myFunction() {
  var copyText = document.getElementById("list");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy ";
}


  function myButton() {
    location.reload();
  }

  function google(){
  var query = $.trim($("#list").val());
  query = query.replace(/\s+/g, '+');
  url = 'http://www.google.com/search?q=' + query;
  window.open(url,'_blank');
}
function YouTube(){
  var query = $.trim($("#list").val());
    query = query.replace(/\s+/g, '+');
    url = 'https://www.youtube.com/results?search_query=' + query;
    window.open(url,'_blank');
  }
//the best part 
document.body.addEventListener("keydown", function(event) {
    if (event.keyCode ==  65) {
        d();
    }else if(event.keyCode ==  90){
      f();
    }else if(event.keyCode ==  69){
      p();
    }else if(event.keyCode ==  82){
      barcelona();
    }else if(event.keyCode ==  84){
      clavier();
    }else if(event.keyCode ==  89){
      arabe();
    }else if(event.keyCode ==  85){
      a();
    }else if(event.keyCode ==  73){
      y();
    }else if(event.keyCode ==  79){
      m();
    }else if(event.keyCode ==  80){
      n();
    }else if(event.keyCode ==  221){
      o();
    }else if(event.keyCode ==  186){
      l();
    }else if(event.keyCode ==  81){
      g();
    }else if(event.keyCode ==  83){
      h();
    }else if(event.keyCode ==  68){
      w();
    }else if(event.keyCode ==  70){
      q();
    }else if(event.keyCode ==  71){
      chouaib();
    }else if(event.keyCode ==  72){
      r();
    }else if(event.keyCode ==  74){
      calma();
    }else if(event.keyCode ==  75){
      z();
    }else if(event.keyCode ==  76){
      ilyas();
    }else if(event.keyCode ==  77){
      yassine();
    }else if(event.keyCode ==  192){
      c();
    }else if(event.keyCode ==  220){
      k();
    }else if(event.keyCode ==  87){
      t();
    }else if(event.keyCode ==  67){
      u();
    }else if(event.keyCode ==  86){
      j();
    }else if(event.keyCode ==  66){
      j();
    }else if(event.keyCode ==  78){
      s();
    }else if(event.keyCode ==  190){
      x();
    }else if(event.keyCode ==  191){
      i();
    }else if(event.keyCode ==  223){
      b();
    }else if(event.keyCode ==  32){
      espace();
    } 
});

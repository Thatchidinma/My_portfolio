let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

window.onscroll = function() {
    if (document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
      document.getElementById("btn-back-to-top").hidden = false;
    } else {
      document.getElementById("btn-back-to-top").hidden = true;
    }
    if (window.matchMedia( '( max-width: 550px )' ).matches){
      if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10){
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.background = "rgba(255, 0, 79, 0.8)";
        document.getElementById("navbar").style.width = "100%";
      } else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.position = "unset";
      }
    } else {
      document.getElementById("navbar").style.position = "unset";
      document.getElementById("navbar").style.background = "none";
    }
  };

  function openmenu(){
    document.getElementById("sidemenu").style.right = "0";
  }

  function closemenu(){
    document.getElementById("sidemenu").style.right = "-150px";
  }


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
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20 ) {
      document.getElementById("btn-back-to-top").hidden = false;
    } else {
      document.getElementById("btn-back-to-top").hidden = true;
    }
  };
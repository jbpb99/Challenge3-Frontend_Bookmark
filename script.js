"use strict"
var img = document.querySelector(".hamburger-icon");
var nav = document.querySelector(".encabezado");
	navToggle = document.querySelector(".hamburger");
if(navToggle)
{
	navToggle.addEventListener("click", function(e)
	{
		if(nav.className == "encabezado")
		{
			nav.className="menu";
			img.src="imagenes/icon-close.svg";
		}else
		{
			nav.className="encabezado";
			img.src="imagenes/icon-hamburger.svg";
		}
		e.preventDefault();
	}, false);

	window.addEventListener("resize", function())
	{
		if(window.matchMedia("max-width: 679px)").matches)
		{
			nav.className="encabezado";
			img.src="imagenes/icon-hamburger.svg";
		}else{
			nav.className="encabezado";
			img.src="imagenes/icon-hamburger.svg";
		}
	}

}

function onTabClick(event) 
{
  let activeTabs = document.querySelectorAll(".active");
  
  for( let i = 0; i < activeTabs.length; i++) 
  {
  activeTabs[i].className = activeTabs[i].className.replace("active", "");
  }
  
  activeTabs.forEach(function(tab) 
  {
    tab.className = tab.className.replace("active", "");
  });
  
  event.target.parentElement.className += " active";
  document.getElementById(event.target.href.split("#")[1]).className += " active";
}

const element = document.getElementById("nav-tab");

element.addEventListener("click", onTabClick, false);


(function() 
{
  const opcion = document.getElementsByClassName("opcion");
  let current = -1;

  for (let i = 0; i < opcion.length; i++)
   {
      opcion[i].addEventListener("click", function() 
      {
          if (i !== current && current !== -1) 
          {
              opcion[current].classList.remove("active");
              opcion[current].nextElementSibling.classList.remove("panel-open");
          }
          this.nextElementSibling.classList.toggle("panel-open");
          current = this.classList.toggle("active") ? i : -1;
      });
  };
})();
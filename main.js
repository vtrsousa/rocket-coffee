function  menuEventClick(){
  const nav = document.querySelector('#header nav')
  const toggle = document.querySelectorAll('nav .toggle')

  for (const element of toggle){
    element.addEventListener('click', function(){
      nav.classList.toggle('show')
    })
  }

  const links = document.querySelectorAll('nav ul li a')

  for (const link of links){
    link.addEventListener('click', function(){
      nav.classList.remove('show')
    })
  }

  const menuItems = document.getElementsByClassName("menuList");

  for (const active of menuItems){
    active.addEventListener('click', function(){
      
      const current = document.getElementsByClassName(' active')

      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    })
  }
}

menuEventClick()
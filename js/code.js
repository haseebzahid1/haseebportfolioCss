faqs.forEach((tab,index)=>{
    tab.addEventListener('click',function(){
      // To remove active class from previous tab
      // faqs.forEach((tab) =>{
      //   return tab.classList.toggle('active');
      // });
      
      tab.classList.toggle('active')  ;
  
      //To Hide Previous tab content
      // answer.forEach((c)=>{
      //   return c.classList.toggle('active')
      // })
      // To Show Content According To Tab Selected
      answer[index].classList.toggle('active')
    })
  });
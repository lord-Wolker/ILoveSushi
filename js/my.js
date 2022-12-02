wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

$(document).ready(function(){
  let domain={
    "Выберите домен": 0,
    "domain.github.io":0,
    "domain.ru":300,
    "domain.org":400,
    "domain.com":500,
    "domain.eco":1000
    };

    let host={
    "Выберите хостинг": 0,
    "Github":0,
    "Beget":300,
    "Hostinger":400
    };

    let admin={
      "Выберите тариф": 0,
      "Минимум":1200,
      "базовый":3500,
      "Стандарт":5700,
      "Оптимальный":15300,
      "Максимальный":40700
    };

    domainFillSelect();
    hostFillSelect();
    adminFillSelect();

    function domainFillSelect(){
        let html="";
        for(type in domain){
        
        html+="<option value='"+type+"'>"+type+"</option>"
      }
       $("#d").append(html);
    
    }

    function hostFillSelect(){
      let html="";
      for(type in host){
      
      html+="<option value='"+type+"'>"+type+"</option>"
    }
     $("#h").append(html);
  }

  function adminFillSelect(){
    let html="";
    for(type in admin){
    
    html+="<option value='"+type+"'>"+type+"</option>"
  }
   $("#a").append(html);
}

  $(".calk").change(function(){
    prise1=domain[$("#d").val()];
    prise2=host[$("#h").val()];
    prise3=admin[$("#a").val()];
    sum=prise1+prise2+prise3;
    $("#itogo").html(sum);
    $("#domen").html(prise1);
    $("#host").html(prise2);
    $("#admin").html(prise3);
  });
});


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
    "ilovesushi.github.io":0,
    "IlovesushiPlus.ru":190,
    "ilovesushi.press":349,
    "ilovesushi.pro":599,
    "IlovesushiLife.ru.com":7020
    };

    let host={
    "Выберите хостинг": 0,
    "Github":0,
    "Start":390,
    "Noble":580
    };

    let admin={
      "Выберите тариф": 0,
      "Технический":3000,
      "Стартовый":3400,
      "Базовый":7500,
      "Оптимальный":13500,
      "Бизнес":18000,
      "Бизнес+":22000
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


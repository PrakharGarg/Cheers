$(function(){
  $(".style-type").click(function(event){

    $.ajax({
      method: 'GET',
      url: 'home/description',
      data: { name: $(this).text()},
      
      dataType: 'script'
    });

  });
});
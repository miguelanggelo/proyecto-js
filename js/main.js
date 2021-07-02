$(document).ready(function(){
   
    // *2 Slider
    if(window.location.href.indexOf('index') > -1){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true
      });
    }

     // *3 Posts
     if(window.location.href.indexOf('index') > -1){
      var posts= [
          {
              title: 'Prueba de titulo 1',
              date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae ipsa omnis pariatur tempora assumenda, quis, maiores eius voluptatum, suscipit dolor exercitationem? Quia accusantium minus incidunt. Officiis rerum esse consequatur. Aperiam facilis nemo veritatis perferendis, quidem'
          },
          {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae ipsa omnis pariatur tempora assumenda, quis, maiores eius voluptatum, suscipit dolor exercitationem? Quia accusantium minus incidunt. Officiis rerum esse consequatur. Aperiam facilis nemo veritatis perferendis, quidem'
          },
          {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae ipsa omnis pariatur tempora assumenda, quis, maiores eius voluptatum, suscipit dolor exercitationem? Quia accusantium minus incidunt. Officiis rerum esse consequatur. Aperiam facilis nemo veritatis perferendis, quidem'
          },
          {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae ipsa omnis pariatur tempora assumenda, quis, maiores eius voluptatum, suscipit dolor exercitationem? Quia accusantium minus incidunt. Officiis rerum esse consequatur. Aperiam facilis nemo veritatis perferendis, quidem'
          },
          {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae ipsa omnis pariatur tempora assumenda, quis, maiores eius voluptatum, suscipit dolor exercitationem? Quia accusantium minus incidunt. Officiis rerum esse consequatur. Aperiam facilis nemo veritatis perferendis, quidem'
          },
          {
            title: 'Prueba de titulo 6',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae ipsa omnis pariatur tempora assumenda, quis, maiores eius voluptatum, suscipit dolor exercitationem? Quia accusantium minus incidunt. Officiis rerum esse consequatur. Aperiam facilis nemo veritatis perferendis, quidem'
          },
      ]; 
     
      posts.forEach((item, index) => {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>
            `;
              $("#posts").append(post);
          });
    }
          
          // 4 Selector de tema
          var theme = $("#theme");

          $("#to-green").click(function(){
            theme.attr("href", "css/green.css");
          });

          $("#to-red").click(function(){
            theme.attr("href", "css/red.css");
          });

          $("#to-blue").click(function(){
            theme.attr("href", "css/blue.css");
          });

          // 5 Scroll arriba de la web
          $('.subir').click(function(e){
            e.preventDefault();

            $('html, body').animate({
              scrollTop: 0
            }, 500);

            return false;
          });
    

          // 6 Login falso
          $("#login form").submit(function(){
            var form_name = $("#form_name").val();

            localStorage.setItem("form_name", form_name);
          });

          var form_name = localStorage.getItem("form_name");

          if(form_name != null && form_name != "undefined"){
            var about_parrafo = $("#about p");

            about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
            about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
          
            $("#login").hide();

            $("#logout").click(function(){
              localStorage.clear();
              location.reload();
            });
          }

          // 7 Acordeon
          if(window.location.href.indexOf('about') > -1){
            $("#acordeon").accordion();
          }

          // 8 Reloj
          if(window.location.href.indexOf('reloj') > -1){

            setInterval(function(){
                var reloj = moment().format("hh:mm:ss");
                $("#reloj").html(reloj);
            }, 1000); 
          }

          // 9 Validacion
          if(window.location.href.indexOf('contact') > -1) {
            
            $("form input[name='date']").datepicker({
                dateFormat: 'dd-mm-yy'
            });
            
            $.validate({
                  lang: 'es',
                  errorMessagePosition: 'top',
                  scrollTopOnError: true
              });
          }


          

});
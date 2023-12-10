let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #b558a2;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #b558a2;">Estudio la Licenciatura en Tecnologias y sistemas de información.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

var t1 = just.animate({
    targets: ".oval",
    duration: 1300,
    props: {
      innerHTML: ['_______'] 
    },
    web: {
       transform: [
          { offset: 0, value: "scale(1, 1)" },
          { offset: 0.3, value: "scale(1.25, .75)" },
          { offset: 0.4, value: "scale(.75, 1.25)" },
          { offset: 0.5, value: "scale(1.15, .85)" },
          { offset: 0.65, value: "scale(.80, 1.05)" },
          { offset: 0.75, value: "scale(1.05, .95)" },
          { offset: 1, value: "scale(2, 2)" }
       ]
    }
 });
 
 
   t1.play();
 
   just.tools.player(t1);
   
   /*----------- LUNA ----------- */
   var t2 = just.animate({
      targets: ".luna",
      duration: 1300,
      props: {
        innerHTML: ['_______'] 
      },
      web: {
         transform: [
            { offset: 0, value: "scale(3, 3)" },
            { offset: 0.3, value: "scale(1.25, .75)" },
            { offset: 0.4, value: "scale(.90, 1.25)" },
            { offset: 0.5, value: "scale(1.15, .85)" },
            { offset: 0.65, value: "scale(.80, 1.05)" },
            { offset: 0.75, value: "scale(1.50, .95)" },
            { offset: 1, value: "scale(2, 2)" }
         ]
      }
   });
   
   
     t2.play();
   
     just.tools.player(t2);

/*----------- Triangulo ----------- */

var t3 = just.animate({
   targets: ".triangulo",
   duration: 1300,
   props: {
     innerHTML: [''] 
   },
   web: {
      transform: [
         { offset: 0.3, value: "scale(.475, .475)" },
         { offset: 0.4, value: "scale(.55, .55)" },
         { offset: 0.5, value: "scale(.19, .675)" },
         { offset: 1, value: "scale(1, 1)" }
         
         
      ]
   }
});


  t3.play();

  just.tools.player(t3);

  /*----------- Trapecio ----------- */

var t4 = just.animate({
   targets: ".trapecio",
   duration: 1300,
   props: {
     innerHTML: [''] 
   },
   web: {
                    opacity: [.25, .75]
                    
                }
});


  t4.play();

  just.tools.player(t4);

    /*----------- rombo ----------- */

var t5 = just.animate({
   targets: ".rombo",
   duration: 1300,
   props: {
     innerHTML: [''] 
   },
   web: {
      opacity: [0, 1],
                    
      transform: [
         { offset: 0, value: "scale(4, 4)" },
         { offset: 0.3, value: "scale(1.25, .75)" },
         { offset: 0.4, value: "scale(.75, 1.25)" },
         { offset: 0.5, value: "scale(1.15, .85)" },
         { offset: 0.65, value: "scale(.95, 1.05)" },
         { offset: 0.75, value: "scale(1.05, .95)" },
         { offset: 1, value: "scale(2, 2)" },
         { offset: 0, value: "scale(4, 4)" }
       ]
                }
});


  t5.play();

  just.tools.player(t5);

   /*----------- rombo ----------- */

var t6 = just.animate({
   targets: ".huevo",
   duration: 1300,
   props: {
     innerHTML: [''] 
   },
   web: {
      
                    
      transform: [
         { offset: 0.3, value: "scale(.475, .475)" },
         { offset: 0.4, value: "scale(.55, .55)" },
         { offset: 0.5, value: "scale(.19, .675)" },
         { offset: 0.78, value: "scale(.30, .700)" },
         { offset: 0.4, value: "scale(.55, .55)" },
         { offset: 0.3, value: "scale(.600s, .600)" },
         { offset: 1, value: "scale(3, 3)" }
       ]
                }
});


  t6.play();

  just.tools.player(t6);


  var t7 = just.animate({
   targets: ".test",
   duration: 1500,
   props: {
     innerHTML: [''] 
   },
   web: {
      
                    
      transform: [
         { offset: 1, value: "scale(3, 3)" },
         { offset: 0.3, value: "scale(.305, .305)" },
         { offset: 0.4, value: "scale(.55, .55)" },
         { offset: 0.5, value: "scale(.19, .675)" },
         { offset: 0.78, value: "scale(.30, .700)" },
         { offset: 0.4, value: "scale(.80, .100)" },
         { offset: 0.3, value: "scale(.900s, .900)" },
         { offset: 1, value: "scale(3, 3)" }
       ]
                }
});


  t7.play();

  just.tools.player(t7);


  var t8 = just.animate({
   targets: ".corazon",
   duration: 2000,
   props: {
     innerHTML: [''] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(4, 4)" },
         { offset: 0.5, value: "scale(1.25, .75)" },
         { offset: 0.5, value: "scale(1.25, .75)" },
         { offset: 0.4, value: "scale(.75, 1.25)" },
         { offset: 0.10, value: "scale(1.15, .85)" },
         { offset: 0.10, value: "scale(1.15, .85)" },
         { offset: 0.75, value: "scale(.80, 1.05)" },
         { offset: 0.85, value: "scale(1.20, .95)" },
         { offset: 0.85, value: "scale(1.20, .95)" },
         { offset: 1, value: "scale(1, 1)" }
      ]
   }
});


  t8.play();

  just.tools.player(t8);

  var t9 = just.animate({
   targets: ".pacman",
   duration: 2000,
   props: {
     innerHTML: [''] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(2, 2)" },
         { offset: 0.3, value: "scale(1.50, 8)" },
         { offset: 0.4, value: "scale(4, 1.25)" },
         { offset: 0.5, value: "scale(2, 3)" },
         { offset: 0.5, value: "scale(3, 5)" },
         { offset: 0.65, value: "scale(3, 2)" },
         { offset: 0.75, value: "scale(2.3, 1)" },
         { offset: 0.90, value: "scale(1, 2.3)" },
         { offset: 1, value: "scale(1, 1)" }
      ]
   }
});


  t9.play();

  just.tools.player(t9);
  


  var t10 = just.animate({
   targets: ".space",
   duration: 2000,
   props: {
     innerHTML: [''] 
   },
   web: {
      opacity: [0, 3],
      transform: [
         { offset: 0.90, value: "scale(4, 1.25)" },
         { offset: 1, value: "scale(1.25, 4)" },
         { offset: 1.3, value: "scale(4, 1.25)" },
         { offset: 1.4, value: "scale(1.25, 4)"},
         { offset: 1.5, value: "scale(4, 1.25)" },
         { offset: 1.65, value: "scale(1.25, 4)" },
         { offset: 1.75, value: "scale(4, 1.25)" },
         { offset: 2, value: "scale(1, 1)" }
      ]
   }
});


  t10.play();

  just.tools.player(t10);
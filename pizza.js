function draw_pizza() {
  var draw = SVG('drawing').size(800, 800);

  var circle = draw.circle(600);
  circle.move(30,30);
  circle.fill({ color: '#feff99' });
  circle.stroke({ color: '#fbcf66', width: 30 });

  for(var i = 0; i < 15; i++) {
    draw_pepperoni(draw);
  }
}

function draw_pepperoni(drawobj) {
  var clip1 = drawobj.circle(570);
  clip1.move(45,45);
  var pepperoni1 = drawobj.circle(100);
  pepperoni1.fill({ color: rand_pepperoni() });
  pepperoni1.move( 550*Math.random(), 550*Math.random() );
  pepperoni1.stroke({ color: '#b20000', width: 1, opacity: 0.6 });
  pepperoni1.clipWith(clip1);
}

function rand_pepperoni() {
  var colors = ['#ff0000', '#e50000', '#ff1919'];
  return colors[Math.floor(Math.random()*colors.length)];
}

draw_pizza();

//D3 Code for Bubble Chart
var run = false;
//var diameter;
//var textSize;

// media query event handler
if (matchMedia) {
  var big = window.matchMedia("(min-width: 788px)");
  var little = window.matchMedia("(max-width: 369px)");

  little.addListener(widthChange2);
  big.addListener(widthChange);

  widthChange2(little);
  widthChange(big);
}

// media query change
function widthChange(big) {
  if (big.matches) {
    // window width is at least 788px
    var diameter = 600;
    var textSize = '10px';
  } else {
    // window width less than 369px
    var diameter = 355;
    var textSize = '8px';
  }
  generateGraph(diameter, textSize);
}

function widthChange2(little) {
  if (little.matches) {
    // window width is at least 370px
    var diameter = 300;
    var textSize = '5px';
  } else {
    // window width less than 369px
    var diameter = 355;
    var textSize = '8px';
  }
  generateGraph(diameter, textSize);
}

function generateGraph(diameter, textSize) {
  var json = {
    "children": [
      {
        "skill":"JavaScript",
        "label": "JavaScript",
        "size": 2000
      },
      {
        "skill":"Angular",
        "label": "Angular",
        "size": 400
      },
      {
        "skill":"jQuery",
        "label": "jQuery",
        "size": 1000
      },
      {
        "skill":"HTML",
        "label": "HTML",
        "size": 1200
      },
      {
        "skill":"CSS",
        "label": "CSS",
        "size": 1200
      },
      {
        "skill":"Sass",
        "label": "Sass",
        "size": 750
      },
      {
        "skill":"ARIA",
        "label": "ARIA",
        "size": 100
      },
      {
        "skill":"Node",
        "label": "Node.js",
        "size": 700
      },
      {
        "skill":"Express",
        "label": "Express",
        "size": 700
      },
      {
        "skill":"MongoDB",
        "label": "MongoDB",
        "size": 500
      },
      {
        "skill":"Gulp",
        "label": "Gulp",
        "size": 600
      },
      {
        "skill":"Webpack",
        "label": "Webpack",
        "size": 350
      },
      {
        "skill":"Karma",
        "label": "Karma",
        "size": 300
      },
      {
        "skill":"Mocha",
        "label": "Mocha",
        "size": 400
      },
      {
        "skill":"Chai",
        "label": "Chai",
        "size": 400
      },
      {
        "skill":"TDD",
        "label": "TDD",
        "size": 100
      },
      {
        "skill":"Git",
        "label": "Git",
        "size": 500
      },
      {
        "skill":"Linux",
        "label": "Linux",
        "size": 600
      },
      {
        "skill":"Funct_Programming",
        "label": "Funct Prog",
        "size": 860
      },
      {
        "skill":"OOP",
        "label": "OOP",
        "size": 860
      },
      {
        "skill":"Debugging",
        "label": "Debugging",
        "size": 700
      },
      {
        "skill":"DS_And_Algs",
        "label": "DS&Algs",
        "size": 400
      }
    ]
  }

  if (run) {
    $( "#oldsvg" ).remove();
    console.log('removed');
  }

  run = true;
  // D3 Bubble Chart
  var svg = d3.select('#graph').append('svg')
                               .attr('id', 'oldsvg')
                               .attr('width', diameter)
                               .attr('height', diameter);

  var bubble = d3.layout.pack()
                .size([diameter, diameter])
                .value(function(d) {return d.size;})
                .padding(3);

  // generate data with calculated layout values
  var nodes = bubble.nodes(json)
                    .filter(function(d) { return !d.children; }); // filter out the outer bubble

  var vis = svg.selectAll('circle')
               .data(nodes);


  vis.enter().append('circle')
             .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
             .attr('r', function(d) { return d.r; })
             .attr('class', function(d) { return d.skill.toLowerCase(); });

  var text = svg.selectAll("text")
                .data(nodes)
                .enter()
                .append("text");

  var textLabels = text.attr("x", function(d) { return d.x - (d.label.length * 2.5); })
                       .attr("y", function(d) { return d.y; })
                       .text( function (d) { return d.label })
                       .attr("font-size", textSize)
                       .attr("fill", "black");
}


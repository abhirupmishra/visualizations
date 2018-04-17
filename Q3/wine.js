var margin = {top: 20, right: 20, bottom: 20, left: 80},
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;


/* Part-a Plot-1*/
// setup y
var yValue = function(d) { return d.pH;}, 
    yScale = d3.scale.linear().range([height, 0]), 
    yAxis = d3.svg.axis().scale(yScale).orient("left");
var yAxisText = "pH";

// setup x (common for all the charts)
var xValue = function(d) { return d.alcohol;}, 
    xScale = d3.scale.linear().range([0, width]), 
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");
var xAxisText = "alcohol";    

var transformPoints = function(d) { return "translate(" + xScale(d.alcohol) + "," + yScale(d.pH) + ")"; }
var pointSize = function(d){return 25;};


var wrapperName = "#wrapper1"

/* Setting up the common parameters for all the charts*/
  // setup fill color
var  color = function(d){
  if (d.quality >= 6){ return "blue";}
  else {return "red";}
};

var  wineType = function(d){
  if (d.quality >= 6){ return "Good";}
  else {return "Bad";}
};

//legend color
var legendColor = function(d){
  if (d == "Good"){return "blue";}
  else {return "red";}
}

//creating the svg element
var svg = d3.select(wrapperName).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  


// load data
d3.csv("wine_quality.csv", function(error, data) {

  // change string (from CSV) into number format
  data.forEach(function(d) {
    //all the data
    d.residual_sugar = +d.residual_sugar;
    d.chlorides = +d.chlorides;
    d.free_sulfur_dioxide = +d.free_sulfur_dioxide;
    d.total_sulfur_dioxide = +d.total_sulfur_dioxide;
    d.Density = +d.Density;
    d.pH = +d.pH;
    d.sulphates = +d.sulphates; 
    d.alcohol = +d.alcohol;
    d.quality = +d.quality;
  });

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(data, xValue), d3.max(data, xValue)]);
  yScale.domain([d3.min(data, yValue), d3.max(data, yValue)]);

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text(xAxisText);

  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(yAxisText);

  // draw dots
  svg.selectAll(".point")
      .data(data)
      .enter()
      .append("path")
      .attr("fill","none")
      .attr("class", "point")
      .attr("d",d3.svg.symbol().type(function(d){
        if(d.quality >= 6) {return "cross"}
        else {return "circle"}
      }).size(25))
      .attr("transform", transformPoints)
      .attr("data-legend",wineType)
      .style("stroke", color);
  
  // draw legend
  var legend = svg.selectAll(".legend")
                  .data(["Good","Bad"])
                  .enter()
                  .append("g")
                  .attr("class", "legend")
                  .attr("transform", function(d, i) { return "translate(0," + i * 25 + ")"; });

  // draw legend colored rectangles
  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", legendColor);

  // draw legend text
  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d;})
  
});



/************************************************************************************************************************/

//plot-2 part-a
// setup x (common for all the charts)
var yValue1 = function(d1) { return d1.pH;}, 
    yScale1 = d3.scale.linear().range([height, 0]), 
    yAxis1 = d3.svg.axis().scale(yScale1).orient("left");
var yAxisText1 = "pH";

// setup x (common for all the charts)
var xValue1 = function(d1) { return d1.residual_sugar;}, 
    xScale1 = d3.scale.linear().range([0, width]), 
    xAxis1 = d3.svg.axis().scale(xScale1).orient("bottom");
var xAxisText1 = "residual sugar";    

var transformPoints1 = function(d1) { return "translate(" + xScale(d1.residual_sugar) + "," + yScale(d1.pH) + ")"; }
var pointSize1 = function(d1){return 25;};


var wrapperName1 = "#wrapper2"

/* Setting up the common parameters for all the charts*/
  // setup fill color
var  color1 = function(d1){
  if (d1.quality >= 6){ return "blue";}
  else {return "red";}
};

var  wineType1 = function(d1){
  if (d1.quality >= 6){ return "Good";}
  else {return "Bad";}
};

//legend color
var legendColor1 = function(d1){
  if (d1 == "Good"){return "blue";}
  else {return "red";}
}

//creating the svg element
var svg1 = d3.select(wrapperName1).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  

// load data
d3.csv("wine_quality.csv", function(error, data1) {

  // change string (from CSV) into number format
  data1.forEach(function(d1) {
    //all the data
    d1.residual_sugar = +d1.residual_sugar;
    d1.chlorides = +d1.chlorides;
    d1.free_sulfur_dioxide = +d1.free_sulfur_dioxide;
    d1.total_sulfur_dioxide = +d1.total_sulfur_dioxide;
    d1.Density = +d1.Density;
    d1.pH = +d1.pH;
    d1.sulphates = +d1.sulphates; 
    d1.alcohol = +d1.alcohol;
    d1.quality = +d1.quality;
  });

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale1.domain([d3.min(data1, xValue1), d3.max(data1, xValue1)]);
  yScale1.domain([d3.min(data1, yValue1), d3.max(data1, yValue1)]);

  // x-axis
  svg1.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis1)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text(xAxisText1);

  // y-axis
  svg1.append("g")
      .attr("class", "y axis")
      .call(yAxis1)
      .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(yAxisText1);

  // draw dots
  svg1.selectAll(".point")
      .data(data1)
      .enter()
      .append("path")
      .attr("fill","none")
      .attr("class", "point")
      .attr("d",d3.svg.symbol().type(function(d1){
        if(d1.quality >= 6) {return "cross"}
        else {return "circle"}
      }).size(25))
      .attr("transform", transformPoints1)
      .attr("data-legend",wineType1)
      .style("stroke", color1);
  
  // draw legend
  var legend1 = svg1.selectAll(".legend")
                  .data(["Good","Bad"])
                  .enter()
                  .append("g")
                  .attr("class", "legend")
                  .attr("transform", function(d, i) { return "translate(0," + i * 25 + ")"; });

  // draw legend colored rectangles
  legend1.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", legendColor1);

  // draw legend text
  legend1.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d1) { return d1;})
  
});


/**************************************************************************************************************/

var yValue2 = function(d2) { return d2.pH;}, 
    yScale2 = d3.scale.linear().range([height, 0]), 
    yAxis2 = d3.svg.axis().scale(yScale2).orient("left");
var yAxisText2 = "pH";

// setup x (common for all the charts)
var xValue2 = function(d2) { return d2.alcohol;}, 
    xScale2 = d3.scale.linear().range([0, width]), 
    xAxis2 = d3.svg.axis().scale(xScale2).orient("bottom");
var xAxisText2 = "alcohol";    

var transformPoints2 = function(d2) { return "translate(" + xScale(d2.alcohol) + "," + yScale(d2.pH) + ")"; }
var pointSize = function(d2){return Math.floor(150/d2.alcohol);};

var  color2 = function(d2){
  if (d2.quality >= 6){ return "blue";}
  else {return "red";}
};

var  wineType2 = function(d2){
  if (d2.quality >= 6){ return "Good";}
  else {return "Bad";}
};

//legend color
var legendColor2 = function(d2){
  if (d1 == "Good"){return "blue";}
  else {return "red";}
}

var wrapperName2 = "#wrapper3"

/* Setting up the common parameters for all the charts*/
  // setup fill color

//creating the svg element
var svg2 = d3.select(wrapperName2).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  


// load data
d3.csv("wine_quality.csv", function(error, data2) {

  // change string (from CSV) into number format
  data2.forEach(function(d2) {
    //all the data
    d2.residual_sugar = +d2.residual_sugar;
    d2.chlorides = +d2.chlorides;
    d2.free_sulfur_dioxide = +d2.free_sulfur_dioxide;
    d2.total_sulfur_dioxide = +d2.total_sulfur_dioxide;
    d2.Density = +d2.Density;
    d2.pH = +d2.pH;
    d2.sulphates = +d2.sulphates; 
    d2.alcohol = +d2.alcohol;
    d2.quality = +d2.quality;
  });

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale2.domain([d3.min(data2, xValue), d3.max(data2, xValue2)]);
  yScale2.domain([d3.min(data2, yValue), d3.max(data2, yValue2)]);

  // x-axis
  svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis2)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text(xAxisText2);

  // y-axis
  svg2.append("g")
      .attr("class", "y axis")
      .call(yAxis2)
      .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(yAxisText2);

  // draw dots
  svg2.selectAll(".point")
      .data(data2)
      .enter()
      .append("path")
      .attr("fill","none")
      .attr("class", "point")
      .attr("d",d3.svg.symbol().type(function(d2){
        if(d2.quality >= 6) {return "cross"}
        else {return "circle"}
      }).size(pointSize))
      .attr("transform", transformPoints2)
      .attr("data-legend",wineType2)
      .style("stroke", color2);
    
});









/**************************************************************************************************************/

var yValue4 = function(d4) { return d4.sulphates;}, 
    yScale4 = d3.scale.sqrt().range([height, 0]), 
    yAxis4 = d3.svg.axis().scale(yScale4).orient("left");
var yAxisText4 = "Suplhates";

// setup x (common for all the charts)
var xValue4 = function(d4) { return d4.pH;}, 
    xScale4 = d3.scale.linear().range([0, width]), 
    xAxis4 = d3.svg.axis().scale(xScale4).orient("bottom");
var xAxisText4 = "pH";    

var transformPoints4 = function(d4) { return "translate(" + xScale4(d4.pH) + "," + yScale4(d4.sulphates) + ")"; }
var pointSize = function(d4){return Math.floor(150/d4.alcohol);};

var  color4 = function(d4){
  if (d4.quality >= 6){ return "blue";}
  else {return "red";}
};

var  wineType4 = function(d4){
  if (d4.quality >= 6){ return "Good";}
  else {return "Bad";}
};

//legend color
var legendColor4 = function(d4){
  if (d4 == "Good"){return "blue";}
  else {return "red";}
}

var wrapperName4 = "#wrapper4"

/* Setting up the common parameters for all the charts*/
  // setup fill color

//creating the svg element
var svg4 = d3.select(wrapperName4).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  


// load data
d3.csv("wine_quality.csv", function(error, data4) {

  // change string (from CSV) into number format
  data4.forEach(function(d4) {
    //all the data
    d4.residual_sugar = +d4.residual_sugar;
    d4.chlorides = +d4.chlorides;
    d4.free_sulfur_dioxide = +d4.free_sulfur_dioxide;
    d4.total_sulfur_dioxide = +d4.total_sulfur_dioxide;
    d4.Density = +d4.Density;
    d4.pH = +d4.pH;
    d4.sulphates = +d4.sulphates; 
    d4.alcohol = +d4.alcohol;
    d4.quality = +d4.quality;
  });

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale4.domain([d3.min(data4, xValue4), d3.max(data4, xValue4)]);
  yScale4.domain([d3.min(data4, yValue4), d3.max(data4, yValue4)]);

  // x-axis
  svg4.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis4)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text(xAxisText4);

  // y-axis
  svg4.append("g")
      .attr("class", "y axis")
      .call(yAxis4)
      .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(yAxisText4);

  // draw dots
  svg4.selectAll(".point")
      .data(data4)
      .enter()
      .append("path")
      .attr("fill","none")
      .attr("class", "point")
      .attr("d",d3.svg.symbol().type(function(d4){
        if(d4.quality >= 6) {return "cross"}
        else {return "circle"}
      }).size(25))
      .attr("transform", transformPoints4)
      .attr("data-legend",wineType4)
      .style("stroke", color4);
    
});






/**************************************************************************************************************/

var yValue5 = function(d5) { return d5.sulphates;}, 
    yScale5 = d3.scale.log().range([height, 0]), 
    yAxis5 = d3.svg.axis().scale(yScale5).orient("left");
var yAxisText5 = "Suplhates";

// setup x (common for all the charts)
var xValue5 = function(d5) { return d5.pH;}, 
    xScale5 = d3.scale.linear().range([0, width]), 
    xAxis5 = d3.svg.axis().scale(xScale5).orient("bottom");
var xAxisText5 = "pH";    

var transformPoints5 = function(d5) { return "translate(" + xScale5(d5.pH) + "," + yScale4(d5.sulphates) + ")"; }

var  color5 = function(d5){
  if (d5.quality >= 6){ return "blue";}
  else {return "red";}
};

var  wineType5 = function(d5){
  if (d5.quality >= 6){ return "Good";}
  else {return "Bad";}
};

//legend color
var legendColor5 = function(d5){
  if (d5 == "Good"){return "blue";}
  else {return "red";}
}

var wrapperName5 = "#wrapper5"

/* Setting up the common parameters for all the charts*/
  // setup fill color

//creating the svg element
var svg5 = d3.select(wrapperName5).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  


// load data
d3.csv("wine_quality.csv", function(error, data5) {

  // change string (from CSV) into number format
  data5.forEach(function(d5) {
    //all the data
    d5.residual_sugar = +d5.residual_sugar;
    d5.chlorides = +d5.chlorides;
    d5.free_sulfur_dioxide = +d5.free_sulfur_dioxide;
    d5.total_sulfur_dioxide = +d5.total_sulfur_dioxide;
    d5.Density = +d5.Density;
    d5.pH = +d5.pH;
    d5.sulphates = +d5.sulphates; 
    d5.alcohol = +d5.alcohol;
    d5.quality = +d5.quality;
  });

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale5.domain([d3.min(data5, xValue5), d3.max(data5, xValue5)]);
  yScale5.domain([d3.min(data5, yValue5), d3.max(data5, yValue5)]);

  // x-axis
  svg5.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis5)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text(xAxisText5);

  // y-axis
  svg5.append("g")
      .attr("class", "y axis")
      .call(yAxis5)
      .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(yAxisText5);

  // draw dots
  svg5.selectAll(".point")
      .data(data5)
      .enter()
      .append("path")
      .attr("fill","none")
      .attr("class", "point")
      .attr("d",d3.svg.symbol().type(function(d5){
        if(d5.quality >= 6) {return "cross"}
        else {return "circle"}
      }).size(25))
      .attr("transform", transformPoints5)
      .attr("data-legend",wineType5)
      .style("stroke", color5);
    
});
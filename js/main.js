//  $(document).ready(function () {
//
//             $('body').ruler({
//     unit: 'mm',
//     tickMajor: 10,
//     tickMinor: 5,
//     tickMicro: 1,
//     showLabel: true,
//     arrowStyle:'arrow'
// });
//          });

function getActualWidth()
{
    var actualWidth = window.innerWidth ||
                      document.documentElement.clientWidth ||
                      document.body.clientWidth ||
                      document.body.offsetWidth;

    console.log(actualWidth) ;
    return actualWidth;
}

function getActualHeight()
{
    var actualHeight = window.innerHeight ||
                      document.documentElement.clientHeight ||
                      document.body.clientHeight ||
                      document.body.offsetHeight;
    console.log(actualHeight) ;
    return actualHeight;
}

function empty(eltid) {
  var elt = document.getElementById(eltid);
//   while(svg.firstChild){
//     element.removeChild(element.firstChild);
// }
while (elt.lastChild) {
    elt.removeChild(elt.lastChild);
}
}


function newmm() {
  //var svgstage = document.getElementById("svgstage");
  empty("s");
  var text ="this is a test!";
  drawmmnode(text);
  // document.getElementById("svgstage").innerHTML = "";
  //var w = xcanvas.innerWidth();

}

function drawmmnode(text){
   var textSize = measure(text, "nodetext");
   var x,y,h,w;
   h=textSize.height + 2;
   w=textSize.width + 2;
   x=(getActualWidth() + w)/2;
   y=(getActualHeight() + h)/2;
   var rect = makeSVG('rect',{x: x, y: y, height: h, width: w, stroke: 'black', 'stroke-width': 2, fill: "rgba(124,240,10,0.5)"});
   document.getElementById('s').appendChild(rect);

  //  var circle= makeSVG('circle', {cx: x, cy: y, r:70, stroke: 'black', 'stroke-width': 2, fill: 'red'});
  //  document.getElementById('s').appendChild(circle);
};
//  var t = document.getElementById("nodetext").value;
 // var sampleSVG = d3.select("body")
 //                 .append("svg:svg")

 //                 .attr("width", 100)
 //                 .attr("height", 100);

 //        sampleSVG.append("svg:circle")
 //                 .style("stroke", "gray")
 //                 .style("fill", "white")
 //                 .attr("r", 40)
 //                 .attr("cx", 50)
 //                 .attr("cy", 50)
 //                 .on("mouseover", function() {
 //                      d3.select(this).style("fill", "aliceblue");
 //                 })
 //                 .on("mouseout", function() {
 //                      d3.select(this).style("fill", "white");}
 //                 );


//  var titleSize = measure("Title of Diagram", "title");
//  console.log(titleSize);

// // create a dummy element, apply the appropriate classes,
// // and then measure the element

 function measure(text, classname) {
    if(!text || text.length === 0) return {height: 0, width: 0};

    var container = d3.select('body').append('svg').attr('class', classname);
    container.append('text').attr({x: -1000, y: -1000}).text(text);

    var bbox = container.node().getBBox();
    container.remove();

    return {height: bbox.height, width: bbox.width};
}



function init() {
var c=document.getElementById('container');
var strHtml = "<svg id='s' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ";
var w=getActualWidth();
var h=getActualHeight();
strHtml+=w + " " + h +"' ><\/svg>";
c.style.width=w + "px";
c.style.height=h + "px";
c.innerHTML=strHtml;
// document.body.style.overflow = 'hidden';  // firefox, chrome
// document.body.scroll = "no";
 }
 function makeSVG(tag, attrs) {
            var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
            for (var k in attrs)
                el.setAttribute(k, attrs[k]);
            return el;
        }
function cer(){
    var x=(getActualWidth()-100)/2;
    var y=250;
    var circle= makeSVG('circle', {cx: x, cy: y, r:70, stroke: 'black', 'stroke-width': 2, fill: 'red'});
 document.getElementById('s').appendChild(circle);

}
function createNodeText2(){
  var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  var x=(getActualWidth()-100)/2;
    var y=250;
  text.setAttribute('x', x);
  text.setAttribute('y', y);
  text.setAttribute('fill', '#000');
  t=document.getElementById("mm-title2").value;
  text.textContent = t;
  document.getElementById('s').appendChild(text);
}
//c.setAttribute('style','width:' + w +'px;height:500px;');

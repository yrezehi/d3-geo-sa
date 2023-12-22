var width = document.documentElement.scrollWidth;
var height = document.documentElement.scrollHeight;

var scale = 1500;

d3.json("../saudi.json").then(function(data) {
    const projection = d3.geoMercator().scale(scale).translate([(width / scale) - (scale / 4), height / 0.75]);
    const pathGenerator = d3.geoPath().projection(projection);
    svg = d3.select("#map").append("svg").attr("width", width).attr("height", height);
    svg.selectAll("path").data(data.features).enter().append("path").attr("d", pathGenerator).style("fill", "steelblue").style("stroke", "white");
}).catch(function (error) {
    console.error(error);
});

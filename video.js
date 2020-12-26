window.onload = function() {
  var yef = document.getElementById("youtubembed");
  yef.style = "border:none; width:560; height:315;"
  yef.width = 560
  yef.height = 315
  yef.scrolling = "no"
  yef.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+yef.innerHTML+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
};

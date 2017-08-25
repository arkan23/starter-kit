$(function(){
  for(var a=[],b=[],c=0;354>c;c+=31)
  a.push([c,Math.random(c)]),
  b.push([c,Math.random(c)]);
  var d=$.plot($("#data-example-1"),
  [{data:a,label:"Today"},{data:b,label:"Yesterday"}],
  {series:{shadowSize:0,lines:{show:!0,lineWidth:2},points:{show:!0}},grid:{labelMargin:10,hoverable:!0,clickable:!0,borderWidth:1,borderColor:"rgba(82, 167, 224, 0.06)"},legend:{backgroundColor:"#fff"},yaxis:{tickColor:"rgba(0, 0, 0, 0.06)",font:{color:"rgba(0, 0, 0, 0.4)"}},xaxis:{tickColor:"rgba(0, 0, 0, 0.06)",font:{color:"rgba(0, 0, 0, 0.4)"}},colors:[getUIColor("success"),getUIColor("gray")],tooltip:!0,tooltipOpts:{content:"x: %x, y: %y"}});
  $("#data-example-1").bind("plothover",function(a,b,c){$("#x").text(b.x.toFixed(2)),$("#y").text(b.y.toFixed(2))}),
  $("#data-example-1").bind("plotclick",function(a,b,c){c&&($("#clickdata").text("You clicked point "+c.dataIndex+" in "+c.series.label+"."),d.highlight(c.series,c.datapoint))})
}),
$(function(){
  function a(){$.plot("#data-example-2",[b,d,e,f],{series:{shadowSize:0,stack:g,lines:{show:i,lineWidth:1},bars:{show:h,lineWidth:1}},grid:{labelMargin:10,borderWidth:0},legend:{backgroundColor:"#fff"},yaxis:{tickColor:"rgba(0, 0, 0, 0.06)",font:{color:"rgba(0, 0, 0, 0.4)"}},xaxis:{tickColor:"rgba(0, 0, 0, 0.06)",font:{color:"rgba(0, 0, 0, 0.4)"}},colors:[getUIColor("default"),getUIColor("warning"),getUIColor("danger"),getUIColor("primary")],tooltip:!0,tooltipOpts:{content:"x: %x, y: %y"}})}
    for(var b=[],c=0;10>=c;c+=1)b.push([c,parseInt(30*Math.random())]);
    for(var d=[],c=0;10>=c;c+=1)d.push([c,parseInt(30*Math.random())]);
    for(var e=[],c=0;10>=c;c+=1)e.push([c,parseInt(30*Math.random())]);
    for(var f=[],c=0;10>=c;c+=1)f.push([c,parseInt(30*Math.random())]);
    var g=0,h=!0,i=!1,j=!1;
    a(),$(".stackControls button").click(function(b){b.preventDefault(),g="With stacking"==$(this).text()?!0:null,a()}),
    $(".graphControls button").click(function(b){b.preventDefault(),h=-1!=$(this).text().indexOf("Bars"),i=-1!=$(this).text().indexOf("Lines"),j=-1!=$(this).text().indexOf("steps"),a()})
  }),
$(function(){
  function a(){for(c.length>0&&(c=c.slice(1));c.length<d;){var a=c.length>0?c[c.length-1]:50,b=a+10*Math.random()-5;0>b?b=0:b>100&&(b=100),c.push(b)}for(var e=[],f=0;f<c.length;++f)e.push([f,c[f]]);return e}
  function b(){f.setData([a()]),f.draw(),setTimeout(b,e)}
  var c=[],d=300,e=30,f=$.plot("#data-example-3",[a()],{series:{lines:{show:!0,lineWidth:2,fill:.5,fillColor:{colors:[{opacity:.01},{opacity:.08}]}},shadowSize:0},grid:{labelMargin:10,hoverable:!0,clickable:!0,borderWidth:1,borderColor:"rgba(82, 167, 224, 0.06)"},yaxis:{min:0,max:150,tickColor:"rgba(0, 0, 0, 0.06)",font:{color:"rgba(0, 0, 0, 0.4)"}},xaxis:{show:!1},colors:[getUIColor("default"),getUIColor("gray")]});
  b()
}),
$(function(){
  function a(a,b){return"<div style='font-size:12px; text-align:center; padding:5px; color:white;'>"+a+"<br/>"+Math.round(b.percent)+"%</div>"}
  for(var b=[{label:"Asia",data:111963e4,color:getUIColor("info")},{label:"Latin America",data:69095e4,color:getUIColor("warning")},{label:"Africa",data:101296e4,color:getUIColor("danger")},{label:"Oceania",data:51e5,color:getUIColor("gray")},{label:"Europe",data:72708e4,color:getUIColor("primary")},{label:"North America",data:34412e4,color:getUIColor("success")}],c=[],d=Math.floor(5*Math.random())+3,e=0;d>e;e++)
  c[e]={label:"Series"+(e+1),data:Math.floor(100*Math.random())+1};
  $.plot("#data-donut-1",b,{series:{pie:{innerRadius:.5,show:!0}}}),
  $.plot("#data-donut-2",b,{series:{pie:{show:!0}},tooltip:!0,tooltipOpts:{content:"%p.0%, %s"},grid:{hoverable:!0,clickable:!0}}),
  $.plot("#data-donut-3",b,{series:{pie:{show:!0,radius:500,label:{show:!0,formatter:a,threshold:.1}}},legend:{show:!1}})
});

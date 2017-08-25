$(function(){
  for(var a=[],b=[],c=0;354>c;c+=31)
  a.push([c,Math.random(c)]),
  b.push([c,Math.random(c)]);
  var d=$.plot(
    $("#data-example-1"),
    [{data:a,label:"Today"},{data:b,label:"Yesterday"}],
    {series:{shadowSize:0,lines:{show:!0,lineWidth:2},points:{show:!0}},
     grid:{labelMargin:10,hoverable:!0,clickable:!0,borderWidth:1,borderColor:"rgba(82, 167, 224, 0.06)"},
     legend:{backgroundColor:"#fff"},
     yaxis:{tickColor:"rgba(0, 0, 0, 0.06)",font:{color:"rgba(0, 0, 0, 0.4)"}},
     xaxis:{tickColor:"rgba(0, 0, 0, 0.06)",font:{color:"rgba(0, 0, 0, 0.4)"}},
     colors:[getUIColor("success"),getUIColor("gray")],
     tooltip:!0,
     tooltipOpts:{content:"x: %x, y: %y"}
   });

    $("#data-example-1").bind("plothover",function(a,b,c){$("#x").text(b.x.toFixed(2)),$("#y").text(b.y.toFixed(2))}),
    $("#data-example-1").bind("plotclick",function(a,b,c){c&&($("#clickdata").text("You clicked point "+c.dataIndex+" in "+c.series.label+"."),d.highlight(c.series,c.datapoint))})
  });

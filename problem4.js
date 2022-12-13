function show(a){
    var a=document.getElementById("num").value;
    var cal=0;
    for (i=1;i<=a;i++) {
      if(i%3==0){
       cal+=i;
      }else if(i%5==0){
         cal+=i;
      }}

      alert(cal) 
}
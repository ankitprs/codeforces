let c , ar=[];
$.ajax({
  method:'GET',
  url:"https://codeforces.com/api/user.ratedList?activeOnly=true",
  success:function(response){
      ar=response.result;
      console.log(response)
      c = Object.keys(response.result).length;
      let table=document.getElementById("mytable");
      table.innerHTML+="";
      let tr="";
      for(let i=0;i<10;i++){
        tr+='<tr>';
        tr+= '<td>'+(i+1)+'</td>'+
             '<td>'+ar[i].firstName+" "+ar[i].lastName+'</td>'+
             '<td>'+ar[i].rating+'</td>'+
             '<td>'+ar[i].maxRating+'</td>';
        tr+='</tr>';
      }
      table.innerHTML+=tr;

  }
})

$.ajax({
  method:'GET',
  url:"https://codeforces.com/api/contest.list?gym=true",
  success:function(response){
      let arr=response.result;
      console.log(response)
      let table=document.getElementById("myTable");
      table.innerHTML+="";
      let tr="";
      let count = Object.keys(response.result).length;        
      for(let i=4;i>=0;i--){
        tr+='<tr>';
        tr+='<td>'+(-i+5)+'</td>'+
        '<td>'+arr[count-i-1].name+'</td>'+
        '<td>'+arr[count-i-1].type+'</td>';
        tr+='</tr>';
      }
      table.innerHTML+=tr;
    }
  })






function fun1(){
  let str=document.getElementById("text1").value;
  console.log(ar)
  let flag=1;

  while(c)
  {
    c--;
    if(ar[c].handle==str)
    {
      let table=document.getElementById("tableid");
      table.innerHTML+="";
      let tr="";

      tr+='<tr>';
      tr+= '<th>'+"Name"+
           '<th>'+"Friend of Count"+'</th>'+
           '<th>'+"Rating"+'</th>'+
           '<th>'+"Contribution"+'</th>'+
           '<th>'+"Organization"+'</th>';
      tr+='</tr>';
        tr+='<tr>';
        tr+= '<td>'+ar[c].firstName+" "+ar[c].lastName+'</td>'+
             '<td>'+ar[c].friendOfCount+'</td>'+
             '<td>'+ar[c].rating+'</td>'+
             '<td>'+ar[c].contribution+'</td>'+
             '<td>'+ar[c].organization+'</td>';
        tr+='</tr>';
      table.innerHTML+=tr;

      flag--;
      break;
    }
  }
  if(flag===1){
    document.getElementById("demo").innerHTML = "SORRY NOT EXSIT";

  }
}


//  const axios = require('axios');



      //get website Json
 const getpic = async() => {                                                     
     
     return await axios({
       
     
      url:  'https://picsum.photos/v2/list?page=1&limit=45'
      
    
})
     }
     

         //get download URL
     (async() => {
        const pic = await getpic()

         console.log(pic.data[1]['download_url'])                                 

        //  let btn1 = document.createElement('button')
        //  document.getElementsByClassName('header').appendChild(btn1) 

        for (i=0 ; i<pic.data.length; i++)
        {
          if (i%15==0) 
           {
               
              let btn1 = document.createElement('button');
              btn1.name = `${i}` 
              btn1.id="b"
              
                 
              document.getElementById("myheader").appendChild(btn1)            
           } 
             



        let item = document.createElement('img')
        var x = pic.data[i]['download_url']
        item.src=x
    
        // document.getElementById("column").appendChild(item)
        if (i<=14) {document.getElementById("column1").appendChild(item)}
        else if (14<i , i<=29) {document.getElementById("column2").appendChild(item)}
        else if (29<i ,i<=44) {document.getElementById("column3").appendChild(item)}
        else if (44<i ,i<60) {document.getElementById("column4").appendChild(item)}
        // document.getElementById("column").appendChild(item)
        }
       
           
        // function myFunction()
        // {
        //   if (i<=14) {document.getElementById("click").appendChild(item)}
        // }
       
       










     })()

     

   

    //  var i;
     
    //  function show()
    //  {
    //     
    //      for (let i = 0; i < pic.data.length; i++)
    //       {
    //          
    //          let item = document.createElement('img')
    //          var x = pic.data[i]['download_url']
    //          item.src=x 
    //          var element = document.getElementById("column");  
    //          if (i<=5) {element.appendChild(item)}
    //          else if (5<i , i<=11) {element.appendChild(item)}
    //          else if (11<i ,i<=17) {element.appendChild(item)}      
    //      }
    //  }
    //  var header = document.getElementById("myheader");
    //  var btns = header.getElementsByClassName("btn");
    //  for (let i = 0; i < btns.length; i++) 
    //  {
       
         
    //  }

    //  for ( i in getpic.pic.data.length)
    //   {
    //      const element = array[];
         
    //  }




     
     



 


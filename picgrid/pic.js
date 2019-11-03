let picarray = new Array();

let info = "";

//    document.getElementById('div').innerHTML=show(99);
//    function show(u)
//    {
document.getElementById("divv").innerHTML = "";
//get website Json
const getpic = async () => {

    return await axios({


        url: 'https://picsum.photos/v2/list?page=1&limit=100'


    })
}



//get download URL
(async () => {
    const pic = await getpic()

    //  console.log(pic.data[1]['download_url'])      
    //  console.log(pic.data)                                

    var likes = new Array();
    localStorage.setItem("like", 0);
    for (var i = 0; i < pic.data.length; i++) {
        
       likes.push("like",0);
       

        let d = create('div');
        let item = create('img')
        //  let d2 = create('div');

        let b1 = create('button')
        let b2 = create('a')
        let b3 = create('a')


      

        var x = pic.data[i]['download_url'];
        var y = pic.data[i]['author'];
        var w = pic.data[i]['width'];
        var h = pic.data[i]['height'];


      

        d.id = `ali${i}`;
        item.id = "img1";
        item.src = x;
        item.alt = y;
        item.title = y;
        item.width = w;
        item.height = h;
        b1.className =  "b1";
        b1.id = `c${i}`
        b2.className = "b2";
        b2.id = `b2${i}`
        b3.className = "b3";
        b3.id = `b3${i}`



        append("divv", d)
        append(d.id, item)
        append(d.id, b1)
        append(d.id, b2)
        append(d.id, b3)
      
       
        

        


        if (h / w > 1.5) {
            let selectt = document.getElementById(`ali${i}`);
            selectt.className = "span";
        }

      
        document.getElementById(`c${i}`).addEventListener('click',function(){
           
            // console.log( document.getElementById(b1.id))
            if (likes[i]==0)
            {
            document.getElementById(b1.id).style.backgroundImage = "url('iconfinder_heasssrt_1055045.png')"
            likes[i]=1;
            }
            else
            {
                document.getElementById(b1.id).style.backgroundImage = "url('iconfinder_heart_1055045.png')"
                likes[i]=0;
            }
        })
          
        document.getElementById(`b2${i}`).addEventListener('click',function(){

            var x = document.getElementById(d.id)
            var a=x.firstChild.src
            
           alert(a)
        })

        document.getElementById(`b3${i}`).addEventListener('click',function(){

            var x = document.getElementById(d.id)
            var a=x.firstChild.src
            
            
              navigator.clipboard.writeText(a); 

            console.log( navigator.clipboard.writeText(a))
            window.open(a)
        })
         
        


     
       

    }
   
})()





function create(string) {
    return document.createElement(string);
}


function append(id, string) {
    document.getElementById(id).appendChild(string);
}







function search() {



    document.getElementById("divv").innerHTML = "";
    //get website Json



    const getpic = async () => {

        return await axios({


            url: 'https://picsum.photos/v2/list?page=' + `${p}` + '&limit=100'


        })
    }
    for (p = 1; p < 11; p++)
        (async () => {
            const pic = await getpic()

            //  console.log(pic.data[1]['download_url'])      
            //  console.log(pic.data)                                

            var z = document.getElementById("Searchword").value;
          
            for (i = 0; i < pic.data.length; i++) {

                var y = pic.data[i]['author'];

                if (y.includes(z)) {
                    let d = create('div');
                    let item = create('img')
                    //  let d2 = create('div');
                    let b1 = create('button')
                    let b2 = create('a')
                    let b3 = create('a')


                    var x = pic.data[i]['download_url'];
                    var y = pic.data[i]['author'];
                    var w = pic.data[i]['width'];
                    var h = pic.data[i]['height'];

                    d.id = `ali${i}`;
                    item.src = x;
                    item.alt = y;
                    item.title = y;
                    item.width = w;
                    item.height = h;
                    b1.id = "b1";
                    b2.id = "b2";
                    b3.id = "b3";
                    item.id = "img1";



                    append("divv", d)
                    append(d.id, item)
                    // append(d.id,d2)
                    append(d.id, b1)
                    append(d.id, b2)
                    append(d.id, b3)

                    if (h / w > 1.4) {
                        let selectt = document.getElementById(`ali${i}`);
                        selectt.className = "span";
                    }
                }
            }

        })()

}


function share()
{
    var x = document.getElementById(`ali${i}`)
    var a=x.childNodes;
  

}


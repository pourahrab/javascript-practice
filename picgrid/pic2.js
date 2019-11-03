var picarray = new Array();

var width;
var height;
var url;
var author;

var i;

//    document.getElementById('div').innerHTML=show(99);
//    function show(u)
//    {
document.getElementById("divv").innerHTML = "";
//get website Json
const getpic = async () => {

    return await axios({

        url: 'https://picsum.photos/v2/list?page=' + `${p}` + '&limit=100'



    })
}

for (p = 1; p < 11; p++)

    //get download URL
    (async () => {
        const pic = await getpic()

        for (let i = 0; i < picarray.length; i++) {

            picarray.push(picarray[i]);


            // width = picarray[i]["width"],
            // height = picarray[i]["height"],
            // url += picarray[i]["download_url"],
            // author = picarray[i]["author"]


        }
        // console.log(pic);
        // console.log(picarray);

        // console.log(picarray[99]['download_url']);

    })()
for (var i = 0; i < picarray.length; i++) {

    let d = create('div');
    let item = create('img')
    //  let d2 = create('div');
    let like = create('a')
    let b1 = create('button')
    let b2 = create('a')
    let b3 = create('a')
    // b1.innerHTML="123";
    // b4=create("img");
    // document.getElementById("b1").appendChild(b4);
    // b4.src = "Search-512.png"




    var x = picarray[i]['download_url'];
    var y = picarray[i]['author'];
    var w = picarray[i]['width'];
    var h = picarray[i]['height'];




    d.id = `ali${i}`;
    //  d2.id = `a${i}`;
    like.src = "star.png";
    like.id = "likea"
    like.className = `like${i}`
    item.id = "img1";
    item.src = x;
    item.alt = y;
    item.title = y;
    item.width = w;
    item.height = h;
    b1.id = "b1";

    b2.id = "b2";
    b3.id = "b3";



    append("divv", d)
    append(d.id, item)
    // append(d.id,d2)
    append(d.id, like)
    append(d.id, b1)
    append(d.id, b2)
    append(d.id, b3)







    if (h / w > 1.5) {
        let selectt = document.getElementById(`ali${i}`);
        selectt.className = "span";
    }




}




function create(string) {
    return document.createElement(string);
}


function append(id, string) {
    document.getElementById(id).appendChild(string);
}


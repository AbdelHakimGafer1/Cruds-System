let title=document.getElementById('tittle'),
price=document.getElementById('price'),
taxes=document.getElementById('Taxes'),

ads=document.getElementById('Ads'),
discount=document.getElementById('Discount'),
total=document.getElementById('total'),
count=document.getElementById('Count'),

category=document.getElementById('Category'),
submit=document.getElementById('submit');
const bodydata=document.getElementById('tbody');
const circletotop=document.querySelector('.circletotop');

let  Des=document.getElementById('des');
let details =document.querySelector('.details');
let Crud=document.querySelector('.crud');
let detailsdes=document.getElementById('detailsdes');



// test funC 
let testFUNC=()=>{
    let arrtest =[1,2,3,4];
    let result=[];

    let Firstarrtest=[];
    let num1=1;
    for (let i = 0; i < arrtest.length; i++) {
        // console.log(num1);
        console.log(num1);
        Firstarrtest[i]=num1;
        num1*=arrtest[i];
        console.log(Firstarrtest);
        // console.log(num1);
    }

 num2=1;
for (let j = arrtest.length-1; j >=0 ; j--) {
// console.log(j);    
// result.push(j)
console.log(Firstarrtest[j]);
result[j]= Firstarrtest[j] * num2;
console.log(result[j]);
num2 *= arrtest[j];
}
console.log(result);
}
testFUNC();




Des.onkeyup=()=>{
    localStorage.setItem('des',JSON.stringify(Des.value));
} 
if (Des.value) {
    Des.value='';
}else if(Des.value!=''){
        Des.value=localStorage.getItem('des');
}
console.log(title,price,taxes,ads,discount,total,count,category,submit);
let arrVariabls =[taxes,ads,discount,total,count,category,submit]
// console.log(arrVariabls);
let MOodsystem='create';
let tempvariable;
let modeSearch ='Title';

const GetDataTotal=()=>{

    if (price.value =='') {

        for (let index = 0; index < arrVariabls.length; index++) {
            // console.log(arrVariabls[index]);
            arrVariabls[index].disabled=true;
            total.style.backgroundColor='#ff0000';
            total.innerHTML='';
                    alert(''Plz Add Proudct);
        return
        }
    }else if (price!='') {
        for (let index = 0; index < arrVariabls.length; index++) {
            // console.log(arrVariabls[index]);
            arrVariabls[index].disabled=false;
        }
        let result=(+price.value + +taxes.value + +ads.value)- +discount.value;
        total.innerHTML=result;
        total.style.backgroundColor='#040';
    }
}
GetDataTotal();


//// Clear Input

    let arraydatacontainer;
    if (localStorage.products!=null) {
        arraydatacontainer=JSON.parse(localStorage.products)
    }else{
        arraydatacontainer=[];
    }
    submit.addEventListener('click',()=>{
                if (price.value =='') {
            alert('Please Add Product');
            return;
        }else if(category.value==''){
            alert('Plz add Category OF Product');
            return
        }
        for (let index = 0; index < arraydatacontainer.length; index++) {

            let price_now1=  document.getElementById('price_now1');
        let price_now2 ;
        price_now2 += +arraydatacontainer[index].total;
        console.log(price_now2);
            console.log(price_now1);
        }



          const newdataadd={
            title:title.value.toLowerCase(),
            des:Des.value,
            price:price.value,
            taxes:taxes.value,
            ads:ads.value,
            discount:discount.value,
            total:total.innerHTML,
            count:count.value,
            category:category.value.toLowerCase(),
          }

          if (MOodsystem==='create') {
            
              if (newdataadd.count>1) {
                for (let index = 0; index <newdataadd.count ; index++) {    
                    arraydatacontainer.push(newdataadd);
                }
              }else{
                arraydatacontainer.push(newdataadd);
              }

          }else{
arraydatacontainer[tempvariable]=newdataadd;
submit.innerHTML='Create';
submit.style.color='rgba(0,255,0)';
MOodsystem='create';
          }
          console.log(newdataadd);
          console.log(tempvariable);
          localStorage.setItem('products',JSON.stringify(arraydatacontainer));
          console.log(arraydatacontainer);
          DataDisblayingforuser();
          ClearInputs();
    })

const ClearInputs=()=>{
    title.value='';
    Des.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
};

function DataDisblayingforuser(){
     let table="";
for (let index = 0; index < arraydatacontainer.length; index++) {
    table+=`
    <tr>
    <td>${index+1}-</td>
    <td>${arraydatacontainer[index].title}</td>
    <td>${arraydatacontainer[index].price}</td>
    <td>${arraydatacontainer[index].taxes}</td>
    <td>${arraydatacontainer[index].ads}</td>
    <td>${arraydatacontainer[index].discount}</td>
    <td>${arraydatacontainer[index].total}</td>
    <td>${arraydatacontainer[index].category}</td>
     <td><button id="delete"   onclick="deletedatafromindex(${index})" >Delete</button></td>
    <td><button onclick="ubadtedatafromindex(${index})"  id="ubadte">Update</button></td>
    </tr>
    <hr style='width:100%;height:2px;color:red;postion:absolute'>
    `
    // let result=(+price.value + +taxes.value + +ads.value)- +discount.value;
    // document.getElementById('price_now').innerHTML +=  Number(+result*count.value)  ;
    // document.getElementById('price_now').innerHTML+= +(arraydatacontainer[index].total)
    bodydata.innerHTML=table;
    let deleteall=document.getElementById('deleteall');
    if (arraydatacontainer.length > 0) {
        deleteall.innerHTML=`<button style='color:red' onclick="deleteall()" id="Deleteall">Delete All <span style='color:red;margin:15px'>( ${arraydatacontainer.length} ) </span> </button>`
    }else{
        document.getElementById('Deleteall').style.display='none';
    }
    // console.log(bodydata);
    // console.log(table);
}

}
DataDisblayingforuser();
const deletedatafromindex=(ind)=>{
    arraydatacontainer.splice(ind,1);

    localStorage.products=JSON.stringify(arraydatacontainer);
    window.location.reload();
    DataDisblayingforuser();
};

const deleteall=()=>{
    localStorage.clear();
    arraydatacontainer.splice(0);
    DataDisblayingforuser();
    window.location.reload();
}

const ubadtedatafromindex=(index)=>{
  console.log(index);
  scroll({
    top:0,
    behavior:'smooth'
  })
  title.value=arraydatacontainer[index].title;
  Des.value=arraydatacontainer[index].des;
  price.value=arraydatacontainer[index].price;
  taxes.value=arraydatacontainer[index].taxes;
  ads.value=arraydatacontainer[index].ads;
  discount.value=arraydatacontainer[index].discount;
  total.innerHTML=arraydatacontainer[index].total;
  count.style.display='none';
//   count.value=arraydatacontainer[index].count;
  category.value=arraydatacontainer[index].category;
  GetDataTotal();
  submit.style.color='red';
  submit.innerHTML='Update';
  MOodsystem='update';
  tempvariable=index;
};
circletotop.addEventListener('click',()=>{
    scroll({
        top:0,
        behavior:'smooth'
      })
})

// const DetailsFunc=(index)=>{
//     console.log(index);
//     details.style.display='block';
//     Crud.style.display='none'
//     detailsdes.innerHTML=Des.value;
//     console.log(detailsdes);
// }

// Search Opration In this Project 

const searchByMode=(id)=>{
//   console.log('====================================');
//   console.log(id);
//   console.log('====================================');
let search= document.getElementById("Search");
if (id==='SearchTitle') {
    modeSearch='Title';
    
}
else{
    modeSearch='Category';
}
search.placeholder=`Search By ${modeSearch} `;
search.focus();
search.value='';
DataDisblayingforuser();
// window.location.reload();
}

//// function to Search In Big Data And Call Displaying a Data In The Table 

const searchbigdata=(value)=>{
    let table ="";
    for (let index = 0; index < arraydatacontainer.length; index++) {

        if (modeSearch=="Title") {
    
    
                let usreinputCHars=document.getElementById('Search').value.split('');
                console.log(usreinputCHars[0]);
            //     if (arraydatacontainer[index].title !=usreinputCHars[index] && document.getElementById('Search').value!='' ) {
            // // alert('The Product Not Founded')
            // console.log('not founded Chars');
            //     }
                if (arraydatacontainer[index].title.includes(value.toLowerCase())) {
                    document.getElementById('Search').style.color='rgb(28, 226, 77)';
                    console.log('founded');
                    table+=`
                    <tr>
                    <td>${index+1}-</td>
                    <td>${arraydatacontainer[index].title}</td>
                    <td>${arraydatacontainer[index].price}</td>
                    <td>${arraydatacontainer[index].taxes}</td>
                    <td>${arraydatacontainer[index].ads}</td>
                    <td>${arraydatacontainer[index].discount}</td>
                    <td>${arraydatacontainer[index].total}</td>
                    <td>${arraydatacontainer[index].category}</td>
                    <td><button id="delete"   onclick="deletedatafromindex(${index})" >Delete</button></td>
                    <td><button onclick="ubadtedatafromindex(${index})"  id="ubadte">Update</button></td>
                    </tr>
                    <br><span>
                    <hr style="color:rgba(0,255,0);height: 2px;width:50px;postion:absolute;background:'red'">
                    <span/>
                    `
                }else{
                    console.log('Not');
                    console.log('Not Founded');
                    document.getElementById('Search').placeholder='Product Not Founded ';
                    document.getElementById('Search').placeholderColor='red'
                    document.getElementById('Search').style.color='red';
                }
        }
        else{
                if (arraydatacontainer[index].category.includes(value.toLowerCase())) {
                    console.log('Founded Exatly');
                    document.getElementById('Search').style.color='rgb(28, 226, 77)';
                    table+=`
                    <tr>
                    <td>${index+1}-</td>
                    <td>${arraydatacontainer[index].title}</td>
                    <td>${arraydatacontainer[index].price}</td>
                    <td>${arraydatacontainer[index].taxes}</td>
                    <td>${arraydatacontainer[index].ads}</td>
                    <td>${arraydatacontainer[index].discount}</td>
                    <td>${arraydatacontainer[index].total}</td>
                    <td>${arraydatacontainer[index].category}</td>
                    <td><button id="delete"   onclick="deletedatafromindex(${index})" >Delete</button></td>
                    <td><button onclick="ubadtedatafromindex(${index})"  id="ubadte">Update</button></td>
                    </tr>
                    <br><span>
                    <hr style="color:rgba(0,255,0);height: 2px;width:50px;postion:absolute;background:'red'">
                    <span/>
                    `
                }else{
                    console.log('Not Founded');
                    document.getElementById('Search').placeholder='Product Not Founded ';
                    document.getElementById('Search').style.color='red';
                }         
        }
    }
    
    
    bodydata.innerHTML=table;
}
// document.getElementById('Search').onkeyup=()=>{
    
//     for (let index = 0; index < arraydatacontainer.length; index++) {
        
//         let usreinputCHars=document.getElementById('Search').value.split("");
//         console.log(usreinputCHars);
//         if (arraydatacontainer[index].title !=usreinputCHars[index] && document.getElementById('Search').value!='' ) {
//     // alert('The Product Not Founded')
//     console.log('not founded Chars');
//         }else{
//             console.log(' founded Chars');         
//         }
//     }
// }

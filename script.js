function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function brk (brk){
    let ele = document.createElement(brk)
    return ele
}


let firstName = createlabels("lable","for","fname","First Name :  ")
let l1 = brk("br")
let fInput = createinput("input","type","text","id","fname")
let b1 = brk("br")
let middleName = createlabels("lable","for","mname","Middle Name :  ")
let l2 = brk("br")
let mInput = createinput("input","type","text","id","mname")
let b2 = brk("br")
let lastName = createlabels("lable","for","lname","Last Name :  ")
let l3 = brk("br")
let lInput = createinput("input","type","text","id","lname")
let b3 = brk("br")
let ph = createlabels("lable","for","phno","ph :  ")
let l4 = brk("br")
let phInput = createinput("input","type","number","id","phno")



document.body.append(firstName,l1,fInput,b1,middleName,l2,mInput,b2,lastName,l3,lInput,b3,ph,l4,phInput)
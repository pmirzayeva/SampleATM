const userNameInfo=document.querySelector("#userNameInfo")
const infoBtn=document.querySelector("#infoBtn")

const userContent=document.querySelector("#userContent")
const mainContent=document.querySelector("#mainContent")

const title=document.querySelector("#title")
const amountMoney=document.querySelector("#amountMoney")
const balanceInfo=document.querySelector("#balanceInfo")
const addBtn=document.querySelector("#addBtn")
const withdrawBtn=document.querySelector("#withdrawBtn")


const dataObj={
    balance:0,
    userNameInfo:[],

    add:function(){
        const value=amountMoney.value

        if(value== ""||value<0){
            alert("Please,enter the right amount")
            return
        }else{
            this.balance += +value
            balanceInfo.innerHTML=`Your Balance is ${this.balance} $`
            amountMoney.value=""
        }
    },


    withdraw:function(){
        if(amountMoney.value==""||amountMoney.value<0||this.balance<amountMoney.value){
            alert("Please,enter the right amount")
            return
        }else{
            this.balance -= +amountMoney.value
            balanceInfo.innerHTML=`Your Balance is ${this.balance} $`
            amountMoney.value=""
        }
    },

    displayed:function(){
        userContent.classList.add("d-none")
        mainContent.classList.remove("d-none")
    },

    displayUser:function(){
        title.innerHTML=`Dear ${userNameInfo.value},Welcome To Caixa Bank`
    },


}


infoBtn.addEventListener("click", function (event) {
    event.preventDefault();
    dataObj.displayed();
    dataObj.displayUser();
  });
  
  addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    dataObj.add();
  });
  
  withdrawBtn.addEventListener("click", function (event) {
    event.preventDefault();
    dataObj.withdraw();
  });

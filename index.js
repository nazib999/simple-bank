  <script>
   const login= document.getElementById('login-area');
   const transation=document.getElementById('transation-area');
   const btnClick=document.getElementById('login')
   btnClick.addEventListener('click',function(){
    login.style.display='none';
    transation.style.display='block'

   })
   document.getElementById('getDepositBtn').addEventListener('click',function(){
    let depositInput=document.getElementById('getDeposit').value;
    let depositBefore=document.getElementById('currentDeposit').innerText;
    let depositInputValue=parseFloat(depositInput);
    let depositBeforeValue=parseFloat(depositBefore);
    var balence=document.getElementById('balence').innerText;
    var balenceValue=parseFloat(balence);
    var total=depositBeforeValue +depositInputValue;
    var balenceTotal=balenceValue+depositInputValue;
    document.getElementById('currentDeposit').innerText=total;
    document.getElementById('balence').innerText=balenceTotal;
    document.getElementById('getDeposit').value='';
    
   })
   document.getElementById('withdrawBtn').addEventListener('click',function(){
    let withdrawInput=document.getElementById('withdrawInput').value;
    let withdrawBalence=document.getElementById('withdrawBalence').innerText;
    let withdrawTotal=parseFloat(withdrawBalence)+parseFloat(withdrawInput);
    var balence=document.getElementById('balence').innerText;
    var balenceValue=parseFloat(balence);
    let newBalence=balenceValue-parseFloat(withdrawInput);

    if(newBalence>0){
    
      document.getElementById('withdrawBalence').innerText=withdrawTotal;
      document.getElementById('balence').innerText=newBalence;
      document.getElementById('withdrawInput').value=''
    }
    
    else{alert('Balence is not suficcient');
    document.getElementById('withdrawInput').value=''}
   })
  </script>

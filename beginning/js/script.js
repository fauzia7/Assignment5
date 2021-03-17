window.addEventListener('load', () =>  {

   let btns = document.getElementById('empForm');

    btns.addEventListener('submit', (e) => {
        e.preventDefault();
        let digit = document.getElementById("id").value;
        let name =document.getElementById('name').value;
        let extt =document.getElementById('ext').value;
        let ema =document.getElementById('email').value;
        let dept =document.getElementById('department').value;
        
        console.log(` ID : ${digit}`);
        console.log(` Name : ${name}`);
        console.log(` Extension : ${extt}`);
        console.log(` Email : ${ema}`);
        console.log(` Department : ${dept}`);
    
    
     } );

    


 });









 

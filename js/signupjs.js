function myFunction() {
    let x = document.getElementById("n").value;
    let text;
    if (isNaN(x)) {
      text = "Input not valid";
    }
    alert(text);
    x = document.getElementById("p").value;
    let y = document.getElementById("q").value;
    if(x != y){
        alert('Enter same password');
    }
    if(x.length <=8 ){
        alert('Password to more than 8 characters')
    }
  }

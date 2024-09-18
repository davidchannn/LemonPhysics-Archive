function calc() {
    var m = Number(document.getElementById("m").value); //m
    var a = Number(document.getElementById("a").value); //v
    var f = Number(document.getElementById("f").value); //p
    var z = 0;
    var decimal = Number(document.getElementById("decimal").value);

    if(document.getElementById("box1").checked) {
        if((isFinite(f / a) && isFinite(a / f)) && f/a > 0) {
            z = f / a;
            z = rounding(z, decimal);
            explainM(z, a, f);
            document.getElementById("answer").innerHTML = ` Answer: ${String(z)} kg`;
        } else { 
            document.getElementById("answer").innerHTML = "Please properly fill in any givens."
            document.getElementById("explanation").innerHTML = ``;
        }
    } else if(document.getElementById("box2").checked) {
        if((isFinite(f / m) && isFinite(m / f)) && m > 0) {
            z = f / m;
            z = rounding(z, decimal);
            explainA(m, z, f);
            document.getElementById("answer").innerHTML = " Answer : " + String(z) + " m/s<sup>2</sup>";
        } else { 
            document.getElementById("answer").innerHTML = "Please properly fill in any givens."
            document.getElementById("explanation").innerHTML = ``;
        }
    } else if(document.getElementById("box3").checked) {
        if((isFinite(m / a) && isFinite(a / m)) && m > 0) {
            z = m * a;
            z = rounding(z, decimal);
            explainF(m, a, z);
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} N`;
        } else { 
            document.getElementById("answer").innerHTML = "Please properly fill in any givens."
            document.getElementById("explanation").innerHTML = ``;
        }
    }
} 

function rounding(z, decimal) {
    var num = z;
    var n = num.toFixed(decimal);
    return n;
}

const numInputs = document.querySelectorAll('input[type=number]')

numInputs.forEach(function(input) {
  input.addEventListener('change', function(e) {
    if (e.target.value == '') {
      e.target.value = 0
    }
  })
})

function explainM(z, a, f) {
    document.getElementById("explanation").innerHTML = `To calculate the mass of an object that has a force of ${f} N 
    and is accelerating at ${a} m/s<sup>2</sup>, we need to solve for 'm' and then plug our givens into the new equation.
    <br /><br />f = ma<br /><br />m = f/a<br /><br />m = ${f}/${a} = ${z}<br /><br />Therefore, the mass of the object is equal 
    to ${z} kg.`;
}

function explainA(m, z, f) {
    document.getElementById("explanation").innerHTML = `To calculate the acceleration of an object with a force of ${f} N and 
    has a mass of ${m} kg, we need to solve for 'a' and then plug our givens into the new equation.
    <br /><br />f = ma<br /><br />a = f/m<br /><br />a = ${f}/${m} = ${z}<br /><br />Therefore, the acceleration of the object is 
    equal to ${z} m/s<sup>2</sup>.`;
}

function explainF(m, a, z) {
    document.getElementById("explanation").innerHTML = `To calculate the force on an object that has a mass of ${m} kg and is 
    acclerating at ${a} m/s<sup>2</sup>, we simply plug in our givens to the equation.<br /><br />f = ma<br /><br />f = ${m} * ${a} 
    = ${z}<br /><br />Therefore, the force on the object is ${z} N.`;
}

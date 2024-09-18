function calc() {
    var m = Number(document.getElementById("m").value);
    var v = Number(document.getElementById("v").value);
    var p = Number(document.getElementById("p").value);
    var z = 0;
    var decimal = Number(document.getElementById("decimal").value);

    if(document.getElementById("box1").checked) {
        if((isFinite(p / v) && isFinite(v / p)) && p/v > 0) {
            z = p / v;
            z = rounding(z, decimal);
            explainM(z, v, p);
            document.getElementById("answer").innerHTML = ` Answer: ${String(z)} kg`;
        } else { 
            document.getElementById("answer").innerHTML = "Please properly fill in any givens."
            document.getElementById("explanation").innerHTML = ``;
        }
    } else if(document.getElementById("box2").checked) {
        if((isFinite(p / m) && isFinite(m / p)) && m > 0) {
            z = p / m;
            z = rounding(z, decimal);
            explainV(m, z, p);
            document.getElementById("answer").innerHTML = " Answer : " + String(z) + " m/s";
        } else { 
            document.getElementById("answer").innerHTML = "Please properly fill in any givens."
            document.getElementById("explanation").innerHTML = ``;
        }
    } else if(document.getElementById("box3").checked) {
        if((isFinite(m / v) && isFinite(v / m)) && m > 0) {
            z = m * v;
            z = rounding(z, decimal);
            explainP(m, v, z);
            document.getElementById("answer").innerHTML = " Answer : " + String(z) + " kg m/s";
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

numInputs.forEach(function(input) {
    input.addEventListener('change', function(e) {
      if (e.target.value == '') {
        e.target.value = 0
      }
    })
  })

function explainM(z, v, p) {
    document.getElementById("explanation").innerHTML = `To calculate the mass of an object given the system's total momentum and the 
    object's velocity, we have to solve for mass (or the variable 'm') in the equation p = mv, where p is the momentum and v is the 
    velocity.<br /><br />First, we need to isolate what we are solving for: mass. By dividing both sides of the equation by 'v', we 
    can create a new equation that will set m equal to p/v.<br /><br />1/v[p = mv]<br /><br />m = p/v<br /><br />Now that we have an 
    equation that takes in two variables we already have values for, we can solve for mass by plugging in the values for momentum and 
    velocity into the equation.<br /><br />m = ${p}/${v} = ${z}<br /><br />Therefore, the mass of the object is equal to ${z} kg.
    <br /><br />`;
}

function explainV(m, z, p) {
    document.getElementById("explanation").innerHTML = `To calculate the velocity of an object given the system's total momentum and the 
    object's mass, we have to solve for velocity (or the variable 'v') in the equation p = mv, where p is the momentum and m is the 
    mass.<br /><br />First, we need to isolate what we are solving for: velocity. By dividing both sides of the equation by 'm', we 
    can create a new equation that will set v equal to p/m.<br /><br />1/m[p = mv]<br /><br />v = p/m<br /><br />Now that we have an 
    equation that takes in two variables we already have values for, we can solve for velocity by plugging in the values for momentum and 
    mass into the equation.<br /><br />v = ${p}/${m} = ${z}<br /><br />Therefore, the velocity of the object is equal to ${z} m/s.
    <br /><br />`;
}

function explainP(m, v, z) {
    document.getElementById("explanation").innerHTML = `To calculate the momentum of an object given the object's mass and velocity, 
    we simply plug our values into the equation p = mv. <br /><br />p = ${m} * ${v} = ${z}<br /><br />Therefore, the momentum of the 
    object is equal to ${z} kg m/s.<br /><br />`;
}

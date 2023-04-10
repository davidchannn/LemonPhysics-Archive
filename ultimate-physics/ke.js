function calc() {
    var ke = Number(document.getElementById("ke").value);
    var m = Number(document.getElementById("m").value);
    var v = Number(document.getElementById("v").value);
    var square = v * v;
    var z = 0;
    var decimal = Number(document.getElementById("decimal").value);

    if(document.getElementById("box1").checked) {
        z = 0.5 * m * square;
        z = rounding(z, decimal);
        explainKE(z, m, v);
        document.getElementById("answer").innerHTML = ` Answer: ${String(z)} J`;
        document.getElementById("explanation").innerHTML = ``;
    }
    
    if(document.getElementById("box2").checked) {
        if(v !== 0) {
            z = (2 * ke)/(square);
            z = rounding(z, decimal);
            explainM(ke, z, v);
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} kg`;
        } else {
            document.getElementById("answer").innerHTML = ` Please properly fill in any givens.`;
            document.getElementById("explanation").innerHTML = ``;
        }
    }
    
    if(document.getElementById("box3").checked) {
        if(m !== 0) {
            z = Math.sqrt((2 * ke)/m);
            z = rounding(z, decimal);
            explainV(ke, m, z);
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} m/s`;
        } else {
            document.getElementById("answer").innerHTML = ` Please properly fill in any givens.`;
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

function explainKE(z, m, v) {
    document.getElementById("explanation").innerHTML = `To calculate the kinetic energy of an object, we need two pieces of information: 
    the object's mass and its velocity. In the equation for kinetic energy, we simply plug in the values we have.<br /><br />KE = 0.5 * 
    ${m} * ${v}<sup>2</sup><br /><br />KE = 0.5 * ${(m * v * v).toFixed(3)} = ${z} J<br /><br />Therefore, the kinetic energy of the object 
    is equal to ${z} J.`;
}

function explainM(ke, z, v) {
    document.getElementById("explanation").innerHTML = `To calculate the mass of an object with kinetic energy of ${ke} J and a velocity 
    of ${v} m/s, we first need to rearrange the following equation to isolate the variable 'm'.<br /><br />KE = 0.5 * m * v<sup>2</sup><br /><br />
    2 * KE = m * v<sup>2</sup><br /><br />m = (2 * KE)/(v<sup>2</sup>)<br /><br />m = (2 * ${ke})/(${v * v}) = ${z}<br /><br />Therefore, the mass of the object
    is ${z} kg.`;
}

function explainV(ke, m, z) {
    document.getElementById("explanation").innerHTML = `To calculate the velocity of an object with a mass of ${m} kg and with kinetic energy of ${ke} J,
    we first need to rearrange the the following equation to isolate the variable 'v'.<br /><br />KE = 0.5 * m * v<sup>2</sup><br /><br />
    2 * KE = m * v<sup>2</sup><br /><br />v<sup>2</sup> = (2 * KE)/(m)<br /><br /> v = <span>&#8730;</span>((2 * KE)/(m))<br /><br /> v = <span>&#8730;</span>
    ((2 * ${ke})/(${m}))<br /><br />v = <span>&#8730;</span>(${(2 * ke)/m}) = ${z}<br /><br />Therefore, the velocity of the object is ${z} m/s.`;
}

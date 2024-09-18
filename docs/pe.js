function calc() {
    var m = Number(document.getElementById("m").value);
    var h = Number(document.getElementById("h").value);
    var pe = Number(document.getElementById("pe").value);
    var z = 0;
    var g = 9.81;
    var decimal = Number(document.getElementById("decimal").value);

    if(document.getElementById("box1").checked) {
        if(h !== 0) {
            z = pe/(g * h)
            z = rounding(z, decimal);
            explainM(z, h, pe, g);
            document.getElementById("answer").innerHTML = ` Answer: ${String(z)} kg`;
        } else {
            document.getElementById("answer").innerHTML = `Please properly fill in any givens.`;
            document.getElementById("explanation").innerHTML = ``;
        }
    }
    
    if(document.getElementById("box2").checked) {
        if(m !== 0) {
            z = pe/(g * m);
            z = rounding(z, decimal);
            explainH(m, z, pe);
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} m`;
        } else {
            document.getElementById("answer").innerHTML = `Please properly fill in any givens.`;
            document.getElementById("explanation").innerHTML = ``;
        }
    }
    
    if(document.getElementById("box3").checked) {
        z = m * g * h;
        z = rounding(z, decimal);
        explainPE(m, h, z);
        document.getElementById("answer").innerHTML = ` Answer : ${String(z)} J`;
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

function explainM(z, h, pe) {
    document.getElementById("explanation").innerHTML = `To calculate the mass of an object that has ${pe} J of potential energy and is at a 
    height of ${h} m, we need to solve for the variable 'm' in the following equation and plug in our givens once 'm' is fully isolated:<br />
    <br />PE = mgh<br /><br />${pe} = mg * ${h}<br /><br />m = ${pe}/(${h} * g) = ${z}<br /><br />Therefore, the mass of the object is equal to 
    ${z} kg.`;
}

function explainH(m, z, pe) {
    document.getElementById("explanation").innerHTML = `To find the height of an object that has a mass of ${m} kg and has ${pe} J of potential energy, we
    need to solve for the variable 'h' in the following equation and plug in our givens once 'h' is fully isolated:<br /><br />PE = mgh<br /><br />${pe} 
    = ${m} * gh<br /><br /> h = ${pe}/(${m} * g) = ${z}<br /><br />Therefore, the height of the object is equal to ${z} m.`;
}

function explainPE(m, h, z) {
    document.getElementById("explanation").innerHTML = `To find the potential energy of an object that has a mass of ${m} kg and is at a height of ${h} 
    m, we simply plug in our givens into the equation PE = mgh.<br /><br />PE = ${m} * ${h} * g = ${z}<br /><br />Therefore, the potential energy of the 
    object is equal to ${z} J.`;
}

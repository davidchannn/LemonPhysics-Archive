function calc() {
    var f = Number(document.getElementById("f").value);
    var m1 = Number(document.getElementById("m1").value);
    var m2 = Number(document.getElementById("m2").value);
    var r = Number(document.getElementById("r").value);
    var square = r * r;
    var g = 6.67430 * Math.pow(10, -11);
    var z = 0;

    if(document.getElementById("box1").checked) {
        if(r !== 0) {
            z = ((g * m1 * m2))/square;
            z = z.toFixed(1-Math.floor(Math.log(z)/Math.log(10)));
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} N`;
            explainF(z, m1, m2, r)
        } else {
            document.getElementById("answer").innerHTML = ` Please properly fill in any givens.`;
            document.getElementById("explanation").innerHTML = ``;
        }
    }
    
    if(document.getElementById("box2").checked) {
        if(m2 !== 0 && f/m2 > 0) {
            z = (f * square)/(g * m2);
            z = rounding(z);
            explainM1(f, z, m2, r);
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} kg`;
        } else {
            document.getElementById("answer").innerHTML = ` Please properly fill in any givens.`;
            document.getElementById("explanation").innerHTML = ``;
        }
    }
    
    if(document.getElementById("box3").checked) {
        if(m1 !== 0 && f/m1 > 0) {
            z = (f * square)/(g * m1);
            z = rounding(z);
            explainM2(f, m1, z, r)
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} kg`;
        } else {
            document.getElementById("answer").innerHTML = ` Please properly fill in any givens.`;
            document.getElementById("explanation").innerHTML = ``;
        }
    }

    if(document.getElementById("box4").checked) {
        if (f !== 0) {
            z = Math.sqrt((g * m1 * m2)/f);
            z = z.toFixed(1-Math.floor(Math.log(z)/Math.log(10)));
            explainR(f, m1, m2, z)
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} m`;
        } else {
            document.getElementById("answer").innerHTML = ` Please properly fill in any givens.`;
            document.getElementById("explanation").innerHTML = ``;
        }
    }
} 

numInputs.forEach(function(input) {
    input.addEventListener('change', function(e) {
      if (e.target.value == '') {
        e.target.value = 0
      }
    })
  })

function rounding(z) {
    var num = z;
    var n = num.toFixed(3);
    return n;
}

function error() {
    document.getElementById("answer").innerHTML = ` Please properly fill in any givens.`;
}

function explainF(z, m1, m2, r) {
    document.getElementById("explanation").innerHTML = `To calculate the gravitational force between an object with a mass of ${m1} kg 
    and another object with a mass of ${m2} kg that is ${r} meters away from each other, we simply plug our givens into the equation.<br />
    <br />F = G(m1 * m2)/r<sup>2</sup><br /><br />F = G(${m1} * ${m2})/${r}<sup>2</sup> = ${z}<br /><br />Therefore, the gravitational force 
    between the two objects is equal to ${z} N.`;
}

function explainM1(f, z, m2, r) {
    document.getElementById("explanation").innerHTML = `To calculate the mass of an object that has a gravitational force of ${f} N with another 
    object that has a mass of ${m2} kg and is ${r} meters away, we have to solve for 'm1' in the equation and plug in our givens into the new equation.
    <br /><br />F = G(m1 * m2)/r<sup>2</sup><br /><br />F * r<sup>2</sup> = G(m1 * m2)<br /><br />m1 = (F * r<sup>2</sup>)/(G * m2)<br /><br />m1 = (${f} 
        * ${r}<sup>2</sup>)/(G * ${m2}) = ${z}<br /><br />Therefore, the mass of the object is equal to ${z} kg.`;
}

function explainM2(f, m1, z, r) {
    document.getElementById("explanation").innerHTML = `To calculate the mass of an object that has a gravitational force of ${f} N with another 
    object that has a mass of ${m1} kg and is ${r} meters away, we have to solve for 'm2' in the equation and plug in our givens into the new equation.
    <br /><br />F = G(m1 * m2)/r<sup>2</sup><br /><br />F * r<sup>2</sup> = G(m1 * m2)<br /><br />m2 = (F * r<sup>2</sup>)/(G * m1)<br /><br />m2 = (${f} 
        * ${r}<sup>2</sup>)/(G * ${m1}) = ${z}<br /><br />Therefore, the mass of the object is equal to ${z} kg.`;
}

function explainR(f, m1, m2, z) {
    document.getElementById("explanation").innerHTML = `To calculate the distance between two objects with a mass or ${m1} kg and ${m2} kg 
    with a gravitational force of ${f} N to each other, we have to solve for 'r' in the equation and plug in our givens into the new equation.
    <br /><br />F = G(m1 * m2)/r<sup>2</sup><br /><br />F * r<sup>2</sup> = G(m1 * m2)<br /><br />r<sup>2</sup> = G(m1 * m2)/F<br /><br />r = 
    <span>&#8730;</span> (G(m1 * m2)/F)<br /><br />r = <span>&#8730;</span> (G(${m1} * ${m2})/${f}) = ${z}<br /><br />Therefore, the distance between 
    the two objects is equal to ${z} m.`;
}


function calc() {
    var a = Number(document.getElementById("a").value);
    var t = Number(document.getElementById("t").value);
    var vi = Number(document.getElementById("vi").value);
    var vf = Number(document.getElementById("vf").value);
    var z = 0;
    var decimal = Number(document.getElementById("decimal").value);

    if(document.getElementById("box1").checked) {
        if(t !== 0) {
            z = (vf - vi)/t;
            z = rounding(z, decimal);
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} m/s<sup>2</sup>`;
            explainA(z, t, vi, vf)
        } else {
            document.getElementById("answer").innerHTML = ` Please properly fill in any givens.`;
            document.getElementById("explanation").innerHTML = ``;
        }
    }
    
    if(document.getElementById("box2").checked) {
        if((a !== 0) && (a/(vf - vi) > 0)) {
            z = (vf - vi)/a;
            z = rounding(z, decimal);
            explainT(a, z, vi, vf);
            document.getElementById("answer").innerHTML = ` Answer : ${String(z)} s`;
        } else {
            document.getElementById("answer").innerHTML = ` Please properly fill in any givens.`;
            document.getElementById("explanation").innerHTML = ``;
        }
    }
    
    if(document.getElementById("box3").checked) {
        z = -((a * t) - vf);
        z = rounding(z, decimal);
        explainVI(a, t, z, vf)
        document.getElementById("answer").innerHTML = ` Answer : ${String(z)} m/s`;
    }

    if(document.getElementById("box4").checked) {
        z = (a * t) + vi;
        z = rounding(z, decimal);
        explainVF(a, t, vi, z)
        document.getElementById("answer").innerHTML = ` Answer : ${String(z)} m/s`;
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

function explainA(z, t, vi, vf) {
    document.getElementById("explanation").innerHTML = `To calculate the acceleration of an object with an initial velocity of ${vi} m/s and 
    a final velocity of ${vf} m/s over ${t} seconds, we simply plug in the givens into the equation.<br /><br />a = (v<sub>f</sub> - v<sub>0</sub>)/t
    <br /><br />a = (${vf} - ${vi})/${t} = ${z}<br /><br />Therefore, the acceleration of the object is equal to ${z} m/s<sup>2</sup>.`;
}

function explainT(a, z, vi, vf) {
    document.getElementById("explanation").innerHTML = `To calculate the time an object takes to accelerate at ${a} m/s<sup>2</sup> with an 
    initial velocity of ${vi} m/s and a final velocity of ${vf}, we have to solve for 't' and then plug in our givens into the new equation.
    <br /><br />a = (v<sub>f</sub> - v<sub>0</sub>)/t<br /><br />a * t = (v<sub>f</sub> - v<sub>0</sub>)<br /><br />t = (v<sub>f</sub> - 
    v<sub>0</sub>)/a<br /><br />t = (${vf} - ${vi})/${a} = ${z}<br /><br />Therefore, the time the object takes is equal to ${z} seconds.`;
}

function explainVI(a, t, z, vf) {
    document.getElementById("explanation").innerHTML = `To calculate the initial velocity of an object that is accelerating at ${a} m/s
    <sup>2</sup> over ${t} seconds with a final velocity of ${vf} m/s, we have to solve for 'v<sub>0</sub>' and then plug in our givens into 
    the new equation.<br /><br />a = (v<sub>f</sub> - v<sub>0</sub>)/t<br /><br />a * t = (v<sub>f</sub> - v<sub>0</sub>)<br /><br />-v<sub>0</sub> 
    = (a * t) - v<sub>f</sub><br /><br />v<sub>0</sub> = -((a * t) - v<sub>f</sub>)</sub><br /><br />v<sub>0</sub> = -((${a} * ${t}) - ${vf}) = ${z}
    <br /><br />Therefore, the initial velocity of the object is equal to ${z} m/s.`;
}

function explainVF(a, t, vi, z) {
    document.getElementById("explanation").innerHTML = `To calculate the final velocity of an object that is accelerating at ${a} m/s
    <sup>2</sup> over ${t} seconds with an initial velocity of ${vi} m/s, we have to solve for 'v<sub>f</sub>' and then plug in our givens into 
    the new equation.<br /><br />a = (v<sub>f</sub> - v<sub>0</sub>)/t<br /><br />a * t = (v<sub>f</sub> - v<sub>0</sub>)<br /><br />v<sub>f</sub> 
    = (a * t) + v<sub>0</sub><br /><br />v<sub>f</sub> = (${a} * ${t}) + ${vi} = ${z}<br /><br />Therefore, the final velocity of the object is 
    equal to ${z} m/s.`;
}


window.onload = function(){
    let a, b, c, d, e, f, g, i, j, k, l;

    a = 5;
    b = a += 1;

    c = 5;
    d = c -= 1;

    e = 5;
    f = e *= 2;

    g = 5;
    h = g /= 2;

    i = 5;
    j = i %= 2;

    k = 5;
    l = k **= 2;


    document.getElementById("demo_a").innerHTML = "5 add or equal 1: " + b;
    document.getElementById("demo_b").innerHTML = "5 sub or equal 1: " + d;
    document.getElementById("demo_c").innerHTML = "5 multiply or equal 2: " + f;
    document.getElementById("demo_d").innerHTML = "5 divide or equal 2: " + h;
    document.getElementById("demo_e").innerHTML = "5 modulus or equal 1: " + j;
    document.getElementById("demo_f").innerHTML = "5 exponent or equal 1: " + l;

    // Shift assignment
    let aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll;

    aa = 5;
    bb = aa <<= 1;

    cc = 5;
    dd = cc >>= 1;

    ee = 5;
    ff = ee >>>= 1;

    gg = 5;
    hh = gg &= 1;

    ii = 5;
    jj = ii |= 1;

    kk = 5;
    ll = kk ^= 1;

    document.getElementById("demo_aa").innerHTML = "left shift; shift binary of 5 to the left by 1: " + bb;
    document.getElementById("demo_bb").innerHTML = "right shift; shift binary of 5 to the right by 1: " + dd;
    document.getElementById("demo_cc").innerHTML = "unsigned right shift; shift binary of 5 to the right by 1 (similar to right shift): " + ff;
    document.getElementById("demo_dd").innerHTML = "Bitwise AND operator: " + hh;
    document.getElementById("demo_ee").innerHTML = "Bitwise OR operator: " + jj;
    document.getElementById("demo_ff").innerHTML = "Bitwise XOR operator: " + ll;

    // Logical Operator
    
    // logical AND = &&=
    // logical OR = ||=
    // logical Nullish coalscing (if the first value is undefined, it will take the value of nullish coascing) = ??=
    // example of null coalscing
    let aaa, bbb;

    bbb = aaa ??= 5; // aaa has no value, that's why it will take the 5 because of nullish coalscing
    document.getElementById("demo_aaa").innerHTML = bbb;
};
var canvas1 = document.getElementById("figure1");
//var canvas2 = document.getElementById("figure2");
//var canvas3 = document.getElementById("figure3");
var ctx1 = canvas1.getContext("2d");
//var ctx2 = canvas2.getContext("2d");
//var ctx3 = canvas3.getContext("2d");

var vertices = [];
var sorted = [[],[],[],[],[],[],[],[],[],[]];

var primes = [211, 241, 277, 313, 353, 389, 431, 461, 499, 547, 587, 617, 653, 691, 739, 773, 823, 859, 907, 947, 991, 1031, 1063, 1103, 1153, 1201, 1237, 1289, 1319, 1381, 1433, 1471, 1499, 1553, 1597, 1621, 1669, 1723, 1777, 1823, 1873, 1913, 1979, 2011, 2063, 2099, 2141, 2207, 2251, 2293, 2341, 2381, 2417, 2467, 2539, 2591, 2647, 2683, 2711, 2749, 2797, 2843, 2897, 2953, 3001, 3049, 3109, 3169, 3217, 3259, 3319, 3359, 3407, 3463, 3517, 3547, 3593, 3637, 3691, 3733, 3793, 3847, 3889, 3929, 4001, 4027, 4091, 4133, 4201, 4241, 4273, 4339, 4397, 4451, 4507, 4549, 4603, 4651, 4703, 4759, 4801, 4877, 4933, 4969, 5009, 5059, 5107, 5171, 5231, 5281, 5347, 5407, 5441, 5483, 5527, 5581, 5651, 5689, 5741, 5801, 5843, 5869, 5927, 6011, 6067, 6113, 6163, 6217, 6269, 6311, 6353, 6389, 6469, 6547, 6577, 6653, 6691, 6737, 6793, 6841, 6899, 6959, 6991, 7039, 7109, 7177, 7219, 7283, 7333, 7417, 7481, 7523, 7559, 7591, 7649, 7699, 7753, 7823, 7877, 7927, 7993, 8059, 8101, 8167, 8221, 8269, 8311, 8377, 8431, 8513, 8563, 8623, 8669, 8707, 8747, 8807, 8849, 8923, 8969, 9013, 9067, 9137, 9187, 9239, 9293, 9343, 9403, 9437, 9479, 9539, 9619, 9661, 9721, 9769, 9817, 9859, 9923, 9973, 10067, 10103, 10159, 10211, 10267, 10313, 10357, 10433, 10487, 10559, 10613, 10663, 10723, 10781, 10853, 10891, 10957, 11027, 11083, 11131, 11177, 11257, 11311, 11369, 11437, 11489, 11549, 11617, 11689, 11743, 11807, 11839, 11909, 11953, 12007, 12071, 12113, 12163, 12241, 12281, 12347, 12409, 12457, 12503, 12547, 12601, 12647, 12703, 12763, 12823, 12899, 12941, 12983, 13037, 13103, 13159, 13217, 13267, 13331, 13399, 13457, 13513, 13591, 13649, 13693, 13729, 13789, 13859, 13903, 13963, 14029, 14083, 14159, 14243, 14321, 14387, 14423, 14479, 14543, 14591, 14639, 14713, 14747, 14783, 14843, 14891, 14951, 15031, 15091, 15139, 15199, 15263, 15299, 15349, 15391, 15451, 15511, 15581, 15641, 15671, 15737, 15787, 15823, 15901, 15959, 16033, 16073, 16127, 16193, 16253, 16339, 16411, 16451, 16519, 16573, 16649, 16693, 16759, 16831, 16901, 16943, 17011, 17047, 17117, 17189, 17239, 17321, 17377, 17417, 17471, 17509, 17579, 17627, 17707, 17761, 17837, 17903, 17939, 17987, 18049, 18119, 18149, 18217, 18257, 18311, 18371, 18433, 18481, 18539, 18617, 18701, 18757, 18839, 18917, 19001, 19069, 19139, 19207, 19249, 19309, 19387, 19427, 19463, 19501, 19559, 19609, 19709, 19759, 19819, 19889, 19949, 19993, 20047, 20107, 20147, 20201, 20269, 20341, 20389, 20441, 20509, 20563, 20641, 20719, 20759, 20849, 20899, 20959, 21013, 21061, 21139, 21179, 21227, 21317, 21379, 21419, 21493, 21529, 21587, 21617, 21701, 21757, 21817, 21863, 21937, 22003, 22051, 22093, 22147, 22193, 22277, 22343, 22397, 22469, 22541, 22613, 22651, 22709, 22751, 22811, 22877, 22961, 23017, 23053, 23087, 23167, 23209, 23293, 23339, 23431, 23531, 23563, 23609, 23669, 23741, 23773, 23831, 23887, 23929, 24001, 24049, 24097, 24133, 24197, 24251, 24371, 24419, 24481, 24547, 24631, 24697, 24781, 24847, 24917, 24971, 25033, 25111, 25163, 25229, 25301, 25343, 25409, 25457, 25541, 25601, 25643, 25703, 25763, 25841, 25903, 25943, 26003, 26083, 26141, 26189, 26251, 26309, 26371, 26423, 26489, 26561, 26641, 26693, 26723, 26783, 26849, 26893, 26953, 27017, 27073, 27127, 27239, 27281, 27367, 27437, 27509, 27581, 27653, 27733, 27763, 27799, 27847, 27919, 27967, 28031, 28097, 28163, 28229, 28307, 28393, 28439, 28513, 28559, 28603, 28643, 28687, 28751, 28807, 28867, 28927, 29017, 29063, 29137, 29191, 29243, 29311, 29383, 29423, 29483, 29569, 29629, 29683, 29761, 29851, 29917, 29989];

for (let i = 0; i < 512; i++)
{
    const v = [];
    let z = i;
    let s = 0;
    for (let j = 0; j < 9; j++)
    {
        v.push((z % 2 == 0) ? 0 : 1);
        s += v[v.length-1];
        z = Math.floor(z/2);
    }
    sorted[s].push(i);
    vertices.push(v);
}

var edges = [];
for (let i = 0; i < 9; i++)
{
    const l1 = sorted[i];
    const l2 = sorted[i+1];
    for (let j = 0; j < l1.length; j++)
    {
        const v1 = vertices[l1[j]];
        for (let k = 0; k < l2.length; k++)
        {
            const v2 = vertices[l2[k]];
            let s = 0;
            for (let vi = 0; vi < 9; vi++)
            {
                if (v1[vi] != v2[vi]) s += 1;
            }
            if (s == 1) edges.push([l1[j], l2[k]]);
        }
    }
}

var states = [];
for (let i = 0; i < 512; i++)
{
    const j = (i * 97)%512
    states.push([Math.cos(Math.PI*j/256) + (i*0.2 % 0.7), Math.sin(Math.PI*j/256) + (i*0.9 % 0.56), 0, 0]);
}

var timecode = 0;
function dynamics()
{
    //timecode = (timecode + 1) % primes.length;
    //timecode = 0;
    const springk = 0.01;
    const repel = 0.001;
    for (let i = 0; i < edges.length; i++)
    {
        const idx = edges[i][0];
        const jdx = edges[i][1];
        const x1 = states[idx][0];
        const y1 = states[idx][1];
        const x2 = states[jdx][0];
        const y2 = states[jdx][1];
        
        const dx = x1 - x2;
        const dy = y1 - y2;
        const fx = dx * springk;
        const fy = dy * springk;

        states[idx][2] += -fx;
        states[idx][3] += -fy;
        states[jdx][2] += fx;
        states[jdx][3] += fy;
    }
    let s = 0;
    for (let idx = 0; idx < states.length; idx++)
    {
        for (let jdx = 0; jdx < states.length; jdx++)
        //for (let zdx = 0; zdx < 20; zdx++)
        {
            //jdx = (primes[(idx + timecode) % primes.length] * (zdx+1)) % states.length;
            if (idx == jdx) continue;
            const x1 = states[idx][0];
            const y1 = states[idx][1];
            const x2 = states[jdx][0];
            const y2 = states[jdx][1];
            
            const dx = x1 - x2;
            const dy = y1 - y2;

            const d = Math.pow( Math.pow(dx,2) + Math.pow(dy,2), 1.5 );
            const unitdx = dx/Math.max(d, 0.01);
            const unitdy = dy/Math.max(d, 0.01);
            const fx = unitdx * repel;
            const fy = unitdy * repel;

            states[idx][2] += fx;
            states[idx][3] += fy;
            states[jdx][2] += -fx;
            states[jdx][3] += -fy;
        }
    }
    for (let i = 0; i < states.length; i++)
    {
        states[i][2] = states[i][2] * 0.9;
        states[i][3] = states[i][3] * 0.9;
    }
    for (let i = 0; i < states.length; i++)
    {
        states[i][0] += states[i][2];
        states[i][1] += states[i][3];
    }
}

function normalize(coords, w, h)
{
    const transformed = [];
    
    let minx = 1000;
    let miny = 1000;
    let maxx = -1000;
    let maxy = -1000;
    for (let i = 0; i < coords.length; i++)
    {
        const x = states[i][0];
        const y = states[i][1];
        minx = Math.min(x, minx);
        maxx = Math.max(x, maxx);
        miny = Math.min(y, miny);
        maxy = Math.max(y, maxy);
    }
    const xw = Math.max(maxx - minx, 0.0001);
    const yw = Math.max(maxy - miny, 0.0001);
    for (let i = 0; i < states.length; i++)
    {
        let x = (states[i][0] - minx)/xw;
        let y = (states[i][1] - miny)/yw;

        x = (x*0.96) + 0.02;
        y = (y*0.96) + 0.02;

        x = x*w;
        y = y*h;
        transformed.push([x,y]);
    }
    return transformed
}

function updateNeighbours(edges, arr, arr2)
{
    for (let i = 0; i < edges.length; i++)
    {
        if (arr[edges[i][0]] || arr[edges[i][1]])
        {
            arr2[edges[i][0]] = true;
            arr2[edges[i][1]] = true;
        }
    }
}

var clickCoord = null;
var selected = [];
var dist1 = [];
var dist2 = [];
var dist3 = [];
for (let i = 0; i < states.length; i++)
{
    selected.push(i == 305);
    //selected.push(i == 493);
    dist1.push(false);
    dist2.push(false);
    dist3.push(false);
}
updateNeighbours(edges, selected, dist1);
updateNeighbours(edges, dist1, dist2);
updateNeighbours(edges, dist2, dist3);

function draw1()
{
    const ctx = ctx1;
    const w = 640;
    const h = 640;

    ctx.clearRect(0,0,w,h);
    const transformed = normalize(states, w, h);
    if (clickCoord !== null)
    {
        const x = clickCoord[0] * w;
        const y = clickCoord[1] * h;
        let mindist = 1000000;
        let selection = -1;
        for (let i = 0; i < transformed.length; i++)
        {
            const d = Math.pow(x-transformed[i][0], 2) + Math.pow(y-transformed[i][1], 2);
            if (d < 1024 && d < mindist)
            {
                mindist = d;
                selection = i;
            }
        }
        if (selection >= 0)
        {
            selected[selection] = !selected[selection];
            for (let i = 0; i < dist1.length; i++) dist1[i] = false;
            for (let i = 0; i < dist2.length; i++) dist2[i] = false;
            for (let i = 0; i < dist3.length; i++) dist3[i] = false;
            updateNeighbours(edges, selected, dist1);
            updateNeighbours(edges, dist1, dist2);
            updateNeighbours(edges, dist2, dist3);
        }
        clickCoord = null;
    }

    ctx.globalAlpha = 0.25;
    for (let i = 0; i < edges.length; i++)
    {
        const idx = edges[i][0];
        const jdx = edges[i][1];
        const x1 = transformed[idx][0];
        const y1 = transformed[idx][1];
        const x2 = transformed[jdx][0];
        const y2 = transformed[jdx][1];
        if (selected[idx] || selected[jdx])
        {
            ctx.globalAlpha = 1;
            ctx.strokeStyle = "white";
        }
        else if (dist3[idx] && dist3[jdx])
        {
            ctx.globalAlpha = 0.6;
            ctx.strokeStyle = "silver";
        }
        else
        {
            ctx.globalAlpha = 0.2;
            ctx.strokeStyle = "grey";
        }
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    for (let i = 0; i < states.length; i++)
    {
        const x = Math.round(transformed[i][0]);
        const y = Math.round(transformed[i][1]);
        let pixcol = "rgb(64,64,64)";
        if (selected[i])
        {
            pixcol = "white";
            ctx.globalAlpha = 1;
            ctx.fillStyle = "white";
            ctx.fillRect(x-6, y-6, 13, 13);
        }
        else if (dist3[i])
        {
            pixcol = "silver";
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = "silver";
            ctx.fillRect(x-5, y-5, 11, 11);
        }
        else
        {
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = "grey";
            ctx.fillRect(x-5, y-5, 11, 11);
        }
        ctx.globalAlpha = 1;
        ctx.fillStyle = "black";
        ctx.fillRect(x-4, y-4, 9, 9);
        ctx.fillStyle = pixcol;
        for (let vi = 0; vi < 9; vi++)
        {
            if (vertices[i][vi] == 0) ctx.fillRect(x + ((vi%3)*3) - 4, y + (Math.floor(vi/3)*3) - 4, 3, 3);
        }

        //ctx.beginPath();
        //ctx.arc(x, y, w/64, 0, 2 * Math.PI, false);
        //ctx.fillStyle = "black";
        //ctx.fill();
    }
}

function loop()
{
    dynamics();
    draw1();
    setTimeout( () => { window.requestAnimationFrame(loop); }, 1000/12 );
}
dynamics();
window.requestAnimationFrame(loop);

function getCanvasCoord (e, canvas) {
	const boundingBox = canvas.getBoundingClientRect();
    return [e.offsetX/boundingBox.width, e.offsetY/boundingBox.height];
}

canvas1.onmousedown = (e) => {
    clickCoord = getCanvasCoord(e, canvas1);
}
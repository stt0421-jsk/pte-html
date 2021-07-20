var elementals = [
    ["수소", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "헬륨"],
    ["리튬", "베릴륨", "", "", "", "", "", "", "", "", "", "", "붕소", "탄소", "질소", "산소", "플루오린", "네온"],
    ["나트륨", "마그네슘", "", "", "", "", "", "", "", "", "", "", "알루미늄", "규소", "인", "황", "염소", "아르곤"],
    ["칼륨", "칼슘", "스칸듐", "티타늄", "바나듐", "크로뮴", "망가니즈", "철", "코발트", "니켈", "구리", "아연", "갈륨", "저마늄", "비소", "셀레늄", "브로민", "크립톤"],
    ["루비듐", "스트론튬", "이트륨", "지크로늄", "니오브", "몰리브덴", "테크네튬", "루테늄", "쿠듐", "팔라듐", "은", "카드뮴", "인듐", "주석", "안티몬", "텔루륨", "아이오딘", "제논"],
    ["세슘", "바륨", "란타넘족", "하프늄", "탄탈륨", "텅스텐", "레늄", "오스뮴", "이리듐", "백금", "금", "수은", "틸륨", "납", "비스무스", "폴로늄", "아스타틴", "라돈"],
    ["프랑슘", "라듐", "악티눔족", "러더포늄", "어브뮴", "시보귬", "보륨", "하슘", "파이트너륨", "다름슈타틈", "뢴트게늄", "코페르니슘", "니호늄", "플뢰로븀", "모스크븀", "리버모륨", "테네신", "오가네손"]
];
var lans = ["란타넘", "세륨", "프라세오디뮴", "네이디뮴", "프로메튬", "사마륨", "유로퓸", "가돌리늄", "터븀", "디스프로슘", "홀뮴", "어븀", "툴륨", "이터븀", "루테슘"];
var acts = ["악티눔", "토륨", "프로트악티늄", "우라늄", "넵투늄", "플루토늄", "아메리슘", "퀴륨", "버클륨", "캘리포늄", "아인슈타이늄", "페르뮴", "멘델레븀", "노벨륨", "로렌슘"];
var isOp = 0;
var isLOp = 0;
var isAOp = 0;

function renderT() {
    if (isOp === 0) {
        addTable();
    }
    else {
        remTable();
    }
}

function addTable() {
    var c, r, t;
    t = document.createElement('table');
    t.id = "tableB";
    var k1 = 1;
    var k2 = 1;
    var idval = 1;
    while (k2 < 8) {
        r = t.insertRow(k2-1);
        while (k1 < 19) {
            c = r.insertCell(k1-1);
            buttonnew = document.createElement('button');
            buttonnew.innerHTML = elementals[k2-1][k1-1];
            if (elementals[k2-1][k1-1] != "") {
                buttonnew.id = `n${idval}`;
                idval+=1;
                c.appendChild(buttonnew);
            }
            k1+=1;
        }
        k1=1;
        k2+=1;
    }
    document.getElementById("addtable").appendChild(t);
    isOp = 1;

    var krl = document.getElementById("n57");
    krl.onclick = function() { addL(); };
    var kra = document.getElementById("n75");
    kra.onclick = function() { addA(); };
}

function remTable() {
    var d = document.getElementById("addtable");
    var tb = document.getElementById("tableB");
    d.removeChild(tb);
    isOp = 0;
}

function addL() {
    if (isLOp === 0) {
        var c, r, t;
        t = document.createElement('table');
        t.id = "tableL";
        r = t.insertRow(0);
        k1=1;
        while (k1 < 16) {
            c = r.insertCell(k1-1);
            buttonnew = document.createElement('button');
            buttonnew.innerHTML = lans[k1-1];
            k1+=1;
            c.appendChild(buttonnew);
        }
        document.getElementById("underDiv1").appendChild(t);
        isLOp = 1;
    }
    else {
        var d = document.getElementById("underDiv1");
        var tb = document.getElementById("tableL");
        d.removeChild(tb);
        isLOp = 0;
    }
}

function addA() {
    if (isAOp === 0) {
        var c, r, t;
        t = document.createElement('table');
        t.id = "tableA";
        r = t.insertRow(0);
        k1=1;
        while (k1 < 16) {
            c = r.insertCell(k1-1);
            buttonnew = document.createElement('button');
            buttonnew.innerHTML = lans[k1-1];
            k1+=1;
            c.appendChild(buttonnew);
        }
        document.getElementById("underDiv2").appendChild(t);
        isAOp = 1;
    }
    else {
        var d = document.getElementById("underDiv2");
        var tb = document.getElementById("tableA");
        d.removeChild(tb);
        isAOp = 0;
    }
}
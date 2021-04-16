let s = "";
let arrObj = [

   {
      k: "1.jpg",
      t: "Мир",
      w: 250,
      h: 150,
      a: "https://mirzamak.by/",
      p: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Белоруссии"
   },
   {
      k: "2.jpg",
      t: "Костел",
      w: 250,
      h: 150,
      a: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/ ",
      p: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы."
   },
   {
      k: "3.jpg",
      t: "Троицкое",
      w: 250,
      h: 150,
      a: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
      p: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь."
   }

]


for (i = 0; i < 3; i++) {

   k = arrObj[i].k;
   t = arrObj[i].t;
   w = arrObj[i].w;
   h = arrObj[i].h;
   p = arrObj[i].p;
   a = arrObj[i].a;


   s += `<div onclick="hugePick(${i + 1})" class="pic"><img src="images2/${k}" style="width: ${w}px; height: ${h}px;">${t}</div>`;


}

myImg.innerHTML = s;

function hugePick(n) {

   s1 = `<div><img onclick="big.innerHTML =''" src="images2/${n}.jpg">${p}<a href="${a}">ссылка</a></div>`;
   big.innerHTML = s1;
}


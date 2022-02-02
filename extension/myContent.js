/* Inspiration for project from PedroTech on Youtube. Link: https://www.youtube.com/watch?v=zHIryKuhYA4 */
let imgBlock = [
    "https://www.stockvault.net/data/2011/05/15/123730/preview16.jpg" /*image from https://www.stockvault.net/photo/123730/stop-sign */,
    "https://cdn.pixabay.com/photo/2016/11/25/06/27/stop-sign-1857711_960_720.jpg" /*image from https://pixabay.com/photos/stop-sign-stop-sign-traffic-red-1857711/ */,
    "https://c.pxhere.com/photos/0d/b3/photo-1287234.jpg!d" /*image from https://pxhere.com/en/photo/1287234 */,
    "https://cdn.pixabay.com/photo/2016/05/05/22/30/stop-1374934_960_720.jpg" /*image from https://pixabay.com/photos/stop-sign-stop-sign-red-warning-1374934/ */,
    "https://cdn.pixabay.com/photo/2015/12/27/18/00/stop-sign-1110087_960_720.jpg" /*image from https://pixabay.com/photos/stop-sign-stop-sign-red-traffic-1110087/ */,
    "https://cdn.pixabay.com/photo/2015/02/13/10/18/stop-634941_960_720.jpg" /*image from https://pixabay.com/photos/stop-sign-traffic-sign-road-sign-634941/ */,
    "https://c.pxhere.com/photos/ac/84/caution_conceptual_guidance_mark_red_safety_shapes_sign-1524843.jpg!d" /*image from https://pxhere.com/en/photo/1524843 */,
    "https://i0.wp.com/pixahive.com/wp-content/uploads/2021/01/Stop-sign-board-on-a-road-268172-pixahive.jpg?fit=778%2C1727&ssl=1" /* image from https://pixahive.com/photo/stop-sign-board-on-a-road/ */
];

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i = i + 1){
    const randomImg = Math.floor(Math.random()* imgBlock.length)
    images[i].src = imgBlock[randomImg];
}
const headerOne = document.getElementsByTagName("h1");
for (let i = 0; i < headerOne.length; i = i + 1){
    headerOne[i].innerText = "Stop getting distracted!";
}
const headerTwo = document.getElementsByTagName("h2");
for (let i = 0; i < headerTwo.length; i = i + 1){
    headerTwo[i].innerText = "Go back and finish your work";
}
const headerThree = document.getElementsByTagName("h3");
for (let i = 0; i < headerThree.length; i = i + 1){
    headerThree[i].innerText = "Get back to work!";
}
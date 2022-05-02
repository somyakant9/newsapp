// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
import append from "./fetch.js";


document.getElementById("navbar").innerHTML = navbar();

let news = JSON.parse(localStorage.getItem("news"));
let container = document.getElementById("detailed_news");
let arr =[];
arr.push(news);

append(container,arr);



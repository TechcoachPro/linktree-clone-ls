import "../css/style.css";
import { mainTemplate } from "../templates/main.template";
import { displayLinks, addNewLink, previewLinks, openPreview } from "./controller.js";
import { getEl } from "./utils";

getEl("#app").innerHTML = mainTemplate;
const linkList = getEl("#link-list");
const newLinkBtn = getEl("#newLinkBtn");
const previewLink = getEl('#preview-link');
const previewBtn = getEl('#previewBtn')
displayLinks(linkList);
addNewLink(newLinkBtn);
previewLinks(previewLink);
openPreview(previewBtn);
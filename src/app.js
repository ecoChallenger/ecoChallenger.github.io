import { companiesView } from "../views/companies.js";
import { guestsView } from "../views/guests.js";
import { homeView } from "../views/home.js";
import {page,render} from "./lib.js"


console.log('it works')

const root = document.querySelector('body');

page(decorateContext);
page('/index.html' , '/');
page('/' , homeView);
page('/companies' , companiesView);
page('/guests' , guestsView);
page.start();

export function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
};
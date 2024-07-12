import page from "page";
import { showHome } from "./views/Home.js";
import { showResults } from "./views/Results.js";

// Define routes
page("/", showHome);
page("/results", showResults);

// Start the router
page();

// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.bs.js";

function Router(Props) {
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (match) {
    return React.createElement("h1", undefined, "NO PAGE");
  } else {
    return React.createElement("h1", undefined, "Home page");
  }
}

var make = Router;

export {
  make ,
  
}
/* react Not a pure module */

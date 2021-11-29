import React from "react";
import { observer, emit, useValue, useLocal } from "startupjs";
import {
  Button,
  Div,
  H1,
  Layout,
  Menu,
  Row,
  SmartSidebar,
} from "@startupjs/ui";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import APP from "../../app.json";
import "./index.styl";

export default observer(function ({ children }) {
  return pug`
    Layout
        Div.body= children
  `;
});

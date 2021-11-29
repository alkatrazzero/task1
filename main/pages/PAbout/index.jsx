import React from "react";
import { Text, ScrollView, View } from "react-native";
import { observer } from "startupjs";
import { Content } from "@startupjs/ui";
import "./index.styl";
import BodyComponent from "../../../components/BodyComponent";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";

export default observer(function PAbout() {
  return pug`
  ScrollView.root
    HeaderComponent
    BodyComponent
    FooterComponent
  `;
});

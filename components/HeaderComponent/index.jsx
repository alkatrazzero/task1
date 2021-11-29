import React from "react";
import { Text, ScrollView, View ,Image} from "react-native";
import { observer } from "startupjs";
import { Content } from "@startupjs/ui";
import "./index.styl";
import {BASE_URL} from "@env"


export default observer(function HeaderComponent() {
  
  return pug`
  View.header
    Image.image(
      source={ uri: BASE_URL+'/icons/apple.png'}
      style= {width:100, height:100}
    )
    Text.title Stellar
    Text.content Just another free, fully responsive site template built by @ajlkn for HTML5 UP.
  `;
});

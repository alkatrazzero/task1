import React from "react";
import { Text, ScrollView, View,Button } from "react-native";
import { observer } from "startupjs";
import { Content } from "@startupjs/ui";
import "./index.styl";

export default observer(function FooterComponent() {
  return pug`
  View.footer
    Text.title Aliquam sed mauris
    Text.content Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
    Button.btn(
      title=('learn more')
      )
    Text.title Etiam feugiat 
    View.contactsName
      Text Address
      Text 1234 Somewhere Road • Nashville, TN 00000 • USA
    View.contactsName
      Text Phone
      Text (000) 000-0000 x 0000
    View.contactsName
      Text Email
      Text information@untitled.tld
      

  
    
    
    
  `;
});

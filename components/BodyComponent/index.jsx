import React from "react";
import { Text, ScrollView, View,Image,Button } from "react-native";
import { observer } from "startupjs";
import { Content } from "@startupjs/ui";
import "./index.styl";
import {BASE_URL} from "@env"

const statistic=[{
color:'purple',numbers:'5,120',name:'Etiam'
},
{
  color:'green',numbers:'8,192',name:'Magna'
},
{
color:'yellow',numbers:'2,048',name:'Tempus'
},
{
color:'blue',numbers:'4,096',name:'Aliquam'
},
{
color:'pink',numbers:'1,024',name:'Nullam'
}]

export default observer(function BodyComponent() {

  return pug`
  View.body
    View.contentBlock
      Image.image(
      source={ uri: BASE_URL+'/icons/pic01.jpg'}
      style= {width:100, height:100}
      )
      Text.title Ipsum sed adipiscing
      Text.content Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
      Button.btn(
      title='learn more'
      color='black'
    )
    View.contentBlock
      Text.title Magna veroeros
      Image.image(
      source={ uri: BASE_URL+'/icons/126482.png'}
      style= {width:80, height:80}
      )
      Text.title Ipsum consequat
      Text.content Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
      Image.image(
      source={ uri: BASE_URL+'/icons/126483.png'}
      style= {width:80, height:80}
      )
      Text.title Amed sed feugiat
      Text.content Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
      Image.image(
      source={ uri: BASE_URL+'/icons/126488.png'}
      style= {width:80, height:80}
      )
      Text.title Dolor nullam
      Text.content Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
      Button.btn(
      title='learn more'
      color='black'
    )
    View
      Text.title Ipsum consequat
      Text.content Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
    View.statisticBlock
      each item in statistic
        View.imageContainer(style={'background-color': item.color})
          Image.statisticImage(
            source={ uri: BASE_URL+'/icons/126515.png'}
            style= {width:80, height:80}
            )
          Text #{item.numbers} 
          | #{item.name}
          
    View.statisticContent
      Text Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
      Button.btn(
        title=('learn more')
        color='black'
        )
    View.contentBlock
      Text.title Congue imperdiet
      Text.content Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
      Button.btn(
        title=('Get started')
        color='blue'
        )
      Button.btn(
        title=('learn more')
        color='black'
        )
    `;
});

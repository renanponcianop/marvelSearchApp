import React, { Component } from 'react'
import { ScrollView, Image, Dimensions, Text, Button } from 'react-native'
import md5 from 'md5'
import api from '../../services/api'


const SCREEN_WIDTH = Dimensions.get('screen').width

export default class Home extends Component {
  static navigationOptions = {
    title: 'Hero description'
  }

  render() {

   const hero = this.props.navigation.getParam('hero')
    return(
        <ScrollView>
            <Image
                 source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
                 style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}}
             />
             <Text style={{padding:10, fontSize:20}}>{hero.name}</Text>
             <Text style={{padding:10}}>{hero.description}</Text>
        </ScrollView>
    )
  }
}

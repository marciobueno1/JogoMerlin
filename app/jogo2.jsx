import React from 'react';
import {Button} from 'react-native';
import { Directions } from 'react-native-gesture-handler';
export default function MagicSquare(){

  return (
    <>
     <View style = {style.container}>
        <View>
            <Button className="square"></Button>
            <Button className="square"></Button>
            <Button className="square"></Button>
        </View>
         <View>
            <Button className="square"></Button>
            <Button className="square"></Button>
            <Button className="square"></Button>
        </View>
         <View>
            <Button className="square"></Button>
            <Button className="square"></Button>
            <Button className="square"></Button>
        </View>  
    </View>

    </>
  );
}
 
const style = StyleSheet.create({
    container: {
        flex:
    }
     
})

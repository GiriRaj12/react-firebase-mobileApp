import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    appbackground :{
        flex : 1,
    backgroundColor : 'white'
    },
    container: {
      flex: 1,
      marginVertical : 200,
      textAlignVertical : "center",
      marginHorizontal: 16,
    },
    inputtext : {
      width : '100%',
      height : 40,
      borderRadius : 3,
      borderColor : 'gray',
      borderWidth : 2,
      textAlign : "center"
    },
    emptyspace : {
      width: 50,
      marginVertical: 10,
    },
    normalbutton :{
      backgroundColor: '#ff8c00',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 12,
      color: 'white',
      fontSize: 12,
      overflow: 'hidden',
      padding: 6,
      textAlign:'center',
    },
    warningbutton :{
      backgroundColor: '#fffafa',
      borderColor: 'red',
      borderWidth: 1,
      borderRadius: 12,
      color: 'black',
      fontSize: 12,
      overflow: 'hidden',
      padding: 4,
      textAlign:'center',
    },
    logo : {
       width: 200, 
       height:200,
       marginVertical : 40,
       marginLeft : 85,
       overflow : "hidden",
       resizeMode: 'stretch'
    },
    buttonWithoutBackground :{
        width : 40,
        textAlign : "center",
        fontSize : 12,  
    }
  });

  export default styles;
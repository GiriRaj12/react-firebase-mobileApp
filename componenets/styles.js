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
    floatingButton :{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:70,
      position: 'absolute',                                          
      bottom: 10,                                                    
      right: 10,
      height:70,
      backgroundColor:'#fff',
      borderRadius:100,
    },
    inputtext : {
      width : '80%',
      padding : 10,
      marginLeft : 40,
      alignContent : 'center',
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
      width : 100,
      marginLeft : 150,
      alignContent : 'center',
      backgroundColor: '#ff8c00',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 12,
      color: 'white',
      fontSize: 12,
      overflow: 'hidden',
      padding: 6,
      textAlign:'center'
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
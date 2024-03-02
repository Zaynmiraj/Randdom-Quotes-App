import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    main:{
    
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E5E7E9',
    },
    sub:{
        backgroundColor:'white',
        width:'90%',
        height:'70%',
        borderRadius: 30,
        justifyContent:'center',
        borderColor:'#33C4FF',
        borderWidth:5,
        alignItems:'center',
        padding: 20
    },
    title:{
        fontSize:23,
        marginBottom:20,
        fontWeight:'800',
        color:'#33C4FF'

    },
    quote:{
        textAlign:'center',
        width:'100%',
        fontWeight:'700',
        fontStyle:'bold',
        fontSize:20,
    },

    author:{
        textAlign:'right',
        width:'100%',
        fontWeight:'700',
        fontStyle:'italic'
    },
    button:{
        width:'80%',
        backgroundColor:'#33C4FF',
        marginTop:30,
        color:'white',
        textAlign:'center',
        fontSize:18,
        padding:10,
        borderRadius:20,
    },
    image:{
        width:40,
        height:40,
        margin: 10,
        
    }
})
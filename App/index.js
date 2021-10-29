import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, StatusBar, Alert } from 'react-native';
import { Entypo,Feather, Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
      },
    container1: {
        flex:1,       
        backgroundColor: 'darkorange',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    showBoard:{
        backgroundColor:'gray',
        margin:50
    },
    icon:{
        alignItems:'center',
    }
});

class index extends React.Component {   
    constructor(props) {
      super(props);
      this.jokeList = [
        'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
        
        'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
    
        'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, I am going to eat that pussy once Jimmy leaves for school today!" ',
    
        'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it is either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"'];
      this.wasRender =[]; 
      this.copyWasRender = [];
      this.indexOfJoke; 
    }    
    state = {
      jokeid:'',
      joke: '',
      posJokevoteCount:0,
      negJokevoteCount:0,
    };

    render() {
      if(this.state.joke == '')
      {
        Alert.alert('Press smile or sad icon to show joke!')
      }
      while (this.wasRender.includes(this.indexOfJoke) || this.indexOfJoke == null)
      {
        this.indexOfJoke = Math.floor(Math.random()*this.jokeList.length);
        if (this.wasRender.length == this.jokeList.length)
        {
            Alert.alert("That is all joke for today! Come back another day");
            this.copyWasRender = this.wasRender.slice();
            this.wasRender = [];
            break;
        }
      }  
      this.wasRender.push(this.indexOfJoke);
      return (
        <View style={[styles.container, {
          flexDirection: 'column'}]}>

          <View style={{ flex: 0.4 , alignItems:"center", flexDirection:"row", justifyContent:"space-between" }}>            
              <Feather  name="smile" size={50}/>
              <Ionicons name="flower" size={50}/>             
          </View>

          <View style={{ flex: 1, backgroundColor: "#4ead3d", alignItems:'center', justifyContent:'space-evenly' }}>
              <Text style={{ fontSize: 20, color:"white" }}>
                  A joke a day keeps the doctor away
              </Text>
              <Text style={{ fontSize: 14, color:"white" }}>
                  If you joke wrong way, your teeth have to pay. (Serious)
              </Text>
          </View>

          <View style={{ flex: 1.5 , alignItems:'center',justifyContent:'space-evenly' }}>             
              <Text>
                  {this.state.joke}
              </Text>
          </View>
          
          <View style={styles.container1}>
              <StatusBar backgroundColor="lightblue" />
              <TouchableOpacity style={styles.icon} onPress={() => {this.setState({joke:this.jokeList[this.indexOfJoke]});
                                                                    this.setState({jokeid:this.indexOfJoke});
                                                                    this.setState({posJokevoteCount:this.state.posJokevoteCount+1});}}>
                  <Feather name="smile" size={50}/>
                  <Text>It is funny!</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.icon} onPress={() => {this.setState({joke:this.jokeList[this.indexOfJoke]});
                                                                    this.setState({jokeid:this.indexOfJoke});
                                                                    this.setState({negJokevoteCount:this.state.negJokevoteCount+1});}} >
                  <Entypo name="emoji-sad" size={50}/>
                  <Text>It is not funny!</Text>
              </TouchableOpacity>               
          </View>
      </View>
      );
    }
  }

export default index;
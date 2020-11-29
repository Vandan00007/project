import React from 'react';
import {View, TextInput, Button, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {ListItem, Divider} from 'react-native-elements';
//import {addFood, getFoods} from './api/FoodsApi'

import * as firebase from 'firebase';
// Required for side-effects

const firebaseConfig = {
    apiKey: "AIzaSyAz9u65ZX2F5Tr1gCfKHHf-vce0gSgfyC8",
    authDomain: "complaint-70e3e.firebaseapp.com",
    databaseURL: "https://complaint-70e3e.firebaseio.com",
    projectId: "complaint-70e3e",
    storageBucket: "complaint-70e3e.appspot.com",
    messagingSenderId: "493586310101",
    appId: "1:493586310101:web:eb16044882a51a764cd35c"
};

firebase.initializeApp(firebaseConfig);

export default class FoodList extends React.Component{
    colors = ['red', 'black', 'blue', 'green'];
    state={
        foodList: [],
        currentFoodItem: null
    };
    componentDidMount(){
        firebase
            .firestore()
            .collection("Foods")
            .add({
                Food: this.state.currentFoodItem
            }).then(snapshot => {
                const data = snapshot.val();
                if (data){
                    const initFoodList=[]
                    Object.keys(data)
                        .forEach(currentFoodItem => initFoodList.push(data[currentFoodItem]))
                    this.setState({
                        foodList : initFoodList
                    })
                }
        });

    }

    addFood = () => {
        if (!this.state.currentFoodItem) return;
        const newFood = firebase.firestore().collection("Foods").push();
        newFood.set(this.state.currentFoodItem, () => this.setState({currentFoodItem: ''}));

};




   //this.colors[Math.floor(Math.random() * this.colors.length)]

    render(){
        return(
            <SafeAreaView>
                <View>
                    <TextInput
                        placeholder="Add Food"
                        value={this.state.currentFoodItem}
                        onChangeText={(text) => this.setState(prevState => ({
                            currentFoodItem: prevState.currentFoodItem = text
                        }))
                        }
                    />
                    <Button
                        title='Submit'
                        onPress={() => this.addFood}
                    />
                </View>
                <FlatList
                    data={this.state.foodList}
                    ItemSeparatorComponent={() =><Divider style={{backgroundColor: 'black'}}/>}
                    renderItem={({item}) =>{
                        console.log(item);
                        return (
                            <ListItem
                                title={item.name}
                                subtitle={item.color}

                                />
                            );
                        }
                    }
                />
            </SafeAreaView>
        )
    }
}

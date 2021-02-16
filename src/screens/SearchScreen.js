import React from 'react'; 
import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import imageRecog from '../api/imageRecog';

const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMsg, setErrMsg] = useState('');

    const searchApi = async(searchTerm)=>{
        // try {
            const response = await imageRecog.post('/api/', {
                    'imagepath': ' /Users/chloe/git/neural-network/imagerecognition/salad.jpg'
            });
            setResults(response.data.result);
                        
        // } catch(err){
        //     console.log(err);
        //     setErrMsg("Something went wrong")
        // }
    };

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm=>setTerm(newTerm)}
                onTermSubmit={()=>searchApi(term)}/>
            <Text>{results.length} restaurants</Text>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
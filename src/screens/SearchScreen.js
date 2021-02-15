import React from 'react'; 
import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMsg, setErrMsg] = useState('');

    const searchApi = async(searchTerm)=>{
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    searchTerm,
                    location:'new york city'
                }
            });
            setResults(response.data.businesses);
                        
        } catch(err){
            console.log(err);
            setErrMsg("Something went wrong")
        }
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
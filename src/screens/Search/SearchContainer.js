import React from 'react';
import SearchView from './SearchView';
import md5 from 'md5';
import api from '../../services/api';

const PUBLIC_KEY = 'YOUR PUBLIC KEY'
const PRIVATE_KEY = 'YOUR PRIVATE KEY'


export default class SearchContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchWord: '',
            loading: false,
            error: null
        };
    }

    onSearchChange = (searchWord)=>{
        this.setState({searchWord});
    }

    onSearchForHero = async ()=>{
      this.setState({loading: true, error: false})
      const heroName = this.state.searchWord;
      const timestamp = Number(new Date())
      const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY)
      const { data } = await api.get(`characters?ts=${timestamp}&name=${heroName}&limit=5&apikey=${PUBLIC_KEY}&hash=${hash}`).catch(e => console.log(e))
      return data;
    }

    onSubmit = ()=>{
      if (!this.state.searchWord) {
        this.setState({error: 'You need to type something to I can search.'})
        return;
      }
      this.onSearchForHero().then((hero) => {
        this.setState({loading: false})
        if (!hero.data || hero.data.count == 0) {
          this.setState({error: 'Hero not found. Are you typing in english?'})
        }
        heroData = hero.data;
        if(heroData.count > 1) {
          this.setState({error: 'More than one hero found. Be more specific?'})
        }else if (heroData.count == 1) {
          this.setState({error: false})
          this.props.navigation.navigate('Home', {hero: heroData.results[0]});
        }
      })
    }

    render(){
        return (
            <SearchView
                onSearchChange={this.onSearchChange}
                onSubmit={this.onSubmit}
                searchWord={this.state.searchWord}
                error={this.state.error}
                loading={this.state.loading}
            />
        )
    }
 }

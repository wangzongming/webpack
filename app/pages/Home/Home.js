import React,{Component} from 'react';
import s from './Home.less';

class Home extends Component{
    render(){
        return <div className={s.home}>
            hello
            <img src="/imgs/logo.png" className={s.img}/>
        </div>
    }
}

export default Home;









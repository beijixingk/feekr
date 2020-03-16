import React, { Component } from 'react';
import { ListWrap ,ListTitleWrap,ListItem } from './ListWrap'
import ListTitle from './ListTitle'
import ListMore from './ListMore'
import { get } from 'utils/http'
import { NavLink } from 'react-router-dom'
class Listcontainer extends Component {
    state = {
        Newslist:[],
        msg:'你好'
    }
    async componentDidMount(){
        let result = await get({
            url:'/api/news/lists?page=1&count=3'
        })
        // console.log(result.result.list);
        this.setState({
            Newslist:result.result.list
        })
        this.props.parent.getChildren(this,this.state.msg)
    }
    render() {
        // console.log(this.props);
        // if(this.state.Newslist)
            // this.props.parent.getChildren(this,this.state.msg)
        
        return (
           
            <ListWrap
            {...this.props}
            >
                <ListTitle
                width='3px'
                dir='bottom'
                color='#F2F2F2'
                title='最新旅行资讯'
                subTitle='给你最新的旅行热点'
                ></ListTitle>
                <div className="list">
                    <ListItem className='firstItem'>
                        <NavLink 
                          to={{
                            pathname:'/news/?lZdslg',
                            state:{id:'lZdslg'}
                          }}
                            > 
                            <img alt='图片' src="https://newscover.feekr.com/2019/04/30/171928ed92443fc8400a21547a788a85874ca1.jpg!300X300"/> 
                            <div className="news-item"> 
                                <p className="news-title">从奢侈品帝国到顶级酒店，宝格丽的生活方式就是让人死心塌地被“圈粉”</p> 
                                <p>
                                    <span>67709人阅读</span>
                                    <span className="separate">/</span>
                                    <span>2019-05-24</span>
                                </p> 
                            </div> 
                        </NavLink>
                    </ListItem>
                    
                        {
                            
                            this.state.Newslist.map((value,index)=>{
                                if(index>0){
                                    return (
                                        <ListItem
                                        width='3px'
                                        dir='top'
                                        color='#F2F2F2'
                                        key={value+index}
                                        >
                                        <NavLink 
                                            to={{
                                               pathname: '/news/?'+value.id.slice(0,6),
                                               state:{id:value.id.slice(0,6)}
                                            }}
                                            className="flex-wrap"> 
                                            <img alt='图片' className="news-cover lazy" src={'https://images.weserv.nl/?url='+value.cover+'!300X300'} /> 
                                            <div className="flex-item news-item"> 
                                                <p className="news-title font-md">{value.title}</p> 
                                                <p>
                                                    <span>{value.viewCount}人阅读</span>
                                                    <span className="separate">/</span>
                                                    <span>{value.time}</span>
                                                </p> 
                                            </div> 
                                        </NavLink>
                                        </ListItem>
                                    )
                                }
                                return [];
                               
                            })
                        }
                    <ListMore
                        moreTitle='更多旅行资讯'
                        href="/morenews"
                        dir='top'
                        width='3px'
                        color='#F2F2F2'
                    ></ListMore>
                    
                </div>
                
            </ListWrap>
        );
    }
}

// export default Listcontainer;
export {
    ListTitleWrap,
    Listcontainer as default,
    ListWrap,
    ListMore
}
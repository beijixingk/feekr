import React, { Component } from 'react';
import { SelectWrap } from './styledHome'
import SubTitle from 'components/listcontainer/SubTitle'
import { get } from 'utils/http'
class Selected extends Component {
    state = {
        selectedList:[]
    }
    async componentDidMount(){
        let result = await get({
            url:'/api/editor/selected'
        })
        this.setState({
            selectedList:result.result.list
        })
    }
    render() {
        return (
            <SelectWrap>
               {
                   this.state.selectedList.map((value)=>(
                        <div key={value.columnId}>
                            <SubTitle
                                size='.12rem'
                                title={value.column}
                                ></SubTitle>
                            {
                                value.article.map((value2)=>(
                                    <a 
                                        className="selected-item" 
                                        href="/"
                                        key={value2.id}
                                        > 
                                        <p className="font-lg selected-title">
                                            {value2.title}</p> 
                                        <div className="flex-wrap"> 
                                            <img alt='图片' className="selected-cover lazy" data-original="https://newscover.feekr.com/2019/04/30/1723330ee2b94d38ed74f51583d8a258f32196.jpg!600X400" src={'https://images.weserv.nl/?url='+value2.cover+'!600X400'} /> 
                                            <div className="flex-item selected"> 
                                            <p className="font-sm">{value2.desc}</p> 
                                                <p className="product-tag">  
                                                    {
                                                        value2.tag.map((value,index)=>(
                                                            <span key={index}> {value}</span>  
                                                        
                                                        ))
                                                    }
                                                </p> 
                                            </div> 
                                        </div> 
                                    </a>
                                ))
                            }
                        </div>
                        
                       ))
                            }
               
            </SelectWrap>
        );
    }
}

export default Selected;
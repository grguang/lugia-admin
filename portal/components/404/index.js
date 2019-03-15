/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import notFound from '../../assets/images/404.png';
import Abnormal from '../abnormal'

export default class Pages extends React.Component<any, any> {

  render(){
    const errorInfo ={url : 'user',title :'404' ,desc :'抱歉，您访问的页面不存在',buttonText :'返回首页' ,img:`${notFound}`};
    return (
      <Abnormal {...errorInfo}/>
    );

  }


}

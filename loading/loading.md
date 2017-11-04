# 关于loading的总结
一共有四种方法来实现loading效果
###### 第一种，通过判断readyState的状态来实现，简单方便
只需从网上下载你喜欢的loading图片，通过一个判断就可以实现

###### 第二种，显示在头部的loading

方法：在每一张图片加载完成时，手动改变border的宽度，感觉有些麻烦

###### 第三种，css3来实现，重点学会css3，思想和第一种一样，通过判断状态实现loading的隐藏

###### 第四种，ajax实时更新







### 用到的一些css3的总结
##### css3的动画
- @keyframes+动画名

用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。0% 是动画的开始，100% 是动画的完成。

```
@keyframes move{
    from {background-color:red;}
    to {background-color:blue;}
}
```
- transform属性
    - rotate旋转
    ```
    transform: rotate(0edg);//保持不变
    transfrom: rotate(360edg)//旋转360°
    ```
    - scale缩放
        - scaleX x轴缩放
        - scaleY y轴缩放
        ```
        transform:scale(1.5, 1.5);//X,Y一起放大1.5倍
        transform:scaleX(0.4)//X轴缩小0.4
        ```
- box-shadow盒子阴影
    - box-shadow: x偏移量 Y偏移量 [阴影模糊半径] [阴影扩展半径] [阴影颜色] [投影方式]
    ```
    box-shadow: 10px 10px 50px 20px pink inset;
    ```
    - 注意
        - 偏移量允许负值，阴影颜色默认为黑色，投影方式默认为外阴影（设置inset为内阴影，不过inset参数只能写在参数第一个或最后一个）

        - 阴影模糊半径：此参数可选，其值只能是为正值，如果其值为0时，表示阴影不具有模糊效果，其值越大阴影的边缘就越模糊；

        - 阴影扩展半径：此参数可选，其值可以是正负值，如果值为正，则整个阴影都延展扩大，反之值为负值时，则缩小；
### 实现placeholder的颜色变化和动画效果

使用**placeholder**属性可以为表单设置预设文字，但是对表单元素使用以下CSS时，并不能改变placeholder的颜色

```css
input[type=text]{color: red;} /*无效*/
```

使用以下的伪类就可以实现placeholder的颜色值更改

```css
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: pink;
}
::-moz-placeholder { /* Firefox 19+ */
  color: pink;
}
:-ms-input-placeholder { /* IE 10+ */
  color: pink;
}
:-moz-placeholder { /* Firefox 18- */
  color: pink;
}

```

直接使用的话，会更改全局的placeholder。

可以在伪类前加上指定的表单元素来改变指定表单元素。

除了改变颜色之外，对于文字的任何操作都能在其上使用，包括动画。

一个简单的 placeholder 动画 ：[点我查看](http://codepen.io/chriscoyier/pen/CvoeL)
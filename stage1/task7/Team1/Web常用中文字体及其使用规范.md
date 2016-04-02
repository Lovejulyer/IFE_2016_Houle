### Web常用中文字体及其使用规范

> 本文内容不包括引入的外部字体，仅介绍系统自带的字体及其使用规范。

#### 系统自带中文字体

**Windows**：

- 黑体：SimHei
- 宋体：SimSun
- 新宋体：NSimSun
- 仿宋：FangSong
- 楷体：KaiTi
- 仿宋GB2312：FangSongGB2312
- 楷体GB2312：KaiTiGB2312
- 微软雅黑：Microsoft YaHei (win7以上)

**OS X：**

- 冬青黑体：Hiragino Sans GB
- 华文细黑：STHeiti Light (又名 STXihei)
- 华文黑体：STHeiti
- 华文楷体：STKaiti
- 华文宋体：STSong
- 华文仿宋：STFangsong

**安装MicroSoft Office后，多出的字体：**

- 隶书：LiSu
- 幼圆：YouYuan
- 华文细黑：STXihei
- 华文楷体：STKaiti
- 华文宋体：STSong
- 华文中宋：STZhongsong
- 华文仿宋：STFangsong
- 方正舒体：FZShuTi
- 方正姚体：FZYaoti
- 华文彩云：STCaiyun
- 华文琥珀：STHupo
- 华文隶书：STLiti
- 华文行楷：STXingkai
- 华文新魏：STXinwei

  ​

### 使用规范

1. 英文字体优先指定
2. 先给出中文字体的英文表示，再给出中文表示
3. 最后使用 **serif**  ，使得前面字体均无效时，字体由系统自行决定。

示例如下：

```css
font-family: Verdana, Helvetica  		   /*英文字体优先指定*/
			 "Microsoft YaHei", "微软雅黑", /*中英文同时给出, for Windows*/
			 "STXihei", "华文细黑",  		/*中英文同时给出，for Mac OS X*/
			 serif;    					  /*前面字体都无效，由系统决定字体*/
```
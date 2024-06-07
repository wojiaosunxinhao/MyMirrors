const settings = [  
    {  
        title: "MyMirrors",  //标题
        background_link: "https://tse4-mm.cn.bing.net/th/id/OIP-C.SDn5dU0UTRnXq3N_4Y-VbgHaE8?rs=1&pid=ImgDetMain", // 图片背景链接  
        header_text: "MyMirrors",  //header头部文本
        bilibili_home: "https://www.bilibili.com/" // 你的B站主页链接  
    }  
];  
const articleContents = [  
    {  
        title: "Ubuntu 24.04",  
        content: "[img](https://assets.ubuntu.com/v1/3b5fa561-mascot-numbat@2x.png)[endl]下载专为桌面PC和笔记本精心打造的Ubuntu长期支持(LTS)版本。 [endl]LTS版本将提供免费安全和维护更新至2029年4月。点击[downlink]按钮下载。",  
        download_link: "https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso" // 下载链接
    }  
];  
/*
假设我有2个系统，Windows Vienna Windows 10精简版
则需要定义articleContents方括号里面的内容。
const articleContents = [
    {
        title: "Windows Vienna",
        content: "截图:[endl][img](https://tse4-mm.cn.bing.net/th/id/OIP-C.SDn5dU0UTRnXq3N_4Y-VbgHaE8?rs=1&pid=ImgDetMain)[endl]Windows Vienna 是一个很漂亮的Windows Vista魔改版。它具有紫色的界面。[downlink]",
        download_link: "没有啦"
    },
    {
        title: "Windows 10精简版",
        content: "截图:[endl][img](https://tse4-mm.cn.bing.net/th/id/OIP-C.SDn5dU0UTRnXq3N_4Y-VbgHaE8?rs=1&pid=ImgDetMain)[endl]这个Windows10精简版阉割了大量臃肿组件，将实用的功能集合进了这个系统。[downlink]",
        download_link: "没有啦"
    }
];
*/
/*
假设我是B站的一位UP主，我要用这个页面来做我的镜像站，想添加一个关于我的BiliBili主页的超链接。
则需要定义settings方括号里面的内容。
const settings = [
    {
        title: "MyMirrors",//这是网站访问时的标题，可以更改
        background_link: "https://tse4-mm.cn.bing.net/th/id/OIP-C.SDn5dU0UTRnXq3N_4Y-VbgHaE8?rs=1&pid=ImgDetMain",//这是背景图片，也可以更改。
        header_text: "MyMirrors",//这是顶部的标题，可以修改
        bilibili_home: "https://www.bilibili.com/"// 在这里填写你的B站主页链接！
    }
];
*/
//可以在这里面发文章，也可以添加系统下载链接啥的。
//唯一不足的就是没有评论QWQ
//相信大家都不用评论的吧QWQ
/*
一个系统的详情页这么写：
图片：[img](图片链接)
换行：[endl]
超链接：[downlink]
提取码：[passwd](提取码)
超链接[downlink]指向下面的download_link内容。就是下载链接。在这里https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso，就是我们所说的下载链接。
*/
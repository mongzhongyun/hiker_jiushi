var updateLog = {
    "newVersion":parseFloat(5.4.toFixed(1)),
    "newVersionlog":{
"5.4":"2024年11月20日 快搜DIY直接跳转风影和云盘君.简，修复追剧周表的bug",         
"5.3":"2024年11月17日 移库修改远程依赖",         
"5.2":"2024年7月12日 优化首页和片库动态刷新的bug",           
"5.1":"2024年7月11日 追剧周表获取网页星期排序，也可以长按菜单切换排序，默认周一开头",           
"5.0":"2024年7月10日 姗姗来迟，首页和片库更新了动态刷新界面元素，追剧周表长按菜单切换周日周一排序，默认周日开头,获取网站星期排序",           
"4.9":"2024年7月1日  优化Icon图片加载",          
"4.8":"2024年6月30日 优化部分Icon等图片加载，修复小bug",          
"4.7":"2024年6月21日 优化首页加载，修复小bug",              
"4.6":"2024年6月4日  通免支持嗅探阿里网盘，自动适配选集样式",      
"4.5":"2024年5月12日 通免支持嗅探夸克网盘，修复其他小bug ",      
"4.4":"2024年3月12日 修复搜索菜单顺搜报错bug，增添手动导入顺搜 ",      
"4.3":"2023年10月5日 二级选集更新了壹隅大佬超帅的分页选集样式，选集翻页阈值和每页数量可以在设置里调节，赶紧升级一波",           
"4.2":"2023年9月25日 🎑中秋节将至，模板迎来升级。菜单导航可以切换了(参考了聚影菜单设置，感谢帅√`人才大佬)；增加收藏页面，增加顺搜开关(开关设置了俩)；二级页面详情改用动态等等 预祝大家双节快乐🥮🎉",       
"4.1":"2023年8月31日 修复部分背景图片不显示的问题；增添B类自定义模板，提高兼容性；轮播增添标题；修复其他小问题。 ",      
"4.0":"2023年8月3日 模板轻量优化升级 加载速度和反应速度都变快了，请务必升级！速度如有提升请不吝点赞。 ",              
"3.9":"2023年7月8日 小程序也能直接打开最近小程序、收藏和书签啦 长按首页按钮等处就能打开它们 ",      
"3.8":"2023年7月6日 主页添加设置菜单，修复部分图片不显示问题，删除片库大分类的设置接口",       
"3.7":"2023年7月3日 封装设置页面代码，给添加了轮播长按操作，方便打开书签、收藏、以及最近使用过的小程序，修复小问题 ",     
"3.6":"2023年7月1日 美化设置菜单(仿照了随风大佬布局合理美观大方的设置页面)",        
"3.5":"2023年7月1日 长按网站轮播可以打开设置菜单",    
"3.4":"2023年7月1日 增加网站轮播板块, 感谢大佬 狗浩啊&Skins漂&α，记得到仓库升级小程序最新版",    
"3.3":"2023年6月16日 修复图标地址",    
"3.2":"2023年1月1日 2023年元旦快乐！本次增添了最新章节代码 感谢壹大佬给力出手，小程序需要升级最新版本",
"3.1":"2022年12月2日 增加一个二级快速搜索DIY小功能 可以在设置里解锁",       
"3.0":"2022年10月30日 修改点二级小bug",     
"2.9":"2022年10月16日 更新默认通免",   
"2.8":"2022年10月14日 在设置里添加模板示范以及版本日志",     
"2.7":"2022年10月14日 修改通免选择样式", 
"2.6":"2022年10月13日 增加小棉袄通免",
"2.5":"2022年8月23日 引入了道长验证码，稍微修改二级",
"2.4":"2022年8月22日 增加无图周表默认样式",
"2.3":"2022年8月21日 优化精简一级模板,主菜单可以按需增减",
"2.2":"2022年8月15日 启动自动检测升级",
"2.1":"2022年8月14日 增添检测升级按钮",
"2.0":"2022年8月12日 增加个性化设置,一级和二级的样式可改，还在道长通免的基础上添加道长封装的香免",
"1.0":"2022年07月28日 获得道长授权，模仿dr模板建档。道长 yyds！！！其次感谢壹大佬很多好用的代码。"
    }
};    
var version={
    author:"九石",
 ver:"5.4",
requireId:"https://ooooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоοοοоοοoоᴏоοоoᴏοоᴏᴏοоᴏοoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооᴏoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооοοооᴏοоοοοᴏoоoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοooоοᴏοoοоοοοоoοoоᴏоοоооοᴏoᴏ",
// requireIdo:"https://oooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоoᴏοоᴏᴏοоοoοоοοoоᴏоοоᴏоοоοοοᴏοooоᴏᴏοоοoοоoοοоᴏоoᴏоοoᴏoοοоοoοоᴏᴏοᴏοοoᴏοοoоᴏᴏοооoοоoοοооοοооᴏοоοοοᴏoоoоᴏᴏoоᴏοoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοoᴏοοᴏоοοooоοᴏοoοоοοοоoοoоᴏоοоооοᴏoᴏ",
 requirelId:"hiker://files/rules/91/Btea.js",
 update:'2024/11/20 08:10',
 info:updateLog.newVersionlog,
 requirefile : "hiker://files/rules/dzHouse/Btea_config.js"
};
let defaultBteaConfigs = {
    quickSearchConfigs: {
        mode: "scroll_button",
        order: []
    },
    nowVersion: `${version.ver}`  
}

putVar("Bt依赖",version.requireId);
putVar('Bt本地依赖',version.requirelId);
if (!fetch(version.requirefile)) {writeFile(version.requirefile, JSON.stringify(defaultBteaConfigs));}
putVar('Btea_config',version.requirefile);
    //eval (fetch(getVar('Bt本地依赖')));
    //require (getVar('Bt依赖'))
    // 遵循“单一职责原则”，确保每个函数只做一件事，并且尽量保持简洁和清晰。同时，也要考虑到代码的性能和维护成本
    // 算法优化、减少不必要的计算或内存使用等方面才能获得性能上的改进
function LVersion() {
    
    require(getVar('Bt依赖'));
    const nowVersion =version.ver;
    const nowtime = Date.now();
    const oldtime = parseInt(getItem('VersionChecktime','0').replace('time',''));
    let update = version.update;let localDate = new Date(update);
            
    if (getMyVar('Btea-VersionCheck', '0') == '0' && nowtime > (oldtime+6*60*60*1000)) {

    let requireId = version.requireId;
    try {
        const webLib = fetch(version.requireId);
        const webVer = (function(webLib) {
                eval(webLib);
                return version;
            })(webLib);
        const webLog = (function(webLib) {
                eval(webLib);
                return updateLog;
            })(webLib);    
            }catch (e) {
            hideLoading();
            return 'toast://远程服务器通讯错误,本次检测升级失败\n'+e.message;
        }
 let webDate = new Date(webVer.update);
        if (webDate>localDate||webVer.ver > nowVersion) {
            //log('进入升级自检');
            hideLoading();
            let msg = '版本:'+nowVersion+'=>'+webVer.ver+'\n'+webLog.newVersionlog[eval(parseFloat(webVer.ver)).toFixed(1)]+'\n'+'立即升级?';  
  confirm({
                    title:'发现新版本，是否更新？', 
                    desc:'qq',
                    content:msg, 
                    confirm:`deleteCache();refreshPage();`, 
                    cancel:''
                })                    
  putMyVar('VersionCheck', '1');
  setItem('VersionChecktime',nowtime+"time");
  }else{
        putMyVar('Btea-Version', '-V'+nowVersion);
        //log('检测后未升级')
    }
}
};
function Bb(text) {
    var IconsNum = getItem("rmtitcol");
    if (IconsNum == 1 || IconsNum == 2 || IconsNum == 3) {
        return '<b>' + text + '</b>';
    } else {
        return '““””<b>' + text + '</b>';
    }
}

function redd(text) {
    var IconsNum = storage0.getItem("rmtitcol");
    if (IconsNum == 1 || IconsNum == 2 || IconsNum == 3) {
        return '<b><span style="color: #FA7298">' + text + '</span></b>';
    } else {
        return '““””<b><span style="color: #FA7298">' + text + '</span></b>';
    }
}
function red(text) {
    return '<b><span style="color: #FA7298">' + text + '</span></b>';
}

function color(text, color) {
    text = text.toString();
    if (text.startsWith('““””')) {
        text = text.replace('““””', '');
    }
    return '““””<font color="' + color + '">' + text + '</font>';
}

function htmlTag(tag, text) {
    text = text.toString();
    if (text.startsWith('““””')) {
        text = text.replace('““””', '');
    }
    return '““””<' + tag + '>' + text + '</' + tag + '>';
}

function small(text) {
    return htmlTag('small', text);
}

function right(text) {
    return '<span style="float:right">' + text + '</span>';
}

function blank() {
    return '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t';
}

function wklist(id, _weeklist) {
    _weeklist = _weeklist.replace("#id", id);
    return _weeklist;
}

function isPic(str) {
    return /\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(str);
}

function gbk编码(code) {
    return encodeStr(code, 'GBK');
}

function white(text) {
    return color(text, "#f0f0f4");
}

function addTb(html) { 
    return /<td>/.test(html) && /<\/td>/.test(html) && !/<table>/.test(html) ? ('<table>' + html + '</table>') : html;
}

var 取随机颜色 = function() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
} 
function color2(text, color) {
    text += "";
    if (text.indexOf("““””") === 0) {
        text.replace("““””", "");
    }
    return "<font color='" + color + "'>" + text + "</font>";
}


function htmlTag2(tag, text) {
    //text += "";
    if (text.indexOf("““””") === 0) {
        text = text.replace("““””", "");
    }

    return "<" + tag + ">" + text + "</" + tag + ">";
}

function small2(text) {
    return htmlTag2("small", text);
}
//提取网址中的主页域名 
function getHomepageUrl(url) {
    // 检查输入是否为非空、非假、非正常的网址
    if (!url || typeof url !== 'string' || !/^http?:\/\//i.test(url)) {
        return ''; // 或者返回其他默认值，例如空字符串 ''
    }
    
    const protocol = url.startsWith("http://") ? "http://" : url.startsWith("https://") ? "https://" : "";
    const remainingUrl = url.slice(protocol.length);
    const slashIndex = remainingUrl.indexOf("/");
    
    if (slashIndex === -1) {
        return protocol + remainingUrl;
    } else {
        return protocol + remainingUrl.slice(0, slashIndex);
    }
}

function fixSemicolon(code) {
    // 使用正则表达式匹配分号
    var semicolonRegex = /;\s*$/;
    
    // 检查代码是否已经有分号
    if (semicolonRegex.test(code)) {
      return code; // 代码已经有分号，不需要修改
    } else {
      // 代码缺少分号，添加分号后返回
      return code + ';';
    }
  }
//加载Icon图片到本地  

 
//感谢壹隅大佬翻页模式代码  
function funcLoadpage(d, obj) {
    obj = obj || JSON.parse(readFile("Object.json", 0));
    let col_type = obj.col_type; //二级选集样式
    let tab = obj.tab; // 线路数组
    //log('tab：'+tab)
    let All_Lists = Array.isArray(obj.list) ? obj.list : [] // 选集列表完整数据,请确保是强制正序的
    //log('All_Lists：'+All_Lists)
    let 每页数量 = obj.size; // 分页的每页数量        
    let 翻页阀值 = obj.over; // 分页的翻页阀值，超过多少才显示翻页   
    //log("当前线路数: "+getMyVar("tabnum", "0"));
    let tab_Lists = All_Lists[parseInt(getMyVar("tabnum", "0"))];
    /*
    if (tab_Lists.length > 1) {
        tab_Lists = force_order(tab_Lists);
    }*/
    //log(tab_Lists)
    let list_cnt = tab_Lists.length;
    let 最大页数 = Math.ceil(list_cnt / 每页数量);
    putMyVar("最大页数", 最大页数);
    putMyVar("每页数量", 每页数量);
    let nowPage = parseInt(getMyVar('选集翻页', '1')) || 1; //当前页数
    if (nowPage > 最大页数) { //防止切换线路导致页数数组越界
        nowPage = 最大页数;
        putMyVar('选集翻页', '' + nowPage);
    }
    //log("当前页数:"+getMyVar('选集翻页', '1'))
    let showList, showList_cnt;
    if (list_cnt > 翻页阀值 && getMyVar('选集显示', '分页') === '分页') {
        let maxNum = 每页数量 * nowPage; //第一页的话,最大显示20*1集,第2页41-80集       
        showList = tab_Lists.slice(((nowPage - 1) * 每页数量), maxNum);
        showList_cnt = showList.length
    } else {
        showList_cnt = tab_Lists.length;
    }

    //log("showList_cnt:"+showList_cnt)
    putMyVar("showList_cnt", showList_cnt);
    putMyVar("list_cnt", list_cnt);
    //线路
    var funcTab = function(tabs, tab_type) {
        //tabs为线路数组，需要处理好后传入, eg: ["线路1"]
        if(!tab_type){
            tab_type = config.tab样式?config.tab样式:(tabs.length > 10 ? "text_5" : "scroll_button");
        }
        let d = [];
        tabs.forEach((Tabname, i) => {
            d.push({
                title: getMyVar("tabnum", "0") == i ? getHead(Tabname) : Tabname,
                url: $("#noLoading##noHistory#").lazyRule((tabs, getHead, i, funcLoadpage) => {
                    if (getMyVar("tabnum", "0") != i) {
                        updateItem("tabid" + getMyVar("tabnum", "0"), {
                            title: tabs[parseInt(getMyVar("tabnum", "0"))],
                        });
                        updateItem("tabid" + i, {
                            title: getHead(tabs[i]),
                        });
                        putMyVar("tabnum", i);

                        //log("点击:"+getMyVar("tabnum"));    
                        let d = []
                        funcLoadpage(d)
                    }
                    //return 'toast://切换成功!'
                    return "hiker://empty";
                }, tabs, getHead, i, funcLoadpage),
                col_type: tab_type,
                extra: {
                    id: "tabid" + i
                },
            });
        });
let showcol = config.tab样式?config.tab样式: "scroll_button";  
let settings = {
            title: '⚙️设置',
            col_type: showcol||'scroll_button',
            url: $().rule((color, htmlTag, blank) => {
            
            require(getVar('Bt依赖'));
             setting();
            }, color, htmlTag, blank)
        } 
d.push(settings);        
        d.push({
            col_type: "line",
            extra: {
                id: 'tab_Seps' // 给翻页组件做id用
            }
        });
        return d
    }
    //翻页按钮（状态）
    function pageState() {
        let showCol = 'avatar';
        let showTitle = color('翻页模式  本页:\t', '#585858') + color(getMyVar("showList_cnt"), '#098AC1') + color('\t集, 共计:\t', '#585858') + color(getMyVar("list_cnt"), '#098AC1') + color('\t集\t\t第:\t', '#585858') + color('$page' + '\t/\t' + getMyVar("最大页数"), '#098AC1') + color('\t页', '#585858');
        showTitle = small(showTitle);
        showTitle = showTitle.replace('$page', getMyVar('选集翻页', '1')).replace(/““””/g, '');
        let shutTitle = color('翻页模式已关闭,点击启用', '#585858');
        shutTitle = small(shutTitle).replace(/““””/g, '');
        shutTitle = shutTitle.replace(/““””/g, '');
        let showPic = $.getImage('http://123.56.105.145/tubiao/messy/55.svg');
        let shutPic = $.getImage('http://123.56.105.145/tubiao/messy/63.svg');
        let pageTitle = '';
        let pagePic = '';
        if (getMyVar('选集显示', '分页') === '分页') {
            pageTitle = showTitle;
            pagePic = showPic;
        } else {
            pageTitle = shutTitle;
            pagePic = shutPic;
        }
        let d = [];
        d.push({
            title: pageTitle,
            col_type: showCol,
            pic_url: pagePic,
            url: $('确认切换分页显示状态?').confirm((showTitle, showPic, shutTitle, shutPic, funcLoadpage) => {
                let nextMode = getMyVar('选集显示', '分页') === '分页' ? '全部' : '分页';
                let pageTitle, pagePic;
                if (nextMode === '分页') {
                    pageTitle = showTitle;
                    pagePic = showPic;
                } else {
                    pageTitle = shutTitle;
                    pagePic = shutPic;
                }
                updateItem('pageState', {
                    title: pageTitle,
                    pic_url: pagePic
                });
                putMyVar('选集显示', nextMode);
                let d = [];
                funcLoadpage(d);
                return 'hiker://empty'
            }, showTitle, showPic, shutTitle, shutPic, funcLoadpage),
            extra: {
                id: 'pageState',
                cls: 'state_cls'
            }
        });
        d.push({
            col_type: "line",
            extra: {
                id: 'state_Spes', // 组件做id用
                cls: 'state_cls'
            }
        });
        return d
    };
    //顺序
    function funcOrder(tabs) {
        tabs = tabs || [''];
        let order_type = "text_icon";
        let up_icon = $.getImage("http://123.56.105.145/tubiao/messy/147.svg");
        let down_icon = $.getImage("http://123.56.105.145/tubiao/messy/151.svg");        
        let title = '<small>'+color("$now_tab: 选集列表共 ", "#098AC1") + color(getMyVar("list_cnt"), "#d96715") + color(" 集", "#098AC1")+'</small>';
        let title2 = title.replace('$now_tab', tabs[getMyVar("tabnum", "0")]);
        let d = [];
        d.push({
            title: title2.replace(/““””/g, ""),     
            pic_url: getMyVar("顺序", "正序") === "逆序" ? up_icon : down_icon,     
            col_type: order_type,
            url: $("#noLoading#").lazyRule((up_icon, down_icon, funcLoadpage) => {

                if (getMyVar('顺序', '正序') === '逆序') {
                    putMyVar('顺序', '正序');
                } else {
                    putMyVar('顺序', '逆序');
                }
                let orderNow = getMyVar('顺序', '正序');                
                updateItem('orderid', {
                    pic_url: orderNow === "逆序" ? up_icon : down_icon
                });
                //log("点击顺序"+orderNow)
                if (getMyVar("list_cnt") > 1) {
                    let d = []
                    funcLoadpage(d)
                }
                return 'toast://已切换顺序为:' + orderNow
                //return "hiker://empty";
            }, up_icon, down_icon, funcLoadpage),
            extra: {
                id: "orderid",
                cls: 'order_cls',
                lineVisible: false
            },
        });
        d.push({
            col_type: "blank_block",
            extra: {
                id: 'order_Spes', // 给组件做id用
                cls: 'order_cls'
            }
        });
        return d
    };
    //log("当前顺序为:. "+getMyVar('顺序', '正序'))
    let 分页数组 = [];
    for (var i = 1; i <= 最大页数; i++) {
        var total1 = parseInt((i - 1) * 每页数量);
        var total2 = parseInt(i * 每页数量);
        //log("分页数组生成页码: "+getMyVar('选集翻页', '1'));
        if (i == getMyVar('选集翻页', '1')) {
            total1 = '🔻' + total1
        }
        //log(total1)
        if (i == parseInt(最大页数)) {
            total2 = list_cnt;
        }
        分页数组.push(total1 + '-' + total2)
    };
    //log(分页数组)
    var 顶部按钮 = function() {
        let topB = [];
        let 最大页数 = getMyVar("最大页数");
        let 每页数量 = getMyVar("每页数量");
        //log("最大页数: " + 最大页数)
        //log("当前页数:" + getMyVar('选集翻页', '1'))

        topB.push({
            title: '📑',
            col_type: 'scroll_button',
            url: 'hiker://empty',
            extra: {
                id: '占位符',
                cls: 'topPage'
            }
        });
        分页数组.forEach((item, i) => {
            if (/🔻/.test(item)) {
                item = item.replace('🔻', '');
            }
            topB.push({
                title: (parseInt(getMyVar('选集翻页', '1')) - 1) == i ? getHead(item) : item,
                url: $("#noLoading##noHistory#").lazyRule((getHead, getbtnsColor, 分页数组, i, funcLoadpage) => {
                    if ((parseInt(getMyVar('选集翻页', '1')) - 1) != i) {
                        updateItem("topB" + (parseInt(getMyVar('选集翻页', '1')) - 1), {
                            title: 分页数组[(parseInt(getMyVar('选集翻页', '1')) - 1)].replace('🔻', ''),
                        });
                        updateItem("topB" + i, {
                            title: getHead(分页数组[i]).replace('🔻', ''),
                        });
                        putMyVar("选集翻页", (i + 1));
                        updateItem("底分页1", {
                            title: getbtnsColor(getMyVar('选集翻页', '1') + ' / ' + getMyVar("最大页数")),
                        });
                        //log("点击选集翻页数: " + getMyVar('选集翻页', '1'))
                        //log(typeof(funcLoadpage))
                        deleteItemByCls('playList');
                        let d = [];
                        funcLoadpage(d);
                    }
                    //return 'toast://切换成功!'
                    return "hiker://empty";
                }, getHead, getbtnsColor, 分页数组, i, funcLoadpage),
                col_type: "scroll_button",
                extra: {
                    id: 'topB' + i,
                    cls: 'topPage'
                }
            });
        })
        topB.push({
            col_type: "line",
            extra: {
                id: 'top_Spes', // 给翻页组件做id用
                cls: 'topPage'
            }
        });
        return topB
    };

    var 底部按钮 = function() {
        let btns = [];
        let 最大页数 = getMyVar("最大页数");
        let 每页数量 = getMyVar("每页数量");
        let list_cnt = getMyVar("list_cnt");
        btns.push({
            title: getbtnsColor(getMyVar('选集翻页', '1') + ' / ' + 最大页数),
            col_type: "text_center_1",
            url: $(分页数组, 3, '分页范围选择').select((getHead, getbtnsColor, 分页数组, 最大页数, 每页数量, funcLoadpage) => {
                //log("input:" + input)
                let to2 = input.split('-')[1];
                let pageNum = Math.ceil(parseInt(to2) / 每页数量);
                if (getMyVar('选集翻页', '1') != pageNum) {
                    //log("范围选择翻页数:" + getMyVar("选集翻页", "1"))
                    putMyVar("选集翻页", pageNum);
                    updateItem("topB" + (parseInt(getMyVar('选集翻页', '1')) - 1), {
                        title: 分页数组[(parseInt(getMyVar('选集翻页', '1')) - 1)].replace('🔻', ''),
                    });
                    updateItem("topB" + parseInt(pageNum), {
                        title: getHead(分页数组[pageNum]).replace('🔻', ''),
                    });
                    updateItem("底分页1", {
                        title: getbtnsColor(pageNum + ' / ' + 最大页数),
                    });
                    let d = [];
                    funcLoadpage(d)
                }
                return 'hiker://empty'
            }, getHead, getbtnsColor, 分页数组, 最大页数, 每页数量, funcLoadpage),
            extra: {
                id: '底分页1',
                cls: 'footPage',
                lineVisible: false
            }
        });
        btns.push({
            title: '✈️跳集',
            col_type: "text_5",
            url: $(list_cnt, '请输入要跳转到的集数').input((max, 每页数量, funcLoadpage) => {
                if (isNaN(parseInt(input))) {
                    return 'toast://输入有误,请输入一个1~' + max + '的数字'
                }
                let toNum = parseInt(input);
                if (toNum < 1 || toNum > max) {
                    return 'toast://输入有误,请输入一个1~' + max + '的数字'
                }
                let nowPage = parseInt(getMyVar('选集翻页', '1')) || 1; //当前页数
                let toPage = Math.ceil(toNum / 每页数量);
                if (nowPage == toPage) {
                    return 'toast://本页就是列表元素所在页!';
                }
                putMyVar('选集翻页', '' + toPage);
                let d = [];
                funcLoadpage(d);
                return 'toast://已跳到列表元素第' + toNum + '个所在页码:' + toPage
            }, list_cnt, 每页数量, funcLoadpage),
            extra: {
                cls: 'footPage',
            }
        });
        btns.push({
            title: '🔝跳页',
            col_type: "text_5",
            url: $(1, '请输入要跳转到的页数').input((最大页数, 每页数量, funcLoadpage) => {
                if (isNaN(parseInt(input))) {
                    return 'toast://输入有误,请输入一个1~' + 最大页数 + '的数字'
                }
                let toPage = parseInt(input);
                if (toPage < 1 || toPage > 最大页数) {
                    return 'toast://输入有误,请输入一个1~' + 最大页数 + '的数字'
                }
                let nowPage = parseInt(getMyVar('选集翻页', '1')) || 1; //当前页数
                if (nowPage == toPage) {
                    return 'toast://本页就是第' + toPage + '页';
                }
                putMyVar('选集翻页', '' + toPage);
                let d = [];
                funcLoadpage(d);
                return 'toast://已跳到第' + toPage + '页'
            }, 最大页数, 每页数量, funcLoadpage),
            extra: {
                cls: 'footPage',
            }
        });
        btns.push({
            title: '⏮️上页',
            col_type: "text_5",
            url: $('#noLoading#').lazyRule((每页数量, funcLoadpage) => {
                let nowPage = parseInt(getMyVar('选集翻页', '1')) || 1;
                let toPage = nowPage - 1;
                if (toPage > 0) {
                    putMyVar('选集翻页', '' + toPage);
                    let d = [];
                    funcLoadpage(d);
                    return 'hiker://empty'
                } else {
                    return 'toast://已经没有上一页了!'
                }
            }, 每页数量, funcLoadpage),
            extra: {
                cls: 'footPage',
            }
        });
        btns.push({
            title: '⏭️下页',
            col_type: "text_5",
            url: $('#noLoading#').lazyRule((最大页数, 每页数量, funcLoadpage) => {
                let nowPage = parseInt(getMyVar('选集翻页', '1')) || 1;
                let toPage = nowPage + 1;
                if (toPage > 最大页数) {
                    return 'toast://已经没有下一页了!'
                }
                putMyVar('选集翻页', '' + toPage);
                let d = [];
                funcLoadpage(d);
                return 'hiker://empty'
            }, 最大页数, 每页数量, funcLoadpage),
            extra: {
                cls: 'footPage',
            }
        });
        btns.push({
            title: '🔚尾页',
            col_type: "text_5",
            url: $('#noLoading#').lazyRule((最大页数, 每页数量, funcLoadpage) => {
                let toPage = 最大页数;
                let nowPage = parseInt(getMyVar('选集翻页', '1')) || 1; //当前页数
                if (nowPage == toPage) {
                    return 'toast://已经是最后一页啦!';
                }
                putMyVar('选集翻页', '' + toPage);
                let d = [];
                funcLoadpage(d);
                return 'toast://已跳转到第' + 最大页数 + '页'
            }, 最大页数, 每页数量, funcLoadpage),
            extra: {
                cls: 'footPage',
            }
        });
        return btns
    }
    let seps = [];
    seps.push({
        col_type: "line",
        extra: {
            id: 'line_Spes', // 给翻页组件做id用
            cls: 'playList'
        }
    })
    //线路
let showcol = config.tab样式?config.tab样式:(tabs.length > 10 ? "text_5" : "scroll_button");     
    Array.prototype.push.apply(d, funcTab(tab, showcol));
    let order_btns = funcOrder(tab);
    if (list_cnt > obj.size && getMyVar('选集显示', '分页') == '分页') {
        if (getMyVar('顺序', '正序') === '逆序') {
            showList = showList.reverse();
        }
        showList = showList.concat(seps);
        let state_btns = pageState();
        let top_btns = 顶部按钮();
        let foot_btns = 底部按钮();
        if (getMyVar('初始化', 'start') == 'start') {
            //log('数据初始化中')
            //开关                
            addItemAfter("tab_Seps", state_btns);
            Array.prototype.push.apply(d, state_btns);

            //排序            
            addItemAfter("state_Spes", order_btns);
            Array.prototype.push.apply(d, order_btns);

            putMyVar("初始化", "end");
        } else {
            //log(findItem("pageState"))
            //log(state_btns[0])
            if (getMyVar("翻页状态", "开启") == "关闭") {
                deleteItemByCls('state_cls');
                addItemAfter("tab_Seps", state_btns);
                Array.prototype.push.apply(d, state_btns);
                putMyVar("翻页状态", "开启");
            } else {
                updateItem("pageState", state_btns[0]);
            }
            updateItem("orderid", order_btns[0]);
        }

        //顶部按钮   
        deleteItemByCls('topPage');
        addItemAfter("order_Spes", top_btns);
        Array.prototype.push.apply(d, top_btns);

        //线路列表        
        deleteItemByCls('playList');
        addItemAfter("top_Spes", showList);
        Array.prototype.push.apply(d, showList);

        //底部按钮   
        deleteItemByCls('footPage');
        addItemAfter("line_Spes", foot_btns);
        Array.prototype.push.apply(d, foot_btns);

        return d
    } else if (list_cnt > obj.size && getMyVar('选集显示', '分页') == '全部') {
        if (getMyVar('顺序', '正序') === '逆序') {
            tab_Lists = tab_Lists.reverse();
        }
        let state_btns = pageState();
        if (getMyVar("翻页状态", "开启") == "关闭") {
            deleteItemByCls('state_cls');
            addItemAfter("tab_Seps", state_btns);
            Array.prototype.push.apply(d, state_btns);
            putMyVar("翻页状态", "开启");
        } else {

            updateItem("pageState", state_btns[0]);
        }

        Array.prototype.push.apply(d, pageState());
        //排序
        updateItem("orderid", order_btns[0]);
        deleteItemByCls('topPage');
        deleteItemByCls('playList');
        deleteItemByCls('footPage');
        addItemAfter("orderid", tab_Lists);
        Array.prototype.push.apply(d, tab_Lists);
        return d
    } else {
        if (getMyVar('顺序', '正序') === '逆序') {
            tab_Lists = tab_Lists.reverse();
        }
        //log("翻页模式已关闭，当前线路列表数量不足以开启翻页状态!")
        if (getMyVar('初始化', 'start') == 'start') {
            //log('数据初始化中')

            //排序            
            addItemAfter("tab_Seps", order_btns);
            Array.prototype.push.apply(d, order_btns);
            addItemAfter("orderid", tab_Lists);
            Array.prototype.push.apply(d, tab_Lists);
            putMyVar("初始化", "end");
        } else {
            deleteItemByCls('state_cls');
            putMyVar("翻页状态", "关闭");
            //log(getMyVar("翻页状态", "开启"))
            //排序        
            updateItem("orderid", order_btns[0]);
            deleteItemByCls('topPage');
            deleteItemByCls('footPage');
            deleteItemByCls('playList');
            addItemAfter("orderid", tab_Lists);
            Array.prototype.push.apply(d, tab_Lists);
        }
        return d
    }
    
    //公共方法
    function color(text, color) {
        text += "";
        if (text.indexOf("““””") === 0) {
            text.replace("““””", "");
        }
        return "““””<font color='" + color + "'>" + text + "</font>";
    }

    function htmlTag(tag, text) {
        text += "";
        if (text.indexOf("““””") === 0) {
            text.replace("““””", "");
        }
        return "““””" + "<" + tag + ">" + text + "</" + tag + ">";
    }

    function small(text) {
        return htmlTag("small", text);
    }

    function right(text) {
        return '<span style="float:right">' + text + "</span>";
    }

    function blank() {
        return "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
    }

    function getHead(title) {
        return '‘‘’’<strong><font color="#f13b66a">' + title + '</front></strong>';
    }

    function getbtnsColor(text) {
        return "““”” <small><small><font color='grey'>" + text + "</font> </small></small>";
    }
    var ChineseMap = {
        "零": 0,
        "一": 1,
        "壹": 1,
        "二": 2,
        "贰": 2,
        "两": 2,
        "三": 3,
        "叁": 3,
        "四": 4,
        "肆": 4,
        "五": 5,
        "伍": 5,
        "六": 6,
        "陆": 6,
        "七": 7,
        "柒": 7,
        "八": 8,
        "捌": 8,
        "九": 9,
        "玖": 9,
        "十": 10,
        "拾": 10,
        "百": 100,
        "佰": 100,
        "千": 1000,
        "仟": 1000,
        "万": 10000,
        "十万": 100000,
        "百万": 1000000,
        "千万": 10000000,
        "亿": 100000000
    };

    function ChineseToNumber(chinese_number) { //中文转数字
        let len = chinese_number.length;
        if (len === 0) return -1;
        if (len === 1) return (ChineseMap[chinese_number] <= 10) ? ChineseMap[chinese_number] : -1;
        let summary = 0;
        if (ChineseMap[chinese_number[0]] === 10) {
            chinese_number = "一" + chinese_number;
            len++;
        }
        if (len >= 3 && ChineseMap[chinese_number[len - 1]] < 10) {
            let last_second_num = ChineseMap[chinese_number[len - 2]];
            if (last_second_num === 100 || last_second_num === 1000 || last_second_num === 10000 || last_second_num === 100000000) {
                for (let key in ChineseMap) {
                    if (ChineseMap[key] === last_second_num / 10) {
                        chinese_number += key;
                        len += key.length;
                        break;
                    }
                }
            }
        }
        if (chinese_number.match(/亿/g) && chinese_number.match(/亿/g).length > 1) return -1;
        let splited = chinese_number.split("亿");
        if (splited.length === 2) {
            let rest = splited[1] === "" ? 0 : ChineseToNumber(splited[1]);
            return summary + ChineseToNumber(splited[0]) * 100000000 + rest;
        }
        splited = chinese_number.split("万");
        if (splited.length === 2) {
            let rest = splited[1] === "" ? 0 : ChineseToNumber(splited[1]);
            return summary + ChineseToNumber(splited[0]) * 10000 + rest;
        }
        let i = 0;
        while (i < len) {
            let first_char_num = ChineseMap[chinese_number[i]];
            let second_char_num = ChineseMap[chinese_number[i + 1]];
            if (second_char_num > 9)
                summary += first_char_num * second_char_num;
            i++;
            if (i === len)
                summary += first_char_num <= 9 ? first_char_num : 0;
        }
        return summary;
    };

    function force_order(list, fn) {
        //强制正序
        fn = fn || function(list) { //默认为视界的列表
            return list.map(x => x.title)
        };
        let start = Math.floor(list.length / 2); // 0
        let end = Math.min(list.length - 1, start + 1); // list.slice(-1)[0]
        let listFn = fn(list);
        let first = listFn[start];
        let second = listFn[end];
        try {
            if (first.match(/(\d+)/) && second.match(/(\d+)/)) { //数字章节的
                if (parseInt(first.match(/(\d+)/)[0]) > parseInt(second.match(/(\d+)/)[0])) {
                    list.reverse()
                }
            } else { // 中文转换
                if (ChineseToNumber(first) > ChineseToNumber(second)) {
                    list.reverse()
                }
            }
        } catch (e) {}
        return list
    };
}
//感谢壹隅大佬翻页模式代码  
function 初始化(d, obj) {
    function 储存足迹(MY_URL, size, MY_PARAMS) {
        size = size || parseInt(getItem('每页数量', '20')); //每页数量
        MY_URL = MY_URL.replace('hiker://empty##', '');
        let footHistory = JSON.parse(readFile('footHistory.json', 0) || '[]');
        let footIdex = footHistory.findIndex(x => x.url === MY_URL);
        let foot_Item = {
            url: MY_URL,
            page: parseInt(getMyVar('选集翻页', '1')),
            size: size
        };
        if (MY_PARAMS.title) {
            Object.assign(foot_Item, {
                title: MY_PARAMS.title
            });
        }
        if (footIdex > -1) {
            footHistory[footIdex] = foot_Item;
        } else {
            footHistory.push(foot_Item);
        }
        saveFile('footHistory.json', JSON.stringify(footHistory), 0);
        //log('已储存足迹:' + JSON.stringify(foot_Item));
    };

    function 加载足迹(MY_URL, size) {
        //log("正在加载足迹");
        size = size || parseInt(getItem('每页数量', '20')); //每页数量
        MY_URL = MY_URL.replace('hiker://empty##', '');
        //log("进行足迹处理")
        let footHistory = JSON.parse(readFile('footHistory.json', 0) || '[]');
        //log(footHistory)
        let footItem = footHistory.find(x => x.url === MY_URL);
        //log("find:"+JSON.stringify(footItem))
        let page = footItem && footItem.page ? footItem.page + '' : '1';
        //log("加载足迹:" + page);
        if (footItem && footItem.page && footItem.size !== size) {
            page = (footItem.page * footItem.size) / size;
            page = Math.ceil(page) + '';
            //log(`${footItem.title||''}足迹已加载,正确页数:` + page);
        }
        putMyVar('选集翻页', page);
    };

    // 选集列表必须处理完后 storage0.putMyVar('showList') 或者 saveFile('showList.json',JSON.stringify(list),0)
    let def_obj = {
        list: [], //必传
        tab: [], //必传         
        size: parseInt(getItem('每页数量', '20')), //每页数量
        over: parseInt(getItem('翻页阀值', '20')), //翻页阀值，超过多少才显示翻页组件
        col_type: getItem('按钮样式', 'text_5') || MY_RULE.col_type //二级选集样式
    }
    //log(def_obj)
    obj = obj || {};
    // 这段代码用于将一个名为obj的对象与另一个名为def_obj的对象合并
    obj = Object.assign(def_obj, obj);
    saveFile("Object.json", JSON.stringify(obj), 0);
    //log(tab_Lists)  

    let 每页数量 = obj.size; // 分页的每页数量        
    加载足迹(MY_URL, 每页数量);
    putMyVar("初始化", "start");
    addListener('onClose', $.toString((储存足迹, MY_URL, 每页数量, MY_PARAMS) => {
        储存足迹(MY_URL, 每页数量, MY_PARAMS);
        clearMyVar("初始化");
        clearMyVar("顺序");
        clearMyVar("tabnum");
        clearMyVar("选集翻页");
        clearMyVar("翻页状态");
        deleteFile("Object.json");
    }, 储存足迹, MY_URL, 每页数量, MY_PARAMS || {}));
    return funcLoadpage(d, obj)
}  
evalPrivateJS("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");
$.extend(setfunc);    
    
var 一级 = {
    A: function(首页,片库,热榜,更新,搜索) {
        addListener("onClose", $.toString(() => {
            clearMyVar("navtitle");
            clearMyVar("zd1.group");
            clearMyVar("zd2.group");
            clearMyVar("zd3.group");
            clearMyVar("ws.group");
            clearMyVar("weeknum");    

        }))
        addListener('onRefresh', $.toString(()=>{
            clearMyVar("navtitle");
            clearMyVar("zd1.group");
            clearMyVar("zd2.group");
            clearMyVar("zd3.group");
            clearMyVar("ws.group");
            clearMyVar("weeknum");

        }))        

    首页 = 首页 || false;
    片库 = 片库 || false;
    热榜 = 热榜 || false;
    更新 = 更新 || false;
    搜索 = 搜索 || false;
    //var mtitle = [首页, 片库, 热榜, 更新, 搜索].filter(item => item !== false && item !== undefined && item !== '');
    typeof 首页 !== 'undefined' && 首页 !== false ? (setItem('syid', 'on'),setItem('MY_HOME',getHomepageUrl(首页))) : setItem('syid', 'off') ;
    typeof 片库 !== 'undefined' && 片库 !== false ? (setItem('pkid', 'on')) : setItem('pkid', 'off');
    typeof 热榜 !== 'undefined' && 热榜 !== false ? (setItem('rbid', 'on')) : setItem('rbid', 'off');
    typeof 更新 !== 'undefined' && 更新 !== false ? (setItem('gxid', 'on')) : setItem('gxid', 'off');
    typeof 搜索 !== 'undefined' && 搜索 !== false ? setItem('ssid', 'on') : setItem('ssid', 'off');
    var IconsNum = parseInt(getItem("mytitcol"));
    var settingIcon = getItem('设置','on');
    var collectionIcon = getItem('收藏','on');
    //var 设置 = settingIcon !== 'off' ? '设置' : '';
    //var 收藏 = settingIcon !== 'off' ? '收藏' : '';
    var SYIcon=$.getImage("http://123.56.105.145/tubiao/more/47.png");
    var PKIcon=$.getImage("https://ooooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоοοοоοοoоᴏоοоoᴏοоᴏᴏοоᴏοoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооᴏoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооοοооᴏοоοοοᴏoоoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοᴏooοооᴏoоᴏоοᴏooοоᴏоοоοᴏ");
    var RBIcon=$.getImage("http://123.56.105.145/tubiao/more/74.png");
    var GXIcon=$.getImage("http://123.56.105.145/tubiao/more/157.png");
    var SSIcon=$.getImage("http://123.56.105.145/tubiao/more/168.png");
    var SCIcon=$.getImage("https://ooooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоοοοоοοoоᴏоοоoᴏοоᴏᴏοоᴏοoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооᴏoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооοοооᴏοоοοοᴏoоoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοᴏoᴏοоoᴏoоᴏоοоооοᴏooοоοᴏ");
    var SZIcon=$.getImage("http://123.56.105.145/tubiao/more/292.png");
    var LSIcon=$.getImage("http://123.56.105.145/tubiao/more/200.png");
    var ZJIcon=$.getImage("http://123.56.105.145/tubiao/more/326.png");
    var menuIcons = { 
        "首页": 首页 ? { img: SYIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '首页'); clearMyVar("ws.group");clearMyVar("zd1.group");clearMyVar("zd2.group");clearMyVar("zd3.group");updateItem("navtitle", { title: '首页' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "片库": 片库 ? { img: PKIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '片库'); updateItem("navtitle", { title: '片库' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "热榜": 热榜 ? { img:RBIcon , url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '热榜'); updateItem("navtitle", { title: '热榜' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "更新": 更新 ? { img: GXIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '更新'); updateItem("navtitle", { title: '更新' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "搜索": 搜索 ? { img: SSIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '搜索'); updateItem("navtitle", { title: '搜索' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "收藏": { img: SCIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '收藏'); updateItem("navtitle", { title: '搜索' }); refreshPage(false); return "hiker://empty"; }), },
        "设置": { img: SZIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '设置'); updateItem("navtitle", { title: '设置' }); refreshPage(false); return "hiker://empty"; }), },
        "历史": { img: LSIcon, url: "hiker://history?rule=" + MY_RULE.title },
        "最近": { img: ZJIcon, url:$('#noLoading#').lazyRule(() => {  let rules = getLastRules(20); let sel_rules = rules.map(it => it.title); return $(sel_rules, 2, '请选一个最近使用的小程序').select(() => { return "hiker://home@" + input })  }), } 
      };
      menuIcons = Object.keys(menuIcons) .filter(function(key) { return menuIcons[key] !== ''; }) .reduce(function(obj, key) { obj[key] = menuIcons[key]; return obj; }, {});  
      var menuNames = [];
for (var key in menuIcons) {
    if (menuIcons.hasOwnProperty(key)) {
        menuNames.push(key);
    }
}
setItem('myNavtitle', JSON.stringify(menuNames));
// log('menuNames'+menuNames)


      typeof storage0.getItem('menuIcons1') === 'object' ? setItem('menuIcons1', storage0.getItem('menuIcons1').name) : null;
      typeof storage0.getItem('menuIcons2') === 'object' ? setItem('menuIcons2', storage0.getItem('menuIcons2').name) : null;
      typeof storage0.getItem('menuIcons3') === 'object' ? setItem('menuIcons3', storage0.getItem('menuIcons3').name) : null;
      typeof storage0.getItem('menuIcons4') === 'object' ? setItem('menuIcons4', storage0.getItem('menuIcons4').name) : null;
      typeof storage0.getItem('menuIcons5') === 'object' ? setItem('menuIcons5', storage0.getItem('menuIcons5').name) : null;
    
    let mnIcons1 = getItem('menuIcons1',"首页");
    let mnIcons2 = getItem('menuIcons2',"片库");
    let mnIcons3 = getItem('menuIcons3',getItem('rbid')=="on"?"热榜":getItem('ssid')=="on"? "搜索" : "历史");
    let mnIcons4 = getItem('menuIcons4',getItem('gxid')=="on" ? "更新":"收藏");
    let mnIcons5 = getItem('menuIcons5',"设置");
    var menuguide=JSON.stringify([mnIcons1,mnIcons2,mnIcons3,mnIcons4,mnIcons5]);
    var selnav=storage0.getItem("navtitle","首页");
    let HomemenuNav = [
      {
          title: selnav==mnIcons1? redd(selnav) :Bb(mnIcons1),
          url: menuIcons[mnIcons1].url,
          img: menuIcons[mnIcons1].img,
          col_type: 'icon_5'
          
      },
      {
          title:selnav==mnIcons2? redd(selnav) :Bb(mnIcons2),
          url: menuIcons[mnIcons2].url,
          img: menuIcons[mnIcons2].img,
          col_type: 'icon_5'
      },
      {
          title: selnav==mnIcons3? redd(selnav) :Bb(mnIcons3),
          url: menuIcons[mnIcons3].url,
          img: menuIcons[mnIcons3].img,
          col_type: 'icon_5'
      },
      {
          title: selnav==mnIcons4? redd(selnav) :Bb(mnIcons4),
          url: menuIcons[mnIcons4].url,
          img: menuIcons[mnIcons4].img,
          col_type: 'icon_5'
      },
      {
          title: selnav==mnIcons5? redd(selnav) :Bb(mnIcons5),
          url: menuIcons[mnIcons5].url,
          img: menuIcons[mnIcons5].img,
          col_type: 'icon_5',
          extra: {
            longClick: [{
                        title: '⚙️设置', js: $.toString(() => {
                        return $().rule(() => {
                        let d=[]; 
                        require(getVar('Bt依赖'));
                        setting();
                        setResult(d);                   
                        })
                        })
                        },{
              title: "🔄重置",
              js: $.toString(() => {
                  clearItem('menuIcons1');
                  clearItem('menuIcons2');
                  clearItem('menuIcons3');
                  clearItem('menuIcons4');
                  clearItem('menuIcons5');
                  refreshPage(false);
                  return "toast://已重置"
              })
          }]
          }
        }
    ]
    var t = typeof(parStr) !== 'undefined' ? parStr.split(";") : [];
    typeof parStr !== 'undefined' && parStr !== false ? (putVar('t0', parStr.split(";")[0]),putVar('t1', parStr.split(";")[1]), putVar('t2', parStr.split(";")[2]),putVar('t3', parStr.split(";")[3]),putVar('t4', parStr.split(";")[4])) : null;
    var w = typeof(week) !== 'undefined' ? week.split(";") : [];
    typeof week !== 'undefined' && week !== false ? (putVar('w0', week.split(";")[0]),putVar('w1', week.split(";")[1]), putVar('w2', week.split(";")[2]),putVar('w3', week.split(";")[3])) : null;
    var lb = typeof(轮播) !== 'undefined' ? 轮播.split(";") : [];
    typeof 轮播 !== 'undefined' && 轮播 !== false ? (putVar('lb0', 轮播.split(";")[0]),putVar('lb1', 轮播.split(";")[1]), putVar('lb2', 轮播.split(";")[2]),putVar('lb3', 轮播.split(";")[3])) : null;
    var zd = typeof(折叠) !== 'undefined' ? 折叠.split(";") : [];
    typeof(推荐1) !== 'undefined' ? (rec1 = 推荐1.split(";"), putVar('r11', rec1[3]), putVar('r12', rec1[4])) : null;
    typeof(推荐2) !== 'undefined' ? (rec2 = 推荐2.split(";"), putVar('r21', rec2[3]), putVar('r22', rec2[4])) : null;
    typeof(推荐3) !== 'undefined' ? (rec3 = 推荐3.split(";"), putVar('r31', rec3[3]), putVar('r32', rec3[4])) : null;
    typeof(推荐4) !== 'undefined' ? (rec4 = 推荐4.split(";"), putVar('r41', rec4[3]), putVar('r42', rec4[4])) : null;
    typeof(推荐5) !== 'undefined' ? (rec5 = 推荐5.split(";"), putVar('r51', rec5[3]), putVar('r52', rec5[4])) : null;
    typeof(推荐6) !== 'undefined' ? (rec6 = 推荐6.split(";"), putVar('r61', rec6[3]), putVar('r62', rec6[4])) : null;
    typeof(推荐7) !== 'undefined' ? (rec7 = 推荐7.split(";"), putVar('r71', rec7[3]), putVar('r72', rec7[4])) : null;
    typeof 片库 !== 'undefined' && 片库 !== false ? (putVar('pk1', 片库.split(";")[1]), putVar('pk2', 片库.split(";")[2])) : null;
    typeof 热榜 !== 'undefined' && 热榜 !== false ? (putVar('r1', 热榜.split(";")[1]), putVar('r2', 热榜.split(";")[2]), putVar('r3', 热榜.split(";")[3]), putVar('r4', 热榜.split(";")[4])) : null;
    var r = typeof(热榜) !== 'undefined' && 热榜 !== false ? 热榜.split(";") : undefined;
    var tt = typeof(top) !== 'undefined' ? top.split(";") : undefined;
    typeof top !== 'undefined' && top !== false ? (putVar('tt1', top.split(";")[1]), putVar('tt2', top.split(";")[2]),putVar('tt0', top.split(";")[0]), putVar('tt3', top.split(";")[3]), putVar('tt4', top.split(";")[4])) : null;
    var g = typeof(更新) !== 'undefined' && 更新 !== false ? 更新.split(";") : undefined;
    var n1 = typeof(new1) !== 'undefined' && new1 !== false ? new1.split(";") : undefined;
    var n2 = typeof(new2) !== 'undefined' && new2 !== false ? new2.split(";") : undefined;
// 存储指定ua变量
let 指定ua = (typeof(指定ua) === 'undefined' || !指定ua) ? false : 指定ua;
putMyVar('指定ua', 指定ua);
// 存储 ua 变量
let ua = config.ua === '手机' ? MOBILE_UA : PC_UA;
if (config.指定ua) {
    ua = config.指定ua;
}
if (指定ua && typeof(指定ua) === 'string') {
    ua = 指定ua;
}
putMyVar('ua', ua);
// 存储指定cookie变量
let 指定cookie = (typeof(指定cookie) === 'undefined' || !指定cookie) ? getMyVar('cookie', '') : 指定cookie;
putMyVar('指定cookie', 指定cookie);
// 存储编码变量
let 编码 = (typeof(编码) === 'undefined' || !编码) ? false : 编码;
putMyVar('编码', 编码);
// 存储 extra_headers 变量
let extra_headers = '';
if (编码) {
    extra_headers = {
        "content-type": "charset=" + 编码 || 'utf-8',
    };
}
putMyVar('extra_headers', JSON.stringify(extra_headers));

    var HomeUrl=getHomepageUrl(首页);
    putMyVar('HomeUrl',HomeUrl)
    var d = [];
    var d_pre= [];
    var page = MY_PAGE;
    if (page === 1) {
        for(var i in HomemenuNav){
            d.push(
                HomemenuNav[i]
            )};
        };
    var Icon_prefix = 'http://123.56.105.145/tubiao/more/';
    var selnav=storage0.getItem("navtitle","首页");
    var nowcoltype = storage0.getItem("Icon样式");
    const navtitle = storage0.getItem("navtitle", "首页");

    switch (navtitle) {
      case "首页":
      $.Loading(d);
      
    var shtml =$.获取源码(首页,ua,'',指定cookie,extra_headers);
        if (page == 1) {
        
        if (!!lb[0] || !!lb[1]) {
    try {    

            var lundata = pdfa(shtml, lb[0]).map((x) => {
                require(getVar('Bt依赖'));
    
    var lunimg= $.processImageUrl(pd(x, lb[1]));
                return {
                    title:pdfh(x, lb[2]||t[1]),
                    img: lunimg,
                    url: pd(x, t[4]) + "#immersiveTheme#"
                }
           
            });
            
            require(getVar('Bt依赖'));
            
            if (getItem("轮播", "on") == "on") {
                banner(MY_RULE.title, true, d, lundata, {
                    time: 5000,
                    col_type: 'card_pic_1',
                    desc: '0'
                })
            }
    } catch(e) {};    
        }       
 
    if(!!w){
    try{
    if(!!w[0]||!!w[1]){    
    var w_Folded = red('追剧周表📪');
    var w_Expanded = red('追剧周表📬');
    var ws_pic = $.getImage('http://123.56.105.145/tubiao/more/297.png');
    var w_fold = getMyVar('ws.group', "1");
    d.push({
        title: w_Expanded,
        pic_url: ws_pic,
        url: $('#noLoading#').lazyRule((w_Expanded, w_Folded) => {
            var w_fold = getMyVar('ws.group', "1");
            putMyVar('ws.group', w_fold == "1" ? "0" :"1");
            updateItem('wsfold_button', { title: w_fold == '0' ? w_Expanded : w_Folded }); 
            $.handleFold(w_fold,'Sws_cls',"wsfold_button",'Swscls',MY_RULE.title)                      
            return "hiker://empty";
        },w_Expanded, w_Folded),
        col_type: "avatar",
        extra: {
            id: 'wsfold_button',
            longClick: [{
                title: getItem("weeksorder", "off") == "on" ? "状态：周日排第一" : "状态：周一排第一",
                js: $.toString(() => {
                    if (getItem("weeksorder", "off") == "on") {
                        clearItem("weeksorder");
                    } else {
                        setItem("weeksorder", "on");
                    };
                    clearMyVar("weeknum")
                    refreshPage(false);
                    return getItem("weeksorder", "off") == "on" ? "toast://已调整周日排第一" : "toast://已调整周一排第一";
                })
            }
            /*, {
                            title: "OFF",
                            js: $.toString(() => {
                                setItem("隐藏", "off");
                                return "toast://已关闭";
                            })
                        }*/
        ]
        }
    });

    d.push({
                    col_type: "blank_block"
                });
    var webweeks= $.getWeekOrder(shtml,w[0]);
    var defaultweeks = getItem("weeksorder", "off") == "on" ? [ "周日","周一", "周二", "周三", "周四", "周五", "周六"] :[ "周一", "周二", "周三", "周四", "周五", "周六","周日"];    
    var weeks=webweeks ? webweeks : defaultweeks;
    var wkTonum = function(wk) {
        if (/周|星期/.test(wk)) {
            wk = wk.replace(/周|星期/, "");
        }
        var map =getItem("weeksorder", "off") == "on" ? {
            "日": 0,
            "一": 1,
            "二": 2,
            "三": 3,
            "四": 4,
            "五": 5,
            "六": 6
        } : {
            "一": 0,
            "二": 1,
            "三": 2,
            "四": 3,
            "五": 4,
            "六": 5,            
            "日": 6

        } ;
        return map[wk];
    }
    function getWeekDate() {
        var now = new Date();
        var day = now.getDay();
        var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var week = weeks[day];
        return week;
    }
    
    let now_Week = getWeekDate();
    let now_wnum=wkTonum(now_Week);
    function getHead(title) {
        return '☀' + '‘‘’’<strong><font color="#FA7298">' + title + '</front></strong>';
    }

//制作星期列表     
// 初始化函数，生成初始数据并存储到全局变量 d 中


// 定义 wsinitialize 函数
function wsinitialize(appId) {
    let weeknum = getMyVar(appId + "weeknum", JSON.stringify(now_wnum));
    weeks.forEach((it, i) => {
        let title = weeknum == i ? getHead(it) : it.replace('周', '');
        d.push({
            title: title,
            url: $("#noLoading##noHistory#").lazyRule((weeks, i, now_wnum, d, appId,首页) => {
                $.handleWeekSchedule(i, weeks, now_wnum, 'Sws', d, appId,首页);
                return "hiker://empty";
            }, weeks, i, now_wnum, d, appId,首页),
            col_type: "scroll_button",
            extra: {
                id: appId + "weekid" + i,
                cls: appId + "Swscls"
            },
        });
    });

    // 初始时加载数据
    let wk_num = getMyVar(appId + "weeknum", JSON.stringify(now_wnum));
    var Sel_ws = pdfa(shtml, wklist(wk_num, w[1]));
    $.wsprocessItems(Sel_ws, 'Sws', false, d, appId);
}

// 初始化调用
wsinitialize(MY_RULE.title);




     d.push({
                    col_type: "blank_block"
                });
    // }        
    }
}catch(e){};
    };
 
var pushItem = function(item, resultArray, prefix, returnJson, appId) {
    var img =$.processImageUrl(pd(item, t[2]));
    lb[0] == zd[1] ? (img =$.processImageUrl(pd(item, lb[1]))) : null;
    var itemJson = {
        title: pdfh(item, t[1] || lb[2]),
        url: pd(item, t[4]) + '#immersiveTheme#',
        col_type: getItem('首页折叠样式'),
        desc: pdfh(item, t[3]),
        img: img,
        extra: {
            cls: appId + prefix + "cls",
            id: appId + prefix + "id",
            title: pdfh(item, t[1]),
            img: img
        }
    };
    if (returnJson) {
        resultArray.push(itemJson);
    } else {
        d.push(itemJson);
    }
};

// 通用处理函数
var processItems = function(items, prefix, returnJson, appId) {
    var resultArray = [];
    items.forEach(function(item) {
        pushItem(item, resultArray, prefix, returnJson, appId);
    });
    return returnJson ? resultArray : d;
};

try{
//折叠1 
    if (typeof(zd[0]) !== 'undefined') {        
        var zd1name = zd[0];
        let Folded = '<b><span style="color: #FA7298">' + zd1name + '📪</span></b>';
        let Expanded = '<b><span style="color: #FA7298">' + zd1name + '📬</span></b>';
        var zdpic1 = $.getImage('http://123.56.105.145/tubiao/more/10.png');
        d.push({
            title: Expanded,
            pic_url: zdpic1,
            url: $('#noLoading#').lazyRule((Expanded, Folded) => {
                var fold1 = getMyVar('zd1.group', "1");
                putMyVar('zd1.group', fold1 == "1" ? "0" :"1");
                updateItem('zd1_button', { title: fold1 == '0' ? Expanded : Folded });
                $.handleFold(fold1,'zd1_cls',"zd1_button",'zd1cls',MY_RULE.title)                      
                return "hiker://empty";
            },Expanded, Folded),
            col_type: "avatar",
            extra: {
                id: 'zd1_button',
            }
        });
        var zd1 = pdfa(shtml, zd[1]);
        processItems(zd1, "zd1", false,MY_RULE.title);
    };
    
//折叠2
if (typeof(zd[2]) !== 'undefined') {        
    var zd2name = zd[2];
    let Folded = '<b><span style="color: #FA7298">' + zd2name + '📪</span></b>';
    let Expanded = '<b><span style="color: #FA7298">' + zd2name + '📬</span></b>';
    var zdpic2 = $.getImage('http://123.56.105.145/tubiao/more/10.png');
    d.push({
        title: Expanded,
        pic_url: zdpic2,
        url: $('#noLoading#').lazyRule((Expanded, Folded) => {
            var fold2 = getMyVar('zd2.group', "1");
            putMyVar('zd2.group', fold2 == "1" ? "0" :"1");
            updateItem('zd2_button', { title: fold2 == '0' ? Expanded : Folded });
            $.handleFold(fold2,'zd2_cls',"zd2_button",'zd2cls',MY_RULE.title)                      
            return "hiker://empty";
        },Expanded, Folded),
        col_type: "avatar",
        extra: {
            id: 'zd2_button',
        }
    });
    var zd2 = pdfa(shtml, zd[3]);
    processItems(zd2, "zd2", false,MY_RULE.title);
}
//折叠3
if (typeof(zd[4]) !== 'undefined') {        
    var zd3name = zd[4];
    let Folded = '<b><span style="color: #FA7298">' + zd3name + '📪</span></b>';
    let Expanded = '<b><span style="color: #FA7298">' + zd3name + '📬</span></b>';
    var zdpic3 = $.getImage('http://123.56.105.145/tubiao/more/10.png');
    d.push({
        title: Expanded,
        pic_url: zdpic3,
        url: $('#noLoading#').lazyRule((Expanded, Folded) => {
            var fold3 = getMyVar('zd3.group', "1");
            putMyVar('zd3.group', fold3 == "1" ? "0" :"1");
            updateItem('zd3_button', { title: fold3 == '0' ? Expanded : Folded });
            $.handleFold(fold3,'zd3_cls',"zd3_button",'zd3cls',MY_RULE.title)                      
            return "hiker://empty";
        },Expanded, Folded),
        col_type: "avatar",
        extra: {
            id: 'zd3_button',
        }
    });
    var zd3 = pdfa(shtml, zd[5]);
    processItems(zd3, "zd3", false,MY_RULE.title);
};    
    }catch(e){log('折叠出错：'+e.message)    };
//推荐
try{
     function pushData(rec, index) {
                      putVar('对应片库分类' + index, rec[1]);
                      d.push({
                         title: 简体(rec[0])+'🖱️',
                         pic_url: 'http://123.56.105.145/tubiao/more/' + Math.floor(Math.random() * 343) + '.png' + "@Referer=",
                         url: $('').lazyRule((index) => {
                            var intit = [];
                            for (let i = 0; i < 20; i++) {
                            intit.push('0');
                            intit.splice(0, 2, getVar('r' + index + '1'),getVar('r' + index + '2'))                           
                            }
                            putMyVar('header.category', JSON.stringify(intit));
                            putMyVar('header.url', getVar('对应片库分类' + index));
                            storage0.setItem("navtitle", '片库');
                            refreshPage();
                            return 'hiker://empty';
                         },index),
                         col_type: 'avatar'
                      });
                      var sytj = pdfa(shtml, rec[2]);
                      sytj.forEach(item => {
                         var img= $.processImageUrl(pd(item, t[2])); 
                         d.push({
                            title: pdfh(item, t[1]),
                            url: pd(item, t[4]) + '#immersiveTheme#',
                            col_type: getItem('首页推荐样式'),
                            desc: pdfh(item, t[3]),
                            img: img ,
            extra:{
                title: pdfh(item, t[1]),
                img:img}
                         });
                      });
                   }
    for (let i = 1; i <= 8; i++) {
      if (typeof(eval('推荐' + i)) !== "undefined") {
        pushData(eval('rec' + i), i);
      }
    }
    
    }catch(e){log('推荐出错：'+e.message)    }
      
    }

        break;
      case "片库":
        //LVersion(); 
//var Home_Url=getItem('MY_HOME',MY_URL);               
html = $.获取源码(true_url,ua,'',指定cookie,extra_headers)
    
    动态分类(d)
try{
const list = pdfa(html,t[0])
//log('list.length='+list.length)
if(list.length>3){

    list.forEach(video => {
  var  img=$.processImageUrl(pd(video,t[2]));
  img=/.js:input/.test(t[2])? img+t[2].split('input')[1].replace('+','') : img ;
  
//let picu=urlParse(img);
     //log('picu'+JSON.stringify(picu))
        d.push({
            title: pdfh(video,t[1]),
            desc: pdfh(video, t[3]),
            img: img,
            url:pd(video, t[4])+'#immersiveTheme#',
            col_type:getItem('片库样式'),
            extra:{
                title: pdfh(video,t[1]),
                img:img}
        })
    })
}else{
//log('li')
appedData(d, content, selects, true, true)
}    
}catch(e){};
        break;
      case "收藏":
      collection(d)
        break;
      case "热榜":
        if (page === 1) {
if(r[0]) {           
     rhtml =$.获取源码(r[0],ua,'',指定cookie,extra_headers);
    var Icon_prefix = 'http://123.56.105.145/tubiao/ke/';
    var category_Icon = ['33.png', '38.png', '105.png','106.png'];

    hottop(d);
}
        }
        break;
      case "更新":
        if (page === 1) {
try {
        
        let ghtml = $.获取源码(g[0],ua,'',指定cookie,extra_headers);

if (g[3] !== undefined) {
  try {
    var todayUpdate = pdfh(html, g[3]);
    if (todayUpdate.includes('更新')) {
      d.push({
        title: '‘‘’’<small>🔃今日更新:<font color=\"#FA7298\"><b> ' + todayUpdate.replace('今日更新','').replace('更新','') + '</b></font>',
        url: $().lazyRule(() => {
          refreshPage(false);
          return 'toast://已刷新';
        }),
        col_type: "text_center_1",
        extra: {lineVisible: false}
      });
    }
  } catch (e) {}
}

var Icon_prefix = 'http://123.56.105.145/tubiao/more/';
var category_Icon = ['7.png', '148.png'];

var lie = pdfa(ghtml,g[1]);
if (lie.length == 1) {
  putMyVar('gx', 1);
  d.push({
    title: pdfh(ghtml,g[2]),
    pic_url: Icon_prefix + '279.png' + "@Referer=",
    col_type: "avatar",
    extra: {lineVisible: false}
  });
} else {
  lie.forEach(function(it,id) {
    let gxtitle = pdfh(it,g[2]);
    d.push({
      title: getMyVar('gxtitle', '今日更新') === gxtitle ? '💠'+gxtitle : gxtitle,
      url: $().lazyRule((gxtitle) => {
        if (gxtitle == '今日更新') {
          putMyVar('gx', 1);
          putMyVar('gxtitle','今日更新');
          refreshPage(false);
          return 'hiker://empty';
        } else {
          putMyVar('gxtitle', '新片上线');
          putMyVar('gx',2);
        }
        refreshPage(false);
        return 'hiker://empty';
      }, gxtitle),
      pic_url: Icon_prefix + category_Icon[id] + "@Referer=",
      col_type: "icon_2_round"
    });
  });
}

if (typeof(new1) !== "undefined") {
  var gx1 = pdfa(ghtml,n1[0]);
}

if (typeof(new2) !== "undefined") {

  gx2 = pdfa(ghtml,n2[0]);
}


if (getMyVar('gx','1') == 1) {
  gx1.forEach((item,index) => {
  var img= $.processImageUrl(pd(item,n1[3]||t[2])); 
    d.push({
      title: pdfh(item,n1[1]),
      url: pd(item, t[4]) + '#immersiveTheme#',
      desc: pdfh(item,n1[2]),
      img: img,
      col_type: "movie_3_marquee",
      extra:{
        title: pdfh(item,n1[1]),
        img:img}
    });
  });
} else {
  gx2.forEach((item,index) => {
var img=$.processImageUrl(pd(item,n2[3]||t[2])); 
      d.push({
        title: '‘‘’’<b>' + pdfh(item,n2[1]) + '</b>',
        url: pd(item, t[4]) + '#immersiveTheme#',
        desc: pdfh(item,n2[2]),
        img: img,
        col_type: "movie_1_vertical_pic",
        extra:{
            title: pdfh(item,n2[1]),
            img:img}
      });

  });
}
} catch(e) {}

        }
        break;
      case "搜索":
        if (page === 1) {
        
try {

//顺搜来着天意大佬，大佬牛逼☀🐮☀
putVar('小程序名', MY_RULE.title);
  
if(getItem("shunsou","on")=="on"){ var 本地 = 'hiker://files/rules/dzHouse/html/顺搜.html';
  if(fileExist(本地) == false) {
			var 远程x5 = request('http://hiker.nokia.press/hikerule/rulelist.json?id=4082');
			if (远程x5.indexOf("search_bg")>0) {
				writeFile(本地, 远程x5);
			} else {
			confirm({
        title: '❌错误提示',
        content: '未能远程导入,请手动导入!',
        confirm: () => {
            return "海阔视界本地文件分享￥file_url￥hiker://files/rules/dzHouse/html/顺搜.html@http://hiker.nokia.press/hikerule/rulelist.json?id=4082"
        }
    })
				
			}
        }
              
        d.push({
            desc: '290&&list',
            url: getPath(本地),
            col_type: 'x5_webview_single',
            extra: {id: "shs",ua: MOBILE_UA}
        });
        }else{
        

    d.push({
        title: "",
        url: "'hiker://search?s='+input+'&rule='+MY_RULE.title",
        col_type: "input",
        desc: "搜索",
        });
 }  
    
  const shost = 'https://top.baidu.com/board?platform=wise&tab=movie&sa=fyb_search_kingkong_movie_50669';
  var html = fetch(shost, {
    headers: {
      'User-Agent': MOBILE_UA
    }
  });
  let Icon_prefix = 'http://123.56.105.145/tubiao/more/';
  var OnImg = $.getImage("http://123.56.105.145/tubiao/messy/57.svg")
  var OffImg = $.getImage("http://123.56.105.145/tubiao/messy/63.svg")
  var bdrbImg = $.getImage('http://123.56.105.145/tubiao/ke/120.png')
  d.push({
    title: '<span style="color:#ff6601"><b>百度热搜</b></span>',
    url: $("#noLoading#").lazyRule((OnImg,OffImg) => {

        putVar('小程序名', MY_RULE.title);
        var 本地 = 'hiker://files/rules/dzHouse/html/顺搜.html';
        if(fileExist(本地) == false) {
                  var 远程x5 = request('http://hiker.nokia.press/hikerule/rulelist.json?id=4082');
                  if (远程x5.indexOf("search_bg")>0) {
                      writeFile(本地, 远程x5);
                  } else {
                      confirm({title:'❌错误提示', content:'顺搜导入出错'})
                  }
              }
        if (getItem("shunsou", "on") == "on") {
            updateItem("shunsouid", {
                title: '<span style="color:#ff6601"><b>百度热搜</b></span>',
            })
  updateItem("shunsousetid", {
                img:OnImg,
            })          
            // deleteItem('shs');
            updateItem("shs", {
                title: '',
                desc: '290&&list',
                url: getPath(本地),
                col_type: 'x5_webview_single',
            extra: {
                    id: "shs",
                    ua: MOBILE_UA
                }
                        })
            setItem("shunsou", "off");
            refreshPage(false);
            return getItem("shunsou") == "on" ?"toast://已打开顺搜":"toast://已关闭顺搜";            
        } else {
            updateItem("shunsouid", {
                title: '<span style="color:#ff6601"><b>百度热搜</b></span>',
            })
updateItem("shunsousetid", {
                img:OffImg,
            }) ;
            updateItem("shs", {
                title: '',
                url: "'hiker://search?s='+input+'&rule='+MY_RULE.title",
                desc: '搜索',
                col_type: "input",
                extra: {
                    id: "shs",
                    ua: MOBILE_UA
                }
            });                        
            setItem("shunsou", "on");
        refreshPage(false);
        return getItem("shunsou") == "on" ?"toast://已打开顺搜":"toast://已关闭顺搜";
        }
        return "hiker://empty"
    },OnImg,OffImg),
    pic_url: bdrbImg ,
    col_type: 'icon_small_3',
    extra: {
        id: "shunsouid"
    }
  });

  const items = pdfa(html, 'body&&._1mMBrBrgfp_7W3K67nhURN');
  items.forEach((item, index) => {
    const title = pdfh(item, 'span&&Text');
    d.push({
      title: '““””<span style="color:#ff3300">' + (parseInt(index) + 1) + '</span>\t   ' + title,
      url: 'hiker://search?s=' + title + '&rule=' + MY_RULE.title,
      col_type: 'text_1'
    });
  });
} catch (e) {
  setResult([{
    title: e.message,
    col_type: 'long_text',
    url: 'hiker://empty'
  }]);
}

        }
        break;
      case "设置":
        if (page === 1) {
        
       require(getVar('Bt依赖'));
       menusetting(d);
        }
        break;
    };
    page == 1 ? setPreResult(d) : setResult(d);
    deleteItemByCls('loading_gif');  
    getItem("auto_check", "on") == "on" ? LVersion() : null; 

    }}
                   
    function IconsStyle(mytitle) {
        storage0.setItem('rmtitcol', parseInt(JSON.stringify(mytitle.length)));
        let mytitcol = parseInt(storage0.getItem('rmtitcol'));
         let iconStyle;  
         switch (mytitcol) {
           case 1:
             iconStyle = 'text_center_1';
             break;
           case 2:
             iconStyle = 'icon_2';
             break;
           case 3:
             iconStyle = 'icon_small_3';
             break;
           case 4:
             iconStyle = 'icon_4';
             break;
           default:
             iconStyle = 'icon_5';
             break;
         }  
         storage0.setItem("Icon样式", iconStyle);
         return iconStyle;
       }
       
    
    function menusetting(d){
     try {
    
    require(getVar('Bt依赖'));
} catch (e) {
    setResult([{
        title: e.message,
        col_type: 'long_text',
        url: 'hiker://empty'
    }]);
}

function small(text) {
    return htmlTag("small", text);
}
addListener('onClose', $.toString(()=>{
        require(getVar('Bt依赖'));
        storage0.setItem("navtitle", '首页');
        
    }));
 var nowVersion =version.ver;
 var newVersion=updateLog.newVersion;
 var logs=JSON.stringify(updateLog.newVersionlog).replace(/\{/g,'').replace(/\}/g,'').replace(/\,/g,'<br>').replace(/\"/g,''); 
 var newlog=JSON.stringify(updateLog.newVersionlog).split(',')[0].replace(/\{/g,'').replace(/\}/g,'').replace(/\,/g,'<br>').replace(/\"/g,'').replace(/\n/g, "<br>");
 var BteaIcon = $.getImage('https://ooooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоοοοоοοoоᴏоοоoᴏοоᴏᴏοоᴏοoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооᴏoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооοοооᴏοоοοοᴏoоoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοooоοᴏοoοоοοοоoοoоᴏоοоооοᴏooοоοᴏ')
    d.push({
            title: "<b>当前模板版本♨️: " + version.ver + "</b>"+"<small><b>\t\t\t\t\t\t\t\t\t\t\t\t\tℹ️   关于</b><small>",
            img:BteaIcon,
            col_type: "avatar",
            url: $().rule((BteaIcon)=>{
                           setPageTitle('关于');
     
     require(getVar('Bt依赖'));
     var nowVersion =version.ver;
     var newVersion=updateLog.newVersion;
     var logs=JSON.stringify(updateLog.newVersionlog).replace(/\{/g,'').replace(/\}/g,'').replace(/\,/g,'<br>').replace(/\"/g,'');
        let d = [];    
        
            d.push({
            url: "hiker://empty",
            col_type: "card_pic_3_center",
            extra: {
                longClick: [{
                        title: getItem("隐藏", "off") == "on" ? "状态：显示" : "状态：隐藏",
                        js: $.toString(() => {
                            if (getItem("隐藏", "off") == "on") {
                                clearItem("隐藏");
                            } else {
                                setItem("隐藏", "on");
                            };
                            refreshPage(false);
                            return getItem("隐藏", "off") == "on" ? "toast://已显示" : "toast://已隐藏";
                        })
                    }
                    /*, {
                                    title: "OFF",
                                    js: $.toString(() => {
                                        setItem("隐藏", "off");
                                        return "toast://已关闭";
                                    })
                                }*/
                ]
            }
        })
        d.push({                              
        title:"‘‘’’<b>\t\t\t版本日志 <br>\t\t\t(" + version.ver + ")</b>",
        img: BteaIcon,
        url: $().rule(()=>{
        setPageTitle('版本日志');
        
        require(getVar('Bt依赖'));
        var logs=JSON.stringify(updateLog.newVersionlog).replace(/\{/g,'').replace(/\}/g,'').replace(/\,/g,'<br>').replace(/\"/g,'');                   
        let d = [];    
        d.push({                              
        title:'<h4>版本日志:</h4><div>'+'\n'+logs+'</div>',      
          col_type:'rich_text'
                            });                    
        setResult(d);
      }),                       
        col_type: "card_pic_3_center"      
          
                            });
    
        d.push({
            col_type: "line_blank"
        })                       
        d.push({
            title: "‘‘’’<b>免责声明</b>",
            url: "hiker://empty",
            col_type: "text_center_1",
            extra: {
                lineVisible: false
            }
        })
    
        d.push({
            title: "1、小程序数据内容均来源于互联网，经软件对原网页源码重新排版后显示，此小程序与海阔不参与任何制作、上传、储存等内容，其显示的所有内容与视频，其版权均归原网站作者所有。<br>2、此模板代码内容仅供爱好者学习与交流使用，禁止用于其他用途，请于导入后24小时内删除，请勿传播，请支持正版！<br>3、因使用此模板产生的版权问题，软件开发者与此模板作者概不负责。<br>4、请勿相信网页或者视频中的任何广告，切记！！！<br>5、特别鸣谢模板代码提供者：道长、壹隅、发粪涂墙、天意、随风、狗浩啊、Skins漂、α、帅√`人才。",
            col_type: "rich_text",
            extra: {
                textSize: "13"
            }
        });    
            d.push({
            col_type: "line_blank"
        }) 
       var SmImage=$.getImage("http://123.56.105.145/tubiao/circle/53.png")                    
       d.push({
            title: "<b>点击查看模板使用说明</b>",
            url: $().rule(()=>{
                           setPageTitle('关于');
     
     require(getVar('Bt依赖'));
    
        let d = [];    
        let formore = "#### 获取帮助失败,请检查网络";
        try {
            formore = fetch('https://ooooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоοοοоοοoоᴏоοоoᴏοоᴏᴏοоᴏοoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооᴏoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооοοооᴏοоοοοᴏoоoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοоοоοоᴏᴏοᴏoоοоᴏοοоᴏᴏοᴏoоοоοοoоᴏоοᴏοoοᴏоoοᴏοo');
            }catch (e) {}
        d.push({
        title:formore,
        col_type:'rich_text'
                            });                        
    setResult(d);
                        }),
            img:SmImage ,
            col_type: "text_icon"
        })  
              d.push({
            col_type: "line_blank"
        })         
                      
    setResult(d);
                        },BteaIcon)
        });
     d.push({
            title: "<b>更新日期：" + version.update + "<small>\t\t\tBy\t\tBtea\t\t\t<br>更多信息欢迎加QQ群234706629，加群密码：九十一石五斗\t</small></b><br>"+newlog,
            col_type: "rich_text",
            extra: {
                textSize: "12"
            }
        });
    d.push({
            col_type: "line_blank"
        })
  var gnImage=$.getImage('http://123.56.105.145/tubiao/3d/46.png');      
    d.push({
            title: "<b><small>功能</small></b>",
            url: "hiker://empty",
            col_type: "avatar",
            img:gnImage ,
            url: $('#noLoading#').lazyRule(() => {
                storage0.setItem("navtitle", '首页');
                back(true)
                refreshPage(false);
                return 'hiker://empty'
                        })
        });        
    var OnImg = $.getImage("http://123.56.105.145/tubiao/messy/57.svg")
    var OffImg = $.getImage("http://123.56.105.145/tubiao/messy/63.svg")
          
    d.push({
        title: '<span style="color:#5882FA">'+'首页轮播</span>',
        url: $("#noLoading#").lazyRule(() => {
                
                require(getVar('Bt依赖'));          
            if (getItem("轮播", "on") == "on") {   
                setItem("轮播", "off");
                storage0.setItem("navtitle", '首页');
                pre.处理();   
                refreshPage(false);
                return 'toast://已关闭首页轮播' 
            } else {  
                clearItem("轮播");
                storage0.setItem("navtitle", '首页');
                refreshPage(false);
                pre.处理();   
                return 'toast://已打开首页轮播' 
            };
            refreshPage(false);
        }),
        img: getItem("轮播", "on") == "on" ? OnImg : OffImg,
        col_type: 'text_icon'
    });   
    // if (getItem("shunsou") === 'undefined') {
    //     setItem("shunsou", "on");
    // }

    d.push({
        title: '<span style="color:#5882FA">'+'搜索顺搜</span>',
        url: $("#noLoading#").lazyRule(() => {
            let s = {
                "on": "off",
                "off": "on"
            }[getItem("shunsou", "on")]
            setItem("shunsou", s);
            updateItem("shunsou", {
                title: s
            });
            refreshPage(false);
            return getItem("shunsou") == "on" ?"toast://已打开顺搜，进入搜索页面就能看到":"toast://已关闭顺搜，移步搜索页面就能看到";
        
        }),
        img: getItem("shunsou", "on") == "on" ? OnImg : OffImg,
        col_type: 'text_icon',
        extra: {
            id: "shunsousetid"
        }
    });     
    d.push({
        title: '<span style="color:#5882FA">'+'二级页面快搜DIY</span>',
        url: $("#noLoading#").lazyRule(() => {
            if (getItem("快搜", "on") == "on") {
                setItem("快搜", "off");
            } else {
                clearItem("快搜");
            };
            refreshPage(false);
            return "hiker://empty";
        }),
        img: getItem("快搜", "on") == "on" ? OnImg : OffImg,
        col_type: 'text_icon'
    });
    var SsImage= $.getImage('http://123.56.105.145/tubiao/3d/294.png');
    if (getItem("快搜", "on") == "on") {
    d.push({
            title: '<span style="color:#5882FA">'+'快搜DIY设置</span>',
            url:$().rule(()=>{
                setPageTitle('二级页面快速搜索DIY');
                let d = [];
                
                require(getVar('Bt依赖'));
                analysisVerifyModule(d);
                setResult(d);
            }),
            img:SsImage,
            col_type: "text_icon"
        })
    }
    d.push({
            col_type: "line_blank"
        })
        
    d.push({
            title: "<b><small>菜单导航切换</small></b>",
            url: "hiker://empty",
            col_type: "avatar",
            img: 'http://123.56.105.145/tubiao/more/' + "188.png",
            url: $('#noLoading#').lazyRule(() => {
          //back(true);
           refreshPage(false);
                     return 'toast://你想的没错，模仿的是聚影，感谢帅√`人才大佬'
                        })
        });  
        var AllIcon = JSON.parse(getItem('myNavtitle'));
    require(getVar('Bt依赖'));        
    let mnIcons1 = getItem('menuIcons1',"首页");
    let mnIcons2 = getItem('menuIcons2',"片库");
    let mnIcons3 = getItem('menuIcons3',getItem('rbid')=="on"?"热榜":getItem('ssid')=="on"?"搜索":"历史");
    let mnIcons4 = getItem('menuIcons4',getItem('gxid')=="on"?"更新":"收藏");    
    let mnIcons5 = getItem('menuIcons5',"设置");         
    var SYIcon=$.getImage("http://123.56.105.145/tubiao/more/47.png");
    var PKIcon=$.getImage("https://ooooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоοοοоοοoоᴏоοоoᴏοоᴏᴏοоᴏοoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооᴏoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооοοооᴏοоοοοᴏoоoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοᴏooοооᴏoоᴏоοᴏooοоᴏоοоοᴏ");
    var RBIcon=$.getImage("http://123.56.105.145/tubiao/more/74.png");
    var GXIcon=$.getImage("http://123.56.105.145/tubiao/more/157.png");
    var SSIcon=$.getImage("http://123.56.105.145/tubiao/more/168.png");
    var SCIcon=$.getImage("https://ooooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоοοοоοοoоᴏоοоoᴏοоᴏᴏοоᴏοoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооᴏoоᴏᴏοоoоοᴏοoοоοοοоoοοооoοооοοооᴏοоοοοᴏoоoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοᴏoᴏοоoᴏoоᴏоοоооοᴏooοоοᴏ");
    var SZIcon=$.getImage("http://123.56.105.145/tubiao/more/292.png");
    var LSIcon=$.getImage("http://123.56.105.145/tubiao/more/200.png");
    var ZJIcon=$.getImage("http://123.56.105.145/tubiao/more/326.png");

    var menuIcons = { 
        "首页": getItem('syid') ? { img: SYIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '首页'); updateItem("navtitle", { title: '首页' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "片库": getItem('pkid') ? { img: PKIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '片库'); updateItem("navtitle", { title: '片库' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "热榜": getItem('rbid') ? { img: RBIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '热榜'); updateItem("navtitle", { title: '热榜' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "更新": getItem('gxid') ? { img: GXIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '更新'); updateItem("navtitle", { title: '更新' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "搜索": getItem('ssid') ? { img: SSIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '搜索'); updateItem("navtitle", { title: '搜索' }); refreshPage(false); return "hiker://empty"; }), } : '',
        "收藏": { img: SCIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '收藏'); updateItem("navtitle", { title: '搜索' }); refreshPage(false); return "hiker://empty"; }), },
        "设置": { img: SZIcon, url: $("#noLoading#").lazyRule(() => { storage0.setItem("navtitle", '设置'); updateItem("navtitle", { title: '设置' }); refreshPage(false); return "hiker://empty"; }), },
        "历史": { img: LSIcon, url: "hiker://history?rule=" + MY_RULE.title },
        "最近": { img: ZJIcon, url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => { return $('#noLoading#').lazyRule((title) => { let rules = getLastRules(20); let sel_rules = rules.map(it => it.title); return $(sel_rules, 2, '请选一个最近使用的小程序').select((title) => { return "hiker://home@" + input }, title) }) }), } 
      };  
      var menuguide=JSON.stringify([mnIcons1,mnIcons2,mnIcons3,mnIcons4,mnIcons5]);
      function arrayAB(arrA, arrB) {
          return arrA.filter(v => !arrB.includes(v));
        }
        var leftmenu=arrayAB(AllIcon,menuguide) ;     
  
        d.push({
          title: mnIcons1,
          url: $(leftmenu,2,"切换第1个按钮为：").select(() => {
              setItem('menuIcons1',input);
              refreshPage(false);
              return 'toast://第1按钮已设置为'+input;
          }),
          img: menuIcons[mnIcons1].img,
          col_type: 'icon_5',
          extra: {
              longClick: [{
                  title: "🔄重置",
                  js: $.toString(() => {
                      clearItem('menuIcons1');
                      refreshPage(false);
                      return "toast://已恢复默认"
                  })
              }]
          }
        })
        d.push({
          title: mnIcons2,
          url: $(leftmenu,2,"切换第2个按钮为：").select(() => {
              setItem('menuIcons2',input);
              refreshPage(false);
              return 'toast://第2按钮已设置为'+input;
          }),
          img: menuIcons[mnIcons2].img,
          col_type: 'icon_5',
          extra: {
              longClick: [{
                  title: "🔄重置",
                  js: $.toString(() => {
                      clearItem('menuIcons2');
                      refreshPage(false);
                      return "toast://已恢复默认"
                  })
              }]
          }
        })
        d.push({
          title: mnIcons3,
          url: $(leftmenu,2,"切换第3个按钮为：").select(() => {
              setItem('menuIcons3',input);
              refreshPage(false);
              return 'toast://第3按钮已设置为'+input;
          }),
          img: menuIcons[mnIcons3].img,
          col_type: 'icon_5',
          extra: {
              longClick: [{
                  title: "🔄重置",
                  js: $.toString(() => {
                      clearItem('menuIcons3');
                      refreshPage(false);
                      return "toast://已恢复默认"
                  })
              }]
          }
        })
        d.push({
          title: mnIcons4,
          url: $(leftmenu,2,"切换第4个按钮为：").select(() => {
              setItem('menuIcons4',input);
              refreshPage(false);
              return 'toast://第4按钮已设置为'+input;
          }),
          img: menuIcons[mnIcons4].img,
          col_type: 'icon_5',
          extra: {
              longClick: [{
                  title: "🔄重置",
                  js: $.toString(() => {
                      clearItem('menuIcons4');
                      refreshPage(false);
                      return "toast://已恢复默认"
                  })
              }]
          }
        })
        d.push({
          title: mnIcons5,
          url: $(leftmenu,2,"切换第5个按钮为：").select(() => {
              setItem('menuIcons5',input);
              refreshPage(false);
              return 'toast://第5按钮已设置为'+input;
          }),
          img: menuIcons[mnIcons5].img,
          col_type: 'icon_5',
          extra: {
              longClick: [{
                  title: "🔄重置",
                  js: $.toString(() => {
                      clearItem('menuIcons5');
                      refreshPage(false);
                      return "toast://已恢复默认"
                  })
              }]
          }
        })        
    d.push({
            col_type: "line_blank"
        })                     
const foldDIY = getMyVar('zd1.group', "1");
var YsImage1 = $.getImage('http://123.56.105.145/tubiao/3d/119.png');
var YsImage2 = $.getImage('http://123.56.105.145/tubiao/3d/3.png');
var ZbImage = $.getImage('http://123.56.105.145/tubiao/3d/290.png');
var ZdImage = $.getImage('http://123.56.105.145/tubiao/3d/129.png');
var TjImage = $.getImage('http://123.56.105.145/tubiao/3d/194.png');
var PkImage = $.getImage('http://123.56.105.145/tubiao/3d/337.png');
var RbImage = $.getImage('http://123.56.105.145/tubiao/3d/223.png');
var TabImage = $.getImage('http://123.56.105.145/tubiao/3d/198.png');
var XjImage = $.getImage('http://123.56.105.145/tubiao/3d/328.png');
var PzImage = $.getImage('http://123.56.105.145/tubiao/3d/149.png');
var TmImage = $.getImage('http://123.56.105.145/tubiao/3d/220.png');
var QjImage = $.getImage('http://123.56.105.145/tubiao/ke/162.png');
var FyImage = $.getImage('http://123.56.105.145/tubiao/ke/147.png');
var MyeImage = $.getImage('http://123.56.105.145/tubiao/ke/153.png');
var GxImage = $.getImage('http://123.56.105.145/tubiao/3d/63.png');
var JcImage = $.getImage('http://123.56.105.145/tubiao/3d/20.png');
var QtImage = $.getImage('http://123.56.105.145/tubiao/3d/300.png');
var HfImage = $.getImage('http://123.56.105.145/tubiao/3d/60.png');
var FhImage = $.getImage('http://123.56.105.145/tubiao/3d/314.png');

      d.push({
        title: "<b><small>样式DIY</small></b>",
        url: $('#noLoading#').lazyRule((foldDIY) => {
          putMyVar('zd1.group', foldDIY === '1' ? '0' : '1');
          refreshPage(false);
          return "hiker://empty";
        }, foldDIY),
        pic_url: foldDIY === '1' ? YsImage1 : YsImage2,
        col_type: "avatar"
      });
    
      if (foldDIY === '0') {
        // d.push({
        //   col_type: "blank_block"
        // });
      } else if (foldDIY === '1') {        
                    let all_cols = [''].concat(getColTypes());
                    // ['','text_2','text_3','text_4','text_5','flex_button']
                    let 周表样式 = all_cols.map((it) => {
                        return it === (getItem('周表样式', '') || '') ? '👉' + it : it;
                    });
                    d.push({
                        title:'<span style="color:#fa8c35">'+'周表样式:</span>'+(getItem('周表样式','')||'movie_3_marquee'),
                        col_type: 'text_icon',
                        img:ZbImage,
                        //extra: {lineVisible: false},
                        url: $(周表样式, 2, '请选择追剧周表样式').select(() => {
                            
                            require(getVar('Bt依赖'));
                            
       
                            input = input.replace(/👉/g, '');
                            setItem('周表样式', input);
                            pre.处理();                            refreshPage(true);
                            return 'toast://已切换追剧周表样式为:' + input;
                        })
                    });
    //首页折叠样式                
    let 首页折叠样式 = all_cols.map((it) => {
                        return it === (getItem('首页折叠样式', '') || '') ? '👉' + it : it;
                    });
                    d.push({
                        title: '<span style="color:#fa8c35">'+'折叠样式:</span>'+ (getItem('首页折叠样式', '') || 'movie_3_marquee'),
                        col_type: 'text_icon',
                        img:ZdImage,
                        url: $(首页折叠样式, 2, '请选择首页折叠样式').select(() => {
                            
                            require(getVar('Bt依赖'));
                            input = input.replace(/👉/g, '');
                            setItem('首页折叠样式', input);
                            refreshPage(true);
                            return 'toast://已切换首页折叠样式为:' + input;
                        })
                    });               
    //首页推荐样式                
    let 首页推荐样式 = all_cols.map((it) => {
                        return it === (getItem('首页推荐样式', '') || '') ? '👉' + it : it;
                    });
                    d.push({
                        title:  '<span style="color:#fa8c35">'+'推荐样式:</span>'+(getItem('首页推荐样式','')||'movie_3_marquee'),
                        col_type: 'text_icon',
                        //extra: {lineVisible: false},
                        img:TjImage,
                        url: $(首页推荐样式, 2, '请选择首页推荐样式').select(() => {
                            
                            require(getVar('Bt依赖'));
                            input = input.replace(/👉/g, '');
                            setItem('首页推荐样式', input);
                            refreshPage(true);
                            return 'toast://已切换首页推荐样式为:' + input;
                        })
                    }); 
    //片库样式                
    let 片库样式 = all_cols.map((it) => {
                        return it === (getItem('片库样式', '') || '') ? '👉' + it : it;
                    });
                    d.push({
                        title:  '<span style="color:#fa8c35">'+'片库样式:</span>' + (getItem('片库样式', '') || 'movie_3_marquee'),
                        col_type: 'text_icon',
                        //extra: {lineVisible: false},
                        img:PkImage,
                        url: $(片库样式, 2, '请选择片库样式').select(() => {
                            
                            require(getVar('Bt依赖'));
                            input = input.replace(/👉/g, '');
                            setItem('片库样式', input);
                            refreshPage(true);
                            return 'toast://已切换片库样式为:' + input;
                        })
                    });   
    //热榜样式                
    let 热榜样式 = all_cols.map((it) => {
                        return it === (getItem('热榜样式', '') || '') ? '👉' + it : it;
                    });
                    d.push({
                        title:  '<span style="color:#fa8c35">'+'热榜样式:</span>' + (getItem('热榜样式', '') || 'movie_1_vertical_pic'),
                        col_type: 'text_icon',
                        img:TjImage,
                        url: $(热榜样式, 2, '请选择热榜样式').select(() => {
                            
                            require(getVar('Bt依赖'));
                            input = input.replace(/👉/g, '');
                            setItem('热榜样式', input);
     pre.处理();                         refreshPage(true);
                            return 'toast://已切换热榜样式为:' + input;
                        })
                    });   
    let tab样式 =  ['','text_3','text_4','text_5','scroll_button','flex_button'].map((it) => {
                        return it === (getItem('tab样式', '') || '') ? '👉' + it : it;
                    });
                    d.push({
                        title:  '<span style="color:#fa8c35">'+'tab样式:</span>' + (getItem('tab样式', '') || 'scroll_button'),
                        col_type: 'text_icon',
                        //extra: {lineVisible: false},
                        img:TabImage,
                        url: $(tab样式, 2, '请选择tab样式').select(() => {
                            
                            require(getVar('Bt依赖'));
                            input = input.replace(/👉/g, '');
                            setItem('tab样式', input);
     pre.处理();                      refreshPage(true);
                            return 'toast://已切换tab样式为:' + input;
                        })
                    });                
    let 选集样式 =  ['','text_1','text_2','text_3','text_4','text_5','flex_button'].map((it) => {
                        return it === (getItem('选集样式', '') || '') ? '👉' + it : it;
                    });
                    d.push({
                        title:  '<span style="color:#fa8c35">'+'选集样式:</span>' + (getItem('选集样式', '') || 'text_5'),
                        col_type: 'text_icon',
                        //extra: {lineVisible: false},
                        img:XjImage,
                        url: $(选集样式, 2, '请选择选集样式').select(() => {
                            
                            require(getVar('Bt依赖'));
                            input = input.replace(/👉/g, '');
                            setItem('选集样式', input);
     pre.处理();                       refreshPage(true);
                            return 'toast://已切换选集样式为:' + input;
                        })
                    });  
}    
     d.push({
            col_type: "line_blank"
        })
        d.push({
            title: "<b><small>配置</small></b>",
            url: "hiker://empty",
            col_type: "avatar",
            img: PzImage,
        });
        
    let sel_title = ['通免', '道长通免', '香免'].map((it) => {
        let sel_mode = getItem('通免', '通免');
        return it === sel_mode ? '👉' + it : it;
    });                
    d.push({
        title: '<span style="color:#3eede7">'+'通免:</span>'+getItem("通免","通免"),
        col_type:"text_icon",
        img:TmImage,
        url: $(sel_title, 3).select(() => {
            require(getVar('Bt依赖'));
            input = input.replace(/👉/g, '');
            setItem('通免',input);
            pre.处理();  
            refreshPage(true);
            return 'toast://已切换模式为:' + input
        })
    });
let ua = ['电脑', '手机'].map((it) => {
                    return it === (getItem('ua', '电脑')||'电脑') ? '👉' + it : it;
                });
                
   d.push({
                    title: '<span style="color:#3eede7">'+'全局UA:</span>' + (getItem('ua', '电脑')||'电脑'),
                   col_type:"text_icon",
                   img:QjImage,
                    url: $(ua, 2, '请选择全局UA').select(() => {
                        require(getVar('Bt依赖'));
                        input = input.replace(/👉/g, '');
                        setItem('ua', input);
                        refreshPage(true);
                        return 'toast://已切换全局UA为:' + input;
                    })
                });
 if (getItem("翻页阀值") === 'undefined') {
       setItem("翻页阀值", "20");
     }                       
                
                
d.push({
                    title:'<span style="color:#3eede7">'+'翻页阀值:</span>' +getItem('翻页阀值',20),
                    col_type:"text_icon",
                    img:FyImage,
                    url:$(getItem('翻页阀值',20),'最低指定线路选集总数超过此值才会显示翻页元素，太高会无选集').input(()=>{
                        if(isNaN(parseInt(input))){
                            return 'toast://滚犊子吧,输入的都不是数字'
                        }
                        let num = parseInt(input);
                        if(num<20){
                            return 'toast://不可以小于20，谢谢'
                        }
                        require(getVar('Bt依赖'));
                        setItem('翻页阀值',num+'');
                        refreshPage(false);
                        return 'toast://已保存'
                    })
                });    
if (getItem("每页数量") === 'undefined') {
       setItem("每页数量", "20");
     }                       
                
                
d.push({
                    title:'<span style="color:#3eede7">'+'每页数量:</span>' +getItem('每页数量',20),
                    col_type:"text_icon",
                    img:MyeImage,
                    url:$(getItem('每页数量',20),'满足选集翻页模式时每页显示选集数量').input(()=>{
                        if(isNaN(parseInt(input))){
                            return 'toast://滚犊子吧,输入的都不是数字'
                        }
                        let num = parseInt(input);
                        if(num<20){
                            return 'toast://不可以小于20，谢谢'
                        }
                        require(getVar('Bt依赖'));
                        setItem('每页数量',num+'');
                        refreshPage(false);
                        return 'toast://已保存'
                    })
                });                    
        d.push({
            col_type: "line_blank"
        })
        d.push({
            title: "<b><small>更新</small></b>",
            url: "hiker://empty",
            col_type: "avatar",
            img:GxImage,
        });
    d.push({
        title: '<span style="color: #1aad19">♻检测升级</span>',
        desc:'清除依赖,清除缓存',
        col_type: 'text_icon',
        img:JcImage,
        url: $().lazyRule(()=>{
            showLoading('升级检测中,请稍等...');
            
            require(getVar('Bt依赖'));
            let requireId = version.requireId;
            let ver = version.ver;
            let update = version.update;
            let localDate = new Date(update);
            var nowtime = Date.now();
            //let localnewver=updateLog.newVersion;
            try {
                var webLib = fetch(requireId);
                var webVer = (function(webLib) {
                    eval(webLib);
                    return version;
                })(webLib);
                var webLog = (function(webLib) {
                    eval(webLib);
                    return updateLog;
                })(webLib);    
            }catch (e) {
                hideLoading();
                return 'toast://远程服务器通讯错误,本次检测升级失败\n'+e.message;
            }        
            let webDate = new Date(webVer.update);
            if(webDate>localDate||webVer.ver!==ver){//网页更新时间大于本地库时间或者版本号不等
                hideLoading();
                let msg = '版本:'+ver+'=>'+webVer.ver+'\n'+webLog.newVersionlog[eval(parseFloat(webVer.ver)).toFixed(1)]+'\n'+'立即升级?';  
        confirm({
                        title:'发现新版本', 
                        content:msg, 
                        confirm:`deleteCache();refreshPage()`, 
                        cancel:''
                    })  
      putMyVar('VersionCheck', '1');
      setItem('VersionChecktime',nowtime+"time");                
            }else{
                hideLoading();
                return 'toast://经检测已经是最新的['+ver+']了!'
            }
        })
    });     
d.push({
        title: '<span style="color:#1aad19">'+'自动检测</span>',
        url: $("#noLoading#").lazyRule(() => {
            let s = {
                "on": "off",
                "off": "on"
            }[getItem("auto_check", "on")]
            setItem("auto_check", s);
            updateItem("auto_check", {
                title: s
            });
            refreshPage(false);
            return getItem("auto_check") == "on" ?"toast://已打开自动检测":"toast://已关闭自动检测";
        
        }),
        img: getItem("auto_check", "on") == "on" ? OnImg : OffImg,
        col_type: 'text_icon',
        extra: {
            id: "auto_checkid"
        }
    });         
                     d.push({
            col_type: "line_blank"
        })
    
        d.push({
            title: "<b><small>其它</small></b>",
            img: QtImage,
            url: "hiker://empty",
            col_type: "avatar",
        });
                    d.push({
                        title:  '<span style="color:#801dae">'+'恢复出厂设置</span>',
                        col_type: 'text_icon',
                        img:HfImage,
                        url: $('恢复所有自定义配置项为默认，是否继续?').confirm(() => {
                            
                            require(getVar('Bt依赖'));
                            clearMyVar('header.url');
                            setItem('周表样式', 'movie_3_marquee');
                            setItem('片库样式', 'movie_3_marquee');
                            setItem('折叠样式', 'movie_3_marquee');
                            setItem('推荐样式', 'movie_3_marquee');
                            setItem('热榜样式', 'text_center_1');
                            setItem('tab样式', 'scroll_button');
                            setItem('选集样式', 'text_5');
                            clearItem('menuIcons1');
                            clearItem('menuIcons2');
                            clearItem('menuIcons3');
                            clearItem('menuIcons4');
                            clearItem('menuIcons5');
                            clearItem('轮播');
                            clearItem('shunsou');
                            clearItem('auto_check');
                            clearItem('快搜');
                            clearItem('翻页阀值');
                            clearItem('每页数量');
                            refreshPage(false);
                            return 'toast://已恢复'
                        })
                    });
                    d.push({
                        title:  '<span style="color:#fa8c35">'+'返回并刷新生效</span>',
                        //desc: '为节省性能，直接点左上角返回不会刷新和生效',
                        col_type: 'text_icon',
                        img:FhImage,
                        url: $('#noLoading#').lazyRule(() => {
                            storage0.setItem("navtitle", '首页');
                            back(true)
                     refreshPage(false);
                            return 'hiker://empty'
                        })
                    });
    
    
    
        d.push({
            col_type: "line_blank"
        })    
    /*    
        d.push({
            col_type: "line"
        })
    */    
        d.push({
            title: "<br>",
            col_type: "rich_text"
        }); 
     
     
    }

function 动态分类(d) {
    const empty = "hiker://empty";
    var 净化 = ':not(:matches(首|表|更|榜|APP|留|福|回|理|成|妹|写真|吃瓜))';
    try {
        var categories = pdfa(html, 大类列表).concat(pdfa(html, 拼接列表));
    } catch (e) {
        var categories = pdfa(html, 大类列表);
    }

    let init_cate = Array(20).fill("0");
    const fold = getMyVar('header.group', "0");
    const cate_temp_json = getMyVar('header.category', JSON.stringify(init_cate));
    const cate_temp = JSON.parse(cate_temp_json);
    var pkbutton = fold == '0' ? '📪' : '📬';

    if (parseInt(page) === 1) {
        d.push({
            title: pkbutton,
            url: $('#noLoading#').lazyRule(() => {
                var pk_fold = getMyVar('header.group', "0");
                putMyVar('header.group', pk_fold == "1" ? "0" : "1");
                updateItem('pkfold_button', { title: pk_fold == '1' ? '📪' : '📬' });
                $.handleFold(pk_fold, 'pk_cls', "pkfold_id", 'pkcls', MY_RULE.title);
                return "hiker://empty";
            }),
            col_type: 'scroll_button',
            extra: {
                id: "pkfold_button"
            }
        });


    let defaultcs = [];

    categories.forEach((category, index) => {
        if (index === 0) {
            processMainCategories(d, category, cate_temp, index, 大类定位, 分类标题, 分类链接, 净化);
            d.push({
                col_type: "blank_block",
                extra: {
                    id: "pkfold_id"
                }
            });
        } else if (fold === '1') {
            processSubCategories(d, category, cate_temp, index, 拼接定位, 分类标题, 分类链接, 净化, MY_RULE.title);
            d.push({
                col_type: "blank_block",
                extra: {
                    cls: MY_RULE.title + "pkcls"
                }
            });
        } else if (fold) {
            processDefaultCategories(defaultcs, category, cate_temp, index, 拼接定位, 分类标题, 分类链接, 净化, MY_RULE.title);
            defaultcs.push({
                col_type: "blank_block",
                extra: {
                    cls: MY_RULE.title + "pkcls"
                }
            });
        }
    });

    storage0.putMyVar(MY_RULE.title + 'pk_cls', defaultcs);
}    
}

function processMainCategories(d, category, cate_temp, index, 大类定位, 分类标题, 分类链接, 净化) {
    let sub_categories = pdfa(category, 大类定位 + 净化);
    sub_categories.forEach((item, key) => {
        let title = pdfh(item, 分类标题);
        d.push({
            title: key.toString() === cate_temp[index] ? '““””<b><span style="color: ' + 分类颜色 + '">' + title + '</span></b>' : title,
            url: $(pd(item, 分类链接) + '#noLoading#').lazyRule((params) => {
                let new_cate = params.cate_temp.map((cate, i) => i === 0 ? params.key.toString() : "0");
                putMyVar('header.category', JSON.stringify(new_cate));
                putMyVar('header.url', input);
                refreshPage(true);
                return "hiker://empty";
            }, {
                cate_temp: cate_temp,
                key: key,
                page: page,
            }),
            col_type: 'scroll_button',
        });
    });
}

function processSubCategories(d, category, cate_temp, index, 拼接定位, 分类标题, 分类链接, 净化, cls) {
    let sub_categories = pdfa(category, 拼接定位 + 净化);
    sub_categories.forEach((item, key) => {
        let title = pdfh(item, 分类标题);
        d.push({
            title: key.toString() === cate_temp[index] ? '““””<b><span style="color: ' + 分类颜色 + '">' + title + '</span></b>' : title,
            url: $(pd(item, 分类链接) + '#noLoading#').lazyRule((params) => {
                params.cate_temp[params.index] = params.key.toString();
                putMyVar('header.category', JSON.stringify(params.cate_temp));
                putMyVar('header.url', input);
                refreshPage(true);
                return "hiker://empty";
            }, {
                cate_temp: cate_temp,
                index: index,
                key: key,
                page: page,
            }),
            col_type: 'scroll_button',
            extra: {
                cls: cls + "pkcls"
            }
        });
    });
}

function processDefaultCategories(defaultcs, category, cate_temp, index, 拼接定位, 分类标题, 分类链接, 净化, cls) {
    let sub_categories = pdfa(category, 拼接定位 + 净化);
    sub_categories.forEach((item, key) => {
        let title = pdfh(item, 分类标题);
        defaultcs.push({
            title: key.toString() === cate_temp[index] ? '““””<b><span style="color: ' + 分类颜色 + '">' + title + '</span></b>' : title,
            url: $(pd(item, 分类链接) + '#noLoading#').lazyRule((params) => {
                params.cate_temp[params.index] = params.key.toString();
                putMyVar('header.category', JSON.stringify(params.cate_temp));
                putMyVar('header.url', input);
                refreshPage(true);
                return "hiker://empty";
            }, {
                cate_temp: cate_temp,
                index: index,
                key: key,
                page: page,
            }),
            col_type: 'scroll_button',
            extra: {
                cls: cls + "pkcls"
            }
        });
    });
}


function setting() {
    let d = [];
    
    require(getVar('Bt依赖'));
    menusetting(d);
    setResult(d);

}
      
function 设置(d, end) {
    end = end || false;
    var page = MY_PAGE;
    var Icon_prefix = 'http://123.56.105.145/tubiao/3d/';
    
    require(getVar('Bt依赖'));  
    let showcol = config.tab样式?config.tab样式: "scroll_button";   
    if (parseInt(page) === 1) {
        let settings = {
            title: '⚙️设置',
            col_type: showcol||'scroll_button',
            url: $().rule((color, htmlTag, blank) => {
            
            require(getVar('Bt依赖'));
             setting();
            }, color, htmlTag, blank)
        }
        if (!end) {
            d.push(settings)
        } else {
            d.splice(-1, 0, settings);
        }
    }
    
}
                
    function banner(title, start, arr, data, cfg) {
        let id = title + 'lunbo';
        var rnum = Math.floor(Math.random() * data.length);
        var item = data[rnum];
        putMyVar('rnum', rnum);
        let time = 5000;
        let col_type = 'pic_1_card';
        let color = "white";
        let desc = '';
        if (cfg != undefined) {
            time = cfg.time ? cfg.time : time;
            col_type = cfg.col_type ? cfg.col_type : col_type;
            desc = cfg.desc ? cfg.desc : desc;
        }
    
        arr.push({
            col_type: col_type,
            img: item.img,
            desc: desc,
            title: item.title,
            url: item.url,
            extra: {
                id: id+'bar',
                title: item.title,
                img:item.img,
                longClick: [{
                    title: '⚙️设置', js: $.toString(() => {
                    return $().rule(() => {
                    let d=[]; 
                    require(getVar('Bt依赖'));
                    setting();
                    setResult(d);                   
                    })
                    })
                    },{
                    title: '⏰最近', js: $.toString(() => {
                    return $('#noLoading#').lazyRule((title)=> {
                    let rules=getLastRules(20);        
                    let sel_rules=rules.map(it=>it.title);      
                    return $(sel_rules,2,'请选一个最近使用的小程序').select((title)=>{        return "hiker://home@"+input  },title)                      
                    })
                    })
                    },{
                    title: '⭐收藏', js: $.toString(() => {
                         return "hiker://collection?group=####九石" })                      
                    
                    },{
                    title: '🔖书签', js: $.toString(() => {
                   var html = [];eval('html='+request('hiker://bookmark',{}));
                   var nameurl = [];for(var i = 0;i<html.length;i++){nameurl[i]={'title':'','url':''};nameurl[i].title = html[i].title;nameurl[i].url = html[i].url;};
                   const namet = nameurl.map(name => name.title);
                   return $(namet,1,'书签速览').select((nameurl) => {
                   let url_j = nameurl.findIndex(name => name.title==input);
                   return "web://"+nameurl[url_j].url},nameurl)
                    })
                    }]
            }
        })
    
        if (start == false || getMyVar('benstart', 'true') == 'false') {
            unRegisterTask(id)
            return
        }
    
        let obj = {
            data: data,
        };
    
        registerTask(id, time, $.toString((obj,id) => {
            var data = obj.data;
            var rum = getMyVar('rnum');
    
            var i = Number(getMyVar('banneri', '0'));
            if (rum != '') {
                i = Number(rum) + 1
                clearMyVar('rnum')
            } else {
                i = i + 1;
            }
            
            if (i > data.length - 1) {
                i = 0
            }
            var item = data[i];
            try {
                updateItem(id+'bar', {
                    title: item.title,
                    img: item.img,
                    url: item.url,
                    extra: {
                        title: item.title,
                        img:item.img,
                        longClick: [{
                        title: '⚙️设置', js: $.toString(() => {
                        return $().rule(() => {
                        let d=[]; 
                        require(getVar('Bt依赖'));
                        setting();
                        setResult(d);                   
                        })
                        })
                        },{
                        title: '⏰最近', js: $.toString(() => {
                        return $('#noLoading#').lazyRule((title)=> {
                        let rules=getLastRules(20);        
                        let sel_rules=rules.map(it=>it.title);      
                        return $(sel_rules,2,'请选一个最近使用的小程序').select((title)=>{        return "hiker://home@"+input  },title)                      
                        })
                        })
                        },{
                        title: '⭐收藏', js: $.toString(() => {
                             return "hiker://collection?group=####九石" })                      
                        
                        },{
                        title: '🔖书签', js: $.toString(() => {
                       var html = [];eval('html='+request('hiker://bookmark',{}));
                       var nameurl = [];for(var i = 0;i<html.length;i++){nameurl[i]={'title':'','url':''};nameurl[i].title = html[i].title;nameurl[i].url = html[i].url;};
                       const namet = nameurl.map(name => name.title);
                       return $(namet,1,'书签速览').select((nameurl) => {
                       let url_j = nameurl.findIndex(name => name.title==input);
                       return "web://"+nameurl[url_j].url},nameurl)
                        })
                        }]
                    }

                })
            } catch (e) {
                log(e.message)
                unRegisterTask(id)
            }
            putMyVar('banneri', i);
    
        }, obj,id))
    }
    function hottop(d){
    var Icon_prefix = 'http://123.56.105.145/tubiao/ke/';
    var category_Icon = ['33.png', '38.png', '105.png','106.png'];

    try {
        var lie = pdfa(rhtml, getVar('r1'));
    lie.forEach(function(it, id) {
        let rbtitle = pdfh(it, getVar('r2'));     
        if (rbtitle.includes('榜单')) {
            d.push({
                title: getMyVar('rbtitle1', '总榜单') === rbtitle ? '💠' + '““””<b><font color=#FA7298>' + rbtitle + '</font></b>' : rbtitle,
                url: $().lazyRule((rbtitle) => {
                    if (rbtitle == '总榜单') {
                        putMyVar('phb', 1);
                        putMyVar('rbtitle1', '总榜单');
                        refreshPage(false);
                        return 'hiker://empty';
                    } else {
                        putMyVar('rbtitle1', rbtitle);
                        if (rbtitle == '月榜单') {
                            putMyVar('phb', 2);
                        } else if (rbtitle == '周榜单') {
                            putMyVar('phb', 3);
                        } else  {
                            putMyVar('phb', 4);
                        }
                    }
                    refreshPage(false);
                    return 'hiker://empty';
                }, rbtitle),
                pic_url: $.getImage(Icon_prefix + category_Icon[id]),
                col_type: "icon_small_4"
            });
        } else if (rbtitle.includes('热门')) {
            d.push({
                title: getMyVar('rbtitle2', '最近热门') === rbtitle ? '💠' + rbtitle : '\t\t\t' + rbtitle,
                url: $().lazyRule((rbtitle) => {
                    if (rbtitle == '最近热门') {
                        putMyVar('phb', 1);
                        putMyVar('rbtitle2', '最近热门');
                        refreshPage(false);
                        return 'hiker://empty';
                    } else {
                        putMyVar('rbtitle2', rbtitle);
                        putMyVar('phb', 2);
                    }
                    refreshPage(false);
                    return 'hiker://empty';
                }, rbtitle),
                pic_url: $.getImage(Icon_prefix + category_Icon[id]),
                col_type: "icon_2_round"
            });
        }
    });
    
    
    if (typeof(getVar('tt0'))!=="undefined"){
    var phb1 = pdfa(rhtml,wklist(getVar('tt1'),getVar('tt0')))
    if (getMyVar('phb','1') == 1) {
            phb1.forEach((item,index) => {
            
            var rbcol=config.热榜样式?config.热榜样式:(Object.keys(pdfh(item,getVar('t2'))).length === 0 ? "movie_1_vertical_pic" : "text_center_1");
     if(getItem("热榜样式")=="undefined"&&Object.keys(pdfh(item,getVar('t2'))).length === 0){
     rbcol="text_center_1"};
     var img=$.processImageUrl(pd(item,getVar('t2'))); 
                d.push({
                    title: '‘‘’’<b>' + pdfh(item,getVar('r3')) + '</b> <small>\n排名:<font color="#FA7298">🎉<b> ' + '第 '+(parseInt(index) + 1) + ' 名</b></font>',
                    url:pd(item, getVar('t4'))+'#immersiveTheme#',
                  desc: pdfh(item,getVar('r4')),                               
                  img:img,
                    col_type:rbcol,
                extra:{
                    title:pdfh(item,getVar('r3')),
                    img:img}    
                });
            })
        } 
    }
    
    if (typeof(getVar('tt2'))!=="undefined"){
    var phb2 = pdfa(rhtml,wklist(getVar('tt2'),getVar('tt0')))
    if (getMyVar('phb') == 2) {
            phb2.forEach((item,index) => {
            var rbcol=config.热榜样式?config.热榜样式:(pdfh(item,getVar('t2'))=''? "movie_1_vertical_pic" : "text_center_1");
     if(getItem("热榜样式")=="undefined"&&Object.keys(pdfh(item,getVar('t2'))).length === 0){
     rbcol="text_center_1"};
     var img= $.processImageUrl( pd(item,getVar('t2'))); 
                d.push({
                    title: '‘‘’’<b>' + pdfh(item, getVar('r3')) + '</b> <small>\n排名:<font color="#FA7298">🎖️<b> ' + '第 '+(parseInt(index) + 1) + ' 名</b></font>',
                    url:pd(item, getVar('t4'))+'#immersiveTheme#',
                  desc: pdfh(item,getVar('r4')),                               
                  img:img,
                    col_type:rbcol,
       extra:{
        title:pdfh(item,getVar('r3')),
        img:img}             
                });
            })
        } 
    }
    if (typeof(getVar('tt3'))!=="undefined"){
    var phb3 = pdfa(rhtml,wklist(getVar('tt3'),getVar('tt0')))
    if (getMyVar('phb') == 3) {
            phb3.forEach((item,index) => {
            var rbcol=config.热榜样式?config.热榜样式:(pdfh(item,getVar('t2'))=''? "movie_1_vertical_pic" : "text_center_1");
     if(getItem("热榜样式")=="undefined"&&Object.keys(pdfh(item,getVar('t2'))).length === 0){
     rbcol="text_center_1"};
   var img=$.processImageUrl(pd(item,getVar('t2'))); 
                d.push({
                    title: '‘‘’’<b>' + pdfh(item, getVar('r3')) + '</b> <small>\n排名:<font color="#FA7298">🏅<b> ' + '第 '+(parseInt(index) + 1) + ' 名</b></font>',
                    url:pd(item, getVar('t4'))+'#immersiveTheme#',
                  desc: pdfh(item,getVar('r4')),                               
                  img:img,
                    col_type:rbcol,
                    extra:{
                        title:pdfh(item,getVar('r3')),
                        img:img}                
                });
            })
        } 
    }
    if (typeof(getVar('tt4'))!=="undefined"){
    var phb4 = pdfa(rhtml,wklist(getVar('tt4'),getVar('tt0')))
    if (getMyVar('phb') == 4) {
            phb4.forEach((item,index) => {
            var rbcol=config.热榜样式?config.热榜样式:(pdfh(item,getVar('t2'))=''? "movie_1_vertical_pic" : "text_center_1");
     if(getItem("热榜样式")=="undefined"&&Object.keys(pdfh(item,getVar('t2'))).length === 0){
     rbcol="text_center_1"};
     var img= $.processImageUrl(pd(item,getVar('t2'))); 
                d.push({
                    title: '‘‘’’<b>' + pdfh(item, getVar('r3')) + '</b> <small>\n排名:<font color="#FA7298">🏆<b> ' + '第 '+(parseInt(index) + 1) + ' 名</b></font>',
                    url:pd(item, getVar('t4'))+'#immersiveTheme#',
                  desc: pdfh(item,getVar('r4')),                               
                  img:img ,
                    col_type:rbcol,
                    extra:{
                        title:pdfh(item,getVar('r3')),
                        img:img}
                    });
            })
        } 
    }    
        
    } catch (e) {
        
    }

    }
    
    var 二级 = {
        A: function(p,lazy,dp) {
    addListener("onClose", $.toString(() => {
        clearMyVar("顺序");
        clearMyVar("tabnum");
        clearMyVar("jj_state");
    }))
        二级处理=(typeof(二级处理)==='undefined'||!二级处理)?false:二级处理;
    编码=(typeof(编码)==='undefined'||!编码)?false:编码;
    指定cookie=(typeof(指定cookie)==='undefined'||!指定cookie)?getMyVar('cookie',''):指定cookie;
    指定ua=(typeof(指定ua)==='undefined'||!指定ua)?false:指定ua;
        let _title=p.title;
        let _img=p.img;
        let _url=p.url;
        let _desc=p.desc;
        let _info=p.content;
        let _tabs=p.tabs;
        let _lists=p.lists;
        let _tab_id=p.tab_id||false;
        let _list_id=p.list_id||'body&&a:not(:matches(展开|更多))'; 
        let _list_url=p.list_url||'a&&href';  
        let _tab_text=p.tab_text||'body&&Text';
        let _list_text=p.list_text||'a&&Text';
        let id = '0';
    dp=dp||false;    
    let d=[];
    var html;
    let ua = config.ua==='手机'?MOBILE_UA:PC_UA;
    if(config.指定ua){
        ua = config.指定ua
    }
    if(指定ua&&typeof(指定ua)==='string'){
        ua = 指定ua
    }
    let fetchParams = {headers: {
            "User-Agent": ua,
            "Cookie":getMyVar('cookie')
        }};
    var nowUrl = MY_URL.replace('hiker://empty##','').split('#')[0];
    function 足迹处理(){// 足迹处理
        let footHistory = lsg.getItem('footHistory','{}');
        try {JSON.parse(footHistory);}catch (e) {lsg.removeItem('footHistory');footHistory='{}'}//移除足迹
        footHistory = JSON.parse(footHistory);
        putMyVar('选集翻页',footHistory[nowUrl]||'1');
    }
    
    if(MY_URL.startsWith('http')){
    
        let lastUrl = getMyVar('lastUrl','');
        if(config.html&&lastUrl===nowUrl&&pdfa(config.html,_lists).length!==0){
            html = config.html
        }else{
try{
        var extra_headers='';
            if(编码){
                extra_headers={
                    "content-type":"charset="+编码||'utf-8',
                };
            }
            html=$.获取源码(nowUrl,ua,'',指定cookie,extra_headers);
    if(二级处理&&typeof(二级处理.重定向)=='function'){
            html=二级处理.重定向(MY_URL,html);
   //log('html1')         
            }
    }catch(e){           
    MY_URL=MY_URL.replace('hiker://empty##','').split('#')[0];
    let fetchParams = {headers: {"User-Agent":指定ua,"cookie":指定cookie,
                "content-type": "charset="+编码
            }};
        var html=fetch(MY_URL,fetchParams);
        if(二级处理&&typeof(二级处理.重定向)=='function'){
            html=二级处理.重定向(MY_URL,html);
        }
            }
            //log(html);
            if (/检测中/.test(html)){
                html = request(nowUrl + '?btwaf' + html.match(/btwaf(.*?)\"/)[1], {});
            }
            putMyVar('lastUrl',nowUrl);
            initConfig({html:html}); // 自动合并注入
            足迹处理();
        }
    }else{
        html=getResCode();
        //log(html);
        if (/检测中/.test(html)){
            html = request(nowUrl + '?btwaf' + html.match(/btwaf(.*?)\"/)[1], {});
        }
        if(getMyVar('lastUrl','')!==nowUrl){
            putMyVar('lastUrl',nowUrl);
            足迹处理();
        }
            }
    //log('html='+html)         
    if(getItem("通免")=="道长通免"){def_lazy=config.道长通免}else if(getItem("通免")=="香免"){def_lazy=config.香免}else{def_lazy = config.通免};
    lazy=lazy||def_lazy;
    /*
    var html = request(MY_URL, {
        headers: {
            "User-Agent": MOBILE_UA
        }
    })
    */
        putMyVar('tab_text', _tab_text);
        putVar('_list_id', _list_id);
        putVar('_list_url', _list_url);
        let list = [];
            try {
                id = _tab_id ? (pdfh(addTb(tabs[nowTab]), _tab_id) || (nowTab + '')) : (nowTab + '');
                if(二级处理&&二级处理.重定向){
                    html = redhtml;
                }
                if(typeof(_lists)==='string'){
                    list = pdfa(html, showlist(id, _lists));
                }else if(typeof(_lists)==='function'){
                    list = _lists(html,MY_URL,id);
                }
            }catch (e) {
                if(getMyVar('nowTab','0')!=='0'){
                    putMyVar('nowTab','0');
                    refreshPage(false);
                    return
                }
            }      
        var title = '';
var desc = '';
var info = '';
var bImg = '';
var bUrl = '';

if (_title) {
    var ttt = _title.split(';');
    try {
        title =pdfh(addTb(html), ttt[0]) + '\n' + small(pdfh(addTb(html), ttt[1])) + '\n' + small(pdfh(addTb(html), ttt[2])) + '\n' + small(pdfh(addTb(html), ttt[3]));
    } catch (e) {}
}

if (_desc) {
    let tmpDesc = [];
    for (let it of _desc.split(';')) {
        try {
            tmpDesc.push(pdfh(addTb(html), it));
        } catch (e) {}
    }
    desc = tmpDesc.join('\n');
}

title = title || MY_PARAMS.title || '暂无标题';
desc = desc || MY_PARAMS.desc || '暂无描述';
info = MY_PARAMS.content || info;

try {
    bImg = _img ? $.processImageUrl(pd(html, _img)) : '';
    bImg = !/.jpg|.gif|.png|.webp|.wbmp/.test(bImg) ? MY_PARAMS.img: bImg;        
} catch (e) {}

if (isPic(bUrl) && !/@Referer/.test(bUrl)) {
    bUrl += '@Referer=';
}

try {
    bUrl = _url ? pd(html, _url) : MY_PARAMS.pic_url || '';
} catch (e) {
    bUrl = MY_URL.split("##").slice(-1)[0];
}
//log(' html='+html)
//log('_img'+_img)
//log(' pd(html, _img)'+pd(html, _img))
//log(' bImg'+bImg)
d.push({
    title: title,
    pic_url: bImg || MY_PARAMS.img || 'https://ooooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоoᴏοоᴏᴏοоοoοоοοoоᴏоοоᴏоοоοοοᴏοooоᴏᴏοоᴏοoᴏooοοᴏᴏoᴏοᴏoᴏoᴏoᴏoooᴏоοoᴏоοoᴏoooᴏоooᴏоοoоᴏᴏοоoоοᴏοoοоοοοоoοoоᴏᴏoоᴏοoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοooоοᴏοoοоοοοоoοoоᴏоοоооοᴏooοоοᴏoᴏᴏᴏοооοοоᴏоοоᴏoοооοοоᴏоοоοοoᴏᴏοοоοоοоoοοоᴏoοᴏoᴏοоοο',
    url: dp?'hiker://page/Route?rule=MyFieldᴰⁿ&type=设置#noHistory##noRecordHistory#':bImg,
    col_type: "movie_1_vertical_pic_blur",
    extra: {
        id:"picid",
        gradient: true
    },
    desc: small(desc),
});

if (_info || info) {
    try {
            info = (_info ? pdfh(html, _info) : info) || '暂无详情';
    } catch (e) {}
}
funcDesc(d,info,bImg,dp?true:false)
function funcDesc(d, content_desc,bImg,dp) {
dp=dp||false;
var JjImage = $.getImage("http://123.56.105.145/tubiao/more/197.png")
    d.push({
        title: '影片简介 <small><small><span style="color:#19B89D">展开></span></small></small>',
        img: JjImage,
        url: $("#noLoading#").lazyRule((content_desc,bImg,dp) => {
            if (getMyVar("jj_state", "收起") == "收起") {
                updateItem("content_jjid", {
                    title: '影片简介 <small><small><span style="color:#19B89D">收起></span></small></small>'
                })

                updateItem("content_decid", {
                    title: '<small><span style="color:#808080">' + content_desc + '</span></small>'
                });
 updateItem("picid", {
                url: dp?'hiker://page/Route?rule=MyFieldᴰⁿ&type=设置#noHistory##noRecordHistory#':MY_URL 
            });               
                putMyVar("jj_state", "展开");
            } else {
                updateItem("content_jjid", {
                    title: '影片简介 <small><small><span style="color:#19B89D">展开></span></small></small>'
                })

                updateItem("content_decid", {
                    title: '<small><span style="color:#808080">' + content_desc.substr(0, 50) + '...</span></small>'
                });
   updateItem("picid", {
                url: dp?'hiker://page/Route?rule=MyFieldᴰⁿ&type=设置#noHistory##noRecordHistory#':bImg 
            });             
                putMyVar("jj_state", "收起");
            }
            return "hiker://empty"
        }, content_desc,bImg,dp),
        col_type: "avatar",
        extra: {
            id: "content_jjid"
        }
    });
    d.push({
        title: '<small><span style="color:#808080">' + content_desc.substr(0, 50) + '...</span></small>',
        col_type: "rich_text",
        extra: {
            textSize: 14,
            lineSpacing: 3,
            id: "content_decid"
        }
    });
    return d
}

    function initConfigs(name, config) {
        if (!config) {
            config = JSON.parse(fetch(getVar('Btea_config')));
        }
        if (config[name] == null) {
            config[name] = defaultBteaConfigs[name] ? defaultBteaConfigs[name] : {};
            writeFile(getVar('Btea_config'), JSON.stringify(config));
        }
        return config;
    }    
    function getConfig(name, rootConfig) {
        let config = rootConfig ? rootConfig : JSON.parse(fetch(getVar('Btea_config')));
        if (name) {
            if (config[name] == null) {
                config = initConfigs(name, config);
            }
            return config[name];
        } else {
            return config;
        }
    }
    
        let ititle=MY_PARAMS.title || pdfh(addTb(html),ttt[0]);
        let conf = JSON.parse(fetch(getVar('Btea_config')));
        //let quickSearchConfigs = conf.quickSearchConfigs;
        let quickSearchConfigs = getConfig('quickSearchConfigs', conf);
        let quickSearchItems = [];
        quickSearchConfigs.order.forEach(quickSearchItem => {
            if (quickSearchConfigs[quickSearchItem]) {
        var QsIcon =$.getImage(quickSearchConfigs[quickSearchItem].pic)        
                require(getVar('Bt依赖'));
                const name = quickSearchConfigs[quickSearchItem].name;
                const isYunPanJun = name.includes("云盘君");
                const isFengYing = name.includes("风影");
                function handleError(e) {
                    return $("未检测到风影小程序，确认导入？").confirm(() => {
                        return parsePaste("云6oooole/xxxxxx/ujstymbphe8jwtjo@ytWEVz");
                    });
                }
                let url = isYunPanJun 
                    ? "hiker://page/sou?rule=云盘君.简" 
                    : isFengYing 
                    ? $('#noLoading#').lazyRule((ititle) => {
                            try {
                                const preRule = JSON.parse(fetch('hiker://home@风影')).preRule;
                                eval(preRule); // 注意：eval 使用需谨慎
                                return ititle + $('#noLoading#').lazyRule(() => {
                                    require(config.依赖);
                                    return sourl();
                                });
                            } catch (e) {
                                return handleError(e);
                            }
                        }, ititle)
                    : 'hiker://search?s=' + ititle + '&rule=' + name;
                      
                if (getItem("快搜", "on") == "on") {
                d.push({
                    title: quickSearchItem,
                    img: QsIcon,
                    col_type: quickSearchConfigs.mode || 'icon_small_4',
                    url: url,
                    extra: {           
                        searchTerms: ititle
                    }
                })
               } 
                
            }
        })
function getLazy(url,lazy) {//动态获取动态解析可兼容磁力链接
        if ((typeof(lazy)==='undefined'||!lazy) && /^magnet:\?|^ftp:|^thunder:/.test(url.trim())) {//处理磁力
                return ''
        } else {
            def_lazy = (typeof(def_lazy)==='undefined'||!def_lazy)?'':def_lazy;
            return lazy || def_lazy
        }
    }        
        

    const styleMappings = [
        { min: 1, max: 2, style: 'text_5' },
        { min: 3, max: 5, style: 'text_4' },
        { min: 6, max: 10, style: 'text_3' },
        { min: 11, max: 20, style: 'text_2' },
        { min: 21, max: Infinity, style: 'text_1' }
    ];
    const getStyle = (lists) => {
        // 根据列表长度确定自动样式
        const mapping = styleMappings.find(({ min, max }) => lists.length >= min && lists.length <= max) || { style: 'flex_button' };
        let Auto_colt = mapping.style;
        return Auto_colt;
    };
    

try {

    var arts = pdfa(html, _tabs);

    var tabs = [];
    for (var i in arts) {
        tabs.push(pdfh(arts[i], _tab_text).replace(' ',''))
    }
    var conts = pdfa(html, _lists);
    var lists=[];
    var play_Lists = [];
for (var i in conts) {
        var plays = pdfa(conts[i], _list_id);
        var temp=[];
        plays.forEach(x => {           
            var titletext = pdfh(x, _list_text);
            var url = pd(x, _list_url)+getLazy(pd(x, _list_url),lazy);    
            var Auto_colt=getStyle(titletext);
            let colt = getItem('选集样式',Auto_colt); 
            temp.push({
                title:titletext.replace(/第|集|话|期/g, ''),
                url:url,
                col_type:colt,
                extra: {
                        //id: pd(conts[i], _list_url),
                        cls: 'playList'
                    }                
            })
        })
        lists.push(temp)


       
    }
    //log('lists'+JSON.stringify(lists));
  
    var ejobj = {
        "list": lists,
        "tab": tabs,
    };
    初始化(d, ejobj)
} catch (e) {
    log(e.toString())
    d.push({
        title: '‘‘本片无选集’’',
        col_type: "text_center_1"
    })

}    
    setHomeResult({data:d});
    
    },
B: function(d,p,lazy,html) {
    addListener("onClose", $.toString(() => {
        clearMyVar("顺序");
        clearMyVar("tabnum");
    }))
    指定ua=(typeof(指定ua)==='undefined'||!指定ua)?false:指定ua;
    d=d;
    html=html;
    if(getItem("通免")=="道长通免"){def_lazy=config.道长通免}else if(getItem("通免")=="香免"){def_lazy=config.香免}else{def_lazy = config.通免};
    lazy=lazy||def_lazy;
    let ua = config.ua==='手机'?MOBILE_UA:PC_UA;
    if(config.指定ua){
        ua = config.指定ua
    }
    if(指定ua&&typeof(指定ua)==='string'){
        ua = 指定ua
    }
    let fetchParams = {headers: {
            "User-Agent": ua,
            "Cookie":getMyVar('cookie')
        }};
    var nowUrl = MY_URL.replace('hiker://empty##','').split('#')[0];
    function 足迹处理(){// 足迹处理
        let footHistory = lsg.getItem('footHistory','{}');
        try {JSON.parse(footHistory);}catch (e) {lsg.removeItem('footHistory');footHistory='{}'}//移除足迹
        footHistory = JSON.parse(footHistory);
        putMyVar('选集翻页',footHistory[nowUrl]||'1');
    }
    if(MY_URL.startsWith('hiker://empty##')){
        let lastUrl = getMyVar('lastUrl','');
        if(config.html&&lastUrl===nowUrl){
            html = config.html
        }else{
            //html = fetch(tUrl,fetchParams);
            var extra_headers='';
            if(编码){
                extra_headers={
                    "content-type":"charset="+编码||'utf-8',
                };
            }
            html=$.获取源码(nowUrl,ua,'',指定cookie,extra_headers);
            //log(html);
            if (/检测中/.test(html)){
                html = request(nowUrl + '?btwaf' + html.match(/btwaf(.*?)\"/)[1], {});
            }
            putMyVar('lastUrl',nowUrl);
            initConfig({html:html}); // 自动合并注入
            足迹处理();
        }
    }else{
        html=getResCode();
        if (/检测中/.test(html)){
            html = request(nowUrl + '?btwaf' + html.match(/btwaf(.*?)\"/)[1], {});
        }
        if(getMyVar('lastUrl','')!==nowUrl){
            putMyVar('lastUrl',nowUrl);
            足迹处理();
        }
    }    
    //log('Bhtml='+html)
    /*
    var html = request(MY_URL, {
        headers: {
            "User-Agent": MOBILE_UA
        }
    })
    */
        let _title=p.title;
        let _img=p.img;
        let _url=p.url;
        let _desc=p.desc;
        let _info=p.content;
        var title = '';
var desc = '';
var info = '';
var bImg = '';
var bUrl = '';

if (_title) {
    var ttt = _title.split(';');
    try {
        title = pdfh(addTb(html), ttt[0]) + '\n' + small(white(pdfh(addTb(html), ttt[1]))) + '\n' + small(white(pdfh(addTb(html), ttt[2]))) + '\n' + small(white(pdfh(addTb(html), ttt[3])));
    } catch (e) {}
}

if (_desc) {
    let tmpDesc = [];
    for (let it of _desc.split(';')) {
        try {
            tmpDesc.push(pdfh(addTb(html), it));
        } catch (e) {}
    }
    desc = tmpDesc.join('\n');
}

title = title || MY_PARAMS.title || '暂无标题';
desc = desc || MY_PARAMS.desc || '暂无描述';
info = MY_PARAMS.content || info;

try {
    bImg = _img ? $.processImageUrl(pd(html, _img)) : '';   
} catch (e) {}

if (isPic(bUrl) && !/@Referer/.test(bUrl)) {
    bUrl += '@Referer=';
}

try {
    bUrl = _url ? pd(html, _url) : MY_PARAMS.pic_url || '';
} catch (e) {
    bUrl = MY_URL.split("##").slice(-1)[0];
}
//log(' MY_PARAMS.img'+MY_PARAMS.img)
d.push({
    title: white(title),
    pic_url: bImg  || MY_PARAMS.img || 'https://ooooooooooooooooooooooo.ooo/ooooοооoοᴏοoοᴏοoοᴏooοᴏoᴏoᴏооoоᴏᴏoоᴏᴏοоοᴏοооοοᴏοoοоoᴏοоᴏᴏοоοoοоοοoоᴏоοоᴏоοоοοοᴏοooоᴏᴏοоᴏοoᴏooοοᴏᴏoᴏοᴏoᴏoᴏoᴏoooᴏоοoᴏоοoᴏoooᴏоooᴏоοoоᴏᴏοоoоοᴏοoοоοοοоoοoоᴏᴏoоᴏοoоᴏᴏοᴏoоοоoοοᴏοᴏoоᴏᴏοоᴏοοоoοοᴏoᴏοᴏοoοоοοοᴏoоoоᴏᴏοooоοᴏοoοоοοοоoοoоᴏоοоооοᴏooοоοᴏoᴏᴏᴏοооοοоᴏоοоᴏoοооοοоᴏоοоοοoᴏᴏοοоοоοоoοοоᴏoοᴏoᴏοоοο',
    url: bImg,
    col_type: "movie_1_vertical_pic_blur",
    extra: {
        gradient: false
    },
    desc: small(white(desc)),
});

if (_info || info) {
    try {
        info = (_info ? pdfh(html, _info) : info) || '暂无详情';
    } catch (e) {}
}

d.push({
    title: '‘‘’’<font color="#098AC1">📜剧情简介</font>',
    desc: '‘‘’’<small><font color="#808080"> ' + info.substr(0, 70) + '...' + '</font></small>' + '<small><font color="red">详情</font></small>',
    col_type: 'text_1',
    extra: {
        lineVisible: false
    },
    url: $().rule((text) => {
        setResult([{
            title: text,
            col_type: 'long_text',
        }])
    }, info)
});

    function initConfigs(name, config) {
        if (!config) {
            config = JSON.parse(fetch(getVar('Btea_config')));
        }
        if (config[name] == null) {
            config[name] = defaultBteaConfigs[name] ? defaultBteaConfigs[name] : {};
            writeFile(getVar('Btea_config'), JSON.stringify(config));
        }
        return config;
    }    
    function getConfig(name, rootConfig) {
        let config = rootConfig ? rootConfig : JSON.parse(fetch(getVar('Btea_config')));
        if (name) {
            if (config[name] == null) {
                config = initConfigs(name, config);
            }
            return config[name];
        } else {
            return config;
        }
    }
    
        let i=pdfh(addTb(html),ttt[0]);
        let conf = JSON.parse(fetch(getVar('Btea_config')));
        //let quickSearchConfigs = conf.quickSearchConfigs;
        let quickSearchConfigs = getConfig('quickSearchConfigs', conf);
        let quickSearchItems = [];
        log( quickSearchConfigs )
        quickSearchConfigs.order.forEach(quickSearchItem => {
            if (quickSearchConfigs[quickSearchItem]) {
                
                require(getVar('Bt依赖'));
                if (getItem("快搜", "on") == "on") {
                d.push({
                    title: quickSearchItem,
                    img: quickSearchConfigs[quickSearchItem].pic,
                    col_type: quickSearchConfigs.mode || 'icon_small_4',
                    url: 'hiker://search?s=' + i + '&rule=' + quickSearchConfigs[quickSearchItem].name,
                    extra: {           
                        searchTerms:i
                    }
                })
               } 
                
            }
        })




}    
    
    }
    
function 加载魔断(){
    // let tools = 加载魔断() tools.renrenmi
    return require('http://hiker.nokia.press/hikerule/rulelist.json?id=2971');
}    
function 魔断(获取链接函数){
    获取链接函数 = 获取链接函数||function (input){
        return input
    };
    let lazy=$('').lazyRule((获取链接函数)=>{
        try{
            let realUrl = 获取链接函数(input);
            eval("var configDp =" + fetch("hiker://files/cache/MyParseSet.json"));
            eval(fetch(configDp.cj));
            log(input+'->'+realUrl+'正在断插魔改版解析...');
            // 加入超时设置，建议在首页设置
            return aytmParse(realUrl)
        }catch(e){
            //return input
            const {lazyParse} = $.require('hiker://page/globalParse?rule=道长仓库Pro');
            return lazyParse(input);
        }
    },获取链接函数);
    return lazy
}
function 顺序切换(tab_cnt, list_cnt) {
    tab_cnt = tab_cnt || 1;
    list_cnt = list_cnt || 0;
    let tips1 = color('(☆逆序↑)', '#228be6');
    let tips2 = color('(★正序↓)', '#d0aa344');
    let showOrder = getMyVar('顺序', '正序') === '逆序' ? tips1 : tips2;
    //let title = small(color('播放列表共计', '#098AC1')+color('$tab_cnt', '#098AC1')+color('条线路 ', '#098AC1')+color('$list_cnt', '#098AC1')+color('集', '#098AC1'))+blank()+right(small('$showOrder'));

    let title = small2(color('选集列表共计', '#098AC1') + color2(tab_cnt, '#098AC1') + color2('条线路', '#098AC1')) + blank() + right(small2(showOrder));


    let title2 = title.replace('$tab_cnt', tab_cnt).replace('$list_cnt', list_cnt);
    return {
        title: title2.replace('$showOrder', showOrder),
        col_type: 'avatar',
        img: 'http://123.56.105.145/tubiao/more/31.png',
        url: $('#noLoading#').lazyRule((title2, tips1, tips2) => {
            if (getMyVar('顺序', '正序') === '逆序') {
                putMyVar('顺序', '正序');
            } else {
                putMyVar('顺序', '逆序');
            }
            let orderNow = getMyVar('顺序', '正序');
            refreshPage(false);
            let showOrder = orderNow === '逆序' ? tips1 : tips2;
            updateItem('changeOrder', {
                title: title2.replace('$showOrder', showOrder)
            });
            let nowData = JSON.parse(readFile("nowList.json", 0) || '[]'); // 读取缓存的选集数据列表
            let oldIds = nowData.map(it => it.extra.id); //老元素ids
            for (let i in oldIds) {
                //批量更新其中的cls
                updateItem(oldIds[i], {
                    extra: {
                        cls: 'toDelete'
                    }
                });
            }
            if (orderNow === '逆序') {
                nowData.reverse();
            }
            // 在最后一个老元素后面增加新的元素
            addItemAfter(oldIds.slice(-1)[0], nowData);
            // 删除老元素
            deleteItemByCls('toDelete');
            return 'toast://已切换顺序为:' + orderNow
        },
            title2,
            tips1,
            tips2),
        extra: {
            lineVisible: false,
            id: 'changeOrder', //改变排序

            longClick: [{
                title: '样式',js: $.toString(()=>{
                    let all_cols = [''].concat(getColTypes());
                    let col = (storage0.getItem('按钮样式', '') || '');
                    let 按钮样式 = all_cols.map((it) => {
                        return it === col ? '👉' + it: it;
                    });
                    let tips = '请选择选集按钮样式';
                    return $(按钮样式, 2, tips).select(() => {
                        input = input.replace(/👉/g, '');
                        storage0.setItem('按钮样式', input);
                        // config.按钮样式 = input;
                        initConfig({
                            按钮样式: input
                        });
                        // refreshPage(true);
                        let oldIds = (findItemsByCls('playList') || []).map(it=>it.extra.id); //老元素ids
                        // log(oldIds);
                        oldIds.forEach(x=> {
                            updateItem(x, {
                                col_type: input
                            });
                        });
                        //let showList = storage0.getMyVar('showList'); //获取储存的选集列表
                        /*showList.forEach(x=> {
                            x.col_type = input
                        });*/
                        //storage0.putMyVar('showList', showList);
                        return 'toast://已切换选集按钮样式为:' + input;
                    });

                })


            },{
                title: '搜索', js: $.toString(() => {

                    let exp = getMyVar('exp', '')

                    if (exp == '') {
                        putMyVar('exp', 'exp');
                        refreshPage(true);
                        return 'toast://搜索展开'
                    } else {
                        putMyVar('exp', '');
                        refreshPage(true);
                        return 'toast://搜索收起'
                    }


                })
            }, {
                title: '推送', js: $.toString(() => {

                    let pushx = getMyVar('pushx', '')

                    if (pushx == '') {
                        putMyVar('pushx', '1');
                        refreshPage(true);
                        return 'toast://推送展开'
                    } else {
                        putMyVar('pushx', '');
                        refreshPage(true);
                        return 'toast://推送收起'
                    }


                })
            }]
        }
    }
}    
if (typeof (lsg) === 'undefined') {
    //如果私有储存未定义的话就定义这个全局变量
    lsg = evalPrivateJS("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");
}
function 选集储存(list, mode) {
    //选集翻页前调用方法，也可以不调用，直接给选集翻页obj传参 list
    mode === 1 ? saveFile('showList.json',
        JSON.stringify(list),
        0) : storage0.putMyVar('showList',
            list);
    return true
}
function 选集翻页(d, obj, showBottom) {
    //d 是加入到数据,obj是构造对象,showBottom是否同时在底部显示
    // 关键操作:选集列表extra必须有唯一id并且cls为playList
    // 选集列表必须处理完后 storage0.putMyVar('showList') 或者 saveFile('showList.json',JSON.stringify(list),0)
    showBottom = showBottom || false; //底部也显示5大件
    let def_obj = {
        list: [], //可以对象传递,不传的话默认取storage0.gettMyVar('showList')
        size: Number(lsg.getItem('每页数量', 40)), //每页数量
        over: Number(lsg.getItem('翻页阀值', 40)), //翻页阀值，超过多少才显示翻页组件
        col_type: storage0.getItem('按钮样式',
            '') || MY_RULE.col_type || 'text_5', //二级选集样式
        show_order: false, //显示排序切换
        tab_cnt: 1, //线路数
        mode: 1, // 模式，1用私有文件,其他用内存
    }
    obj = obj || {};
    obj = Object.assign(def_obj,
        obj);
    let pageTitleInfo = ''; //翻页统计标题
    let showPic = 'http://123.56.105.145/tubiao/ke/53.png'; //翻页提示图标
    let showCol = 'avatar'; //翻页提示样式
    let col_type = obj.col_type; //二级选集样式
    let show_order = obj.show_order; //显示顺序
    let tab_cnt = obj.tab_cnt; // 线路数量
    let list = Array.isArray(obj.list) && obj.list.length > 0 ? obj.list : (obj.mode === 1 ? JSON.parse(readFile("showList.json", 0) || "[]") : storage0.getMyVar('showList')); // 选集列表完整数据,请确保是强制正序的
    if (list.length > 0) {
        list = 强制正序(list);
        if (!list[0].extra || !list[0].extra.id || !list[0].extra.cls) {
            //选集列表大于0但是无id或者cls,循环修复后进行变量储存
            list.forEach((it, idex) => {
                if (!it.extra) {
                    it.extra = {}
                }
                if (!it.col_type) {
                    it.col_type = col_type
                }
                let url = it.url.split('@')[0];
                let id = /hiker:\/\/empty/.test(url) ? (idex + '') : url;
                id = it.extra.id || id;
                Object.assign(it.extra, {
                    id: id,
                    cls: 'playList'
                })
            });
            obj.mode === 1 ? saveFile('showList.json',
                JSON.stringify(list),
                0) : storage0.putMyVar('showList',
                    list);

                   
        } else if (!list[0].col_type) {
            list.forEach((it) => {
                it.col_type = col_type
            });
            obj.mode === 1 ? saveFile('showList.json', JSON.stringify(list), 0) : storage0.putMyVar('showList', list);
            

        }
    }
    if (!(obj.mode === 1 ? JSON.parse(readFile("showList.json", 0) || "[]") : storage0.getMyVar('showList'))) {
        obj.mode === 1 ? saveFile('showList.json', JSON.stringify(list), 0) : storage0.putMyVar('showList', list);
    }
    let showList = list; //首次渲染的选集列表
    let 每页数量 = obj.size; // 分页的每页数量
    let 最大页数 = Math.ceil(list.length / 每页数量);
    let 翻页阀值 = obj.over; // 分页的翻页阀值，超过多少才显示翻页
    let nowPage = Number(getMyVar('选集翻页', '1')) || 1; //当前页数
    if (nowPage > 最大页数) {
        //防止切换线路导致页数数组越界
        nowPage = 最大页数;
        putMyVar('选集翻页', '' + nowPage);
    }
    if (list.length > 翻页阀值 && getMyVar('选集显示', '分页') === '分页') {
        let maxNum = 每页数量 * nowPage; //第一页的话,最大显示40*1集,第2页41-80集
        showList = list.slice((nowPage - 1) * 每页数量, maxNum);
    }
    saveFile("nowList.json", JSON.stringify(showList), 0); // 将当前页的选集变量储存列表
    if (getMyVar('顺序', '正序') === '逆序') {
        //对该页的数据进行正逆序排列
        showList = showList.reverse();
    }

    function jumpToPage(每页数量, toPage, nowPage, pageTitleInfo, mode) {
        //跳页
        if (nowPage === toPage) {
            return //跳转页数等于当前页，不操作
        }
        // showLoading(`正在前往第${toPage}页,请稍等`);
        let oldIds = (findItemsByCls('playList') || []).map(it => it.extra.id); //老元素ids
        let showList = (mode === 1 ? JSON.parse(readFile("showList.json", 0) || "[]") : storage0.getMyVar('showList')); //获取储存的选集列表
        let maxNum = 每页数量 * toPage; //第一页的话,最大显示40*1集,第2页41-80集
        showList = showList.slice((toPage - 1) * 每页数量, maxNum);
        saveFile("nowList.json", JSON.stringify(showList), 0); // 将当前页的选集变量储存列表
        if (getMyVar('顺序', '正序') === '逆序') {
            showList = showList.reverse();
        }
        let toDeleteIds = []; //待删除的旧id
        let toAddDatas = []; //待新增的新数据
        if (oldIds.length > showList.length) {
            toDeleteIds = oldIds.slice(showList.length);
        } else if (oldIds.length < showList.length) {
            toAddDatas = showList.slice(oldIds.length)
        }
        let cnt = Math.min(oldIds.length, showList.length);
        let pageTitle = pageTitleInfo.replace('$page', getMyVar('选集翻页', '1')).replace('$cnt', showList.length);
        pageTitle = pageTitle.replace(/““””/g, '');
        updateItem('pageTitle', {
            title: pageTitle
        });
        if (toDeleteIds.length > 0) {
            //有删除的先删除
            deleteItem(toDeleteIds);
        }
        if (toAddDatas.length > 0) {
            //有新增的先新增
            addItemAfter(oldIds[cnt - 1], toAddDatas);
        }
        for (let i = 0; i < cnt; i++) {
            //最后顺序更新
            updateItem(oldIds[i], showList[i]);
        }
        // updateItem(oldIds.slice(0,cnt),showList.slice(0,cnt));//批量更新?试了不行
        // hideLoading();
    }
    let btns = [];
    let seps = [];
    if (show_order && list.length > 0) {
        let order_data = 顺序切换(tab_cnt, list.length);
        d.push(order_data);
    }

    if (list.length > obj.size) {
        //传入的数据数组大于翻页的每页数量,已经包含大于0判断了
        let pageTitle = '';
        if (getMyVar('选集显示', '分页') === '分页') {
            pageTitleInfo = color('翻页模式  本页:', '#585858') + color('$cnt', '#098AC1') + color('  共计:', '#585858') + color(list.length, '#098AC1') + color('集  第:', '#585858') + color('$page' + '/' + 最大页数, '#098AC1') + color('页', '#585858');
            pageTitleInfo = small(pageTitleInfo);
            pageTitle = pageTitleInfo.replace('$page', getMyVar('选集翻页', '1')).replace('$cnt', showList.length).replace(/““””/g, '');
        } else {
            pageTitle = color('翻页模式已关闭,点击启用', '#585858');
            pageTitle = small(pageTitle).replace(/““””/g, '');
            pageTitle = pageTitle.replace(/““””/g, '');
        }
        d.push({
            title: pageTitle,
            col_type: showCol,
            pic_url: showPic,
            url: $('确认切换分页显示状态?').confirm(() => {
                let nextMode = getMyVar('选集显示', '分页') === '分页' ? '全部' : '分页';
                putMyVar('选集显示', nextMode);
                refreshPage(false); // 开关动态难以实现，放弃
                /*
                if(nextMode==='全部'){
                    let showList = storage0.getMyVar('showList'); //获取储存的选集列表
                    if (getMyVar('顺序', '正序') === '逆序') {//对该页的数据进行正逆序排列
                        showList = showList.reverse();
                    }
                    deleteItemByCls('playList');
                    addItemAfter('page',showList);
                }
                */
                return 'hiker://empty'
            }),
            extra: {
                id: 'pageTitle'
            }
        });
        if (getMyVar('选集显示', '分页') === '分页') {
            btns.push({
                title: '✈️跳集',
                col_type: "text_5",
                url: $(list.length, '请输入要跳转到的集数').input((max, 每页数量, pageTitleInfo, jumpToPage, mode) => {
                    if (isNaN(parseInt(input))) {
                        return 'toast://输入有误,请输入一个1~' + max + '的数字'
                    }
                    let toNum = parseInt(input);
                    if (toNum < 1 || toNum > max) {
                        return 'toast://输入有误,请输入一个1~' + max + '的数字'
                    }
                    let nowPage = Number(getMyVar('选集翻页', '1')) || 1; //当前页数
                    let toPage = Math.ceil(toNum / 每页数量);
                    putMyVar('选集翻页', '' + toPage);
                    jumpToPage(每页数量, toPage, nowPage, pageTitleInfo, mode);
                    return 'toast://已跳到列表元素第' + toNum + '个所在页码:' + toPage
                },
                    list.length,
                    每页数量,
                    pageTitleInfo,
                    jumpToPage,
                    obj.mode)
            });
            btns.push({
                title: '🔝跳页',
                col_type: "text_5",
                url: $(1,
                    '请输入要跳转到的页数').input((最大页数, 每页数量, pageTitleInfo, jumpToPage, mode) => {
                        if (isNaN(parseInt(input))) {
                            return 'toast://输入有误,请输入一个1~' + 最大页数 + '的数字'
                        }
                        let toPage = parseInt(input);
                        if (toPage < 1 || toPage > 最大页数) {
                            return 'toast://输入有误,请输入一个1~' + 最大页数 + '的数字'
                        }
                        let nowPage = Number(getMyVar('选集翻页', '1')) || 1; //当前页数
                        putMyVar('选集翻页', '' + toPage);
                        jumpToPage(每页数量, toPage, nowPage, pageTitleInfo, mode);
                        return 'toast://已跳到第' + toPage + '页'
                    },
                        最大页数,
                        每页数量,
                        pageTitleInfo,
                        jumpToPage,
                        obj.mode)
            });
            btns.push({
                title: '⏮️上页',
                col_type: "text_5",
                url: $('#noLoading#').lazyRule((每页数量, pageTitleInfo, jumpToPage, mode) => {
                    let nowPage = parseInt(getMyVar('选集翻页', '1')) || 1;
                    let toPage = nowPage - 1;
                    if (toPage > 0) {
                        putMyVar('选集翻页', '' + toPage);
                        jumpToPage(每页数量, toPage, nowPage, pageTitleInfo, mode);
                        return 'hiker://empty'
                    } else {
                        return 'toast://已经没有上一页了!'
                    }
                },
                    每页数量,
                    pageTitleInfo,
                    jumpToPage,
                    obj.mode)
            });
            btns.push({
                title: '⏭️下页',
                col_type: "text_5",
                url: $('#noLoading#').lazyRule((最大页数, 每页数量, pageTitleInfo, jumpToPage, mode) => {
                    let nowPage = parseInt(getMyVar('选集翻页', '1')) || 1;
                    let toPage = nowPage + 1;
                    if (toPage > 最大页数) {
                        return 'toast://已经没有下一页了!'
                    }
                    putMyVar('选集翻页', '' + toPage);
                    jumpToPage(每页数量, toPage, nowPage, pageTitleInfo, mode);
                    return 'hiker://empty'
                },
                    最大页数,
                    每页数量,
                    pageTitleInfo,
                    jumpToPage,
                    obj.mode)
            });
            btns.push({
                title: '🔚尾页',
                col_type: "text_5",
                url: $('#noLoading#').lazyRule((最大页数, 每页数量, pageTitleInfo, jumpToPage, mode) => {
                    let toPage = 最大页数;
                    let nowPage = Number(getMyVar('选集翻页', '1')) || 1; //当前页数
                    putMyVar('选集翻页', '' + toPage);
                    jumpToPage(每页数量, toPage, nowPage, pageTitleInfo, mode);
                    return 'toast://已跳转到第' + 最大页数 + '页'
                },
                    最大页数,
                    每页数量,
                    pageTitleInfo,
                    jumpToPage,
                    obj.mode)
            });
            seps.push({
                col_type: "line_blank",
                extra: {
                    id: 'page' // 给翻页组件做id用
                }
            })
        }
    }
    Array.prototype.push.apply(d, btns); //顶部显示翻页开关
    Array.prototype.push.apply(d, seps); //下面分割
    Array.prototype.push.apply(d, showList); //刷新有效的链接
    if (showBottom && list.length > obj.size) {
        d.push({
            col_type: "line_blank"
        });
        Array.prototype.push.apply(d, btns); //底部显示翻页开关
    }
    // d = d.concat(showList);//刷新有效的链接，不支持concat
    return d
}

function isofficial(vipUrl) {
    vipUrl = vipUrl || '';
    let vipOk = /qq\.com|iqiyi\.com|youku\.com|mgtv\.com|bilibili\.com|sohu\.com|tv\.sohu\.com|ixigua\.com|pptv\.com|miguvideo\.com|le\.com|1905\.com|fun\.tv|renrenmi-|fendou\.duoduozy|LT|RongXingVR|1\.ruifenglb\.com|xfy|suoyo|leduo/.test(vipUrl);
    return vipOk
}
        
function setLists(lists, index, pages) {
    var list = lists[index];
    var arr = []
    
    var l = getLength(list.length)
    var e = getLastNum(强制正序(list))

        //log(`${l}+${e}`
        
    list.forEach(x => {
        if (x.url == undefined) {
            var t=getTitle(x).replace(/(\d+)/, (a, s) => {
                var y = s.PadLeft(e, '0')
              return y
                });
            arr.push({
                title: t,
                url: pdfh(x, 'a&&href')
            })
        } else
        var t=x.title.replace(/(\d+)/, (a, s) => {
            var y = s.PadLeft(e, '0')
            return y
        });
            arr.push({
                title: t,
                url: x.url
            })
    })

    
    coltype = 'text_2';
    if (e == 4) {
        coltype = 'text_3';
    } else if (e <= 3 && list.length > 10) {
        //log('a')
        coltype = 'text_4';
    }

    let size = Number(lsg.getItem('每页数量', 40));
    let over = Number(lsg.getItem('翻页阀值', 40));

    if (pages != null) {
        size = pages.size == undefined ? page : pages.size;
        over = pages.over == undefined ? over : pages.over;
    }

    //log(arr)
    obj = {
        list: arr, //可以对象传递,不传的话默认取storage0.getMyVar('showList')
        size: size, //每页数量
        over: over, //翻页阀值，超过多少才显示翻页组件
        tab_cnt: lists.length,
        show_order: true,
        col_type: storage0.getItem('按钮样式', '') || coltype || 'text_4', //二级选集样式
    }
    选集翻页(d,
        obj,
        false);
}
function setTabs(tabs, vari) {
let showcol = config.tab样式?config.tab样式:(tabs.length > 10 ? "text_5" : "scroll_button"); 
    for (var i = 0; i < tabs.length; i++) {
        var url = $('#noLoading#').lazyRule((vari, i, t) => {
            putMyVar(vari, i);
            refreshPage(false);
            toast(`🔄切换[${t[i]}]成功`);
            return '#noHistory#hiker://empty'
        }, vari, i, tabs)
        d.push({
            title: getMyVar(vari, '0') == i ? '““' + tabs[i] + '””' : tabs[i],
            url: url,
            col_type: showcol||'text_5'
        })
        
    }
    设置(d,false)
}
function getLength(number) {
    return number.toString().length;
}
function getLastNum(arr) {
    var i = arr.length-1
    let num = 0
    while (true) {
        let mytt = arr[i].title;
        mytt.match(/(\d+)/);
        num = Number(getLength(RegExp.$1))
        if (num > 0) {
            break;
        }
        if(i==0){
            num=1
            break;
        }
        i--
    }
    return num
}    
function 强制正序(list) {
    //强制正序
    let start = Math.floor(list.length / 2); // 0
    let end = Math.min(list.length - 1,
        start + 1); // list.slice(-1)[0]
    let first = list[start].title;
    let second = list[end].title;
    try {
        if (first.match(/(\d+)/) && second.match(/(\d+)/)) {
            //数字章节的
            if (parseInt(first.match(/(\d+)/)[0]) > parseInt(second.match(/(\d+)/)[0])) {
                list.reverse()
            }
        } else {
            // 中文转换
            if (汉字转数字(first) > 汉字转数字(second)) {
                list.reverse()
            }
        }
    } catch (e) { }
    return list
}
function getMaxLength(arr) {
    const maxLength = arr.reduce((acc, item) => Math.max(acc, item.length), 0);
    return maxLength
}

//左填充字符串
String.prototype.PadLeft = function(len, charStr) {
    var s = this + '';
    return new Array(len - s.length + 1).join(charStr, '') + s;
}

//右填充字符串
String.prototype.PadRight = function(len, charStr) {
    var s = this + '';
    return s + new Array(len - s.length + 1).join(charStr, '');
}

//重复字符串
let strRepeat = (s, i) => {
    return s.repeat(i);
};

function extractDomain(url) {
    url = url.replace('hiker://empty##', '').replace('##fypage', '');
    const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)(?:\/.*)?$/;
    const match = url.match(domainRegex);
    if (match) {
        const domainAndTLD = match[1];
        return domainAndTLD;
    } else {
        return '';
    }
}

function collection(d){
addListener('onClose', $.toString(() => {                            refreshPage(false);
                        }));
let Mycol = JSON.parse(fetch("hiker://collection"));
Mycol = Mycol.filter(i => i.params && /♨️|config.Btea/.test(i.params));
var ScImage = $.getImage('http://123.56.105.145/tubiao/messy/13.svg');
var ZlImage = $.getImage("http://123.56.105.145/tubiao/more/157.png");
var QhImage = $.getImage("http://123.56.105.145/tubiao/messy/9.svg");

d.push({
    title:`收藏主页`,
    url: "hiker://collection",
    img:ScImage,
    col_type: 'icon_small_3'
});

// if (getItem("ver") === 'undefined') {
//     setItem("ver", "直链");
// }
let mode = getItem("ver","直链");
d.push({
    title: mode+'打开',
    url: $("#hiker://empty#noLoading#").lazyRule(() => {
        let s = {
            "剪贴": "直链",
            "直链": "剪贴"
        }[getItem("ver", "直链")]
        setItem("ver", s);
        updateItem("ver", {
            title: s
        });
        refreshPage(false);
        return "toast://已切换为"+getItem("ver")
    }),
    extra: {
        id: "csid"
    },
    col_type: "icon_small_3",
    pic_url: ZlImage,
});

// d.push({
//     title:`我的下载`,
//     url: "hiker://download",
//     img:'http://123.56.105.145/tubiao/messy/118.svg',
//     col_type: 'icon_small_3'
// });
// if (getItem("colstyle") === 'undefined') {
//     setItem("colstyle", "movie_1_vertical_pic");
// }
let colstyle = getItem("colstyle","movie_1_vertical_pic");
d.push({
    title: '切换样式',
    url: $("#hiker://empty#noLoading#").lazyRule(() => {
        let s = {
            "movie_1_vertical_pic": "movie_3_marquee",
            "movie_3_marquee": "movie_1_vertical_pic"
        }[getItem("colstyle", "movie_1_vertical_pic")]
        setItem("colstyle", s);
        updateItem("colstyle", {
            title: s
        });
        refreshPage(false);
        return "toast://已切换样式为"+getItem("colstyle")
    }),
    extra: {
        id: "colstyleid"
    },
    col_type: "icon_small_3",
    pic_url: QhImage
});

for (let i = 0; i < 8; i++) {
    d.push({
        col_type: "blank_block"
    });
}
let resRule = Mycol.map(it => it.group);
    //log(Mycol)
    let obj = {}
     resRule = resRule.reduce((cur, next) => {
       obj[next] ? '' : (obj[next] = true && cur.push(next))
       return cur
     }, [])
    resRule.unshift("全部♨️");
    resRule.forEach(it =>{
        d.push({
            title: getMyVar("restitle","全部")==it?`““””<b><span style="color: #f13b66a">`+it+`</span></b>`:it,
            url: $('#noLoading#').lazyRule((it) => {
                putMyVar("restitle",it);
                refreshPage(false);
                return "hiker://empty";
            },it),
            col_type: 'scroll_button'
        })
    })

//log(getMyVar("restitle"))
Mycol.map(it => {
    try {
                
        let params = JSON.parse(it.params);
        let host = extractDomain(it.cUrl);
        let name = it.mTitle;
        let title = params.title;
        let group=it.group;
        let restitle=getMyVar("restitle");
        if(restitle==group || restitle=="全部♨️"||restitle==''){
        //log(getMyVar('restitle'))
        let extraData = it.extraData ? JSON.parse(it.extraData) : {};
        let last = extraData.lastChapterStatus ? extraData.lastChapterStatus : "";
        let mask = it.lastClick ? it.lastClick.split('@@')[0] : "";
        let desc = mask ? (`““””<small>${'♨️'+last + "\t| " + '足迹：' + mask}</small>`) : (`““””<small>${"♨️ " + last}</small>`);
        let lr=JSON.parse(fetch("hiker://home@" +params.title))
                let c = {
                    "data": {       "associatedModelsMapForJoinTable":{},
                    "associatedModelsMapWithFK":{},
                    "associatedModelsMapWithoutFK":{},
                    "fieldsToSetToDefault":[],
                    "gmtModified": 0,
                        "id": 0,
                        "last_chapter_rule": params.last_chapter_rule,
                        "listToClearAssociatedFK": [],
                        "listToClearSelfFK": [],
                        "pageList": [],
                        "params": it.params,
                        "saved": false,
                        "title": params.title,
                        "version": 0,
                        "url": params.url,
                        "col_type": params.col_type,
                        "find_rule": params.find_rule,
                        "group": it.group,
                        "ua": params.ua,
                        "preRule":lr.preRule,
                        "pages": lr.pages
                    },
                    "picUrl": it.picUrl,
                    "title": it.mTitle
                };
 // log('JSON.stringify(d)' + JSON.stringify(d))              
                let txt = '海阔视界规则分享，当前分享的是：二级页面详情￥page_detail￥' + it.mTitle + '@@' + base64Encode(JSON.stringify(c));
      let extraStr = params.params;
       let extraObj = eval("(" + extraStr + ")");          
                //log('txt' + txt);
    let url =  mode=="剪贴" ?  $(`#noLoading#`).lazyRule((txt) => {refreshPage(false);
                return txt;
                
            },txt) :  it.cUrl+ `@rule=js:`+fixSemicolon(lr.preRule)+fixSemicolon(params.find_rule);        let extra=  mode=="剪贴" ?     {
                img: it.picUrl,
            } :  extraObj;   
        d.push({
            title: colstyle=="movie_1_vertical_pic"?name+'\n\n'+`““””<small>${title + '|' + host}</small>` : name,
            pic_url: it.picUrl,
            desc: colstyle=="movie_1_vertical_pic" ? desc : last||mask,
            content: desc,
            url: url,
            col_type: colstyle,
            extra: extra
        });
    }    
    } catch (e) {
        log("collection加载异常: " + e.message);
    }
});

d.push({
    title: Mycol.length == 0 ? "♨️收藏空空如也" : "",
    url: "hiker://empty",
    col_type: "text_center_1",
    extra: {
        lineVisible: false,
    }
});
setResult(d);
}

function 搜索(){let 搜索=''; return 搜索 } 

function 获取验证码(url,ua){ // 验证码链接
    ua = ua||PC_UA;
    let ocr_api = 'http://ocr.nokia.press/dz6/api/ocr';
    let host = url.match(/(.*)\/\/(.*?)\//)[0];
    let headers = {
        'User-Agent': ua,
        'Referer':host,
        'Cookie':getMyVar('cookie'),
    };
    let hex=fetch(url,{headers:headers,toHex:true,timeout:3000});
    // log('hex:'+hex);
    let ret = request(ocr_api, {
        headers: {
            // 'content-type': 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
        },
        // body: JSON.stringify(data),
        body: 'hex='+hex,
        method: 'POST'
    });
    try {
        ret = JSON.parse(ret).ret
    }catch (e) {}
    return ret
}

function 提交验证码(url,ua,method,body){
    ua = ua||PC_UA;
    method = method||'POST';
    body = body||'';
    let host = url.match(/(.*)\/\/(.*?)\//)[0];
    let headers = {
        'User-Agent': ua,
        'Referer':host,
        'Cookie':getMyVar('cookie'),
    };
    let params = {
        headers: headers,
        method: method,
        withHeaders:true
    };
    if(body){
        params.body = body
    }
    let cookie = JSON.parse(fetch(url, params));
    // log('验证后html:'+cookie.body);
    return cookie.body
}
function 道长验证码(title,myurl,id,set,extra){

    if(getVar(set,'')&&!getMyVar('cookie')){
        putMyVar('cookie',getVar(set,''));
        refreshPage(true);
        return;
    }

//必填链接，id，cookie名称
    extra=extra||false;
    title=title||'网站触发了人机验证，点此处理';
    /*
    var url=$().lazyRule((title,MY_URL,id,set,extra,注入验证码识别)=>{
    if(getVar(set,'')&&!getMyVar('cookie')){
    putMyVar('cookie',getVar(set,''));
    refreshPage(true);
    return'hiker://empty';
    }
    return $(MY_URL).rule((注入验证码识别,id,set,extra)=>{
                //log(typeof(注入验证码识别))
                let d=[];
                d.push({
                 col_type: "x5_webview_single",
                 url: MY_URL,
                 desc: "float&&100%",
                 extra: {
                   canBack: true,
                   js:注入验证码识别(id,set,extra)
                  }});
                setResult(d);
          },注入验证码识别,id,set,extra);

    },title,MY_URL,id,set,extra,注入验证码识别);
    */
//log('待注入:'+MY_URL);
    var url=$(myurl).rule((注入验证码识别,id,set,extra)=>{
        //log(typeof(注入验证码识别))
        input=MY_URL;
        require(getVar('Bt依赖'));
        //log('注入了:'+MY_URL);
        var oldck=获取ck(set);
        setPageTitle('道长验证码通杀');
        addListener('onClose', $.toString((set,oldck,获取ck)=>{
            // log(MY_TYPE)，首页将打印home，搜索为search
            log('退出了通杀界面,旧的cookie为:'+oldck);
            let newck=获取ck(set);
            log('新的cookie为:'+newck);
            if(!newck){
                let error='未获取cookie，验证失败！';
                log(error);
                //setError(error);
                //throw error;
            }else if(oldck===newck){
                log('cookie未更新，验证可能未通过');
            }
            if(MY_TYPE!=='search'){
                refreshPage(false); //非搜索过验证返回自动刷新使设置生效
            }
        },set,oldck,获取ck));
        let d=[];
        d.push({
            col_type: "x5_webview_single",
            url: input,
            desc: "float&&100%",
            extra: {
                canBack: true,
                js:注入验证码识别(id,set,extra)
            }});
        setResult(d);
    },注入验证码识别,id,set,extra);
    let d=[];
    d.push({
        title:title,
        col_type:'text_1',
        url:url,
    });
    setResult(d);
    // $().b64().rule()  可以实现在lazyRule里返回rule
}

function 获取ck(set){
    var ckpath='hiker://files/cache/cookie.json';
    var oldck=fetch(ckpath)||'{}';
//log('旧的cookie:'+oldck);
    oldck=JSON.parse(oldck);
    return oldck[set]||''
}
function 注入验证码识别(id,set,extra){
    // id=id||'.tncode';
    id=id||'';
    set=set||'yzm_cookie';
    extra=extra||{};
    if(typeof(log)=="undefiend"){
        log=fy_bridge_app.log;
    }
    var js=$.toString((id,set,extra)=>{
        eval(fy_bridge_app.getInternalJs());
        //fba.log('进入x5处理中');
        //fba.log(fba.getVar('Bt依赖'));
        var ckpath='hiker://files/cache/cookie.json';
        function cookieSet(){
            // fba.log('自动cookie设置:' + set + '=>' + document.cookie);
            //JSON.stringify
            //JSON.parse
            var oldck = request(ckpath) || '{}';
            fba.log('旧的cookie:' + oldck);
            oldck = JSON.parse(oldck);
            oldck[set] = document.cookie;
            fba.putVar(set, document.cookie);
            var newCk = JSON.stringify(oldck);
            fba.writeFile(ckpath, newCk);
            fba.log('新的cookie:' + newCk);
        }
        if(id) { //填了id的话
            var btn = document.createElement('button');
            let css = extra.样式 || 'border-radius:20px;width:auto;height:20px;';
            btn.setAttribute('style', css);
            btn.setAttribute('id', 'btn1');
            let text = extra.文字 || '完成并返回重试';
            btn.innerText = text;
            btn.onclick = function () {
                try {
                    fba.log('手动点击cookie设置:' + set + '=>' + document.cookie);
                    cookieSet();
                    if (confirm('已设置当前页cookie，返回查看搜索结果。返回后需要手动下拉刷新！！！')) {
                        fba.parseLazyRule('hiker://empty@lazyRule=.js:back()');
                    }

                } catch (e) {
                    alert(e.message)
                }
            }
            var main = document.querySelector(id);
            main.appendChild(btn);
        }else{//没填就自动注入，刷新都算
            if(document.cookie) {//如果有cookie
                try {
                    fba.log('自动cookie设置:' + set + '=>' + document.cookie);
                    cookieSet();
                } catch (e) {
                    alert(e.message)
                }
            }
        }
    },id,set,extra);
    return js
}

function analysisVerifyModule(d) {
    if (getItem('password') !== "true") {
        d.push({
            title: '点我解锁青豆的快速搜索DIY功能',
            col_type: 'text_center_1',
            url: $('', '青豆的作者是谁？\n或者本模板的作者是谁？').input(() => {
                if (input == 'Joker&&Reborn') {
                    setItem('password', 'true');
                    confirm({
                        title: '恭喜!你已解锁快速搜索DIY功能',
                        content: '喝水不忘挖井人 感谢Joker&&Reborn大佬',
                        confirm: 'refreshPage()',
                        cancel: 'refreshPage()'
                    })
                    return 'hiker://empty'
                }else if (input == 'bt'||'九石'||'Btea') {
                    setItem('password', 'true');
                    confirm({
                        title: '你已解锁',
                        content: 'yyds',
                        confirm: 'refreshPage()',
                        cancel: 'refreshPage()'
                    })
                    return 'hiker://empty'
                } else {
                    return 'toast://不对哦'
                }
            })
        })
    } else {
let config = JSON.parse(fetch(getVar('Btea_config')));  
require(getVar('Bt依赖'));   
quickSearchDIYModule(d, config);
    }
}
function urlParse(u) {
    var dict = {}
    dict.Source = u;
    let params = (url) => {
        let queryParams = {};
        let reg = /([^?=&]+)=([^?=&]+)/g;
        url.replace(reg, function() {
            queryParams[arguments[1]] = arguments[2];
        })
        return queryParams
    }
    var javaUrl = JavaImporter(java.net.URL);
    with(javaUrl) {
        var url = new URL(u);
        dict.Protocol = url.getProtocol();
        dict.Host = url.getHost();
        dict.Port = url.getPort();
        dict.File = url.getFile();
        dict.Path = url.getPath();
        dict.Ref = url.getRef();
    }
    dict.Params = params(u);
    return dict;
}
String.prototype.Split = function(s, e) {
    if (e) {
        return this.split(s).filter(item => item != '');
    } else {
        return this.split(s);
    }
}
Object.ToParams = function() {
    var json = arguments[0];
    return Object.keys(json).map(key => key + '=' + json[key]).join('&');
}

function appedData(d, html, selects, line, dyc) {
    var i = getMyVar('i', i);
    if (line) {
        i = Number(i)
    }
    var ii = 1

    var item = selects.item
    var list = selects.list
    var imgx = selects.img
    var title = selects.title
    var desc = selects.desc
    var url = selects.url
    var col_type = selects.col_type

    var list = eval(list)
    if (list.length == 0 && line == true) {
        throw 'Error:没有了'
        return
    }

    list.forEach(item => {
        var img = eval(imgx)
        //log(item)
        var arr = {
            title: eval(title),
            desc: eval(desc),
            //img: (img.endsWith('0') ? img + '/' : img) + '@Referer=',
            img:img+'@Referer=',
            url: eval(url) + '#immersiveTheme#',
            col_type: col_type,
            extra: {
                title: eval(title),
                img: img,
                state: eval(desc),

            }
        }
        if (dyc) {
            if (ii == 1) {
                arr.extra.id = 'video1'
                d.push(arr)
            }
            arr.extra.id = 'video2'
            addItemAfter('video1', arr);
        } else {
            d.push(arr)
        }
    })
    if (line) {
        i++
        d.push({
            col_type: "line",
            extra: {
                id: 'aline' + i.toString()
            }
        })
        putMyVar('i', i)
    }
}
function 过验(){
        //感谢墙佬的验证代码
if (/_guard/.test(html)) {
    eval(request(首页+'/_guard/encrypt.js'))
    var Cookie = ('; ' + getCookie(MY_HOME)).split("; guard=");
    if (Cookie.length == 2) {
        var data = Cookie.pop().split(";").shift();
    }
    var key = cdn.MD5(data.substr(0, 8));
    Cookie = cdn.centos.encrypt(JSON.stringify({
        "x": 612,
        "y": 291,
        "a": 903
    }), key, {
        iv: key
    }).toString()
    html = request(true_url, {
        headers: {
            'Cookie': getCookie(MY_HOME)+";guardret=" +Cookie
        }
    })
}



    };
function 获取源码(url,ua,referer,cookie,extrHeaders){//传url,ua和refer
        url = url.replace('hiker://empty##','');//获取源码自动去除占位的前缀
        let def_ua = config.ua==='手机'?MOBILE_UA:PC_UA;
        def_ua = config.指定ua?config.指定ua:def_ua;//如果传了指定ua给预处理,优先级更高,必须是ua字符串
        ua = ua||def_ua;
        extrHeaders = extrHeaders||{};
        let headers = {
            'User-Agent': ua
        };
        if(typeof(referer)!=='undefined'&&referer.length>4){
            headers.Referer = referer
        }
        if(typeof(cookie)!=='undefined'&&cookie.length>4){
            headers.Cookie = cookie
        }else{
            // 获取源码在接入下载管理跳到其他规则子页面可能会无法获取，需要在进去的时候处理
            if(getMyVar('cookie','')){
                headers.Cookie = getMyVar('cookie');
            }
        }
        try{
            Object.assign(headers, extrHeaders);//合并其他的请求头
            // log(headers);
            putMyVar('请求头',JSON.stringify(headers)); // 把这个放进去,为了后面方便打印的时候进行读取
            let html = fetch(url, {
                headers: headers
            });
            if (/\?btwaf=/.test(html)) {//宝塔验证
                url=url.split('#')[0]+'?btwaf'+html.match(/btwaf(.*?)\"/)[1];
                //log("宝塔验证跳转到:"+url);
                html = fetch(url, {
                    headers: headers
                });
            }
            if (/滑动验证|拖动滑块/.test(html)) {
                function stringtoHex(acSTR) {
                    var val = "";
                    for (var i = 0; i <= acSTR.length - 1; i++) {
                        var str = acSTR.charAt(i);
                        var code = str.charCodeAt();
                        val += parseInt(code) + 1;
                    }
                    return val;
                }
    
                // function md5encode(word) {
                //     return md5(word).toString();
                // }
    
                let jsp = pd(html, 'script&&src');
                let jsf = fetch(jsp);
                eval(jsf.match(/key="[^\"]+",value="[^\"]+"/)[0]);
                eval(`let url='${url}'+` + jsf.match(/"complete",function\(\)\{c\.get\(([^,]+),/)[1]);
                fetch(url);
                html = fetch(url, { headers: headers });
            }
            return html
        }catch(e){
            //log('获取源码出错'+e.message);
            return ''
        }
    }    
function 获取源码1(url, ua, referer, cookie, extrHeaders) {
    const { ua: commonUa, cookie: commonCookie, extrHeaders: commonExtrHeaders } = $.commonset();
    
    // 确保 url 是字符串类型
    if (typeof url !== 'string') {
        log("Expected url to be a string");
    }
    // 去除占位前缀
    url = url.replace('hiker://empty##', '');

    // 设置默认的 User-Agent
    ua = typeof ua === 'string' ? ua : commonUa;
    cookie = typeof cookie === 'string' ? cookie : commonCookie;

    // 处理额外的 headers
    extrHeaders = typeof extrHeaders === 'object' && extrHeaders !== null ? extrHeaders : {};
    let headers = {
        'User-Agent': ua
    };

    if (typeof referer === 'string' && referer.length > 4) {
        headers.Referer = referer;
    }
    if (typeof cookie === 'string' && cookie.length > 4) {
        headers.Cookie = cookie;
    }
    // 合并额外的 headers
    Object.assign(headers, commonExtrHeaders, extrHeaders);
    // 记录请求头
    putMyVar('请求头', JSON.stringify(headers));

    try {
        // 发起初始请求
        let html = fetch(url, { headers: headers, timeout: 5000 });
        // 处理宝塔验证
        if (/\?btwaf=/.test(html)) {
            url = url.split('#')[0] + '?btwaf' + html.match(/btwaf(.*?)\"/)[1];
            html = fetch(url, { headers: headers });
        }
        // 处理滑动验证
        if (/滑动验证|拖动滑块/.test(html)) {
            function stringtoHex(acSTR) {
                var val = "";
                for (var i = 0; i <= acSTR.length - 1; i++) {
                    var str = acSTR.charAt(i);
                    var code = str.charCodeAt();
                    val += parseInt(code) + 1;
                }
                return val;
            }

            // function md5encode(word) {
            //     return md5(word).toString();
            // }

            let jsp = pd(html, 'script&&src');
            let jsf = fetch(jsp);
            eval(jsf.match(/key="[^\"]+",value="[^\"]+"/)[0]);
            eval(`let url='${url}'+` + jsf.match(/"complete",function\(\)\{c\.get\(([^,]+),/)[1]);
            fetch(url);
            html = fetch(url, { headers: headers });
        }

        return html;
    } catch (e) {
        // log('$.获取源码出错' + e.message);            
        return '';
    }
};

function 获取正确链接(rule,url,调试){
    true_url = (typeof(true_url)!=='undefined'&&true_url)?true_url:getMyVar('header.url', MY_URL); //隐士全局变量，外面可以不传
    page = (typeof(page)!=='undefined'&&page)?page:MY_PAGE;
    // config.动态分类匹配
    rule = rule||[];
    url = url||'';
    调试 = 调试||false;
    if(url.startsWith('hiker://')){
        try {
            let code = fetch(url);
            eval(code);
            if (rule.constructor === Array) {
                rule = rule.concat(matches);
            } else {
                matches.unshift(rule);
                rule = matches;
            }
        }catch (e) {}
    }
    // log($.stringify(rule));
    let 链接处理工具 = 加载链接处理();
    if(调试===true){
        链接处理工具.debug();
    }
    true_url = 链接处理工具
        .链接(true_url)
        .页码(page)
        .插入新处理规则(rule)
        .获取处理结果();
    return true_url
}
function initConfigs(name, config) {
    if (!config) {
        config = JSON.parse(fetch(getVar('Btea_config')));
    }
    if (config[name] == null) {
        config[name] = defaultBteaConfigs[name] ? defaultBteaConfigs[name] : {};
        writeFile(getVar('Btea_config'), JSON.stringify(config));
    }
    return config;
}    
function getConfig(name, rootConfig) {
    let config = rootConfig ? rootConfig : JSON.parse(fetch(getVar('Btea_config')));
    if (name) {
        if (config[name] == null) {
            config = initConfigs(name, config);
        }
        return config[name];
    } else {
        return config;
    }
}

function quickSearchDIYModule(d, config) {

    let quickSearchConfigs = getConfig('quickSearchConfigs', config);
    /*if (!quickSearchConfigs.order) {
        let order = [];
        for (let configKey of Object.keys(quickSearchConfigs)) {
            if (configKey == 'mode') continue;
            order.push(configKey);
        }
        quickSearchConfigs.order = order;
        config.quickSearchConfigs.order = order;
        writeFile(getVar('Btea_config'), JSON.stringify(config))
    }*/
    
    for (let configKey of quickSearchConfigs.order) {
    if (configKey.length > 0) {
        d.push({
            title: configKey,
            url: $('➕是添加\n➖是删除\n📝是修改\n🔁是排序\n⚙️是设置样式').confirm(() => {
                return 'toast://下次不要再点我了'
            }),
            col_type: 'flex_button'
        })
    }
}    
    d.push({
        col_type: 'blank_block'
    })
    d.push({
        title: '➕️',
        col_type: 'flex_button',
        url: $('显示名@@小程序名@@图片链接', '根据提示输入就好了\n小程序名为空则为海阔搜索').input(() => {
            let config = JSON.parse(fetch(getVar("Btea_config")));
            let quickSearchConfigs = config.quickSearchConfigs;            
            input = input.split('@@');
            if(input.length != 3 || input[0] === "") return "toast://格式不对，按格式输入!";
            if (quickSearchConfigs.order.indexOf(input[0]) == -1) quickSearchConfigs.order.push(input[0]);
            quickSearchConfigs[input[0]] = {
                name: input[1],
                pic: input[2]
            };
            writeFile("hiker://files/rules/dzHouse/Btea_config.js", JSON.stringify(config));
            refreshPage(false);
            return 'toast://添加成功';
        })
    });
    d.push({
        title: '➖',
        col_type: 'flex_button',
        url: $(quickSearchConfigs.order, 2).select(() => {
            let config = JSON.parse(fetch(getVar('Btea_config')))
            return $('确认删除"' + input + '"？').confirm((config, configKey) => {
let config = JSON.parse(fetch(getVar("Btea_config")));
    let quickSearchConfigs = config.quickSearchConfigs;
                let index = quickSearchConfigs.order.indexOf(configKey);
                quickSearchConfigs.order.splice(index, 1);
                delete quickSearchConfigs[configKey]
                writeFile("hiker://files/rules/dzHouse/Btea_config.js", JSON.stringify(config));
                refreshPage(false);
                return 'toast://删除' + configKey + '成功'
            }, config, input)
        })
    })
    d.push({
        title: '📝',
        col_type: 'flex_button',
        url: $(quickSearchConfigs.order, 2).select(() => {
            let config = JSON.parse(request(getVar('Btea_config')));
            let quickSearchConfigs = config.quickSearchConfigs;
            let dtext = input + '@@' + quickSearchConfigs[input].name + '@@' + quickSearchConfigs[input].pic;
            return $(dtext, '请修改').input((config, raw) => {
                input = input.split('@@');
                if (raw != input[0]) {
                    let index = config.quickSearchConfigs.order.indexOf(raw);
                    config.quickSearchConfigs.order[index] = input[0];
                    delete config.quickSearchConfigs[raw];
                }
                if (config.quickSearchConfigs.order.indexOf(input[0]) == -1) config.quickSearchConfigs.order.push(input[0]);
                config.quickSearchConfigs[input[0]] = {
                    name: input[1],
                    pic: input[2]
                };
                writeFile(getVar('Btea_config'), JSON.stringify(config));
                refreshPage(false);
                return 'toast://修改成功';
            }, config, input)
        })
    })
    d.push({
        title: '🔁',
        col_type: 'flex_button',
        url: $('hiker://empty#noHistory#').rule(() => {
            addListener('onClose', $.toString(() => {
                clearVar('json');
                clearVar('op');
            }))
            if (getVar('json') == "") {
                let config = JSON.parse(request(getVar('Btea_config')));
                let quickSearchConfigs = config.quickSearchConfigs;
                putVar('json', JSON.stringify(quickSearchConfigs));
            }

            let old = JSON.parse(getVar('json'));
            let d = [];
            d.push({
                title: '分别点击两项以交换顺序\n‘‘排序完毕后点我保存排序,否则排序不生效’’',
                col_type: 'text_center_1',
                url: $('#noLoading#').lazyRule(() => {
                    let config = JSON.parse(fetch(getVar('Btea_config')));
                    config.quickSearchConfigs = JSON.parse(getVar('json'));
                    writeFile(getVar('Btea_config'), JSON.stringify(config));
                    back(true);
                    return 'toast://修改成功'
                })
            })
            old.order.forEach((value, index) => {
                d.push({
                    title: getVar('op') == value ? value + '‘‘(当前选中)’’' : value,
                    col_type: 'text_1',
                    url: $().lazyRule((key, index) => {
                        let op = getVar('op');
                        if (op == '') {
                            putVar('op', key);
                            refreshPage();
                            return 'hiker://empty'
                        } else if (op == key) {
                            clearVar('op');
                            refreshPage();
                            return 'hiker://empty'
                        } else {
                            let old = JSON.parse(getVar('json'));
                            let newa = {
                                mode: old.mode,
                                order: old.order
                            };
                            let opindex = newa.order.indexOf(op);
                            if (Math.abs(opindex - index) == 1) {
                                newa.order[opindex] = key;
                                newa.order[index] = op;
                            } else if (opindex > index) {
                                newa.order.splice(opindex, 1);
                                newa.order.splice(index, 0, op);
                            } else {
                                newa.order.splice(opindex, 1);
                                newa.order.splice(index - 1, 0, op);
                            }
                            newa.order.forEach(value => newa[value] = old[value])
                            putVar('json', JSON.stringify(newa));
                            clearVar('op');
                            refreshPage();
                            return 'hiker://empty'
                        }
                    }, value, index)
                })
            })
            setResult(d);
        })
    })
    d.push({
        title: '⚙️',
        col_type: 'flex_button',
        url: $(quickSearchConfigs['mode'] || "", '请正确输入组件样式\n建议值:flex_button scroll_button icon_round_small_4 icon_small_4').input(() => {
            let config = JSON.parse(request(getVar('Btea_config')));
            config.quickSearchConfigs.mode = input;
            writeFile(getVar('Btea_config'), JSON.stringify(config));
            refreshPage(false);
            return 'toast://样式修改成功'
        })
    })
    

}



//非常感谢壹佬最新章节代码
function 准最新(ChapterRule) {
    var 汉字转数字 = (function() {
        var map = {
            "零": 0,
            "一": 1,
            "壹": 1,
            "二": 2,
            "贰": 2,
            "两": 2,
            "三": 3,
            "叁": 3,
            "四": 4,
            "肆": 4,
            "五": 5,
            "伍": 5,
            "六": 6,
            "陆": 6,
            "七": 7,
            "柒": 7,
            "八": 8,
            "捌": 8,
            "九": 9,
            "玖": 9,
            "十": 10,
            "拾": 10,
            "百": 100,
            "佰": 100,
            "千": 1000,
            "仟": 1000,
            "万": 10000,
            "十万": 100000,
            "百万": 1000000,
            "千万": 10000000,
            "亿": 100000000
        };
        // 解析失败返回-1，成功返回转换后的数字，不支持负数
        function numberDigit(chinese_number) {
            var len = chinese_number.length;
            if (len == 0) return -1;
            if (len == 1) return (map[chinese_number] <= 10) ? map[chinese_number] : -1;
            var summary = 0;
            if (map[chinese_number[0]] == 10) {
                chinese_number = "一" + chinese_number;
                len++;
            }
            if (len >= 3 && map[chinese_number[len - 1]] < 10) {
                var last_second_num = map[chinese_number[len - 2]];
                if (last_second_num == 100 || last_second_num == 1000 || last_second_num == 10000 || last_second_num == 100000000) {
                    for (var key in map) {
                        if (map[key] == last_second_num / 10) {
                            chinese_number += key;
                            len += key.length;
                            break;
                        }
                    }
                }
            }
            if (chinese_number.match(/亿/g) && chinese_number.match(/亿/g).length > 1) return -1;
            var splited = chinese_number.split("亿");
            if (splited.length == 2) {
                var rest = splited[1] == "" ? 0 : numberDigit(splited[1]);
                return summary + numberDigit(splited[0]) * 100000000 + rest;
            }
            splited = chinese_number.split("万");
            if (splited.length == 2) {
                var rest = splited[1] == "" ? 0 : numberDigit(splited[1]);
                return summary + numberDigit(splited[0]) * 10000 + rest;
            }
            var i = 0;
            while (i < len) {
                var first_char_num = map[chinese_number[i]];
                var second_char_num = map[chinese_number[i + 1]];
                if (second_char_num > 9)
                    summary += first_char_num * second_char_num;
                i++;
                if (i == len)
                    summary += first_char_num <= 9 ? first_char_num : 0;
            }
            return summary;
        }
        $.exports = numberDigit;
        return $.exports;
    })();
    
    cat = ChapterRule;
    if ((!cat) || (typeof(cat) !== 'object')) {
        setResult('检测更新失败.参数有误');
        return;
    }
    var _lists = cat._lists;
    var _list_text = cat._list_text || 'a&&Text';
    var rlist = [];
    for (let i = 0; i < _lists.length; i++) {
        var teplist = pdfa(_lists[i], "body&&a");
        if (teplist.length > rlist.length) {
            rlist = teplist
        }
    }

    let newCap = '';
    // log('共计选集数量:'+rlist.length);
    let start = Math.floor(rlist.length / 2); // 0
    let end = Math.min(rlist.length - 1, start + 1); // list.slice(-1)[0]
    let first = pdfh(rlist[start], _list_text);
    let second = pdfh(rlist[end], _list_text);

    //log(rlist.slice(-1));
    newCap = pdfh(rlist.slice(-1)[0], _list_text);
    //log('first:'+first);
    //log('second:'+second);
    try {
        if (first.match(/(\d+)/) && second.match(/(\d+)/)) { //数字章节的
            if (parseInt(first.match(/(\d+)/)[0]) > parseInt(second.match(/(\d+)/)[0])) {
                newCap = pdfh(rlist[0], _list_text);
            }
        } else { // 中文转换
            if (汉字转数字(first) > 汉字转数字(second)) {
                newCap = pdfh(rlist[0], _list_text);
            }
        }
    } catch (e) {}
    // log('汉字转数字第一百一十二章:'+汉字转数字('第一百一十二章'));
    var newtips = "更新至: " + newCap;
    setResult(newtips);
}

function charPYStr(){
	return '锕皑蔼碍爱嗳嫒瑷暧霭谙铵鹌肮袄奥媪骜鳌坝罢钯摆败呗颁办绊钣帮绑镑谤剥饱宝报鲍鸨龅辈贝钡狈备惫鹎贲锛绷笔毕毙币闭荜哔滗铋筚跸边编贬变辩辫苄缏笾标骠飑飙镖镳鳔鳖别瘪濒滨宾摈傧缤槟殡膑镔髌鬓饼禀拨钵铂驳饽钹鹁补钸财参蚕残惭惨灿骖黪苍舱仓沧厕侧册测恻层诧锸侪钗搀掺蝉馋谗缠铲产阐颤冁谄谶蒇忏婵骣觇禅镡场尝长偿肠厂畅伥苌怅阊鲳钞车彻砗尘陈衬伧谌榇碜龀撑称惩诚骋枨柽铖铛痴迟驰耻齿炽饬鸱冲冲虫宠铳畴踌筹绸俦帱雠橱厨锄雏础储触处刍绌蹰传钏疮闯创怆锤缍纯鹑绰辍龊辞词赐鹚聪葱囱从丛苁骢枞凑辏蹿窜撺错锉鹾达哒鞑带贷骀绐担单郸掸胆惮诞弹殚赕瘅箪当挡党荡档谠砀裆捣岛祷导盗焘灯邓镫敌涤递缔籴诋谛绨觌镝颠点垫电巅钿癫钓调铫鲷谍叠鲽钉顶锭订铤丢铥东动栋冻岽鸫窦犊独读赌镀渎椟牍笃黩锻断缎簖兑队对怼镦吨顿钝炖趸夺堕铎鹅额讹恶饿谔垩阏轭锇锷鹗颚颛鳄诶儿尔饵贰迩铒鸸鲕发罚阀珐矾钒烦贩饭访纺钫鲂飞诽废费绯镄鲱纷坟奋愤粪偾丰枫锋风疯冯缝讽凤沣肤辐抚辅赋复负讣妇缚凫驸绂绋赙麸鲋鳆钆该钙盖赅杆赶秆赣尴擀绀冈刚钢纲岗戆镐睾诰缟锆搁鸽阁铬个纥镉颍给亘赓绠鲠龚宫巩贡钩沟苟构购够诟缑觏蛊顾诂毂钴锢鸪鹄鹘剐挂鸹掴关观馆惯贯诖掼鹳鳏广犷规归龟闺轨诡贵刽匦刿妫桧鲑鳜辊滚衮绲鲧锅国过埚呙帼椁蝈铪骇韩汉阚绗颉号灏颢阂鹤贺诃阖蛎横轰鸿红黉讧荭闳鲎壶护沪户浒鹕哗华画划话骅桦铧怀坏欢环还缓换唤痪焕涣奂缳锾鲩黄谎鳇挥辉毁贿秽会烩汇讳诲绘诙荟哕浍缋珲晖荤浑诨馄阍获货祸钬镬击机积饥迹讥鸡绩缉极辑级挤几蓟剂济计记际继纪讦诘荠叽哜骥玑觊齑矶羁虿跻霁鲚鲫夹荚颊贾钾价驾郏浃铗镓蛲歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧谏缣戋戬睑鹣笕鲣鞯将浆蒋桨奖讲酱绛缰胶浇骄娇搅铰矫侥脚饺缴绞轿较挢峤鹪鲛阶节洁结诫届疖颌鲒紧锦仅谨进晋烬尽劲荆茎卺荩馑缙赆觐鲸惊经颈静镜径痉竞净刭泾迳弪胫靓纠厩旧阄鸠鹫驹举据锯惧剧讵屦榉飓钜锔窭龃鹃绢锩镌隽觉决绝谲珏钧军骏皲开凯剀垲忾恺铠锴龛闶钪铐颗壳课骒缂轲钶锞颔垦恳龈铿抠库裤喾块侩郐哙脍宽狯髋矿旷况诓诳邝圹纩贶亏岿窥馈溃匮蒉愦聩篑阃锟鲲扩阔蛴蜡腊莱来赖崃徕涞濑赉睐铼癞籁蓝栏拦篮阑兰澜谰揽览懒缆烂滥岚榄斓镧褴琅阆锒捞劳涝唠崂铑铹痨乐鳓镭垒类泪诔缧篱狸离鲤礼丽厉励砾历沥隶俪郦坜苈莅蓠呖逦骊缡枥栎轹砺锂鹂疠粝跞雳鲡鳢俩联莲连镰怜涟帘敛脸链恋炼练蔹奁潋琏殓裢裣鲢粮凉两辆谅魉疗辽镣缭钌鹩猎临邻鳞凛赁蔺廪檩辚躏龄铃灵岭领绫棂蛏鲮馏刘浏骝绺镏鹨龙聋咙笼垄拢陇茏泷珑栊胧砻楼娄搂篓偻蒌喽嵝镂瘘耧蝼髅芦卢颅庐炉掳卤虏鲁赂禄录陆垆撸噜闾泸渌栌橹轳辂辘氇胪鸬鹭舻鲈峦挛孪滦乱脔娈栾鸾銮抡轮伦仑沦纶论囵萝罗逻锣箩骡骆络荦猡泺椤脶镙驴吕铝侣屡缕虑滤绿榈褛锊呒妈玛码蚂马骂吗唛嬷杩买麦卖迈脉劢瞒馒蛮满谩缦镘颡鳗猫锚铆贸麽没镁门闷们扪焖懑钔锰梦眯谜弥觅幂芈谧猕祢绵缅渑腼黾庙缈缪灭悯闽闵缗鸣铭谬谟蓦馍殁镆谋亩钼呐钠纳难挠脑恼闹铙讷馁内拟腻铌鲵撵辇鲶酿鸟茑袅聂啮镊镍陧蘖嗫颟蹑柠狞宁拧泞苎咛聍钮纽脓浓农侬哝驽钕诺傩疟欧鸥殴呕沤讴怄瓯盘蹒庞抛疱赔辔喷鹏纰罴铍骗谝骈飘缥频贫嫔苹凭评泼颇钋扑铺朴谱镤镨栖脐齐骑岂启气弃讫蕲骐绮桤碛颀颃鳍牵钎铅迁签谦钱钳潜浅谴堑佥荨悭骞缱椠钤枪呛墙蔷强抢嫱樯戗炝锖锵镪羟跄锹桥乔侨翘窍诮谯荞缲硗跷窃惬锲箧钦亲寝锓轻氢倾顷请庆揿鲭琼穷茕蛱巯赇虮鳅趋区躯驱龋诎岖阒觑鸲颧权劝诠绻辁铨却鹊确阕阙悫让饶扰绕荛娆桡热韧认纫饪轫荣绒嵘蝾缛铷颦软锐蚬闰润洒萨飒鳃赛伞毵糁丧骚扫缫涩啬铯穑杀刹纱铩鲨筛晒酾删闪陕赡缮讪姗骟钐鳝墒伤赏垧殇觞烧绍赊摄慑设厍滠畲绅审婶肾渗诜谂渖声绳胜师狮湿诗时蚀实识驶势适释饰视试谥埘莳弑轼贳铈鲥寿兽绶枢输书赎属术树竖数摅纾帅闩双谁税顺说硕烁铄丝饲厮驷缌锶鸶耸怂颂讼诵擞薮馊飕锼苏诉肃谡稣虽随绥岁谇孙损笋荪狲缩琐锁唢睃獭挞闼铊鳎台态钛鲐摊贪瘫滩坛谭谈叹昙钽锬顸汤烫傥饧铴镗涛绦讨韬铽腾誊锑题体屉缇鹈阗条粜龆鲦贴铁厅听烃铜统恸头钭秃图钍团抟颓蜕饨脱鸵驮驼椭箨鼍袜娲腽弯湾顽万纨绾网辋韦违围为潍维苇伟伪纬谓卫诿帏闱沩涠玮韪炜鲔温闻纹稳问阌瓮挝蜗涡窝卧莴龌呜钨乌诬无芜吴坞雾务误邬庑怃妩骛鹉鹜锡牺袭习铣戏细饩阋玺觋虾辖峡侠狭厦吓硖鲜纤贤衔闲显险现献县馅羡宪线苋莶藓岘猃娴鹇痫蚝籼跹厢镶乡详响项芗饷骧缃飨萧嚣销晓啸哓潇骁绡枭箫协挟携胁谐写泻谢亵撷绁缬锌衅兴陉荥凶汹锈绣馐鸺虚嘘须许叙绪续诩顼轩悬选癣绚谖铉镟学谑泶鳕勋询寻驯训讯逊埙浔鲟压鸦鸭哑亚讶垭娅桠氩阉烟盐严岩颜阎艳厌砚彦谚验厣赝俨兖谳恹闫酽魇餍鼹鸯杨扬疡阳痒养样炀瑶摇尧遥窑谣药轺鹞鳐爷页业叶靥谒邺晔烨医铱颐遗仪蚁艺亿忆义诣议谊译异绎诒呓峄饴怿驿缢轶贻钇镒镱瘗舣荫阴银饮隐铟瘾樱婴鹰应缨莹萤营荧蝇赢颖茔莺萦蓥撄嘤滢潆璎鹦瘿颏罂哟拥佣痈踊咏镛优忧邮铀犹诱莸铕鱿舆鱼渔娱与屿语狱誉预驭伛俣谀谕蓣嵛饫阈妪纡觎欤钰鹆鹬龉鸳渊辕园员圆缘远橼鸢鼋约跃钥粤悦阅钺郧匀陨运蕴酝晕韵郓芸恽愠纭韫殒氲杂灾载攒暂赞瓒趱錾赃脏驵凿枣责择则泽赜啧帻箦贼谮赠综缯轧铡闸栅诈斋债毡盏斩辗崭栈战绽谵张涨帐账胀赵诏钊蛰辙锗这谪辄鹧贞针侦诊镇阵浈缜桢轸赈祯鸩挣睁狰争帧症郑证诤峥钲铮筝织职执纸挚掷帜质滞骘栉栀轵轾贽鸷蛳絷踬踯觯钟终种肿众锺诌轴皱昼骤纣绉猪诸诛烛瞩嘱贮铸驻伫槠铢专砖转赚啭馔颞桩庄装妆壮状锥赘坠缀骓缒谆准着浊诼镯兹资渍谘缁辎赀眦锱龇鲻踪总纵偬邹诹驺鲰诅组镞钻缵躜鳟翱并卜沉丑淀迭斗范干皋硅柜后伙秸杰诀夸里凌么霉捻凄扦圣尸抬涂洼喂污锨咸蝎彝涌游吁御愿岳云灶扎札筑于志注凋讠谫郄勐凼坂垅垴埯埝苘荬荮莜莼菰藁揸吒吣咔咝咴噘噼嚯幞岙嵴彷徼犸狍馀馇馓馕愣憷懔丬溆滟溷漤潴澹甯纟绔绱珉枧桊桉槔橥轱轷赍肷胨飚煳煅熘愍淼砜磙眍钚钷铘铞锃锍锎锏锘锝锪锫锿镅镎镢镥镩镲稆鹋鹛鹱疬疴痖癯裥襁耢颥螨麴鲅鲆鲇鲞鲴鲺鲼鳊鳋鳘鳙鞒鞴齄';
}
function ftPYStr(){
	return '錒皚藹礙愛噯嬡璦曖靄諳銨鵪骯襖奧媼驁鰲壩罷鈀擺敗唄頒辦絆鈑幫綁鎊謗剝飽寶報鮑鴇齙輩貝鋇狽備憊鵯賁錛繃筆畢斃幣閉蓽嗶潷鉍篳蹕邊編貶變辯辮芐緶籩標驃颮飆鏢鑣鰾鱉別癟瀕濱賓擯儐繽檳殯臏鑌髕鬢餅稟撥缽鉑駁餑鈸鵓補鈽財參蠶殘慚慘燦驂黲蒼艙倉滄廁側冊測惻層詫鍤儕釵攙摻蟬饞讒纏鏟產闡顫囅諂讖蕆懺嬋驏覘禪鐔場嘗長償腸廠暢倀萇悵閶鯧鈔車徹硨塵陳襯傖諶櫬磣齔撐稱懲誠騁棖檉鋮鐺癡遲馳恥齒熾飭鴟沖衝蟲寵銃疇躊籌綢儔幬讎櫥廚鋤雛礎儲觸處芻絀躕傳釧瘡闖創愴錘綞純鶉綽輟齪辭詞賜鶿聰蔥囪從叢蓯驄樅湊輳躥竄攛錯銼鹺達噠韃帶貸駘紿擔單鄲撣膽憚誕彈殫賧癉簞當擋黨蕩檔讜碭襠搗島禱導盜燾燈鄧鐙敵滌遞締糴詆諦綈覿鏑顛點墊電巔鈿癲釣調銚鯛諜疊鰈釘頂錠訂鋌丟銩東動棟凍崠鶇竇犢獨讀賭鍍瀆櫝牘篤黷鍛斷緞籪兌隊對懟鐓噸頓鈍燉躉奪墮鐸鵝額訛惡餓諤堊閼軛鋨鍔鶚顎顓鱷誒兒爾餌貳邇鉺鴯鮞發罰閥琺礬釩煩販飯訪紡鈁魴飛誹廢費緋鐨鯡紛墳奮憤糞僨豐楓鋒風瘋馮縫諷鳳灃膚輻撫輔賦復負訃婦縛鳧駙紱紼賻麩鮒鰒釓該鈣蓋賅桿趕稈贛尷搟紺岡剛鋼綱崗戇鎬睪誥縞鋯擱鴿閣鉻個紇鎘潁給亙賡綆鯁龔宮鞏貢鉤溝茍構購夠詬緱覯蠱顧詁轂鈷錮鴣鵠鶻剮掛鴰摑關觀館慣貫詿摜鸛鰥廣獷規歸龜閨軌詭貴劊匭劌媯檜鮭鱖輥滾袞緄鯀鍋國過堝咼幗槨蟈鉿駭韓漢闞絎頡號灝顥閡鶴賀訶闔蠣橫轟鴻紅黌訌葒閎鱟壺護滬戶滸鶘嘩華畫劃話驊樺鏵懷壞歡環還緩換喚瘓煥渙奐繯鍰鯇黃謊鰉揮輝毀賄穢會燴匯諱誨繪詼薈噦澮繢琿暉葷渾諢餛閽獲貨禍鈥鑊擊機積饑跡譏雞績緝極輯級擠幾薊劑濟計記際繼紀訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽夾莢頰賈鉀價駕郟浹鋏鎵蟯殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗諫縑戔戩瞼鶼筧鰹韉將漿蔣槳獎講醬絳韁膠澆驕嬌攪鉸矯僥腳餃繳絞轎較撟嶠鷦鮫階節潔結誡屆癤頜鮚緊錦僅謹進晉燼盡勁荊莖巹藎饉縉贐覲鯨驚經頸靜鏡徑痙競凈剄涇逕弳脛靚糾廄舊鬮鳩鷲駒舉據鋸懼劇詎屨櫸颶鉅鋦窶齟鵑絹錈鐫雋覺決絕譎玨鈞軍駿皸開凱剴塏愾愷鎧鍇龕閌鈧銬顆殼課騍緙軻鈳錁頷墾懇齦鏗摳庫褲嚳塊儈鄶噲膾寬獪髖礦曠況誆誑鄺壙纊貺虧巋窺饋潰匱蕢憒聵簣閫錕鯤擴闊蠐蠟臘萊來賴崍徠淶瀨賚睞錸癩籟藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫嵐欖斕鑭襤瑯閬鋃撈勞澇嘮嶗銠鐒癆樂鰳鐳壘類淚誄縲籬貍離鯉禮麗厲勵礫歷瀝隸儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧倆聯蓮連鐮憐漣簾斂臉鏈戀煉練蘞奩瀲璉殮褳襝鰱糧涼兩輛諒魎療遼鐐繚釕鷯獵臨鄰鱗凜賃藺廩檁轔躪齡鈴靈嶺領綾欞蟶鯪餾劉瀏騮綹鎦鷚龍聾嚨籠壟攏隴蘢瀧瓏櫳朧礱樓婁摟簍僂蔞嘍嶁鏤瘺耬螻髏蘆盧顱廬爐擄鹵虜魯賂祿錄陸壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸巒攣孿灤亂臠孌欒鸞鑾掄輪倫侖淪綸論圇蘿羅邏鑼籮騾駱絡犖玀濼欏腡鏍驢呂鋁侶屢縷慮濾綠櫚褸鋝嘸媽瑪碼螞馬罵嗎嘜嬤榪買麥賣邁脈勱瞞饅蠻滿謾縵鏝顙鰻貓錨鉚貿麼沒鎂門悶們捫燜懣鍆錳夢瞇謎彌覓冪羋謐獼禰綿緬澠靦黽廟緲繆滅憫閩閔緡鳴銘謬謨驀饃歿鏌謀畝鉬吶鈉納難撓腦惱鬧鐃訥餒內擬膩鈮鯢攆輦鯰釀鳥蔦裊聶嚙鑷鎳隉蘗囁顢躡檸獰寧擰濘苧嚀聹鈕紐膿濃農儂噥駑釹諾儺瘧歐鷗毆嘔漚謳慪甌盤蹣龐拋皰賠轡噴鵬紕羆鈹騙諞駢飄縹頻貧嬪蘋憑評潑頗釙撲鋪樸譜鏷鐠棲臍齊騎豈啟氣棄訖蘄騏綺榿磧頎頏鰭牽釬鉛遷簽謙錢鉗潛淺譴塹僉蕁慳騫繾槧鈐槍嗆墻薔強搶嬙檣戧熗錆鏘鏹羥蹌鍬橋喬僑翹竅誚譙蕎繰磽蹺竊愜鍥篋欽親寢鋟輕氫傾頃請慶撳鯖瓊窮煢蛺巰賕蟣鰍趨區軀驅齲詘嶇闃覷鴝顴權勸詮綣輇銓卻鵲確闋闕愨讓饒擾繞蕘嬈橈熱韌認紉飪軔榮絨嶸蠑縟銣顰軟銳蜆閏潤灑薩颯鰓賽傘毿糝喪騷掃繅澀嗇銫穡殺剎紗鎩鯊篩曬釃刪閃陜贍繕訕姍騸釤鱔墑傷賞坰殤觴燒紹賒攝懾設厙灄畬紳審嬸腎滲詵諗瀋聲繩勝師獅濕詩時蝕實識駛勢適釋飾視試謚塒蒔弒軾貰鈰鰣壽獸綬樞輸書贖屬術樹豎數攄紓帥閂雙誰稅順說碩爍鑠絲飼廝駟緦鍶鷥聳慫頌訟誦擻藪餿颼鎪蘇訴肅謖穌雖隨綏歲誶孫損筍蓀猻縮瑣鎖嗩脧獺撻闥鉈鰨臺態鈦鮐攤貪癱灘壇譚談嘆曇鉭錟頇湯燙儻餳鐋鏜濤絳討韜鋱騰謄銻題體屜緹鵜闐條糶齠鰷貼鐵廳聽烴銅統慟頭鈄禿圖釷團摶頹蛻飩脫鴕馱駝橢籜鼉襪媧膃彎灣頑萬紈綰網輞韋違圍為濰維葦偉偽緯謂衛諉幃闈溈潿瑋韙煒鮪溫聞紋穩問閿甕撾蝸渦窩臥萵齷嗚鎢烏誣無蕪吳塢霧務誤鄔廡憮嫵騖鵡鶩錫犧襲習銑戲細餼鬩璽覡蝦轄峽俠狹廈嚇硤鮮纖賢銜閑顯險現獻縣餡羨憲線莧薟蘚峴獫嫻鷴癇蠔秈躚廂鑲鄉詳響項薌餉驤緗饗蕭囂銷曉嘯嘵瀟驍綃梟簫協挾攜脅諧寫瀉謝褻擷紲纈鋅釁興陘滎兇洶銹繡饈鵂虛噓須許敘緒續詡頊軒懸選癬絢諼鉉鏇學謔澩鱈勛詢尋馴訓訊遜塤潯鱘壓鴉鴨啞亞訝埡婭椏氬閹煙鹽嚴巖顏閻艷厭硯彥諺驗厴贗儼兗讞懨閆釅魘饜鼴鴦楊揚瘍陽癢養樣煬瑤搖堯遙窯謠藥軺鷂鰩爺頁業葉靨謁鄴曄燁醫銥頤遺儀蟻藝億憶義詣議誼譯異繹詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤蔭陰銀飲隱銦癮櫻嬰鷹應纓瑩螢營熒蠅贏穎塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌喲擁傭癰踴詠鏞優憂郵鈾猶誘蕕銪魷輿魚漁娛與嶼語獄譽預馭傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬鴛淵轅園員圓緣遠櫞鳶黿約躍鑰粵悅閱鉞鄖勻隕運蘊醞暈韻鄆蕓惲慍紜韞殞氳雜災載攢暫贊瓚趲鏨贓臟駔鑿棗責擇則澤賾嘖幘簀賊譖贈綜繒軋鍘閘柵詐齋債氈盞斬輾嶄棧戰綻譫張漲帳賬脹趙詔釗蟄轍鍺這謫輒鷓貞針偵診鎮陣湞縝楨軫賑禎鴆掙睜猙爭幀癥鄭證諍崢鉦錚箏織職執紙摯擲幟質滯騭櫛梔軹輊贄鷙螄縶躓躑觶鐘終種腫眾鍾謅軸皺晝驟紂縐豬諸誅燭矚囑貯鑄駐佇櫧銖專磚轉賺囀饌顳樁莊裝妝壯狀錐贅墜綴騅縋諄準著濁諑鐲茲資漬諮緇輜貲眥錙齜鯔蹤總縱傯鄒諏騶鯫詛組鏃鉆纘躦鱒翺並蔔沈醜澱叠鬥範幹臯矽櫃後夥稭傑訣誇裏淩麽黴撚淒扡聖屍擡塗窪餵汙鍁鹹蠍彜湧遊籲禦願嶽雲竈紮劄築於誌註雕訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';
}


function 繁体(cc){
		var str='';
		for(var i=0;i<cc.length;i++){
			if(charPYStr().indexOf(cc.charAt(i))!=-1)
				str+=ftPYStr().charAt(charPYStr().indexOf(cc.charAt(i)));
			else
				str+=cc.charAt(i);
		}
		return str;
	}
 
function 简体(cc){
		var str='';
		for(var i=0;i<cc.length;i++){
			if(ftPYStr().indexOf(cc.charAt(i))!=-1)
				str+=charPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));
			else
				str+=cc.charAt(i);
		}
		return str;
}

var pre={
    处理:function (模板参数,ckUrl){
    模板参数 = 模板参数||false;     
    ckUrl=ckUrl||"";    
    模板 = (typeof(模板)!=='undefined'&&模板)?模板:模板参数;
    ua = (typeof(ua)!=='undefined'&&ua)?ua:false;//指定ua  var ua = PC_UA;
    let 全局ua=getItem('ua','电脑');//电脑 手机
    验证码 = (typeof(验证码)!=='undefined'&&验证码)?验证码:ckUrl;
    function 道长通免(_reChange){
    _reChange = _reChange||false;
    let lazy=$("").lazyRule((_reChange)=>{
        const {lazyParse} = $.require('hiker://page/globalParse?rule=道长仓库Pro');
        return lazyParse(input,null,null,_reChange);
    },_reChange);
    return lazy}
    function 香免(){
    let lazy=$("").lazyRule(()=>{  
evalPrivateJS("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")
    return x5rule(input, input);
    });
  return lazy
};


function 通免1(){
    var lazy = $('').lazyRule(() => {
        if (/\.m3u8|\.mp4|\.flv/.test(input)) {        
                    return clearM3u8Ad(input+'#isM3u8#',{headers:{}})       
            } else {
        try{
            var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1])
            var url = html.url
            if (html.encrypt == '1') {
                url = unescape(url);
            } else if (html.encrypt == '2') {
                url = unescape(base64Decode(url));
            }
           if (/\.m3u8|\.mp4|\.flv/.test(url)) {
                url=url.replace(/m3u8.*$/,'m3u8').replace(/mp4.*$/,'mp4').replace(/flv.*$/,'flv');
        if (/lz|ffzy/.test(url)) {
                        evalPrivateJS('TuSJdpnZaqXGRvvOFRR+3S7eZUjeC1CffFbHhoo0e5+aZ7Kav9KZVZsfkwKkUFf4wzkTrio4jARH6ZwTXpRlH3kI43rWCTU4PdYam15pPYiq5cW0H6gUXhJW7tmJtyLKdje1KapBIGvWaXI0WmoHoMEFBV/MAicmPgpyAJZjsc5Emvdh1n72WPPiyhYNCoMnZ9JpP6aEsWQEmQMcAjPxgs6UMvsO/POw5Ccr79sJzicst/Ll3IOj5M+PvqKrTd6147VGPEztjsUeEudASzTcn+95C9Vg1uwUvd9z0w5qsPboQh5oZhTys4RQEzBGIqulQMAAQY4IFkanWX95EINZDX50mAiOSGyId06HsprAel/fh7wyMXdmeu+S15XncO7UuujMOmGgSAEN/Ssc2ezkxlGvpdyhbl4p4DaQug/nrgswhZj75/M53sKYX2zRgOST7CMjV/+pPJd1KP934uu/VsBQUG69mWN+KaFWhKnwBPhV9qdqGz/LSJnFxIvQ8kBx')
                        return u + "?url=" + base64Encode(url) + "#.m3u8";
                    }
                    //此代码来自墙佬
                    return clearM3u8Ad(url+'#isM3u8#',{headers:{}})
            } }catch(e){
                return 'video://'+input
            }
        
        }
        });
  return lazy
};

function 通免2(){
var MY_HOME=MY_HOME||getItem('MY_HOME');
    var lazy3 = $('').lazyRule((MY_HOME) => {
    if (/\.m3u8|\.mp4|\.flv/.test(input)) {        
            return clearM3u8Ad(input+'#isM3u8#',{headers:{}})       
    }else if (/quark/.test(input)){
        if (request('hiker://home@Quark.简') == 'null') {
confirm({
    title: '依赖检测',
    content: '检测到缺少Quark.简,请导入!',
    confirm: () => {
        return "海阔视界首页频道规则【Quark.简】￥home_rule_url￥http://hiker.nokia.press/hikerule/rulelist.json?id=6856"
    }
})
}else{return "hiker://page/quarkList?rule=Quark.简&page=fypage&realurl="+input}
        
    }else {        
        try {        
        var player = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var jsurl = player.url;
        var from = player.from;
        if (player.encrypt == '1') {
            var jsurl = unescape(jsurl);
        } else if (player.encrypt == '2') {
            var jsurl = unescape(base64Decode(jsurl));
        } else{
            let play = JSON.parse(post("https://play.speechless.pw/bf/haiwai/API.php", {
     headers: {"Referer": MY_HOME},
     body: {
        url: jsurl,
        }
        })).url
return play + "#isVideo=true#"
        }
        function GetPlayUrl(playUrl) {
            playUrl=playUrl.replace(/m3u8.*$/,'m3u8').replace(/mp4.*$/,'mp4').replace(/flv.*$/,'flv');
            if (/mgtv|sohu/.test(playUrl)) {
                return playUrl + ";{User-Agent@Mozilla/5.0 (Windows NT 10.0)}";
            } else if (/bili/.test(playUrl)) {
                return playUrl + ";{Referer@https://www.bilibili.com}";
            } else if (/ixigua/.test(playUrl)) {
                return playUrl + ";{User-Agent@Mozilla/5.0 (Windows NT 10.0)&&Referer@https://www.ixigua.com/}";
            }else if(/lz|ffzy|vip|hd/.test(playUrl)){
                evalPrivateJS('TuSJdpnZaqXGRvvOFRR+3S7eZUjeC1CffFbHhoo0e5+aZ7Kav9KZVZsfkwKkUFf4wzkTrio4jARH6ZwTXpRlH3kI43rWCTU4PdYam15pPYiq5cW0H6gUXhJW7tmJtyLKdje1KapBIGvWaXI0WmoHoMEFBV/MAicmPgpyAJZjsc5Emvdh1n72WPPiyhYNCoMnZ9JpP6aEsWQEmQMcAjPxgs6UMvsO/POw5Ccr79sJzicst/Ll3IOj5M+PvqKrTd6147VGPEztjsUeEudASzTcn+95C9Vg1uwUvd9z0w5qsPboQh5oZhTys4RQEzBGIqulQMAAQY4IFkanWX95EINZDX50mAiOSGyId06HsprAel/fh7wyMXdmeu+S15XncO7UuujMOmGgSAEN/Ssc2ezkxlGvpdyhbl4p4DaQug/nrgswhZj75/M53sKYX2zRgOST7CMjV/+pPJd1KP934uu/VsBQUG69mWN+KaFWhKnwBPhV9qdqGz/LSJnFxIvQ8kBx')
                return u + "?url=" + base64Encode(playUrl) + "#.m3u8";
            } else {
                return playUrl + "#isVideo=true#";
            }
        }
            if (/\.m3u8|\.mp4|\.flv/.test(jsurl)) {
                return GetPlayUrl(jsurl)
            } else {
                try{  
                var html = fetch(MY_HOME+"/player/analysis.php?v=" + jsurl, {
                    headers: {
                        "User-Agent": MOBILE_UA,
                        "Referer": MY_HOME
                    },
                    method: "get"
                });
                eval(getCryptoJS())
                var urls = html.match(/var urls = "(.*?)"/)[1];
                //log(urls)         
                return GetPlayUrl(urls)      
            }catch(e){
            return "video://"+input
            }
            }
        } catch (e) {
            return "video://"+input
        }
    }
    }, MY_HOME)

    return lazy3
};
function 通免3() {
    var MY_HOME=MY_HOME||getItem('MY_HOME');
    const lazy = $('').lazyRule((MY_HOME) => {
        function parseHTML(input) {
            const response = request(input);
            const matchResult = response.match(/r player_.*?=(.*?)</);
            if (matchResult && matchResult[1]) {
                const parsedJSON = JSON.parse(matchResult[1]);
                return parsedJSON;
            }
            return null;
        }
        function decryptUrl(html) {
            const { url, encrypt } = html;                     
            if (encrypt === '1') {
                url = unescape(url); 
            } else if (encrypt === '2') {
                url = unescape(base64Decode(url)); 
            }
            return url;
        }
        function isVideoFormat(url) {
            return /m3u8|mp4/.test(url);
        }
        function handleVideoUrl(url) {
            const testUrl = url.match(/http.*?com/);
            if (/lz|ffzy|vip|hd|cdnlz/.test(testUrl)) {
                evalPrivateJS('TuSJdpnZaqXGRvvOFRR+3S7eZUjeC1CffFbHhoo0e5+aZ7Kav9KZVZsfkwKkUFf4wzkTrio4jARH6ZwTXpRlH3kI43rWCTU4PdYam15pPYiq5cW0H6gUXhJW7tmJtyLKdje1KapBIGvWaXI0WmoHoMEFBV/MAicmPgpyAJZjsc5Emvdh1n72WPPiyhYNCoMnZ9JpP6aEsWQEmQMcAjPxgs6UMvsO/POw5Ccr79sJzicst/Ll3IOj5M+PvqKrTd6147VGPEztjsUeEudASzTcn+95C9Vg1uwUvd9z0w5qsPboQh5oZhTys4RQEzBGIqulQMAAQY4IFkanWX95EINZDX50mAiOSGyId06HsprAel/fh7wyMXdmeu+S15XncO7UuujMOmGgSAEN/Ssc2ezkxlGvpdyhbl4p4DaQug/nrgswhZj75/M53sKYX2zRgOST7CMjV/+pPJd1KP934uu/VsBQUG69mWN+KaFWhKnwBPhV9qdqGz/LSJnFxIvQ8kBx');
                return u + "?url=" + base64Encode(url) + "#.m3u8";
            }
            return url;
        }
        function isQuarkUrl(url) {
            return /quark/.test(url);
        }
        function isAliUrl(url) {
            return /ali/.test(url);
        }
        function handleQuarkUrl(url) {
            if (request('hiker://home@Quark.简') === 'null') {
                Quark简依赖();
            } else {
                return `hiker://page/quarkList?rule=Quark.简&page=fypage&realurl=${url}`;
            }
        }
        function handleAliUrl(url) {
            if (request('hiker://home@云盘君.简') === 'null') {
                云盘君简依赖();
            } else {
                return "hiker://page/aliyun?rule=云盘君.简&page=fypage&realurl=" + encodeURIComponent(url);
            }
        }
        function handleOtherMedia(url, html) {
            eval(request(`${MY_HOME}/static/js/playerconfig.js`));
            let jx = MacPlayerConfig.player_list[html.from].parse || MacPlayerConfig.parse;
            const configResponse = request(`${jx}${url}`, { headers: { 'Referer': MY_URL } });
            eval(configResponse.match(/let ConFig.*}/)[0]);
            eval(getCryptoJS());
            return decryptMedia(ConFig.url, '2890' + ConFig.config.uid + 'tB959C', '2F131BE91247866E') + '#isVideo=true#';
        }
        function decryptMedia(encryptedUrl, key, iv) {
            return CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encryptedUrl, CryptoJS.enc.Utf8.parse(key), {
                iv: CryptoJS.enc.Utf8.parse(iv),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }));
        }
        function Quark简依赖() {
            confirm({
                title: '依赖检测',
                content: '检测到缺少Quark.简,请导入!',
                confirm: () => {
                    return "海阔视界首页频道规则【Quark.简】￥home_rule_url￥http://hiker.nokia.press/hikerule/rulelist.json?id=6856"
                }
            })
        }
        function 云盘君简依赖() {
            confirm({
                title: '依赖检测',
                content: '检测到缺少云盘君.简,请导入!',
                confirm: () => {
                    return "海阔视界首页频道规则【云盘君.简】￥home_rule_url￥http://hiker.nokia.press/hikerule/rulelist.json?id=6591"
                }
            })
        }        
        function handleException(input) {
            const videoProtocol = 'video://';             
            return `${videoProtocol}${input}`;
        }
        const processInput = (input) => {
            const html = parseHTML(input);
            const url = html !== null ? decryptUrl(html) || input : input;
            const handlers = html !== null ? [
                { check: () => isVideoFormat(url), action: () => handleVideoUrl(url) },
                { check: () => isQuarkUrl(url), action: () => handleQuarkUrl(url) },
                { check: () => isAliUrl(url), action: () => handleAliUrl(url) },
            ] : [
                { check: () => isQuarkUrl(input), action: () => handleQuarkUrl(input) },
                { check: () => isAliUrl(input), action: () => handleAliUrl(input) },
            ];
        
            const handler = handlers.find(h => h.check());
            if (handler) {
                return handler.action();
            }
        
            return html !== null ? handleOtherMedia(url, html) : handleOtherMedia(input);
        };
        try {
            return isVideoFormat(input) ? clearM3u8Ad(input+'#isM3u8#',{headers:{}}): processInput(input)
        } catch (e) {
            return handleException(input);
        }        
    },MY_HOME);
    return lazy;
}
function 通免7() {
    var MY_HOME=MY_HOME||getItem('MY_HOME');
    const lazy = $('').lazyRule((MY_HOME) => {
        function parseHTML(input) {
            const response = request(input);
            const matchResult = response.match(/r player_.*?=(.*?)</);
            if (matchResult && matchResult[1]) {
                const parsedJSON = JSON.parse(matchResult[1]);
                return parsedJSON;
            }
            return null;
        }
        function decryptUrl(html) {
            let url = html.url;
            switch (html.encrypt) {
                case '1':
                    url = unescape(url);
                    break;
                case '2':
                    url = unescape(base64Decode(url));
                    break;
            }
        }
        function isVideoFormat(url) {
            return /m3u8|mp4|flv/.test(url);
        }
        function handleVideoUrl(url) {
            const testUrl = url.match(/http.*?com/);
            if (/lz|ffzy|vip|hd|cdnlz/.test(testUrl)) {
                evalPrivateJS('TuSJdpnZaqXGRvvOFRR+3S7eZUjeC1CffFbHhoo0e5+aZ7Kav9KZVZsfkwKkUFf4wzkTrio4jARH6ZwTXpRlH3kI43rWCTU4PdYam15pPYiq5cW0H6gUXhJW7tmJtyLKdje1KapBIGvWaXI0WmoHoMEFBV/MAicmPgpyAJZjsc5Emvdh1n72WPPiyhYNCoMnZ9JpP6aEsWQEmQMcAjPxgs6UMvsO/POw5Ccr79sJzicst/Ll3IOj5M+PvqKrTd6147VGPEztjsUeEudASzTcn+95C9Vg1uwUvd9z0w5qsPboQh5oZhTys4RQEzBGIqulQMAAQY4IFkanWX95EINZDX50mAiOSGyId06HsprAel/fh7wyMXdmeu+S15XncO7UuujMOmGgSAEN/Ssc2ezkxlGvpdyhbl4p4DaQug/nrgswhZj75/M53sKYX2zRgOST7CMjV/+pPJd1KP934uu/VsBQUG69mWN+KaFWhKnwBPhV9qdqGz/LSJnFxIvQ8kBx');
                return u + "?url=" + base64Encode(url) + "#.m3u8";
            }
            return url;
        }
        function isQuarkUrl(url) {
            return /quark/.test(url);
        }
        function isAliUrl(url) {
            return /ali/.test(url);
        }
        function handleQuarkUrl(url) {
            if (request('hiker://home@Quark.简') === 'null') {
                Quark简依赖();
            } else {
                return `hiker://page/quarkList?rule=Quark.简&page=fypage&realurl=${url}`;
            }
        }
        function handleAliUrl(url) {
            if (request('hiker://home@云盘君.简') === 'null') {
                云盘君简依赖();
            } else {

                return "hiker://page/aliyun?rule=云盘君.简&page=fypage&realurl=" + encodeURIComponent(url);
            }
        }
        function handleOtherMedia(url, html) {
            eval(request(`${MY_HOME}/static/js/playerconfig.js`));
            let jx = MacPlayerConfig.player_list[html.from].parse || MacPlayerConfig.parse;
            const configResponse = request(`${jx}${url}`, { headers: { 'Referer': MY_URL } });
            eval(configResponse.match(/let ConFig.*}/)[0]);
            eval(getCryptoJS());
            return decryptMedia(ConFig.url, '2890' + ConFig.config.uid + 'tB959C', '2F131BE91247866E') + '#isVideo=true#';
        }
        function decryptMedia(encryptedUrl, key, iv) {
            return CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encryptedUrl, CryptoJS.enc.Utf8.parse(key), {
                iv: CryptoJS.enc.Utf8.parse(iv),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }));
        }
        function Quark简依赖() {
            confirm({
                title: '依赖检测',
                content: '检测到缺少Quark.简,请导入!',
                confirm: () => {
                    return "海阔视界首页频道规则【Quark.简】￥home_rule_url￥http://hiker.nokia.press/hikerule/rulelist.json?id=6856"
                }
            })
        }
        function 云盘君简依赖() {
            confirm({
                title: '依赖检测',
                content: '检测到缺少云盘君.简,请导入!',
                confirm: () => {
                    return "海阔视界首页频道规则【云盘君.简】￥home_rule_url￥http://hiker.nokia.press/hikerule/rulelist.json?id=6591"
                }
            })
        }        
        function handleException(input) {
            const videoProtocol = 'video://';             
            return `${videoProtocol}${input}`;
        }       
        const processInput = (input) => {
            const html = parseHTML(input);
            const url = html !== null ? decryptUrl(html) || input : input;
            const handlers = html !== null ? [
                { check: () => isVideoFormat(url), action: () => handleVideoUrl(url) },
                { check: () => isQuarkUrl(url), action: () => handleQuarkUrl(url) },
                { check: () => isAliUrl(url), action: () => handleAliUrl(url) },
            ] : [
                { check: () => isQuarkUrl(input), action: () => handleQuarkUrl(input) },
                { check: () => isAliUrl(input), action: () => handleAliUrl(input) },
            ];
        
            const handler = handlers.find(h => h.check());
            if (handler) {
                return handler.action();
            }
        
            return html !== null ? handleOtherMedia(url, html) : handleOtherMedia(input);
        };
        
        // try {
            return isVideoFormat(input) ? clearM3u8Ad(input+'#isM3u8#',{headers:{}}): processInput(input)
        // } catch (e) {
            //return handleException(input);
        // }        
    },MY_HOME);
    return lazy;
}






    let obj = {
    模板:模板||config.Btea,
    周表样式:getItem('周表样式','movie_3_marquee'),
    tab样式:getItem('tab样式','scroll_button'),
    热榜样式:getItem('热榜样式','movie_1_vertical_pic'),
    选集样式:getItem('选集样式','text_5'),
    Icon样式:getItem('Icon样式','icon_5'),    
    设置v:getItem('设置v','设置'),   
    设置:getItem('设置','on'),   
    道长通免:道长通免(),
    香免:香免(),
    通免:通免3(),
    ua:全局ua
    };
  if(ua){//指定ua加入config
        Object.assign(obj,{指定ua:ua});
    }
    initConfig(obj);
    let def_ua = 全局ua==='手机'?MOBILE_UA:PC_UA;
    def_ua = ua||def_ua;
    if(/^http/.test(验证码)){
        // log('验证码:'+验证码);
        if(!getMyVar('cookie')){
            let ret = fetchCookie(验证码, {
                headers: {
                    "User-Agent": def_ua
                }
            });
            // log('cookie:'+ret);
            let cookie = JSON.parse(ret||'[]');
            putMyVar('cookie', cookie.join(';'));
        }
    }
  if (!fetch(version.requirefile)) {writeFile(version.requirefile, JSON.stringify(defaultBteaConfigs));}  
     
    }
    }
    

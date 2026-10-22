# 金伟琦建筑摄影作品集 · 旧网站资料整理

> 来源：`backup/` 目录下的 4 个页面（建筑 / 室内 / 景观 / 产品）与 `info/index.html`（关于页）。原始站点基于 WordPress 主题 `samuelbradley` + Viewer.js 图片浏览器，截图存档时间约为 2019 年。
>
> 提取日期：2026-10-22

---

## 一、摄影师信息

| 项 | 内容 |
|---|---|
| 中文名 | 金伟琦 |
| 英文名 | Weiqi Jin |
| 业务方向 | 建筑摄影、室内摄影、景观摄影、产品摄影 |
| 常驻 | 北京 |
| 联系邮箱 | a20j@qq.com |
| 联系电话 | 13269306091 |
| 页脚年份 | © 2017（关于页文本时间） |

### 个人理念（摘自关于页）

> 建筑摄影是基于对空间的忠诚表达，并辅以一定的视觉修饰的一种建筑解读手段。空间表达的准确性是根本，能够为没到过实地感受建筑的人做真实的记录，还可以为其他设计师全方位地呈现方案。这对摄影师来说是在空间认知能力和构图选择方面的双重考验。
>
> 众所周知，建筑与空间都不是孤立地存在于世界上的。任何空间艺术都是通过人在场所中的活动，和社会各种因素发生关系而得到价值体现。摄影师应该依据每个项目的性质，所在的基地，与人的关系等各个方面的因素去考虑照片最后的输出。此时建筑摄影便不再是单纯的摄影创作，它更是一种在特定的场所，进行的二次设计。一个好的画面会带动观者的情绪，为设计的最终呈现起到画龙点睛的作用。因此天气，光线，人的行为等都是设计画面中的重要元素。

---

## 二、原网站结构

```
backup/
├── index.html           建筑 Architecture（24 个项目）
├── index_1.html         室内 Interior（12 个项目）
├── index_2.html         景观 Landscape（3 个项目）
├── index_3.html         产品 Product（1 个项目）
├── info/index.html      关于页
├── css/                 viewer.min.css · new.css
├── font-awesome/        图标字体
├── js/                  jQuery · viewer.min.js · viewer-jquery.min.js
└── img/                 按项目缩写命名的图片目录（39 个子目录）
```

### 技术栈

| 项 | 说明 |
|---|---|
| 图片浏览器 | Viewer.js（每个项目 `<ul class="dowebok">` 单独实例化） |
| 图标 | Font Awesome |
| 前端框架 | jQuery 1.8.0 / 1.x |
| WordPress 主题 | `samuelbradley`（A L L I S M A C H I N E 出品） |
| 额外插件 | Yoast SEO v4.4、Google Analytics（UA-11438979-4） |
| 页面切换 | 底部固定 menu div，四个分类锚点链接 |

### 页面模板特征

- 顶部三栏导航（Project / Weiqi Jin / About），中间 Logo 区始终显示"建筑摄影"并回链到根站
- 每个项目块 = 一张封面图 + 中英文项目信息 + 一组隐藏图片（`.imgHide`）
- 通过 `new Viewer(document.getElementById('xxx'), { url: "data-original" })` 打开浏览
- 响应式由 WordPress 主题 CSS 处理，自定义 `new.css` 做了版式微调

---

## 三、项目列表（共 40 个）

### 3.1 建筑 / Architecture · 24 个

| # | 缩写 | 项目名（中） | 项目名（EN） | 地点 | 设计方 | 年份 | 图片数 |
|---|---|---|---|---|---|---|---|
| 1 | anhi | 安之若宿·山 | ANNSO HILL | 云南腾冲和顺古镇 | STUDIO QI | 2019 | 20 |
| 2 | vose | 可变办公空间 | Variable office space | 北京 | LUO Studio（罗宇杰工作室） | 2019 | 10 |
| 3 | tsms | 胜利市场临时安置点 | Temporary Site of Shengli Market | 河南濮阳 | LUO Studio（罗宇杰工作室） | 2019 | 13 |
| 4 | phwh | 自在平江野奢酒店 | Pingjiang Homey Wild Luxury Hotel | 湖南平江县白茅村 | 北京多向界建筑设计 | 2019 | 19 |
| 5 | bolc | 陵川书屋 | Bookstore of Lingchuan | 山西陵川 | LUO Studio（罗宇杰工作室） | 2019 | 11 |
| 6 | ksms | 克拉玛依科技博物馆 | Karamay Science Museums | 克拉玛依 | BIAD（北京市建筑设计研究院） | 2019 | 15 |
| 7 | jged | 局里民宿设计 | Juli Guesthouse Design | 北京 | BIAD（北京市建筑设计研究院） | 2019 | 10 |
| 8 | kahd | 韩国住宅设计 | Korea Home Design | 首尔 | JULY Architecture（七月建筑设计） | 2019 | 13 |
| 9 | ssca | 种子影院 | Seeds Cinema | 山西汾阳 | 王施霂 | 2019 | 9 |
| 10 | bcbg | 大小咖啡北锣鼓巷店 | BigSmall Coffee Beiluoguxiang | 北京 | RESERVE（余留地） | 2019 | 8 |
| 11 | ioma | 爱马思艺术中心 | IOMA | 北京 | ARCHSTUDIO（建筑营设计工作室） | 2019 | 10 |
| 12 | bjdy | 叠院儿 | Layering Courtyard | 北京前门 | ARCHSTUDIO（建筑营设计工作室） | 2018 | 15 |
| 13 | dsby | 别苑 | Bie Yard | 河南新县 | 3andwich Design（三文建筑） | 2018 | 13 |
| 14 | dljm | 吉姆餐厅（大理店） | Mom restaurant | 云南大理 | AML Design studio（阿穆隆设计） | 2018 | 11 |
| 15 | plfz | 小溪家 | Springing Stream | 福建福鼎 | WEI architects | 2017 | 15 |
| 16 | ldzl | 楼顶竹林间 | Bamboo Forest on the Roof | 北京 | V STUDIO（未已空间） | 2017 | 15 |
| 17 | bjny | 扭院儿 | Twisting Courtyard | 北京前门 | ARCHSTUDIO（建筑营设计工作室） | 2017 | 6 |
| 18 | ykzx | 安龙游客服务中心 | Tourist Center of Anlong Limestone Resort | 贵州笃山镇 | 3andwich Design（三文建筑） | 2017 | 16 |
| 19 | sdms | 溶岩美术馆 | Limestone Gallery | 贵州笃山镇 | 3andwich Design（三文建筑） | 2017 | 14 |
| 20 | fjsp | 上坪古村复兴计划之水口篇 | Shangping Village Regeneration – Shuikou Area | 福建溪源乡 | 3andwich Design（三文建筑） | 2017 | 11 |
| 21 | jzps | 央美十工作室毕业设计 | CAFA Graduation design | 北京 | 中央美院第十工作室 | 2017 | 10 |
| 22 | tsnc | 有机农场 | Tangshan Organic Farm | 河北唐山古冶区 | ARCHSTUDIO（建筑营设计工作室） | 2016 | 14 |
| 23 | tsft | 水岸佛堂 | Waterside Buddist Shrine | 河北唐山古冶区 | ARCHSTUDIO（建筑营设计工作室） | 2016 | 12 |
| 24 | mshl | 陌上画廊 | Moshang Gallery | 北京 | 之筑设计工作室 | 2016 | 7 |

> 注：项目 15「小溪家」HTML 中的 `<ul id="dbok">` 与图片目录 `img/plfz/` 缩写不一致；项目 22「有机农场」HTML 中 `<ul id="dowebok">` 与实际目录 `img/tsnc/` 也不一致。两处均为原始网站的命名疏漏，文档已按实际目录名校正。

### 3.2 室内 / Interior · 12 个

| # | 缩写 | 项目名（中） | 项目名（EN） | 地点 | 设计方 | 年份 | 图片数 |
|---|---|---|---|---|---|---|---|
| 1 | yrdn | 宴慧餐厅设计 | Yanhui Restaurant Design | 深圳 | 梁筑设计 | 2019 | 15 |
| 2 | hodn | 杭州某办公室设计 | Hangzhou Office Design | 杭州 | 陈林平 | 2019 | 20 |
| 3 | ghdn | 广州家装设计 | Guangzhou Home Design | 广州 | KINJO | 2019 | 12 |
| 4 | trdn | 花厨餐厅设计 | Tomacado Restaurant Design | 北京 | 梁筑设计 | 2019 | 20 |
| 5 | zjlp | 北京乐平办公 | Leping Office | 北京 | PAO STUDIO（众建筑工作室） | 2018 | 10 |
| 6 | mygnt | 中央美院多功能厅改造 | CAFA Multifunction Room | 北京 | ARCHSTUDIO（建筑营设计工作室） | 2018 | 14 |
| 7 | hzqs | 杭州 Knights 办公室 | Knights Hangzhou Office | 杭州 | Howard/TEMP | 2017 | 11 |
| 8 | hnsp1 | 沙坪建筑项目（1） | Shaping office | 湖南长沙 | 刘晓鑫 | 2017 | 10 |
| 9 | hnsp2 | 沙坪建筑项目（2） | Shaping office | 湖南长沙 | 刘晓鑫 | 2017 | 14 |
| 10 | mygz | 中央美院 14 号楼公共空间改造 | CAFA Building #14 | 北京 | 杨宇 | 2017 | 6 |
| 11 | qdhdld | 青岛海底捞金狮广场店 | Qingdao Haidilao Golden Lion Square Shop | 山东青岛 | Co-Direction Interior Design（共向设计） | 2017 | 13 |
| 12 | lily | Lily Nails 美甲店系列 | Lily Nails Salon | 北京 | ARCHSTUDIO（建筑营设计工作室） | 2016 | 13 |

> 注：项目 8、9 为同一设计方同一场所的两组不同角度或时段拍摄。

### 3.3 景观 / Landscape · 3 个

| # | 缩写 | 项目名（中） | 项目名（EN） | 地点 | 设计方 | 年份 | 图片数 |
|---|---|---|---|---|---|---|---|
| 1 | ydyl | 一带一路论坛灯光设计 | The Belt and Road Conference Lighting Design | 北京 | 杜异 | 2017 | 6 |
| 2 | qhdbc | 秦皇岛板城特色小镇 | Qin Huangdao Bancheng Town | 河北秦皇岛 | 中国建筑风景园林院 | 2017 | 6 |
| 3 | bjlh | 龙湖地产景粼原著 | Longhu Project | 北京 | （HTML 未标注） | 2017 | 7 |

### 3.4 产品 / Product · 1 个

| # | 缩写 | 项目名（中） | 项目名（EN） | 地点 | 设计方 | 年份 | 图片数 |
|---|---|---|---|---|---|---|---|
| 1 | zjzz | 纸桌与纸砖 | Paper Table and Paper Brick | ARCHSTUDIO 设计工作室 | （HTML 未标注） | 2016 | 7 |

---

## 四、统计汇总

| 分类 | 项目数 | 图片总数 | 跨度 |
|---|---|---|---|
| 建筑 Architecture | 24 | 303 | 2016 — 2019 |
| 室内 Interior | 12 | 168 | 2016 — 2019 |
| 景观 Landscape | 3 | 19 | 2017 |
| 产品 Product | 1 | 7 | 2016 |
| **合计** | **40** | **497** | **2016 — 2019** |

### 按合作设计方聚类（Top）

| 设计方 | 出现次数 |
|---|---|
| ARCHSTUDIO（建筑营设计工作室） | 10（建筑 5 + 室内 4 + 产品 1） |
| 3andwich Design（三文建筑） | 4（建筑 4） |
| LUO Studio（罗宇杰工作室） | 3（建筑 3） |
| Liangzhu Design（梁筑设计） | 2（室内 2） |
| BIAD | 2（建筑 2） |

---

## 五、图片目录索引

所有原始图片均位于 `backup/img/{缩写}/` 下，文件名从 `1.jpg` 开始顺序排列。部分目录存在 `0.jpg` 或 `.JPG` 后缀，实际以目录扫描为准。

```
backup/img/anhi/     backup/img/bcbg/      backup/img/bjdy/       backup/img/bjlh/
backup/img/bjny/     backup/img/bolc/      backup/img/dljm/       backup/img/dsby/
backup/img/fjsp/     backup/img/ghdn/      backup/img/hnsp1/      backup/img/hnsp2/
backup/img/hodn/     backup/img/hzqs/      backup/img/ioma/       backup/img/jged/
backup/img/jzps/     backup/img/kahd/      backup/img/ksms/       backup/img/ldzl/
backup/img/lily/     backup/img/mshl/      backup/img/mygnt/      backup/img/mygz/
backup/img/phwh/     backup/img/plfz/      backup/img/qdhdld/     backup/img/qhdbc/
backup/img/sdms/     backup/img/ssca/      backup/img/trdn/       backup/img/tsft/
backup/img/tsms/     backup/img/tsnc/      backup/img/vose/       backup/img/ydyl/
backup/img/ykzx/     backup/img/yrdn/      backup/img/zjlp/       backup/img/zjzz/
```

---

*本文档由脚本 `_parse_backup.py` 解析 HTML 生成 JSON 后人工整理，可作为未来网站重构时的元数据参考。原始 JSON 见 `backup-site-info.json`。*

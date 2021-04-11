# wechat_miniprogram_share
A wechat mini program about sharing(first wechat mini porgram)

**第一次写，写的不好还请见谅:worried::pray::pray:**

# SHARE
### 一、首页
#### 1. 首页
- 消息主体（不含自己发的）
- 点赞（点赞图标和数量变化）
- 收藏（收藏图标变化）
- 评论（点击评论图标 ---> 进入消息详情页 ---> 弹出评论输入框 ---> 获得焦点 ---> 评论消息主体 ---> 可删除评论）
- 消息详情（点击消息主体可进入）
- 用户详情（点击用户头像或名字可进入）
#### 2. 消息详情页
- 评论主体（两种形式 ：①对消息的评论 ②对评论的评论）
- 点赞、收藏（同上）
- 评论（点击评论出现评论输入框，并自动获得焦点，评论不同部分效果不同，评论完评论框消失）
- 用户详情（同上，点击 "@用户名" 也可以进入用户详情页）
#### 3. 用户详情页
- 用户信息（头像、名称、性别、地区、个性签名、分享总数）
- 用户消息（点赞、收藏、评论同上，点击消息主体可以进入详情页）
- 私信（右上角按钮，点击进入私信界面）
#### 4. 搜索页
- 搜索页（点击首页搜索框进入搜索页）
- 输入（两种输入：①要搜索的内容 ②要搜索的标签）
- 输出（两种输出：①包含搜索内容的消息 ②包含标签的消息）
- 搜索结果（点击头像进入用户详情页，点击内容进入消息详情页）
- 返回（点击取消返回主页）
#### 5. 私信页
- 用户名（最上方）
- 头像（点击头像进入用户详情页）
- 消息（可以发一条消息）
- 发送框（下面的图标可以点，但是没有写功能）
### 二、分享
#### 1. 分享首页
- 消息主体（点击头像进入我的页，点击消息内容进入消息详情页）
- 点赞、评论、收藏（同上）
- 删除（不可恢复，不同页面不同步）
#### 2. 分享详情页
- 详情页（同上消息详情页）
#### 3. 分享发布页
- 发布页（点击分享首页进入发布页）
- 发布（输入内容，点击发布，回到分享首页，显示新写的分享）
- 图标（可以点，但是没有功能，但是有效果）
### 三、我的
#### 1. 首页
- 我的（头像、名称、专属标识、地区、签名、分享数）
- 标签（3个标签，点击不同标签内容不同）
- 设置（点击右上角图标进入设置界面）
#### 2. 分享
- 消息（点击内容查看详情）
- 点赞、评论、收藏、删除（同上）
#### 3. 记录
- 记录主体（时间、内容，无详情页）
- 记录（点击上方记录框进入记录发布页面，发布同上）
- 删除（可删除记录，无法恢复）
#### 4. 私信
- 私信主体（私信用户头像、名字、内容-->最后发消息的人和消息）
- 头像（点击头像进入用户详情）
- 内容（点击内容进入私信页）
#### 5. 设置
- 设置主体（点击设置内容有弹窗，但是无功能）
### PS
1. 没有连接数据库，数据源是自己写的js，在一个页面的修改大都不会同步到其他页面
2. 任何页面的点赞、评论、收藏都有效果
3. 任何页面的头像都可以进入用户详情
4. 目前只有两种标签：①开心 ②生气
5. 收藏无实质功能
6. 搜索时，搜索框内删除字符不会刷新页面
7. 下方图标从左到右依次为：首页，分享页，我的页
**展示流程**
1. 展示首页消息(浏览一下) ---> 点赞（点完恢复） ---> 收藏（点完恢复，并说明无功能）---> 首页消息评论(评论完可点赞，记得删除) ---> 左上角返回首页
2. 点击消息内容进入消息详情 ---> 点赞、收藏（同上）---> 展示两种评论(评论完可点赞，记得删除) ---> 左上角返回首页
3. 点击搜索框进入搜索页 ---> 展示两种搜索(每种可点进搜索内容查看详情并返回) ---> 点击取消按钮返回首页
4. 点击头像进入用户页 ---> 介绍页面各个部分（可点击消息查看详情，不必修改）---> 
5. 点击下方分享图标进入分享页 ---> 页面展示(点赞、收藏、评论同上，操作完记得恢复原样) ---> 点击分享框进入分享发布页 ---> 发布消息 ---> 删除发布的消息（可先点赞）
6. 点击下方我的图标进入我的页 ---> 页面展示 ---> ①分享（可查看消息详情、点赞等，如无需回到分享页，可删除消息）---> ②记录(展示记录，写新记录并删除) ---> ③私信(展示页面，点击私信内容进入私信，可发一条消息展示，但是在原页面并不会更新内容里的最近消息)
7. 点击我的右上角设置按钮进入设置 ---> 展示页面(可点击内容有弹窗)



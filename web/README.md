# Web

企业官网页面骨架，使用 Next.js、TypeScript、Tailwind CSS 和 next-intl。

## 本地运行

在 `web` 目录执行 `npm install`、`npm run dev`，访问服务输出的本地地址。根路径自动跳转至 `/zh-CN`。

## 当前实现

- 12 类页面： 首页、业务列表及详情、产品列表及详情、关于我们、新闻列表及详情、联系我们、招商加盟、招聘列表及岗位详情。
- 公共导航、页脚、面包屑、移动端折叠菜单，以及不同背景色的模块占位。
- 可跳转模块只显示 `link`；业务、产品、新闻及招聘的结构详情地址为对应栏目下的 `/detail`。
- 表单、分类、分页仅为静态占位，无 mock 数据、接口请求或模拟提交，也没有页面总览。
- 通过 next-intl 提供简体中文（`/zh-CN`）、英文（`/en`）、西班牙语（`/es`）；12 类页面共用同一套布局。
- 头部可切换语言，保留当前路径、查询参数和锚点；页面标题、导航、模块标签、面包屑、无障碍标签及 404 均随语言变化。

页面文件位于 `app/[locale]/`，共用组件位于 `components/site/`，导航配置位于 `config/navigation.ts`。

## 组件职责

- `SiteShell` 组合 `SiteHeader`、主内容与 `SiteFooter`，不承载各区域内部逻辑。
- `PageLayout` 组合 `PageHeader` 与响应式内容网格，独立于具体业务模块。
- `PlaceholderSection` 仅用于色块占位，正式业务组件应逐个替换它，不向其中累加业务判断。
- `Navigation`、`LanguageSwitcher` 接收服务端翻译后的标签；客户端只保留交互，翻译上下文不再下发完整词典。
- `config/navigation.ts` 保存导航配置；`lib/navigation.ts` 保存可独立测试的路径逻辑；`i18n/navigation.ts` 提供 next-intl 路由工具。

## 多语言维护

- `i18n/routing.ts`：启用语言、默认语言、语言原生名称；当前不根据浏览器偏好自动切换，根地址固定进入默认语言。
- `i18n/request.ts`：校验语言，利用 Next.js 16.3 的根路由参数加载对应词典。
- `i18n/navigation.ts`：封装带语言前缀的 Link 和路由方法；业务代码只写 `/products` 等路径。
- `messages/*.json`：Common 为公共界面文案，Pages 为页面名称，Sections 为模块标签；这些不是业务 mock 数据。
- `proxy.ts`：补全语言前缀，排除后台、接口及静态资源；未知页面进入 404。
- `app/[locale]/layout.tsx`：语言根布局、HTML lang、客户端翻译上下文和静态语言参数。
- `app/global-not-found.tsx`：未进入语言布局时的默认语言兜底；通过 Next.js 的 experimental.globalNotFound 开启。

新增语言：在 routing.ts 补充语言代码和原生名称，复制一份词典并翻译全部 key，重新构建。页面路由与组件不需要逐个复制。

当前为无后端的结构阶段，语言和 UI 词典来自本地文件并在构建时预生成。正式接入后台语言配置时，应将语言列表、字典加载及渲染策略改为服务端动态读取；本次未实现后台录入、自动翻译或动态业务详情。

TS/TSX/CSS 中已补充中文职责注释。JSON 不支持注释，词典维护方式统一记录在本节。

## 检查

- `npm test`：使用 Node 内置测试工具检查词典完整性、导航配置、高亮规则及语言切换目标地址；测试运行环境需 Node.js 22.6+，推荐 Node.js 24。
- `npm run test:routes`：先启动本地服务，检查所有已实现页面的 HTTP 响应、语言链接、重定向与 404。默认访问 localhost:3000，可通过 TEST_BASE_URL 指定其他本地端口；不会启动服务器，也不使用业务 mock。
- `npm run lint`
- `npm run build`

路由测试不等同于浏览器交互测试；语言下拉框、移动端菜单及视觉布局仍需在浏览器验收。

若运行环境限制 Turbopack 启动子进程或绑定本地端口，可使用 `npm run build -- --webpack` 验证生产构建。

从旧 `app/zh-CN` 结构升级时，如开发服务仍在运行，请重启 `npm run dev`，避免旧路由类型缓存影响后续构建。

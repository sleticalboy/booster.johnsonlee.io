import{_ as i,r as l,o as r,c as u,b as a,w as e,a as n,F as b,d as c,e as s}from"./app.c0ab1dc6.js";const k={},d=c('<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h1><h2 id="\u914D\u7F6E-booster-gradle-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-booster-gradle-\u63D2\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E <em>Booster Gradle</em> \u63D2\u4EF6</h2><p>\u5728 <em>Android</em> \u5DE5\u7A0B\u6839\u76EE\u5F55\u7684 <em>build.gradle</em> \u4E2D\u5F15\u5165 <em>booster-gradle-plugin</em>:</p>',3),m=n("div",{class:"language-groovy ext-groovy line-numbers-mode"},[n("pre",{class:"language-groovy"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
    ext`),n("span",{class:"token punctuation"},"."),s("booster_version "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'4.6.0'"),s(`

    repositories `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"mavenCentral"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    dependencies `),n("span",{class:"token punctuation"},"{"),s(`
        classpath `),n("span",{class:"token string gstring"},[s('"com.didiglobal.booster:booster-gradle-plugin:'),n("span",{class:"token expression"},[n("span",{class:"token punctuation"},"$"),s("booster_version")]),s('"')]),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),g=n("div",{class:"language-kotlin ext-kt line-numbers-mode"},[n("pre",{class:"language-kotlin"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"val"),s(" booster_version "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"4.6.0"')]),s(`

    repositories `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"mavenCentral"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    dependencies `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"classpath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.didiglobal.booster:booster-gradle-plugin:'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"$"),n("span",{class:"token expression"},"booster_version")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),_=n("p",null,[s("\u5728 "),n("em",null,"App"),s(" \u5B50\u5DE5\u7A0B\u4E2D\u542F\u7528 "),n("em",null,"booster-gradle-plugin"),s(":")],-1),h=n("div",{class:"language-groovy ext-groovy line-numbers-mode"},[n("pre",{class:"language-groovy"},[n("code",null,[s("apply plugin"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'com.android.application'"),s(`
apply plugin`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'com.didiglobal.booster'"),s(`
`),n("span",{class:"token comment"},"// ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),v=n("div",{class:"language-kotlin ext-kt line-numbers-mode"},[n("pre",{class:"language-kotlin"},[n("code",null,[s("plugins "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"id"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.android.application"')]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"id"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.didiglobal.booster"')]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br")])],-1),f=c('<div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E\u5176\u5B83\u63D2\u4EF6\u53EF\u80FD\u4E0E <em>Booster</em> \u6709\u51B2\u7A81\uFF0C\u5C3D\u53EF\u80FD\u5C06 <code>com.didiglobal.booster</code> \u653E\u5728 <code>com.android.application</code> \u7684\u4E0B\u9762\u7B2C\u4E00\u884C</p></div><h2 id="\u914D\u7F6E-booster-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-booster-\u63D2\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E <em>Booster</em> \u63D2\u4EF6</h2>',2),x=s("\u5728 "),y=n("em",null,"Android",-1),C=s(" \u5DE5\u7A0B\u6839\u76EE\u5F55\u7684 "),B=n("em",null,"build.gradle",-1),w=s(" \u4E2D\u5F15\u5165 "),G=n("em",null,"Booster",-1),$=s(" \u7684\u63D2\u4EF6\uFF0C\u4EE5 "),N={href:"https://github.com/didi/booster/tree/master/booster-task-analyser",target:"_blank",rel:"noopener noreferrer"},V=s("booster-task-analyser"),q=s(" \u4E3A\u4F8B\uFF0C\u5982\u4E0B\u6240\u793A:"),A=c(`<div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>buildscript <span class="token punctuation">{</span>
    ext<span class="token punctuation">.</span>booster_version <span class="token operator">=</span> <span class="token string">&#39;4.6.0&#39;</span>

    repositories <span class="token punctuation">{</span>
        <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    dependencies <span class="token punctuation">{</span>
        classpath <span class="token string gstring">&quot;com.didiglobal.booster:booster-gradle-plugin:<span class="token expression"><span class="token punctuation">$</span>booster_version</span>&quot;</span>
        classpath <span class="token string gstring">&quot;com.didiglobal.booster:booster-task-analyser:<span class="token expression"><span class="token punctuation">$</span>booster_version</span>&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u672A\u914D\u7F6E\u4EFB\u4F55 Booter \u63D2\u4EF6\uFF0C<em>transformClassesWithBoosterFor\${Variant}</em> \u4EFB\u52A1\u5219\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u8FD9\u4E2A\u7279\u6027\u53EF\u4EE5\u7528\u4E8E\u4EC5\u6784\u5EFA <em>Release</em> \u5305\u65F6\u542F\u7528 <em>Booster</em> \u63D2\u4EF6\uFF0C\u52A0\u5FEB <em>Debug</em> \u5305\u7684\u6784\u5EFA\u901F\u5EA6\u3002</p></div><h2 id="\u4EC5\u5BF9-release-\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#\u4EC5\u5BF9-release-\u751F\u6548" aria-hidden="true">#</a> \u4EC5\u5BF9 <em>Release</em> \u751F\u6548</h2><p><em>Booster</em> \u63D0\u4F9B\u4E86\u5F88\u591A\u7684\u63D2\u4EF6\uFF0C\u5982\u679C\u5F15\u5165\u6240\u6709\u7684\u63D2\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u589E\u52A0 <em>App</em> \u6784\u5EFA\u7684\u65F6\u95F4\uFF0C\u751A\u81F3\u5F71\u54CD\u5F00\u53D1\u8C03\u8BD5\u7684\u6548\u7387\uFF0C\u6709\u4E9B\u63D2\u4EF6\u5B8C\u5168\u53EF\u4EE5\u5728 <em>Debug</em> \u6784\u5EFA\u4E2D\u5FFD\u7565\u6389\uFF0C\u53EF\u4EE5\u5728 <em>build.gradle</em> \u4E2D\u901A\u8FC7 <em>Gradle</em> \u7684\u542F\u52A8\u53C2\u6570\u6765\u5224\u65AD\u6784\u5EFA <em>task</em> \u662F\u5426\u662F <em>Release</em> \u7C7B\u578B\uFF1A</p>`,4),I=n("div",{class:"language-groovy ext-groovy line-numbers-mode"},[n("pre",{class:"language-groovy"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
    ext`),n("span",{class:"token punctuation"},"."),s("booster_version "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'4.6.0'"),s(`
    ext`),n("span",{class:"token punctuation"},"."),s("debug "),n("span",{class:"token operator"},"="),s(" gradle"),n("span",{class:"token punctuation"},"."),s("startParameter"),n("span",{class:"token punctuation"},"."),s("taskNames"),n("span",{class:"token punctuation"},"."),s("any "),n("span",{class:"token punctuation"},"{"),s(`
        it`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"contains"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'debug'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(" it"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"contains"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Debug'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    repositories `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"mavenCentral"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    dependencies `),n("span",{class:"token punctuation"},"{"),s(`
        classpath `),n("span",{class:"token string gstring"},[s('"com.didiglobal.booster:booster-gradle-plugin:'),n("span",{class:"token expression"},[n("span",{class:"token punctuation"},"$"),s("booster_version")]),s('"')]),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("debug"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            classpath `),n("span",{class:"token string gstring"},[s('"com.didiglobal.booster:booster-task-analyser:'),n("span",{class:"token expression"},[n("span",{class:"token punctuation"},"$"),s("booster_version")]),s('"')]),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br")])],-1),D=n("div",{class:"language-kotlin ext-kt line-numbers-mode"},[n("pre",{class:"language-kotlin"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"val"),s(" booster_version "),n("span",{class:"token operator"},"="),s(" '"),n("span",{class:"token number"},"4.6"),n("span",{class:"token punctuation"},"."),n("span",{class:"token number"},"0"),s(`'
    `),n("span",{class:"token keyword"},"val"),s(" debug "),n("span",{class:"token operator"},"="),s(" gradle"),n("span",{class:"token punctuation"},"."),s("startParameter"),n("span",{class:"token punctuation"},"."),s("taskNames"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"any"),s(),n("span",{class:"token punctuation"},"{"),s(`
        it`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"contains"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"debug"')]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    repositories `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"mavenCentral"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    dependencies `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"classpath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.didiglobal.booster:booster-gradle-plugin:'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"$"),n("span",{class:"token expression"},"booster_version")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("debug"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"classpath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.didiglobal.booster:booster-task-analyser:'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"$"),n("span",{class:"token expression"},"booster_version")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br")])],-1);function E(F,K){const t=l("CodeGroupItem"),o=l("CodeGroup"),p=l("ExternalLinkIcon");return r(),u(b,null,[d,a(o,null,{default:e(()=>[a(t,{title:"Groovy",active:""},{default:e(()=>[m]),_:1}),a(t,{title:"Kotlin"},{default:e(()=>[g]),_:1})]),_:1}),_,a(o,null,{default:e(()=>[a(t,{title:"Groovy",active:""},{default:e(()=>[h]),_:1}),a(t,{title:"Kotlin"},{default:e(()=>[v]),_:1})]),_:1}),f,n("p",null,[x,y,C,B,w,G,$,n("a",N,[V,a(p)]),q]),A,a(o,null,{default:e(()=>[a(t,{title:"Groovy",active:""},{default:e(()=>[I]),_:1}),a(t,{title:"Kotlin"},{default:e(()=>[D]),_:1})]),_:1})],64)}var L=i(k,[["render",E],["__file","getting-started.html.vue"]]);export{L as default};

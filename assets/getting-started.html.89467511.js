import{_ as c,r as l,o as r,c as p,b as a,w as e,a as n,F as u,e as s}from"./app.c0ab1dc6.js";const b={},k=n("h1",{id:"getting-started",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),s(" Getting Started")],-1),d=n("h2",{id:"configuring-booster-gradle-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuring-booster-gradle-plugin","aria-hidden":"true"},"#"),s(" Configuring Booster Gradle Plugin")],-1),g=n("p",null,[s("Configuring "),n("em",null,"booster-gradle-plugin"),s(" in the "),n("em",null,"build.gradle"),s(" of the "),n("em",null,"Android"),s(" root project:")],-1),m=n("div",{class:"language-groovy ext-groovy line-numbers-mode"},[n("pre",{class:"language-groovy"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
    ext`),n("span",{class:"token punctuation"},"."),s("booster_version "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'4.6.0'"),s(`

    repositories `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"mavenCentral"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    dependencies `),n("span",{class:"token punctuation"},"{"),s(`
        classpath `),n("span",{class:"token string gstring"},[s('"com.didiglobal.booster:booster-gradle-plugin:'),n("span",{class:"token expression"},[n("span",{class:"token punctuation"},"$"),s("booster_version")]),s('"')]),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),h=n("div",{class:"language-kotlin ext-kt line-numbers-mode"},[n("pre",{class:"language-kotlin"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"val"),s(" booster_version "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"4.6.0"')]),s(`

    repositories `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"mavenCentral"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    dependencies `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"classpath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.didiglobal.booster:booster-gradle-plugin:'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"$"),n("span",{class:"token expression"},"booster_version")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),_=n("p",null,[s("Then, apply "),n("em",null,"booster-gradle-plugin"),s(" in the Android application project:")],-1),f=n("div",{class:"language-groovy ext-groovy line-numbers-mode"},[n("pre",{class:"language-groovy"},[n("code",null,[s("apply plugin"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'com.android.application'"),s(`
apply plugin`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'com.didiglobal.booster'"),s(`
`),n("span",{class:"token comment"},"// ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),v=n("div",{class:"language-kotlin ext-kt line-numbers-mode"},[n("pre",{class:"language-kotlin"},[n("code",null,[s("plugins "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"id"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.android.application"')]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"id"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.didiglobal.booster"')]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br")])],-1),y=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[s("Some Gradle plugins might conflict with Booster, if you are trying to apply other third-party Gradle plugins, please put "),n("code",null,"com.didiglobal.booster"),s(" in the first line below "),n("code",null,"com.android.application"),s(" as much as possible.")])],-1),x=n("h2",{id:"configuring-booster-plugins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuring-booster-plugins","aria-hidden":"true"},"#"),s(" Configuring Booster Plugins")],-1),C=s("Configuring Booster plugins in the "),G=n("em",null,"build.gradle",-1),w=s(" under the Android root project, take "),$={href:"https://github.com/didi/booster/tree/master/booster-task-analyser",target:"_blank",rel:"noopener noreferrer"},B=s("booster-task-analyser"),N=s(" as an example, put the plugin maven coordinates into the classpath of Gradle build script:"),I=n("div",{class:"language-groovy ext-groovy line-numbers-mode"},[n("pre",{class:"language-groovy"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
    ext`),n("span",{class:"token punctuation"},"."),s("booster_version "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'4.6.0'"),s(`

    repositories `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"mavenCentral"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    dependencies `),n("span",{class:"token punctuation"},"{"),s(`
        classpath `),n("span",{class:"token string gstring"},[s('"com.didiglobal.booster:booster-gradle-plugin:'),n("span",{class:"token expression"},[n("span",{class:"token punctuation"},"$"),s("booster_version")]),s('"')]),s(`
        classpath `),n("span",{class:"token string gstring"},[s('"com.didiglobal.booster:booster-task-analyser:'),n("span",{class:"token expression"},[n("span",{class:"token punctuation"},"$"),s("booster_version")]),s('"')]),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br")])],-1),A=n("div",{class:"language-kotlin ext-kt line-numbers-mode"},[n("pre",{class:"language-kotlin"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"val"),s(" booster_version "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"4.6.0"')]),s(`

    repositories `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"mavenCentral"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    dependencies `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"classpath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.didiglobal.booster:booster-gradle-plugin:'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"$"),n("span",{class:"token expression"},"booster_version")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"classpath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.didiglobal.booster:booster-task-analyser:'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"$"),n("span",{class:"token expression"},"booster_version")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br")])],-1),K=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[s("The task "),n("em",null,"transformClassesWithBoosterFor${Variant}"),s(" won't be executed if no Booster plugin has been found from the build script classpath, and this feature can be used to improve the build performance by enabling it only for release build.")])],-1),P=n("h2",{id:"configuration-for-release-only",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuration-for-release-only","aria-hidden":"true"},"#"),s(" Configuration for Release-Only")],-1),V=n("p",null,"Booster provides many plugins, if you put all plugins into the classpath of Gradle build script, it will slow down the build performance and decrease the development efficiency, to avoid this, some plugins can be configured for release only by using the Gradle start parameter to distinguish the build type:",-1),j=n("div",{class:"language-groovy ext-groovy line-numbers-mode"},[n("pre",{class:"language-groovy"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br")])],-1),E=n("div",{class:"language-kotlin ext-kt line-numbers-mode"},[n("pre",{class:"language-kotlin"},[n("code",null,[s("buildscript "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"val"),s(" booster_version "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"4.6.0"')]),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br")])],-1);function F(R,S){const t=l("CodeGroupItem"),o=l("CodeGroup"),i=l("ExternalLinkIcon");return r(),p(u,null,[k,d,g,a(o,null,{default:e(()=>[a(t,{title:"Groovy",active:""},{default:e(()=>[m]),_:1}),a(t,{title:"Kotlin"},{default:e(()=>[h]),_:1})]),_:1}),_,a(o,null,{default:e(()=>[a(t,{title:"Groovy",active:""},{default:e(()=>[f]),_:1}),a(t,{title:"Kotlin"},{default:e(()=>[v]),_:1})]),_:1}),y,x,n("p",null,[C,G,w,n("a",$,[B,a(i)]),N]),a(o,null,{default:e(()=>[a(t,{title:"Groovy",active:""},{default:e(()=>[I]),_:1}),a(t,{title:"Kotlin"},{default:e(()=>[A]),_:1})]),_:1}),K,P,V,a(o,null,{default:e(()=>[a(t,{title:"Groovy",active:""},{default:e(()=>[j]),_:1}),a(t,{title:"Kotlin"},{default:e(()=>[E]),_:1})]),_:1})],64)}var W=c(b,[["render",F],["__file","getting-started.html.vue"]]);export{W as default};

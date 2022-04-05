import{_ as o,r as e,o as p,c as r,a as s,b as t,F as c,e as n,d as l}from"./app.c0ab1dc6.js";const i={},u=s("h1",{id:"bytecode-manipulation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bytecode-manipulation","aria-hidden":"true"},"#"),n(" Bytecode Manipulation")],-1),k=s("h2",{id:"transformer",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#transformer","aria-hidden":"true"},"#"),n(" Transformer")],-1),m=n("\u5728 "),d=s("em",null,"Booster",-1),b=n(" \u4E2D\uFF0C\u8DDF\u5B57\u8282\u7801\u76F8\u5173\u7684\u64CD\u4F5C\u90FD\u662F\u901A\u8FC7 "),f={href:"https://github.com/didi/booster/blob/master/booster-transform-spi/src/main/kotlin/com/didiglobal/booster/transform/Transformer.kt",target:"_blank",rel:"noopener noreferrer"},_=n("Transformer"),h=n(" \u6765\u5B8C\u6210\uFF0C\u5B83\u662F\u5BF9\u5B57\u8282\u7801\u8F6C\u6362\u7684\u7B80\u5355\u62BD\u8C61\uFF0C\u4EE5\u5B57\u8282\u7801\u7684\u4E8C\u8FDB\u5236\u505A\u4E3A\u8F93\u5165\uFF0C\u7ECF\u8FC7\u8F6C\u6362\u540E\uFF0C\u8F93\u51FA\u5B57\u8282\u7801\u4E8C\u8FDB\u5236\uFF0C\u5B83\u4E0E\u5177\u4F53\u4F7F\u7528\u54EA\u79CD\u5B57\u8282\u7801\u64CD\u4F5C\u6846\u67B6\u65E0\u5173\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u81EA\u5DF1\u9009\u62E9\u8DDF\u5B57\u8282\u7801\u64CD\u4F5C\u6846\u67B6\u76F8\u5173\u7684\u7279\u5B9A\u5B9E\u73B0\uFF0C "),g=s("em",null,"Booster",-1),T=n(" \u63D0\u4F9B\u4E86\u4E24\u79CD\u5B9E\u73B0\uFF1A"),v=n("\u57FA\u4E8E "),y=s("em",null,"ASM",-1),x=n(" \u7684\u5B9E\u73B0\uFF1A"),w={href:"https://github.com/didi/booster/blob/master/booster-transform-asm/src/main/kotlin/com/didiglobal/booster/transform/asm/AsmTransformer.kt",target:"_blank",rel:"noopener noreferrer"},C=n("AsmTransformer"),B=n("\u57FA\u4E8E "),L=s("em",null,"Javassist",-1),A=n(" \u7684\u5B9E\u73B0\uFF1A"),j={href:"https://github.com/didi/booster/blob/master/booster-transform-javassist/src/main/kotlin/com/didiglobal/booster/transform/javassist/JavassistTransformer.kt",target:"_blank",rel:"noopener noreferrer"},E=n("JavassistTransformer"),J=s("h2",{id:"custom-transformer",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#custom-transformer","aria-hidden":"true"},"#"),n(" Custom Transformer")],-1),P=n("\u9664\u4E86 "),S={href:"https://github.com/didi/booster/blob/master/booster-transform-asm/src/main/kotlin/com/didiglobal/booster/transform/asm/AsmTransformer.kt",target:"_blank",rel:"noopener noreferrer"},q=n("AsmTransformer"),N=n(" \u548C "),V={href:"https://github.com/didi/booster/blob/master/booster-transform-javassist/src/main/kotlin/com/didiglobal/booster/transform/javassist/JavassistTransformer.kt",target:"_blank",rel:"noopener noreferrer"},I=n("JavassistTransformer"),M=n(" \u5916\uFF0C"),F=s("em",null,"Booster",-1),O=n(" \u5141\u8BB8\u5F00\u53D1\u8005\u5B9E\u73B0\u81EA\u5DF1\u7684 "),D={href:"https://github.com/didi/booster/blob/master/booster-transform-spi/src/main/kotlin/com/didiglobal/booster/transform/Transformer.kt",target:"_blank",rel:"noopener noreferrer"},z=n("Transformer"),G=n("\uFF0C\u4EE5 "),H={href:"http://commons.apache.org/proper/commons-bcel/",target:"_blank",rel:"noopener noreferrer"},K=n("Apache Commons BCEL"),Q=n(" \u4E3A\u4F8B\uFF1A"),R=l(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">interface</span> ClassTransformer <span class="token operator">:</span> TransformerListener <span class="token punctuation">{</span>

    <span class="token keyword">fun</span> <span class="token function">transform</span><span class="token punctuation">(</span>context<span class="token operator">:</span> TransformContext<span class="token punctuation">,</span> klass<span class="token operator">:</span> JavaClass<span class="token punctuation">)</span> <span class="token operator">=</span> klass

<span class="token punctuation">}</span>

<span class="token annotation builtin">@AutoService</span><span class="token punctuation">(</span>Transformer<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token function">BcelTransformer</span><span class="token punctuation">(</span><span class="token keyword">val</span> classLoader<span class="token operator">:</span> ClassLoader<span class="token punctuation">)</span> <span class="token operator">:</span> Transformer <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">val</span> transformers <span class="token operator">=</span> ServiceLoader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>ClassTransformer<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java<span class="token punctuation">,</span> classLoader<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sortedBy</span> <span class="token punctuation">{</span>
        it<span class="token punctuation">.</span>javaClass<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span>Priority<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span>value <span class="token operator">?:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onPreTransform</span><span class="token punctuation">(</span>context<span class="token operator">:</span> TransformContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>transformers<span class="token punctuation">.</span><span class="token function">forEach</span> <span class="token punctuation">{</span> transformer <span class="token operator">-&gt;</span>
            transformer<span class="token punctuation">.</span><span class="token function">onPreTransform</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onPostTransform</span><span class="token punctuation">(</span>context<span class="token operator">:</span> TransformContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>transformers<span class="token punctuation">.</span><span class="token function">forEach</span> <span class="token punctuation">{</span> transformer <span class="token operator">-&gt;</span>
            transformer<span class="token punctuation">.</span><span class="token function">onPostTransform</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">transform</span><span class="token punctuation">(</span>context<span class="token operator">:</span> TransformContext<span class="token punctuation">,</span> bytecode<span class="token operator">:</span> ByteArray<span class="token punctuation">)</span><span class="token operator">:</span> ByteArray <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">ClassParser</span><span class="token punctuation">(</span>bytecode<span class="token punctuation">.</span><span class="token function">inputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span> <span class="token punctuation">{</span> klass <span class="token operator">-&gt;</span>
            <span class="token function">TODO</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Transform JavaClass with BCEL&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5E26 <code>ClassLoader</code> \u53C2\u6570\u7684\u6784\u9020\u65B9\u6CD5\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u4F46\u4F1A\u5F71\u54CD\u5728 <em>BcelTransformer</em> \u4E2D\u901A\u8FC7 <code>ServiceLoader</code> \u52A0\u8F7D\u81EA\u5B9A\u4E49\u7684 <em>ClassTransformer</em>\u3002</p></div>`,2);function U(W,X){const a=e("ExternalLinkIcon");return p(),r(c,null,[u,k,s("p",null,[m,d,b,s("a",f,[_,t(a)]),h,g,T]),s("ol",null,[s("li",null,[v,y,x,s("a",w,[C,t(a)])]),s("li",null,[B,L,A,s("a",j,[E,t(a)])])]),J,s("p",null,[P,s("a",S,[q,t(a)]),N,s("a",V,[I,t(a)]),M,F,O,s("a",D,[z,t(a)]),G,s("a",H,[K,t(a)]),Q]),R],64)}var Z=o(i,[["render",U],["__file","bytecode-manipulation.html.vue"]]);export{Z as default};

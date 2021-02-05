/*
=========================================================
Custom Strike - v1.0.1
=========================================================

© Copyright 2021
The use of this code is not permitted anywhere but CUSTOM-STRIKE.COM AND OR GITHUB REPO CUSTOM-STRIKE. Find more infomation at https://qutz.dev/code

Owned and maintained by Custom-Strike.
Developed by qutz (https://qutz.dev/#fh5co-work)

=========================================================

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const charactersList=document.getElementById("charactersList"),searchBar=document.getElementById("searchBar"),pageText=document.querySelector(".pageNum"),pageTextBottom=document.querySelector(".pageNumBottom");let hpCharacters=[];var pageNum=1,minVal=0;let linkText,addonDataArray=[];var inc;function page(n){charactersList.hasChildNodes(),(pageNum=n)<1&&(pageNum=1),pageination(),loadCharacters()}function search(){const n=searchBar.value.toLowerCase();displayCharacters(hpCharacters.filter(a=>{return(a.name.replaceAll("-"," ")+" "+a.description).toLowerCase().includes(n)}))}const loadCharacters=async()=>{try{const n=await fetch("https://api.github.com/orgs/testing-with-qutz/repos?page="+pageNum),a=(hpCharacters=await n.json()).filter(n=>!n.name.toLowerCase().startsWith("h-"));hpCharacters=a,displayCharacters(a)}catch(n){console.error(n)}};let linkName;var clause4,num=0,numhow=1;function pageination(){$(".stylg").empty(),$(".stylg").append(` <style>\n    .c${pageNum} {\n        color: #fff;\n    }\n    </style>`),1===numhow?(numhow++,clause4=pageNum<3?`\n            <div class="pagination">\n              <a class=drip onclick="page(${pageNum-1});" href="#"><</a>\n              <a class="c1 drip" onclick="page(1);" href="#">1</a>\n              <a class="c2 drip" onclick="page(2);" href="#">2</a>\n              <a class="c3 drip" onclick="page(3);" href="#">3</a>\n              <a class="c4 drip" onclick="page(4);" href="#">4</a>\n              <a class=drip onclick="page(${pageNum+1});" href="#">></a>\n            </div>`:`\n            <div class="pagination">\n                <a class=drip onclick="page(${pageNum-1});" href="#"><</a>\n                <a class=drip onclick="page(${pageNum-1});" href="#">${pageNum-1}</a>\n                <a class=active onclick="page(${pageNum});" href="#">${pageNum}</a>\n                <a class=drip onclick="page(${pageNum+1});" href="#">${pageNum+1}</a>\n                <a class=drip onclick="page(${pageNum+2});" href="#">${pageNum+2}</a>\n                <a class=drip onclick="page(${pageNum+1});" href="#">></a>\n\n           </div>`,$(clause4).appendTo(".sad")):($(".sad").empty(),numhow++,clause4=pageNum<3?`\n            <div class="pagination">\n              <a class=drip onclick="page(${pageNum-1});" href="#"><</a>\n              <a class="c1 drip" onclick="page(1);" href="#">1</a>\n              <a class="c2 drip" onclick="page(2);" href="#">2</a>\n              <a class="c3 drip" onclick="page(3);" href="#">3</a>\n              <a class="c4 drip" onclick="page(4);" href="#">4</a>\n              <a class=drip onclick="page(${pageNum+1});" href="#">></a>\n            </div>`:`\n            <div class="pagination">\n                <a class=drip onclick="page(${pageNum-1});" href="#"><</a>\n                <a class=drip onclick="page(${pageNum-1});" href="#">${pageNum-1}</a>\n                <a class=active onclick="page(${pageNum});" href="#">${pageNum}</a>\n                <a class=drip onclick="page(${pageNum+1});" href="#">${pageNum+1}</a>\n                <a class=drip onclick="page(${pageNum+2});" href="#">${pageNum+2}</a>\n                <a class=drip onclick="page(${pageNum+1});" href="#">></a>\n\n           </div>`,$(clause4).appendTo(".sad"))}function displayCharacters(n){0===num?(num++,Object.entries(n).forEach(([n,a])=>{let e="https://raw.githubusercontent.com/testing-with-qutz/"+a.name+"/main/config.json";fetch(e).then(n=>n.json()).then(n=>{null===a.description&&(a.description="");let e=a.html_url+"/archive/main.zip";var s=a.description.replace(/^(.{30}[^ ]*).*/,"$1..."),t=new showdown.Converter;s=t.makeHtml(s),desc1=t.makeHtml(a.description);var i="https://raw.githubusercontent.com/testing-with-qutz/"+a.name+"/main/thumbnail.jpeg";$(`        <div class='card'>\n                    <div class='card-body'>\n                        <div class='card-text'>\n                        <a class="title-name" onclick="myQuack('${a.name}', '${e}', '${i}', '${desc1}'); return false;" style="cursor:pointer;"> ${n.name}</a>\n                            ${s}\n                        </div>\n                        <p class=kkk>Replaces: ${n.replacement}</p>\n                    </div>\n                    <img src='${i}' onerror="this.onerror=null; this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';">\n                    </div>\n            \n            \n                    <style>\n                        .no-content {\n                            display: none;\n                        }\n            \n                        .page-select-bottom {\n                            display: flex;\n                        }\n                    </style>`).appendTo(".containerCard")})})):($(".containerCard").empty(),Object.entries(n).forEach(([n,a])=>{let e="https://raw.githubusercontent.com/testing-with-qutz/"+a.name+"/main/config.json";fetch(e).then(n=>n.json()).then(n=>{null===a.description&&(a.description="");let e=a.html_url+"/archive/main.zip";var s=a.description.replace(/^(.{30}[^ ]*).*/,"$1..."),t=new showdown.Converter;s=t.makeHtml(s),desc1=t.makeHtml(a.description);var i="https://raw.githubusercontent.com/testing-with-qutz/"+a.name+"/main/thumbnail.jpeg";$(`\n                    <div class='card'>\n                    <div class='card-body'>\n                        <div class='card-text'>\n                        <a class="title-name" onclick="myQuack('${a.name}', '${e}', '${i}', '${desc1}'); return false;" style="cursor:pointer;"> ${n.name}</a>\n                            ${s}\n                        </div>\n                        <p class=kkk>Replaces: ${n.replacement}</p>\n                    </div>\n                    <img src='${i}' onerror="this.onerror=null; this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';">\n                    </div>\n            \n            \n                    <style>\n                        .no-content {\n                            display: none;\n                        }\n            \n                        .page-select-bottom {\n                            display: flex;\n                        }\n                    </style>`).appendTo(".containerCard")})}))}pageination(),loadCharacters();var myQuack=async function(n,a,e,s){var t;document.querySelector("body").innerHTML='<style>\n    .lds-dual-ring {\n        display: inline-block;\n        width: 80px;\n        height: 80px;\n      }\n      .lds-dual-ring:after {\n        content: " ";\n        display: block;\n        width: 64px;\n        height: 64px;\n        margin: 8px;\n        border-radius: 50%;\n        border: 6px solid #fff;\n        border-color: #fff transparent #fff transparent;\n        animation: lds-dual-ring 1.2s linear infinite;\n      }\n      @keyframes lds-dual-ring {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n\n      .ca {\n        margin: 0;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -ms-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n  \n      }\n\n      </style>\n\n      <div class="ca">\n\n        <div class="lds-dual-ring"></div>\n      </div>\n      ',await(t=250,new Promise(n=>setTimeout(n,t))),myFunc(n,a,e,s)},myFunc=function(n,a,e,s){fetch("https://raw.githubusercontent.com/testing-with-qutz/"+n+"/main/config.json").then(n=>n.json()).then(t=>{var i=`\n        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navigation w-nav">\n        <div class="navigation-wrap">\n            <div class="logo-link w-nav-brand w--current">\n                <h1 class="heading">CUSTOM-STRIKE</h1>\n                <a href="https://discord.gg/PNgpSszYJk" class="logo-link w-nav-brand w--current">\n                    <img src="./img/discord.svg" loading="lazy" width="40" alt="" class="image-5" />\n                </a>\n            </div>\n            <div class="menu">\n                <nav role="navigation" class="navigation-items w-nav-menu">\n                    <a href="" class="current w-nav-link current">addons</a>\n                    <a href="https://wiki.custom-strike.com" class="navigation-item w-nav-link">tutorials</a>\n                </nav>\n                <div class="menu-button w-nav-button">\n                    <img src="./img/menu-icon.png" width="22" loading="eager" alt="" class="menu-icon" />\n                </div>\n            </div>\n            <a href="https://github.com/custom-strike"\n                class="button cc-contact-us w-inline-block">\n                <img src="./img/line.svg" loading="lazy" height="12" width="10" alt="" class="image-4" />\n                <img src="./img/line.svg" loading="lazy" height="12" width="10" alt="" class="image-4-copy" />\n                <div class="text-block-2">upload</div>\n            </a>\n        </div>\n        </div>\n        <div class="w-row">\n        <div class="w-col w-col-6"><a href="./index.html" class="link zin">Back to addons.</a>\n        </div>\n\n        <div class="w-col w-col-6">\n            <h1 class="heading-2">${t.name}</h1>\n            <p class=replace>Replaces: ${t.replacement}</p>\n            <img src="./img/pink-line.svg" loading="lazy" alt="" class="image-7" />\n        </div>\n        </div>\n\n        <div class="w-row">\n        <div class="column w-col w-col-5">\n        <style>\n        .eh {\n            padding-left: 40px;\n        }\n        </style>\n        </head>\n        <body>\n        <div class=eh>\n\n            <div class="fotorama" data-nav="thumbs">\n            </div>\n        <p class="paragraph">\n            ${s}\n        </p>\n        </div>\n\n            </div>\n            <br>\n            \n        <div class="column w-col w-col-7">\n            <div class="text-block-3">\n            by:\n                \n            </div>\n\n            <img\n                src="${e}"\n                loading="lazy"\n                width="215"\n                sizes="(max-width: 479px) 90vw, 215px"\n                srcset="\n                ${e} 500w,\n                ${e}        800w\n                "\n                alt="No thumbnail"\n                class="image-8"\n            />\n\n            <a href="${a}" class="button-copy cc-contact-us-copy">\n                <img src="./img/download.png" loading="lazy" height="20" width="20" alt="" class="image-4-copy-copy" />\n                <div class="text-block-2">download</div>\n            </a>\n            \n        </div>\n\n        </div>\n\n        `,c=0;if(document.querySelector("body").innerHTML=i,$(window).width()<515){document.querySelector("body").innerHTML='\n            <style>\n            .ca {\n                margin: 0;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                -ms-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n          \n              }\n        \n              </style>\n        \n              <div class="ca">\n        \n                <h2>Sorry your browser size is too small</h2>\n              </div>\n        \n            '}$(window).resize(function(){if($(window).width()<515){c=1;document.querySelector("body").innerHTML='\n                <style>\n                .ca {\n                    margin: 0;\n                    position: absolute;\n                    top: 50%;\n                    left: 50%;\n                    -ms-transform: translate(-50%, -50%);\n                    transform: translate(-50%, -50%);\n              \n                  }\n            \n                  </style>\n            \n                  <div class="ca">\n            \n                    <h2>Sorry your browser size is too small</h2>\n                  </div>\n            \n                '}else{if(1!=c)return;c=0;var i=`\n                <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navigation w-nav">\n                <div class="navigation-wrap">\n                    <div class="logo-link w-nav-brand w--current">\n                        <h1 class="heading">CUSTOM-STRIKE</h1>\n                        <a href="https://discord.gg/PNgpSszYJk" class="logo-link w-nav-brand w--current">\n                            <img src="./img/discord.svg" loading="lazy" width="40" alt="" class="image-5" />\n                        </a>\n                    </div>\n                    <div class="menu">\n                        <nav role="navigation" class="navigation-items w-nav-menu">\n                            <a href="" class="current w-nav-link current">addons</a>\n                            <a href="https://wiki.custom-strike.com" class="navigation-item w-nav-link">tutorials</a>\n                        </nav>\n                        <div class="menu-button w-nav-button">\n                            <img src="./img/menu-icon.png" width="22" loading="eager" alt="" class="menu-icon" />\n                        </div>\n                    </div>\n                    <a href="https://github.com/custom-strike"\n                        class="button cc-contact-us w-inline-block">\n                        <img src="./img/line.svg" loading="lazy" height="12" width="10" alt="" class="image-4" />\n                        <img src="./img/line.svg" loading="lazy" height="12" width="10" alt="" class="image-4-copy" />\n                        <div class="text-block-2">upload</div>\n                    </a>\n                </div>\n                </div>\n                <div class="w-row">\n                <div class="w-col w-col-6"><a href="./index.html" class="link zin">Back to addons.</a>\n                </div>\n        \n                <div class="w-col w-col-6">\n                    <h1 class="heading-2">${t.name}</h1>\n                    <p class=replace>Replaces: ${t.replacement}</p>\n                    <img src="./img/pink-line.svg" loading="lazy" alt="" class="image-7" />\n                </div>\n                </div>\n        \n                <div class="w-row">\n                <div class="column w-col w-col-5">\n                <style>\n                .eh {\n                    padding-left: 40px;\n                }\n                </style>\n                </head>\n                <body>\n                <div class=eh>\n        \n                    <div class="fotorama" data-nav="thumbs">\n                    </div>\n                <p class="paragraph">\n                    ${s}\n                </p>\n                </div>\n        \n                    </div>\n                    <br>\n                    \n                <div class="column w-col w-col-7">\n                    <div class="text-block-3">\n                    by:\n                        \n                    </div>\n        \n                    <img\n                        src="${e}"\n                        loading="lazy"\n                        width="215"\n                        sizes="(max-width: 479px) 90vw, 215px"\n                        srcset="\n                        ${e} 500w,\n                        ${e}        800w\n                        "\n                        alt="No thumbnail"\n                        class="image-8"\n                    />\n        \n                    <a href="${a}" class="button-copy cc-contact-us-copy">\n                        <img src="./img/download.png" loading="lazy" height="20" width="20" alt="" class="image-4-copy-copy" />\n                        <div class="text-block-2">download</div>\n                    </a>\n                    \n                </div>\n        \n                </div>\n        \n                `;document.querySelector("body").innerHTML=i,$.getScript("./js/script2.min.js");let p=0,m=0,g=0;Object.entries(t.authors).forEach(([n,a])=>{var e,s=a.social,i=a.name,c=a.role;if(m+=i.length,p++,m>25){if(p===t.authors.length){g++;var l=JSON.stringify(t);return void $(".text-block-3").append(" <span class=abc ><a onclick='a("+l+")'>& "+g+" more</a></span>")}g++}else e=void 0===s?1===p?`<span class=abc title="${c}">${i}</span>`:`<span class=abc title="${c}" >, ${i}</span>`:1===p?`<span class=abc title="${c}"><a href="${s}">${i}</a></span>`:`<span class=abc title="${c}">, <a href="${s}">${i}</a></span>`,$(".text-block-3").append(e)});for(var l=0,r=0;r<33;r++){var o="https://raw.githubusercontent.com/testing-with-qutz/"+n+"/main/screenshots/screenshot"+ ++l+".png";if(200!=(d=o,jQuery.ajax({type:"HEAD",url:d,async:!1}).status)){$.getScript("https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js");break}$(`<a href="${o}"><img src="${o}" width="144" height="96"></a>`).appendTo($(".fotorama"))}}var d}),$.getScript("./js/script2.min.js");let l=0,r=0,o=0;function d(n){return jQuery.ajax({type:"HEAD",url:n,async:!1}).status}Object.entries(t.authors).forEach(([n,a])=>{var e,s=a.social,i=a.name,c=a.role;if(r+=i.length,l++,r>25){if(l===t.authors.length){o++;var d=JSON.stringify(t);return void $(".text-block-3").append(" <span class=abc ><a onclick='a("+d+")'>& "+o+" more</a></span>")}o++}else e=void 0===s?1===l?`<span class=abc title="${c}">${i}</span>`:`<span class=abc title="${c}" >, ${i}</span>`:1===l?`<span class=abc title="${c}"><a href="${s}">${i}</a></span>`:`<span class=abc title="${c}">, <a href="${s}">${i}</a></span>`,$(".text-block-3").append(e)});for(var p=0,m=0;m<33;m++){var g="https://raw.githubusercontent.com/testing-with-qutz/"+n+"/main/screenshots/screenshot"+ ++p+".png";if(200!=d(g)){$.getScript("https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js");break}$(`<a href="${g}"><img src="${g}" width="144" height="96"></a>`).appendTo($(".fotorama"))}})};function a(n){$("span.abc").remove();let a=0;Object.entries(n.authors).forEach(([n,e])=>{var s,t=e.social,i=e.name,c=e.role;a++,s=void 0===t?1===a?`<span class=abc title="${c}">${i}</span>`:`<span class=abc title="${c}">, ${i}</span>`:1===a?`<span class=abc title="${c}"><a href="${t}">${i}</a></span>`:`<span class=abc title="${c}">, <a href="${t}">${i}</a></span>`,$(".text-block-3").append(s)})}
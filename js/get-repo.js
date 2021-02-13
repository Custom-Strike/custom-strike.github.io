/*!
 * =========================================================
 * Custom Strike - v1.0.1
 * =========================================================
 * 
 * © Copyright 2021
 * The use of this code is not permitted anywhere but Custom-Strike.COM AND OR GITHUB REPO Custom-Strike. Find more infomation at https://qutz.dev/code
 * 
 * Owned and maintained by qutz.
 * Developed by qutz (https://qutz.dev/#fh5co-work)
 * 
 * =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */


const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
const pageText = document.querySelector('.pageNum');
const pageTextBottom = document.querySelector('.pageNumBottom');
let hpCharacters = [];
var pageNum = 1;
var minVal = 0;
let addonDataArray = [];
let linkText;
var inc;


//get pages function
function page() {
    pageNum++
    loadCharacters();
}
//search feature

function search() {
    
    const searchString = searchBar.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        var cn = character.name.replaceAll("-", " ")
        var ns = cn + " " + character.description
        return (
            ns.toLowerCase().includes(searchString)
        );
    });


    displayCharacters(filteredCharacters);
}

//gets api info
const loadCharacters = async () => {
    try {
        const res = await fetch('https://api.github.com/orgs/Custom-Strike/repos?page=' + pageNum);
        hpCharacters = await res.json();
        if (hpCharacters === undefined)  {
            console.log(hpCharacters)
        }
        const filteredCharacters = hpCharacters.filter((character) => {
            return (
                !character.name.toLowerCase().startsWith("h-as")
            );
        });
        hpCharacters = filteredCharacters
        displayCharacters(filteredCharacters);
    } catch (err) {
        console.error(err);
    }
};

let linkName;

    
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 0) {
        page();
    }
 });
 
var num = 0
function displayCharacters(characters) {
    Object.entries(characters).forEach(([key, val]) => {
        try {
            redo('https://raw.githubusercontent.com/Custom-Strike/' + val.name + '/main/config.json', 0)
            function redo(url, stp) {
                fetch(url)
                .then(res => res.json())
                .then((mydata) => {
                    if(val.description === null) {
                        val.description = '';
                    }
    
                    let download_url = val.html_url + '/archive/main.zip';
    
                    var desc = val.description.replace(/^(.{30}[^ ]*).*/, '$1...');
    
                    var convert = new showdown.Converter();
                    desc = convert.makeHtml(desc);
                    desc1 = convert.makeHtml(val.description);
    
                    //thumbnail url
                    var tU1 = "https://raw.githubusercontent.com/Custom-Strike/" + val.name;
                    var tU2 = tU1 + "/main/thumbnail." + "jpeg"; 
    
                    $( `        <div class='card'>
                    <div class='card-body'>
                        <div class='card-text'>
                        <a class="title-name" onclick="myQuack('${val.name}', '${download_url}', '${tU2}', '${desc1}'); return false;" style="cursor:pointer;"> ${mydata.name}</a>
                            ${desc}
                        </div>
    
                        <p class=kkk>Replaces: ${mydata.replacement}</p>
                    </div>
                    <img src='${tU2}' onerror="this.onerror=null; this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';">
                    </div>
            
            
                    <style>
                        .no-content {
                            display: none;
                        }
            
                        .page-select-bottom {
                            display: flex;
                        }
                    </style>` ).appendTo( ".containerCard" );  
                })
                .catch(err => {
                    if (stp === 1){
                        return;
                    }
                    var done = 0;
                    $.getJSON(`https://api.github.com/repos/Custom-Strike/${val.name}/contents/`, function(data) {
                        Object.entries(data).forEach(([key, aa]) => {
                            if (aa.name.includes("p_")) {
                                if (done === 0) {
                                    done = 1;
                                    redo('https://raw.githubusercontent.com/Custom-Strike/' + val.name + '/main/' + aa.name + '/config.json', 1);
                                }
                            }
                        })
                    });
                });
    
            }
    } catch {
        return;
    }

    });


}

loadCharacters();

var myQuack = async function (name, dl_link, thumb, desc) {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }


    var quack = `<style>
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
      }
      .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .ca {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
  
      }

      </style>

      <div class="ca">

        <div class="lds-dual-ring"></div>
      </div>
      `
      

    document.querySelector('body').innerHTML = quack;
    
    await sleep(250);


    myFunc(name, dl_link, thumb, desc);

}


var myFunc = function (name, dl_link, thumb, desc) {

    let url = 'https://raw.githubusercontent.com/Custom-Strike/' + name + '/main/config.json';

    fetch(url)
    .then(res => res.json())
    .then((mydata) => {

        var ihn = `
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navigation w-nav">
        <div class="navigation-wrap">
            <div class="logo-link w-nav-brand w--current">
                <h1 class="heading">Custom-Strike</h1>
                <a href="https://discord.gg/PNgpSszYJk" class="logo-link w-nav-brand w--current">
                    <img src="./img/discord.svg" loading="lazy" width="40" alt="" class="image-5" />
                </a>
            </div>
            <div class="menu">
                <nav role="navigation" class="navigation-items w-nav-menu">
                    <a href="" class="current w-nav-link current">addons</a>
                    <a href="https://wiki.Custom-Strike.com" class="navigation-item w-nav-link">tutorials</a>
                    <a href="https://github.com/Custom-Strike" class="navigation-item w-nav-link mobhid">upload</a>
                </nav>
                <div class="menu-button w-nav-button">
                    <img src="./img/menu-icon.png" width="22" loading="eager" alt="" class="menu-icon" />
                </div>
            </div>
            <a href="https://github.com/Custom-Strike"
                class="button cc-contact-us w-inline-block">
                <img src="./img/line.svg" loading="lazy" height="12" width="10" alt="" class="image-4" />
                <img src="./img/line.svg" loading="lazy" height="12" width="10" alt="" class="image-4-copy" />
                <div class="text-block-2">upload</div>
            </a>
        </div>
        </div>
        <div class="w-row">
        <div class="w-col w-col-6"><a href="./index.html" class="link zin">Back to addons.</a>
        </div>

        <div class="w-col w-col-6">
            <h1 class="heading-2">${mydata.name}</h1>
            <p class=replace>Replaces: ${mydata.replacement}</p>
            <img src="./img/pink-line.svg" loading="lazy" alt="" class="image-7" />
        </div>
        </div>

        <div class="w-row">
        <div class="column w-col w-col-5">
        <style>
        .eh {
            padding-left: 40px;
        }
        </style>
        </head>
        <body>
        <div class=eh>

            <div class="fotorama" data-nav="thumbs">
            </div>
        <p class="paragraph">
            ${desc}
        </p>
        </div>

            </div>
            <br>
            
        <div class="column w-col w-col-7">
            <div class="text-block-3">
            by:
                
            </div>

            <img
                src="${thumb}"
                loading="lazy"
                width="215"
                sizes="(max-width: 479px) 90vw, 215px"
                srcset="
                ${thumb} 500w,
                ${thumb}        800w
                "
                alt="No thumbnail"
                class="image-8"
            />

            <a href="${dl_link}" class="button-copy cc-contact-us-copy">
                <img src="./img/download.png" loading="lazy" height="20" width="20" alt="" class="image-4-copy-copy" />
                <div class="text-block-2">download</div>
            </a>
            
        </div>

        </div>

        `
        var cat = 0
        document.querySelector('body').innerHTML = ihn;
        if ($(window).width() < 515) {
            var aa = `
            <style>
            .ca {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
          
              }
        
              </style>
        
              <div class="ca">
        
                <h2>Sorry your browser size is too small</h2>
              </div>
        
            `
            document.querySelector('body').innerHTML = aa;
         }
        $(window).resize(function() {
            if ($(window).width() < 515) {
                cat = 1
                var aa = `
                <style>
                .ca {
                    margin: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
              
                  }
            
                  </style>
            
                  <div class="ca">
            
                    <h2>Sorry your browser size is too small</h2>
                  </div>
            
                `
                document.querySelector('body').innerHTML = aa;
            }
            else {
                if (cat != 1) {
                    return;
                }
                cat = 0
                var ihn = `
                <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navigation w-nav">
                <div class="navigation-wrap">
                    <div class="logo-link w-nav-brand w--current">
                        <h1 class="heading">Custom-Strike</h1>
                        <a href="https://discord.gg/PNgpSszYJk" class="logo-link w-nav-brand w--current">
                            <img src="./img/discord.svg" loading="lazy" width="40" alt="" class="image-5" />
                        </a>
                    </div>
                    <div class="menu">
                        <nav role="navigation" class="navigation-items w-nav-menu">
                            <a href="" class="current w-nav-link current">addons</a>
                            <a href="https://wiki.Custom-Strike.com" class="navigation-item w-nav-link">tutorials</a>
                            <a href="https://github.com/Custom-Strike" class="navigation-item w-nav-link mobhid">upload</a>
                        </nav>
                        <div class="menu-button w-nav-button">
                            <img src="./img/menu-icon.png" width="22" loading="eager" alt="" class="menu-icon" />
                        </div>
                    </div>
                    <a href="https://github.com/Custom-Strike"
                        class="button cc-contact-us w-inline-block">
                        <img src="./img/line.svg" loading="lazy" height="12" width="10" alt="" class="image-4" />
                        <img src="./img/line.svg" loading="lazy" height="12" width="10" alt="" class="image-4-copy" />
                        <div class="text-block-2">upload</div>
                    </a>
                </div>
                </div>
                <div class="w-row">
                <div class="w-col w-col-6"><a href="./index.html" class="link zin">Back to addons.</a>
                </div>
        
                <div class="w-col w-col-6">
                    <h1 class="heading-2">${mydata.name}</h1>
                    <p class=replace>Replaces: ${mydata.replacement}</p>
                    <img src="./img/pink-line.svg" loading="lazy" alt="" class="image-7" />
                </div>
                </div>
        
                <div class="w-row">
                <div class="column w-col w-col-5">
                <style>
                .eh {
                    padding-left: 40px;
                }
                </style>
                </head>
                <body>
                <div class=eh>
        
                    <div class="fotorama" data-nav="thumbs">
                    </div>
                <p class="paragraph">
                    ${desc}
                </p>
                </div>
        
                    </div>
                    <br>
                    
                <div class="column w-col w-col-7">
                    <div class="text-block-3">
                    by:
                        
                    </div>
        
                    <img
                        src="${thumb}"
                        loading="lazy"
                        width="215"
                        sizes="(max-width: 479px) 90vw, 215px"
                        srcset="
                        ${thumb} 500w,
                        ${thumb}        800w
                        "
                        alt="No thumbnail"
                        class="image-8"
                    />
        
                    <a href="${dl_link}" class="button-copy cc-contact-us-copy">
                        <img src="./img/download.png" loading="lazy" height="20" width="20" alt="" class="image-4-copy-copy" />
                        <div class="text-block-2">download</div>
                    </a>
                    
                </div>
        
                </div>
        
                `
        
                document.querySelector('body').innerHTML = ihn;
                $.getScript("./js/script2.min.js");
                let a = 0;
                let n = 0;
                let x = 0;
        
        
        
                Object.entries(mydata.authors).forEach(([key, val]) => {
                    var url = val.social
                    var author = val.name
                    var role = val.role
                    var clause;
        
                    n = n + author.length;
        
                    a++;
        
        
                    if (n > 25) {
                        
                        if(a === mydata.authors.length) {
                            x++
                            var model = JSON.stringify(mydata)
                            $(".text-block-3").append(" <span class=abc ><a onclick='a(" + model + ")'>& "+ x +" more</a></span>");
                            return;
                        }
                        else{
                            x++
                            return;
                        }
                        
                    }
        
                    if (url === undefined) {
                        if (a === 1) {
                            clause = `<span class=abc title="${role}">${author}</span>`
                        } else {
                            clause = `<span class=abc title="${role}" >, ${author}</span>`
                        }  
                    }
                    else {
                        if (a === 1) {
                            clause = `<span class=abc title="${role}"><a href="${url}">${author}</a></span>`
                        } else {
                            clause = `<span class=abc title="${role}">, <a href="${url}">${author}</a></span>`
                        }  
                    }
        
                    $(".text-block-3").append(clause);
                });
        
                function urlExists(testUrl) {
                    var http = jQuery.ajax({
                       type:"HEAD",
                       url: testUrl,
                       async: false
                     })
                     return http.status;
                   }
                   
        
                var number = 0;
                for (var i = 0; i < 33; i++) {
            
                    number++
        
                    var url = "https://raw.githubusercontent.com/Custom-Strike/" + name + "/main/screenshots/screenshot" + number + "." + "png"
        
        
                    if(urlExists(url) == 200) {
                        $( `<a href="${url}"><img src="${url}" width="144" height="96"></a>` ).appendTo( $( ".fotorama" ) );
                    }
                    else {
                        $.getScript("https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js");
                        break;
                        }
                    }
        
                    
                    }
            }
          );
          $.getScript("./js/script2.min.js");


        let a = 0;
        let n = 0;
        let x = 0;



        Object.entries(mydata.authors).forEach(([key, val]) => {
            var url = val.social
            var author = val.name
            var role = val.role
            var clause;

            n = n + author.length;

            a++;


            if (n > 25) {
                
                if(a === mydata.authors.length) {
                    x++
                    var model = JSON.stringify(mydata)
                    $(".text-block-3").append(" <span class=abc ><a onclick='a(" + model + ")'>& "+ x +" more</a></span>");
                    return;
                }
                else{
                    x++
                    return;
                }
                
            }

            if (url === undefined) {
                if (a === 1) {
                    clause = `<span class=abc title="${role}">${author}</span>`
                } else {
                    clause = `<span class=abc title="${role}" >, ${author}</span>`
                }  
            }
            else {
                if (a === 1) {
                    clause = `<span class=abc title="${role}"><a href="${url}">${author}</a></span>`
                } else {
                    clause = `<span class=abc title="${role}">, <a href="${url}">${author}</a></span>`
                }  
            }

            $(".text-block-3").append(clause);
        });

        function urlExists(testUrl) {
            var http = jQuery.ajax({
               type:"HEAD",
               url: testUrl,
               async: false
             })
             return http.status;
           }
           

        var number = 0;
        for (var i = 0; i < 33; i++) {
    
            number++

            var url = "https://raw.githubusercontent.com/Custom-Strike/" + name + "/main/screenshots/screenshot" + number + "." + "png"


            if(urlExists(url) == 200) {
                $( `<a href="${url}"><img src="${url}" width="144" height="96"></a>` ).appendTo( $( ".fotorama" ) );
            }
            else {
                $.getScript("https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js");
                break;
                }
            }

            
        }

    
)};





function a(mydata){
    $('span.abc').remove();

    let a = 0;
    Object.entries(mydata.authors).forEach(([key, val]) => {
        var url = val.social
        var author = val.name
        var role = val.role
        var clause;

        a++;

        if (url === undefined) {
            if (a === 1) {
                clause = `<span class=abc title="${role}">${author}</span>`
            } else {
                clause = `<span class=abc title="${role}">, ${author}</span>`
            }  
        }
        else {
            if (a === 1) {
                clause = `<span class=abc title="${role}"><a href="${url}">${author}</a></span>`
            } else {
                clause = `<span class=abc title="${role}">, <a href="${url}">${author}</a></span>`
            }  
        }

        $(".text-block-3").append(clause);
      });


  }
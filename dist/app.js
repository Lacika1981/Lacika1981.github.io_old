var animatedProgressBar=function(){$(".progress div").each(function(){var a=$(this),t=$(this).attr("aria-valuenow");$(a).animate({width:t+"%"},{duration:250,width:"easing"})})},animatedDives=function(){var a=$("li.animated"),t=$(window);t.on("scroll resize",function(){var e=t.height(),i=t.scrollTop(),n=i+e;$.each(a,function(){var a=$(this),t=a.outerHeight(),e=a.offset().top;e+t>=i&&e<=n&&(a.hasClass("timeline-inverted")&&$(this).addClass("slideInRight"),a.hasClass("timeline")&&$(this).addClass("slideInLeft"))})}),t.trigger("scroll")},portfolioCall=function(a){$.ajax({url:"js/portfolio.json",dataType:"json"}).done(function(t){for(var e=t,i=Object.keys(e),n=0;n<i.length;n++)e[i[n]].githubImage="../images/mark-github.svg";var o='<h5 class="modal-title" id="exampleModalLongTitle">%data%</h5>'.replace("%data%",t[a].title),r='<p class="card-text">%data%</p>'.replace("%data%",t[a].body),s='<img class="img-fluid" src="%data%">'.replace("%data%",t[a].image),l='<a href="'+t[a].linkGitHub+'" target="_blank"><img class="img-fluid" src="%data%"></a>'.replace("%data%",t[a].githubImage);$(".modal-header").empty().append(o),$(".modal-body").empty().append(r).append(s),$(".gitHubIcon").empty().append(l)}).fail(function(){alert("Could not fetch data from server. Please refresh your browser and try again!")})},shortenCardText=function(){$("p.card-text").each(function(){var a=$(this)[0].innerText;if(a.length>40&&" "!=a.charAt(40)){var t=a.indexOf(" ",40),e=a.slice(0,t);$(this).empty().append(e+" ...")}})};$("body").scrollspy({target:"#navbar-example"}),$(document).on("click","button.modalCall",function(a){var t=a.target.getAttribute("data-jsonTarget");portfolioCall(t)}),$(function(){$(".menu img").click(function(){$(this).toggleClass("menuToggle"),$(".navbar").toggleClass("navbarToggle")})}),$(function(){$(window).width()<=800&&$(".timeline, .timeline-inverted").removeClass("animated")}),$(function(){$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(a.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var a=$(t);if(a.focus(),a.is(":focus"))return!1;a.attr("tabindex","-1"),a.focus()}))}})}),$(function(){animatedDives(),animatedProgressBar(),shortenCardText()});
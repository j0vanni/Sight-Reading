(this.webpackJsonpsightreading=this.webpackJsonpsightreading||[]).push([[0],{108:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(15),s=o.n(a),i=(o(54),o(36)),l=o(37),c=o(45),p=o(44),d=(o(55),{notesDisplayed:[],notesDisplayedOther:[],notesDisplayedString:"",correctNote:"placeholder",pianoClickedKey:"",indexd:0,opacity:0,rightorWrong:"placeholder",isSharp:!1,isFlat:!1,isTreble:!1,afterNote:"2",lastSpacing:0}),h=o(3),y=["c","d","e","f","g","a","b"],g=["cd","de","fg","ga","ab"];function f(){d.opacity=1,d.rightorWrong="Correct."}function u(){d.opacity=1,d.rightorWrong="Wrong."}function b(e,t,o){!function(e){var t=d.notesDisplayedString.replace("!mark!","");d.notesDisplayedString=t;var o=10;(e+1)%4===0&&0!==e&&d.lastSpacing++,!0===d.isTreble&&(o=33),d.notesDisplayedString=d.notesDisplayedString.insert(o+d.notesDisplayedOther[e].length+d.lastSpacing,"!mark!"),d.lastSpacing=d.notesDisplayedOther[e].length+d.lastSpacing}(t);var n=!1,r=!1,a=e[t].replace("2","");d.correctNote=e[t].replace("2",""),"^"===e[t].substring(0,1)?n=!0:"_"===e[t].substring(0,1)&&(r=!0),!0===n?function(e,t){var o=e.replace("^","").toUpperCase(),n=t.toUpperCase();d.correctNote="".concat(o," Sharp"),"C"===o&&"CD"===n||"D"===o&&"DE"===n||"E"===o&&"F"===n||"F"===o&&"FG"===n||"G"===o&&"GA"===n||"A"===o&&"AB"===n||"B"===o&&"C"===n?f():u()}(a,o):!0===r?function(e,t){var o=e.replace("_","").toUpperCase(),n=t.toUpperCase();d.correctNote="".concat(o," Flat"),"C"===o&&"B"===n||"D"===o&&"CD"===n||"E"===o&&"DE"===n||"F"===o&&"E"===n||"G"===o&&"FG"===n||"A"===o&&"GA"===n||"B"===o&&"AB"===n?f():u()}(a,o):o.toUpperCase()===e[t].replace("2","").toUpperCase()?f():u(),t++}function D(e){d.pianoClickedKey="",d.pianoClickedKey=e,b(d.notesDisplayedOther,d.indexd,d.pianoClickedKey),d.indexd++,d.opacity=1}String.prototype.insert=function(e,t){return e>0?this.substring(0,e)+t+this.substr(e):t+this};var j={blackkeys:{width:"25px",height:"100px",borderStyle:"solid",borderColor:"white",borderRadius:"5px",borderWidth:"2px",backgroundColor:"black"},whitekeys:{width:"50px",height:"200px",borderStyle:"solid",borderColor:"black",borderRadius:"5px",borderWidth:"2px",backgroundColor:"white"}},x=function(e){return Object(h.jsxs)("div",{style:{display:"flex",position:"absolute"},children:[y.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{style:j.whitekeys,onClick:function(){return D(e)}})},e)})),g.map((function(e,t){return Object(h.jsxs)("div",{style:{position:"absolute",left:"".concat((o=t+1,o>2?54*(o+1)-15:54*o-15),"px")},children:[Object(h.jsx)("div",{style:j.blackkeys,onClick:function(){return D(e)}}),e.at]},e);var o}))]})},S=o(128),O=o(127),C=o(126),m=o(38),N=["a","b","c","d","e","f","g","A","B","C","D","E","F","G"],k=(.25*window.innerWidth+151.198)/400;function v(e){var t=!1;if(d.lastSpacing=0,d.afterNoteDone=!1,d.opacity=0,d.notesDisplayed=[],d.notesDisplayedOther=[],d.isTreble?(d.afterNote=",,2",d.notesDisplayedString="[M: 4/4]\nV: V3 clef=bass\n[V: V3]"):(d.notesDisplayedString="[M: 4/4]\n",d.afterNote="2"),!1===d.isFlat&&!1===d.isSharp)for(var o=0;o<e;o++){o%4==0&&(d.notesDisplayedString+="|",t||(d.notesDisplayedString+="!mark!",t=!0));var n=Math.floor(Math.random()*N.length);d.notesDisplayed.push(N[n]),d.notesDisplayedOther.push(N[n]+d.afterNote),d.notesDisplayedString+=N[n]+d.afterNote}else if(!0===d.isFlat&&!1===d.isSharp)for(o=0;o<e;o++){o%4==0&&(d.notesDisplayedString+="|",t||(d.notesDisplayedString+="!mark!",t=!0));var r=Math.floor(2*Math.random()),a=(n=Math.floor(Math.random()*N.length),Math.floor(Math.random()*N.length));if(0===r){n=Math.floor(Math.random()*N.length);d.notesDisplayed.push(N[n]),d.notesDisplayedOther.push(N[n]+d.afterNote),d.notesDisplayedString+=N[n]+d.afterNote}else d.notesDisplayed.push(N[a]),d.notesDisplayedOther.push("_"+N[n]+d.afterNote),d.notesDisplayedString+="_"+N[n]+d.afterNote}else if(!1===d.isFlat&&!0===d.isSharp)for(o=0;o<e;o++){o%4==0&&(d.notesDisplayedString+="|",t||(d.notesDisplayedString+="!mark!",t=!0));r=Math.floor(2*Math.random()),n=Math.floor(Math.random()*N.length);var s=Math.floor(Math.random()*N.length);0===r?(d.notesDisplayed.push(N[n]),d.notesDisplayedOther.push(N[n]+d.afterNote),d.notesDisplayedString+=N[n]+d.afterNote):(d.notesDisplayed.push(N[s]),d.notesDisplayedOther.push("^"+N[s]+d.afterNote),d.notesDisplayedString+="^"+N[s]+d.afterNote)}else for(o=0;o<e;o++){o%4==0&&(d.notesDisplayedString+="|",t||(d.notesDisplayedString+="!mark!",t=!0));r=Math.floor(3*Math.random()),n=Math.floor(Math.random()*N.length),s=Math.floor(Math.random()*N.length),a=Math.floor(Math.random()*N.length);0===r?(d.notesDisplayed.push(N[n]),d.notesDisplayedOther.push(N[n]+d.afterNote),d.notesDisplayedString+=N[n],d.notesDisplayedString+=d.afterNote):1===r?(d.notesDisplayed.push(N[s]),d.notesDisplayedOther.push("^"+N[s]+d.afterNote),d.notesDisplayedString+="^"+N[s]+d.afterNote):(d.notesDisplayed.push(N[a]),d.notesDisplayedOther.push("_"+N[n]+d.afterNote),d.notesDisplayedString+="_"+N[n]+d.afterNote)}d.indexd=0,console.log(d.notesDisplayedString),console.log(d.notesDisplayedOther),console.log(d.notesDisplayed)}v(12);var M=function(e){Object(c.a)(o,e);var t=Object(p.a)(o);function o(e){var n;return Object(i.a)(this,o),(n=t.call(this,e)).state={opacity:d.opacity,rightorWrong:d.rightorWrong,notestoDisplay:d.notesDisplayedString},n}return Object(l.a)(o,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{style:{color:"white"},children:[Object(h.jsx)("p",{unselectable:"on",className:"answerDisplay",style:{display:"flex",justifyContent:"center"},children:"SIGHT READING PRACTICE"}),Object(h.jsx)("div",{style:{display:"flex",backgroundColor:"white",justifyContent:"center"},children:Object(h.jsx)(m.Notation,{notation:this.state.notestoDisplay,engraverParams:{scale:k}})}),Object(h.jsx)("p",{unselectable:"on",className:"answerDisplay",style:{display:"flex",opacity:d.opacity,justifyContent:"center"},children:this.state.rightorWrong}),Object(h.jsx)("p",{unselectable:"on",className:"answerDisplay",style:{display:"flex",opacity:d.opacity,justifyContent:"center"},children:d.correctNote.toUpperCase()}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center"},onClick:function(){return e.setState({opacity:d.opacity,rightorWrong:d.rightorWrong,notestoDisplay:d.notesDisplayedString})},children:Object(h.jsx)(x,{})}),Object(h.jsxs)("div",{style:{paddingTop:"200px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(S.a,{control:Object(h.jsx)(O.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},style:{color:"white"},onChange:function(){return d.isSharp=!d.isSharp}}),label:"Include Sharps"}),Object(h.jsx)(S.a,{control:Object(h.jsx)(O.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},style:{color:"white"},onChange:function(){return d.isFlat=!d.isFlat}}),label:"Include Flats"}),Object(h.jsx)(S.a,{control:Object(h.jsx)(O.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},style:{color:"white"},onChange:function(){return d.isTreble=!d.isTreble}}),label:"Bass Clef"})]}),Object(h.jsx)("div",{children:Object(h.jsx)(C.a,{variant:"contained",onClick:function(){v(12),e.setState({notestoDisplay:d.notesDisplayedString})},children:"New Notes"})})]})]})}}]),o}(r.a.Component);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))},54:function(e,t,o){},55:function(e,t,o){}},[[108,1,2]]]);
//# sourceMappingURL=main.572dd10c.chunk.js.map
/**
 * Created by heben on 2017/4/29.
 */

let jQuery = require('./jquery');
let {rnothtmlwhite,stripAndCollapse} = require('./regexp');

"use strict";

function getClass(el){
    return el.getAttribute && el.getAttribute("class") || [];
}

jQuery.fn.addClass = function(value){
    let classes,elem,cur,curValue,j,classz,finalValue;
    if(typeof value === 'string' && value) {
        classes = value.match(rnothtmlwhite) || [];
        while(elem = this[i++]){
            curValue = getClass(elem);
            cur = elem.nodeType === 1 && (" "+stripAndCollapse(curValue)+" ");
            if(cur){
                j=0;
                while(classz = classes[j++]){
                    if(cur.indexOf(" "+classz+" ") < 0){
                        finalValue += classz;
                    }
                }
                if(curValue !== finalValue){
                    elem.setAttribute("class",finalValue);
                }
            }
        }
    }
    return finalValue;
};

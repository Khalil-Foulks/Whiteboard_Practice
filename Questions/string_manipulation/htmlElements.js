/* 
===================================== HTML Elements ================================================================================================================

Have the function HTMLElements(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. The elements that will be used are: b, i, em, div, p. 

For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.

If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. 
If the string is not formatted properly, then it will only be one element that needs to be changed. 

For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into a <b>, the string would be properly formatted.  

====================================================================================================================================================================
*/

// look for a tag 
// then look from the end of the string to the start until you find matching tag
// if no match found return current tag
// if match found continue 
// if all matches found return true


function htmlElements(str){
    // create an obj to store the tags
    let tags = {
        "<div>":"</div>",
        "<b>":"</b>",
        "<i>":"</i>",
        "<em>":"</em>",
        "<p>":"</p>"
    }

    let tag = ''

    // loop through str
    for (i = 0; i < str.length; i++){
        // if str[i] = '/' the ramaing tags are closing 
        if (str[i] === '/'){
            // break loop
            break
        }

        // if str[i] = '<' then reset tag = '' 

        if (str[i] === '<'){
            tag = ''
        }

        // push cur char to tag
        tag += str[i]

        // console.log(tag)

        // at the end of the tag
        if(str[i] === '>'){
            // if the tag exists in tags
            // console.log(tag in tags)
            if(tag in tags){
                // search str for the matching closing tag and return tag if it cant be found
                if(!(str.includes(tags[tag]))){
                    return tag
                }
            }
        }
    }        
    // return true if every open tag has a closing
    return true
}

console.log(htmlElements("<div><b><p>hello world</b></p></div>"))

// let str1 = "<div><b><p>hello world</p></b></div>"            
// console.log(str1.includes("<dip>"))
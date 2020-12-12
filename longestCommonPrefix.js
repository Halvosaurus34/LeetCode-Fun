const strs = ["a"]

const longestCommonPrefix = function(strs) {
    let prefix = ""
    console.log("INPUT", strs[0])
    let check = true
    if (strs.length !== 0 && strs[0] !== "") {
        prefix += strs[0][0]
        console.log("INITIAL PREFIX ADD", prefix, strs[0][0])

    }
    // console.log(strs[0][prefix.length-1])
    while(check){
        if (strs.length == 0 || strs == ""){
            check = false
            return ""
        } 
        strs.forEach(function(el){

            if (prefix !== el.substring(0,prefix.length)){
                console.log("SUBSTRING", el.substring(0,prefix.length))
                prefix = prefix.slice(0,-1)
                check = false
            }
            console.log("CHECKING", prefix, "WITH", el.substring(0,prefix.length) , check)

        })
        if (check && strs[0][prefix.length]){
                prefix += strs[0][prefix.length]
                console.log("ADDED TO PREFIX", strs[0][prefix.length], "TO", prefix)
        } else {
            console.log("ANSWER", prefix)

            return prefix
        }

    }
    console.log("ANSWER", prefix)

    return prefix
};
console.log("RETURN ANSWER", longestCommonPrefix(strs))

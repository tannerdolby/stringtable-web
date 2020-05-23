/**
 * 
 * @param {Str} name Return the string length. Returns number of characters present in a given string. 
 */
export function getLength(name) {
    if (name) {
        var result = name.length;
    } else {
        result = "";
    }
    return `${result}`;
}

/**
 * 
 * @param {String} name Return the lowercase representation of string 
 */
export function getLowerCase(name) {
    return name.toLowerCase();
}

/**
 * 
 * @param {String} name Return the uppercase representation of string
 */
export function getUpperCase(name) {
    return name.toUpperCase();
}

/**
 * 
 * @param {String} name Return the input string title cased
 */
export function titleCaseStr(name) {
    let charArr = name.split(" ");
    let myArr = Array();
    for (let i = 0; i < charArr.length; i++) {
        var upper_item = charArr[i].substr(0, 1).toUpperCase();
        var tester = charArr[i].substr(1, charArr[i].length).toLowerCase();
        myArr.push(`${upper_item}${tester}`);
    }
    return myArr.join(" ");
}

/**
 * 
 * @param {String} name Return the first character of a given string
 */
export function getFirstChar(name) {
    if (name) {
        var result = name[0];
    } else {
        result = "";
    }
    return `${result}`;
}

/**
 * 
 * @param {String} name Return the last character of a given string
 */
export function getLastChar(name) {
    if (name) {
        var result = name[name.length - 1];
    } else {
        result = "";
    }
    return `${result}`;
}

/**
 * 
 * @param {String} name Return string with all leading/trailing space removed
 */
export function removeSpace(name) {
    return name.trim();
}

/**
 * 
 * @param {String} str Perform caesar cipher on input string (rot13)
 */
export function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return str
        .toUpperCase()
        .split("")
        .map(val => {
            const char = alphabet.indexOf(val);
            return char >= 0 ? alphabet[(char + 13) % 26] : char;
        })
        .join("");
}

/**
 * 
 * @param {String} str Convert string to camelCase
 */
export function toCamelCase(str) {
    return str.split(" ").map(function(word, index) {
        // If it is the first word make sure to lowercase all the chars.
        if (index === 0) {
            return word.toLowerCase();
        }
        // If it is not the first word only upper case the first char and lowercase the rest.
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(""); // dont forget to join the characters back together 
}

// Remember :) The charCodeAt() method returns the Unicode of the character at the specified index in a string.

/**
 * 
 * @param {String} str String to be converted to decimal ASCII
 */
export function toAscii(str) {
    return str.split("").map(val => val.charCodeAt(0)).join(" ");
}

/**
 * 
 * @param {String} str Convert ASCII/ANSI input to hexadecimal
 */
export function toHex(str) {
    return str.split("").map(val => val.charCodeAt(0).toString(16)).join(" ");
}


function BinaryHeap(scoreFunction){
    this.content = [];
    this.scoreFunction = scoreFunction;
}
  
BinaryHeap.prototype = {
    push: function(element) {
        // Add the new element to the end of the array.
        this.content.push(element);
        // Allow it to bubble up.
        this.bubbleUp(this.content.length - 1);
    },
  
    pop: function() {
        // Store the first element so we can return it later.
        var result = this.content[0];
        // Get the element at the end of the array.
        var end = this.content.pop();
        // If there are any elements left, put the end element at the
        // start, and let it sink down.
        if (this.content.length > 0) {
            this.content[0] = end;
            this.sinkDown(0);
        }
        return result;
    },
  
    remove: function(node) {
        var length = this.content.length;
        // To remove a value, we must search through the array to find
        // it.
        for (var i = 0; i < length; i++) {
            if (this.content[i] != node) continue;
            // When it is found, the process seen in 'pop' is repeated
            // to fill up the hole.
            var end = this.content.pop();
            // If the element we popped was the one we needed to remove,
            // we're done.
            if (i == length - 1) break;
            // Otherwise, we replace the removed element with the popped
            // one, and allow it to float up or sink down as appropriate.
            this.content[i] = end;
            this.bubbleUp(i);
            this.sinkDown(i);
            break;
        }
    },
  
    size: function() {
        return this.content.length;
    },
  
    bubbleUp: function(n) {
        // Fetch the element that has to be moved.
        var element = this.content[n], score = this.scoreFunction(element);
        // When at 0, an element can not go up any further.
        while (n > 0) {
        // Compute the parent element's index, and fetch it.
            var parentN = Math.floor((n + 1) / 2) - 1,
                parent = this.content[parentN];
            // If the parent has a lesser score, things are in order and we
            // are done.
            if (score >= this.scoreFunction(parent))
                break;
  
            // Otherwise, swap the parent with the current element and
            // continue.
            this.content[parentN] = element;
            this.content[n] = parent;
            n = parentN;
        }
    },
  
    sinkDown: function(n) {
        // Look up the target element and its score.
        var length = this.content.length,
            element = this.content[n],
            elemScore = this.scoreFunction(element);

        // eslint-disable-next-line no-constant-condition
        while(true) {
        // Compute the indices of the child elements.
            var child2N = (n + 1) * 2, child1N = child2N - 1;
            // This is used to store the new position of the element,
            // if any.
            var swap = null;
            // If the first child exists (is inside the array)...
            if (child1N < length) {
                // Look it up and compute its score.
                var child1 = this.content[child1N],
                    child1Score = this.scoreFunction(child1);
                // If the score is less than our element's, we need to swap.
                if (child1Score < elemScore)
                    swap = child1N;
            }
            // Do the same checks for the other child.
            if (child2N < length) {
                var child2 = this.content[child2N],
                    child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score))
                    swap = child2N;
            }
  
            // No need to swap further, we are done.
            if (swap == null) break;
  
            // Otherwise, swap and continue.
            this.content[n] = this.content[swap];
            this.content[swap] = element;
            n = swap;
        }
    }
};

function HuffmanEncoding(str) {
    this.str = str;
    var count_chars = {};
    for (var i = 0; i < str.length; i++) 
        if (str[i] in count_chars) 
            count_chars[str[i]] ++;
        else 
            count_chars[str[i]] = 1;
 
    var pq = new BinaryHeap(function(x){return x[0];});
    for (var ch in count_chars) 
        pq.push([count_chars[ch], ch]);
 
    while (pq.size() > 1) {
        var pair1 = pq.pop();
        var pair2 = pq.pop();
        pq.push([pair1[0]+pair2[0], [pair1[1], pair2[1]]]);
    }
 
    var tree = pq.pop();
    this.encoding = {};
    this._generate_encoding(tree[1], "");
 
    this.encoded_string = "";
    for (var j = 0; j < this.str.length; j++) {
        this.encoded_string += this.encoding[str[j]];
    }
}
 
HuffmanEncoding.prototype._generate_encoding = function(ary, prefix) {
    if (ary instanceof Array) {
        this._generate_encoding(ary[0], prefix + "0");
        this._generate_encoding(ary[1], prefix + "1");
    }
    else {
        this.encoding[ary] = prefix;
    }
};
 
HuffmanEncoding.prototype.inspect_encoding = function() {
    for (var ch in this.encoding) {
        return "'" + ch + "': " + this.encoding[ch];
    }
};
 
HuffmanEncoding.prototype.decode = function(encoded) {
    var rev_enc = {};
    for (var ch in this.encoding) 
        rev_enc[this.encoding[ch]] = ch;
 
    var decoded = "";
    var pos = 0;
    while (pos < encoded.length) {
        var key = "";
        while (!(key in rev_enc)) {
            key += encoded[pos];
            pos++;
        }
        decoded += rev_enc[key];
    }
    return decoded;
};

export function huffmanCode(str) {
    if (str === null || str === undefined) {
        return "";
    }
    var huff = new HuffmanEncoding(str);
    huff.inspect_encoding(); // huffman encoding process
    var e = huff.encoded_string;
    return e;
}
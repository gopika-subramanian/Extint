

// DYNAMIC TOKEN 
const responseJson = pm.response.json();
const token = responseJson.access_token;

pm.collectionVariables.set('token', token); 
console.log("DYNAMIC TOKEN SET");
// DYNAMIC TOKEN END






// Main function to call other functions
function main() {
    console.log("STARTING TESTING");
    check0();
    check1();
    check2();
    check3();
    check4();
    check5();
    check6();
    check7();
    check8();
    console.log("TESTS RUN COMPLETED");
}

// Call the main function
main();




 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function check0() {
 // REMOVE HEADERS AND SEND REQUEST
console.log("REMOVE HEADERS AND SEND REQUEST");
var headersArray = [];
pm.request.headers.each(function(header) {
    headersArray.push({ key: header.key, value: header.value });
});

//console.log("All headers:", headersArray);
if (headersArray.length > 0) {
    for (var i = 0; i < headersArray.length; i++) {
    pm.request.headers.remove(headersArray[i].key);
    console.log("Removed header:", headersArray[i].key);
    pm.sendRequest(pm.request, function(err, response) {
        if (err) {
            console.error("Error:", err);
            var error0=1;
            return error0;
        } 
    });
    console.log(pm.response.code);
    }
}
}

// REMOVE HEADERS AND SEND REQUEST END

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function check1() {   
// REMOVE PARAMETERS AND SEND REQUEST 
console.log("REMOVE PARAMETERS AND SEND REQUEST");
var requestBody = JSON.parse(request.data);
var paramsArray = [];

Object.keys(requestBody).forEach(function(key) {
    var paramObject = {
        key: key,
        value: requestBody[key]
    };
    paramsArray.push(paramObject);
});


console.log("Parameters Array:", paramsArray);
const paramsArray2 = paramsArray;

for (var i = 0; i <= paramsArray.length; i++) {
    var paramsArray1 = paramsArray2;
    console.log(i);

    paramsArray1.splice(i, 1);

    console.log("Modified Parameters Array:", paramsArray1);

    
    var modifiedRequestBody = {};
    paramsArray1.forEach(function(param) {
        modifiedRequestBody[param.key] = param.value;
    });

    var modifiedRequestBodyString = JSON.stringify(modifiedRequestBody);
    request.data = modifiedRequestBodyString;

    console.log("Modified Request Body:", modifiedRequestBodyString);
    pm.sendRequest(pm.request, function(err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log(response);
        }
    });

}
}
// REMOVE PARAMETERS AND SEND REQUEST END

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function check2(){
// SEND NULL VALUES
console.log("SEND NULL VALUES FOR ALL PARAMETERS");
var requestBody = JSON.parse(request.data);

var paramsArray = [];

Object.keys(requestBody).forEach(function(key) {
    var paramObject = {
        key: key,
        value: requestBody[key]
    };
    paramsArray.push(paramObject);
});
console.log(paramsArray)
const parametersArray1=paramsArray;
for(var i=0;i<paramsArray.length;i++){
    current_dict=paramsArray[i]
    paramsArray[i].value=0

    pm.sendRequest
    console.log(pm.response.code);
}

pm.environment.set("paramsArray", JSON.stringify(paramsArray));
}
// SEND NULL VALUES END
    
 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   
    

 function check3(){
// SEND VARIED DATA TYPE VALUES
console.log("SEND VARIED DATA TYPE VALUES");
var requestBody = JSON.parse(request.data);

var paramsArray = [];

Object.keys(requestBody).forEach(function(key) {
    var paramObject = {
        key: key,
        value: requestBody[key]
    };
    paramsArray.push(paramObject);
});
var alphabetnumberArray = ["value", "VALUE","123456","6.000"]; 
var specialcharArray = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":"]; 
var spaceArray = [" ","%00","%2500","%0a","%09", "%011"]
console.log(paramsArray)

for(var i=0;i<paramsArray.length;i++){
    for(var j=0;j<alphabetnumberArray.length;j++){
    current_dict=paramsArray[i]
    paramsArray[i].value=alphabetnumberArray[j];

    pm.sendRequest
    console.log(paramsArray);
}}

for(var i=0;i<paramsArray.length;i++){
    for(var j=0;j<specialcharArray.length;j++){
    current_dict=paramsArray[i]
    paramsArray[i].value=specialcharArray[j];

    pm.sendRequest
    console.log(paramsArray);
}}


for(var i=0;i<paramsArray.length;i++){
    for(var j=0;j<spaceArray.length;j++){
    current_dict=paramsArray[i]
    paramsArray[i].value=spaceArray[j];

    pm.sendRequest
    console.log(paramsArray);
}}

pm.environment.set("paramsArray", JSON.stringify(paramsArray));
 }

// SEND VARIED DATA TYPE VALUES END

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function check4(){
// SEND SAME REGEX PATTERN VALUES
console.log("SEND SAME REGEX PATTERN VALUES");
var requestBody = JSON.parse(request.data);

var paramsArray = [];

Object.keys(requestBody).forEach(function(key) {
    var paramObject = {
        key: key,
        value: requestBody[key]
    };
    paramsArray.push(paramObject);
});

console.log(paramsArray)

var regexValues = [
    /\d+/, // Matches one or more digits
    /\d{3}/, // Matches exactly three digits
    /\d{1,3}/, // Matches one to three digits
    /(\d{3}-){2}\d{4}/, // Matches a phone number in the format XXX-XXX-XXXX
    /\w+/, // Matches one or more word characters (letters, digits, or underscores)
    /\b\w{5}\b/, // Matches five-letter words
    /\./, // Matches a period
    /\?/, // Matches a question mark
    /!/, // Matches an exclamation mark
    /[aeiou]/, // Matches any vowel
    /[A-Z]/, // Matches any uppercase letter
    /[-+]/, // Matches a plus or minus sign
    /\s+/, // Matches one or more whitespace characters
    /\b\s{2,}\b/, // Matches consecutive spaces
    /[\w\.-]+@[\w\.-]+\.\w+/, // Matches a basic email address format
    /(https?|ftp):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/ // Matches URLs
];

var exampleValues = [
    "12345", // Matches one or more digits
    "456", // Matches exactly three digits
    "789", // Matches one to three digits
    "123-456-7890", // Matches a phone number in the format XXX-XXX-XXXX
    "hello123", // Matches one or more word characters (letters, digits, or underscores)
    "world", // Matches five-letter words
   "hello.world", // Matches a period
    "What?", // Matches a question mark
    "Hello!", // Matches an exclamation mark
     "a", // Matches any vowel
    "X", // Matches any uppercase letter
    "-", // Matches a plus or minus sign
    "   ", // Matches one or more whitespace characters
    "  ", // Matches consecutive spaces
    "test@example.com", // Matches a basic email address format
    "https://example.com" // Matches URLs
];


for(var i=0;i<regexValues.length;i++){
    for(var j=0;j<paramsArray.length;j++){
  var regex = new RegExp(regexValues[i]);

  var match = regex.exec(paramsArray[j].value);


  if (match !== null) {
    console.log(exampleValues[i]);
    paramsArray[j].value=exampleValues[i];
    pm.sendRequest;
  }

    console.log(paramsArray);
}}


pm.environment.set("paramsArray", JSON.stringify(paramsArray));

// SEND SAME REGEX PATTERN VALUES END
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function check5(){
// SEND DDOS VALUES
console.log("SEND DDOS VALUES");
var requestBody = JSON.parse(request.data);

var paramsArray = [];

Object.keys(requestBody).forEach(function(key) {
    var paramObject = {
        key: key,
        value: requestBody[key]
    };
    paramsArray.push(paramObject);
});
var ddosnumberParam="1".repeat(600);
var ddosalphabetParam="a".repeat(600);
var ddoscharParam="#".repeat(600);
var ddsosArray=[];
ddsosArray.push(ddosnumberParam);
ddsosArray.push(ddosalphabetParam);
ddsosArray.push(ddoscharParam);
console.log(ddsosArray);

for(var i=0;i<paramsArray.length;i++){
    for(var j=0;j<ddsosArray.length;j++){
    current_dict=paramsArray[i]
    paramsArray[i].value=ddsosArray[j];

    pm.sendRequest
    console.log(pm.response.code);
}}

pm.environment.set("paramsArray", JSON.stringify(paramsArray));

// SEND DDOS VALUES END

}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function check6(){
// CHECK IF PASSWORD IS THERE AND SECURE
console.log("CHECK IF PASSWORD IS THERE AND SECURE");
function isSecurePassword(password) {
    
    var hasMinimumLength = password.length >= 8; 
    var hasUppercase = /[A-Z]/.test(password); 
    var hasLowercase = /[a-z]/.test(password); 
    var hasNumber = /\d/.test(password); 
    var hasSpecialChar = /[!@#$%^&*()\-_=+{};:,<.>]/.test(password); 

    
    return hasMinimumLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
}


var requestBody = pm.request.body;


var parsedBody;
try {
    parsedBody = JSON.parse(requestBody);
} catch (e) {
    console.error("Error parsing request body:", e);
}


if (parsedBody) {
   
    Object.keys(parsedBody).forEach(function(paramName) {
        
        if (paramName.toLowerCase().includes("password")) {
            console.log("Parameter name:", paramName);

            
            var paramValue = parsedBody[paramName];
            if (!isSecurePassword(paramValue)) {
                console.log("Password is NOT secure:", paramValue);
            } 
        }
    });
} 

// CHECK IF PASSWORD IS THERE AND SECURE END
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function check7(){
// CHECK IF LINKS EXIST IN RESPONSE AND UNSIGNED S3
console.log("CHECK IF LINKS EXIST IN RESPONSE AND UNSIGNED S3");
var responseBody = pm.response.text();
var urlRegex = /(https?:\/\/[^\s]+)/g;
var urls = responseBody.match(urlRegex);
if (urls && urls.length > 0) {
    console.log("Found", urls.length, "URL(s) in the response:");
    urls.forEach(function(url) {
        
        if (url.includes("s3") && url.length < 20) {
            console.log("UNSIGNED S3 LINK");
        }
    });
} 

// CHECK IF LINKS EXIST IN RESPONSE AND UNSIGNED S3 END
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function check8(){
// CHECK IF HEADER INJECTION WITH DIFFERENT METHODS
console.log("CHECK IF HEADER INJECTION WITH DIFFERENT METHODS");

var requestMethods = ["GET", "POST", "PUT", "DELETE"];

var requestUrl = pm.request.url.toString();


requestMethods.forEach(function(method) {

    console.log("Sending", method);
    var requestDetails = {
        url: requestUrl,
        method: method
    };

    pm.sendRequest(requestDetails, function(err, response) {
        if (err) {
            console.error("Error:", err);
        } else {
            console.log("Response for", method, "request:", response);
        }
    });
});

// CHECK IF HEADER INJECTION WITH DIFFERENT METHODS END
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function check9(){
// CHECK FOR RESOURCE OVER UTILISATION
console.log("CHECK FOR RESOURCE OVER UTILISATION");

var maxAttempts = 100;

function sendRequest() {
    pm.sendRequest(pm.request, function(err, response) {
        if (err) {
            console.error("Error:", err);
            return;
        }
        
        console.log("Response code:", response.code);

        if ((response.code>=200 && response.code<=299)!=1) {
            console.log("Exiting loop");
            return;
        }

        if (pm.info.iteration < maxAttempts) {
            pm.sendRequest(pm.request, sendRequest);
        }
    });
}

sendRequest();
// CHECK FOR RESOURCE OVER UTILISATION END
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

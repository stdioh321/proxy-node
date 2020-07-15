var url = require('url');

module.exports = {
    summary: 'a rule to hack response',
    *beforeSendResponse(requestDetail, responseDetail) {
        console.log(requestDetail.url);
        if (requestDetail.url.indexOf("http://www.superdownloads.com.br") > -1) {
            // console.log(requestDetail.requestOptions);
            const newResponse = responseDetail.response;
            newResponse.body = '+AnyProxy Hacked!\n\n';

            return new Promise((resolve, reject) => {
                setTimeout(() => { // delay
                    resolve({ response: newResponse });
                }, 100);
            });
        }
    },
    *beforeSendRequest(requestDetail) {
        if (requestDetail.url.indexOf("https://apkdetails.herokuapp.com/search.php") > -1) {
            var newOption = Object.assign({}, requestDetail.requestOptions);
            let q = requestDetail.requestOptions.path;
            q = q.replace(/q\=.*/i, "q=wifi");
            newOption.path = q;
            return { requestOptions: newOption };
        }

        return null;
    }
};
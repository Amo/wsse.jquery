var wsseSecuredUrl = "http://seetch.com/api/albums",
	user = "john.doe",
	secret = "shhhh !";

	$.ajax({
        type: "GET",
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Authorization",'WSSE profile="UsernameToken"');
            xhrObj.setRequestHeader("X-WSSE",wsseToken(user, secret));
        },
        url: wsseSecuredUrl,
        cache: false,
        success: function(data) { alert(data.length()); },
        dataType: 'xml'
    });
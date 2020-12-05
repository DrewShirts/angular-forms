// https://putsreq.com/
// PutsReq lets you record HTTP requests and fake responses like no other tool available.

// Used in: HTTP Form Posting and Data Access_Posting a Form
//var parsedBody = JSON.parse(request.body);
//parsedBody.id = '1234';
//response.body = parsedBody;

// Used in: HTTP Form Posting and Data Access_Handling POST Errors
response.status = 400;
response.body = {errorMessage: 'Some error goes here...'};

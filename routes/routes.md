***PATHS FOR /accounts/

GET /accounts/
works 
returns all accounts on the db

GET /accounts/id/:id
works 
returns single account with account id thats is passed as param :id

GET /accounts/acc/:accId 
works
returns single account with account number thats is passed as param :accId

GET /accounts/comp/:company
works
returns single account with the companies name. it is passes as param :company

POST /accounts/
must pass object below to add new account
works

PUT /accounts/:id
works
must pass the object below as well as the id of the account to update

//this is the what should be sent as json to the create and edit route
{
        	account_num : 12344,
            company : "some company",
            buyer : "some buyer",
            street : "some street",
            state : "ny",
            city : "city",
            neighborhood : "some neighborhood",
            zipcode : 10006,
            phone : "111111111",
            email : example@example.com,
            delivery_day : "Friday",
            delivery_time : "5:00pm",
            premises : "true",
            status : "new account"
        }
}

DELETE accounts/:id
must pass account id as param




var someone = {
    name : 'LeeHaNeul',
    whoami : function(){
        console.log(this);
    }
}

someone.whoami();

var myWhoAmI = someone.whoami;

myWhoAmI();

// THIS === 호출하는놈이다.



function receivesAFunction(callback){
    return callback()
}
const spy = chai.spy();
receivesAFunction(spy)

function returnsANamedFunction(){
    return function Named(){
        return "named"
    }
}

function returnsAnAnonymousFunction(){
    return () => "annonymous"
}
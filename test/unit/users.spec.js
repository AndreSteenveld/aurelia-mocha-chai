import { Users } from "../../src/users";

class HttpStub{
    fetch( url ){
        var response = this.itemStub;
        this.url = url;
        return new Promise( ( resolve ) => {
            resolve({ json: () => response });
        });
    }

    configure( func ){
    }
}

describe( "the Users module", () => {
    it( "sets fetch response to users", ( done ) => {
        var http = new HttpStub();
        var sut = new Users( http );
        var itemStubs = [ 1 ];
        var itemFake = [ 2 ];

        http.itemStub = itemStubs;
        sut.activate().then( () => {
            expect( sut.users ).to.equal( itemStubs );
            expect( sut.users ).to.not.equal( itemFake );
            done();
        });
    });
});

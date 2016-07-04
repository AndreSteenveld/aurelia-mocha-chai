import { ChildRouter } from "../../src/child-router";

class RouterStub{
    configure( handler ){
        handler( this );
    }

    map( routes ){
        this.routes = routes;
    }
}

describe( "the Child Router module", () => {
    var sut;
    var mockedRouter;

    beforeEach( () => {
        mockedRouter = new RouterStub();
        sut = new ChildRouter();
        sut.configureRouter( mockedRouter, mockedRouter );
    });

    it( "contains a router property", () => {
        expect( sut ).to.have.property( "router" );
    });

    it( "configures the heading", () => {
        expect( sut.heading ).to.equal( "Child Router" );
    });

    it( "should have a welcome route", () => {
        expect( sut.router.routes ).to.contain({ route: [ "", "welcome" ], name: "welcome", moduleId: "welcome", nav: true, title: "Welcome" });
    });

    it( "should have a users route", () => {
        expect( sut.router.routes ).to.contain({ route: "users", name: "users", moduleId: "users", nav: true, title: "Github Users" });
    });

    it( "should have a child router route", () => {
        expect( sut.router.routes ).to.contain({ route: "child-router", name: "child-router", moduleId: "child-router", nav: true, title: "Child Router" });
    });
});

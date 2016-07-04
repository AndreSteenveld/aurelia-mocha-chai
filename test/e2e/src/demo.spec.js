import { PageObjectWelcome } from "./welcome.po.js";
import { PageObjectSkeleton } from "./skeleton.po.js";
import { expect, default as chai } from "chai";
import chai_as_promised from "chai-as-promised";

chai.use( chai_as_promised );

describe( "aurelia skeleton app", function( ){
    let poWelcome;
    let poSkeleton;

    beforeEach( () => {
        poSkeleton = new PageObjectSkeleton();
        poWelcome = new PageObjectWelcome();

        return browser.loadAndWaitForAureliaPage( "http://localhost:9000" );
    });

    it( "should load the page and display the initial page title", () => {
        return expect( poSkeleton.getCurrentPageTitle() ).to.eventually.equal( "Welcome | Aurelia" );
    });

    it( "should display greeting", () => {
        expect( poWelcome.getGreeting() ).to.eventually.equal( "Welcome to the Aurelia Navigation App!" );
    });

    it( "should automatically write down the fullname", () => {
        poWelcome.setFirstname( "Rob" );
        poWelcome.setLastname( "Eisenberg" );

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
        browser.sleep( 200 );
        expect( poWelcome.getFullname() ).to.eventually.equal( "ROB EISENBERG" );
    });

    it( "should show alert message when clicking submit button", () => {
        expect( poWelcome.openAlertDialog() ).to.eventually.equal( true );
    });

    it( "should navigate to users page", () => {
        poSkeleton.navigateTo( "#/users" );
        expect( poSkeleton.getCurrentPageTitle() ).to.eventually.equal( "Github Users | Aurelia" );
    });
});

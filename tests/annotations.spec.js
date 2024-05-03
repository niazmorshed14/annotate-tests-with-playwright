import {test, expect} from "@playwright/test";
import exp from "constants";

//only
test.only ("Test 1", async({page})=>{    //only this test will be exucted
    console.log("This is test 1");
});

//skip
test.skip ("Test 2", async({page})=>{    //this test will be skipped
    console.log("This is test 2");
});

//skipping based on condition
test ("Test 4", async({page, browserName})=>{     //skipping test based on conditions
    console.log("This is test 4");
    if(browserName==="chromium")
    {
        test.skip()
    };
});

//fixme
test ("Test 5", async({page})=>{  //the test is marked as failed. 
                                  //contrary to the fail annotation, playwright will not perform this test. 
                                  //when the test runs slowly or crashes, we use fixme.
    test.fixme();
    console.log("This is test 5");
});


//fail
test ("Test 6", async({page})=>{
    test.fail(); //expected
    console.log("This is test 6");
    expect(1).toBe(3); //actual

    //the test is marked as failed. playwright will execute this test to confirm that it fails. 
    //playwright will complain & fail the test if the test does not fail.
    //when both expected & actual get failed, the test become passed.
    //this is a negative type of test

});

//fail based on condition
test ("Test 7", async({page, browserName})=>{  //fail annotation based on condition
    if (browserName==="chromfiium")
    {
        test.fail(); //expected
    }
    console.log("This is test 7");

});


//slow
test ("Test 8", async({page})=>{
    test.slow();
    await page.goto("https://demoblaze.com/");
    console.log("This is test 8");

    //test.slow() classifies the test as sluggish and triples the test timeout.
});

/**
 * Author: Olayinka Otuniyi with Jasmine StandAlone 3.3.0
 * Scallable functions only
 * https://jhcnjira.global.jhcn.net/rest/synapse/latest/public/testRun/{runID}  (exclude TR51362 to get individual test case id) 
 *  sap.ui.controller("com.sap.semAndon.controller.Main")
 **/

const updateJira = function (sID, stepStatus, actualRes) {
    $.ajax({
        type: "POST",
        url: "https://jhcnjira.global.jhcn.net/rest/synapse/latest/public/testRun/updateStep/",
        "Content-Type": "application/json; charset=utf-8",
        cache: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
            "Access-Control-Allow-Credentials": "false",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            'X-Atlassian-Token': 'nocheck',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        xhrFields: {
            withCredentials: true,
            crossDomain: true
        },
        dataType: "json",
        data: JSON.stringify({
            runStepId: sID,
            result: stepStatus,
            actualResult: actualRes,
            bugs: null
        }),
        success: function (res) {
            console.log("Good Post" + sID, JSON.stringify(res));
        },
        error: function (err) {
            console.log("Bad Post" + sID, JSON.stringify(err));
        }
        /*,
                complete: function(response) {
                    console.log("complete", response.responseText);
                }*/

    });
};

const caps = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};


describe("dash", function () {

    /* beforeEach(function () {
 env = new jasmine.Env()
});*/
    /*      afterEach(async function () {

        jasmine.getEnv().addReporter(new function () {
            this.specDone = function (result) {

                if (result.failedExpectations.length > 0) {
                    console.log(result);
                }
            };
            this.specDone = function (result) {
                if (result.passedExpectations.length > 0) {
                    console.log(result);
                }
            };
        });
    });*/
    var hours = new Date().setHours(10, 10, 00);

    var promise1 = new Promise(function (resolve, reject) {
        describe("dates dash", function () {
            it("current date returned with -s separators", function () {
                expect(controls.formatDate(new Date())).toEqual("2019-02-22");
            });
            resolve(this.getResult().status);
        });
    }).then(function (val) {
        let testStepID = 187313,
            actual = "2019-02-15";
        //val.replace(/^./, str => str.toUpperCase())
        //	console.log(testStepID, actual, caps(val));
        updateJira(testStepID, caps(val), actual);
    });

    var promise2 = new Promise(function (resolve, reject) {
        describe("times dash", function () {
            it("should round times slots to nearest 10", function () {
                expect(controls.roundTime(new Date(hours).getHours() + ":" + new Date(hours).getMinutes())).toEqual("10:10");
            });
            resolve(this.getResult().status);
        });
    }).then(function (val) {
        let testStepID = 187314,
            actual = new Date(hours).getHours() + ":" + new Date(hours).getMinutes();
        updateJira(testStepID, caps(val), actual);
    });

    var promise3 = new Promise(function (res, rej) {
        describe("ajax dash", function () {
            var successFn, errorFn;
            beforeEach(function () {
                successFn = jasmine.createSpy("successFn");
                errorFn = jasmine.createSpy("errorFn");

                $.ajax = spyOn(jQuery, "ajax").and.callFake(
                    function (options) {
                        if (/.*success.*/.test(options.url)) {
                            options.success();
                        } else {
                            options.error();
                        }
                    }
                );
            });
            it("success", function () {
                controls.sendMyAjax("../Andons/model/QMDO_Cell_Users.json", successFn, errorFn);
                expect(successFn).toHaveBeenCalled();
            });

            xit("Error", function () {
                controls.sendMyAjax("../Andons/model/QMDO_Cell_Users.json", successFn, errorFn);
                xexpect(errorFn).toHaveBeenCalled();
            });
            res(this.getResult().status);
        });
    }).then(function (val) {
        let testStepID = 187315,
            actual = "success";
        updateJira(testStepID, caps(val), actual);
    });

    var promise4 = new Promise(function (resolve, reject) {
        xdescribe("calendar dash", function () {
            xit("should return selected calendar date with - separators", function () {
                expect(controls.dateSelections()).toBeDefined();
            });
            resolve(this.getResult().status);
        });
    }).then(function (val) {
        let testStepID = 187316,
            actual = new Date(hours).getHours() + ":" + new Date(hours).getMinutes();
        // console.log(testStepID, caps(val), actual);
        updateJira(testStepID, caps(val) === "Pending" ? "NA" : caps(val), actual);
    });
});


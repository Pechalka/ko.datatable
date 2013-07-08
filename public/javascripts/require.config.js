var jam = {
    "packages": [
        {
            "name": "jam-datatables",
            "location": "javascripts/jam-datatables",
            "main": "media/js/jquery.dataTables.min.js"
        },
        {
            "name": "jquery",
            "location": "javascripts/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "javascripts/knockout",
            "main": "knockout.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "jam-datatables": {
            "deps": [
                "jquery"
            ]
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "jam-datatables",
            "location": "javascripts/jam-datatables",
            "main": "media/js/jquery.dataTables.min.js"
        },
        {
            "name": "ko.dataTables",
            "location": "javascripts/ko.dataTables",
            "main": "ko.dataTables.js"
        },
        
        {
            "name": "jquery",
            "location": "javascripts/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "javascripts/knockout",
            "main": "knockout.js"
        }
    ],
    "shim": {
        "knockout" : {
            "exports" : "ko"
        },
        "jam-datatables": {
            "deps": [
                "jquery"
            ]
        },
        "ko.dataTables" : {
            "deps" : ["jam-datatables", "knockout"]
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "jam-datatables",
            "location": "javascripts/jam-datatables",
            "main": "media/js/jquery.dataTables.min.js"
        },
        {
            "name": "ko.dataTables",
            "location": "javascripts/ko.dataTables",
            "main": "ko.dataTables.js"
        },
        {
            "name": "jquery",
            "location": "javascripts/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "javascripts/knockout",
            "main": "knockout.js"
        }
    ],
    "shim": {
        "knockout" : {
            "exports" : "ko"
        },
        "jam-datatables": {
            "deps": [
                "jquery"
            ]
        },
        "ko.dataTables" : {
            "deps" : ["jam-datatables", "knockout"]
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}
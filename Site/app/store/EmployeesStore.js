/**
* Creates a store instance for employees.
*/
Ext.define('DemoApp.store.EmployeesStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.data.proxy.LocalStorage',

    config: {
        storeId: 'employeesStore',
        autoLoad: true,
        model: 'DemoApp.model.EmployeeModel',
        sorters: 'lastName',
        grouper : function(record) {
            return record.get('lastName')[0];
        },

        proxy: {
            type: 'localstorage',
            id: 'demo-app-localstorage'
        },

        data: [
            { firstName: "George",                          lastName: "Washington",         showInGrid: true,   empCompulsory: 648.03, salarySacrifice: 143.40, memberVoluntary: 44 },
            { firstName: "John",                            lastName: "Adams",              showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Thomas",                          lastName: "Jefferson",          showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "James",                           lastName: "Madison",            showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "James",                           lastName: "Monroe",             showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "John",                            lastName: "Quincy Adams",       showInGrid: true,   empCompulsory: 875.83, salarySacrifice:      0, memberVoluntary: 120 },
            { firstName: "Andrew",                          lastName: "Jackson",            showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Martin",                          lastName: "Van Buren",          showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "William",                         lastName: "Henry Harrison",     showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "John",                            lastName: "Tyler",              showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "James",       middleInitial: "K", lastName: "Polk",               showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Zachary",                         lastName: "Taylor",             showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Millard",                         lastName: "Fillmore",           showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Franklin",                        lastName: "Pierce",             showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "James",                           lastName: "Buchanan",           showInGrid: true,   empCompulsory: 744.33, salarySacrifice:     90, memberVoluntary:  0 },
            { firstName: "Abraham",                         lastName: "Lincoln",            showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Andrew",                          lastName: "Johnson",            showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Ulysses",     middleInitial: "S", lastName: "Grant",              showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Rutherford",  middleInitial: "B", lastName: "Hayes",              showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "James",       middleInitial: "A", lastName: "Garfield",           showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Chester",                         lastName: "Arthur",             showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Grover",                          lastName: "Cleveland",          showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Benjamin",                        lastName: "Harrison",           showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "William",                         lastName: "McKinley",           showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Theodore",                        lastName: "Roosevelt",          showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "William",                         lastName: "Howard Taft",        showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Woodrow",                         lastName: "Wilson",             showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Warren",      middleInitial: "G", lastName: "Harding",            showInGrid: true,   empCompulsory: 555.55, salarySacrifice:   82.3, memberVoluntary: 220 },
            { firstName: "Calvin",                          lastName: "Coolidge",           showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Herbert",                         lastName: "Hoover",             showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Franklin",    middleInitial: "D", lastName: "Roosevelt",          showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Harry",       middleInitial: "S", lastName: "Truman",             showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Dwight",      middleInitial: "D", lastName: "Eisenhower",         showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "John",        middleInitial: "F", lastName: "Kennedy",            showInGrid: true,   empCompulsory:  89.23, salarySacrifice:  20.50, memberVoluntary: 15.99 },
            { firstName: "Lyndon",      middleInitial: "B", lastName: "Johnson",            showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Richard",                         lastName: "Nixon",              showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Gerald",                          lastName: "Ford",               showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Jimmy",                           lastName: "Carter",             showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Ronald",                          lastName: "Reagan",             showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "George",                          lastName: "Bush",               showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Bill",                            lastName: "Clinton",            showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "George",      middleInitial: "W", lastName: "Bush",               showInGrid: false,  empCompulsory:      0, salarySacrifice:      0, memberVoluntary:  0 },
            { firstName: "Barack",                          lastName: "Obama",              showInGrid: true,   empCompulsory: 950.87, salarySacrifice: 180.75, memberVoluntary: 50 }
        ]
    }
});

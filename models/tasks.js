  module.exports = app => {
       return {
         findAll: (params, callback) => {
           return callback([
             {title: "Buy some shoes"},
             {title: "Fix notebook"},
             {title: "Fix notebook keyboard"}
           ]);
         },
         findAllPromise: (params) => {
           return new Promise((resolve, reject)=> {
               resolve([
                {title: "Buy some shoes in PRo"},
                {title: "Fix notebook"},
                {title: "Fix notebook keyboard"}
              ]
               )
           });
         }
       };
    };

    
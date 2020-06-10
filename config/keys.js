if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}
else{
    module.exports = require('./dev')
}
//mongooseURI:"mongodb+srv://superuser:superuser@mailcluster-khot6.mongodb.net/<dbname>?retryWrites=true&w=majority"
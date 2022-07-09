module.exports = async function(context, req) {
    context.log('-------------------');

    const name = (req.query.name || (req.body && req.body.name));
    var res;
    context.log(req.query);
    res = "Esto es una prueba para ver que lo hago bien"
    context.res = {
        body: res
    };
}
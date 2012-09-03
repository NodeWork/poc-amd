
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.moduleb = function(req, res){
  res.render('module-b', { title: 'Express Module B ' });
};

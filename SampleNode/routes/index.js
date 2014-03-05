
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'CMPE_272: Node JS on BlueMix' });
};
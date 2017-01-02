describe('My first Gagarin test suite', function () {
  var server = meteor();
  it('should just work', function () {
    return server.execute(function () {
      console.log('I am alive!');
    });
  });

  var a = 3;
  it('should print stuff', function() {
    return server.execute(function(a) {
      console.log(a)
    }, [ a ]);
  });
});

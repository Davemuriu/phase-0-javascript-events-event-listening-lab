function addingEventListener() {
  const button = document.getElementById('button');
  button.addEventListener('click', function() {
    require ( './helpers.js' );
    
    const sinon = require('sinon');
    
    describe("index.js", () => {
      let input;
    
      beforeEach(function() {
        input = document.getElementById('button');
        sinon.spy(input, 'addEventListener');
      })
    
      it("binds an event listener in addingEventListener()", () => {
        addingEventListener();
        expect(input.addEventListener.called).to.be.true;
      })
    })
    
  });
}
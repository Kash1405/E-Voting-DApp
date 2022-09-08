var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){

    // testing if two candidates are initialized
    it("initialized with 2 candidates", function(){
        return Election.deployed().then(function(instance){
            return instance.candidateCount();
        }).then(function(count){
            assert.equal(count,2);
        });
    });

    // checking if the candidates are initialized with the correct values
    it("it initializes the candidates with the correct values", function() {
        return Election.deployed().then(function(instance) {
          electionInstance = instance;
          return electionInstance.candidates(1);
        }).then(function(candidate) { // candidate A test
          assert.equal(candidate[0], 1, "contains the correct id");
          assert.equal(candidate[1], "Candidate A", "contains the correct name");
          assert.equal(candidate[2], 0, "contains the correct votes count");
          return electionInstance.candidates(2);
        }).then(function(candidate) { // candidate B test
          assert.equal(candidate[0], 2, "contains the correct id");
          assert.equal(candidate[1], "Candidate B", "contains the correct name");
          assert.equal(candidate[2], 0, "contains the correct votes count");
        });
      });

});
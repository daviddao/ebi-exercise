//Test data
var dna_human_1 = "gcatcgatagagaagcatcgtacgtcagcccctgcccatgttagctagctatatattagctaaaaatttttcgcctaggaacacgactacgtcgatcgtagctacgtagctgactagctcgatcgatgcatgatgagagactagctagctagctgactgactgcatgctagctagctagctagctgactagctagctagtataataaagaggagaggaggctagctgactgtagatgatgctagtaggcaaaa"
var dna_human_2 = "gcatcgatggagacgcatcgtacgtcagcccctgcccatgttaggtagctatatattagctaaaaatttttcgcctaggaacacgactacgtcgatcgtagctacgtagctgactagctcgatcgatgcatgatgagagactagctagctagctgactggctgcatgctagctagctagccagctgactagctagctagtattataaagaggagaggaggctagctgactgtagatgacgctagtaggcaata"


/*
Exercise 1 - 
Basic Sequence Alignment Statistics
-------------
1.) Write a function returning the total number of a,c,g and t in a given dna sequence 
2.) Improve the function, it should return the proportion of a,c,g and t till index i
3.) Write a function which compares two dna strands (human_1 and human_2) and returning the index of variations
4.) Export the three functions seperately

Hint: Use CharAt(index) to access the char in a string at a specific index
Hint: Use push(element) to push an additional element to an array
Hint: Use exports.[name] = [originalFunctionName] to export a single function 
-------------
*/


function totalNumberOf1(dna){
  //Your Code!
  //Should return [number of a, number of c, number of g, number of t]
}

function totalNumberOf2(dna,index){
  //Your Code!
  //Should return [number of a / total, number of c / total, number of g /total, number of t /total]
  //till index i
}

function variations(dna1,dna2){
  //Your Code!
  //Should return [index of variation 1, index of variation 2, ... ]
}


// totalNumberOf(dna_human_1);
// totalNumberOf(dna_human_2,100);
// variations(dna_human_1,dna_human_2);

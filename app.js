//BudgetController
var budgetController = (function(){
  
  var Expense = function(id, description, value) {
this.id-id;
this.discription = description;
this.value=value;
};

var Income= function(id, description, value) {
this.id-id;
this.discription = description;
this.value=value;
};
  
var data ={
allItems:{
exp:[],
inc:[]
},
totals:{
exp:0,
inc:0
}
}
})();

//UIController
var UIController = (function(){
  var DOMstrings={
    inputType:'.add__type',
    inputDescription:'.add__description',
    inputValue:'.add__value',
    inputBtn:'.add__btn'
    
  };
  return{
    getInput:function(){
      return{
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue)
        
      };
    }

  };
  
})();

//Global App Controller
var controller= (function(budgetCtrl,UICtrl){
  var setupEventListener= function(){
    var DOM = UICtrl.getDOMstrings();
      document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
  
  document.addEventListener('keypress',function(event){
    
    if(event.keyCode ===13 || event.which ===13){
      ctrlAddItem();
    }
    
  });
  };
  
  
  var ctrlAddItem=function(){
   //Get the field input data
    var input=UICtrl.getInput();
    alert("works fine");
   //Add the item to the budget Controller
    
    //Add the item to the UI
    
    //Calculate the budget
    
    //Display the budget on UI
  };
  return {
        init:function(){
        console.log('Application has started.');
        setupEventListeners();
         }
          };

})(budgetController,UIController);

controller.init();
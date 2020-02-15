// Business Logic for AddressBook ---------
function centralBank() {
  this.accounts = [],
    this.currentId = 0
}

centralBank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

centralBank.prototype.addAccount = function (account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

centralBank.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}


// Business Logic for Accounts ---------
function Account(nameAccount, checkingAccount) {
  this.nameAccount = nameAccount,
    this.checkingAccount = checkingAccount
}
//account.prototype.toString = function accountToString() {
//return '' + this.checkingAccount;
//}

// User Interface Logic ---------
var centralBank = new centralBank();

///function displayAccountDetails(centralBankToDisplay){}


$(document).ready(function () {
  //attachAccountListeners();
  $("form#new-account").submit(function (event) {
    event.preventDefault();
    var inputtednameAccount = $("input#new-name-account").val();
    var inputtedcheckingAccount = parseInt($("input#new-checking-account").val());
    var newAccount = new Account(inputtednameAccount, inputtedcheckingAccount);
    centralBank.addAccount(newAccount);
    var checkingAccountDetail = newAccount.checkingAccount
    $("#output").text(checkingAccountDetail);
    console.log(centralBank.accounts);



    $(document).ready(function () {
      //attachAccountListeners();
      $("form#new-account2").submit(function (event) {
        event.preventDefault();
        var nameInput = $("input#new-name-account2").val();
        console.log(centralBank.accounts[0].nameAccount)
        for (i = 0; i <= centralBank.accounts.length; i++) {
          if (nameInput === centralBank.accounts[i].nameAccount) {
            var addNumbers = (parseInt($("input#add-checking-account").val())) + centralBank.accounts[i].checkingAccount;
            console.log(centralBank.accounts[i].checkingAccount)
            $("#output").text(addNumbers);
          }

          else { $("#output").text(checkingAccountDetail) }
        }

        //var minusNumbers = (parseInt($("input#minus-checking-account").val())) - checkingAccountDetail;


        //$("#output").text(minusNumbers);
        //console.log(minusNumbers)
        console.log(addNumbers);
        console.log(checkingAccountDetail);

      });




    });

  });

});


  // for (i = 0; i <= centralBank.accounts.length; i++) {
    //   if (newAccount.nameAccount === centralBank.accounts[i].nameAccount) {
    //     $("#output").text(newAccount.checkingAccount + centralBank.accounts[i].checkingAccount);
    //     console.log(centralBank.accounts[i]);
    //   } else { return 0 }
    // }
    //displayAccountDetails(addressBook);
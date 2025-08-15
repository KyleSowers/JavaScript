var  elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;     //declare variables
elForm = document.getElementById('formSignup');     // store elements
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {        // declare function
    var pack = this.options[this.selectedIndex].value;      // get selected option
    if (pack == 'monthly') {        // if monthly package
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';        //show this msg
    } else {        // otherwise
        elPackageHint.innerHTML = 'Wise choice!';       // show this msg
    }
}

function checkTerms(event) {        // declare function
    if (!elTerms.checked) {     // if checkbox ticked
        elTermsHint.innerHTML = 'You must agree to the terms.';     // show msg
        event.preventDefault();     // don't submit form
    }
}

// create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
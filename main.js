let opr=parseInt(prompt('Welcome to FCMB \n 1>Check Balance \n 2>Airtime \n 3>Transfer \n 4>Data \n 5>Payments \n 6>Loans \n 7>Statement \n 8>Self-Services'))
    if(opr==3){
        let transfer=parseInt(prompt('1>Account to Account \n 2>Account to Wallet \n 3>Main Menu'))
             if (transfer==1);
                let amount=parseInt(prompt('1>Enter amount'))
                    if (amount==1);
                        let enterAmount=parseInt(prompt('1>Enter account number:'))
                            if (enterAmount==1);
                                let enteraccountNumber=parseInt(prompt('Select recipient bank \n 1>Fidelity Bank \n 2>Gt Bank \n 3>Parkway \n 4>PAtrickGold MFB \n5> Other banks '))
                                    if (enteraccountNumber==2);
                                        let gtBank=parseInt(prompt('Transfer Amount:500 to OGUNMODEDE \nRIDWANULLAHI ABIODUN 0113540256 \n 1>Please enter your 4 digit PIN:'))
                                            if (gtBank==1); 
                                               alert("Transaction successful")


            }

else if (opr==2){
    let airtime=parseInt(prompt('1>Self \n 2>To others \n 0>Main Menu'))
        if (airtime==1);
            let amount=parseInt(prompt('1>Enter amount'))
                if (amount==1);
                    alert("Your request is being processed. \nDial *329*Amount# to buy airtime instant")
}
else if (opr==2){
    let airtime=parseInt(prompt('1>Self \n 2>To others \n 0>Main Menu'))
        if (airtime==2);
            let amount=parseInt(prompt('1>Enter amount'))
                if (amount==1);
                    let enterAmount=parseInt(prompt('1>Enter Mobile Number'))
                        if (enterAmount=1);
                            let enterMobileNumber=parseInt(prompt('Buy airtime Amount 200 to 07083422038. \n 1>Please enter your 4 digit PIN'))
                                if (enterMobileNumber=1);
                                    alert("Transaction successful")
}
            




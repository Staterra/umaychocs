function checking() {
    let first_name =  document.getElementById('firstname').value;
    let last_name =  document.getElementById('lastname').value;
    let email = document.getElementById('email_address').value;
    let phone = document.getElementById('phone_number').value;
    let itemtype = document.getElementById('item_type').value;
    let qty = document.getElementById('quantity').value;
    let cardnumber = document.getElementById('cc_number').value;
    let adress = document.getElementById('alamat').value;
    let pick_type = document.querySelector('input[name="p-type"]:checked')?.value;

    // first name
    if(first_name == '' || first_name == undefined) 
    {
        alert('Please fill your first name');
        return false;
    }

    // last name
    if(last_name == '' || last_name == undefined) 
    {
        alert('Please fill your last name');
        return false;
    }

    // for email valid
    if(email !== "")
    {
        var ad = email.indexOf("@");
        if(ad < 1)
        {
            alert('Invalid email address!');
            return false;
        }

        var titik = email.indexOf(".");
        if(titik <= ad + 2)
        {
            alert('Invalid email address');
            return false;
        }

        if(titik === email.length - 1)
        {
            alert('Invalid email address!');
            return false;
        }
    }
    else
    {
        alert('Plese fill your email address!');
        return false;
    }


    // phone
    if(phone !== "" && phone.length > 3)
    {
        for(var i = 0 ; i < phone.length ; i++)
        {
            if(isNaN(phone[i]))
            {
                alert('Phone numbers only accept numbers!');
                return false;
            }
        }
    }
    else
    {
        alert('Phone number must be at least 4 digits long')
        return false;
    }

    // product type
    if(itemtype == '')
    {
        alert('Please choose any product');
        return false;
    }

    // quantity
    if(qty !== "")
    {
        for(var i = 0 ; i < qty.length ; i++)
        {
            if(isNaN(qty[i]))
            {
                alert('Quantity must be filled using only numbers');
                return false;
            }
        }
        if(qty > 50)
        {
            alert('Maximum quantity per-order is 50 items!');
            return false;
        }
        if(qty < 1)
        {
            alert('Minimum item quantity is 1!');
            return false;
        }
    }
    else
    {
        alert('Please specify how many items did you want');
        return false;
    }

    // credit card
    if(cardnumber !== "")
    {
        if(cardnumber.length != 19)
        {
            alert('Please use the format XXXX XXXX XXXX XXXX');
            return false;
        }
        else
        {
            var ccArray = cardnumber.split(" ");
            if(ccArray.length != 4)
            {
                alert('Please use the format XXXX XXXX XXXX XXXX');
                return false;
            }
            else
            {
                for(var i = 0 ; i < 4 ; i++)
                {
                    if(isNaN(ccArray[i]))
                    {
                        alert('Invalid card number!');
                        return false;
                    }
                }
            }
        }
    }
    else
    {
        alert('Please fill your card number!');
        return false;
    }
    
    // adress
    if(adress == '')
    {
        alert('please fill your address!')
        return false;
    }

    // pickup type
    if(pick_type == undefined)
    {
        alert('Please select delivery option!')
        return false;
    }

    if(confirm('Is your credential already correct?') == false)
    {
        return false;
    }

    alert('Authentication Successful!');
    return true;
}

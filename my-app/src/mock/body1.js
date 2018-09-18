import React, { Component } from 'react';
// import '../css/site.min.css';

class Body1 extends Component {
  render() {
    return (
      <div>
      <div class="uia-payment-options ofx-payment-options">
         <div class="ofx-heading">
            <h2>Transfer Summary</h2>
         </div>
         <div class="ofx-heading">
         <img src="world.jpg" alt="huy" width="500" height="600" />
         </div>
         <div class="ofx-payment-options-details row">             
            <div class="uia-bank-transfer bank-transfer-options col-md-8">
               <h4>Total amount you send to OFX</h4>
 			   <h2><span class="text-primary">AUD 1,000,000</span></h2><br/>
			   <h6><span  >Due on 14 August 2018</span></h6><br/>

               <div class="row">
                  <div class="bank-transfer col-md-6">
                      <dl class="uia-bank-details">
                        <dt class="uia-payee">Your transfer</dt>
                        <dd>AUD 10,000</dd>
                        <dt class="uia-bsb">Your rate</dt>
                        <dd>0.7503</dd>
                        <dt class="uia-account-no">OFX Transfer Fee</dt>
                        <dd>AUD 0</dd>
                        <dt class="uia-swift">Other Fee(estimate)*</dt>
                        <dd>USD 25.00</dd>
                        <dt class="uia-iban">Payment method</dt>
                        <dd>Commonwealth Banl xxxx 4567</dd>
                        <dt class="uia-reference">Booked on</dt>
                        <dd>13 August 2018</dd>
                        <dt class="uia-address">Business name</dt>
                        <dd>Business
                        </dd>
                        <dt class="uia-address">Entered By</dt>
                        <dd>Name
                        </dd>
                     </dl>
                  </div>
                  <div class="bank-transfer col-md-6">
                     <h5>BANK OF AMERICA, N.A. SYDNEY</h5>
                     <dl class="uia-bank-details">
                        <dt class="uia-payee">Payee</dt>
                        <dd>OzForex Limited</dd>
                        <dt class="uia-bsb">Branch Code</dt>
                        <dd>232001</dd>
                        <dt class="uia-account-no">Account no.</dt>
                        <dd>15283119</dd>
                        <dt class="uia-swift">SWIFT / BIC</dt>
                        <dd>BOFAAUSXXXX</dd>
                        <dt class="uia-reference">Reference</dt>
                        <dd>125065508</dd>
                        <dt class="uia-address">Address</dt>
                        <dd>Bank of America N.A, Sydney Branch
                           Level 37, Governor Philip Tower, 1 Farrer Place
                           SYDNEY NSW 2000
                           Australia
                        </dd>
                     </dl>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
    );
  }
}

export default Body1;
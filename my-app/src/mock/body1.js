import React, { Component } from 'react';
import '../css/site.min.css';

class Body1 extends Component {
  render() {
    return (
      <div>
      <div className="uia-payment-options ofx-payment-options">
         <div className="ofx-heading">
            <h2>Transfer Summary</h2>
         </div>
         <div className="ofx-heading">
         <img src="world.jpg" alt="huy" width="auto" height="500" style={ { display: 'block', margin: '0 auto' } }/>
         </div>
         <div className="ofx-payment-options-details row">             
            <div className="uia-bank-transfer bank-transfer-options col-md-8">
               <h4>Total amount you send to OFX</h4>
 			   <h2><span className="text-primary">AUD 1,000,000</span></h2><br/>
			   <h6><span  >Due on 14 August 2018</span></h6><br/>

               <div className="row">
                  <div className="bank-transfer col-md-6">
                      <dl className="uia-bank-details">
                        <dt className="uia-payee">Your transfer</dt>
                        <dd>AUD 10,000</dd>
                        <dt className="uia-bsb">Your rate</dt>
                        <dd>0.7503</dd>
                        <dt className="uia-account-no">OFX Transfer Fee</dt>
                        <dd>AUD 0</dd>
                        <dt className="uia-swift">Other Fee(estimate)*</dt>
                        <dd>USD 25.00</dd>
                        <dt className="uia-iban">Payment method</dt>
                        <dd>Commonwealth Banl xxxx 4567</dd>
                        <dt className="uia-reference">Booked on</dt>
                        <dd>13 August 2018</dd>
                        <dt className="uia-address">Business name</dt>
                        <dd>Business
                        </dd>
                        <dt className="uia-address">Entered By</dt>
                        <dd>Name
                        </dd>
                     </dl>
                  </div>
                  <div className="bank-transfer col-md-6">
                     <h5>BANK OF AMERICA, N.A. SYDNEY</h5>
                     <dl className="uia-bank-details">
                        <dt className="uia-payee">Payee</dt>
                        <dd>OzForex Limited</dd>
                        <dt className="uia-bsb">Branch Code</dt>
                        <dd>232001</dd>
                        <dt className="uia-account-no">Account no.</dt>
                        <dd>15283119</dd>
                        <dt className="uia-swift">SWIFT / BIC</dt>
                        <dd>BOFAAUSXXXX</dd>
                        <dt className="uia-reference">Reference</dt>
                        <dd>125065508</dd>
                        <dt className="uia-address">Address</dt>
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
import React, { Component } from 'react';
import '../css/site.min.css';

export default ({ mapUrl= 'img1.jpg'}) => 
<div>
<div className="uia-payment-options ofx-payment-options">
          <div className="ofx-heading">
   <img src={mapUrl} alt="Trackr" width="auto" height="500" style={ { display: 'block', margin: '0 auto' } }/>
   </div>
   <div className="ofx-payment-options-details row">             
      <div className="uia-bank-transfer bank-transfer-options  col-sm-12">
         

         <div class="row">
   <div class="bank-transfer col-sm-4"></div>
            <div class="bank-transfer col-sm-3"  style={ { padding: '0px'} }>
    <h4>Total amount you send to OFX</h4>
    <h2><span class="text-primary">AUD 1,000,000</span></h2> 
      <h6><span  >Due on 14 August 2018</span></h6><br/>
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
   
           <div class="bank-transfer col-sm-3">
                <dl class="uia-bank-details">
      <h4>Recipients receive</h4>
    <h2><span class="text-primary">USD  719,425</span></h2> 
      <h6><span  >Funds should be received by 17 August 2018</span></h6><br/>
                  <dt class="uia-payee"><strong>Olivia Felix ~</strong></dt>
                  <dd></dd>
                  <dt class="uia-bsb">This recipient receives</dt>
                  <dd>USD 5,000</dd>
                  <dt class="uia-account-no">SWIT/BIC</dt>
                  <dd>BOFAUS6S</dd>
                  <dt class="uia-swift">Account number</dt>
                  <dd>8900326478</dd>
                  <dt class="uia-iban">Reason</dt>
                  <dd>Other</dd>
                  <dt class="uia-reference">Reference</dt>
                  <dd>Reference</dd>
                  <dt class="uia-address"><strong>Attach recipient later ~</strong></dt>
                  <dd>
                  </dd>
                  <dt class="uia-address"><strong>Third recipient ~</strong></dt>
                  <dd>
                  </dd>
               </dl>
            </div>
      <div class="bank-transfer col-sm-2"></div>
         </div>
      </div>
   </div>
</div>
</div>;
import React, { Component } from 'react';

class Body2 extends Component {
  render() {
    return (
      <div>
          <div class="transfer-details uia-transfer-details"><div class="ofx-heading"><h2>Transfer Details</h2></div><div class="transfer-details-body row uia-transfer-details-body "><div class="col-md-4"><dl class="uia-transfer-details-basic"><dt class="uia-transfer-id">Transfer ID</dt><dd>9A2A2484</dd><dt class="uia-transfer-type">Type</dt><dd>Spot</dd><dt class="uia-entered-on">Entered on</dt><dd>6 Sep 2018</dd><dt class="uia-pay-by">Pay by</dt><dd>7 Sep 2018</dd><dt class="uia-status">Status</dt><dd>Awaiting Funds</dd></dl></div><div class="col-md-4"><dl class="uia-transfer-details-currency"><div><dt class="uia-business-name">Business name</dt><dd>Company removed</dd></div><dt class="uia-entered-by">Entered by</dt><dd>FN46 LN46</dd><dt class="uia-base-amount">You transfer</dt><dd>GBP 25,000.00</dd><dt class="uia-transfer-fee">Transfer fee</dt><dd>Free</dd><dt class="uia-customer-rate">Your rate</dt><dd>GBP/USD 1.3522</dd><dt class="uia-total-amount">Total amount to OFX</dt><dd>GBP 25,000.00</dd></dl></div><div class="col-md-4 col-recipients"><div class="ofx-heading"><h2>Recipients</h2></div><div class="row recipients uia-recipient"><div class="section-label col-md-3">Recipient</div><div class="col-md-9"><dl class="recipient"><div class="uia-name name"><dt>Name:</dt><dd>Attach recipient later</dd></div><div class="uia-reason reason"><dt>Reason:</dt><dd>Bill payment, expenses</dd></div><div class="uia-amount amount"><dt>Amount:</dt><dd>USD 33,805.00</dd></div></dl></div></div></div></div></div>
      </div>
    );
  }
}

export default Body2;
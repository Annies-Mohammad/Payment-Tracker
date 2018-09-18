import React, { Component } from 'react';
// import '../css/site.min.css';

class Body1 extends Component {
  render() {
    return (
      <div>
          <div class="uia-payment-options ofx-payment-options"><div class="ofx-heading"><h2>Send funds to OFX using customer reference <span class="text-primary">125065508</span></h2></div><div class="ofx-payment-options-details row"><div class="payment-type col-md-4 uia-pingit"><h3 class="payment-type-title with-icon">Pingit</h3><div class="payment-type-icon icon-pingit"></div><div class="payment-type-instructions with-icon"><p>Pingit is a mobile payments service provided by Barclays. Choose 'Pay to a Business' in the app and enter the details below:</p></div><div class="clearfix visible-sm visible-xs"></div><div class="payment-type-details with-icon"><dl class="uia-pingit-details"><dt class="uia-biller">Pay to</dt><dd>UKForex</dd><dt class="uia-biller-reference">Message</dt><dd>125065508</dd></dl></div></div><div class="uia-bank-transfer bank-transfer-options col-md-8"><h3>Bank transfer</h3><div class="row"><div class="bank-transfer col-md-6"><h5>Barclays Bank</h5><dl class="uia-bank-details"><dt class="uia-payee">Payee</dt><dd>UKForex Limited</dd><dt class="uia-bsb">Branch Code</dt><dd>203230</dd><dt class="uia-account-no">Account no.</dt><dd>30419362</dd><dt class="uia-swift">SWIFT / BIC</dt><dd>BARCGB22XXX</dd><dt class="uia-iban">IBAN</dt><dd>GB64BARC20323030419362</dd><dt class="uia-reference">Reference</dt><dd>125065508</dd><dt class="uia-address">Address</dt><dd>Moorgate 2
London London EC2M 6SX
United Kingdom</dd></dl></div><div class="bank-transfer col-md-6"><h5>BANK OF AMERICA, N.A. SYDNEY</h5><dl class="uia-bank-details"><dt class="uia-payee">Payee</dt><dd>OzForex Limited</dd><dt class="uia-bsb">Branch Code</dt><dd>232001</dd><dt class="uia-account-no">Account no.</dt><dd>15283119</dd><dt class="uia-swift">SWIFT / BIC</dt><dd>BOFAAUSXXXX</dd><dt class="uia-reference">Reference</dt><dd>125065508</dd><dt class="uia-address">Address</dt><dd>Bank of America N.A, Sydney Branch
Level 37, Governor Philip Tower, 1 Farrer Place
SYDNEY NSW 2000
Australia</dd></dl></div></div></div></div></div>
      </div>
    );
  }
}

export default Body1;
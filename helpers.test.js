describe('rb- test helper functions sumPaymentTotal and calculateTipPercent', function () {
  beforeAll(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
  });

  it('-rb tests correct bill amount', function () {
    // expect(someValue).toEqual('');
    expect(sumPaymentTotal('billAmt')).toEqual(100);
  });
  it('-rb tests correct tip amount', function () {
    // expect(someValue).toEqual('');
    expect(sumPaymentTotal('tipAmt')).toEqual(15);
  });
  it('-rb tests correct tip percent', function () {
    // expect(someValue).toEqual('');
    expect(sumPaymentTotal('tipPercent')).toEqual(15);
  });

  afterAll(function () {
    // teardown logic

    allPayments = {};
    submitPaymentInfo();
    summaryTable.innerHTML = '';
    paymentTbody.remove();
  });
});

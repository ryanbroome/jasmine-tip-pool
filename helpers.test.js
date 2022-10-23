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
  it('-rb appendDeleteBtn() test delete btn has been added to tr', function () {
    expect(paymentTbody.firstChild.lastChild.innerText).toEqual('X');
    expect(paymentTbody.firstChild.childElementCount).toEqual(4);
  });

  // it('checks that appendDeleteBtn adds the button', function () {
  //   expect(testValue).someMatcher(testAnswer);
  // });
  afterAll(function () {
    // teardown logic
    allPayments = {};
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = ' ';
    summaryTds[1].innerHTML = ' ';
    summaryTds[2].innerHTML = ' ';
  });
});
